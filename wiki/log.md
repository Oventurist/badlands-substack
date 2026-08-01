# Wiki Log

> Chronological record of all wiki actions. Append-only.
> Format: `## [YYYY-MM-DD] action | subject`

## [2026-08-01] create | Wiki re-initialized under llm-wiki skill (Karpathy pattern)
- Schema: wiki/SCHEMA.md (natural-prose Wikipedia standard, no line-tags)
- Layout: wiki/{entities,concepts,comparisons,queries} + index.md + log.md
- Source: raw/*.md (1,435 articles); transcripts deferred to later phase
- Prior thin pages (token-efficient skill) wiped; restarting for encyclopedic depth
- Ingest cron (85b1758451ba) re-pointed at new pipeline, resumed

## [2026-08-01] ingest | raw/1913.md -> created: 1913-the-year-the-cabal-enslaved-america, federal-reserve (manual pilot, new standard)

## [2026-08-01] ingest | 1913: The Year the Cabal Enslaved America -> created: [andrew-jackson, coinage-act-of-1873, david-ames-wells, donald-trump, gold-standard, jekyll-island-meeting, judy-shelton, long-depression, murray-rothbard, nelson-aldrich, populist-party, pujo-committee, revenue-act-of-1913, second-bank-of-the-united-states, sixteenth-amendment, woodrow-wilson], updated: [federal-reserve]

## [2026-08-01] ingest | 5GW Counter-Offensive - The Censorship Regime and the Road to 2024 -> created: [5gw-counter-offensive-the-censorship, 5th-generation-warfare, anti-defamation-league, bbc, censorship-regime, elon-musk, ofcom, online-safety-bill, robert-f-kennedy-jr, rumble, rishi-sunak, russell-brand, trusted-news-initiative]

## [2026-08-01] ingest | A Bright Red Line -> created: [a-bright-red-line, anthony-blinken, burns-cable-2008, nato, victoria-nuland, william-burns], updated: []

## [2026-08-01] backfill | Inline wikilinks added to prose of all 36 existing pages (was footer-only on ~18)
- Root cause: cron stored links only in trailing "See also"/"Related" lists, not woven into body text.
- Fixed all pages so every mentioned person/org/concept with (or due) a page is a [[wikilink]] inline, Wikipedia-style.
- Audit confirms 36/36 pages now have inline prose links.
- Cron prompt updated to require inline links (not footer-only); cron resumed.

## [2026-08-01] ingest | A Cancer on Modern Journalism -> created: [media-matters, david-brock, jonathan-greenblatt, correct-the-record, ken-paxton, chris-pavlovski, a-cancer-on-modern-journalism], updated: [elon-musk, rumble, anti-defamation-league, censorship-regime]
## [2026-08-01] ingest | A Communist Plot to Take Over America -> created: [a-communist-plot-to-take-over-america, kevin-mccarthy, ron-desantis], updated: []
## [2026-08-01] ingest | A Communist Plot to Take Over America -> created: [andy-frisella, erik-carlson, tiktok, chinese-communist-party, artificial-intelligence, retail-theft-wave, lululemon, ulta-beauty], updated: []
## [2026-08-01] ingest | A Conflict of Interest -> created: [abdelhakim-belhaj, abu-bakr-al-baghdadi, al-qaeda, ali-sallabi, ayman-al-zawahiri, barack-obama, benghazi, cia, hillary-clinton, hezbollah, john-f-kennedy-jr, lebanon, libya, libyan-islamic-fighting-group, mujahideen, muslim-brotherhood, osama-bin-laden, prince-alwaleed, qatar, saudi-arabia, syrian-emergency-task-force, transitional-national-council], updated: [a-conflict-of-interest, donald-trump, george-w-bush, john-mccain, mouza-moustafa, muammar-gaddafi, federal-reserve, iraq-war]
## [2026-08-01] ingest | A Dereliction of Duty -> created: [a-dereliction-of-duty, africom, clinton-foundation, devin-nunes, glen-doherty, house-permanent-select-committee-on-intelligence, kris-paronto, mustafa-abdul-jalil, sean-smith, tyrone-woods], updated: [africom, barack-obama, bashar-al-assad, christopher-stevens, cia, hillary-clinton, john-brennan, leon-panetta, muslim-brotherhood, q-anon, syria]

## [2026-08-01] fix | Cron reliability overhaul
- Rate limit (HTTP 429) was stalling ingest + both watchdogs on the free model.
- Ingest cron (85b1758451ba) slowed to every 10m (was 2m); prompt now mandates:
  * lock -> ingest -> done workflow (queue race fix: no more double-processing)
  * MERGE new info into existing pages (never overwrite), append new source to `sources:` frontmatter
- Watchdogs converted to no_agent=true script jobs (zero LLM calls, immune to 429):
  * Root-Stray Cleanup -> scripts/wiki_watchdog.py (also clears stale locks + dedupes .processed)
  * Link Repair -> scripts/clean_wikilinks.py (copied to hermes scripts dir)
- Fetch + Transcript-Fetch crons converted to no_agent=true too (fetch script was pinned to paid model, hit "requires credits" 404).
- wiki_queue.py: added lock/unlock/clearlocks/fixdups; `done` now clears lock; deduped .processed.txt (had dup of a-communist-plot).

## [2026-08-01] fix | Entity-selection bias: generic institutions skipped
- Root cause: ingest prompt said "each notable person/org/law/event" — free model created pages only for proper names/acronyms (CIA, AFRICOM) and SKIPPED generic-but-central institutions (State Department, Pentagon, Congress).
- state-department page never created; `[[state-department]]` links were dangling -> Obsidian graph showed it as unresolved node; link-repair watchdog later unlinked them.
- Fix: prompt now explicitly requires pages for generic-but-central institutions when the article treats them as significant actors.
- Re-queued a-conflict-of-interest.md + a-dereliction-of-duty.md for re-ingest with the fixed prompt (state-department should be created from these).

## [2026-08-01] ingest | A Family Affair -> created: [a-family-affair, armando-codina, barclays, bay-of-pigs-invasion, bush-family, cali-cartel, carlos-andres-perez, carlos-salinas, carlos-slim, enron, fox-business, george-hw-bush, gulf-cartel, institutional-revolutionary-party, james-baker, jeb-bush, jorge-stergios, jose-francisco-ruiz-massieu, juan-garcia-abrego, kenneth-lay, lehman-brothers, mario-ruiz-massieu, mark-guzzetta, medellin-cartel, miguel-recarey, nafta, operation-zapata, pablo-escobar, raul-salinas, richard-lawless, robert-gambino, tampa-bay-times, texas-commerce-bank, texas-national-bank, the-guardian, the-washington-post, wayne-madsen-report, zapata-offshore], updated: [hugo-chavez, cia, donald-trump, index.md]
## [2026-08-01] fix | index.md rebuilt: 53 orphaned pages (created in prior ticks but never indexed) added; Entities/Concepts re-sorted alphabetically; duplicate and malformed ("|- [[") lines cleaned; Total pages corrected 90 -> 155.

## [2026-08-01] incident | Sources-normalization script truncated ALL 152 wiki pages
- normalize_sources.py (regex-based frontmatter rewrite) mishandled CRLF line endings and wrote every page as frontmatter-only, destroying all bodies.
- RECOVERED 150/152 pages from the session DB (cron write_file tool calls in state.db) via scripts/recover_wiki.py; restored 4 manual pages (cabal, fiat-currency, internal-revenue-service, 1913-the-year) from session context.
- Skipped 2 stale old-era drafts (NATO-expansion.md, Vladimir-Putin.md) — not part of current wiki.
- Post-restore: 153 pages, 0 blank, 0 broken links (link-repair watchdog re-run).
- SAFEGUARDS ADDED: (1) git repo initialized + baseline commit (171 files) — rollback available; (2) normalize_sources.py DELETED; (3) raw corpus + articles/ gitignored (immutable, huge).
- LESSON: never bulk-rewrite frontmatter with hand-rolled regex on CRLF files without a backup; prefer git-committed state before any bulk edit.

## [2026-08-01] infra | Private GitHub repo created
- Created Oventurist/badlands-substack (private) via API.
- Pushed 170 tracked files (wiki/, scripts/, .gitignore). main branch.
- Substack2Markdown (16MB third-party scraper) gitignored — re-clone from upstream if needed.
- Credential helper: store (token in ~/.git-credentials).
