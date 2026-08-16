# src/assets 资产总览

本目录保存从 `archive/备份/原始压缩/原档合并.zip` 内嵌 `备份/` 目录归位出的真实前端资产文件，按学科与用途拆分到独立子目录，**保留原始文件名不改名**。

## 来源与范围

- 源压缩包：`archive/备份/原始压缩/原档合并.zip`
- 源内前缀：`备份/`
- 本次归位范围：36 个 JS + 1 个 CSS
- 原则：仅归位，不删除历史归档，保留追溯链路

## 子目录

- `physics/`：物理题库快照
- `chemistry/`：化学题库快照
- `geography/`：地理题库快照
- `math/`：数学题库快照与 v438 增量
- `core-js/`：v4.3.7+ 核心玩法 / 题库重分类 / loader / 音效 / 修补
- `styles/`：共享样式资源

## 命名规则

- `*-bank-v436-quality3.js` / `quality4.js` / `quality5.js`：v436 阶段的质量分档快照
- `*-bank-v437-big.js`：v437 阶段的较大整合包
- `*-bank-v437-quality.js` / `quality2.js` / `quality3.js`：v437 阶段的另一轮品质分档
- `math-bank-v438-part1.js` 与 `math-bank-v438-part1（1）.js`：同阶段不同文件名的数学增量，必须并存保留
- `v437a-loader.js` / `v437a-quality-fix.js` / `reclassify-bank-v437a.js`：v437a 过渡期 loader / 修补 / 重分类模块

## quality 分档说明

`v436-quality3/4/5` 与 `v437-quality/quality2/quality3` 来自不同阶段的历史命名体系，并不是简单的数字递进替换关系，因此这里按原文件并存，不做主观合并。

## 来源版本判断

这些文件整体可视为 **修真 v4.1-hotfix 之后、主分支 `wendao-v4.3.7+` 整合阶段** 的资产快照，并含有 `v438` 数学增量与 `v437a` 过渡模块。
