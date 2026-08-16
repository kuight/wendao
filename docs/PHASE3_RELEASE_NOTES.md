# Phase 3-A 收尾 PR

> 本 PR 完成 35 张图全归位。README 6 张 SVG 占位暂保留，留待 Phase 3-B 单独处理。

## 改动
- `src/assets/img/emote/`：9 张表情图（emotes/ 复数 → emote/ 单数）
- `src/assets/img/scene/`：16 张场景子目录图片（scenes/ → scene/，sect_* 6 张重命名 sub-*）
- `src/assets/img/MANIFEST.md`：刷到 35 行
- `src/assets/img/index.json`：刷到 35 条 MD5 索引
- `docs/PHASE3_RELEASE_NOTES.md`：本说明

## 图分布
| category | count |
|---|---|
| cover | 3 |
| character | 3 |
| scene_toplevel | 4 |
| scene_subdir (sub-*) | 6 |
| scene_subdir (其他) | 10 |
| emote | 9 |
| **合计** | **35** |

## 不在本 PR 内
- README 6 张 SVG 占位

## 回滚
`git revert <commit_hash>`

## 后续
- Phase 3-B：替换 README 6 张占位图
- Phase 4：英语题库 + LFS 治理 + manifest SHA 校验
- Phase 5：可运行发布包
