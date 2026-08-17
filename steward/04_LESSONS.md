# 04 · Lessons (hard-won rules)

Distilled from the entire Phase 0..6 chronology. Every rule below was paid for with at least one failed task. Read these BEFORE you start writing a Phase 8+ action — most mistakes are already catalogued here.

## L01 · Sandbox token bootstrap must be heredoc + umask 077 + shred

Pattern (proven in G10d / G8b / G11):
~~~bash
mkdir -p /tmp/g11_seed && chmod 700 /tmp/g11_seed
chmod 700 /tmp/g11_seed
umask 077
write token only into /tmp/g11_seed/tok with chmod 600
~~~
Final step must include:
~~~bash
shred -u /tmp/g11_seed/tok
unset TOK GHTOKEN AUTH
rm -rf /tmp/g11_seed
history -c 2>/dev/null || true
~~~
Anything less leaks the token to other processes or to the conversation transcript.

## L02 · Never write a token anywhere visible

Forbidden destinations:
- stdout / echo (NEVER `echo $(cat tok)`)
- commit message (`/git/commits message` field)
- PR title / body (`/pulls title / body` field)
- branch name
- file on disk other than `/tmp/<run>/tok` and that file immediately `shred -u`
- query passed to a sub-agent (sandbox transcripts are replayed; G10b leaked via heredoc string)

## L03 · Never invent a token

If you don't have a real token, you have no token. Do NOT type a fake prefix to `see if it works`. It will return 401 from `/user`. G10c incident.

## L04 · Sandbox ↔ main session token persistence is not guaranteed

Each new sub-agent run starts with a fresh sandbox. `/tmp/<run>/tok` does NOT persist between runs. If a previous run's token file is needed, the supervising session must inject it anew. (G9 first-run failure.)

## L05 · `git push https` is dead

GitHub removed password auth in 2021. `https://x-access-token:TOKEN@...` or `git push https://user:TOKEN@...` both fail. The only working pathway is: Git Data API → `POST /git/trees` → `POST /git/commits` → `POST /git/refs` → `POST /pulls`. Verified in G5.13b.

## L06 · Force-push leaves PR closed with no Reopen button

The GitHub UI does not recover after a `--force-with-lease` if PR is already closed. The work-around: open a new PR on the same head branch via REST API. Status machine resets. Git Data API is unaffected by UI state.

## L07 · Anonymous public REST works on a public repo

For read-only audits on public repos no auth is needed. `https://api.github.com/repos/<owner>/<repo>/...` returns blobs, trees, contents, PRs, commits. `https://raw.githubusercontent.com/<owner>/<repo>/<sha>/<path>` returns raw bytes for SHA-256 computation. Verified in G9b.

## L08 · PNG file with JPEG magic = dual-render pollution

If `file path.png` returns "JPEG image data", the file is a JPEG byte stream with `.png` extension. Browser `<img>` tags render it. `file(1)`, CI, and SHA-based manifests reject it. Two fixes:
- rename to `.jpg` (blob sha unchanged → cheap tree rewrite) — chosen in PR #8
- re-encode as actual PNG and replace blob (lossy)

## L09 · `src/assets/img/MANIFEST.sha256` format must be doubly strict

The 4-token format adopted in PR #8 is:
```
<64-hex sha>  size=<int>  <path>  category=<cat>
```
Two failure modes observed:
- 4-token WITHOUT `size=` / `category=` prefix → regex 0 hit → verification aborts
- single-space separator instead of double-space between sha and size → regex 0 hit

Always validate the format FIRST, then re-validate SHA.

## L10 · SHA-256 must be computed from real download bytes

Never trust a manifest whose hashes were computed offline. Always fetch the blob via `https://api.github.com/repos/<owner>/<repo>/git/blobs/<sha>` or `https://raw.githubusercontent.com/.../<sha>/<path>` and recompute.

## L11 · Sandbox `find src/...` can return 0 on permission-limited mounts

If `find` returns 0 in a sandbox but the file exists in the working tree, fall back to REST API. (Observed in G5.6b.) Don't waste a step trying to chmod / chown / sudo.

## L12 · Don't trust "ok" without HTTP_CODE echo

After every curl that mutates state, capture and echo the HTTP code:
~~~bash
HTTP=$(curl -sS -o body.json -w 'HTTP_%{http_code}' ... -X POST ...)
echo "STEP=X HTTP=$HTTP"
if [ "$HTTP" != "201" ]; then exit 1; fi
~~~
Sandbox output that looks "ok" can hide 5xx responses. Pattern that worked in G8b / G10d / G11 is the canonical reference.

## L13 · Each new fine-grained PAT must be unique-per-task

When the user provides a new token, do not reuse prefix tokens from previous transcripts. Generate a new fine-grained PAT scoped narrowly, revoke immediately after task. Kuight's policy: revoke on every phase boundary.

## L14 · The user's single-character imperative means execute — no questions

When kuight replies with "干" / "修" / "合了" + follow-on, do NOT ask "shall I proceed?" or "options:" — execute the next step. Asking again has been called out multiple times in this transcript. Output format: post-action QA + the next action's contract (PR_URL=... COMMIT_SHA=...).

## L15 · When in doubt, fetch live; never echo "presumed" SHAs

Every SHA, byte size, PR number, file path in this archive was fetched live before being written. The repo at this moment is the truth. The text in this archive is a snapshot. Do not backfill from memory under any circumstance.

## L16 · MANIFEST rename 必须连带改 path 字段

Lesson from G14 / G15: 当目录里 PNG → JPG 改名后，blob SHA 不变但 path 改了；MANIFEST.sha256 文本里如果仍引用旧 path，raw.githubusercontent 取旧路径会 404 或 sha256 不匹配。G15 实测 9 处失配全部为 path 已从仓库删除（emote/*.jpg 9 个 blob 在 tree 中不存在），按规则整行删除。处理：
- blob 不变 only path rewrite → 改 MANIFEST 文本里 path 字段，SHA 字段保留
- blob 内容变了 → 改 MANIFEST SHA 字段为新 blob sha
- path 已彻底被删 → 整行删除
并配合：MANIFEST regex 必须能容忍 `  # STATUS_ANNOTATION` 后缀（L15 续：格式可加注释尾，校验脚本需 re.compile 兼容）。

— end of lessons. (16 rules; L17+ will only be added after a NEW kind of failure.)

