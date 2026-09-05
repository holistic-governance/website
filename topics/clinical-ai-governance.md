---
title: Clinical AI Governance
topic: clinical-ai-governance
type: HG Reference
jurisdiction: Australia (national)
lastReviewed: 2026-09-05
publisher: Holistic Governance
publisherUrl: https://hg-au.com
canonicalUrl: https://hg-au.com/topics/clinical-ai-governance.md
---


# Clinical AI Governance

> Clinical AI governance is the oversight of artificial intelligence used in or around the delivery of clinical care — decision support, clinical documentation drafting, deterioration and falls prediction, triage, monitoring and scheduling that affects care. It is a subset of organisational AI governance with higher stakes: the tools sit inside the clinical governance system, some cross the TGA's medical-device boundary, and the accountability of clinicians and governing bodies for care outcomes does not transfer to the algorithm.

## What counts as clinical AI?

Common categories in Australian health, aged care and disability settings:

1. **Clinical decision support** — tools that suggest diagnoses, risk scores, care actions or medication flags.
2. **AI-drafted clinical documentation** — ambient scribes and drafting tools for progress notes, assessments, care plans and discharge summaries.
3. **Prediction and monitoring** — deterioration alerts, falls and pressure-injury risk prediction, remote monitoring analytics.
4. **Triage and prioritisation** — tools that order queues, allocate clinical attention or route referrals.
5. **Embedded AI features** — AI capabilities switched on inside existing clinical software by vendor update, sometimes without a procurement decision.

The fifth category is the governance trap: an organisation that has never "bought AI" can still be running clinical AI.

## Who is accountable when AI is used in clinical care?

Accountability does not move to the algorithm:

