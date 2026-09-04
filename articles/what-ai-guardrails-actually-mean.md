---
title: "AI Guardrails" — Everyone Says It. Almost Nobody Can Point at One.
date: 2026-07-30
dateModified: 2026-08-03
author: Naomi Alefelder
category: AI Governance
featured: false
metaDescription: What "AI guardrails" actually means — the two meanings that survive scrutiny, documented failures, and a five-question test for small and medium organisations.
summary: "Guardrails" has become the most load-bearing word in AI — used by vendors, regulators and boards to mean anything from a sentence in a prompt to a legal obligation. We separate the two meanings that survive scrutiny from the marketing-washed middle, walk through documented cases where guardrails existed on paper and failed anyway, and set out what tangible, affordable guardrails actually look like for a small or medium organisation.
topics: ai-governance-aged-care
---

A guardrail on a highway is a physical object. You can point at it, you can test what force it withstands, and you know exactly what it does when a car hits it. That is why the metaphor is so persuasive — and why it is doing so much unearned work in AI right now.

"Robust guardrails" appears in vendor decks, board papers, policy documents and procurement responses, and it can mean anything from an independently tested security control to a sentence someone typed into a prompt asking the model to be careful. Both get the same word. Only one deserves it.

This article does three things: pins down the two meanings of "guardrails" that survive scrutiny, walks through documented cases where guardrails existed on paper and failed anyway, and sets out what tangible, affordable guardrails actually look like for a small or medium organisation — particularly in Australian healthcare and aged care, where some guardrails are not merely best practice — they are backed by law.

## Key takeaways

- The security industry's own guidance (OWASP) draws a sharp line: a real guardrail is a deterministic, auditable control enforced outside the model. Instructions in a system prompt are explicitly not a security control.
- OWASP itself says it is unclear whether fool-proof prevention of prompt injection is even possible. Every technical control mitigates; none is known to eliminate. Anyone claiming otherwise is selling the word, not the thing.
- Deployed guardrail products from major vendors have been evaded at rates of 60% to over 90% in peer-reviewed testing — one technique hit 100%, and only one product held firm — and a real-world exploit chained its way past four separate Microsoft guardrails. Detection tools are a layer, never the layer.
- In Australian healthcare, "guardrail" can mean a legal obligation: the TGA regulates AI by its intended purpose, and an AI tool that drifts into giving health advice must be technically constrained or pulled from supply.
- "A human reviews it" is a real guardrail only when the review is specified — who, when, accountable for what. Automation bias is the documented mechanism by which unspecified human review quietly stops working.
- The most affordable real guardrails are procedural and architectural — approval gates, least privilege, review timing, update monitoring — not purchased filter products.

## The two meanings that survive scrutiny

Strip away the marketing and "AI guardrails" has two defensible meanings.

**The technical meaning: a control enforced outside the model.** The clearest definition comes from OWASP's Top 10 for LLM Applications — the closest thing the industry has to a canonical security reference for AI systems. Its guidance is blunt: implement guardrails _outside_ the LLM itself; an independent system that inspects outputs is preferable to system-prompt instructions; and critical controls — privilege separation, authorisation checks — "must not be delegated to the LLM" but enforced "in a deterministic, auditable manner". The system prompt, OWASP says plainly, "should not be considered a secret, nor should it be used as a security control".

That is the sharpest available line between a guardrail and a wish. "We instructed the model not to give medical advice" is a wish. "A separate system checks every output before it reaches the user, logs the result, and blocks anything that fails" is a guardrail. One is probabilistic and invisible; the other is deterministic and auditable. Ask which one you are being sold.

**The regulatory meaning: a control someone can enforce against you.** The second defensible meaning is a guardrail mandated by a regulator, with consequences attached. Australia's Therapeutic Goods Administration regulates software by _intended purpose_, not technology: an AI product intended or used for diagnosis, prevention, monitoring, prediction, prognosis or treatment is a medical device requiring inclusion on the ARTG. The TGA's guidance gives a strikingly concrete example: a developer whose general-purpose AI system is found to be giving health advice "must either: implement controls to prevent the system from providing health advice, or stop supply of the product, seek our approval for the new intended use and include the product in the ARTG". That is the word "guardrail" meaning something enforceable — implement the control or exit the market.

