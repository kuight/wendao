# 07 · Phase 12 runnable baseline — what's in src/ where v4.4.0 was unpacked

## Repo runnable shape after Phase 12 alpha+gamma+delta

- `src/index.html` → game entry (was portal stub in pre-Phase-12 main)
- `src/_portal/index.html` → preserved project landing (formerly src/index.html before Phase 12)
- `src/assets/` → 8 CSS + engines (game-core, ui-components, story-engine, interactive-engine, subject-page, scene-engine, side-dock, immersive-learning, pixel-art, auto-visualizer, ...)
- `src/data/` → 6 subject banks + 6 subject manuals + story-data.js + fujian-bank-supplements
- `src/subjects/` → physics.html, chemistry.html, geography.html, chinese.html, math.html, english.html
- `src/assets/img/` → unified image set, MANIFEST rebuilt by Phase 12 gamma
- Plus `src/_archived_patches/`, `src/_legacy_v440_docs/`, `src/v4-increments/`, `src/项目/` (preserved legacy material)

Live tree at main HEAD `eec8bd40de4a073a40101b461c07b0c150cada9e` contains 296 blobs under `src/` (418 tree items repo-wide).

## v4.4.0 zip stats

- Path: `archive/_legacy/备份/wendao4.4.0.zip` (in-repo blob)
- blob sha: b040740f740bf27d230387515baedf67f2dc240a
- size: 14,926,926 bytes
- top dir: wendao/
- files: 199 (7 HTML, 8 CSS, 136 JS, 35 images, 13 markdown)

## Run instructions

1. Click the green Code button → Download ZIP, OR clone with `git clone https://github.com/kuight/wendao`.
2. After Phase 12 PRs merged: `cd wendao` → navigate to `src/index.html` → double-click.
3. For local HTTP server: `cd src; python3 -m http.server 8000` then http://localhost:8000 (browser localStorage may require serving over http in some setups).

## Caveats

- index.html contains one Cloudflare beacon script tag; non-blocking but could be stripped for full offline purity.
- Some relative paths inside subjects/*.html / assets/*.css assume the unpack is loaded as a single-rooted directory.
- The v4.5.0-runnable release is marked prerelease; promote to stable once CI runs green for a week (see 08_NEXT_PHASE_BACKLOG.md).
