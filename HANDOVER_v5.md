# 问道修仙学院 v5 项目交接文档（完整版）

> 生成时间：2026-08-25
> 交接对象：云端全新 AI agent（零记忆、零上下文）
> 重要：请先完整阅读本文档再动手，避免重走本地agent踩过的所有坑。

---

## 0. 项目一句话定位

纯前端修仙学习游戏。v5 目标：元气骑士（Soul Knight）式的爽快 Roguelike 地牢 x 六科知识点（物/化/地/数/文/英）深度融合。
不是"刷题套修仙壳"——每只怪的攻击机制 = 某个知识点的物理/逻辑定律，玩家用对知识点的理解来应对 = 打怪的过程就是"用知识点打题"。

---

## 1. 项目物理位置

- 仓库本地根：E:\work\wendao\wendao-main
- 仓库远端：https://github.com/kuight/wendao（master 分支）
- v5 新框架：E:\work\wendao\wendao-main\v5\
- 工作规划目录：E:\work\问道-蓝图规划[待办]\
  - README.md — 工作规范
  - CHANGELOG.md — 改动记录
  - _backup/ — 破坏性改动前备份
  - v5-蓝图规划.md — v5 完整蓝图（Hub-and-Spoke 多场馆体系）
  - 元气骑士引擎设计.md — Soul Knight 式地牢引擎设计文档
- 云端遗产：E:\work\wendao\wendao-main\_cloud_legacy\（626MB，不入 git）
  - 17 批题库约 10,890 题
  - 38 个纯前端小游戏
  - portal-v4 枢纽
  - 教程卷 1-9

---

## 2. 技术栈

- 纯前端：HTML + CSS + Vanilla JS
- 无后端、无框架、无构建工具
- 离线可用（localStorage 存档 + JSON 导出）
- Canvas 2D 渲染（等距 + 顶视图）
- 模块化架构：boot 对象 + 11 个 core 模块 + UI 模块

---

## 3. 当前代码基线（git master HEAD = cd75d63）

### 3.1 v5 框架（v5/ 目录）—— 11 模块完整

| 模块 | 文件 | 状态 |
|------|------|------|
| bootstrap/entry | v5/bootstrap/entry.js | 完成：Boot 启动、模块注册、事件总线 |
| bootstrap/loader | v5/bootstrap/loader.js | 完成：动态 import、缺失 stub 降级 |
| bootstrap/main-loop | v5/bootstrap/main-loop.js | 完成：RAF 主循环、帧率节流、暂停/恢复 |
| core/state | v5/core/state/index.js | 完成：全局状态 get/set 单一数据源 |
| core/save | v5/core/save/index.js | 完成：localStorage 存档 + v4 迁移 |
| core/world | v5/core/world/index.js | 完成：等距地图生成 + 漫游 + 地牢楼层 + 掉宝 |
| core/world/dungeon.js | v5/core/world/dungeon.js | 完成：地牢房间生成器 |
| core/world/loot.js | v5/core/world/loot.js | 完成：掉宝系统 |
| core/world/iso-map.js | v5/core/world/iso-map.js | 完成：等距地图算法 |
| core/render | v5/core/render/index.js | 完成：等距渲染管线、视差背景、相机、转场 |
| core/render/canvas-engine.js | v5/core/render/canvas-engine.js | 完成：Canvas 绘制助手 |
| core/input | v5/core/input/index.js | 完成：键盘/触摸映射为语义动作 |
| core/battle | v5/core/battle/index.js | 完成：答题驱动战斗 + M1 演知识实时战斗 |
| core/battle/engine.js | v5/core/battle/engine.js | 完成：战斗数值计算引擎 |
| core/battle/monsters.js | v5/core/battle/monsters.js | 完成：M1 三怪定义 + boss_ram |
| core/economy | v5/core/economy/index.js | 完成：灵石/道具/炼丹 |
| core/knowledge | v5/core/knowledge/index.js | 完成：六科课程图谱 + 题库路由 + 熟练度 |
| core/knowledge/curriculum.js | v5/core/knowledge/curriculum.js | 完成：学科课程结构 |
| core/knowledge/graph.js | v5/core/knowledge/graph.js | 完成：知识点图谱 |
| core/audio | v5/core/audio/index.js | 完成：Web Audio 合成器 |
| core/audio/synth.js | v5/core/audio/synth.js | 完成：音频合成底层 |
| core/effects | v5/core/effects/index.js | 完成：粒子/震动/闪白/combo/飘字 |
| core/effects/feedback.js | v5/core/effects/feedback.js | 完成：音游式反馈图元 |
| ui | v5/ui/index.js | 完成：玻璃拟态面板/卡片/HUD/Toast |
| ui/components/ | glass-panel.js, card.js, hud.js | 完成 |

