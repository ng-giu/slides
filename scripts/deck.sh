#!/bin/sh
# Resolve a course + deck kind + number to a file and hand it to slidev.
#
# Usage:
#   deck.sh dev    lab        [course] <n>      -> slidev courses/<course>/lab-0n.md --open
#   deck.sh export lab        [course] <n|all>  -> slidev export courses/<course>/lab-0n.md --output dist/<course>/lab-0n.pdf
#   deck.sh dev    assignment [course] <n>      -> slidev courses/<course>/assignment-0n.md --open
#   deck.sh export assignment [course] <n|all>  -> slidev export courses/<course>/assignment-0n.md --output dist/<course>/assignment-0n.pdf
#
# If [course] is omitted, it defaults to 'ebd' for backward compatibility.
# Numbers are written unpadded on the command line (`2`) and padded here (`02`).
# A number may carry a suffix for a companion deck: `5-extra` -> lab-05-extra.md.
set -e

PATH="./node_modules/.bin:$PATH"

mode=$1
kind=$2
arg3=${3:-}
arg4=${4:-}

DEFAULT_COURSE="ebd"

case $mode in
  dev)    action=dev ;;
  export) action=export ;;
  *)      echo "deck.sh: unknown mode '$mode' (expected dev or export)" >&2; exit 2 ;;
esac

case $kind in
  lab|assignment) ;;
  *) echo "deck.sh: unknown kind '$kind' (expected lab or assignment)" >&2; exit 2 ;;
esac

# Resolve course and num/target
if [ -n "$arg4" ]; then
  course=$(echo "$arg3" | tr '[:upper:]' '[:lower:]')
  target=$arg4
elif [ -n "$arg3" ]; then
  case $arg3 in
    all|[0-9]*)
      course="$DEFAULT_COURSE"
      target=$arg3
      ;;
    *)
      course=$(echo "$arg3" | tr '[:upper:]' '[:lower:]')
      echo "usage: bun run $kind $course <number>   (e.g. bun run $kind $course 1)" >&2
      exit 1
      ;;
  esac
else
  echo "usage: bun run $kind [course] <number>   (e.g. bun run $kind ica 1 or bun run $kind 1)" >&2
  exit 1
fi

course_dir="courses/$course"
if [ ! -d "$course_dir" ]; then
  echo "deck.sh: course '$course' not found in courses/ (expected $course_dir)" >&2
  echo "available courses: $(find courses -mindepth 1 -maxdepth 1 -type d -exec basename {} \; 2>/dev/null | tr '\n' ' ')" >&2
  exit 1
fi

out_dir="dist/$course"

# Handle export all
if [ "$action" = export ] && [ "$target" = "all" ]; then
  mkdir -p "$out_dir"
  count=0
  for f in "$course_dir"/$kind-*.md; do
    [ -f "$f" ] || continue
    base=$(basename "$f" .md)
    echo "Exporting $base for course $course..."
    slidev export "$f" --output "$out_dir/$base.pdf"
    count=$((count + 1))
  done
  if [ "$count" -eq 0 ]; then
    echo "No $kind decks found in $course_dir" >&2
    exit 1
  fi
  echo "Successfully exported $count deck(s) to $out_dir/"
  exit 0
fi

# Validate the target: a number, optionally with a suffix (5, 5-extra)
num=${target%%-*}
suffix=${target#"$num"}
case $num in
  ""|*[!0-9]*)
    echo "usage: bun run $kind [course] <number>   (e.g. bun run $kind $course 1, or 5-extra)" >&2
    exit 1
    ;;
esac

n=$(printf %02d "$num")$suffix
deck="$course_dir/$kind-$n.md"

if [ ! -f "$deck" ]; then
  echo "no deck for $kind $target in course '$course' — expected $deck" >&2
  echo "available in $course: $(ls "$course_dir"/$kind-*.md 2>/dev/null | xargs -n 1 basename 2>/dev/null | tr '\n' ' ')" >&2
  exit 1
fi

if [ "$action" = dev ]; then
  exec slidev "$deck" --open
else
  mkdir -p "$out_dir"
  exec slidev export "$deck" --output "$out_dir/$kind-$n.pdf"
fi
