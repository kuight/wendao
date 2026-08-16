# 02 · Files index (ground truth at archive time)

Inventory of all blobs in `src/assets/img/` plus all governance docs and all archive entries on branch main at HEAD `23aab098fc5b...`. Sizes and SHAs are read live from the base tree at the archive commit.

base tree sha: `bb6bd366dc1785e90b2bbcc75b6b46c19e569fc4`
base tree item count: 248
image blobs: 41
governance docs: 7
archive entries: 41
PRs: 8

## Source-of-truth caveat
Any subsequent PR invalidates this snapshot. After every merge, re-run the G9b-style scan in `05_RECOVERY.md` and re-emit this file as part of the next Phase handoff.

## Image blobs (41 total)

| path | size | blob sha (prefix) | category |
|------|------|-------------------|----------|
| `src/assets/img/MANIFEST.md` | 4127 B | `d77f1a7cd969` | other-img |
| `src/assets/img/MANIFEST.sha256` | 4739 B | `07801cb659e5` | other-img |
| `src/assets/img/character/shifu.jpg` | 103815 B | `ab0d91f83bae` | character |
| `src/assets/img/character/shijie.jpg` | 231792 B | `765460ab9265` | character |
| `src/assets/img/character/shimei.jpg` | 127305 B | `36a629021eef` | character |
| `src/assets/img/cover/all_assets_sheet.png` | 805938 B | `2c520e5336a8` | cover |
| `src/assets/img/cover/contact.png` | 2144191 B | `d0059b331d50` | cover |
| `src/assets/img/cover/hero.jpg` | 144471 B | `b88d94a71c54` | cover |
| `src/assets/img/index.json` | 5905 B | `0fdb232588fb` | other-img |
| `src/assets/img/readme/02-core-subjects.png` | 2620536 B | `4da6dc90f8e0` | readme |
| `src/assets/img/readme/06-architecture.png` | 2793725 B | `2c7f2abe7fea` | readme |
| `src/assets/img/readme/backend.png` | 103830 B | `adaf9b07a07c` | readme |
| `src/assets/img/readme/backend.svg` | 952 B | `b00b8d56dcb4` | readme |
| `src/assets/img/readme/core-subjects.svg` | 968 B | `01258e83d6c4` | readme |
| `src/assets/img/readme/cover.svg` | 975 B | `8fba221c1e4a` | readme |
| `src/assets/img/readme/overview.png` | 176660 B | `766a73a3e236` | readme |
| `src/assets/img/readme/overview.svg` | 980 B | `ef2f357c03ce` | readme |
| `src/assets/img/readme/stack.png` | 117254 B | `37a8b874e3cf` | readme |
| `src/assets/img/readme/stack.svg` | 950 B | `1fd9cb3fd6a4` | readme |
| `src/assets/img/readme/storage.png` | 135257 B | `0ec64d2d2252` | readme |
| `src/assets/img/readme/storage.svg` | 956 B | `11cadb249489` | readme |
| `src/assets/img/scene/alchemy.jpg` | 174857 B | `7d122424b409` | scene |
| `src/assets/img/scene/arena.jpg` | 148146 B | `1dc2c67b7615` | scene |
| `src/assets/img/scene/cave.jpg` | 203731 B | `844ee010c1be` | scene |
| `src/assets/img/scene/cave_moonlit.png` | 1209342 B | `e07402a47d0e` | scene |
| `src/assets/img/scene/chem_furnace.png` | 1270720 B | `1c69acfd773e` | scene |
| `src/assets/img/scene/garden.jpg` | 202366 B | `7c80cf8131d7` | scene |
| `src/assets/img/scene/geo_terrace.png` | 1232781 B | `a0b0fcef09e1` | scene |
| `src/assets/img/scene/main_hall.jpg` | 217547 B | `8ed678598a58` | scene |
| `src/assets/img/scene/scene-chemistry.jpg` | 195254 B | `4ef239b4d7d6` | scene |
| `src/assets/img/scene/scene-illum.jpg` | 141243 B | `f438a38c95f2` | scene |
| `src/assets/img/scene/scene-immortal.jpg` | 217931 B | `8fcb116f504b` | scene |
| `src/assets/img/scene/scene-physics.jpg` | 206076 B | `02dc2671cad8` | scene |
| `src/assets/img/scene/scroll_hall.png` | 1178055 B | `f687dc1f601f` | scene |
| `src/assets/img/scene/splash_v435.jpg` | 1058306 B | `ebb2abac6e68` | scene |
| `src/assets/img/scene/sub-chemistry.jpg` | 222005 B | `cd9c7331400e` | scene |
| `src/assets/img/scene/sub-chinese.jpg` | 182287 B | `b2626cbd2e07` | scene |
| `src/assets/img/scene/sub-english.jpg` | 203269 B | `8bc85b788495` | scene |
| `src/assets/img/scene/sub-geography.jpg` | 209814 B | `02444d8b6ddb` | scene |
| `src/assets/img/scene/sub-math.jpg` | 221870 B | `97daadcee9ea` | scene |
| `src/assets/img/scene/sub-physics.jpg` | 158767 B | `4b7b39e4bcb4` | scene |