### 3.2 场馆 MVP 原型（v5/venues/）

| 文件 | 场馆 | 玩法 |
|------|------|------|
| v5/venues/alchemy-lab.html | 丹鼎峰(化学) | 炼丹方程式配平（拖拽元素卡片） |
| v5/venues/math-tower.html | 推衍宫(数学) | 塔防 + 直线函数轨迹拦截 |
| v5/venues/geo-explore.html | 山河阁(地理) | 世界迷雾探索 + 地理选择题 |
| v5/venues/literary-hall.html | 文渊阁(语文) | 文言实词符文拼写 |
| v5/venues/word-arena.html | 译灵堂(英语) | 英语词汇对战 |

### 3.3 地牢 Demo（v5/soul-knight-demo.html）—— 核心可玩 Demo

Soul Knight 式实时地牢引擎。功能清单：
- 房间栅格布局（GAP=1，水平主干道 [0,1]->[1,1]->[2,1]->[3,1]）
- Cardinal 邻接房间门系统（Manhattan 距离=1，单扇门穿透 1 格墙）
- 门禁机制：进战斗房自动关门、清完怪自动开门
- 摄像机：死区（18% 屏宽）+ 平滑追赶 + 房间边界 clamp + 切房 0.35s 缓动
- 动态 CELL 尺寸（房间填满屏幕 75-85%）
- 自动索敌：K 近战 180弧 auto-target / J 远程 60锥追踪弹道 / 锁定高亮圈
- 冲刺/闪避（Shift 键，3 格冲刺 + 0.35s 无敌帧）
- 4 种敌人：basic（巡逻）、charger（冲刺）、shooter（保持距离+弹道）、boss（HP500+弹幕）
- 粒子特效 + 飘字伤害 + HP 条
- 血瓶拾取
- 多楼层推进（N 键下一层）
- 开始/死亡/通关画面

### 3.4 已有 HTML 页面

| 文件 | 用途 |
|------|------|
| v5/index.html | v5 框架主页面（等距世界 + 11 模块装配） |
| v5/m1-demo.html | M1 反震犀牛实测页（含结算答题面板） |
| v5/soul-knight-demo.html | 核心地牢 Demo（Soul Knight 式） |

### 3.5 测试套件

| 文件 | 说明 | 状态 |
|------|------|------|
| v5/tests/smoke.js | 冒烟：79 项 | 全绿 |
| v5/tests/integration.cjs | 集成闭环 | 全绿 |
| v5/tests/battle-m1.test.js | M1 战斗 12 项 | 全绿 |
| v5/tests/render-canvas-check.mjs | 渲染验证 | 全绿 |
| v5/tests/knowledge.test.mjs | 知识图谱 15 项 | 1 个已知夹具失败（physics-bank 在 vm 环境不加载，浏览器正常） |

---

## 4. 如何运行

服务器必须跑在仓库根：
  cd E:\work\wendao\wendao-main
  python -m http.server 8091

浏览器打开：
  主框架：http://localhost:8091/v5/index.html
  M1 战斗实测：http://localhost:8091/v5/m1-demo.html
  Soul Knight 地牢：http://localhost:8091/v5/soul-knight-demo.html
  丹鼎峰：http://localhost:8091/v5/venues/alchemy-lab.html
  推衍宫：http://localhost:8091/v5/venues/math-tower.html
  山河阁：http://localhost:8091/v5/venues/geo-explore.html
  文渊阁：http://localhost:8091/v5/venues/literary-hall.html
  译灵堂：http://localhost:8091/v5/venues/word-arena.html

注意：服务器必须跑在仓库根（不是 v5/ 里），题库路径用绝对 /src/data/... 才能访问。

---

## 5. 蓝图（完整版在 v5/V5_BLUEPRINT.md）

### 5.1 核心范式：三层分离

| 层 | 时机 | 内容 |
|---|---|---|
| 战斗层（学） | 进行中 | 怪招式=知识点的物理/逻辑定律，玩家实时应对 |
| 检验层（考） | 战后/破绽后 | 结算弹题，验证是否真懂（答题） |
| 成长层（得） | 结算后 | 熟练度/修为/功法/秘境推进 |

### 5.2 架构：Hub-and-Spoke 多场馆融合

