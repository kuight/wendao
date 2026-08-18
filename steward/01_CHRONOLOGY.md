# 01 · Chronology (Phase 0 → Phase 6 → Phase 7 archive)

Reverse-chronological event stream. Each Phase is a logical arc; each Task is a sub-agent dispatched with a clear contract and a return-QA expectation.

base main HEAD at archive time = `23aab098fc5b2b5428b8b4043cd4f940303d2e43`
PR #8 squash commit (Phase 6) = `be4022f3141940ad32f77f3a4f5936e6ce0c134a`

## Phase 7 — handoff archive (2026-08-16 UTC, today)
- **Task G11** — steward handoff memory archive (current)
  - input: kuight request to commit "把所有对话历史、修改、经验教训等等都总结存放到github里 + 做好交接准备"
  - rationale: model session reset risk; sandbox + files ephemeral
  - output: PR on `steward/handoff-memory`, 7 files in `steward/` directory
  - lessons: distillation only — see `04_LESSONS.md` for the 15-item catalog

## Phase 6 — deep cleanup (merged via PR #8)
- squash commit: `be4022f3141940ad32f77f3a4f5936e6ce0c134a`
- pre-merge base: `dfee921a3a492b706098e6b27b704649318ca960`
- six actions in single commit:
  1. `docs/PHASE4_ENGLISH_BANK.md` — 30 题 补齐 options / answer / tags
  2. `src/assets/img/MANIFEST.sha256` — 35 行 rebuild to `<sha>  size=N  <path>  category=cat`
  3. `README.md` — `插入 ## 治理与阶段` H2 (12→13); 4 处 readme banner 引用 .png → .jpg
  4. `docs/PHASE5_CLEANUP_LOG.md` — 追加 `## Phase 6 archival cleanup` 小节
  5. `archive/redundant/*` (10) + `archive/备份/*` (31) — single commit delete (55 blob)
  6. 13 张 PNG→JPG 改名 (emote×9 + readme×4, blob sha 复用) + 2 张 孤儿 banner 删除 (cover.png + core-subjects.png)
- QA: Q_TITLES=30 OPTIONS=30 ANSWERS=30 TAGS=30 / MANIFEST_LINES_35=35 / README_GOVERNANCE=yes / LOG_PHASE6_APPENDED=yes / ARCHIVE_REMOVED=55 / PNG_TO_JPG_RENAMES=13 / README_ORPHAN_REMOVED=2 / TREE_HTTP=201 COMMIT_HTTP=201 REF_HTTP=201 PR_HTTP=201 / TOKEN_LEAK=0 / CLEANUP_DONE=YES
- **Task G9b** — anonymous deep scan (REST-only), inventoried 6 categories of defects across image blobs + tree entries
- **Tasks G9 / G10 / G10b / G10c** — failed earlier rounds (token missing / placeholder leaked / fabricated token 401); **L03 lesson**: never invent a token

## Phase 5 — P1 archive leg cleanup (merged via PR #7)
- branch `steward/phase5-p1-cleanup`; head `c1ec15b0a03e3813aefca916bd3ce588a6d21377`
- 41 legacy files relocated under `archive/_legacy/...`; added `docs/PHASE5_CLEANUP_LOG.md`
- main advanced to `d279dfa1723be718874ff4fa2d3d887b99719a50`
- **Task G8** originally failed (bare curl missed `Authorization:`); **Task G8b** fixed it

## Phase 4 — P0 metadata fix (merged via PR #6)
- branch `steward/p0-metadata-fix`; head `fa690dde2c0f892524e649fa205f999078825809`
- five files corrected (README banners, MANIFEST, index.json, English bank skeleton, .gitattributes)
- preceded by **Task G6** read-only smoke test that surfaced the 4 P0 issues

## Phase 3-B — README real images + Phase 4 docs (merged via PR #5)
- branch `steward/phase3b-phase4-bundle`; head `97cc6e4253fbdf95fc7b43e5a8d4f3168a7ebe69`
- 6 README banner PNGs (4 are JPEG bytes with `.png` ext — surfaced in G9b as A-P1-3)
- **Task G5.13b** fixed a `git push https` 401 by switching to the Git Data API

## Phase 3-A — 35-image relocation (recovered as PR #4 after PR #3 stuck closed)
- branch `steward/phase3-image-complete-recovered`; head `1240f240bd98fe59465ce638e222c8b114a4022a`
- 28 blobs (25 PNG + 3 docs); PR #3 recovered by **Task G4e** creating PR #4 via REST
- **L06 lesson**: PR force-push UI recovery requires a fresh PR on same head branch

## Phase 2 — v4.4.0 images + redundant archive cleanup (PR #2)
- covered cover×3, character×3, scene-top×4 = 10 images
- branch `steward/phase2-v440-cleanup`; head prefix `ce51173dc4`

## Phase 1 — foundation baseline (PR #1)
- README rewrite, `src/index.html` portal, version notes
- branch `steward/phase1-foundation`; head prefix `1232bc58c5`

## Phase 0 — discovery (pre-PR baseline)
- 13 归档 fingerprint + similarity comparison
- unique-image count correction: 30 → 35
- main question count per subject: Physics 68, Chemistry 12, Geography 8, Math 10, Chinese 6, English 0
- 4-phase refactor plan later expanded to 6 phases plus P2 backlog

## Live PR inventory at archive time

