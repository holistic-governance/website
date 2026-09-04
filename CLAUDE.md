# hg-au.com website — project context for Claude Code

> This is the **live marketing site** at hg-au.com (org repo `holistic-governance/website`).
> Static HTML/CSS/JS. **Publishing = push to `main`** (GitHub Pages). No CI build gate.
> Separate from the `hg-au` monorepo (product code). Auto-loaded each session — keep it short and current.

## What this is
Hand-authored static site: top-level `*.html` pages, `articles/*` (built from `.md` via `build-articles.js`),
`topics/*.md` (AI reference docs), plus `server.js`/`admin.html` for a small gated area. `styles.css` is shared;
pages inline page-specific `<style>`. Brand: navy editorial, Cormorant Garamond + DM Sans, sky-blue accent.

## Build / publish
- **Publish:** commit + push `main`. That's the deploy. (Naomi pushes herself.)
- `build-articles.js` — renders `articles/*.md` → `articles/*.html` (`npm run build`). Optional frontmatter
  `alsoPublishedIn: Publication | YYYY-MM-DD | https://url` (multiple entries split with ` ;; `) renders a
  "Published in" note under the byline and adds JSON-LD `sameAs`; also hand-add the piece to the
  "In The Press" band on `resources.html` (green accent) + About "Featured In" end section and the article's llms.txt/llms-full.txt entries.
- `build-resources.js` — pulls resources from the dashboard API and injects into `resources.html`
  **between markers only** (`<!-- RESOURCES_GRID_START/END -->`, `<!-- RESOURCES_JSONLD_START/END -->`).
  Hand-edit `resources.html` ONLY outside those marker regions or your change is overwritten on next build.

## Backend AI & SEO discoverability (how we do discoverability here)
**Principle (Naomi's directive, 2026-08-08): deliver SEO + AI discoverability through the hidden/machine layer —
NOT by adding visible pages or "solutions".** Do not spin up a big human-facing content/pillar page to rank for a
term. Put the value where crawlers and AI assistants read it and visitors don't browse. The layers:

- **`llms.txt` + `llms-full.txt`** (served `text/plain; charset=utf-8`) — curated site map + full content for AI
  ingestion. Keep entries in sync when pages/topics change. Sections: Core pages · Services · Articles · Topics ·
  Contact · Optional.
- **`topics/*.md`** — AI-indexed reference docs (served `text/markdown`), *"reference materials rather than
  human-navigable pages"*. Not linked in nav. This is the primary home for citable, machine-readable subject
  matter (e.g. `aged-care-board-responsibilities.md` covers Aged Care Act 2024 ss 12/179/180/181). Enrich these
  instead of building visible pages.
- **JSON-LD schema** in each page `<head>` — the invisible SEO/entity layer. Conventions:
  - Person `@id` = `https://hg-au.com/about.html#naomi`; Organization `@id` = `https://hg-au.com/#organization`;
    Website `@id` = `https://hg-au.com/#website`. Reference these, don't redefine.
  - Typical blocks: `Service`/`Article` + `WebPage` (+ `speakable`) + `BreadcrumbList`, and `FAQPage` where FAQs
    are visible. Use `DefinedTermSet`/`DefinedTerm` (+ `url` → the topic doc) for invisible entity/glossary data.
  - **`FAQPage` must mirror FAQs actually visible on the page** — Google policy. Never inject hidden FAQ markup
    with no on-page counterpart; use `DefinedTermSet`/`about`/`mentions` for head-only facts instead.
- **`sitemap.xml`** — includes the `topics/*.md` reference docs (added 2026-08-08) so search engines index the
  machine layer, not just human pages. Add new topics here.
- **`robots.txt`** — explicit allow-list for AI crawlers (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot,
  Google-Extended, CCBot, etc.); references `sitemap.xml` and `llms.txt`. Keep AI bots permissive.
- Internal linking still matters for traditional SEO — but prefer contextual links inside existing copy over
  new visible cards/sections. See `SEO-PLAN.md` for the standing plan, NAP source-of-truth, and todos.

## Guardrails (this is a regulated-sector brand)
- **Never fabricate** legislation, section numbers, dates, or penalty figures. Source regulatory facts from the
  verified `topics/*.md` (each cites the Act/Rules + a review date). Penalty unit = **$330 as at 2026**, re-indexed
  1 July — always caveat "verify current value". Mark unknowns `VERIFY`.
- **No overclaiming** — "supports assessment", never "guarantees compliance"; decision-support, not legal/clinical
  advice. Independent/advisory deliverables carry a disclaimer.
- **Content = the QA gate.** Substantive changes to `topics/*.md`, standards copy, or regulatory claims should be
  reviewed by Naomi (RN + lead auditor) before publish; if you materially edit a topic doc, flag that its
  `lastReviewed` date needs bumping on her sign-off (don't fake a review date).
- **Secrets never committed** (`.env` gitignored; Secret Manager). `/admin.html`, `/login.html`, `/enquiries/`,
  `/downloads/` are `Disallow`ed for crawlers.

## Conventions
- Match the surrounding page: same nav/footer/gtag block, inline `<style>`, `fade-in` scroll animation, en-AU spelling.
- Keep NAP (name/address/phone) consistent with `SEO-PLAN.md` and `llms.txt` Contact.
