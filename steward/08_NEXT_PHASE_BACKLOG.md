# 08 · Backlog after Phase 12 (post-#22/#23/#25, post-v4.5.0-runnable publish)

## Immediate follow-ups (small, low risk)

1. **CI workflow manifest-verify.yml** — Phase 10 (c) deferred. Add `.github/workflows/manifest-verify.yml` that runs on push & PR; checks each MANIFEST line SHA matches its blob and exists in tree. Was attempted at G19/G20; blocked by GitHub POST /pulls 500. Try again with Web-UI-created PR if /pulls remains unstable.
2. **Squash-merge phase12-finalize-v450-publish branch** — created by G28 with memory.jsonl update. Live head at archive time: c3aaf4bccc26f8b2bc9cf2645eb47f085d44d2e38. Open PR manually if missing.
3. **Close orphan branches**: steward steward/handoff-memory (Phase 7 PR #9 head), steward/phase10-readme-banner-respin (Phase 10 PR #20 head), steward/phase12-finalize-v450-publish (after step 2 merges).
4. **PAT rotation** — per L13 the current fine-grained PAT has been used across Phases 8-12 and should be revoked at https://github.com/settings/tokens. Future agent should accept a new PAT from Kuight and update the preset kuight_wendao_steward_token (see 09_TOKEN_LIFECYCLE.md).

## Larger projects (Phase 13+)

1. **PR-B bank dedupe** — Phase 12 (beta). G24 reported 0 candidate files at planning time; revisit after Phase 12 unpack if chemistry-bank-v436-* / v437-* are now duplicates of v4.4.0 bank content.
2. **Replace CDN banner images** with repo-relative paths in README — Phase 10 (b) confirmed zero external image refs after Phase 8, but CDN URLs still in README cover block (URLs were not matching the regex the way it was written). Manual review.
3. **v4.4.0 +1 (v4.5.0 stable build)** — current runnable release is marked prerelease. Promote to stable (patch release=false) once Phase 13 CI workflow runs green for one full week.
4. **Content beyond v4.4.0** — no build later than v4.4.0 exists in archive. If Kuight wants a v4.5, he must author new content; no automation can derive it.
5. **Cleaner portal UX** — src/_portal/index.html is the old simple portal stub. Could be rewritten into a proper landing page.
