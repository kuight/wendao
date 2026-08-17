# 问道（wendao） / 问道修仙学院

> 一个面向福建高中生、以**修仙叙事 + 学科刷题 + 离线单机**为核心体验的学习游戏仓库。

![cover](./src/assets/img/readme/01-latest-archive.jpg)
![core-subjects](./src/assets/img/readme/02-core-subjects.png)
![stack](./src/assets/img/readme/03-stack.jpg)
![storage](./src/assets/img/readme/04-storage.jpg)
![backend](./src/assets/img/readme/05-backend.jpg)
![overview](./src/assets/img/readme/06-architecture.png)
---

## 一句话说明

这个项目同时保留了两条可考证的产品线：

- **主分支命名线 `问道 / wendao`**：从 `wendao-v3.0` 起，可以明确看到项目开始以 `wendao` 命名归档，后续在 `v4.3.5* / v4.3.6* / v4.3.7 / v4.4.0` 中逐步扩展题库、玩法与补丁体系。
- **修真分支 `问道修仙学院`**：`问道修仙学院-v2.2-phase1-bugfix` 与 `问道修仙学院-v4.1-hotfix` 证明这条命名线真实存在，而且比 `wendao-v3.0` 更早落地。

当前仓库不仅是项目框架，也是一个**历史归档仓**：除了文档和目录结构外，还保留了原始分卷压缩、合并原档和多版历史包。

---


## 版本真相（VERSION TRUTH）

> **不要仅凭版本号判断先后。** 本仓库 13 个归档的内容指纹分析（入口 mtime / 脚本 md5 / 图片 pHash / 关键函数集 / 题库学科集合）显示：版本号 ≠ 顺序，目录名 ≠ 内容。完整结论见 [docs/VERSION_TRUTH.md](./docs/VERSION_TRUTH.md)。

关键事实：

- `wendao-v4.3.5f` 的 CHANGELOG 自述内容为「v4.3.6 融汇贯通重构版」——zip 装着 4.3.6 内容、挂着 4.3.5f 名字。
- `v4.3.5j / v4.3.6b-p7 / v4.4.0` 的首页 `<title>` 都仍写「v4.3.5i」——目录名 > CHANGELOG > title 三层错位。
- `原档合并` 与 `学习游戏记忆_root` 内容完全同源（Jaccard=1.0000），是同一对话产物被打了两次包。
- 内容最完整版本为 **v4.4.0**（函数 277 / 脚本 136 / 图片 35 张去重，均为 13 样本最高）。
- `main` 不是任何归档的严格子集或超集，而是「v4.3.6b-p7 / v4.4.0 历史源码与素材 + v4.38/v4.39/v4.40 增量 + 重新整理的 src/ 工作树 + 治理文档层」。

## 项目定位

这是一个**纯前端、无后端、可离线运行**的学习游戏项目。已验证版本包均由 `index.html + assets/ + data/ + subjects/` 组成，可直接双击打开或用本地 HTTP 服务运行。

从已核验的 README / CHANGELOG / HANDOFF / HTML 页面可以确认：

- 目标场景：福建莆田四中等高中学习环境
- 学科结构：**物理、化学、地理、数学、语文、英语**
- 存档方式：**localStorage 本地存档 + JSON 导出备份**
- 技术栈：**HTML + CSS + Vanilla JS**
- 运行方式：**离线优先，无后端依赖**

---

## 快速开始

### 运行方式

1. 在 [`archive/备份/`](./archive/%E5%A4%87%E4%BB%BD/) 中选择一个完整版本包。
2. 推荐优先查看：
   - `wendao-v3.0.zip`：主线最早完整可运行归档包
   - `wendao-v4.3.7.zip`：题库清洗与 quality 合并后的主线节点
   - `wendao4.4.0.zip`：当前仓库中最新的实验性完整归档包
3. 解压后直接打开 `index.html` 即可离线运行。
4. 如浏览器限制本地脚本读取，可在目录下启动本地 HTTP 服务：

```bash
python3 -m http.server 8000
# 然后访问 http://localhost:8000
```

### 存档位置

项目设计为**本地优先（local-first）**：

- 默认保存在浏览器 `localStorage`
- 可通过界面导出 JSON 进行备份
- 当前仓库保留了真实 `存档.txt` 示例与分卷原始压缩，便于后续恢复和考证

---

## 核心机制

```text
做题 / 参悟 / 斩妖 / 打坐 / 雷劫
            ↓
   获得 exp / lingshi / 道心变化
            ↓
      提升 realmId（境界）
            ↓
 HP / MP / ATK / DEF / CRIT 随版本成长
```

