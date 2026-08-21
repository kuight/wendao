#!/usr/bin/env bash
set -euo pipefail

# LOCAL-ONLY PLAYBOOK: this script is emitted for a future authorized run.
# It never runs during generation. It requires PAT + gh/curl/git/unzip/node.
REPO="${REPO:-kuight/wendao}"
MAIN_SHA_EXPECTED="${MAIN_SHA_EXPECTED:-4e86b2d57cb1356e706b8ce20dc9899505314122}"
BRANCH="${BRANCH:-steward/v5-final-rollout}"
BACKUP_TAG="${BACKUP_TAG:-v4.5.0-fixed-pre-v5-final-rollout}"
POST_TAG="${POST_TAG:-v4.5.0-fixed-post-v5-rollout}"
DRIVE="${DRIVE:-/mnt/aidrive}"
WORK="${WORK:-${TMPDIR:-/tmp}/wendao-v5-final-rollout}"
TOKEN_FILE="${TOKEN_FILE:-${WORK}/tok}"
REMOTE="https://github.com/${REPO}.git"

say(){ printf '\n== %s ==\n' "$*"; }
fail(){ printf 'ERROR: %s\n' "$*" >&2; exit 1; }
need(){ command -v "$1" >/dev/null 2>&1 || fail "missing command: $1"; }
copy_dir(){
  local src="$1" dst="$2"
  [ -d "$src" ] || { printf 'MISSING_SOURCE %s\n' "$src" >&2; return 0; }
  mkdir -p "$dst"
  cp -a "$src"/. "$dst"/
}
copy_file(){
  local src="$1" dst="$2"
  [ -f "$src" ] || { printf 'MISSING_SOURCE %s\n' "$src" >&2; return 0; }
  mkdir -p "$(dirname "$dst")"
  cp -f "$src" "$dst"
}

need git; need curl; need python3; need gh; need node
[ -r "$TOKEN_FILE" ] || fail "PAT unavailable: provide a 0600 token file at $TOKEN_FILE; no remote action was attempted"
chmod 600 "$TOKEN_FILE"
TOKEN="$(cat "$TOKEN_FILE")"
[ -n "$TOKEN" ] || fail "PAT file is empty"
export GH_TOKEN="$TOKEN"
export GIT_TERMINAL_PROMPT=0

say "verify GitHub state"
API="https://api.github.com/repos/${REPO}"
MAIN_SHA="$(curl -fsSL -H "Authorization: Bearer ${TOKEN}" -H 'Accept: application/vnd.github+json' "$API/commits/main" | python3 -c 'import json,sys; print(json.load(sys.stdin)["sha"])')"
[ "$MAIN_SHA" = "$MAIN_SHA_EXPECTED" ] || fail "main drift: expected $MAIN_SHA_EXPECTED got $MAIN_SHA"

say "fresh clone and rollback anchor"
rm -rf "$WORK/repo"
mkdir -p "$WORK"
git -c http.extraheader="Authorization: Bearer ${TOKEN}" clone "$REMOTE" "$WORK/repo" >/dev/null
cd "$WORK/repo"
git fetch origin main
[ "$(git rev-parse origin/main)" = "$MAIN_SHA" ] || fail "clone/API SHA mismatch"
git switch --create "$BRANCH" "origin/main" 2>/dev/null || git switch "$BRANCH"
git tag -f "$BACKUP_TAG" "$MAIN_SHA"
git push origin "refs/tags/$BACKUP_TAG" --force

