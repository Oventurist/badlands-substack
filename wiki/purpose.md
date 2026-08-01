# Wiki Purpose — Badlands Media Articles

Compile a structured, queryable knowledge base from Badlands Media Substack articles.

## Scope
- IN: `raw/*.md` article corpus (~1,430 files). Process one article per ingest tick.
- OUT: `wiki/concepts/` and `wiki/entities/` pages, plus `wiki/index.md` and `wiki/log.md`.
- EXCLUDED FOR NOW: `transcripts/` podcast transcripts (may be added in a later phase).

## Directional Goals
1. Map key entities (people, orgs, agencies, outlets) with concise dossiers.
2. Extract recurring concepts (cabal, deep state, central banking, censorship, war-as-racket, ISIS pipeline, etc.).
3. Tag every claim with a discrete epistemic state: `[fact]`, `[verified_inference]`, `[hypothesis]`, `[speculation]`.
4. Enable fast wiki-first synthesis answers via `index.md` lookup.

## Operating Constraints
- Never modify `raw/` source files.
- One article per tick; single-page scope when patching.
- No folder sweeps; no re-reading sources after extraction.