修仙学院（等距开放世界）<- 统一修为/熟练度/存档
  |- 雷霆殿(物理) -> 肉鸽地牢战斗（即时操作）
  |- 丹鼎峰(化学) -> 炼金实验室（合成/配方/卡牌）
  |- 推衍宫(数学) -> 塔防谜题塔（轨迹/数列/概率）
  |- 山河阁(地理) -> 探索建造沙盒（地图/气候/资源）
  |- 文渊阁(语文) -> 文字冒险馆（文言翻译/阅读理解）
  |- 译灵堂(英语) -> 词汇竞技场（单词对战/语法拼图）

### 5.3 分步实施（当前进度）

| 阶段 | 内容 | 状态 |
|------|------|------|
| S0 | 11 模块框架 + 等距世界 + 移动 + 渲染 | 完成 |
| S1a | 雷霆殿(物理) M1 三怪演知识战斗 | 完成 |
| S1b | 地牢房间生成器 + 掉宝系统 + Boss + Soul Knight Demo | 完成 |
| S2 | 五场馆 MVP 原型（5 个独立 HTML） | 完成 |
| S3 | 126 知识点->bestiary + 题库合并 + 熟练度 | 下一步 |
| S4 | 美术/打磨 + 数值平衡 | 未来 |

---

## 6. 严重教训（务必遵守）

### 6.1 代码生成
- 绝对不要用 write 工具写代码文件：会注入随机垃圾 token（bootiliacari、soprattutto 等已验证多次）
- 绝对不要用 PowerShell Add-Content 追加代码：会静默失败（已验证 2 次，Part 3 丢失导致空白页）
- 正确做法：用 node.js fs.writeFileSync 一次性原子写入完整文件
- 写完立即验证：node --check（JS 文件）或 CDP 浏览器检查（HTML 文件）

### 6.2 编辑文件
- edit 前先 read 当前文件
- edit 后立即验证（node --check 或跑测试）
- edit 工具偶尔也会污染文件（行尾垃圾 token），不可盲目信任

### 6.3 算法验证
- 算法级改动：先跑 node 隔离测试（30 次随机生成验证全连通），测试绿了再写入 HTML
- 不要"改了就提交、浏览器验证跟不上"

### 6.4 参照游戏
- 元气骑士（Soul Knight）是 v5 地牢引擎的权威参照
- 必须先吃透机制再动手写代码，不能凭印象"猜"
- 已确认的核心机制：房间锁定摄像机、门禁系统、独立竞技场、进房触战

### 6.5 工具调用
- 同样命令重试超 3 次必须换策略（避免刷屏卡死）
- web_search 工具不可用时用 PowerShell Invoke-WebRequest 替代

### 6.6 git 操作
- git push 需要 -c http.sslBackend=openssl
- 本机 .git/config 已持久化此设置
- GitHub Token：<GitHub Token - ask user kuight>

---

## 7. 关键文件指纹（新 agent 优先读这些）

| 优先级 | 文件 | 说明 |
|--------|------|------|
| P0 | v5/soul-knight-demo.html | 核心地牢 Demo（Soul Knight 式，16033 字节） |
| P0 | v5/V5_BLUEPRINT.md | v5 完整蓝图 |
| P0 | v5/INTERFACES.md | 模块接口契约 |
| P1 | v5/core/world/dungeon.js | 房间生成器（node 测试 30/30 全连通） |
| P1 | v5/core/world/loot.js | 掉宝系统 |
| P1 | v5/core/battle/index.js | 战斗引擎 |
| P1 | v5/core/battle/monsters.js | 怪物定义 |
| P2 | v5/venues/*.html | 五场馆 MVP 原型 |
| P2 | v5/tests/*.js | 测试套件 |

---

## 8. 云端 agent 接入须知

1. 先读本文档全文，再动手。
2. 整个仓库在 GitHub 上，git clone 即可开始。
3. 服务器必须跑在仓库根（python -m http.server 8091），题库路径用绝对 /src/data/...。
4. v5/index.html 是主框架入口；soul-knight-demo.html 是最可玩的地牢 Demo。
5. 涉及战斗数值平衡 / 删主体内容 / 改存档 schema 前，必须停下问用户。
6. 本文档第 6 节"严重教训"部分请逐条遵守，否则会反复踩坑。

---

## 9. 一句话总结给新 agent

v5 已有完整的 11 模块框架 + 等距世界 + M1 知识战斗 + Soul Knight 式地牢 Demo + 5 个场馆原型。
核心地牢 Demo（soul-knight-demo.html）可独立运行：WASD 走位、K 近战、J 远程追踪弹道、Shift 闪避、
4 种敌人 + Boss、门禁系统、自动索敌、血瓶掉落、多楼层。下一步：S3 合并云端 17 批约 10,890 题进
knowledge 路由 + 126 知识点 bestiary 设计。引擎框架已搭好，内容层待填充。