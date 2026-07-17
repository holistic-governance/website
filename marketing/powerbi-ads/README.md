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

### Real-dashboard versions (recommended — a 2-slide carousel)

These feature actual screenshots of the live "Publish to web" demo report
(embedded on `/reporting-dashboards.html`) in a "product window" frame, instead
of the mock dashboard.

| Source (HTML)                       | Rendered (PNG)                            | Shows |
|-------------------------------------|-------------------------------------------|-------|
| `ad-real-board-1080x1350.html`      | `hg-powerbi-real-board-1080x1350.png`     | Board Summary page |
| `ad-real-incident-1080x1350.html`   | `hg-powerbi-real-incident-1080x1350.png`  | Incident Detail page |

`pbi-board-clean.png` / `pbi-incident-clean.png` are the captured Power BI pages
(nav bar cropped off at the report footer). To refresh them, screenshot the
published report with headless Chrome and re-crop above the Power BI chrome:

```sh
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
BASE="https://app.powerbi.com/view?r=eyJrIjoiNDdiNWQzMDEtNWFlMC00YjZiLWE3MzItMjNmNjhkZjlmNDlhIiwidCI6IjAyNGFkNzQzLTNmYmYtNDJmYy1iYTEwLWY5NTQ0YTY1ZTBiOCJ9"
# Board Summary page = default; Incident Detail page = &pageName=52bbaeec0e3408f3cf7f
"$CHROME" --headless=new --window-size=2560,1600 --force-device-scale-factor=1.5 \
  --virtual-time-budget=25000 --run-all-compositor-stages-before-draw \
  --screenshot=capture.png "$BASE&pageName=52bbaeec0e3408f3cf7f"
# then crop off the bottom Power BI nav bar (sharp: extract top rows down to the report footer)
```

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