### 境界与成长

| 层级 | 已验证证据 | 说明 |
|---|---|---|
| 凡人 | `CHANGELOG-v4.0.md` | 奖励倍率基准 1× |
| 炼气 | `CHANGELOG-v4.0.md`、预览页文案 | 项目中最常出现的修仙境界 |
| 筑基 | `CHANGELOG-v4.0.md` | 奖励倍率约 2.6× |
| 金丹 | `CHANGELOG-v4.0.md` | 奖励倍率约 6× |
| 元婴 | `CHANGELOG-v4.0.md` | 奖励倍率约 30× |
| 化神 | `CHANGELOG-v4.0.md` | 奖励倍率约 200× |
| 渡劫 | `CHANGELOG-v4.0.md`、`thunder-tribulation-v440.js` | 后期境界，也是后期玩法命名来源 |

---

## 学科体系（6 科）

| 学科 | 页面 / 命名证据 | 当前已验证状态 |
|---|---|---|
| 物理 Physics | `subjects/physics.html` / `⚡ 雷霆殿` | 核心主线学科 |
| 化学 Chemistry | `subjects/chemistry.html` / `⚗ 丹鼎峰` | 核心主线学科，v4.4.0 有深度讲义 |
| 地理 Geography | `subjects/geography.html` / `🌏 山河阁` | 核心主线学科 |
| 数学 Math | `subjects/math.html` / `🔢 推衍宫` | 持续扩展 |
| 语文 Chinese | `subjects/chinese.html` / `📜 文渊阁` | 有补充包与手写讲义痕迹 |
| 英语 English | `subjects/english.html` / `🌐 译灵堂` | 在多代版本中持续存在 |

### 已验证题量统计（以 `v4.3.7` 版本文档为准）

| 学科 | 已验证题数 | 备注 |
|---|---:|---|
| 物理 | 4208 | `3998 清洗版 + 210 quality` |
| 化学 | 1303 | `1058 清洗版 + 245 quality` |
| 地理 | 423 | `128 清洗版 + 295 quality` |
| 数学 | 475 | `245 清洗版 + 230 quality` |
| 语文 | 54 | 文档注明待补 |
| 英语 | 83 | 文档注明待补 |
| **合计** | **6546** | 当前仓库里可直接核验的一组数据 |

### v4.4.0 新增内容

`v4.4.0` 文档显示，后期还加入了：

- 化学 12 篇手写讲义
- 168 张 flashcards
- 43 个公式拼盘
- 48 步分步综合题
- `Thunder Tribulation`（雷劫限时闯关）三档模式

---

## 双线架构：修真分支 vs 主分支

### 修真分支（问道修仙学院）

修真分支强调**沉浸式学习与修仙表达**。已验证的代表模块包括：

- `auto-visualizer.js`
- `immersive-learning.js`
- `pixel-art.js`
- `side-dock.js`

### 主分支（问道 / wendao）

主分支后期更强调**题库治理、模块化与玩法系统化**。已验证模块包括：

- `knowledge-graph-v436.js`
- `smart-question-v436.js`
- `battle-arena-v436.js`
- `alchemy-lab-v435d.js`
- `spirit-garden-v435d.js`

### 汇流结论

后期版本并不是简单地“主分支替代修真分支”，而是把修真线的沉浸能力保留下来，再叠加主线的题库治理与玩法模块。这也是为什么仓库文档采用**双线叙述**而不是单纯按版本号写历史。

---

## 版本演进（按真实 mtime / 完成度排序，不按版本号大小）

