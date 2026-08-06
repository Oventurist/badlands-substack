#!/bin/bash
cd /c/Users/14053/hermes-projects/badlands-substack
REF='Badlands Brief — "NATO Warmongers & Google Searches for a Way Out", URL: https://badlands.substack.com/p/badlands-news-brief-006'
run() { # slug path secfile
  for i in 1 2 3 4 5; do
    if python scripts/wiki_page_lock.py acquire "$1" >/dev/null 2>&1; then
      python scripts/merge_helper.py "$2" badlands-news-brief-006 "$REF" "$3"
      python scripts/wiki_page_lock.py release "$1" >/dev/null 2>&1
      return
    fi
    sleep 4
  done
  echo "LOCKFAIL $1"
}
run vladimir-putin wiki/entities/vladimir-putin.md scripts/sec/putin.md
run google wiki/entities/google.md scripts/sec/google.md
run alphabet wiki/entities/alphabet.md scripts/sec/alphabet.md
run food-and-drug-administration wiki/entities/food-and-drug-administration.md scripts/sec/fda.md
run moderna wiki/entities/moderna.md scripts/sec/moderna.md
run pfizer wiki/entities/pfizer.md scripts/sec/pfizer.md
run centers-for-disease-control-and-prevention wiki/entities/centers-for-disease-control-and-prevention.md scripts/sec/cdc.md
run burning-bright wiki/entities/burning-bright.md scripts/sec/bb.md
run ashe-in-america wiki/entities/ashe-in-america.md scripts/sec/ashe.md
run badlands-news-brief wiki/concepts/badlands-news-brief.md scripts/sec/brief.md
run zerohedge wiki/entities/zerohedge.md scripts/sec/zh.md
run justice-department wiki/entities/justice-department.md scripts/sec/doj.md
run microsoft wiki/entities/microsoft.md scripts/sec/msft.md
run apple wiki/entities/apple.md scripts/sec/apple.md
run larry-page wiki/entities/larry-page.md scripts/sec/page.md
run covid-19-vaccines wiki/concepts/covid-19-vaccines.md scripts/sec/vax.md
