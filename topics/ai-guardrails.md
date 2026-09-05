---
title: AI Guardrails — What They Actually Are (and Aren't)
topic: ai-guardrails
type: HG Reference
jurisdiction: Australia (national), with international context
lastReviewed: 2026-09-05
publisher: Holistic Governance
publisherUrl: https://hg-au.com
canonicalUrl: https://hg-au.com/topics/ai-guardrails.md
---


# AI Guardrails — What They Actually Are (and Aren't)

> "AI guardrails" is used to mean anything from an independently tested security control to a sentence typed into a prompt. In Holistic Governance's analysis, only two meanings survive scrutiny: a **deterministic, auditable control enforced outside the model** (the OWASP position), and a **control a regulator can enforce against you** (in Australian healthcare, the TGA's intended-purpose boundary). Instructions in a system prompt are neither.

## What is a real AI guardrail?

The clearest technical definition comes from **OWASP's Top 10 for LLM Applications**, the closest thing the industry has to a canonical security reference for AI systems:

- Implement guardrails **outside** the LLM itself; an independent system that inspects outputs is preferable to system-prompt instructions.
- Critical controls — privilege separation, authorisation checks — "must not be delegated to the LLM" but enforced "in a deterministic, auditable manner".
- The system prompt "should not be considered a secret, nor should it be used as a security control".

The practical line: *"we instructed the model not to give medical advice"* is a wish. *"A separate system checks every output before it reaches the user, logs the result, and blocks anything that fails"* is a guardrail. One is probabilistic and invisible; the other is deterministic and auditable.

## What is the regulatory meaning of a guardrail in Australian healthcare?

The second defensible meaning is a control mandated by a regulator with consequences attached. Australia's **Therapeutic Goods Administration (TGA)** regulates software by **intended purpose**, not technology: an AI product intended or used for diagnosis, prevention, monitoring, prediction, prognosis or treatment is a **medical device** requiring inclusion on the **ARTG** (Australian Register of Therapeutic Goods).

The TGA's guidance gives a concrete example: a developer whose general-purpose AI system is found to be giving health advice must either **implement controls to prevent the system from providing health advice**, or **stop supply**, seek approval for the new intended use, and include the product in the ARTG. That is "guardrail" meaning something enforceable — implement the control or exit the market.

(The US FDA runs the same logic through premarket pathways, and has stated its traditional device-regulation paradigm "was not designed for adaptive artificial intelligence and machine learning technologies"; its patch is Predetermined Change Control Plans, final guidance December 2024.)

## Do deployed guardrail products actually work?

Even genuine, engineered guardrails fail, and the documented record matters for boards:

- Deployed guardrail products from major vendors have been **evaded at rates of 60% to over 90%** in published security testing (Mindgard / Lancaster University, ACL LLMSec 2025); one technique reached 100% evasion, and a real-world exploit — EchoLeak (CVE-2025-32711), a zero-click prompt injection in Microsoft 365 Copilot, since patched — chained past four separate vendor guardrails. Detection tools are *a* layer, never *the* layer.
- OWASP itself states it is unclear whether fool-proof prevention of prompt injection is even possible. Every technical control mitigates; none is known to eliminate.
- **Safetywashing** (a NeurIPS 2024 finding): many widely used AI safety benchmarks correlate highly with general model capability, so a model can score better on "safety" simply by being bigger — capability improvements presented as safety advancements.
- Trained-in behaviour is not a guardrail: the US National Eating Disorders Association's chatbot Tessa was taken down in 2023 after reportedly giving dieting advice to people seeking help with eating disorders once generative AI features were added.

## Is ISO/IEC 42001 certification a guardrail?

Not in itself — but it is the one certifiable AI assurance instrument a conformity-assessment body can stand behind. **AS ISO/IEC 42001:2023** (AI management systems; adopted by Standards Australia in 2024, with JAS-ANZ-accredited certification available) certifies that an organisation's *management system* for AI — governance, risk processes, roles, monitoring — meets the standard. It does **not** certify that any model's behaviour is safe or that its guardrails cannot be evaded. Treat a vendor's 42001 certificate as evidence of governance discipline, and keep asking the technical questions below about the controls themselves.

## Is "a human reviews it" a guardrail?

