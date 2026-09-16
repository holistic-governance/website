---
title: Alert Fatigue and Clinical System Oversight
topic: alert-fatigue
type: HG Reference
jurisdiction: Australia (national)
lastReviewed: 2026-09-16
publisher: Holistic Governance
publisherUrl: https://hg-au.com
canonicalUrl: https://hg-au.com/topics/alert-fatigue.md
---


# Alert Fatigue and Clinical System Oversight

> Alert fatigue is the desensitisation that occurs when people are exposed to a high volume of alerts, a large proportion of which do not require action, with the result that they stop responding, including to the alerts that matter. It is the best-documented failure mode in health information technology, the override rates have not improved in twenty years, and it is now a governing-body matter in Australia because the strengthened Aged Care Quality Standards require the governing body to monitor the safety and quality of clinical systems, not only clinical outcomes.

## What is alert fatigue, and how is it different from alarm fatigue?

The two terms are used loosely and often interchangeably. The useful distinction:

- **Alarm fatigue** refers to physiologic monitoring devices: cardiac monitors, infusion pumps, bed and call systems. The signals are auditory and continuous.
- **Alert fatigue** refers to software-generated prompts: drug interaction warnings, allergy flags, care-task reminders, risk-score notifications. The signals are visual and interruptive.

Both describe the same underlying mechanism, and both are subsets of a wider problem: a high-volume signal stream with a low proportion of true positives, presented to a person whose attention is finite.

Australian research published in 2026 found alert fatigue is not a single failure. Junior doctors described it arising at **three different stages of processing information**:

1. **Alerts that are never detected.** The signal arrives and does not register at all.
2. **Alerts processed by shortcut.** The person sees the alert, recognises its shape, and dismisses it using a learned heuristic rather than reading it. Every dismissal is logged; nothing was considered.
3. **Alerts that demand excessive effort.** The person does engage, and the cost is the engagement itself: interruption, frustration and time taken from the task in front of them.

The distinction matters for governance because the failures have different consequences. The first two were perceived by clinicians to affect patient safety through missed information. The third produces lost time and cognitive load. **A governance response that measures only alert volume addresses the third failure and misses the first two.**

## What does the evidence actually show?

The override rates are remarkably stable across two decades and multiple health systems:

- Drug safety alerts in prescribing systems are overridden in **49% to 96%** of cases (systematic review, 2006), with a 2024 meta-analysis of drug interaction alerts pooling the override rate at **90%**.
- Override rates by alert type: drug interaction 56.3% to 95.6%, dose 82% to 96.8%, renal 74.4% to 97.1%, allergy 46% to 95%.
- Between **85% and 99%** of physiologic monitor alarms require no clinical intervention.
- Alert density at the point of decision is what degrades response: in one ambulatory cohort the likelihood of accepting a reminder fell about **30% for each additional reminder in the same encounter**, with no effect from overall workload (Ancker et al, BMC Med Inform Decis Mak 2017;17:36).

Overriding is frequently appropriate: a clinician dismissing an irrelevant warning is exercising judgement. The harm sits in the overrides that are not appropriate. One systematic review found inappropriate overrides associated with **16.5 potential and definite adverse drug events per 100 overridden alerts**, against 2.74 for appropriate ones.

The pattern is not specific to healthcare. Air traffic control runs nuisance rates of 81% to 97% on its safety alerts, meaning alerts that are algorithmically valid but of no use to the controller, and in cyber security only about half of assigned alerts are resolved within a working day, with 63% of analysts reporting some level of burnout. This rules out the comfortable explanations: it is not a training problem, and it is not a workforce quality problem.

## Does switching alerts on make care safer?

Not reliably, and Australian evidence is among the clearest on this point.

A controlled study published in *BMJ Quality and Safety* in 2025 compared five Australian hospitals across NSW and Queensland: three with no drug interaction alerts, two with interruptive alerts at order entry. The intervention sites had already restricted alerts to the most severe category only. Independent clinical pharmacists reviewed the records of **2,078 patients**, finding potential drug interactions in 74.7% of admissions and clinically relevant interactions in 48.7%.

The alerts reduced *potential* interactions. They produced **no change in clinically relevant interactions and no change in harm**. The authors concluded that implementing such alerts "without tailoring alerts to clinical context, is unlikely to reduce patient harms", and that organisations "should reconsider implementation of DDI alerts in EMRs where significant tailoring of alerts is not possible".

