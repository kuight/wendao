# 03 · Phase status table

Eight rows: seven phases already shipped + this archive (Phase 7). Each row links a Phase to its squash commit, PR, action count, and QA outcome.

base main HEAD at archive time = `23aab098fc5b...` (full `23aab098fc5b2b5428b8b4043cd4f940303d2e43`)

| Phase | PR | Head sha (prefix) | Objective | Action count | QA | Notes |
|-------|----|--------------------|-----------|--------------|----|-------|
| 1 | #1 | `1232bc58` | foundation: README truth, index portal, governance docs | ~10 files | merged | baseline |
| 2 | #2 | `ce51173d` | relocate v4.4.0 images, drop redundant archive | image relocate + zip trim | merged | consolidated 10 images |
| 3-A | #4 (recovered from #3) | `1240f240` | complete 35-image relocation | 28 blobs | merged | REST-only rebuild after #3 UI stuck |
| 3-B | #5 | `97cc6e42` | README real images (6 banners) + Phase 4 docs + MANIFEST | 10 files | merged | AI banners (4 are JPEG bytes with .png ext) |
| 4 (P0 fix) | #6 | `fa690dde` | fix metadata bugs surfaced by G6 smoke test | 5 files | merged | MANIFEST format + English bank skeleton + 6 banner refs |
| 5 (P1 cleanup) | #7 | `c1ec15b0` | archive legacy leg trim | 41 moves to `_legacy/` | merged | `docs/PHASE5_CLEANUP_LOG.md` |
| 6 | #8 | `be4022f3` | deep cleanup (English bank + archive trim + dual-render rename + MANIFEST rebuild + governance) | 7 governance + 55 archive delete + 13 PNG→JPG + 2 orphans | merged | 6 actions in one squash |
| 7 (this) | 9 | (see live output) | steward handoff archive | 7 files in `steward/` | open | knowledge carrier for future sessions |

## Outstanding / known issues at archive time

None. The 6 categories (`A`..`L`) of deep-scan defects are all closed during Phase 6:
- **A** (13 PNG/JPEG dual-render) → renamed to `.jpg` in PR #8 (PNG→JPG_RENAMES=13)
- **H** (English bank skeleton) → filled with 30 questions (Q_TITLES=OPTIONS=ANSWERS=TAGS=30)
- **K** (archive double-track 55) → deleted in PR #8 (ARCHIVE_REMOVED=55)
- **F** (4 readme orphan banners) → 2 deleted + 2 covered by PNG→JPG rename
- **J** (MANIFEST format) → rewrote as 4-token-with-prefix in PR #8 (MANIFEST_LINES_35=35)
- **I** (README governance section) → inserted `## 治理与阶段` (README_GOVERNANCE=yes)

## What is NOT yet done (P2 backlog, deferred)

- `src/index.html` — returns 404 (P2-7 from G9b inventory); cosmetic, not blocking
- `archive/v4.4.0/` empty directory skeleton (P2-8, covered by Phase 6 archive trim)
- any future phase decisions

## Live PR list (snapshot at archive time)

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

— end of phase status
| 8 | (PR pending) | c9e42502 | vacuum + portal | 10 archive delete + 1 portal add | (pending this PR) | G12 + G13 + G14 |
| Phase 9 — portal live | PRNEW_B | e6490e45c5f514393d602ebfb5b16e4cbbbe3545 | merged |
| Phase 10 — backlog | TBD | n/a | open | (a) DONE - PR18 (empty dir confirmed)|
| Phase 10 (b) | DONE | PRNEW — README banner scan zero candidates (rebase via fresh branch) |
| Phase 11 — v4.5.0-cleanup release | tag v4.5.0-cleanup | `f428f32f7b3249236373028b56c78639dc200841` | published; wendao4.4.0-playable.zip attached |
| Phase 12 gamma | OPEN | PR-C manifest refresh + image annex |

| Phase | PR | Commit | Status |
|---|---|---|---|
| Phase 12 (alpha) | #22 merged | 12b698186fc2beba28224526773a0ae0192b6a46 | merged |
| Phase 12 (gamma) | #23 merged | 71d6d00448d2f34c4ea55bb4d89277eaa28ebc70 | merged |
| Phase 12 (delta) | #24 (rebase) | pending | open PR (this) |

## Phase 8-12 rows (verified live 2026-08-18)

| Phase | PR(s) | Commit / head | Status |
|-------|-------|---------------|--------|
| 8 (zero-regression) | #10 | 594118de988343c2b8109f621ecb50d4cf0c0763 | merged |
| 8 (vacuum+portal) | #11 | 39eec36b3bddc0a8bac62cca2fce60a7db250def | merged |
| 8 (governance) | #12 | cfcc62d541307b51283f9868d9f5d24c6798aff1 | merged |
| 9 (manifest rebase) | #15 (PRNEW_A) | 065678d41bf46fe3c820de8e0196368b3536dd7a | merged |
| 9 (portal live) | #16 (PRNEW_B) | e6490e45c5f514393d602ebfb5b16e4cbbbe3545 | merged |
| 9 (finalize) | #17 (PRNEW_C) | fd10458b95ef4e887d591b1c4c2913813afd987b | merged |
| 10 (a) empty dir | #18 | 5fa68b55de1b280cafbb6219f456886c324e7b1f | merged |
| 10 (b) banner scan | #20 | f428f32f7b3249236373028b56c78639dc200841 | merged (zero candidates) |
| 11 release | tag v4.5.0-cleanup | f428f32f7b3249236373028b56c78639dc200841 | published |
| 12 alpha | #22 | 12b698186fc2beba28224526773a0ae0192b6a46 | merged |
| 12 gamma | #23 | 71d6d00448d2f34c4ea55bb4d89277eaa28ebc70 | merged |
| 12 delta | #25 | eec8bd40de4a073a40101b461c07b0c150cada9e | merged |
| 12 epsilon | release v4.5.0-runnable | ffbe6827b345e5251ff8e3744266706e2db5d4a5 | published (prerelease) |

Superseded/closed: #13, #14, #19, #24 (all closed, superseded by #15/#16/#20/#25).
