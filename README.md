# 问道·物化地｜问道修仙学院

> 一款面向高中「物理·化学·地理」组合的修仙题材学习游戏。把做题升级成「斩妖」、「渡劫」、「问道」，让学习变好玩。

![版本](https://img.shields.io/badge/版本-v4.3.7-blue)
![学科](https://img.shields.io/badge/学科-物化地-ff69b4)
![阶段](https://img.shields.io/badge/阶段-一轮复习&冲刺高考-orange)
![许可](https://img.shields.io/badge/许可-MIT-green)

> ⚠️ 本仓库的部分历史文件（v4.3.5j、v4.3.6a、v4.3.7 完整 zip、部分历史文件.zip）尚未上传，将在后续 PR 中补齐。
> ⚠️ 根目录现存的 `学习游戏记忆.z01` 与 `学习游戏记忆.zip` 是分卷压缩包，建议后续移到 `archive/备份/`。

## ✨ 项目亮点

- 🎮 **修仙包装学习**：炼气境界、灵石、修为、道心、已斩妖、道途，让高考复习像打游戏。
- 📚 **多学科题库**：物理、化学、地理为主，扩展支持数学、语文；版本号贯穿 v4.3.5 → v4.3.8。
- 🗺️ **完整路线图**：v2.2 修复版 → v4.3.5j → v4.3.6a → v4.3.7 → v4.3.8（math part1）。
- 🧪 **预览版可玩**：HTML 预览页可离线运行，无需服务端。
- 💾 **存档系统**：JSON 存档，支持角色名/称号/境界/经验/灵石/道心等字段。

## 🎯 目标用户

- 学校：莆田四中（及其他学校物化地组合）
- 学段：高中
- 场景：期末复习、查漏补缺、碎片化刷题

## 📂 仓库结构

```
wendao/
├── README.md              # 项目说明（你正在看的文件）
├── CHANGELOG.md           # 版本变更日志
├── LICENSE                # 开源协议（MIT）
├── .gitignore             # Git 忽略规则
├── .github/               # Issue / PR 模板
├── docs/                  # 项目文档、交接说明、开发记忆
├── src/
│   ├── 项目/              # 当前主版本源代码（题库 JS、手册）
│   └── preview/           # HTML 预览页
├── data/
│   └── 样本存档/          # 游戏存档 JSON 示例
└── archive/
    ├── 备份/              # 历史版本与备份
    └── 部分历史文件.zip
```

## 🚀 快速开始

1. 进入 `src/preview/`
2. 直接用浏览器打开 `wendao_wuhuadi_xiuxian_preview.html`
3. 或使用本地 HTTP 服务（推荐，避免部分浏览器 CORS 限制）：
   ```bash
   python3 -m http.server 8000
   # 然后访问 http://localhost:8000/src/preview/
   ```

## 🗂️ 版本路线

| 版本 | 状态 | 关键变化 |
|---|---|---|
| v2.2 phase1-bugfix | 已归档 | 早期修真版，bug 修复分支 |
| v4.3.5j | 历史归档 | 平衡调整 |
| v4.3.6a | 历史归档 | 题库扩容 |
| **v4.3.7** | **当前主版本** | 战斗平衡、重新分类、音效、背景 |
| v4.3.8 (math part1) | 实验性 | 数学题库第 1 部分 |

详细变更记录见 [CHANGELOG.md](CHANGELOG.md)。

## 🧩 题库命名规则

```
{学科}-bank-v{版本}-{标签}.js
例：math-bank-v437-quality3.js
```

学科：`chemistry` / `geography` / `math` / `physics` / `chinese`
标签：`big` / `quality` / `quality2` / `quality3` / `quality4` / `quality5` / `part1`

## 🛠️ 开发

- **主代码**：原生 HTML + JavaScript，无外部依赖、可离线运行。
- **题库**：纯 JS 数组/对象，可直接 import 或 script 标签引入。
- **存档**：JSON 文本，最简结构见 `data/样本存档/sample-save.json`。

### 提交 Issue / PR 的约定

- Bug 报告：使用 [Bug Report](.github/ISSUE_TEMPLATE/bug_report.md) 模板
- 功能建议：使用 [Feature Request](.github/ISSUE_TEMPLATE/feature_request.md) 模板
- 提交 PR：使用 [Pull Request 模板](.github/PULL_REQUEST_TEMPLATE.md)

详细开发背景与历史决策见 [docs/交接文档.md](docs/交接文档.md)。

## 📊 仓库当前状态（2026-08-16）

| 模块 | 状态 |
|---|---|
| 框架（README/LICENSE/.gitignore/CHANGELOG/.github） | ✅ 已就绪 |
| 文档（项目说明、存档格式说明） | ✅ 已就绪 |
| 题库 JS（v437 化学/地理/数学/物理、chinese/math 当前版） | ⏳ 等你上传到 src/项目/ |
| HTML 预览页 | ⏳ 等你上传到 src/preview/ |
| 历史 zip（v4.3.5j/6a/7、部分历史文件.zip 等） | ⏳ 等你上传到 archive/备份/ |

## 📜 许可

本项目以 MIT 协议开源，详见 [LICENSE](LICENSE)。

## 🙏 致谢

- 莆田四中物化地组合的所有同学与老师
- 项目演化过程中提出建议与反馈的所有使用者

---

⚔️ 问道·物化地 · 炼气一层 · 期末急救版预览
