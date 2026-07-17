# BI Campaign — Funnel & Pipeline Strategy

Custom Power BI dashboard builds for healthcare & aged care (Holistic Governance, hg-au.com).
Runs entirely on the existing stack: static site + GA4 `G-9PMGXF9Q9T` + Google Ads `AW-18073082985` + Naomi's `admin.html` pipeline. **No external CRM, no paid email platform.**

---

## 1. Funnel Map

```
TOFU  Awareness        LinkedIn/Google ads · cold outreach · "Board Reporting Health Check" lead magnet
  │                    → capture email, warm the relationship
  ▼
MOFU  Consideration    Landing page (reporting-dashboards.html) · interactive demo · nurture emails
  │                    → get the enquiry / scoping-call request
  ▼
BOFU  Decision         Scoping call → proposal → close
                       → Won
```

### TOFU — Awareness

| | |
|---|---|
| **Goal** | Reach in-sector decision-makers and earn trust with genuinely useful content. |
| **Assets / channels** | LinkedIn single-image ads, Google Display prospecting, Google Search (high-intent), cold email/DM 3-touch sequence, **Board Reporting Health Check** lead magnet (`board-reporting-health-check.html`). |
| **Offer** | Free self-assessment health check — no obligation. |
| **CTA** | "Score your board reporting" / "Get the health check". |
| **Conversion event** | `lead_magnet_download` (GA4) → Google Ads conversion, on `board-reporting-health-check.html` submit (`enquiryType: "bi-leadmagnet"`). |

### MOFU — Consideration

| | |
|---|---|
| **Goal** | Move a warm lead from "interested" to "wants to talk". |
| **Assets / channels** | Landing page `reporting-dashboards.html`, **interactive demo** (illustrative data), nurture email sequence, Google remarketing. |
| **Offer** | See a real board-ready dashboard in action; request a tailored scoping call. |
| **CTA** | "Try the demo" → "Enquire for a scoping call". |
| **Conversion event** | `view_demo` (engagement, GA4) and `generate_lead` on `bi-enquiry.html` submit (`enquiryType: "bi-build"`). |

### BOFU — Decision

| | |
|---|---|
| **Goal** | Qualify, scope, propose and close. |
| **Assets / channels** | Scoping call, written proposal, follow-up. |
| **Offer** | Board-Ready Dashboard or Health Care Team Dashboards — one-off custom build (training included) **or** monthly retainer (data review + written commentary + training). Pricing discussed privately. |
| **CTA** | "Book a scoping call" → "Review your proposal". |
| **Conversion event** | `scoping_call_booked` and `proposal_sent` (manual/admin-triggered), `qualified_lead` for MQL. |

---

## 2. Pipeline Stages (mirrors `admin.html`)

Stages: **New → Contacted → Scoping call → Proposal sent → Won / Lost**

### New
- **Definition:** A fresh enquiry has landed (bi-build enquiry or lead-magnet download not yet actioned).
- **Entry criteria:** Form submitted (`bi-build` or `bi-leadmagnet`), lead created in admin dashboard.
- **Exit criteria:** First outreach attempt made.
- **Owner action:** Acknowledge and reach out within SLA (§4).

### Contacted
- **Definition:** Naomi has made contact (reply, call, or email) and is awaiting a scoping conversation.
- **Entry criteria:** At least one two-way or outbound contact logged.
- **Exit criteria:** Scoping call booked, **or** lead disqualified → Lost.
- **Qualification (BANT adapted for healthcare):**
  - **Data maturity** — Where does your data live today (spreadsheets, PMS, incident system, Power BI already)? Is it accessible/exportable?
  - **Board mandate** — Is improving board/quality reporting a priority for the board or exec this year?
  - **Budget authority** — Who signs off on reporting/BI spend? Are you that person or the sponsor?
  - **Timeframe** — Is there a trigger (accreditation, board cycle, new standards, an incident) driving urgency?

### Scoping call
- **Definition:** A live call is scheduled or held to scope requirements.
- **Entry criteria:** Call booked in calendar.
- **Exit criteria:** Enough understood to draft a proposal (→ Proposal sent), or clearly not a fit (→ Lost).
- **Outcome captured:** Which product (Board-Ready vs Team), which engagement model (one-off vs retainer), data sources, timeline.

### Proposal sent
- **Definition:** A written proposal (scope, deliverables, engagement model) has been sent.
- **Entry criteria:** Proposal emailed to the decision-maker.
- **Exit criteria:** Signed/accepted (→ Won) or declined/gone cold (→ Lost).
- **Owner action:** Follow up per SLA (§4).

### Won
- **Definition:** Engagement accepted; build or retainer commences.
- **Entry criteria:** Acceptance received. Fire `purchase`/win conversion in admin.

### Lost
- **Definition:** Disqualified or declined at any stage.
- **Entry criteria:** No fit, no budget, no response after final follow-up, or lost to alternative.
- **Note:** Tag the loss reason so it can be reviewed and, where appropriate, re-nurtured later.

### Target conversion rates (stage-to-stage)
| Transition | Target |
|---|---|
| New → Contacted | 90%+ (SLA discipline) |
| Contacted → Scoping call | 25–35% |
| Scoping call → Proposal sent | 60–70% |
| Proposal sent → Won | 30–40% |

---

## 3. Conversion Tracking Plan

