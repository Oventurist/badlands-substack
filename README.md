# Badlands Media Wiki

A self-updating, compoundable **LLM wiki** built from the full Badlands Media Substack article corpus, published as a free VitePress site on GitHub Pages.

The daily pipeline (one cron, 08:00) fetches the newest Substack article, ingests it into Wikipedia-style pages in `wiki/` — entities (people, orgs, agencies, outlets) and recurring concepts — with inline `[N]` citations, then repairs links, auto-commits, and pushes. GitHub Actions builds and deploys the site. A failure-alert cron (10:00) pings the owner only when something breaks.

**Live site:** https://oventurist.github.io/badlands-substack/

---

## Layout

```
badlands-substack/
├── articles/          # articles pulled by the daily fetch (master copy)
├── posts-new/         # staging dir where the Substack scraper drops new posts
├── raw/               # canonical article corpus (~1,435 .md). IMMUTABLE, gitignored.
├── wiki/              # the knowledge base (this is what gets published)
│   ├── entities/      # ~8,000 pages — people, orgs, agencies, outlets, laws
│   ├── concepts/      # ~4,000 pages — ideas and narratives
│   ├── index.md       # alphabetical index (auto-updated)
│   └── log.md         # ingest log (auto-updated)
├── site/              # VitePress site (theme + generator)
│   ├── scripts/generate-site.mjs  # wiki -> docs generator
│   └── theme-src/     # custom theme (IndexBrowser, HomeSearch, custom.css)
├── scripts/           # wiki_queue.py (claim/done ledger) + worker_prompt_v2.txt
├── logs/              # ingest progress/timings logs
└── .github/workflows/deploy.yml   # split build + GitHub Pages deploy
```

## How it works

**Daily cron (08:00, `deepseek-v4-flash-free`/`opencode` — free model):**
1. `badlands-fetch-new.py` — scrape the 15 newest Substack posts into `articles/`
2. Sync `articles/` → `raw/`, then `wiki_queue.py next` picks the new article
3. Agent compiles entity/concept pages (Wikipedia cadence, inline `[1][2]` citations + `## References`, `sources:` frontmatter)
4. Link-repair + stray-cleanup scripts
5. Auto-commit + push → GitHub Actions build → GitHub Pages deploy

**Failure alerts (10:00, no_agent):** checks the latest Actions run, live site status, and the daily cron's last status. Silent when healthy; alerts once per failure (deduped).

## Site build

`site/scripts/generate-site.mjs` rewrites wikilinks, moves `## References` to the page end, linkifies `[N]` citations, and generates the VitePress config (`base: /badlands-substack/`). The CI workflow builds entities and concepts as separate halves (dot-prefixed hidden dirs) to stay under the runner's memory limit, then merges.

## Notes

- `raw/` and `articles/` are gitignored (large, immutable corpus). `transcripts/` was removed — podcasts are out of scope for now.
- The old pre-citation wiki (`scripts/sec/`) and all one-off rebuild scripts were deleted in the Aug 2026 cleanup; git history retains them if ever needed.
- Commits are authored as `Oventurist <77593698+Oventurist@users.noreply.github.com>`.
