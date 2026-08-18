# wendao · steward handoff archive (Phase 7)

Knowledge carrier for future model sessions of the wendao steward. If a model is reset and remembers nothing, this directory provides the minimum surface area to recover state.

## Reading order
1. `05_RECOVERY.md` — tomorrow-first checklist (read FIRST if you are waking up)
2. `04_LESSONS.md` — hard-won rules (sandbox, REST, token, manifests)
3. `01_CHRONOLOGY.md` — Phase 0..6 timeline (including G11)
4. `03_PHASE_STATUS.md` — phase × commit × QA table
5. `02_FILES_INDEX.md` — ground-truth file inventory of repo
6. `memory.jsonl` — machine-readable event stream

## Repo anchors (live at archive creation)
- Repo: https://github.com/kuight/wendao
- base main HEAD: `23aab098fc5b2b5428b8b4043cd4f940303d2e43`
- base tree sha: `bb6bd366dc1785e90b2bbcc75b6b46c19e569fc4`
- base tree item count: 248
- image blobs: 41
- governance docs: 7
- archive entries: 41
- PR inventory: https://github.com/kuight/wendao/pulls?q=is%3Apr

## Token policy
The currently-bound steward PAT is reserved for read/write of this repo only and will be revoked by kuight after task close. NEVER write any token literal into a file in this directory. NEVER echo a token in stdout, commit message, PR body, or branch name.

## Source of truth
The repo at the moment is the truth. This archive is a snapshot. Re-validate by running the G9b-style anonymous REST scan described in `05_RECOVERY.md`.

## Maintenance contract
Re-issued at the end of each Phase (8, 9, ...) as a single squash commit on `steward/handoff-memory` branch via PR to main.

— steward

## Reading order (REVISED 2026-08-18)
1. **05_RECOVERY.md** — first read post-reset (cold start) checklist.
2. **04_LESSONS.md** — all 22 rules (L01–L22).
3. **01_CHRONOLOGY.md** — full Phase 0-12 timeline.
4. **03_PHASE_STATUS.md** — phase/commit/QA table.
5. **02_FILES_INDEX.md** — repository file inventory (frozen at Phase 7; run G24-style anonymous REST to refresh).
6. **06_RELEASE_INVENTORY.md** — every release + tag + asset.
7. **07_PHASE12_RUNNABLE_SPEC.md** — what's in src/ after Phase 12 unpack + how to play.
8. **08_NEXT_PHASE_BACKLOG.md** — what's left to do.
9. **09_TOKEN_LIFECYCLE.md** — current PAT + sandbox rules.
10. **memory.jsonl** — machine-readable event stream.
