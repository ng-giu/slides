#!/bin/sh
set -e

PORT="${PORT:-3030}"

# Determine target deck:
# 1. Positional arguments:
#    - "lab 1" or "assignment 1"
#    - "labs/lab-01.md"
#    - direct execution commands (e.g. sh, bash, bun)
# 2. Environment variables:
#    - DECK (e.g. "labs/lab-01.md")
#    - KIND ("lab" or "assignment") and NUM ("1", "01", etc.)

if [ $# -gt 0 ]; then
  case "$1" in
    lab|assignment)
      kind="$1"
      num="${2:-1}"
      n=$(printf %02d "$num")
      deck="labs/$kind-$n.md"
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
      elif [ -f "labs/lab-$(printf %02d "$1").md" ]; then
        deck="labs/lab-$(printf %02d "$1").md"
      else
        deck="$1"
      fi
      ;;
  esac
else
  if [ -n "$DECK" ]; then
    deck="$DECK"
  else
    kind="${KIND:-lab}"
    num="${NUM:-1}"
    n=$(printf %02d "$num")
    deck="labs/$kind-$n.md"
  fi
fi

if [ ! -f "$deck" ]; then
  echo "Error: Deck file '$deck' does not exist." >&2
  echo "Available decks in labs/:" >&2
  ls -1 labs/*.md 2>/dev/null || true
  exit 1
fi

echo "==> Starting Slidev server for: $deck"
echo "==> Listening on: 0.0.0.0:$PORT"

REMOTE_ARG="--remote=${REMOTE_PASSWORD:-}"

exec bunx slidev "$deck" "$REMOTE_ARG" --bind 0.0.0.0 --port "$PORT"