- **The governing body** remains ultimately accountable for safe, high-quality care under the clinical governance arrangements that already bind it — the [National Model for Clinical Governance](https://hg-au.com/topics/national-model-clinical-governance.md) in health, and in aged care the [Aged Care Act 2024](https://hg-au.com/topics/aged-care-act-2024.md) provider duty (s 179), the personal due diligence duty of certain responsible persons — governing body members and executive decision-makers (s 180, s 12(1)(a)–(b)), and Standard 5 (Clinical Care) of the [Strengthened Quality Standards](https://hg-au.com/topics/strengthened-aged-care-quality-standards.md).
- **Registered practitioners** remain responsible for the care they provide and the records they sign. Ahpra and the National Boards have issued guidance — *Meeting your professional obligations when using Artificial Intelligence in healthcare* — making clear that the practitioner who accepts an AI-drafted note or acts on an AI recommendation owns that clinical decision.
- **The provider** owns outcomes regardless of tooling: an inaccurate AI-drafted progress note is a care documentation failure, and an incident involving AI flows into the same reporting regime as any other incident in that setting — [SIRS](https://hg-au.com/topics/sirs.md) in aged care, the NDIS reportable-incidents regime in disability services, and sentinel-event / jurisdictional serious-incident reporting (plus open disclosure obligations) in health services. Separately, if the AI tool is a regulated medical device, adverse events involving it may also be reportable to the TGA — a parallel obligation that is easy to miss because it sits outside the care-sector incident regime.

## When does clinical AI become a regulated medical device?

The **Therapeutic Goods Administration (TGA)** regulates software, including AI, by its **intended purpose**: software intended for diagnosis, prevention, monitoring, prediction, prognosis or treatment is a medical device requiring inclusion on the **Australian Register of Therapeutic Goods (ARTG)** — the TGA's register of therapeutic goods that may lawfully be supplied in Australia — with exclusions and exemptions for some categories (notably certain clinical decision support software). Governance implications:

1. **Procurement must ask the boundary question** — is this product (or this feature) a medical device, and is it ARTG-included for this use?
2. **Vendor updates can move a product across the boundary** — a documentation tool that starts suggesting clinical actions has changed its regulatory character; someone must be watching.
3. **Off-label drift is a provider risk** — using a general-purpose AI tool for a therapeutic purpose it is not approved for creates exposure the vendor's terms will typically disclaim.

See [AI Guardrails](https://hg-au.com/topics/ai-guardrails.md) for why the TGA's intended-purpose boundary is one of the only enforceable meanings of "guardrail" in this space.

## What do the December 2026 privacy changes mean for clinical AI?

The **Privacy and Other Legislation Amendment Act 2024 (Cth)** (assented 10 December 2024) is the first tranche of Privacy Act reform, and one obligation lands squarely on clinical AI: **automated decision-making (ADM) transparency**, commencing **10 December 2026** after a 24-month transition. From that date, an APP entity's privacy policy must set out the kinds of personal information used in, and the kinds of decisions made by, computer programs the entity has arranged to make — or to do things substantially and directly related to making — decisions that could reasonably be expected to significantly affect an individual's rights or interests (new APP 1.7). The OAIC has consulted on ADM transparency guidance and intends to publish final guidance ahead of commencement; check the current OAIC position when advising. Failure to comply will be enforceable through the OAIC's expanded infringement- and compliance-notice powers.

For providers using clinical AI this means:

1. **The AI inventory becomes a privacy compliance input** — you cannot disclose automated decision-making you have not identified. Triage, prioritisation, risk-scoring and eligibility-style tools are the obvious candidates for "significantly affects".
2. **Privacy policies need updating before 10 December 2026** where any tool uses personal information in decisions of that kind — including AI embedded in existing software.
3. **The test reaches past full automation** — the obligation turns on whether a computer program made the decision *or did something substantially and directly related to making it*, so it can be triggered even where a human formally signs off. In our view (pending the OAIC's final guidance), a workflow where staff routinely accept an algorithm's output without genuine review is squarely within its intent (see the automation-bias point above).

The same amendment package also introduced a **statutory tort for serious invasions of privacy** (in force since June 2025) and expanded OAIC enforcement (tiered civil penalties and infringement notices) — raising the stakes on misuse of care recipients' personal information in AI pathways generally. Further tranches of Privacy Act reform remain foreshadowed; treat this as a moving landscape.

## How does clinical AI fit into a clinical governance framework?

Mapped to the six foundations of the [2026 National Model for Clinical Governance](https://hg-au.com/topics/national-model-clinical-governance.md):

- **Leading systems and organisational culture** — the governing body knows what clinical AI is in use (inventory), has approved its risk appetite for AI in care, and receives reporting on it.
- **Partnering with patients, carers and consumers** — transparency with patients, residents and families about AI's role in their care, and consent where personal information enters AI tools.
- **Building a healthy workforce culture** — staff can raise AI concerns without friction, informal shadow use is surfaced rather than hidden, and training covers both capability and limits.
- **Enabling high-quality and integrated clinical practice** — an approval gate before any AI touches care (analogous to credentialing and scope of practice: which tool, for which task, under whose supervision); evaluation before and after deployment; defined human-review points designed against automation bias.
- **Managing and reducing risk** — AI use on the risk register with a named owner; AI-related incidents and near-misses flowing through the incident management system; vendor due diligence and change monitoring; technical controls enforced outside the model; data protection on clinical AI pathways.
- **Using data for better care** — monitoring the performance of AI tools in use, and governing the quality and privacy of the data that feeds them.

For organisations seeking certifiable evidence of AI governance discipline, **AS ISO/IEC 42001:2023** (AI management systems) is the recognised standard — noting it certifies the management system around AI, not the clinical safety or behaviour of any model.

## What should the governing body ask about clinical AI?

1. **Inventory** — What AI currently touches clinical care in our organisation — procured tools, AI features switched on inside existing software by vendor update, and informal staff use of general-purpose assistants — and who owns keeping that inventory current?
2. **Device boundary** — Which of these tools have a therapeutic intended purpose, and for each, what evidence do we hold: ARTG inclusion for that intended use, or a documented basis for exclusion or exemption (for example, the clinical decision support carve-outs)? Where a tool is a regulated device, who owns our parallel TGA adverse-event reporting obligation?
3. **Human oversight** — Where are the defined human-review points, who is accountable at each, and what tells us review is genuinely happening rather than automation-bias sign-off — for example, override and variance rates, or spot audits of accepted outputs?
4. **Incidents** — How would an AI-related clinical incident surface in our incident management system and our sector's reportable-incident regime (SIRS, NDIS reportable incidents, or sentinel-event reporting) — and would we recognise AI's role in it?
5. **Change control** — When a vendor updates a model, are we contractually entitled to be notified, and who then re-checks behaviour, the device boundary and our risk assessment?
6. **Decommissioning** — Under what conditions do we switch a clinical AI tool off, who has authority to do it, and can care continue safely without it — has the manual fallback actually been tested?
7. **Consumers** — Do the people in our care know when AI is materially involved in their care or their personal information, and where consent is required, do we hold it?
8. **Privacy** — Have we identified which of our AI uses involve a computer program making, or doing something substantially and directly related to making, decisions that significantly affect individuals — and will our privacy policy disclose them by 10 December 2026?
9. **Liability** — Does our indemnity and malpractice cover respond to AI-involved care decisions, and where do our vendor contracts leave liability when the tool errs?
10. **Evidence** — What would we show an assessor or the regulator tomorrow to evidence that our clinical AI oversight is operating?

## Related Holistic Governance references

- [AI Governance for Aged Care Providers](https://hg-au.com/topics/ai-governance-aged-care.md) — the organisation-wide framework this clinical layer sits inside
- [AI Guardrails — What They Actually Are (and Aren't)](https://hg-au.com/topics/ai-guardrails.md)
- [National Model for Clinical Governance (2026)](https://hg-au.com/topics/national-model-clinical-governance.md)
- Article: [AI Governance for Aged Care — A Provider's Practical Framework](https://hg-au.com/articles/ai-governance-aged-care.html)
- Briefing: [Governing clinical AI: the regulatory map](https://hg-au.com/assurance-briefing.html) — Assurance Briefing episode (forthcoming, scheduled November 2026)
- Services: [AI & Technology consultancy](https://hg-au.com/ai-technology.html)

## Sources

- TGA — Artificial intelligence (AI) and medical device software regulation: https://www.tga.gov.au/products/medical-devices/software-and-artificial-intelligence-ai/manufacturing/artificial-intelligence-ai-and-medical-device-software-regulation
- ACSQHC — AI Clinical Use Guide (v1.0, August 2025): https://www.safetyandquality.gov.au/resources/ai-clinical-use-guide
- ACSQHC — 2026 National Model for Clinical Governance: https://www.safetyandquality.gov.au/clinical-topics/clinical-governance/2026-national-model
- Ahpra and National Boards — Meeting your professional obligations when using Artificial Intelligence in healthcare: https://www.ahpra.gov.au/Resources/Artificial-Intelligence-in-healthcare.aspx
- ACSQHC — National Model Clinical Governance Framework: https://www.safetyandquality.gov.au/publications-and-resources/resource-library/national-model-clinical-governance-framework
- Department of Industry, Science and Resources — Australia's AI Ethics Principles: https://www.industry.gov.au/publications/australias-artificial-intelligence-ethics-framework
- OAIC — consultation on guidance for transparency in automated decision making: https://www.oaic.gov.au/engage-with-us/consultations/consultation-on-guidance-for-transparency-in-automated-decision-making
- Federal Register of Legislation — Privacy and Other Legislation Amendment Act 2024: https://www.legislation.gov.au/C2024A00128

---

*This reference document is maintained by [Holistic Governance](https://hg-au.com) as general information and decision support, not legal or clinical advice. Verify regulator positions against current TGA, Ahpra and ACSQHC guidance before acting.*
