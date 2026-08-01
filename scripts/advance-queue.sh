#!/usr/bin/env bash
set -euo pipefail
BASE="C:/Users/14053/hermes-projects/badlands-substack"
UNPROCESSED="$BASE/unprocessed"
RAW="$BASE/raw"
mkdir -p "$UNPROCESSED" "$RAW"
shopt -s nullglob
files=("$UNPROCESSED"/*.md)
if [ "${#files[@]}" -eq 0 ]; then
  echo "QUEUE_EMPTY"
  exit 0
fi
next="${files[0]}"
name="$(basename "$next")"
mv "$next" "$RAW/$name"
echo "MOVED $name"
