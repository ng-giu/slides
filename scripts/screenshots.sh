#!/bin/sh
# Regenerate the annotated Thunder Client screenshots in
# courses/ebd/public/img/screenshots/ from a real VS Code + Thunder Client,
# sending real requests to the real Lab 4 solution.
#
# Usage:
#   bun run screenshots
#
# Needs Docker. Everything runs inside the Playwright image, so the VS Code it
# drives never touches the VS Code on this machine (running a second one on the
# host kills a remote-tunnel session). VS Code, Thunder Client and Express are
# downloaded once into .cache/screenshots/, which is gitignored.
set -e

cd "$(dirname "$0")/.."
REPO=$(pwd)
CACHE="$REPO/.cache/screenshots"
PW_VERSION=$(node -p 'require("./node_modules/playwright-chromium/package.json").version')
IMAGE="mcr.microsoft.com/playwright:v$PW_VERSION-noble"

case $(uname -m) in
  aarch64|arm64) VSCODE_ARCH=linux-arm64 ;;
  *)             VSCODE_ARCH=linux-x64 ;;
esac

mkdir -p "$CACHE"

if [ ! -x "$CACHE/vscode/code" ]; then
  echo "Downloading VS Code ($VSCODE_ARCH)..."
  curl -sL "https://update.code.visualstudio.com/latest/$VSCODE_ARCH/stable" | tar xz -C "$CACHE"
  mv "$CACHE"/VSCode-* "$CACHE/vscode"
fi

# Everything below runs in the container as you, so files it writes stay yours
docker run --rm --init \
  -u "$(id -u):$(id -g)" -e HOME=/tmp/home \
  -v "$REPO:/repo" -v "$CACHE:/cache" -w /repo \
  "$IMAGE" sh -c '
    set -e
    if [ ! -d /cache/extensions ]; then
      echo "Installing Thunder Client..."
      ELECTRON_RUN_AS_NODE=1 /cache/vscode/code /cache/vscode/resources/app/out/cli.js \
        --extensions-dir /cache/extensions --install-extension rangav.vscode-thunder-client >/dev/null
    fi

    # The API the screenshots talk to: the Lab 4 solution, exactly as students get it
    mkdir -p /cache/api
    cp courses/ebd/snippets/lab-04/server.js courses/ebd/snippets/lab-04/package.json /cache/api/
    (cd /cache/api && npm install --silent --no-audit --no-fund)
    (cd /cache/api && node server.js > /tmp/api.log 2>&1 &)
    until node -e "fetch(\"http://localhost:3000\").then(() => process.exit(0), () => process.exit(1))"; do sleep 0.3; done

    xvfb-run -a -s "-screen 0 1600x1000x24" node scripts/screenshots/shoot.mjs
  '
