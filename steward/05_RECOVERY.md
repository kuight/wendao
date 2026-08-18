# 05 · Recovery checklist (cold-start authoritative — Phase 7-12)

If you are a future model session that has been handed this archive: you may or may not remember anything. Run the steps below in order. Stop at the first FAIL exit and report back to kuight — do not improvise.

## Step A — establish ground truth
1. `GET /git/refs/heads/main` → MAIN_HEAD (expected eec8bd40de4a073a40101b461c07b0c150cada9e or a successor).
2. `GET /git/trees/<MAIN_HEAD>?recursive=1` → tree item count ≈ 418 (was 248 at Phase 7, expanded after Phase 12 unpack).
3. `GET /repos/kuight/wendao/releases/tags/v4.5.0-runnable` → expect 200 in logged-in context.

## Step B — critical file sanity check (200 each or STOP)
- README.md, src/index.html, src/_portal/index.html, src/assets/img/MANIFEST.sha256, src/assets/img/index.json, .gitattributes, docs/PHASE5_CLEANUP_LOG.md, steward/05_RECOVERY.md, steward/06_RELEASE_INVENTORY.md, steward/07_PHASE12_RUNNABLE_SPEC.md, steward/08_NEXT_PHASE_BACKLOG.md, steward/09_TOKEN_LIFECYCLE.md, docs/交接文档.md (note 189 KB, do not re-read fully).

## Step C — MANIFEST verification (re-runnable)
- Download src/assets/img/MANIFEST.sha256 at MAIN_HEAD. Verify each line format `<64-hex sha>  size=<int>  <path>  category=<cat>`. Count rows; expected ≈ 26-35.
- For each row, compute SHA-256 of the blob via raw.githubusercontent.com; mismatches must == 0.

## Step D — release verification
- `GET /repos/kuight/wendao/releases` → expect id 372441034 (v4.5.0-cleanup) and id 372459612 (v4.5.0-runnable, prerelease=true).
- For each release, `GET /assets` → both must include wendao4.4.0-playable.zip (asset ids 519605930 and 519672489).

## Step E — rebuild mental model
1. Read steward/04_LESSONS.md (now covers L01–L22).
2. Read steward/01_CHRONOLOGY.md (full phase 0-12 timeline).
3. Read steward/03_PHASE_STATUS.md (current phase/commit/QA table).
4. Read steward/06_RELEASE_INVENTORY.md and 07_PHASE12_RUNNABLE_SPEC.md.
5. Read steward/08_NEXT_PHASE_BACKLOG.md for outstanding work.
6. Read steward/09_TOKEN_LIFECYCLE.md BEFORE any write.

## Step F — credential rules
- PAT in preset kuight_wendao_steward_token. If Kuight has rotated (likely), accept the new value and overwrite the preset.
- Never echo PAT. Never write PAT literal to files except /tmp/<seed>/tok (shredded at end).
- On 401/403, STOP — never re-attempt with a fabricated token (L03).

## Step G — POST /pulls unstable?
- Apply L17: retry once with shorter title; on second 5xx, leave branch and ask Kuight to Web-create.

## Step H — pure read
- Anonymous public REST works without token. Use that for any verification.

— end of recovery (Phase 7-12 revision, 2026-08-18)
