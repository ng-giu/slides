#!/bin/sh
# Resolve a deck kind + number to a file and hand it to slidev.
#   deck.sh dev    lab        <n>  -> slidev labs/lab-0n.md --open
#   deck.sh export lab        <n>  -> slidev export labs/lab-0n.md --output dist/lab-0n.pdf
#   deck.sh dev    assignment <n>  -> slidev labs/assignment-0n.md --open
#   deck.sh export assignment <n>  -> slidev export labs/assignment-0n.md --output dist/assignment-0n.pdf
#
# Numbers are written unpadded on the command line (`2`) and padded here, so
# `bun run lab 2` and `bun run lab 02` both find labs/lab-02.md.
set -e

mode=$1
kind=$2
num=${3:-}

case $mode in
  dev)    action=dev ;;
  export) action=export ;;
  *)      echo "deck.sh: unknown mode '$mode' (expected dev or export)" >&2; exit 2 ;;
esac

case $kind in
  lab|assignment) ;;
  *) echo "deck.sh: unknown kind '$kind' (expected lab or assignment)" >&2; exit 2 ;;
esac

usage="bun run $kind <number>"

case $num in
  ""|*[!0-9]*)
    echo "usage: $usage   (e.g. ${usage%<number>}2)" >&2
    exit 1
    ;;
esac

n=$(printf %02d "$num")
deck="labs/$kind-$n.md"

if [ ! -f "$deck" ]; then
  echo "no deck for $kind $num — expected $deck" >&2
  echo "available: $(ls labs/$kind-*.md 2>/dev/null | tr '\n' ' ')" >&2
  exit 1
fi

if [ "$action" = dev ]; then
  exec slidev "$deck" --open
else
  mkdir -p dist
  exec slidev export "$deck" --output "dist/$kind-$n.pdf"
fi
