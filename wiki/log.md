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

## [2026-08-01] ingest | A Conflict of Interest (re-ingest) -> created: [coalition-provisional-authority, combating-terrorism-center, congress, saif-al-islam-gaddafi, senate-armed-services-committee, state-department, treasury-department, united-nations], updated: [a-conflict-of-interest, index]
- Normalized `sources:` frontmatter to canonical inline `[raw/...]` form across 95 wiki pages (scripts/fix_sources.py).

## [2026-08-01] ingest | A Dereliction of Duty (re-ingest, institutions pass) -> created: [al-qaeda-in-the-islamic-maghreb, ali-sait-akin, bob-grenier, jeremy-bash, joe-lange, john-tiegen, memorandum-of-notification, national-archives, pentagon, stand-down-order, turkey, white-house], updated: [a-dereliction-of-duty, index]

## [2026-08-01] ingest | A Gateway to a New World of Cooperation -> created: [a-gateway-to-a-new-world-of-cooperation, matthew-ehret, shanghai-cooperation-organisation, tianjin-declaration, vladimir-putin, xi-jinping, narendra-modi, belt-and-road-initiative, eurasian-economic-union, sergey-glazyev, multipolar-alliance, rules-based-international-order, un-charter, bretton-woods-system, international-monetary-fund, world-bank, franklin-d-roosevelt, four-freedoms, atlantic-charter, henry-wallace, john-f-kennedy, peace-of-westphalia, congress-of-vienna, league-of-nations, bandung-conference, non-aligned-movement, great-reset, rand-corporation], updated: [united-nations, nato, donald-trump]

## [2026-08-01] ingest | A Hypnotist's Take on Israel, Palestine, and Q -> created: [a-hypnotists-take-on-israel-palestine, operation-mockingbird, nominalization, israel-palestine-conflict, american-hypnotist, badlands-media, clif-high, smedley-butler, rasmussen-reports, ryan-long, stonetoss], updated: [q-anon, 5th-generation-warfare, cabal, donald-trump, index]

## [2026-08-01] ingest | A Journey of Ever-changing Truths -> created: [a-journey-of-ever-changing-truths, rodney-king, george-floyd, oj-simpson, meyer-lansky, mickey-cohen, bugsy-siegel, city-of-london, mi6, mossad, fbi, joe-biden, rick-ross, los-angeles-police-department, doge, jewish-mafia, italian-mafia, los-angeles-riots-1992, watts-riots, harlem-riot-of-1935, violent-crime-control-and-law-enforcement-act-of-1994, prison-privatization, gangster-rap, the-godfather, libor, sofr, bolshevik-revolution, deep-state], updated: [erik-carlson, cia, donald-trump, bill-clinton, cabal, federal-reserve, index]

## [2026-08-01] ingest | A Look At Recent Features -> created: [a-look-at-recent-features-84d, badlands-news-brief, ryan-delarme, ted-kaczynski, world-economic-forum], updated: [matthew-ehret, joe-lange, badlands-media, great-reset, index]

## [2026-08-01] ingest | A Look At Recent Features (August 15, 2025) -> created: [a-look-at-recent-features, observing-consciousness], updated: [matthew-ehret, ryan-delarme, american-hypnotist, badlands-media, vladimir-putin, donald-trump, badlands-news-brief, multipolar-alliance, deep-state, q-anon, index]

## [2026-08-01] ingest | A Glaring Double Standard (institutions/figures pass) -> created: [bari-weiss, dave-rubin, christopher-rufo, nikki-haley, chaya-raichik, stopantisemitism, foundation-for-individual-rights-and-expression, international-holocaust-remembrance-alliance, antisemitism-awareness-act, executive-order-14188, daily-wire, gina-carano, maura-finkelstein, randy-fine, elissa-slotkin, seth-moulton, robert-menendez, hesen-jabr, nikki-noor-aytoglu, taylor-lorenz, digital-services-act, national-students-for-justice-in-palestine], updated: [ron-desantis, anti-defamation-league, index]

## [2026-08-01] ingest | A More Perfect (Labor) Union -> created: [a-more-perfect-labor-union, afl-cio, solidarity-center, national-endowment-for-democracy, usaid, office-of-strategic-services, american-federation-of-labor, congress-of-industrial-organizations, american-institute-for-free-labor-development, asian-american-free-labor-institute, world-federation-of-trade-unions, force-ouvriere, matthew-woll, philip-murray, lane-kirkland, cheddi-jagan, joao-goulart, salvador-allende, augusto-pinochet, edward-stettinius, jacobin, international-republican-institute, national-democratic-institute, center-for-international-private-enterprise, ukraine, hong-kong, myanmar, marshall-plan, democracy-promotion], updated: [cia, state-department, pentagon, barack-obama, ryan-delarme, africom]

## [2026-08-01] ingest | A Mysterious Masterclass in Multi Sensory Deception -> created: [a-mysterious-masterclass-in-multi, great-american-restoration-tour, spatial-disorientation, information-war, ashe-in-america, steven-kwast, cosmos-mystery-area, federal-aviation-administration, kobe-bryant, william-james], updated: [badlands-media, jfk-jr, barack-obama, index]

