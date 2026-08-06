cd C:/Users/14053/hermes-projects/badlands-substack
REF='Badlands Brief — "The Multinational Offensive Against Free Speech Online", URL: https://badlands.substack.com/p/the-multinational-offensive-against'
RAW=the-multinational-offensive-against
merge () {
  for i in 1 2 3 4 5 6 7 8; do
    if python scripts/wiki_page_lock.py acquire "$2"; then
      python scripts/merge_mno_2024.py "wiki/$1.md" "$RAW" "$REF" "$3"
      python scripts/wiki_page_lock.py release "$2"
      return 0
    fi
    sleep 4
  done
  echo "FAILED LOCK $2"
}