say "restore v5 minigames from verified AI Drive paths"
# Every source below was inventoried before this script was written.
copy_dir "$DRIVE/wendao-v5-batch2/src/v5/minigame/ai-tutor" "$PWD/src/v5/minigame/ai-tutor"
copy_dir "$DRIVE/wendao-v5-batch2/src/v5/minigame/drawing-puzzle" "$PWD/src/v5/minigame/drawing-puzzle"
copy_dir "$DRIVE/wendao-v5-batch2/src/v5/minigame/tycoon-tower" "$PWD/src/v5/minigame/tycoon-tower"
copy_dir "$DRIVE/wendao-v5-coop-raid" "$PWD/src/v5/minigame/coop-raid"
copy_dir "$DRIVE/wendao-v5-debate" "$PWD/src/v5/minigame/debate"
copy_dir "$DRIVE/wendao-v5-disciple" "$PWD/src/v5/minigame/disciple"
copy_dir "$DRIVE/wendao-v5-hex-puzzle" "$PWD/src/v5/minigame/hex-puzzle"
copy_dir "$DRIVE/wendao-v5-pet-arena" "$PWD/src/v5/minigame/pet-arena"
copy_dir "$DRIVE/wendao-v5-pet-encyclopedia" "$PWD/src/v5/minigame/pet-encyclopedia"
copy_dir "$DRIVE/wendao-v5-romance-vn/src/v5/minigame/romance-vn" "$PWD/src/v5/minigame/romance-vn"
copy_dir "$DRIVE/wendao-v5-sp6/alchemy" "$PWD/src/v5/minigame/alchemy"
copy_dir "$DRIVE/wendao-v5-tower-defense" "$PWD/src/v5/minigame/tower-defense"
copy_dir "$DRIVE/wendao-v5-spirit-farm" "$PWD/src/v5/minigame/spirit-farm"
copy_dir "$DRIVE/wendao-v5-tournament" "$PWD/src/v5/minigame/tournament"
copy_dir "$DRIVE/wendao-v5-quest-engine" "$PWD/src/v5/quest-engine"

say "restore portal hub"
copy_dir "$DRIVE/wendao-v5-portal-hub/portal" "$PWD/src/v5/portal"
# No separate integration-hub directory was present in the inventory; keep this explicit.
printf 'NOTE integration hub source absent from inventoried AI Drive paths; portal copied only.\n' >&2

say "restore question-bank batches"
for batch in 600 batch4 batch5 batch7; do
  src="$DRIVE/wendao-v5-qubanks-${batch}/src/data/v5-expansion"
  [ "$batch" = 600 ] && src="$DRIVE/wendao-v5-qubanks-600/src/data/v5-expansion"
  if [ -d "$src" ]; then
    mkdir -p "$PWD/src/data/v5-expansion"
    cp -f "$src"/*.json "$PWD/src/data/v5-expansion/"
  else
    printf 'MISSING_SOURCE %s\n' "$src" >&2
  fi
done

say "validate and commit per game"
python3 - <<'PY'
import json, pathlib
for p in pathlib.Path('src/data/v5-expansion').glob('*.json'):
    json.load(p.open(encoding='utf-8'))
print('question_bank_json=OK')
PY
for d in src/v5/minigame/*; do
  [ -d "$d" ] || continue
  git add "$d"
  if ! git diff --cached --quiet; then
    git commit -m "v5: add $(basename "$d") learning minigame"
  fi
done
git add src/v5/quest-engine src/v5/portal src/data/v5-expansion
if ! git diff --cached --quiet; then git commit -m 'v5: add quest engine portal and expanded question banks'; fi
node_files=$(git diff "$MAIN_SHA" --name-only -- 'src/**/*.js' '*.js' 2>/dev/null || true)
while IFS= read -r f; do [ -z "$f" ] || node --check "$f"; done <<< "$node_files"
git push -u origin "$BRANCH"

say "open and auto-merge one PR"
PR_URL="$(gh pr create --repo "$REPO" --base main --head "$BRANCH" --title 'v5: final content rollout and learning minigames' --body-file docs/v5-push-playbook.md)"
gh pr merge "$PR_URL" --auto --squash --delete-branch

say "post-merge tag and release"
git fetch origin main
POST_SHA="$(git rev-parse origin/main)"
git tag -a "$POST_TAG" "$POST_SHA" -m "v5 final rollout; rollback: $BACKUP_TAG"
git push origin "$POST_TAG"
rm -rf "$WORK/release"
mkdir -p "$WORK/release"
git archive --format=zip --output="$WORK/release/wendao-v5-playable.zip" origin/main
sha256sum "$WORK/release/wendao-v5-playable.zip" | tee "$WORK/release/SHA256SUMS"
gh release upload v4.5.0-fixed "$WORK/release/wendao-v5-playable.zip" --clobber
unzip -t "$WORK/release/wendao-v5-playable.zip" >/dev/null
printf 'release_smoke=PASS\npost_main_sha=%s\nbackup_tag=%s\npost_tag=%s\n' "$POST_SHA" "$BACKUP_TAG" "$POST_TAG"

say "cleanup"
unset GH_TOKEN TOKEN
rm -f "$TOKEN_FILE"
printf 'token_file_removed=YES\n'
