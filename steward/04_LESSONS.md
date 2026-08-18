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

— end of lessons. (15 rules; L16+ will only be added after a NEW kind of failure.)

## L16 — rebase-then-replace over force-push
When a stacked PR sits in `mergeable_state=dirty` due to upstream changes already merged into base, do NOT force-push the stale branch. Open a fresh branch off the new base, recreate the diff using current blob SHAs, and close the original PR as superseded. This avoids history rewrite and preserves audit trail.

## L17 — POST /pulls 500 is a recurring API flake
- Symptom: POST /repos/.../pulls returns HTTP 500 with empty body. Reproducible across G15, G17b, G19, G20, G21, G25, G26 during peak hours.
- Workarounds (in order of preference): (a) sleep 8s and retry; (b) trim title to ≤60 ASCII chars; (c) abandon agentic POST and have Kuight create the PR from Web UI "Compare & pull request" on the orphan branch; (d) wait several hours.
- Do NOT retry more than twice with the same endpoint in one run; document and surrender.

## L18 — POST /releases can land on untagged-* URL
- Symptom: POST /repos/.../releases with tag_name=v4.5.0-runnable returned a release whose html_url was an untagged-* URL (tag binding not applied). Kuight manually fixed the tag binding via Web UI.
- Workaround: after POST /releases, GET the release and verify html_url contains /tag/<tag_name>; if not, PATCH the release with the tag_name or ask Kuight to fix in Web UI.

## L19 — Fine-grained PAT needs Contents + Pull requests + Workflows permissions
- Symptom: POST /git/trees returned 403 "Resource not accessible by personal access token" when the PAT lacked Contents write (or Workflows write for .github/workflows files).
- Fix: in the fine-grained token settings, grant Repository permissions → Contents: Read and write, Pull requests: Read and write, Workflows: Read and write, Metadata: Read-only.

## L20 — Reuse the same PAT across a phase only if Kuight says so
- Kuight explicitly chose NOT to rotate the PAT during Phases 8-12. Reuse is allowed only while the user keeps it active; still revoke at phase boundaries per L13 when rotation is requested.

## L21 — Verify tag objects are annotated before quoting tag SHAs
- Tag object sha (from GET /git/tags/<sha>) differs from the target commit sha for annotated tags. Always fetch the tag object to confirm the target commit; never assume the tag sha IS the commit sha.

## L22 — Tree item count grows with unpack
- Phase 7 archive said ~248 tree items; after Phase 12 v4.4.0 unpack the live tree at main HEAD eec8bd40... has 418 items (296 blobs under src/). Recovery checklist expectations must be re-derived live, not copied from an old snapshot.