| 顺序 | 版本节点 | 分支归属 | mtime / 完成度证据 | 说明 |
|---:|---|---|---|---|
| 1 | `问道修仙学院-v2.2-phase1-bugfix` | 修真分支 | 包内 mtime 早于 `v3.0` | 当前仓库可验证到的最早完整包 |
| 2 | `wendao-v3.0` | 主分支 | README / CHANGELOG + 包内 mtime | 主线最早完整 `wendao` 命名包 |
| 3 | `问道修仙学院-v4.1-hotfix` | 修真分支 | 与 `wendao-v4.1-hotfix` 同构建 | 修真分支后期稳定版 |
| 4 | `wendao-v4.1-hotfix` | 主分支过渡 | 双命名同构建 | 命名过渡期产物 |
| 5 | `wendao-v4.3.6` | 主分支 | 包内 mtime 与模块化程度 | 进入 4.3.x 主线实验期 |
| 6 | `wendao-v4.3.6-final` | 主分支 | 明确晚于 `v4.3.6` | 稳定性收敛版 |
| 7 | `wendao-v4.3.5f` | 主分支 | mtime 晚于 `v4.3.6-final` | 命名回退但实际更晚 |
| 8 | `wendao-v4.3.6a` | 主分支 | 基于 5f 骨架继续重构 | 保留了 stale 引用痕迹 |
| 9 | `wendao-v4.3.5g` | 主分支 | mtime + 依赖链 | 热修 / 架构清洗阶段 |
| 10 | `wendao-v4.3.5h` | 主分支 | mtime + 完成度 | 视觉回补与平衡调整 |
| 11 | `wendao-v4.3.5i` | 主分支 | mtime + 完成度 | 补丁继续内联 |
| 12 | `wendao-v4.3.5j` | 主分支 | 独立修复包与场景图 | 5 系列收尾版 |
| 13 | `wendao-v4.3.6b-p7` | 主分支过渡 | 分卷大包 + 后期质量补丁 | 通往 v4.3.7 的中间层 |
| 14 | `wendao4.4.0` | 实验主线 | 当前仓库中最新完整包 | 化学讲义 + 雷劫玩法 |

> 重点：**不要仅凭版本号判断先后**。例如 `v4.3.5f` 的实际完成时间晚于 `v4.3.6-final`，`v2.2` 也实测早于 `v3.0`。

---

## 治理与阶段

本仓库治理遵循六阶段路线（自 v4.4.0 起）：
- **Phase 1 — Truth & Portal**：README 真实化、index.html 主入口、治理草案
- **Phase 2 — 归档归位**：v4.4.0 基线落定，redundant 清理
- **Phase 3 — 图片回归**：35 张核心图覆盖 cover/character/scene/emote/ui
- **Phase 4 — 文档与策略**：MANIFEST.sha256、LFS_POLICY、英语题库
- **Phase 5 — 历史清算**：archive/_legacy 留底 + 元数据修齐
- **Phase 6 — 深度清理（本 PR 6 合 1）**：English 题库正文 / archive 双轨瘦身 / PNG→JPEG 改名 / MANIFEST 重建 / 治理段补齐
- **Phase 7 — 交接与恢复**：steward/ 7 份归档落主分支，确保模型重置后可恢复
- **Phase 8 — 真空与门户**：archive/_legacy/redundant/wendao-v4.3.* 真空（10 blob），archive/v4.4.0/ 空骨架删除，src/index.html portal 落地

凭据治理：所有 sandbox token 用 `shred -u + unset + history -c` 三步销毁，token 不写进 commit message 或 PR body；REST 走 HEREDOC；禁用 `git push https`（必 401）。
风险与回滚：单 squash commit；`git revert <new_sha>` 一键复原。

## 当前仓库结构

```text
wendao/
├── .github/
├── archive/
│   └── 备份/
│       ├── 原始压缩/
│       └── 各版本归档卡
├── data/
│   └── 样本存档/
├── docs/
│   └── 版本谱系图.md
├── src/
│   ├── preview/
│   └── 项目/
├── 学习游戏记忆.z01
└── 学习游戏记忆.zip
```

说明：当前仓库同时保留“框架化目录”和“历史完整压缩归档”，目标是兼顾**继续开发**与**长期溯源**。

---

## 如何贡献

欢迎继续做三类工作：

1. 补全文档：把交接文档、记忆、存档说明继续整理进 `docs/` 与 `data/`
2. 补齐归档：把根目录分卷、散落 patch、图片素材归档到 `archive/备份/`
3. 重建可运行主线：把当前版本真正需要的 `index.html / assets / data / subjects` 提炼回 `src/`

提交流程：

- Bug 报告：[`bug_report.md`](./.github/ISSUE_TEMPLATE/bug_report.md)
- 功能建议：[`feature_request.md`](./.github/ISSUE_TEMPLATE/feature_request.md)
- Pull Request：[`PULL_REQUEST_TEMPLATE.md`](./.github/PULL_REQUEST_TEMPLATE.md)

---

## 作者 / 维护

- 仓库所有者：**kuight**
- 当前协作方式：GitHub Issues / Pull Requests
- 仓库地址：<https://github.com/kuight/wendao>

---

## License 与鸣谢

本仓库当前使用 [MIT License](./LICENSE)。

鸣谢以下真实可识别的项目语境：

- 福建高中学习场景
- 物理 / 化学 / 地理为核心的选科结构
- 后续扩展到数学 / 语文 / 英语的六科学习框架
- “边玩边学”“修仙化学习”“单机 HTML 学习游戏”的设计方向
