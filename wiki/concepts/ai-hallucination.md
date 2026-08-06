---
title: AI Hallucination
created: 2026-08-06
updated: 2026-08-06
type: concept
tags: [artificial-intelligence, openai, technology, misinformation]
sources: [raw/badlands-news-brief-222.md, raw/badlands-news-brief-cf2.md]
confidence: medium
---

# AI Hallucination

**Hallucination** refers to the tendency of generative [[artificial-intelligence|artificial intelligence]] models to produce confident but false or fabricated statements. The same architecture that enables such models to be creative and to produce text and images also makes them prone to making things up, and the problem has not improved as models have advanced — in some respects it has worsened.[1]

## Measured rates in reasoning models

A technical report from [[openai|OpenAI]], reported via *The New York Times*, detailed hallucination rates for the company's o3 and o4-mini models on an AI benchmark known as SimpleQA: 51 percent and 79 percent respectively.[1] For the earlier o1 model the SimpleQA hallucination rate stood at 44 percent.[1] These are high figures moving in the wrong direction. The models are described as reasoning models because they think through their answers and deliver them more slowly; based on OpenAI's own testing, this deliberation appears to leave more room for mistakes and inaccuracies to be introduced.[1] False facts are by no means limited to OpenAI and ChatGPT.[1]

## Real-world consequences

Commentary in the *Badlands News Brief* by [[ashe-in-america|Ashe in America]] observed that as people become increasingly dependent on generative AI as a replacement for conventional search, these tools are hallucinating up to 79 percent of the time.[1] The brief highlighted a legal filing prepared with AI assistance that contained nonexistent citations and faulty legal reasoning, arguing the responsible lawyer should lose his license for defrauding his client but would likely face only a class or a fine.[1] The same commentary linked the hallucination problem to the software defects behind the [[zoox|Zoox]] robotaxi recall as evidence against claims of an imminent tech-enabled utopia.[1]

## Hallucinated package names as a supply chain risk

A distinct security hazard arises when AI coding assistants hallucinate software dependencies: they suggest code importing packages that do not exist.[2] Running such code should simply produce an import error, but attackers realised the hallucination itself can be hijacked — by creating a malicious package under a commonly hallucinated name and uploading it to a registry or index such as PyPI or npm, so that when an assistant re-hallucinates the co-opted name, installing dependencies and executing the code runs the malware.[2]

Badlands commentary argued that consumers will increasingly need certainty about whether the software they use contains copy-pasted code written by current-generation AI, cautioned that the risk is not confined to Python, and warned that the consequences for those who ignore the issue in the coming "softwar" are difficult to overstate.[2]

## References

1. Badlands Brief — "Badlands News Brief: Intelligence Narratives & Seemingly Impossible Deals", URL: https://badlands.substack.com/p/badlands-news-brief-222
2. Badlands Brief — "Badlands News Brief: Witkoff Woos a Win & Women Go to Space", URL: https://badlands.substack.com/p/badlands-news-brief-cf2