The US runs the same logic through the FDA's premarket pathways, with a candid admission attached: the FDA itself states its traditional device-regulation paradigm "was not designed for adaptive artificial intelligence and machine learning technologies". Its patch is a named mechanism — Predetermined Change Control Plans (final guidance, December 2024) — which lets manufacturers pre-specify how a model may change after approval. Even the regulators, in other words, are retrofitting guardrails onto systems that change under their feet.

## The marketing-washed middle

Between those two meanings sits most of what the word is actually used for: trained-in model behaviour, prompt instructions, and safety claims backed by benchmarks.

The benchmark problem now has a peer-reviewed name: **safetywashing**. A NeurIPS 2024 study found that many widely used AI safety benchmarks correlate highly with general model capability and training compute — meaning a model can score better on "safety" simply by being bigger, and capability improvements get presented as safety advancements. A safety metric can exist, be reported, and be genuinely measuring something other than safety.

And the trained-in behaviour problem has a growing case file. In 2023, Tessa — the US National Eating Disorders Association's chatbot, originally a rules-based tool — was reported to have given dieting and weight-loss advice to people seeking help with eating disorders after generative AI features were added; the chatbot was taken down. The guardrails existed in someone's intentions. They did not exist in the architecture.

## When guardrails fail even when they're real

Here is the uncomfortable part: even genuine, deployed, engineered guardrails fail — and the documented record is worth every board's attention.

**Detection tools get evaded.** Peer-reviewed research from Mindgard and Lancaster University tested six production guardrail systems — including Microsoft's Azure Prompt Shield and Meta's Prompt Guard — against character-injection and adversarial techniques. Character-injection attacks evaded several of the systems 60% to over 90% of the time, one technique — smuggling instructions inside emoji-encoded Unicode — achieved 100% evasion against several systems, and only one product held character injection to around 20%. The vendors acknowledged the findings, and Microsoft patched. The durable lesson cuts both ways: no system resisted every attack class, so a detection-based guardrail can never be the _sole_ control — but the one product that largely held shows guardrail quality is real and measurable, which is exactly what the five questions below exist to surface.

**Layered guardrails get chained.** The canonical case is EchoLeak (CVE-2025-32711), a vulnerability in Microsoft 365 Copilot disclosed in 2025 and patched before any known exploitation. A single crafted email could exfiltrate data by bypassing four separate deployed guardrails in sequence: the prompt-injection classifier (evaded by phrasing the attack as an ordinary business email, never mentioning AI at all), link redaction (which stripped one Markdown link format but not another), image-fetch controls, and the content security policy (abused via an allowlisted Microsoft domain). Four real guardrails, each individually sensible, each bypassed by modest creativity. OWASP's own wording explains why this keeps happening: it is unclear, OWASP says, whether fool-proof prevention of prompt injection is even possible — every listed defence mitigates impact; none is known to eliminate the vulnerability.

**Human review quietly stops working.** The failure mode that matters most in healthcare is not technical. The Australian Commission on Safety and Quality in Health Care names it directly: **automation bias** — acting on incorrect AI output (errors of commission) and failing to act when the AI misses something (errors of omission). A "human in the loop" who has learned to trust the tool is a guardrail in the org chart and not in reality. This is why the Commission's AI Clinical Use Guide does not say "review AI outputs" and stop; it specifies _when_ — ideally during or at completion of the patient interaction, while your own memory of the encounter can still catch what a scribe fabricated, omitted or misheard — and it is explicit that clinicians remain accountable for every AI output that informs a clinical decision or record.

## The Australian healthcare specifics

Two more points from the Australian guidance deserve their own paragraphs, because they convert directly into things a provider should do.

**Scope creep arrives by software update.** The TGA and the Commission give closely parallel examples of the same failure mode; in the Commission's words, an ambient AI scribe that "adds recommended tests or treatments" to a consultation summary is a medical device subject to regulation. TGA guidance is hard-edged on the vendor side — features that change a device's intended purpose "must not be implemented" until regulatory approvals are in place. But the Commission's warning is aimed at the organisations and clinicians using the tool: "you may not be notified when these changes occur." A tool you assessed in March is not the tool you are running in September. Monitoring vendor updates for scope creep is not bureaucratic overhead; it is a named regulatory failure mode with a named procedural control.

