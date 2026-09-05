// check-llms-sync.js — guards the AI-discoverability machine layer against drift.
//
// Verifies that every public article and every live (non-DRAFT) topic dossier is
// present in llms.txt, llms-full.txt and sitemap.xml, and that every sitemap URL
// resolves to a real file. Run standalone (`npm run check-llms`) or after a build.
// Exits 1 on drift so it can gate CI later; prints WARN-only with --warn.

const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://hg-au.com';
const warnOnly = process.argv.includes('--warn');

const llms = fs.readFileSync(path.join(__dirname, 'llms.txt'), 'utf-8');
const llmsFull = fs.readFileSync(path.join(__dirname, 'llms-full.txt'), 'utf-8');
const sitemap = fs.readFileSync(path.join(__dirname, 'sitemap.xml'), 'utf-8');

const problems = [];

// 1. Every article page listed everywhere
for (const f of fs.readdirSync(path.join(__dirname, 'articles')).filter(f => f.endsWith('.html'))) {
  const url = `${SITE_URL}/articles/${f}`;
  if (!llms.includes(url)) problems.push(`llms.txt missing article: ${url}`);
  if (!llmsFull.includes(url)) problems.push(`llms-full.txt missing article: ${url}`);
  if (!sitemap.includes(url)) problems.push(`sitemap.xml missing article: ${url}`);
}

// 2. Every live topic dossier listed everywhere (DRAFTs are exempt until sign-off)
for (const f of fs.readdirSync(path.join(__dirname, 'topics')).filter(f => f.endsWith('.md'))) {
  const head = fs.readFileSync(path.join(__dirname, 'topics', f), 'utf-8').slice(0, 2000);
  if (/^lastReviewed:\s*DRAFT/m.test(head)) continue;
  const url = `${SITE_URL}/topics/${f}`;
  if (!llms.includes(url)) problems.push(`llms.txt missing topic: ${url}`);
  if (!llmsFull.includes(url)) problems.push(`llms-full.txt missing topic: ${url}`);
  if (!sitemap.includes(url)) problems.push(`sitemap.xml missing topic: ${url}`);
}

// 3. Every sitemap URL resolves to a real file
for (const m of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) {
  const rel = m[1].replace(`${SITE_URL}/`, '') || 'index.html';
  if (!fs.existsSync(path.join(__dirname, rel))) problems.push(`sitemap.xml lists missing file: ${m[1]}`);
}

// 4. llms.txt / llms-full.txt must not reference retired or missing local pages
for (const src of ['llms.txt', 'llms-full.txt']) {
  const text = src === 'llms.txt' ? llms : llmsFull;
  for (const m of text.matchAll(new RegExp(`${SITE_URL}/([a-zA-Z0-9_/-]+\\.(?:html|md))`, 'g'))) {
    if (!fs.existsSync(path.join(__dirname, m[1]))) problems.push(`${src} references missing file: ${m[0]}`);
  }
}

// 5. Staleness nudge: dossiers carry a lastReviewed date; flag any older than 6 months
const STALE_DAYS = 180;
for (const f of fs.readdirSync(path.join(__dirname, 'topics')).filter(f => f.endsWith('.md'))) {
  const head = fs.readFileSync(path.join(__dirname, 'topics', f), 'utf-8').slice(0, 2000);
  const m = head.match(/^lastReviewed:\s*(\d{4}-\d{2}-\d{2})/m);
  if (!m) continue;
  const age = Math.floor((Date.now() - new Date(m[1]).getTime()) / 86400000);
  if (age > STALE_DAYS) console.warn(`[STALE] topics/${f} lastReviewed ${m[1]} (${age} days ago) — due for SME re-review`);
}

if (problems.length) {
  const tag = warnOnly ? 'WARN' : 'DRIFT';
  for (const p of problems) console.error(`[${tag}] ${p}`);
  console.error(`\n${problems.length} machine-layer drift issue(s) found.`);
  if (!warnOnly) process.exit(1);
} else {
  console.log('Machine layer in sync: llms.txt, llms-full.txt and sitemap.xml all consistent.');
}