## Governance documents (7)

| path | size | blob sha (prefix) | kind |
|------|------|-------------------|------|
| `.gitattributes` | 358 B | `3b207620e374` | governance |
| `README.md` | 10958 B | `dd00e655bbb2` | governance |
| `docs/LFS_POLICY.md` | 1044 B | `ea91ea8c7ec4` | governance |
| `docs/PHASE4_ENGLISH_BANK.md` | 10215 B | `e7a2169de62e` | governance |
| `docs/PHASE5_CLEANUP_LOG.md` | 27200 B | `3d31fc1052b1` | governance |
| `src/assets/img/MANIFEST.sha256` | 4739 B | `07801cb659e5` | governance |
| `src/assets/img/index.json` | 5905 B | `0fdb232588fb` | governance |

## Archive directory contents (snapshot)

Total archive blobs: 41.

Top-level sub-directories found:

- `archive/_legacy/` = 41 blobs

Full tree (top-level path → blob):

| path | size | blob sha (prefix) | kind |
|------|------|-------------------|------|
| `archive/_legacy/redundant/wendao-v4.3.5f/wendao-v4.3.5f.zip` | 13062047 B | `e89f79b0fc57` | archive |
| `archive/_legacy/redundant/wendao-v4.3.5g/wendao-v4.3.5g.zip` | 13064224 B | `bbfbffffd3ee` | archive |
| `archive/_legacy/redundant/wendao-v4.3.5h/wendao-v4.3.5h.zip` | 13109559 B | `15d4263fef85` | archive |
| `archive/_legacy/redundant/wendao-v4.3.5i/wendao-v4.3.5i.zip` | 13109748 B | `612b5384e3d2` | archive |
| `archive/_legacy/redundant/wendao-v4.3.5j/wendao-v4.3.5j.zip` | 13730500 B | `a045de16a843` | archive |
| `archive/_legacy/redundant/wendao-v4.3.6-final/wendao-v4.3.6-final.zip` | 13056331 B | `1509f470924f` | archive |
| `archive/_legacy/redundant/wendao-v4.3.6/wendao-v4.3.6.zip` | 13042381 B | `27c0fb505fa4` | archive |
| `archive/_legacy/redundant/wendao-v4.3.6a/wendao-v4.3.6a.zip` | 12944443 B | `5b76b350ebe8` | archive |
| `archive/_legacy/redundant/wendao-v4.3.6b-p7/wendao-v4.3.6b-p7.z01` | 20971520 B | `d03711b34ac9` | archive |
| `archive/_legacy/redundant/wendao-v4.3.6b-p7/wendao-v4.3.6b-p7.zip` | 8620942 B | `a9bc40b99d33` | archive |
| `archive/_legacy/备份/INDEX.md` | 3439 B | `5f2eb80b6c58` | archive |
| `archive/_legacy/备份/README.md` | 1048 B | `dd485293a160` | archive |
| `archive/_legacy/备份/wendao-v3.0.zip` | 231562 B | `64ce43230c6e` | archive |
| `archive/_legacy/备份/wendao-v4.1-hotfix.zip` | 324375 B | `c7af3e960ae3` | archive |
| `archive/_legacy/备份/wendao4.4.0.zip` | 14926926 B | `b040740f740b` | archive |
| `archive/_legacy/备份/主线/.gitkeep` | 5 B | `2fa992c0b8b5` | archive |
| `archive/_legacy/备份/主线/02-wendao-v3.0.md` | 1038 B | `bde84087956d` | archive |
| `archive/_legacy/备份/主线/08-wendao-v4.3.6a.md` | 1006 B | `1fdb67cd0c84` | archive |
| `archive/_legacy/备份/主线/12-wendao-v4.3.5j.md` | 1006 B | `eafdee3c7739` | archive |
| `archive/_legacy/备份/主线/14-wendao4.4.0.md` | 1124 B | `e23eab7068ae` | archive |
| `archive/_legacy/备份/主线/README.md` | 356 B | `530534246816` | archive |
| `archive/_legacy/备份/修真/.gitkeep` | 5 B | `2fa992c0b8b5` | archive |
| `archive/_legacy/备份/修真/01-问道修仙学院-v2.2-phase1-bugfix.md` | 1070 B | `a26a5f5c2455` | archive |
| `archive/_legacy/备份/修真/03-问道修仙学院-v4.1-hotfix.md` | 1143 B | `68f47c2fecf9` | archive |
| `archive/_legacy/备份/修真/README.md` | 202 B | `e2e4cd36fbf6` | archive |
| `archive/_legacy/备份/原始压缩/原档合并.zip` | 47454500 B | `4f0a21205ccd` | archive |
| `archive/_legacy/备份/原始压缩/学习游戏记忆.z01` | 25165824 B | `08604beaf8b9` | archive |
| `archive/_legacy/备份/原始压缩/学习游戏记忆.zip` | 22415051 B | `6c8a5c01be56` | archive |
| `archive/_legacy/备份/实验/.gitkeep` | 5 B | `2fa992c0b8b5` | archive |
| `archive/_legacy/备份/实验/09-wendao-v4.3.5g.md` | 1127 B | `4f22eda0145d` | archive |
| `archive/_legacy/备份/实验/10-wendao-v4.3.5h.md` | 1127 B | `4234f26b891c` | archive |
| `archive/_legacy/备份/实验/11-wendao-v4.3.5i.md` | 1127 B | `e35e7f7579d4` | archive |
| `archive/_legacy/备份/实验/13-wendao-v4.3.6b-p7.md` | 1130 B | `c2b8d232434c` | archive |
| `archive/_legacy/备份/实验/README.md` | 220 B | `1805d08f1533` | archive |
| `archive/_legacy/备份/过渡/.gitkeep` | 5 B | `2fa992c0b8b5` | archive |
| `archive/_legacy/备份/过渡/04-wendao-v4.1-hotfix.md` | 1131 B | `c10489512a3b` | archive |
| `archive/_legacy/备份/过渡/05-wendao-v4.3.6.md` | 1126 B | `05337a89dd7c` | archive |
| `archive/_legacy/备份/过渡/06-wendao-v4.3.6-final.md` | 1132 B | `e4dd33f11821` | archive |
| `archive/_legacy/备份/过渡/07-wendao-v4.3.5f.md` | 1127 B | `9b4556f58786` | archive |
| `archive/_legacy/备份/过渡/README.md` | 271 B | `f4be590d96fd` | archive |
| `archive/_legacy/备份/问道修仙学院-v4.1-hotfix.zip` | 324375 B | `11bd19886c46` | archive |

## How to recompute this index

```bash
MAIN=$(curl -sS https://api.github.com/repos/kuight/wendao/git/ref/heads/main \
  | python3 -c 'import json,sys;print(json.load(sys.stdin)["object"]["sha"])')
curl -sS "https://api.github.com/repos/kuight/wendao/git/trees/$MAIN?recursive=1" \
  | python3 -c 'import json,sys;d=json.load(sys.stdin);print("\n".join("\t".join([e["path"],str(e["size"]),e["sha"][:12]]) for e in d["tree"]))'
```

— end of files index
