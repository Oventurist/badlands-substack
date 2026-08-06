#!/bin/bash
cd C:/Users/14053/hermes-projects/badlands-substack
SLUGS="kamala-harris tim-walz dana-bash jake-sullivan zhang-youxia peoples-liberation-army taiwan xi-jinping al-aqsa-mosque itamar-ben-gvir saudi-arabia israel-defense-forces shin-bet yoav-gallant knesset benzi-gopstein gavin-newsom tren-de-aragua aurora-colorado department-of-homeland-security alejandro-mayorkas ukraine patriot-missile-system x-corp alexandre-de-moraes brazil trump-hush-money-case"
for s in $SLUGS; do
  for i in 1 2 3 4 5 6 7 8; do
    python scripts/wiki_page_lock.py acquire $s >/dev/null 2>&1 && break
    sleep 5
  done
done
python scripts/merge_889.py scripts/merge_889.json
for s in $SLUGS; do python scripts/wiki_page_lock.py release $s >/dev/null 2>&1; done
echo DONE