**The policy landscape has churned — check currency before you cite it.** Australia's Voluntary AI Safety Standard, published in September 2024 with its ten voluntary guardrails, was superseded in October 2025 by the National AI Centre's Guidance for AI Adoption, built around six essential practices: decide who is accountable, understand impacts and plan accordingly, measure and manage risks, share essential information, test and monitor, and maintain human control. Notice what happened to the vocabulary: the current national guidance has largely retired "guardrails" in favour of named practices — and its two tiers (foundations guidance for organisations starting out; implementation guidance for complex or higher-risk use) are deliberately sized so that a smaller organisation is not asked to run an enterprise program. The separately _proposed_ mandatory guardrails for high-risk AI were never enacted: the December 2025 National AI Plan set them aside in favour of existing laws and sector regulators, and in July 2026 the government moved again — standing up an Office of AI within the Department of the Prime Minister and Cabinet and announcing its intention to legislate Australian Standards for AI. If a consultant or vendor cites "the ten guardrails" as current Australian guidance, that is itself a currency test they have just failed.

## The guardrail test

For a small or medium organisation, the practical question is not "do we have guardrails?" but "would our guardrails survive being pointed at?" Five questions do most of the work — for anything a vendor claims, and anything your own team builds:

1. **Where does it run?** Inside the model (prompt instructions, trained behaviour) or outside it (a separate check, a permission boundary, a human gate)? Only the second is a security control.
2. **Is it deterministic?** Does the same bad input get blocked every time, or usually?
3. **Can you show me the log?** A guardrail that fires invisibly is unverifiable. Auditable means evidence exists.
4. **What happens when it fails?** Fail closed (block and escalate) or fail open (let it through)? Fail-closed carries its own cost — a tool that blocks mid-task is a workflow problem — but the point is that someone chose the failure mode deliberately, and knows which one they chose.
5. **Has anyone tried to break it?** Not "did you test it works" — did someone adversarial, treating the model as an untrusted user, try to make it _not_ work?

Ask these of a vendor and you will learn more from the quality of the answers than the content. A vendor who answers "our model is trained to be safe" to question one has told you everything.

## What real, affordable guardrails look like

None of what follows requires buying an AI security product. It requires the same governance discipline you already apply elsewhere, pointed at a new class of tool — and it maps directly onto OWASP's own mitigation list, which is as procedural as it is technical.

- **Human approval gates for consequential actions.** Anything AI-drafted that reaches a client, a clinical record or a regulator passes a named human first — and the AI output is labelled as a draft until it does. Decision support, not decision making.
- **Least privilege.** The AI tool gets access to the minimum data and systems it needs. A scribe does not need the full care record; a chatbot does not need any of it. Most catastrophic AI failures are ordinary access-control failures wearing a new hat.
- **Specified review, not assumed review.** Who reviews, when (for clinical scribes: during or at completion of the interaction), and accountable for what. Write it down; audit it occasionally. Unspecified review decays into automation bias.
- **Vendor update monitoring.** A standing agenda item: what changed in each AI tool this quarter, and did any change move its intended purpose? This is the scope-creep control both Australian regulators point to.
- **Treat the model as an untrusted user.** Ordinary testing asks "does the tool do what it should?" Adversarial testing asks the opposite: "can we make it do what it shouldn't?" Before deployment and periodically after, have someone play attacker — try to extract another person's information, coax out advice the tool shouldn't give, push it outside its lane — and judge it the way you would a stranger off the street, not a trusted part of the system. This costs an afternoon, not a product licence.
- **A named owner per AI use.** Every guardrail above needs someone accountable for the fact that it still exists. Unowned controls are the ones that fail silently.

