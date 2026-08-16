# src/v4-increments/

从 `wendao4.4.0.zip` 解压提取的修真资产与 v4.3.8/9、v4.4.0 增量 JS。
**不依赖版本号大小**，按实际文件 mtime 与完成度排序：v4.4.0 内嵌 v4.3.7/v4.3.8/v4.3.9 文档与 JS，因此修真资产 + v438/v439 增量均集中在 `wendao4.4.0.zip` 内。

## 子目录实测状态

| 子目录 | 修真归属 | 源文件实测 | 状态 |
|---|---|---|---|
| `xiuxian-assets/auto-visualizer/` | 修真分支 | wendao4.4.0/assets/auto-visualizer.js | ✅ 实测 (78,915 B) |
| `xiuxian-assets/immersive-learning/` | 修真分支 | wendao4.4.0/assets/immersive-learning.js | ✅ 实测 (47,159 B) |
| `xiuxian-assets/pixel-art/` | 修真分支 | wendao4.4.0/assets/pixel-art.js | ✅ 实测 (37,235 B) |
| `xiuxian-assets/side-dock/` | 修真分支 | wendao4.4.0/assets/side-dock.js | ✅ 实测 (8,626 B) |
| `v438/` | 主分支增量 | wendao4.4.0 内 v4.3.8 模块 | ✅ 实测 (6 文件) |
| `v439/` | 主分支增量 | wendao4.4.0 内 v4.3.9 模块 | ✅ 实测 (3 文件) |
| `v440-core/` | 实验分支核心 | wendao4.4.0 新增 (雷劫 + chem_xbx) | ✅ 实测 (4 文件) |
| `chem-xbx/` | — | 12 个 key (`chem_xbx_lizi` 等) 在 `chemistry-xbx-manual-v440.js` 数组里，**非独立 .js** | ⚠️ 未找到（独立文件），合并源已落 v440-core |
| `thunder/` | — | 雷劫整套在 `thunder-tribulation-v440.js` 单文件 | ⚠️ 未找到（独立文件），合并源已落 v440-core |

## 数据来源

- **主源**：`archive/备份/wendao4.4.0.zip`
  - SHA-256: `19715861f4d5eabf930210e1b6fc0a2670769cdb4330172caf2cec3b35d44cc2`
  - 大小：14,926,926 B 压缩，199 文件解压
  - HTTP 200 from `https://raw.githubusercontent.com/kuight/wendao/main/archive/%E5%A4%87%E4%BB%BD/wendao4.4.0.zip`
- **验证副源**：`原档合并.zip`（来自 `学习游戏记忆.z01 + .zip` 7-Zip 合并）→ 内嵌 `备份/wendao-v4.3.7.zip`
  - SHA-256: `b553395abd93e5c007f25827341696bef7b6bdc5663070aa5043b6ab1e831361`
  - 大小：14,480,171 B 未压缩
  - **但 v4.3.7.zip 不在 GitHub raw URL 上**（HTTP 404 已实测）

## 修真资产 4 件套判定逻辑

修真分支 mtime ≤ 2026-07-03，主分支 mtime ≥ 2026-07-05。`wendao4.4.0.zip` 内含所有 4 件套 → 该包将修真资产"迁入"主分支，实质为修真资产的主分支最终落地形态。