| # | state | head (prefix) | title |
|---|-------|---------------|-------|
| #1 | closed | `1232bc58` | Phase 1: foundation baseline — README truth, index portal, governance docs |
| #2 | closed | `ce51173d` | Phase 2: relocate v4.4.0 images + clean redundant archives |
| #3 | closed | `1240f240` | Phase 3-A: complete 35-image relocation (retry) |
| #4 | closed | `d58f9fe7` | Phase 3-A: complete 35-image relocation (recovered) |
| #5 | closed | `97cc6e42` | Phase 3-B + Phase 4: README banners and governance bundle |
| #6 | closed | `fa690dde` | Phase 5: metadata coherence (README refs + MANIFEST sha256 + English bank + .gitattributes + index.json) |
| #7 | closed | `c1ec15b0` | Phase 5: P1 cleanup (archive legacy + governance log) |
| #8 | closed | `be4022f3` | Phase 6: deep cleanup (English bank + archive trim + dual-render rename + manifest rebuild + governance) |

— end of chronology

## Phase 9 — manifest rebase (PRNEW_A)
Stale PR #13 was rebased onto main cfcc62d5… after cascade merge of #10/#11/#12; MANIFEST.sha256 trimmed to surviving entries, L16 rule documented.

## Phase 9 FINAL — cascade + retry
PR #10/#11/#12 merged first (squash). Stacked PRs #13 and #14 hit conflict; recovered via PRNEW_A (manifest rebase) and PRNEW_B (portal live). Net result: repo is feature-complete per the original 7-phase governance spec except for optional Phase 10 backlog (archive/_legacy/备份 dir empty, README banner CDN pinning, MANIFEST SHA-verification CI workflow).

## Phase 10 (b) — README banner scan respin
Stale #19 branch ref (steward/phase10-readme-banner-pin) returned 422 on PATCH after #18 merged. Opened PRNEW on a fresh branch steward/phase10-readme-banner-respin with the same documentation-only content on top of main 5fa68b55de1b280cafbb6219f456886c324e7b1f.

## Phase 11 — v4.5.0-cleanup release
Tag `v4.5.0-cleanup` cut on main `f428f32f7b3249236373028b56c78639dc200841`; GitHub Release "v4.5.0 Cleanup (governance milestone)" published. wendao4.4.0 playable archive attached as `wendao4.4.0-playable.zip` (~14.9 MB). Release HTML URL: https://github.com/kuight/wendao/releases/tag/v4.5.0-cleanup. Cold-start handover via `steward/05_RECOVERY.md` remains authoritative.

## Phase 12 — release C implementation
PR #22 (alpha: v4.4.0 unpack + entry wiring) merged.
PR #23 (gamma: MANIFEST refresh) merged.
PR #24 (delta: README + version truth + this chronology) rebased and re-opened after #22/#23 conflicts.
Tag `v4.5.0-runnable` (annotated, sha `e737d2af…`) cut with draft Release pending publish. PR-B (bank dedupe) deferred at G24 (zero candidate files).

## Phase 8 — zero regression + cascade
- Date 2026-08-17
- PRs #10, #11, #12 (cascade squash in that order)
- Then PRNEW_A=G16 built #15 (manifest trim, L16 rule) and PRNEW_B=G16 built #16 (portal live). PRNEW_C built #17 (governance finalize).
- Then #13, #14 closed as superseded.

## Phase 9 — manifest rebase post-#18/#19
- Phase 9 retry was needed because Phase 8 cascade merged #10/#11/#12 creating conflicts for stacked PRs.

## Phase 10 — final cleanup
- PR #18 (empty dir claim) merged.
- PR #19 (broader regex scan) merged but content was zero-replace.
- PR #20 opened fresh on steward/phase10-readme-banner-respin (token-protected ref re-PATCH failed with 422; closed issue resolved by G21 creating a NEW branch + PR).

## Phase 11 — v4.5.0-cleanup release
- G23 cut tag v4.5.0-cleanup, GitHub Release v4.5.0 Cleanup (governance milestone) with wendao4.4.0-playable.zip attached. Annotation tag object sha 3d6788701f86c92306396ecb994e145a6af2650e.

## Phase 12 alpha — v4.4.0 unpack (PR #22)
- 164 files: src/index.html (game entry), src/_portal/index.html (preserved), src/assets/* (engines + CSS), src/data/* (banks/manuals), src/subjects/*.html, src/assets/img/*.
- head sha febcd15c, merged via squash.

## Phase 12 gamma — MANIFEST refresh (PR #23)
- Rebuilt src/assets/img/MANIFEST.sha256 to cover unified image set.
- head sha a0605a68, merged.

## Phase 12 delta — README/version-truth refresh (PR #25)
- #24 hit conflicts after #22/#23; G27 rebuilt #24 rebase on steward/phase12-delta-docs-v2 (commit 1ec17d90). Kuight manually created #25 from the new branch (POST /pulls hit API 500 in agentic runs); merged.
- #24 closed as superseded.

## Phase 12 epsilon — v4.5.0-runnable release (G26+G28+G29)
- Tag object sha e737d2af697aceb408824d2126119e0f2904a301.
- First two POST /releases attempts landed on untagged-* URL even though tag_name=v4.5.0-runnable was sent in payload. Kuight manually fixed the tag binding via Web UI. Final release HTML URL: https://github.com/kuight/wendao/releases/tag/v4.5.0-runnable.
- Asset 519672489 (wendao4.4.0-playable.zip) attached via G29 after first publish had zero assets.
