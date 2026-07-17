# Custom Power BI — Social Ad Creatives

Branded ad creatives promoting custom Power BI dashboard builds, linking to
`/reporting-dashboards.html`. Design matches the site (navy + sky palette,
Cormorant Garamond / DM Sans, HG logo).

## Files

| Source (HTML)                          | Rendered (PNG)                               | Size       | Platform |
|----------------------------------------|----------------------------------------------|------------|----------|
| `ad-instagram-feed-1080x1350.html`     | `hg-powerbi-instagram-feed-1080x1350.png`    | 1080×1350  | Instagram feed (portrait) |
| `ad-instagram-story-1080x1920.html`    | `hg-powerbi-instagram-story-1080x1920.png`   | 1080×1920  | Instagram / Facebook story |
| `ad-linkedin-1200x627.html`            | `hg-powerbi-linkedin-1200x627.png`           | 1200×627   | LinkedIn feed (landscape) |

`logo.png` is a local copy of `logo-hg-trimmed.png` referenced by the HTML.

## Current copy

- **Headline:** Custom *Power BI* dashboards
- **Subhead:** Decision-ready reporting built around **your** data — not an off-the-shelf template.
- **Value props:**
  1. Live regulatory, risk & quality metrics
  2. Built for boards, executives, quality & operations
  3. One source of truth across your whole organisation
- **Dashboard metrics:** 94% ▲ Hand hygiene compliance · 3.4 ▼ Falls / 1,000 bed days · 6.2% ▼ 28-day readmissions
- **CTA:** Book a build → · hg-au.com

> Dashboard metrics are illustrative sample values (recognisable NSQHS-style
> quality indicators), not HG's own reported results.

## Suggested post caption

> 📊 One source of truth for your whole organisation — not just the boardroom.
>
> We build custom Power BI dashboards for healthcare and regulated
> organisations: live regulatory, risk and quality metrics that work for
> boards, executives, quality teams and operations alike — designed around
> your data, not a template.
>
> → Explore custom dashboard builds at hg-au.com
>
> #PowerBI #DataGovernance #ClinicalGovernance #QualityImprovement
> #HealthcareAnalytics #Operations #BoardReporting #BusinessIntelligence

## Re-rendering

Edit the relevant HTML, then re-render with headless Chrome (2× scale for
crisp output). From this folder:

```sh
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

"$CHROME" --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=2 \
  --window-size=1080,1350 --screenshot=hg-powerbi-instagram-feed-1080x1350.png \
  "file://$PWD/ad-instagram-feed-1080x1350.html"

"$CHROME" --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=2 \
  --window-size=1080,1920 --screenshot=hg-powerbi-instagram-story-1080x1920.png \
  "file://$PWD/ad-instagram-story-1080x1920.html"

"$CHROME" --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=2 \
  --window-size=1200,627 --screenshot=hg-powerbi-linkedin-1200x627.png \
  "file://$PWD/ad-linkedin-1200x627.html"
```