The governance reading: an alerting capability that is switched on, conservatively configured, and imposing real burden on clinicians may still deliver no measurable safety benefit. "The system is on" is not an assurance statement.

## What is the opposite failure?

Alert fatigue has a mirror image that is equally well documented: the alert that never fires.

In findings handed down in June 2025 concerning the death of an 87-year-old resident of the Fairway Rise aged care facility at Lindisfarne in greater Hobart, Tasmanian Coroner Leigh Mackey recorded that the facility's own explanation for the omissions in her care was that staff had never created a new wound chart, so no task was created and no automatic alert was generated. Her sacral wound went unmonitored across two separate periods of roughly a week in January and February 2022, progressing to an infected stage four pressure injury recorded as an antecedent cause of death.

The coroner's observation is the durable one: the system "provides an automated reminder system for individual client care however, as observed, it is dependent on the data having been entered into the system for the alert to be generated." Among her four recommendations was that a workflow system be considered and, if feasible, implemented, recording attendance to each resident's care needs and raising an alert where a care need is not attended to.

That recommendation is sound, and it also illustrates how alert burden accumulates. The remedy for a missed alert is almost always another alert, and each addition is individually justified. **No organisation adds a thousand alerts. Organisations add one, for good reason, a thousand times.**

Two related Australian cases are worth knowing. In 2023 the Aged Care Quality and Safety Commission issued a clinical alert after the preventable death of a resident administered medications not prescribed for them, which a coroner attributed to systemic failures during a transition from paper charts to an electronic medication management system. The Commission has separately issued an alert following a case in which an unauthorised worker created a false prescriber profile in a provider's electronic National Residential Medication Chart and altered medications over an extended period, detected only when an external nurse practitioner noticed an unfamiliar prescriber name, and causing no significant harm.

## What does Australian regulation require?

There is **no standalone Australian guideline on alarm management, and no accreditation action covering alert burden**. Guidance exists, but it is scattered and non-binding: the Commission's 2019 *Electronic Medication Management Systems: a guide to safe implementation* names "alert fatigue resulting in important medication interactions being overlooked" as a risk to be managed; its Electronic Medication Management Self-Assessment carries indicators on configurable alerts, alert severity, standardised alert presentation and override reasons; and the *Guide for Hospitals* under Standard 8 tells organisations to mitigate "alarm fatigue from frequent automatic alerts". None of it is an action a service is accredited against, which is where accountability now lands.

What does apply:

