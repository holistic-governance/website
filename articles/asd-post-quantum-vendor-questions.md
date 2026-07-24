---
title: Post-Quantum Cryptography — ASD's New Vendor Questions: What Buyers and Software Vendors Need to Know
date: 2026-07-24
author: Naomi Alefelder
category: Industry News
featured: false
summary: On 16 July 2026 the Australian Signals Directorate released "Post-quantum questions to ask your vendors" — 31 questions across five phases for assessing supplier readiness for post-quantum cryptography. We summarise what the guidance asks, what buyers should prioritise, what good vendor answers look like, and why data longevity and embedded systems make this land particularly heavily in aged-care and health settings.
---

On 16 July 2026, the Australian Signals Directorate (ASD) released a new publication, **[Post-quantum questions to ask your vendors](https://www.cyber.gov.au/business-government/secure-design/quantum/post-quantum-questions-to-ask-your-vendors)** — a structured, vendor-neutral set of questions organisations can use to assess how prepared their third-party suppliers are for the transition to post-quantum cryptography (PQC).

It is a deceptively practical document. Behind the question format sits a simple point — for many organisations, the pace of the post-quantum transition depends heavily on their vendors. ASD puts it plainly: **vendor readiness may be one of the biggest factors influencing an organisation's ability to transition to PQC within recommended timeframes.**

This article summarises the guidance for two audiences: **organisations choosing or reviewing vendors**, and **software vendors** who will increasingly find these questions landing in their inbox.

## Key takeaways

- ASD's new guidance sets out 31 vendor-assessment questions across the five LATICE phases (Locate, Assess, Triage, Implement, Communicate & educate), supporting a PQC transition by the end of 2030.
- 'Harvest now, decrypt later' means data with long-lived confidentiality requirements is already at risk — the threat is not future-dated.
- Buyers should apply the questions proportionately to vendor risk, watch for ASD's seven red flags, and build PQC into procurement, contract renewals and ongoing vendor assurance — not one-off audits.
- For software vendors, the publication is a preview of customers' next security questionnaire: maintain a CBOM, commit to product-specific dates, use standard libraries, and don't paywall PQC.
- Aged-care and health providers are exposed on two fronts: decades-long confidentiality of care records, and hard-to-update embedded systems throughout facilities.

## Why this matters — the short version

- Future advances in quantum computing are expected to undermine the traditional public-key cryptography that protects almost everything: logins, key exchange, digital signatures, data in transit and at rest. A quantum system capable of doing this is called a **cryptographically relevant quantum computer (CRQC)**.
- The risk is not only future-dated. Under **'harvest now, decrypt later'**, data stolen today can be decrypted once a CRQC exists — so data with long-lived confidentiality requirements is already at risk.
- **PQC** — cryptographic algorithms designed to resist both classical and quantum attack — is the practical mitigation, and ASD's guidance supports completing the transition **by the end of 2030**.
- Many organisations rely on vendors to implement and control their cryptography — SaaS platforms, managed service providers, identity services, backup services and cloud providers often do it for them. That is why ASD says vendor readiness may be one of the biggest factors influencing an organisation's ability to transition within recommended timeframes.

## What the guidance contains

The publication (with a companion quick-reference PDF, both free on [cyber.gov.au](https://www.cyber.gov.au/business-government/secure-design/quantum/post-quantum-questions-to-ask-your-vendors)) sets out **31 questions across five phases**, aligned to ASD's **LATICE** framework from its _Planning for post-quantum cryptography_ guidance:

| Phase | Questions | Focus |
|---|---|---|
| **L**ocate | 8 | Where cryptography lives — inventories (CBOMs), hardcoded or hardware-bound crypto, third-party dependencies, firmware and roots of trust |
| **A**ssess | 6 | Which data flows and trust decisions rely on traditional asymmetric cryptography, data lifetimes, documented CRQC risk assessments |
| **T**riage | 5 | Whether vendor transition plans and sequencing align with your risk priorities and the end-of-2030 milestone |
| **I**mplement | 6 | Standards-based algorithms, production readiness, library validation, key and certificate changes, licensing |
| **C**ommunicate & educate | 6 | Change notification, transition guides, deprecation of traditional cryptography, trained support teams |

Each question comes with an explanation of why it matters and what a good answer looks like. The guidance is intended for cyber security leaders, procurement and vendor-management teams, and technical stakeholders — and it is written to be used in **procurement, contract renewals and ongoing vendor assurance**, not as a one-off audit.

Importantly, ASD notes cryptographic exposure extends well beyond cloud and SaaS: it is often embedded and hard to update in on-premises systems, legacy systems, operational technology, Internet of Things devices, building management systems, and physical access and security systems.

## Summary for organisations reviewing or choosing a vendor

**You are not expected to ask every question of every vendor.** ASD is explicit: apply the questions based on the risk level of the product or service, how much cryptographic control the vendor exercises, the sensitivity and longevity of the data involved, and where you are in your own PQC transition.

If you only have time for a handful, these (adapted from the guidance) reveal the most:

1. **"Do you maintain a current inventory of cryptographic dependencies — a cryptographic bill of materials (CBOM) or equivalent?"** A vendor that can't say where its cryptography is can't credibly plan to replace it.
2. **"Which products or services will be PQC-ready early enough to support our rollout before the end of 2030?"** Look for product-specific, versioned commitments — not general assurances.
3. **"Is PQC included in base licensing?"** ASD's rationale: including PQC in base licensing avoids security controls being paywalled, which could delay adoption and lead to uneven risk across customers.
4. **"If you support post-quantum/traditional (PQ/T) hybrid modes, when and how will you move to PQC-only?"** Hybrid is a legitimate transitional measure — but only with a documented de-hybridisation plan and timeline.
5. **"What internal governance oversees your PQC transition?"** Executive ownership, documented decision forums and regular review cycles are what separate a roadmap from a press release.

**Watch for these red flags.** ASD lists seven common concerns in vendor responses: limited visibility of cryptographic use; reliance on general assurances; unclear or deferred transition timelines; use of proprietary or opaque cryptography; treatment of PQC as an optional or premium function; over-reliance on compensating controls; and lack of governance or ownership. None is an automatic disqualifier — but each may warrant follow-up, depending on the vendor's risk level and what they supply, and ASD makes the point that a vendor's _willingness to engage transparently_ is itself a signal of maturity, in PQC and in cyber security generally.

**Build it into process, not projects.** The guidance recommends engaging vendors early — before long-term contracts or cloud agreements lock in cryptographic choices that are difficult to change — and incorporating PQC considerations into procurement, contract renewal and vendor assurance as standing agenda items. Early, structured engagement is what prevents the late-stage surprise of discovering a critical product cannot support PQC within required timeframes.

## Summary for software vendors

Read from the other side of the table, the publication is effectively a **preview of your customers' next security questionnaire**. ASD says as much: the guidance can also help vendors understand customer expectations for PQC preparedness — and assess their own suppliers, because your customers' questions about your third-party dependencies become your questions to _your_ vendors.

What good looks like, distilled from ASD's "key response considerations":

- **Know your own cryptography.** Maintain a current CBOM covering algorithms, protocols, libraries, parameters and configurations — including third-party and embedded components — and keep it actively maintained.
- **Commit to dates, per product.** Standards-based, ASD-approved algorithms with versioned, product-specific release commitments, available early enough for customers to test, stage and roll out **before the end of 2030**.
- **Prefer standard libraries.** Reputable, actively maintained, independently scrutinised cryptographic libraries — not bespoke or proprietary implementations.
- **Don't paywall PQC.** Include it under standard licensing terms.
- **Treat hybrid as temporary.** If you offer PQ/T hybrid modes, document the plan and timeline to PQC-only.
- **Prioritise by customer risk, not customer revenue.** ASD explicitly flags prioritisation driven by system exposure, data sensitivity and transition complexity — rather than customer size or commercial value.
- **Operationalise the change.** Executive-owned governance, formal customer notification of cryptographic changes, customer-ready transition guides, phased deprecation timelines, and support and engineering teams trained on PQC.
- **Engage with standards bodies** — and be able to show how that tracking informs your roadmap.

Vendors who can answer these questions well won't just pass procurement gates — they'll shorten their customers' transitions.

## A note for aged-care and health providers

_Our commentary, beyond the ASD text:_ two aspects of this guidance land particularly heavily in care settings. First, **data longevity** — clinical and care records carry confidentiality obligations that span decades, exactly the profile 'harvest now, decrypt later' targets, which argues for asking the data-lifetime questions of any vendor holding care records. Second, **embedded systems** — ASD's list of hard-to-update environments (building management, physical access and security systems, IoT, legacy platforms) describes much of a modern care facility. These are long-lifecycle assets where cryptography may be fixed in hardware; the time to ask about PQC is before the next procurement, not after.

**Reporting cyber culture to your board?** Get our free [Security Awareness & Culture Board Dashboard](../security-awareness-dashboard.html) — an editable, board-ready dashboard structured on the SANS Security Awareness & Culture Maturity Model™. It runs in your browser, your figures never leave your device, and it prints a one-page board pack.

## Sources

- ASD, _Planning for post-quantum cryptography_ (LATICE framework), cyber.gov.au.
- ASD, _Post-quantum questions to ask your vendors_ (first published 16 July 2026), cyber.gov.au — including the companion quick-reference PDF.
- ASD news item, _New guidance helps organisations assess vendor readiness for post-quantum cryptography_ (16 July 2026), cyber.gov.au.

_This article is general information and decision support, not legal, technical or professional advice. Assess the guidance against your own circumstances, and rely on the current ASD publications as the authoritative source._
