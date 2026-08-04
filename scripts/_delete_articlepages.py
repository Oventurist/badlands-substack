"""One-shot: remove wiki article pages (wiki file whose slug == a raw/<file>.md).

These pages duplicate content already captured on entity/concept pages, which
link back to the original raw article via `sources:` frontmatter. Deleting them
frees ~3,500 output tokens per ingest tick (eliminates the output-length cap).

SAFETY:
- Only deletes wiki files whose slug exactly matches a raw/<slug>.md basename.
  Entity/concept pages are NEVER raw filenames, so this set == the article pages.
- NEVER touches `sources:` frontmatter (raw/ links) or any other file.
- After deletion, run badlands_wiki_linkrepair.py to unlink the now-dead
  [[badlands-brief-...]] wikilinks (handled by caller, not here).
"""
import os, glob, json

ROOT = "C:/Users/14053/hermes-projects/badlands-substack"
RAW = os.path.join(ROOT, "raw")
WIKI = os.path.join(ROOT, "wiki")

raw_slugs = {os.path.splitext(f)[0] for f in os.listdir(RAW) if f.endswith(".md")}

# wiki files whose slug == a raw slug  =>  the article page set
article_pages = []
for d in ("entities", "concepts"):
    for p in glob.glob(os.path.join(WIKI, d, "*.md")):
        slug = os.path.splitext(os.path.basename(p))[0]
        if slug in raw_slugs:
            article_pages.append(p)

print(f"raw_slugs: {len(raw_slugs)}")
print(f"article_pages_to_delete: {len(article_pages)}")
if article_pages:
    print("first 5:", [os.path.basename(p) for p in article_pages[:5]])

# DRAGON: do not delete if count looks wrong (e.g. accidentally huge)
assert 50 <= len(article_pages) <= 400, f"Refusing: unexpected count {len(article_pages)}"

deleted = []
for p in article_pages:
    os.remove(p)
    deleted.append(os.path.basename(p))

print(f"DELETED: {len(deleted)} article pages")

# write a manifest for the caller / audit trail
with open(os.path.join(ROOT, "logs", "deleted-article-pages.txt"), "w", encoding="utf-8") as f:
    f.write("\n".join(sorted(deleted)) + "\n")
print("manifest -> logs/deleted-article-pages.txt")