Fire GA4 events at each step and import the key ones as **Google Ads conversions** (`AW-18073082985`).

### Events by step
| Step | GA4 event | Google Ads conversion? | Where it fires |
|---|---|---|---|
| Lead-magnet download | `lead_magnet_download` | Yes (secondary) | `board-reporting-health-check.html` submit |
| Enquiry submitted | `generate_lead` | **Yes (primary)** | `bi-enquiry.html` submit (`bi-build`) |
| Demo interacted | `view_demo` | No (engagement) | landing page demo interaction |
| Qualified (MQL) | `qualified_lead` | Optional | admin, on qualification |
| Scoping call booked | `scoping_call_booked` | Yes | admin / calendar booking |
| Proposal sent | `proposal_sent` | No (pipeline metric) | admin |
| Won | `purchase` | **Yes (value)** | admin, on Won |

### gtag snippets

**Lead-magnet submit — `board-reporting-health-check.html`:**
```html
<script>
  gtag('event', 'lead_magnet_download', {
    'enquiry_type': 'bi-leadmagnet',
    'form_id': 'board-reporting-health-check',
    'value': 1
  });
  // Google Ads conversion (secondary)
  gtag('event', 'conversion', {
    'send_to': 'AW-18073082985/LEADMAGNET_LABEL'
  });
</script>
```

**Enquiry submit — `bi-enquiry.html` (primary conversion):**
```html
<script>
  gtag('event', 'generate_lead', {
    'enquiry_type': 'bi-build',
    'form_id': 'bi-enquiry',
    'currency': 'AUD',
    'value': 1
  });
  gtag('event', 'conversion', {
    'send_to': 'AW-18073082985/BIENQUIRY_LABEL'
  });
</script>
```

**Demo interaction — landing page (engagement only):**
```html
<script>
  // fire once when the visitor interacts with the embedded demo
  gtag('event', 'view_demo', {
    'demo_id': 'board-ready-mock',
    'engagement': 'interacted'
  });
</script>
```

**Scoping call booked — admin:**
```html
<script>
  gtag('event', 'scoping_call_booked', { 'stage': 'scoping-call' });
  gtag('event', 'conversion', { 'send_to': 'AW-18073082985/SCOPINGCALL_LABEL' });
</script>
```

**Won — admin (value conversion):**
```html
<script>
  gtag('event', 'purchase', {
    'transaction_id': 'HG-BI-<id>',
    'currency': 'AUD',
    'value': 1,               // enter real deal value privately in admin, not in public assets
    'items': [{ 'item_name': 'Board-Ready Dashboard', 'item_category': 'bi-build' }]
  });
  gtag('event', 'conversion', { 'send_to': 'AW-18073082985/WON_LABEL' });
</script>
```

### Importing to Google Ads
1. In **Google Ads → Goals → Conversions → New conversion action → Import → Google Analytics 4 (Web)**, or create a website action that fires on the `conversion` events above.
2. Mark `generate_lead` (bi-enquiry) as the **Primary** conversion for bidding.
3. Mark `lead_magnet_download`, `scoping_call_booked` as **Secondary** (observe, not for bidding).
4. Set a **conversion value** on `purchase` (entered privately) so ROAS reporting works; leads use a nominal value of 1.
5. Replace each `_LABEL` placeholder with the real conversion label from the Ads UI.
6. In GA4, mark `generate_lead` and `lead_magnet_download` as **Key events** so they flow through cleanly.

---

## 4. Nurture Cadence & Follow-up SLAs

**Enquiry (bi-build) response SLA:** respond within **4 business hours**, same business day at the latest. High-intent — speed matters.

**Scoping-call follow-up:** send recap + next step within **24 hours** of the call. Proposal within **3 business days** of the scoping call.

**Proposal follow-up:** nudge at **day 3** and **day 7** after sending; final check-in at **day 14**, then move to Lost / long-term nurture.

**Lead-magnet nurture (TOFU → MOFU):** triggered by health-check download.
| Day | Touch | Content | CTA |
|---|---|---|---|
| 0 | Deliver | The health check + a one-line "how to read your score". | Reply if you'd like it walked through. |
| 3 | Insight | "The 3 gaps most aged-care boards score lowest on" — with a fix for each. | Try the interactive demo. |
| 7 | Proof / demo | Show what a board-ready dashboard looks like (demo link). | Enquire for a scoping call. |
| 14 | Soft close | "Is board reporting on your list this year?" — offer a 20-min scoping call. | Book a scoping call. |

Cadence runs on the existing stack (manual/templated sends from Naomi's mailbox — no paid email platform). Stop the sequence on any reply or enquiry.

---

## 5. Funnel Metrics Table

Track monthly in the admin dashboard. Example target ratios (tune with real data):

| Stage | Metric | Example volume | Conversion to next |
|---|---|---|---|
| Leads (TOFU) | Health-check downloads + enquiries | 100 | — |
| MQL | Qualified (data maturity + mandate + authority + timeframe) | 40 | 40% of leads |
| Scoping calls | Calls held | 14 | ~35% of MQL |
| Proposals | Proposals sent | 9 | ~65% of scoping calls |
| Wins | Engagements won | 3 | ~35% of proposals |

**Headline funnel:** ~3 wins per 100 top-of-funnel leads (~3%). Watch **Contacted-rate** (SLA health) and **Scoping→Proposal** (qualification quality) as the two levers with the most leverage.
