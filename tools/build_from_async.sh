#!/usr/bin/env bash
# Single-source the BFS218 sync "Field Guide" from the async "Atlas".
#
# The ASYNC _app is the CANONICAL source for course CONTENT, the SLIDE deck,
# and the app ENGINE. This script regenerates the sync's derived files so the
# two sites never drift. The sync index.html (the reskin: cool Seneca palette,
# red brand block, jewel phases, "Field Guide" identity) is sync-specific and is
# NOT touched here.
#
# Workflow when content changes:
#   1. Edit the async content (Asynchronous/_app/...), deploy the async.
#   2. Run this script:  bash tools/build_from_async.sh   (optionally --deploy)
#   3. The sync inherits the change. Deploy the sync (git push) if not using --deploy.
#
# No em or en dashes in any output.
set -euo pipefail
HERE="$(cd "$(dirname "$0")/.." && pwd)"                 # Synchronous/_app
ASYNC="$(cd "$HERE/../../Asynchronous/_app" && pwd)"     # Asynchronous/_app

echo "Source (canonical): $ASYNC"
echo "Target (derived):   $HERE"

# 1. Engine: the sync uses the same reference app as the async.
cp "$ASYNC/app.js" "$HERE/app.js"

# 2. Data: async content, with the two sync-only presentational overrides
#    (delivery mode label + jewel-tone phase accents). Content is untouched.
node -e '
global.window = {};
require(process.argv[1]);
var B = window.BFS218;
B.course.mode = "Online Synchronous";
B.phases = [
 {id:"listening", name:"Listening",               weeks:[1,2,3],      accent:"#2C7A7B", fill:"#E2F0F0"},
 {id:"inquiring", name:"Inquiring and Gathering", weeks:[4,5,6,7],    accent:"#4C5FD5", fill:"#E7E9FB"},
 {id:"rooting",   name:"Rooting",                 weeks:[8,9,10],     accent:"#B83280", fill:"#F6E4F0"},
 {id:"weaving",   name:"Weaving",                 weeks:[11,12,13,14],accent:"#B7791F", fill:"#F6ECD9"}
];
require("fs").writeFileSync(process.argv[2], "window.BFS218 = " + JSON.stringify(B, null, 1) + ";\n");
' "$ASYNC/data/course-data.js" "$HERE/data/course-data.js"

# 3. Slides: same deck renders.
rsync -a --delete "$ASYNC/slides/" "$HERE/slides/"

echo "Derived files regenerated from the async source."

if [ "${1:-}" = "--deploy" ]; then
  cd "$HERE"
  export BFS218_SYNC_BUILD=1   # tells the sync pre-commit guard this is a legitimate derived build
  if [ -n "$(git status --porcelain)" ]; then
    git add -A
    git commit -q -m "Sync content from async source (build_from_async.sh)"
    git push -q origin main
    echo "Sync site deployed."
  else
    echo "No changes to deploy; sync already matches the async source."
  fi
else
  echo "Run with --deploy to commit and push the sync site, or git push manually from $HERE."
fi