Only when the review is **specified**: who reviews, at what point, accountable for what. **Automation bias** — the documented tendency to accept automated output uncritically — is the mechanism by which unspecified human review quietly stops working. "Human in the loop" without a named role, defined checkpoint and recorded decision is not a control; it is a hope.

## What affordable guardrails should a small or medium provider use?

The most affordable real guardrails are **procedural and architectural**, not purchased filter products:

1. **Approval gates** — defined uses of AI are approved; anything else requires sign-off before use.
2. **Least privilege** — AI tools get access only to the data and systems their approved purpose requires.
3. **Specified human review** — named role, defined checkpoint, recorded decision, especially before anything reaches a consumer, resident or clinical record.
4. **Output boundaries enforced outside the model** — e.g. an AI tool that must not give health advice is technically constrained from doing so, not merely instructed.
5. **Update monitoring** — when a vendor updates a model, behaviour can change; someone owns re-checking it.
6. **Vendor evidence over vendor adjectives** — "robust guardrails" in a deck is a claim; ask what is enforced outside the model, what is logged, and what independent testing exists.

## The guardrail test — six questions to ask any vendor or team

1. Is the control enforced **outside** the model, deterministically — or is it instructions in a prompt?
2. Is it **auditable** — logged, testable, reviewable after the fact?
3. What happens when it fires — block, flag, escalate — and who is accountable?
4. What is the documented **evasion/failure rate**, and who measured it independently?
5. What is logged when the guardrail fires, and who is assigned to review those logs?
6. If the AI drifts into a regulated purpose (e.g. health advice), what stops it — and would the TGA agree?

## Related Holistic Governance references

- [AI Governance for Aged Care Providers](https://hg-au.com/topics/ai-governance-aged-care.md) — the governing-body framework this sits inside
- Full analysis with case studies and sources: ["AI Guardrails" — Everyone Says It. Almost Nobody Can Point at One.](https://hg-au.com/articles/what-ai-guardrails-actually-mean.html)

## Sources

- OWASP Top 10 for LLM Applications 2025 — LLM01:2025 Prompt Injection: https://genai.owasp.org/llmrisk/llm01-prompt-injection/ and LLM07:2025 System Prompt Leakage: https://genai.owasp.org/llmrisk/llm072025-system-prompt-leakage/ (full list: https://owasp.org/www-project-top-10-for-large-language-model-applications/assets/PDF/OWASP-Top-10-for-LLMs-v2025.pdf)
- "Bypassing LLM Guardrails: An Empirical Analysis of Evasion Attacks against Prompt Injection and Jailbreak Detection Systems" — Mindgard / Lancaster University, ACL LLMSec 2025: https://arxiv.org/pdf/2504.11168
- EchoLeak (CVE-2025-32711) — zero-click prompt injection in Microsoft 365 Copilot, patched May 2025: https://www.securityweek.com/echoleak-ai-attack-enabled-theft-of-sensitive-data-via-microsoft-365-copilot/
- NEDA "Tessa" chatbot withdrawal — NPR, June 2023: https://www.npr.org/sections/health-shots/2023/06/08/1180838096/an-eating-disorders-chatbot-offered-dieting-advice-raising-fears-about-ai-in-hea
- Standards Australia — adoption of AS ISO/IEC 42001:2023 (AI management systems): https://www.standards.org.au/news/standards-australia-adopts-the-international-standard-for-ai-management-system-as-iso-iec-42001-2023
- TGA — Artificial intelligence (AI) and medical device software regulation: https://www.tga.gov.au/products/medical-devices/software-and-artificial-intelligence-ai/manufacturing/artificial-intelligence-ai-and-medical-device-software-regulation
- FDA — Marketing Submission Recommendations for a Predetermined Change Control Plan for Artificial Intelligence-Enabled Device Software Functions (final guidance, December 2024): https://www.fda.gov/regulatory-information/search-fda-guidance-documents/marketing-submission-recommendations-predetermined-change-control-plan-artificial-intelligence
- Safetywashing (NeurIPS 2024): https://arxiv.org/abs/2407.21792
- Full source list in the companion article above.

---

*This reference document is maintained by [Holistic Governance](https://hg-au.com) as general information and decision support, not legal advice. Verify regulator positions against current TGA and OWASP guidance before acting.*