For a provider that already maintains an AI inventory and risk-tiers its uses — the framework we set out in [AI Governance for Aged Care](https://hg-au.com/articles/ai-governance-aged-care.html) — this list is the control layer that sits under the two or three highest-risk entries.

## The provocation, stated plainly

The word "guardrails" is popular precisely because it lets everyone feel the problem is handled without anyone specifying how. Vendors like it because it is unfalsifiable. Boards like it because it sounds like an answer. The evidence says something less comfortable: one of the best-resourced technology companies on earth had four real guardrails chained and bypassed by a single email, no defence against the most basic attack class is known to be fool-proof, and the human-review guardrail fails through a bias so predictable it has a clinical name.

The conclusion is not despair — it is precision. Guardrails that are deterministic, external, auditable, owned and occasionally attacked are worth the name. Everything else is a wish with good branding. The next time the word appears in a document you are asked to approve, the question that earns its keep is five words long: _can you point at it?_

Holistic Governance provides [AI governance advisory, independent vendor assessment and AI training](https://hg-au.com/ai-technology.html) for healthcare and aged care organisations — including running the guardrail test above against your AI inventory. You can read more about our approach and experience [here](https://hg-au.com/about.html).

## Sources

- OWASP Top 10 for LLM Applications 2025 — prompt injection (LLM01) and system prompt leakage (LLM07) guidance. [owasp.org](https://owasp.org/www-project-top-10-for-large-language-model-applications/assets/PDF/OWASP-Top-10-for-LLMs-v2025.pdf)
- "Bypassing LLM Guardrails: An Empirical Analysis of Evasion Attacks against Prompt Injection and Jailbreak Detection Systems" — Mindgard / Lancaster University, ACL LLMSec 2025. [arxiv.org](https://arxiv.org/pdf/2504.11168)
- EchoLeak (CVE-2025-32711) — zero-click prompt injection in Microsoft 365 Copilot, patched May 2025. [SecurityWeek](https://www.securityweek.com/echoleak-ai-attack-enabled-theft-of-sensitive-data-via-microsoft-365-copilot/) · [technical case study, arXiv](https://arxiv.org/abs/2509.10540)
- Artificial intelligence (AI) and medical device software regulation — [Therapeutic Goods Administration](https://www.tga.gov.au/products/medical-devices/software-and-artificial-intelligence-ai/manufacturing/artificial-intelligence-ai-and-medical-device-software-regulation)
- AI Clinical Use Guide (v1.0, August 2025) — [Australian Commission on Safety and Quality in Health Care](https://www.safetyandquality.gov.au/resources/ai-clinical-use-guide)
- Artificial Intelligence and Machine Learning in Software as a Medical Device; Predetermined Change Control Plan guidance (December 2024) — [US FDA](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/marketing-submission-recommendations-predetermined-change-control-plan-artificial-intelligence)
- Voluntary AI Safety Standard (September 2024; superseded October 2025 by the Guidance for AI Adoption) — [Department of Industry, Science and Resources](https://www.industry.gov.au/publications/voluntary-ai-safety-standard)
- Guidance for AI Adoption: implementation guidance — the 6 essential practices — [National AI Centre](https://www.ai.gov.au/staying-safe-and-responsible/essential-ai-practices/guidance-ai-adoption-implementation-guidance)
- Office of AI and planned Australian Standards for AI (announced 15 July 2026) — [SBS News](https://www.sbs.com.au/news/article/australia-labor-ai-framework-office-standards/0w2q0yakr)
- "Safetywashing: Do AI Safety Benchmarks Actually Measure Safety Progress?" — NeurIPS 2024. [arxiv.org](https://arxiv.org/pdf/2407.21792)
- "An eating disorders chatbot offered dieting advice, raising fears about AI in health" — [NPR, June 2023](https://www.npr.org/sections/health-shots/2023/06/08/1180838096/an-eating-disorders-chatbot-offered-dieting-advice-raising-fears-about-ai-in-hea)

_This article is published by Holistic Governance for sector information purposes only. It reflects the position as at the date of issue and does not constitute legal, regulatory, audit or financial advice. The specific vulnerabilities described (EchoLeak, guardrail evasion findings) were responsibly disclosed and remediated; they are cited as historical evidence about guardrail design, not as claims about current products. Verify any specific provision on the Federal Register of Legislation (legislation.gov.au) and current regulator guidance before relying on it. © Holistic Governance 2026._
