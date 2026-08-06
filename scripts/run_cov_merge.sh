#!/usr/bin/env bash
set -u
BASE=C:/Users/14053/hermes-projects/badlands-substack
RAW=the-covfefe-dig
TITLE="The COVFEFE Dig"
URL=https://badlands.substack.com/p/the-covfefe-dig
SEC=C:/Users/14053/AppData/Local/Temp/cov
for f in $SEC/*.md; do
  slug=$(basename "$f" .md)
  if [ -f "$BASE/wiki/entities/$slug.md" ]; then page="$BASE/wiki/entities/$slug.md";
  elif [ -f "$BASE/wiki/concepts/$slug.md" ]; then page="$BASE/wiki/concepts/$slug.md";
  else echo "MISSING $slug"; continue; fi
  ok=0
  for i in 1 2 3 4 5 6 7 8; do
    if python "$BASE/scripts/wiki_page_lock.py" acquire "$slug" >/dev/null 2>&1; then ok=1; break; fi
    sleep 4
  done
  if [ $ok -ne 1 ]; then echo "LOCKFAIL $slug"; continue; fi
  n=$(python "$BASE/scripts/merge_append.py" "$page" "$RAW" "$TITLE" "$URL" "$f")
  echo "merged $slug -> [$n]"
  python "$BASE/scripts/wiki_page_lock.py" release "$slug" >/dev/null 2>&1
done
