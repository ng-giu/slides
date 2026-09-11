#!/bin/sh
# Resolve a lab number to its deck and hand it to slidev.
#   deck.sh dev    <n>  -> slidev labs/lab-0n.md --open
#   deck.sh export <n>  -> slidev export labs/lab-0n.md --output dist/lab-0n.pdf
#
# Lab numbers are written unpadded on the command line (`2`) and padded here, so
# `bun run lab 2` and `bun run lab 02` both find labs/lab-02.md.
set -e

mode=$1
num=${2:-}

case $mode in
  dev)    usage="bun run lab <lab-number>" ;;
  export) usage="bun run export <lab-number>" ;;
  *)      echo "deck.sh: unknown mode '$mode' (expected dev or export)" >&2; exit 2 ;;
esac

case $num in
  ""|*[!0-9]*)
    echo "usage: $usage   (e.g. ${usage%<lab-number>}2)" >&2
    exit 1
    ;;
esac

n=$(printf %02d "$num")
deck="labs/lab-$n.md"

if [ ! -f "$deck" ]; then
  echo "no deck for lab $num — expected $deck" >&2
  echo "available: $(ls labs/lab-*.md 2>/dev/null | tr '\n' ' ')" >&2
  exit 1
fi

if [ "$mode" = dev ]; then
  exec slidev "$deck" --open
else
  mkdir -p dist
  exec slidev export "$deck" --output "dist/lab-$n.pdf"
fi