## [2026-08-01] ingest | A New American Renaissance -> created: [a-new-american-renaissance, benjamin-west, benjamin-franklin, king-george-iii, william-penn, william-johnson, samuel-morse, john-singleton-copley, william-pitt-the-elder, pierre-beaudry, graham-lowry, cynthia-chung, royal-academy-of-arts, jesuits, iroquois-confederacy, penn-treaty-of-1682, battle-of-quebec-1759], updated: [matthew-ehret, peace-of-westphalia, index]

## [2026-08-01] ingest | A New Hollywood -> created: [a-new-hollywood, hollywood, predictive-programming, project-stargate, paramount-global, skydance-media, larry-ellison, david-ellison, oracle, cbs, showtime, shari-redstone, sumner-redstone, tom-cruise, ronald-reagan, jon-voight, sylvester-stallone, mel-gibson, kamala-harris, vivek-ramaswamy, openai, softbank], updated: [donald-trump, cia, erik-carlson, elon-musk, tiktok, artificial-intelligence, deep-state, index]

## [2026-08-01] manual | Created [[israel]] entity page
- Requested by user; built from FULL end-to-end reading of all processed articles mentioning Israel-related terms.
- Sources: a-hypnotists-take-on-israel-palestine.md (American Hypnotist), a-glaring-double-standard.md (Ryan DeLarme), a-journey-of-ever-changing-truths.md (Erik Carlson), a-gateway-to-a-new-world-of-cooperation.md (passing mention).
- Covers: Israel-Palestine conflict framing, post-Oct-7 campus speech/censorship debates, conspiracy-narrative placement under City of London, multipolar framing.
- 27 inline wikilinks, all resolving; index.md entry added.

## [2026-08-01] ingest | A Re-Alignment of World Systems -> created: [a-re-alignment-of-world-systems, chrystia-freeland, mark-carney, cecil-rhodes, rhodes-scholarship, fabian-society, league-of-social-reconstruction, new-democratic-party, bob-rae, maurice-strong, michael-chomiak, canada-2020, liberal-party-of-canada, justin-trudeau, george-soros, bill-gates, warren-buffett, al-gore, jeffrey-sachs, strobe-talbott, anatoly-chubais, yegor-gaidar, boris-yeltsin, oleg-deripaska, roman-abramovich, petro-poroshenko, viktor-pinchuk, mikhail-khodorkovsky, viktor-yanukovych, european-union, world-trade-organization, imf, glass-steagall-act, green-new-deal, new-deal, blair-doctrine, paris-agreement], updated: [matthew-ehret, city-of-london, nafta, belt-and-road-initiative, eurasian-economic-union, vladimir-putin, franklin-d-roosevelt, deep-state, nato, donald-trump, badlands-media, index]

## [2026-08-01] infra | Hourly auto-commit cron (2b8177bb1c93)
- no_agent script badlands_wiki_autocommit.py; runs 0 * * * * (top of each hour).
- git add -A + timestamped commit + push; silent when nothing to commit.
- Untracked .obsidian/ (churning workspace.json) to stop it polluting commits.
- First manual run committed 125 pending changes; 417 files tracked.

## [2026-08-01] ingest | A Seismic Shift -> created: [a-seismic-shift, bank-of-north-dakota, postal-savings-system, united-states-postal-service, fedaccounts, public-banking, federal-deposit-insurance-corporation, louis-dejoy, usps-board-of-governors, jose-figueres, morgan-ricks, american-bankers-association, mark-dimondstein, american-postal-workers-union, office-of-inspector-general, ellen-brown, public-banking-institute, roosevelt-institute], updated: [donald-trump, federal-reserve, congress, treasury-department, joe-lange, gold-standard, barack-obama, badlands-media, index]

## [2026-08-01] ingest | A Startling Contradiction at the Heart of 'Our' Legal System -> created: [a-startling-contradiction-at-the, united-states-federal-corporation, united-states-code, chisholm-v-georgia, supreme-court-of-the-united-states, declaration-of-independence, rule-of-law], updated: [american-hypnotist, badlands-media, deep-state, internal-revenue-service, q-anon, donald-trump, index]

## [2026-08-01] ingest | A Swan Song for the MSM -> created: [a-swan-song-for-the-msm, citizen-journalism, mainstream-media, censorship-industrial-complex, countering-foreign-propaganda-and-disinformation-act-of-2016, military-industrial-complex, first-amendment, brexit, los-angeles-times, buzzfeed, sports-illustrated, time-magazine, nbc-news, business-insider, national-geographic, comcast, walt-disney-company, sony, time-warner, news-corp, rupert-murdoch, blackrock, vanguard-group, state-street, berkshire-hathaway, council-on-foreign-relations, cnn, msnbc, fox-news, new-york-times, washington-post, the-atlantic, npr, conde-nast, the-grayzone, consortium-news, terence-mckenna, bernard-cohen, gary-webb, julian-assange, global-engagement-center, libs-of-tiktok, joy-reid, jen-psaki, kellyanne-conway], updated: [taylor-lorenz, ryan-delarme, badlands-media, chaya-raichik, state-department, paramount-global, donald-trump, barack-obama, world-economic-forum, hillary-clinton, index]

## [2026-08-01] ingest | A Time to Strike -> created: [a-time-to-strike, united-auto-workers, writers-guild-of-america, mckinsey-and-company, kaiser-permanente, bureau-of-labor-statistics, future-of-work, automation], updated: [donald-trump, joe-biden, world-economic-forum, ashe-in-america, artificial-intelligence, badlands-media, hollywood, great-reset, index]
