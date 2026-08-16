# 问道（wendao） / 问道修仙学院（Xiuxian line）

> 一个面向福建高中生、以 **修仙叙事 + 学科刷题 + 离线单机** 为核心体验的学习游戏仓库。当前仓库同时保留了两条可考证的产品线：**主分支命名线 `问道 / wendao`**，以及更早出现、修仙命名更强的 **修真分支 `问道修仙学院`**。

![latest-archive](https://img.shields.io/badge/latest%20archive-v4.4.0-orange)
![core-subjects](https://img.shields.io/badge/core-%E7%89%A9%E5%8C%96%E5%9C%B0%20%2B%20%E8%AF%AD%E6%95%B0%E8%8B%B1-blue)
![stack](https://img.shields.io/badge/stack-HTML%20%2B%20CSS%20%2B%20Vanilla%20JS-black)
![storage](https://img.shields.io/badge/storage-localStorage-green)
![backend](https://img.shields.io/badge/backend-none-lightgrey)

---

## 一句话说明

- **主分支（问道 / wendao）**：从 `wendao-v3.0.zip` 起，可以明确看到项目开始以 `wendao` 命名归档，后续在 `v4.3.5* / v4.3.6* / v4.3.7 / v4.4.0` 中逐步扩展题库、玩法与补丁体系。
- **修真分支（问道修仙学院）**：`问道修仙学院-v2.2-phase1-bugfix.zip` 与 `问道修仙学院-v4.1-hotfix.zip` 证明这条命名线真实存在，而且比 `wendao-v3.0.zip` 更早落地。
- **仓库现状**：`archive/备份/` 中保存了 14 个已验证历史版本节点；根目录仍保留 `学习游戏记忆.z01` 与 `学习游戏记忆.zip` 分卷档案，说明当前仓库兼具**项目框架**与**本地历史归档仓**的双重属性。

---

## 项目定位

这是一个**纯前端、无后端、可离线运行**的学习游戏项目。已验证版本包均由 `index.html + assets/ + data/ + subjects/` 组成，可直接双击打开或用本地 HTTP 服务运行；已验证说明文本明确写到“**双击即玩**”“**不需要任何后端与网络**”“**localStorage 存档**”。

项目服务对象可以从版本内文档直接识别：多份 README / HANDOFF / CHANGELOG 都明确指向**福建莆田四中**、**高中**、**物化地组合**的学习场景；同时六个学科页标题也已在归档包里实证存在：**物理、化学、地理、数学、语文、英语**。

---

## 快速开始（Quick Start）

### 运行方式

1. 在 [archive/备份](./archive/%E5%A4%87%E4%BB%BD/) 中选择一个完整版本包。
2. 推荐优先查看：
   - `wendao-v3.0.zip`：主线最早的完整可运行归档包
   - `wendao-v4.3.7.zip`：题库清洗与 quality 合并后的主线节点
   - `wendao4.4.0.zip`：当前仓库中最新的实验性完整归档包
3. 解压后直接打开 `index.html`，即可离线运行。
4. 如浏览器限制本地脚本读取，可在目录下启动一个本地 HTTP 服务：

```bash
python3 -m http.server 8000
# 然后访问 http://localhost:8000
```

### 存档位置

已验证版本说明明确写明：

- 游戏进度默认保存在 **localStorage**。
- 可通过界面导出为 **JSON** 做本地备份。
- 根目录历史分卷包中还保留了一个真实 `存档.txt` 示例，字段里已验证存在：`version`、`createdAt`、`lastSavedAt`、`char`、`flags`、`sects` 等顶层对象；其中 `char` 下至少可见 `name`、`title`、`realmId`、`exp`、`lingshi`、`daoxin`、`hp`、`mp`、`atk`、`def`、`crit`、`pet`、`pills`、`equippedGear` 等状态字段。

> 这意味着本项目从设计上就是**本地优先（local-first）**：可离线复习、可本地存档、可手动导出，不依赖数据库或云端后端。

---

## 核心机制速览

```text
做题 / 参悟 / 斩妖 / 打坐 / 雷劫
            ↓
   获得 exp / lingshi / 道心变化
            ↓
      提升 realmId（境界）
            ↓
 HP / MP / ATK / DEF / CRIT 随版本成长
```

### 境界与成长（按已验证文本整理）

| 层级 | 已验证证据 | 说明 |
|---|---|---|
| 凡人 | `CHANGELOG-v4.0.md` | 作为倍率基准 1× |
| 炼气 | `CHANGELOG-v4.0.md`、多个 UI 文案 | 早期与主线都大量出现，预览页也出现“炼气一层” |
| 筑基 | `CHANGELOG-v4.0.md` | 奖励倍率示例约 2.6× |
| 金丹 | `CHANGELOG-v4.0.md` | 奖励倍率示例约 6× |
| 元婴 | `CHANGELOG-v4.0.md` | 奖励倍率示例约 30× |
| 化神 | `CHANGELOG-v4.0.md` | 奖励倍率示例约 200× |
| 渡劫 | `CHANGELOG-v4.0.md`、`thunder-tribulation-v440.js` | 既是境界层级，也是后期玩法命名来源 |

> 代码与存档采用 `realmId` 做数值索引，文案层则持续使用“炼气 / 筑基 / 金丹 / 元婴 / 化神 / 渡劫”的修仙表达。

---

## 学科体系（6 科）

| 学科 | 页面/命名证据 | 当前已验证状态 |
|---|---|---|
| 物理 Physics | `subjects/physics.html` / `⚡ 雷霆殿` | 核心主线学科 |
| 化学 Chemistry | `subjects/chemistry.html` / `⚗ 丹鼎峰` | 核心主线学科，v4.4.0 有化学深度包 |
| 地理 Geography | `subjects/geography.html` / `🌏 山河阁` | 核心主线学科 |
| 数学 Math | `subjects/math.html` / `🔢 推衍宫` | 持续扩展，v4.3.8 / v4.4.0 有深度讲义痕迹 |
| 语文 Chinese | `subjects/chinese.html` / `📜 文渊阁` | 后续有补充包与手写讲义痕迹 |
| 英语 English | `subjects/english.html` / `🌐 译灵堂` | 在 v3.0、v4.1、v4.3.7、v4.4.0 都仍然可见 |

### 已验证题量统计（以 `v4.3.7` 版本内 `CHANGELOG-v4.3.7.md` 为准）

| 学科 | 已验证题数 | 备注 |
|---|---:|---|
| 物理 | 4208 | `3998 清洗版 + 210 quality` |
| 化学 | 1303 | `1058 清洗版 + 245 quality` |
| 地理 | 423 | `128 清洗版 + 295 quality` |
| 数学 | 475 | `245 清洗版 + 230 quality` |
| 语文 | 54 | 文档注明“待补” |
| 英语 | 83 | 文档注明“待补” |
| **合计** | **6546** | 这是当前仓库里可直接核验到的一组题量数据 |

### v4.4.0 的新增学习内容（已验证）

`CHANGELOG-v4.4.0.md` 与 `HANDOFF-v4.4.0.md` 显示，v4.4.0 额外加入了：

- 化学 12 篇手写讲义（`chem_xbx_*`）
- 168 张 flashcards
- 43 个公式拼盘
- 48 步分步综合题
- `Thunder Tribulation`（雷劫限时闯关）三档模式

> 我没有写入“总题量约 16,373 题”这一说法，因为当前已直接核验到的版本文档给出了另一组明确数字；在未完成全仓逐题统计前，README 以 **6546（v4.3.7 已验证值）** 作为可证实数据。

---

## 双线架构：修真分支 vs 主分支

### 1) 修真分支（问道修仙学院）

这一条线最明显的特征，是**修仙氛围与沉浸式学习强化**。以下模块名已经在 `v4.1-hotfix` 与 `v4.4.0` 包内实证存在：

- `auto-visualizer.js`
- `immersive-learning.js`
- `pixel-art.js`
- `side-dock.js`

这些文件说明修真线并不只是一个名字，而是一套真实的交互与表现层思路。

### 2) 主分支（问道 / wendao）

主分支后期则更明显地强化**题库治理、功能模块化与玩法系统化**。以下模块名已经在 `v4.3.7` / `v4.4.0` 包内实证存在：

- `knowledge-graph-v436.js`
- `smart-question-v436.js`
- `battle-arena-v436.js`
- `battle-arena-v437-balance.js`
- `alchemy-lab-v435d.js`
- `spirit-garden-v435d.js`

### 3) 两条线并非完全割裂

`wendao4.4.0.zip` 同时包含上面两组模块。这说明项目后期并不是简单地“主分支替代修真分支”，而更像是：

- **命名上**：从“问道修仙学院”逐渐转向“问道 / wendao”
- **代码上**：把修真线的沉浸式能力保留下来，再叠加主线的题库治理与玩法模块

这也是当前 README 必须双线叙述的原因。

---

## 版本演进（按包内 `mtime` 排序，而不是按版本号排序）

> 说明：下表排序依据是**压缩包内部文件的真实时间窗**（earliest/latest mtime），不是版本字符串大小。也正因如此，`v2.2` 会排在 `v3.0` 前，`v4.3.6-final` 与 `v4.3.6a` 也会出现在 `v4.3.5g/h/i/j` 之前。

| 顺序 | 版本节点 | 分支归属 | 包内 mtime 证据 | 项目完成度 / 观察 |
|---:|---|---|---|---|
| 1 | `问道修仙学院-v2.2-phase1-bugfix.zip` | 修真分支 | `2026-06-30 16:07:48 → 2026-06-30 16:18:30` | 当前仓库可验证到的**最早完整包**；27 文件，已含 `assets/`、`data/`、`subjects/`、`index.html`、`README.md` |
| 2 | `wendao-v3.0.zip` | 主分支 | `2026-07-01 10:12:52 → 2026-07-01 10:24:30` | 主线最早完整 `wendao` 命名包；README 明确写“纯 HTML/JS/CSS，双击即玩，无后端” |
| 3 | `v4.1-hotfix`（两种命名包） | 过渡节点 | `2026-07-03 23:42:12 → 2026-07-04 00:16:10` | 同时存在 `问道修仙学院-v4.1-hotfix.zip` 与 `wendao-v4.1-hotfix.zip`；两者文件数与时间窗一致，说明这是一段真实的命名过渡期 |
| 4 | `wendao-v4.3.6.zip` | 主分支 | `2026-07-05 17:47:34 → 2026-07-05 17:51:50` | 99 文件，已出现主线模块化资产体系 |
| 5 | `wendao-v4.3.6-final.zip` | 主分支 | `2026-07-05 19:04:52 → 2026-07-05 19:11:40` | 101 文件；按 mtime 明显早于后续 `v4.3.5g/h/i/j` |
| 6 | `wendao-v4.3.5f.zip` | 主分支 | `2026-07-05 20:00:50 → 2026-07-05 20:11:02` | 102 文件；说明版本号并不等于时间顺序 |
| 7 | `wendao-v4.3.6a.zip` | 主分支 | `2026-07-05 23:27:24 → 2026-07-05 23:34:52` | 87 文件；仍属于 `v4.3.6*` 族，但完成时间晚于 `v4.3.5f` |
| 8 | `wendao-v4.3.5g.zip` | 主分支 | `2026-07-06 20:31:12` | 100 文件；开始进入密集热修期 |
| 9 | `wendao-v4.3.5h.zip` | 主分支 | `2026-07-06 21:36:56` | 105 文件；与后续 `i/j` 极接近 |
| 10 | `wendao-v4.3.5i.zip` | 主分支 | `2026-07-06 21:36:56 → 2026-07-06 22:14:32` | 105 文件；`HANDOFF-v4.3.5j.md` 说明关键数值逻辑已逐步内联回 `game-core.js` |
| 11 | `wendao-v4.3.5j.zip` | 主分支 | `2026-07-06 21:36:56 → 2026-07-06 23:11:48` | 111 文件；已验证包含 `v435j-fix.css/js`、音效与视觉修复 |
| 12 | `wendao-v4.3.7.zip` | 主分支 | `2026-07-07 13:30:34 → 2026-07-07 13:32:00` | 135 文件；`CHANGELOG-v4.3.7.md` 给出了目前最清晰的一版题库清洗与 quality 合并统计 |
| 13 | `wendao-v4.3.6b-p7`（分卷） | 主分支 / 实验中间层 | `2026-07-07 21:30:34 → 2026-07-14 22:28:48` | 分卷包（`.z01 + .zip`），合并后 362 文件；说明这是一个持续修改时间跨度较长的大包 |
| 14 | `wendao4.4.0.zip` | 实验分支 | `2026-07-07 21:30:34 → 2026-07-22 21:40:32` | 当前仓库可验证到的**最新完整包**；199 文件，新增化学 12 篇讲义与雷劫玩法 |

### 为什么 `v2.2` 会排在 `v3.0` 前面？

因为这不是按版本号排序，而是按**压缩包内文件真实 mtime** 排序：

- `v2.2` 的时间窗是 `2026-06-30 16:07:48 → 16:18:30`
- `v3.0` 的时间窗是 `2026-07-01 10:12:52 → 10:24:30`

所以从可验证证据看，**修真分支的 v2.2 确实比主分支的 v3.0 更早落地**。

### 当前仓库还能看到但未单独归档的版本痕迹

在 `wendao4.4.0.zip` 内部文件名与 HANDOFF 文档中，还能直接看到：

- `v4.3.8`：`learning-modes-v438.js`、`learning-modes-loader-v438.js`、`math-bank-v438-part1.js` 等
- `v4.3.9`：`learning-modes-chinese-patch-v439.js`、`deep-dive-chinese-v439.js`

这说明 `v4.3.8 / v4.3.9` 作为源码层增量真实存在；只是当前 `archive/备份/` 目录里**没有独立 zip 包**，因此本 README 不把它们列为独立归档节点。

---

## 当前仓库结构（已落地）

```text
wendao/
├── .github/                    # Issue / PR 模板
├── archive/
│   └── 备份/                   # 历史 zip、分卷包与归档 README
├── data/
│   └── 样本存档/               # JSON 样例存档
├── docs/                       # 项目说明、存档说明、开发记忆占位
├── src/
│   ├── preview/                # 预览入口占位
│   └── 项目/                   # 当前主版本源码占位
├── 学习游戏记忆.z01            # 根目录历史分卷
└── 学习游戏记忆.zip            # 根目录历史分卷
```

### 状态说明

- **框架层**：已经按 GitHub 项目规范整理为 `docs / src / data / archive / .github`。
- **归档层**：历史版本主要位于 [archive/备份](./archive/%E5%A4%87%E4%BB%BD/)。
- **根目录分卷**：`学习游戏记忆.z01 + 学习游戏记忆.zip` 仍保留，说明还有一批历史内容尚未完全归位到新目录。
- **源码现状**：当前仓库既有“框架化整理”的目录，也有“完整历史包保留”的归档策略；这不是一个只放最新源码的仓库，而是一个**可追溯的本地档案型仓库**。

---

## 如何贡献（Contributing）

欢迎继续做三类工作：

1. **补全文档**：把真实的 `交接文档 / 记忆 / 新记忆 / 存档` 继续整理进 `docs/` 与 `data/`。
2. **补齐归档**：继续把根目录分卷、散落 patch、图片素材，归档到 [archive/备份](./archive/%E5%A4%87%E4%BB%BD/)。
3. **重建可运行主线**：把当前版本真正需要的 `index.html / assets / data / subjects` 提炼回 `src/` 下，形成清晰的“当前版源码”。

提交流程已准备好：

- Bug 报告：[`bug_report.md`](./.github/ISSUE_TEMPLATE/bug_report.md)
- 功能建议：[`feature_request.md`](./.github/ISSUE_TEMPLATE/feature_request.md)
- Pull Request：[`PULL_REQUEST_TEMPLATE.md`](./.github/PULL_REQUEST_TEMPLATE.md)

---

## 作者 / 维护信息

- 仓库所有者：**kuight**
- 当前建议的联系与协作方式：直接通过 GitHub 的 **Issues / Pull Requests** 沟通
- 当前仓库地址：<https://github.com/kuight/wendao>

> 由于我只写入已验证信息，这里不额外补写未在仓库中明确公开的联系方式。

---

## License 与鸣谢

本仓库当前使用 [MIT License](./LICENSE)。

鸣谢以下真实可识别的项目语境：

- 福建莆田四中的高中学习场景
- 物理 / 化学 / 地理为核心的选科结构
- 后续持续扩展到数学 / 语文 / 英语的六科学习框架
- 多个版本文档中反复出现的“边玩边学”“修仙化学习”“单机 HTML 学习游戏”设计方向

---

## README 编写说明

本 README 仅采用当前仓库中**直接可验证**的材料编写，包括但不限于：

- `archive/备份/` 中的版本包文件名、文件数与包内 `mtime`
- `wendao-v3.0.zip` 内 `README.md` 与 `CHANGELOG-v3.0.md`
- `问道修仙学院-v4.1-hotfix.zip` / `wendao-v4.1-hotfix.zip` 内 `CHANGELOG-v4.0.md`
- `wendao-v4.3.7.zip` 内 `CHANGELOG-v4.3.7.md`、`HANDOFF-v4.3.5j.md`
- `wendao4.4.0.zip` 内 `CHANGELOG-v4.4.0.md`、`HANDOFF-v4.4.0.md`
- 根目录分卷包中可读出的 `存档.txt` 与 `wendao_wuhuadi_xiuxian_preview.html`

未完成全量核验的数据（例如“全仓总题量 16373”）没有写入主叙述。