- **Strengthened Aged Care Quality Standards (applied from 1 November 2025), Standard 5, Outcome 5.1** (registration categories 5 and 6, plus category 4 providers delivering care management or restorative care management)**.** Action 5.1.1 requires the governing body to set priorities and strategic directions, endorse the clinical governance framework, and **monitor the safety and quality of clinical systems and performance**. Action 5.1.5 requires the provider to work towards a digital clinical information system that integrates into nationally agreed digital health and aged care records, supports interoperability using national Healthcare Identifiers, terminology and digital health standards, and has lawful access processes. Read together: the governing body is accountable for the clinical information system and for knowing whether it performs. See [Strengthened Aged Care Quality Standards](https://hg-au.com/topics/strengthened-aged-care-quality-standards.md).
- **NSQHS Medication Safety Standard, Action 4.13** requires that "the health service organisation ensures that information and decision-support tools for medicines are available to clinicians". It is silent on whether those tools are tuned, whether their burden is monitored, or what happens when they stop working. The governance gap sits between *available* and *usable*. See [NSQHS Standards](https://hg-au.com/topics/nsqhs-standards.md).
- **The 2026 National Model for Clinical Governance** elevates clinical governance to board and executive level and shifts emphasis from accreditation compliance to organisational culture. See [National Model for Clinical Governance](https://hg-au.com/topics/national-model-clinical-governance.md).
- **TGA regulation of the alerting layer.** Clinical decision support software is regulated by intended purpose, and software providing "prompts, alerts, reminders, and recommendations" to help clinicians apply evidence-based guidelines has historically fallen within an exempt category. Since the TGA's October 2025 rewrite of that guidance, an AI-enabled CDSS cannot meet the exemption criteria. See [Clinical AI Governance](https://hg-au.com/topics/clinical-ai-governance.md).

Internationally, alarm safety moved from advisory to accreditation requirement: the US Joint Commission linked 98 alarm-related sentinel events to 80 deaths between 2009 and 2012, naming alert fatigue the most common contributing factor, and alarm safety became a National Patient Safety Goal in 2014, carried forward as NPG.01.05.01 when the Joint Commission replaced that chapter with National Performance Goals for hospitals in January 2026.

## What actually reduces alert fatigue?

The interventions with the strongest measured results are not the ones most organisations try first.

1. **Volume reduction alone is not enough.** The Australian five-hospital study is the cleanest demonstration: those hospitals had already cut to the highest severity tier, which is volume reduction, and still recorded no reduction in clinically relevant interactions and no reduction in harm. Turning down the tap is not the same as improving the water.
2. **Specificity does work.** A simulation study modelling context conditions on interaction rules found volume reductions of 11.3% to 93.5% per rule. A deployed example: a children's hospital that contextualised or suppressed 46.8% of its interaction alerts cut interruptive firings by 40% overall, and by 82% for attending physicians.
3. **Severity tiering works when the top tier stays scarce.** A comparison of two hospitals sharing one knowledge base found the tiered site achieved 29% overall compliance against 10% at the untiered site. Conversely, one hospital that made its least severe tier non-interruptive cut total interaction-alert burden by 50.5% and modestly raised acceptance of surviving top-tier alerts, from 9.1% to 12.7%. Low-value alerts degrade the response to high-value ones, which makes pruning a safety intervention rather than housekeeping.
4. **Role tailoring is the best-supported personalisation.** A 2019 review of 39 studies of alternatives to interruptive alerting found only one option that appeared to increase prescriber acceptance: role tailoring. The authors note the underlying studies produced incomparable results.
5. **Governance outperforms engineering.** A Singapore health system that established a multidisciplinary decision support committee, assigned a named clinical owner to every alert, and reviewed performance against data cut monthly interruptive alert volume by **59.6%** while the number of distinct alert rules grew from 54 to 360. Action rates rose from **8% to 54.7%**. More rules, far less noise, far more action, achieved through governance rather than a better algorithm.

## How does this connect to AI?

A system that classifies, summarises and prioritises information is an alerting system: it decides what reaches a person and how urgently it is framed. AI does not exit the problem, it inverts it.

Alert fatigue is the failure of ignoring a system that cried wolf. **Automation bias** is the failure of believing a system that sounds confident. The Australian Commission on Safety and Quality in Health Care names both error types in its AI Clinical Use Guide: errors of commission, where a person acts on incorrect AI output, and errors of omission, where a person fails to act because the AI did not flag something. The Commission also warns directly that "computer generated alerts and notifications may not account for the specific circumstances of your patient".

Two findings make this a governance issue rather than a technical one:

- **Time pressure deepens automation bias.** It does not make it more frequent, but it makes it more severe. The conditions under which people most need a reliable second opinion are the conditions under which they are least able to audit it.
- **Verification burden is real work.** The RACGP describes this as *task substitution*: AI does not remove work, it converts producing into checking. Checking feels lighter and is easier to stop doing properly under pressure. This is how a documented human-review control decays into a rubber stamp without anyone deciding it should.

A 2026 review of 77 AI governance frameworks by Macquarie University researchers found only **19.5%** included organisational oversight mechanisms and only **13%** contained all four components the authors considered essential. Having an AI policy and having AI oversight are different things. See [Clinical AI Governance](https://hg-au.com/topics/clinical-ai-governance.md) and [AI Governance for Aged Care Providers](https://hg-au.com/topics/ai-governance-aged-care.md).

## How would we know if we had a problem?

A systematic review published in 2026 examined 22 systematic reviews of alert fatigue and found only one reporting an operational definition of it. The field has described this problem for decades without agreeing how to measure it. The definition that review proposes is workable: **a statistically significant, sustained decrease in appropriate response rates over time, measured against an established baseline**.

That requires knowing how many alerts you send, to whom, and what proportion are acted on. Most organisations cannot answer the first question. Where nobody owns the total number of alerts staff receive across every system, alert fatigue is not a risk being managed. It is a risk being accumulated.

## What should the governing body ask about alerts?

1. **Total volume**, Which of our systems generate alerts to staff, and who owns the total? Not each system individually: the total, as experienced by one nurse on one shift.
2. **Response rate**, What proportion of our alerts are dismissed without action, and do we measure it at all? If nobody knows, that is the finding.
3. **The trade-off**, When we last added an alert or a reminder, what did we retire? Alert sets grow in one direction unless something forces the exchange.
4. **The silent failure**, Where a task can be missed without anyone being told, what is our equivalent of the wound chart that was never created?
5. **Ownership**, Who is accountable for alert performance, and when did they last review it? Named person, documented cadence.
6. **AI provenance**, Where our software uses AI to prioritise or summarise, can a user see why an item was flagged? If the reasoning is not visible, the human cannot supervise it and the human-in-the-loop control is nominal.
7. **Review capacity**, For any human review control we rely on: who performs it, at what point, and how many items do they see per shift? The last answer determines whether the first two mean anything.
8. **Device boundary**, Is our clinical decision support software notified to the TGA, and in which category? If the vendor has added AI features since anyone last checked, the answer may have changed without notification.

## Related topics

- [Clinical AI Governance](https://hg-au.com/topics/clinical-ai-governance.md)
- [AI Governance for Aged Care Providers](https://hg-au.com/topics/ai-governance-aged-care.md)
- [National Model for Clinical Governance (2026)](https://hg-au.com/topics/national-model-clinical-governance.md)
- [Strengthened Aged Care Quality Standards](https://hg-au.com/topics/strengthened-aged-care-quality-standards.md)
- [NSQHS Standards (Second Edition)](https://hg-au.com/topics/nsqhs-standards.md)

## Sources

- Baysari MT, Hilmer SN, et al., Effectiveness of computerised alerts to reduce drug-drug interactions and DDI-related harm in hospitalised patients, *BMJ Quality and Safety* 2025: https://pmc.ncbi.nlm.nih.gov/articles/PMC12703349/
- Newton N, Baysari MT, et al., Experiences of Alert Fatigue and Its Contributing Factors in Hospitals: Qualitative Study, *JMIR* 2026: https://www.jmir.org/2026/1/e78676
- van der Sijs H, et al., Overriding of Drug Safety Alerts in Computerized Physician Order Entry, *JAMIA* 2006: https://pubmed.ncbi.nlm.nih.gov/16357358/
- Poly TN, et al., Appropriateness of Overridden Alerts in CPOE: Systematic Review, *JMIR Medical Informatics* 2020: https://pmc.ncbi.nlm.nih.gov/articles/PMC7400042/
- Ray CE, et al., Alert fatigue measurement in clinical decision support: a systematic review, *JAMIA* 2026: https://pmc.ncbi.nlm.nih.gov/articles/PMC13385993/
- The Joint Commission, Sentinel Event Alert 50: Medical device alarm safety in hospitals (2013): https://www.jointcommission.org/en-us/knowledge-library/newsletters/sentinel-event-alert/issue-50
- Ng HJH, et al., Reducing interruptive alert burden through alert governance, *JAMIA Open* 2023: https://academic.oup.com/jamiaopen/article/6/3/ooad056/7235064
- Paterno MD, et al., Tiering drug-drug interaction alerts by severity increases compliance rates, *JAMIA* 2009: https://pmc.ncbi.nlm.nih.gov/articles/PMC2605599/
- Wang A, Freeman S, Magrabi F, Governance for safe and responsible AI in healthcare organisations: a scoping review of frameworks, *npj Digital Medicine* 2026: https://www.nature.com/articles/s41746-026-02679-2
- ACSQHC. AI Clinical Use Guide (v1.0, August 2025): https://www.safetyandquality.gov.au/resources/ai-clinical-use-guide
- ACQSC, Strengthened Quality Standards, Standard 5 Outcome 5.1 Clinical governance: https://www.agedcarequality.gov.au/strengthened-quality-standards/clinical-care/clinical-governance
- ACQSC, Clinical alert: Transcribing and dispensing errors (June 2023): https://www.agedcarequality.gov.au/news-publications/clinical-alerts-and-advice/transcribing-and-dispensing-errors
- ACQSC, Clinical alert: Unauthorised prescribing on electronic National Residential Medication Charts: https://www.agedcarequality.gov.au/news-publications/clinical-alerts-and-advice/unauthorised-prescribing-electronic-national-residential-medication-charts-enrmc
- ACSQHC, NSQHS Medication Safety Standard: https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/medication-safety-standard
- AHRQ Patient Safety Network, Alert Fatigue primer: https://psnet.ahrq.gov/primer/alert-fatigue

**Sourcing note:** the Tasmanian coronial finding is cited from the primary document (Mackey L, Coroner. *Record of investigation into death (without inquest)*. Magistrates Court of Tasmania, 16 June 2025). The court site blocks automated access; an archived copy is at web.archive.org/web/20251116110057. Earlier drafts of this dossier dated the findings to August 2025 and quoted a news paraphrase as the coroner's words; both errors are corrected.

---
