import re

# Reconstruct the EXACT original ingest prompt from the cron output file (it's copied verbatim)
src = open(r'C:/Users/14053/AppData/Local/hermes/cron/output/85b1758451ba/2026-08-04_05-00-27.md', encoding='utf-8').read()
lines = src.splitlines()
# The prompt body starts at line index 10 (line 11, "You are a wiki compiler...")
# and ends at line index 47 (line 48, the QUALITY BAR line). Line 9 is the cron wrapper note (skip).
prompt_lines = lines[10:48]  # 0-indexed: 10..47 inclusive
orig = "\n".join(prompt_lines)
print("RECONSTRUCTED LEN:", len(orig))
print("STARTS:", repr(orig[:60]))
print("ENDS:", repr(orig[-60:]))

# ---- MODIFICATION 1: remove ARTICLE PAGE creation (step 4a) ----
assert "a) ARTICLE PAGE: wiki/concepts/SLUG.md" in orig, "article page block not found"
old4 = '''4) Create/Update pages (all under wiki/, absolute paths, kebab slugs):
   a) ARTICLE PAGE: wiki/concepts/SLUG.md (SLUG = kebab-case of filename without .md).
      - YAML frontmatter: title, created, updated, type: concept, tags (3-6, kebab), sources (canonical inline [raw/...] form), confidence (high|medium), contested (true if interpretive/opinionated).
      - Body: encyclopedic Wikipedia-style prose. Natural paragraphs + section headers (## ). NO line-leading [fact]/[hypothesis] tags. State the source's claims in prose ("The article argues that...", "According to the source..."). Keep ALL substantive detail: named people, dates, figures, direct quotes.
   b) ENTITY/CONCEPT PAGES for each notable person/org/law/event/institution in the article: wiki/entities/ or wiki/concepts/ SLUG.md. One page per entity. Same frontmatter style (type: entity or concept). Comprehensive prose, not stubs.'''
new4 = '''4) Create/Update pages (all under wiki/, absolute paths, kebab slugs):
   NOTE: Do NOT create a separate "article page" (wiki/concepts/SLUG.md). The original article is preserved in raw/<slug>.md, and every entity/concept page links back to it via its `sources:` frontmatter + ## Sources section. A separate article page is redundant and wastes output budget.
   b) ENTITY/CONCEPT PAGES for each notable person/org/law/event/institution in the article: wiki/entities/ or wiki/concepts/ SLUG.md. One page per entity. Same frontmatter style (type: entity or concept). Comprehensive prose, not stubs. This is the PRIMARY deliverable.'''
p = orig.replace(old4, new4)
assert p != orig, "mod 1 did not apply"

# ---- MODIFICATION 2: one-line final report (replace step 6 + renumber) ----
old6 = '''6) UPDATE INDEX + LOG (absolute paths):
   - index.md: under the right heading (Entities/Concepts), add "- [[slug]] — one-line description" for each NEW page. Keep alphabetical.
   - log.md: append "## [YYYY-MM-DD] ingest | <article title> -> created: [slugs], updated: [slugs]"
   - Increment the "Total pages" count in index.md.
7) MARK DONE + UNLOCK: python C:/Users/14053/hermes-projects/badlands-substack/scripts/wiki_queue.py done <basename.md>  (this also clears the lock)
8) Do not process more than one source article per tick.'''
new6 = '''6) UPDATE INDEX + LOG (absolute paths):
   - index.md: under the right heading (Entities/Concepts), add "- [[slug]] — one-line description" for each NEW entity/concept page. Keep alphabetical.
   - log.md: append "## [YYYY-MM-DD] ingest | <article title> -> created: [slugs], updated: [slugs]"
   - Increment the "Total pages" count in index.md.
7) FINAL REPORT: respond with ONE line only: "done: <raw-slug> -> created N, updated M". Do NOT write a verbose multi-line report — it wastes output tokens and risks the output-length cap.
8) MARK DONE + UNLOCK: python C:/Users/14053/hermes-projects/badlands-substack/scripts/wiki_queue.py done <basename.md>  (this also clears the lock)
9) Do not process more than one source article per tick.'''
p = p.replace(old6, new6)
assert "FINAL REPORT" in p, "mod 2 did not apply"

out = r'C:/Users/14053/hermes-projects/badlands-substack/scripts/_restored_ingest_prompt.txt'
open(out, 'w', encoding='utf-8').write(p)
print("WROTE restored prompt ->", out, "| len:", len(p))
print("ARTICLE PAGE: subsection present?", "a) ARTICLE PAGE:" in p)
print("one-line report present?", "FINAL REPORT" in p)
