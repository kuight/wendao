# Phase 1 Release Notes — foundation baseline

> 分支：`steward/phase1-foundation-baseline` → `main`
> 目标：为 `kuight/wendao` 建立**可验证的治理基线**，解决「版本号不可信、不知道哪个最新」的痛点。

## 本次变更

1. **README**：顶部保留 5 个真实 Shields 徽章；新增「版本真相（VERSION TRUTH）」章节，明确「不要仅凭版本号判断先后」。
2. **根 `index.html`**：新增治理工作树入口页（`<title>wendao · main (治理工作树)</title>`），链接 README / VERSION_TRUTH / RELEASE_NOTES。
3. **docs/VERSION_TRUTH.md**：13 个归档的内容指纹分析、相似度矩阵、治理规则（来自子 agent A 的指纹库）。
4. **docs/PHASE1_RELEASE_NOTES.md**：本文档。
5. **src/assets/img/readme/**：新增 6 张 SVG 占位图（cover / core-subjects / stack / storage / backend / overview），供后续 README 视觉替换使用。

## 大文件处理

- `学习游戏记忆.z01` 实测 **24 MB**、`学习游戏记忆.zip` 实测 **22 MB**，均低于 25 MiB 阈值，**无需 git rm**，保留原样。

## 已知未决事项（下一阶段）

- `main` 尚无根级可运行 `index.html` 之外的完整运行包；`assets/img/` 图片资产仍主要停留在归档内部，未同步进 `src/assets/`。
- 英语（english）在所有归档与 main 中题量均为 0，需后续扩充。
- `原档合并` 与 `学习游戏记忆_root` 内容同源（Jaccard=1.0000），建议治理上标记 `redundant`。
