# hg-au.com website

Live marketing site at **hg-au.com** — hand-authored static HTML/CSS/JS served by **GitHub Pages**.
Repo: `holistic-governance/website`. Separate from the `hg-au` product monorepo.

> **Publishing = push to `main`.** That's the deploy. There is no build gate.
> The flat top-level layout is intentional: on GitHub Pages every root file maps to a public
> URL (`about.html` → `hg-au.com/about.html`), so **moving or renaming served files breaks
> URLs, inbound links, image references, social-card previews, and `sitemap.xml`.** Tidy the
> local/untracked cruft, not the served structure.

See `CLAUDE.md` for full working conventions and the regulated-sector guardrails, and
`SEO-PLAN.md` for the standing SEO plan and NAP source-of-truth.

## Layout

### Pages (public URLs — do not move/rename)
Top-level `*.html` are the live pages: `index.html`, `about.html`, service pages
(`healthcare.html`, `ai-technology.html`, `app-development.html`,
`reporting-dashboards.html`, …), `assurance-briefing.html`, enquiry pages
(`bi-enquiry.html`, `proposal-enquiry.html`, …), `privacy.html`, `news.html`.

- `styles.css` — shared stylesheet; pages also inline page-specific `<style>`.
- `articles/` — blog/insight pages. **Generated** from `articles/*.md` by `build-articles.js`
  (`npm run build`). Edit the `.md`, not the `.html`. `*.json` here are article indexes.
- `topics/*.md` — AI-indexed reference docs (served `text/markdown`), not linked in nav.
- `downloads/`, `enquiries/`, `naomi/`, `marketing/` — supporting assets (see CLAUDE.md).
  `marketing/` is internal ad/campaign source, not linked from the site.

### Discoverability / machine layer
- `llms.txt`, `llms-full.txt` — curated site map + full content for AI ingestion.
- `robots.txt`, `sitemap.xml` — crawler allow-list and index (includes `topics/*.md`).
- JSON-LD schema lives in each page `<head>`.

### Build & server scripts (kept at root by dependents — do not move)
- `build-articles.js` — `articles/*.md` → `articles/*.html`. Run via `npm run build`.
- `build-resources.js` — pulls resources from the dashboard API into `resources.html`
  **between markers only**. Run automatically every 6h by
  `.github/workflows/publish-resources.yml`, which auto-commits `resources.html`.
- `build-og-image.js` — generates OG share images (uses `sharp`).
- `server.js` — small gated admin area (`npm start`). `admin.html`, `login.html`.
- `generate-mfa.js`, `manage-users.js` — admin/auth helpers.

### Images (referenced across many pages — do not move/rename)
`favicon.png`, `logo-hg-trimmed.png`, `og-image-v3.png`, `headshotimage.png`, partner/logo
PNGs, etc. Changing an `og-image` filename resets cached social-media link previews.

## Not-junk files that look like junk
- **`b28a40dc768afeabbe32943e3af7f361.txt`** — a **search-engine verification / IndexNow key
  file** (its contents are its own filename). Must sit at web root. **Do not delete or move.**
- `CNAME` — custom-domain config for GitHub Pages. **Keep.**
- `.nojekyll` — tells Pages to skip Jekyll processing. **Keep.**

## Local / untracked (gitignored — safe to clear locally, never committed)
- `node_modules/`, `.env`, `admin-users.json`, `admin-audit.log`, `.DS_Store`

## Common tasks
```sh
npm install            # once
npm run build          # regenerate articles/*.html from articles/*.md
npm start              # run the local admin server (server.js)
```
Then commit + push `main` to publish.
