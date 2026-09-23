#!/bin/sh
# Export every lab and assignment deck, for every course, to PDF.
#
# Usage:
#   export-all.sh          -> exports all courses/*/{lab,assignment}-*.md
#
set -e

PATH="./node_modules/.bin:$PATH"
SCRIPT_DIR=$(dirname "$0")

total=0
for course_dir in courses/*/; do
  course=$(basename "$course_dir")
  for kind in lab assignment; do
    if ls "$course_dir"$kind-*.md >/dev/null 2>&1; then
      sh "$SCRIPT_DIR/deck.sh" export "$kind" "$course" all
      count=$(ls "$course_dir"$kind-*.md 2>/dev/null | wc -l)
      total=$((total + count))
    fi
  done
done

echo "Done. Exported $total deck(s) across all courses to dist/."
