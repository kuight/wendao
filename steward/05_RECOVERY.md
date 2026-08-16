# 05 · Recovery checklist (tomorrow-first)

If you are a future model session that has been handed this archive: you may or may not remember anything. Run the steps below in order. Stop at the first FAIL exit and report back to kuight — do not improvise.

## Step A. Establish ground-truth (no token required)

```bash
curl -sS https://raw.githubusercontent.com/kuight/wendao/main/steward/README.md | head
MAIN=$(curl -sS https://api.github.com/repos/kuight/wendao/git/ref/heads/main | python3 -c 'import json,sys;print(json.load(sys.stdin)["object"]["sha"])')
curl -sS "https://api.github.com/repos/kuight/wendao/git/trees/$MAIN?recursive=1" | python3 -c 'import json,sys;print("tree_items=", len(json.load(sys.stdin)["tree"]))'
```
Expected: README has H2 `## 治理与阶段`; main HEAD = one commit sha; tree has ~330-340 items.

## Step B. Sanity-check the 7 critical files exist on main

```bash
for p in README.md src/assets/img/MANIFEST.sha256 src/assets/img/index.json .gitattributes docs/PHASE4_ENGLISH_BANK.md docs/LFS_POLICY.md docs/PHASE5_CLEANUP_LOG.md; do
  c=$(curl -sS -o /dev/null -w 'HTTP_%{http_code}' "https://api.github.com/repos/kuight/wendao/contents/$p?ref=main")
  echo "$c $p"
done
```
Expected: all `200`. If any is `404` the repo has drifted; stop and report.

## Step C. Verify MANIFEST format + SHA

```bash
MAIN=$(curl -sS https://api.github.com/repos/kuight/wendao/git/ref/heads/main | python3 -c 'import json,sys;print(json.load(sys.stdin)["object"]["sha"])')
curl -sS "https://raw.githubusercontent.com/kuight/wendao/$MAIN/src/assets/img/MANIFEST.sha256" > /tmp/m.txt
awk 'NF>=4 && $1 ~ /^[0-9a-f]{64}$/' /tmp/m.txt | wc -l   # expected: 35
```
Then per line: download blob via `https://raw.githubusercontent.com/kuight/wendao/$MAIN/<path>`, `sha256sum`, compare to `$1`. Mismatches must be `0`.

## Step D. Verify archive redundancy was actually cleared

```bash
MAIN=$(curl -sS https://api.github.com/repos/kuight/wendao/git/ref/heads/main | python3 -c 'import json,sys;print(json.load(sys.stdin)["object"]["sha"])')
curl -sS "https://api.github.com/repos/kuight/wendao/git/trees/$MAIN?recursive=1" | python3 -c 'import json,sys,re;d=json.load(sys.stdin);print(sum(1 for e in d["tree"] if re.match(r"archive/(redundant|备份)/", e["path"])))'
```
Expected: `0`.

## Step E. Rebuild mental model

Read in this order ONLY after Steps A-D pass:
1. `04_LESSONS.md` — sandbox + REST + token rules (15 entries)
2. `01_CHRONOLOGY.md` — Phase 0 → Phase 7 timeline
3. `03_PHASE_STATUS.md` — current vs prior phase summary table
4. `02_FILES_INDEX.md` — files actually present now

## Step F. Credential rules for the next session

1. NEVER write a token literal to any output (stdout, file, commit, PR).
2. NEVER invent a token (L03). Use only what kuight hands you.
3. The previously-bound PAT is expected to be revoked by kuight at phase boundary. Kuight must provide a NEW fine-grained PAT before any write operation.
4. Bootstrap via heredoc only — see L01.
5. Always run the L12 sanity step: echo HTTP_CODE after every curl.
6. If you detect a previously-revoked token (HTTP 401 from `/user`), stop and tell kuight.

## Step G. If a write task fails

1. Echo the exact `FAIL=<step> HTTP=<code>` line. Do NOT simulate success.
2. If token error: do NOT retry with a different token; stop and tell kuight.
3. If GitHub-side error: capture the response body (first 400 bytes), report, stop.
4. Do not "fix forward" by faking PR numbers or SHAs. The repo and this archive must remain truthfully aligned.

## Step H. If the task is pure read

Anonymous public REST is enough. Do NOT request a token. (See L07.)

— end of recovery
