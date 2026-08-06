set -e
cd C:/Users/14053/hermes-projects/badlands-substack
merge () {
  slug="$1"; f="$2"
  for i in 1 2 3 4 5 6 7 8; do
    if python scripts/wiki_page_lock.py acquire "$slug" >/dev/null 2>&1; then
      python scripts/merge_a82.py "$slug" < "$f"
      python scripts/wiki_page_lock.py release "$slug" >/dev/null
      return 0
    fi
    sleep 4
  done
  echo "LOCKFAIL $slug"
}
