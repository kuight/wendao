# 06 · Release inventory (Phase 7-12)

Live snapshot taken at main HEAD `eec8bd40de4a073a40101b461c07b0c150cada9e` (2026-08-18).

## Releases

| tag | name | release id | state | html_url | target_commitish | created | published |
|-----|------|-----------|-------|----------|------------------|---------|-----------|
| v4.5.0-cleanup | v4.5.0 Cleanup (governance milestone) | 372441034 | published (prerelease=false) | https://github.com/kuight/wendao/releases/tag/v4.5.0-cleanup | f428f32f7b3249236373028b56c78639dc200841 | 2026-08-18T15:05:52Z | 2026-08-18T15:06:11Z |
| v4.5.0-runnable | v4.5.0-runnable PRE-RELEASE | 372459612 | published, prerelease=true | https://github.com/kuight/wendao/releases/tag/v4.5.0-runnable | ffbe6827b345e5251ff8e3744266706e2db5d4a5 | 2026-08-18T15:31:37Z | 2026-08-18T15:59:56Z |

## Assets

| asset name | asset id | byte size | host release | download count |
|------------|----------|-----------|--------------|----------------|
| wendao4.4.0-playable.zip | 519605930 | 14,926,926 | v4.5.0-cleanup (372441034) | 2 |
| wendao4.4.0-playable.zip | 519672489 | 14,926,926 | v4.5.0-runnable (372459612) | 0 |

The v4.4.0 playable archive is attached to BOTH releases — it is the same binary copied twice.
In-repo blob of the same archive: `archive/_legacy/备份/wendao4.4.0.zip`, blob sha `b040740f740bf27d230387515baedf67f2dc240a`, size 14,926,926.

## Tags

| tag | annotated tag object sha | target commit | notes |
|-----|--------------------------|---------------|-------|
| wendao | 94e49a2e94 (commit tag, lightweight) | — | legacy tag |
| v4.5.0-cleanup | 3d6788701f86c92306396ecb994e145a6af2650e | f428f32f7b3249236373028b56c78639dc200841 | Phase 11 governance milestone |
| v4.5.0-runnable | e737d2af697aceb408824d2126119e0f2904a301 | ffbe6827b345e5251ff8e3744266706e2db5d4a5 | Phase 12 release candidate |

## Tags that DO NOT exist

- v4.5.1-runnable — never created
- v4.6.0 — never created
- Any other v4.5.x — never created

## Rules

- Releases with prerelease=true are public but marked "Pre-release" (v4.5.0-runnable).
- The v4.4.0 playable archive is attached to BOTH releases (same binary copied twice).
- Tag objects are annotated (tag object sha differs from target commit sha) for v4.5.0-cleanup and v4.5.0-runnable.
