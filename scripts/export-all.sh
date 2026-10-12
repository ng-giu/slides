#!/bin/sh
# Export every lab and assignment deck, for every course, to PDF, or build the
# web version of every deck.
#
# Usage:
#   export-all.sh          -> dist/<course>/<deck>.pdf for all courses/*/{lab,assignment}-*.md
#   export-all.sh build    -> dist/web/<course>/<deck>/ for the same decks (see SITE_BASE in deck.sh)
#
set -e

PATH="./node_modules/.bin:$PATH"
SCRIPT_DIR=$(dirname "$0")
mode=${1:-export}

total=0
for course_dir in courses/*/; do
  course=$(basename "$course_dir")
  for kind in lab assignment; do
    if ls "$course_dir"$kind-*.md >/dev/null 2>&1; then
      sh "$SCRIPT_DIR/deck.sh" "$mode" "$kind" "$course" all
      count=$(ls "$course_dir"$kind-*.md 2>/dev/null | wc -l)
      total=$((total + count))
    fi
  done
done

echo "Done. ${mode}: $total deck(s) across all courses, in dist/."
