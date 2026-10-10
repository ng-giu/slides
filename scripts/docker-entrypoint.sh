#!/bin/sh
set -e

PORT="${PORT:-3030}"
DEFAULT_COURSE="ebd"

# Determine target deck:
# 1. Positional arguments:
#    - "lab [course] <num>" or "assignment [course] <num>" (e.g. "lab 1", "lab ica 2")
#    - "courses/<course>/<kind>-<num>.md" (or any *.md)
#    - direct execution commands (e.g. sh, bash, bun)
# 2. Environment variables:
#    - DECK (e.g. "courses/ebd/lab-01.md")
#    - COURSE ("ebd", "ica", etc., default: "ebd")
#    - KIND ("lab" or "assignment", default: "lab")
#    - NUM ("1", "01", etc., default: "1")

if [ $# -gt 0 ]; then
  case "$1" in
    lab|assignment)
      kind="$1"
      if [ -n "$3" ]; then
        course=$(echo "$2" | tr '[:upper:]' '[:lower:]')
        num="$3"
      elif [ -n "$2" ]; then
        case "$2" in
          [0-9]*)
            course="${COURSE:-$DEFAULT_COURSE}"
            num="$2"
            ;;
          *)
            course=$(echo "$2" | tr '[:upper:]' '[:lower:]')
            num="${NUM:-1}"
            ;;
        esac
      else
        course="${COURSE:-$DEFAULT_COURSE}"
        num="${NUM:-1}"
      fi
      # A number may carry a suffix for a companion deck: 5-extra -> lab-05-extra.md
      base=${num%%-*}
      n=$(printf %02d "$base")${num#"$base"}
      deck="courses/$course/$kind-$n.md"
      ;;
    *.md)
      deck="$1"
      ;;
    bun|node|sh|bash|exec)
      exec "$@"
      ;;
    *)
      if [ -f "$1" ]; then
        deck="$1"
      elif [ -f "courses/${COURSE:-$DEFAULT_COURSE}/lab-$(printf %02d "$1").md" ]; then
        deck="courses/${COURSE:-$DEFAULT_COURSE}/lab-$(printf %02d "$1").md"
      else
        deck="$1"
      fi
      ;;
  esac
else
  if [ -n "$DECK" ]; then
    deck="$DECK"
  else
    course=$(echo "${COURSE:-$DEFAULT_COURSE}" | tr '[:upper:]' '[:lower:]')
    kind="${KIND:-lab}"
    num="${NUM:-1}"
    n=$(printf %02d "$num")
    deck="courses/$course/$kind-$n.md"
  fi
fi

if [ ! -f "$deck" ]; then
  echo "Error: Deck file '$deck' does not exist." >&2
  echo "Available decks in courses/:" >&2
  find courses -type f -name "*.md" 2>/dev/null | sort || true
  exit 1
fi

echo "==> Starting Slidev server for: $deck"
echo "==> Listening on: 0.0.0.0:$PORT"

REMOTE_ARG="--remote=${REMOTE_PASSWORD:-}"

exec bunx slidev "$deck" "$REMOTE_ARG" --bind 0.0.0.0 --port "$PORT"
