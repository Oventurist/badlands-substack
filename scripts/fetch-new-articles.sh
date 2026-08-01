#!/bin/bash
# Fetch newest Badlands Substack posts and queue genuinely new ones into unprocessed/
set -e
PROJ="C:/Users/14053/hermes-projects/badlands-substack"
SCRAPER="$PROJ/scripts/Substack2Markdown"

cd "$SCRAPER"
SUBSTACK_INTER_DELAY=1.0 SUBSTACK_JITTER=0.5 ./.venv/Scripts/python substack_scraper.py \
  --url https://badlands.substack.com \
  --directory "$PROJ/posts-new" --number 15 2>/dev/null || true

cd "$PROJ"
new=0
for f in posts-new/badlands/*.md; do
  b=$(basename "$f")
  if [ ! -e "raw/$b" ] && [ ! -e "unprocessed/$b" ]; then
    cp "$f" unprocessed/
    echo "NEW: $b"
    new=$((new+1))
  fi
done
echo "Added $new new article(s) to unprocessed/. Queue size: $(find unprocessed -name '*.md' | wc -l)"
