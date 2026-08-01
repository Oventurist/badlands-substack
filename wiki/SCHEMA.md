# Wiki Schema — Badlands Media Article Wiki

## Domain
Compiled knowledge base from the Badlands Media Substack article corpus (`raw/*.md`, ~1,435 articles). Captures people, organizations, events, narratives, and concepts discussed across the corpus, with full prose coverage and source provenance. Transcripts (`transcripts/`) are a planned later phase.

## Compounding Principle
This is a Karpathy-style LLM Wiki: knowledge is compiled once and kept current. Cross-references are pre-built; contradictions are flagged; synthesis reflects everything ingested. The agent summarizes, cross-references, files, and maintains consistency. The human curates sources.

## Conventions
- File names: lowercase, hyphens, no spaces (e.g., `federal-reserve.md`, `andrew-jackson.md`).
- Every wiki page starts with YAML frontmatter (title, created, updated, type, tags, sources).
- Use `[[wikilinks]]` between pages (minimum 2 outbound links per page).
- When updating a page, always bump the `updated` date and append to `log.md`.
- Every new page must be added to `index.md` under the correct section.
- **Provenance:** On pages synthesizing 3+ sources, append `^[raw/<file>.md]` at the end of paragraphs whose claims trace to a specific source. On single-source pages the `sources:` frontmatter is enough.

## Writing Standard (CRITICAL — approved by user)
Pages MUST read like genuine **Wikipedia articles**, NOT extraction notes or tagged databases:
- Use natural **prose paragraphs** with descriptive **section headers** (## Background, ## Key events, ## Related narratives, etc.).
- **NO leading `[fact]`/`[hypothesis]`/`[speculation]` tags** on lines. Signal epistemic status through prose framing instead:
  - Established/historical: state plainly ("The Federal Reserve Act was signed in 1913...").
  - Source's opinion or contested claim: frame in text ("The article argues that...", "According to the source...", "Critics contend...").
  - Pure speculation in the source: mark clearly ("The source presents this as speculation, not established fact.").
- **Capture ALL information** the source conveys about the topic: every named person with affiliation, every date, every figure/quote verbatim, every causal claim. Thin stub pages are a failure mode — be comprehensive.
- Preserve exact numbers, dates, and quotations literally.
- Keep pages scannable; split pages over ~200 lines into sub-topics with cross-links.

## Frontmatter
```yaml
---
title: Page Title
created: YYYY-MM-DD
updated: YYYY-MM-DD
type: entity | concept | comparison | query | summary
tags: [from taxonomy below]
sources: [raw/<file>.md]
confidence: high | medium | low        # how well-supported the claims are
contested: true                        # set when the page has unresolved contradictions
contradictions: [other-page-slug]      # pages this one conflicts with
---
```
`confidence` and `contested` are recommended for opinion-heavy or single-source pages.

## Directory Layout
```
wiki/
├── SCHEMA.md           # this file
├── index.md            # sectioned catalog, one-line summaries
├── log.md              # append-only action log
├── entities/           # people, orgs, agencies, outlets
├── concepts/           # narratives, topics, ideas
├── comparisons/        # side-by-side analyses (as needed)
└── queries/            # filed synthesis answers (as needed)
```
Note: `raw/` lives at project root (immutable source copy), not inside wiki/.

## Tag Taxonomy
- Narrative: cabal, deep-state, central-banking, censorship, info-war, election-integrity, foreign-policy, media-criticism
- People/Orgs: person, agency, outlet, administration, bank, think-tank
- Method: investigation, leak, testimony, legislation, court-case
- Meta: comparison, timeline, controversy, synthesis
Add new tags here BEFORE using them.

## Page Thresholds
- **Create a page** for ANY person, organization, agency, law, event, or institution that plays a substantive/important role in a source article — REGARDLESS of how generic the name is. This includes generic government bodies and institutions: State Department, Pentagon, Congress, White House, Senate, courts, regulatory agencies, international bodies, etc. If the article treats it as a significant actor, it gets a page. When in doubt, create the page.
- **Add to existing page** when a source adds new info to something already covered.
- **Don't create a page** for trivial passing mentions (a name dropped once with no role).
- **Split** pages over ~200 lines.

## Entity Pages
Overview, key facts/dates, relationships ([[wikilinks]]), source references, confidence.

## Concept Pages
Definition, current state of knowledge in the corpus, open questions/debates, related concepts, sources.

## Update Policy
On contradiction: check dates (newer generally supersedes), note both positions with dates+sources, set `contested: true`, flag for review. Never silently overwrite.

## Ingestion Cadence
Processed via scheduled cron (one article per tick, ~every 2 min). Each tick:
1. `python scripts/wiki_queue.py next` → path (or DONE).
2. Read the article + `purpose.md`.
3. Write/update its article page AND any entity/concept pages it substantively covers (full prose, per Writing Standard).
4. Add new `index.md` lines + one `log.md` line.
5. `python scripts/wiki_queue.py done <basename>`.
Transcripts excluded until a later phase.
