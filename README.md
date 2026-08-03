# Badlands Media Wiki

A self-updating, compoundable **LLM wiki** built from the full Badlands Media Substack article corpus, published as a free VitePress site.

The ingest pipeline runs as scheduled cron jobs. Each tick the agent reads one raw article and compiles/enriches Wikipedia-style pages in `wiki/` — entities (people, orgs, agencies, outlets) and recurring concepts — then auto-commits and deploys to Vercel.

**Live site:** deployed from `main` — see the **Site** section below.

---

## Layout

```
badlands-substack/
├── articles/          # queue of articles pulled by fetch cron, ready for ingest
├── posts-new/         # staging dir where the Substack scraper drops new posts
├── raw/               # canonical article corpus (~1,435 .md). IMMUTABLE, gitignored.
├── transcripts/       # podcast transcripts from podscripts.co (deferred ingest phase)
├── wiki/              # the knowledge base (this is what gets published)
│   ├── entities/      # 642 pages — people, orgs, agencies, outlets, laws
│   ├── concepts/      # 278 pages — recurring themes (cabal, deep state, censorship…)
│   ├── index.md       # table of contents
│   ├── log.md         # append-only chronological record of every wiki action
│   ├── purpose.md     # scope + directional goals
│   └── SCHEMA.md      # the page-standard the ingest prompt enforces
├── scripts/           # pipeline tooling (see below)
├── site/              # VitePress source → docs/ is the build output
│   ├── theme-src/     # custom theme: GraphView + IndexBrowser + custom.css
│   └── scripts/       # generate-site.mjs (wiki → site build)
```

**Gitignored (never committed):** `raw/`, `articles/`, `posts-new/`, `transcripts/`, `site/node_modules/`, `site/docs/.vitepress/dist`, `.obsidian/`, and the 16MB `scripts/Substack2Markdown` scraper.

---

## The ingest pipeline

1. **Fetch** — daily cron scrapes the newest Substack posts → `posts-new/`, copies genuinely-new ones into `articles/`.
2. **Ingest** — every **15 min**, the ingest cron agent picks one article from the queue, reads it, and:
   - creates/updates entity & concept pages, merging new facts into existing pages (never overwrites),
   - weaves `[[wikilinks]]` inline into prose (Wikipedia-style; no `[fact]`/`[hypothesis]` line-tags),
   - appends the source to each page's `sources:` frontmatter,
   - updates `wiki/index.md` and appends to `wiki/log.md`.
3. **Sources linking** — `scripts/add_source_links.py` runs on every auto-commit, appending a **Sources** section to each page with direct links to the original `badlands.substack.com/p/<slug>` articles.
4. **Auto-commit + deploy** — hourly, all wiki+site changes are committed (as `Oventurist`) and pushed to `main` → Vercel rebuilds automatically.

### Watchdog crons (no-agent, silent sentinels)

| Cron | Interval | Job |
|------|----------|-----|
| Wiki Root-Stray Cleanup | 5m | clears stale ingest locks, dedupe `processed.txt`, removes stray files from project root |
| Ingest Rate-Limit Watchdog | 5m | on a 429, ratchet ingest 15m → 20m → … → 60m |
| Wiki Link Repair | 10m | unlink links to nonexistent pages, normalize slugs |

---

## Requirements

- Windows (project paths are `C:/…`; the cron runner uses git-bash / MSYS).
- **Python 3.11** for the cron scripts and scrapers.
- **Node 18+** for the VitePress build.
- `hermes` CLI for cron management.

---

## Building & viewing locally

```bash
# build the site (generates graph-data.json, index-data.json, docs/index.md, config)
cd site
npm run generate

# full production build
npm run build

# dev server with hot reload
npm run dev
```

For local preview, serve the static build with a plain HTTP server (VitePress's preview server does **not** serve raw JSON like `graph-data.json`):

```bash
cd site/docs/.vitepress/dist
python -m http.server 4175
# → http://localhost:4175
```

### Custom theme ("Stitch-lite")

- `site/theme-src/theme/` — custom VitePress theme (kept out of `docs/` so the build can regenerate).
- **Dark theme**, Source Serif 4 body, editorial lead paragraphs, ⌘K badge.
- **GraphView.vue** — an interactive D3 knowledge graph: tap node = select (no accidental navigation), "Find a page" search, "Open page →" action bar. Force-simulation tuned for node spacing (charge −900, link distance 95).
- **IndexBrowser.vue** — filterable A–Z index for `/entities` and `/concepts` (category chips + search).

---

## Maintenance scripts (`scripts/`)

| Script | Purpose |
|--------|---------|
| `add_source_links.py` | append a **Sources** section linking each page to its original article(s). Idempotent; also runs in the auto-commit cron. |
| `advance-queue.sh` / `fetch-new-articles.sh` | queue advancement + article fetch helpers |
| `wiki_queue.py` | queue lock/unlock/clearlocks/dedupe |
| `wiki_watchdog.py` | no-agent watchdog: clear stale locks, dedupe processed |
| `clean_wikilinks.py` | repair wikilinks across the wiki (unlink links to nonexistent pages) |
| `fix_sources.py` | normalize `sources:` frontmatter to `[raw/…]` form |
| `link_core_concepts.py` / `link_source_articles.py` | backfill cross-links |
| `recover_wiki.py` | recover pages from a prior incident (see below) |

---

## ⚠️ Operation history & safety rules

- **Never bulk-rewrite frontmatter with a hand-rolled regex on CRLF files without a git backup.** A past `normalize_sources.py` truncated every page (recovered via `scripts/recover_wiki.py` and the session DB). Always work from a committed baseline.
- **Cron scripts on Windows must be `.py`, not `.sh`.** The cron runner routes `.sh` no-agent scripts through the WSL bash relay, whose default distro (`docker-desktop`) has no `/bin/bash` → they die with `execvpe(/bin/bash) failed`. Use `.py` equivalents.
- **Git identity** must be `Oventurist <REDACTED+Oventurist@users.noreply.github.com>` — Vercel deploy depends on it (commits authored otherwise fail the build).
- Keep the wiki's page format canonical (`SCHEMA.md`) — the `[fact]`/`[hypothesis]` tags described in older drafts are superseded by in-text epistemic framing.

---

## Pipeline status

- Wiki: **~920 pages** (≈642 entities + 278 concepts), 0 broken links.
- Ingest interval: **every 15 min** (rate-limit watchdog can slow it if the free model 429s).
- Deploy: auto on every push to `main` via Vercel.

If you're looking for how to add, change, or disable a scheduled job: `hermes cron list` / `hermes cron edit <id>` — see the Ingestion section above for which crons own which steps.