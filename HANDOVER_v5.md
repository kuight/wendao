# 《问道修仙学院》v5 项目交接文档

> 生成时间：2026-08-21（本次更新 2026-08-23）
> 交接对象：一个完全没有本会话记忆的 AI 助手
> 目标：让新助手拿到本文档后，能直接从当前断点继续推进 v5 项目，不重复走弯路。

---

# v5 完整开发蓝图（2026-08-23 定稿）

> 由对全仓库勘察（11 模块源码 + 测试 + 云端遗产）后的综合规划。当前基线健康：smoke 79、integration 闭环、battle-m1 12、render-canvas 全绿。移动与 M1 战斗实测 bug 已修复（见下）。

## 1. 项目一句话

纯前端修仙学习游戏：等距开放世界漫游 + 知识驱动战斗（战斗=体验知识点）+ 结算答题检验 + 成长熟练度，六科（物/化/地/数/文/英）高中考纲。

## 2. 技术架构（现状已建）

| 层 | 模块 | 职责 | 状态 |
|---|---|---|---|
| 引导 | `bootstrap/entry.js` | boot 对象、事件总线、启动序列 | 完成 |
| 引导 | `bootstrap/loader.js` | 11 模块动态 import + 缺失 stub 降级 | 完成 |
| 引导 | `bootstrap/main-loop.js` | RAF 主循环（节流/暂停/错误隔离） | 完成 |
| 核心 | `core/state` | 全局状态单一数据源 get/set | 完成 |
| 核心 | `core/save` | localStorage 存档 + v4 迁移 + 导出 | 完成 |
| 核心 | `core/world` | 等距地图生成 + 漫游 + 区域/NPC/事件 | 完成（移动已通） |
| 核心 | `core/render` | 视差背景 + 等距瓦片 + 相机 + 转场 + 粒子/飘字 | 完成（渲染已修） |
| 核心 | `core/input` | 键盘/触摸映射为语义动作 | 完成（含战斗键） |
| 核心 | `core/battle` | 答题驱动 + M1 演知识实时战斗 | 完成（实测 bug 已修） |
| 核心 | `core/economy` | 灵石/道具/炼丹 | 完成 |
| 核心 | `core/knowledge` | 六科课程图谱 + 题库路由 + 熟练度 | 完成 |
| 核心 | `core/audio` | Web Audio 合成器（零素材） | 完成 |
| 核心 | `core/effects` | 粒子/震动/闪白/combo/飘字（音游式） | 完成 |
| UI | `ui/` | 玻璃拟态面板 + 桌游卡片 + HUD + toast/屏幕 | 完成 |
| 数据 | `content/subjects/*.json` | 六科章节/知识点元数据 | 完成 |
| 测试 | `tests/*` | 冒烟/集成/渲染/M1 战斗/知识图谱 | 全部通过 |

## 3. 功能地图（核心范式：三层分离）

**战斗层（学）**：怪物招式=知识点的物理/逻辑定律，玩家应对=运用知识点（对抗即理解）。
- 反震犀牛=牛顿第三定律（撞击→被弹回→硬抗破解→露破绽→出手）
- 幻影隼=匀变速直线运动（走位预判落点躲闪）
- 玄龟·钟摆=简谐振动（抓平衡点出手）

**检验层（考）**：破绽后结算，用题验证（答对=通关+熟练度，答错=标记回炉重打）。

**成长层（得）**：熟练度/六科修为/功法解锁/章节秘境推进。

## 4. 里程碑（蓝图推进顺序）

- ✅ **M0（本次）**：框架 + 11 模块 + 移动打通 + 渲染修复 + M1 三怪演知识战斗（实测 bug 已修）
- ⏭ **M1**：结算检验层铺开 + 熟练度/修为成长闭环（recordAnswer 已接，待UI化）
- ⏭ **M2**：八种演法战斗形式铺开 + 房间/关卡编排（含题目主题房间、传送门房、首领房）
- ⏭ **M3**：多阶段 BOSS + 六秘境世界观（凌云峰/青木林/镜心湖/仙坊镇/秘境洞府…）
- ⏭ **M4**：数据工程（合并 _cloud_legacy 题库 ~10,890 题 + 高一至高三补全）

## 5. 云端遗产合并要点（勘察结论）

- **题库**：`_cloud_legacy/qubanks-600`、`batch4-18`、`bank-v51`、`sp8` 共 **17 批约 10,890 题**，schema 统一 `{id,subject,chapter,difficulty,stem,options,answer,explain}`，可直接喂入 knowledge 路由。
- **portal**：`portal-v4` 是最新 JS 驱动的枢纽（44 条目/36 游戏），`portal-v3` 内嵌 5 个小游戏（rhythm-fantasy 等）。
- **小游戏**：约 38 个纯前端小游戏可作玩法/素材参考，无图片/音频素材（全 CSS/canvas 绘制）。
- **M1 节奏玩法参考**：`wendao-v5-rhythm-fantasy`（84KB 单文件 canvas 音游）可作"节奏抓时机"演法原型。

## 6. 下一步建议（按优先级）

1. **合并题库**：把 17 批云端题库转成 v5 knowledge 可消费的 JSON（复用/扩展 `content/subjects/*.json` + 题库路由），核题量、接答题闭环。
2. **结算检验 UI 化**：战斗胜利后弹"顿悟/验心"答题面板（ui.show + card 组件 + knowledge.getQuestion），接 recordAnswer 成长。
3. **八演法铺开**：把三怪原型扩展为八种演法（走位/节奏/格挡/道具/影响/选择/多段BOSS），铺房间与关卡。
4. **美术升级**：用云端 3D JSON 模型（pet-fox/sword/pill-bottle）作道具/怪图标，补角色立绘与场景。
5. **教程/世界观**：接云端 tutorials 的 .md 讲义与 .subs.json 对话，做任务剧情线。

## 7. 关键坑点（务必遵守）

- 写代码别混中文碎词（会语法错）；edit 前先 read；写完立即跑测试。
- git push 需 `-c http.sslBackend=openssl`（本机已持久化）。
- 双 canvas 冲突已修（render 复用 #cv）；battle/effects 依赖全局对象需先 import 底层文件。
- 服务器需跑仓库根（题库用绝对 /src/data/... 路径）。
- 改战斗平衡数值 / 存档 schema / 删主体内容前必须停下问用户。

---

## ⚡ 本次会话更新（2026-08-23，commit e20f148，已推 master）

**上文第 1 节的"双 canvas 断点"已全部解决**，现状态（本次新 agent 实测通过）：
- 渲染修复已在 c4f15b2 → 4d0d317 完成：canvas-engine 暴露 ctx、world 用 getter 暴露 map/npcs/events、render.draw=drawScene 别名、drawScene 参数归一化 + 相机 NaN 自愈、相机用 gridToScreen 等距坐标。地图从空白 → 正常。
- **玩家移动已打通（本次核心）**：`v5/core/world/index.js` 新增 `update(ctx)`，消费 input 方向键（WASD/方向键），0.13s 节流调 `moveTo(p.x+dx,p.y+dy)`，成功后 `boot.render.camera.set(p.x,p.y)` 跟随（camera.set 默认按网格坐标 gridToScreen 换算）；`main-loop step()` systems 数组加 `['world','update']`；`entry.js` 挂载 `input.attach()` 浏览器键盘监听。移动真机可用。
- **M1 实时演武战斗系统**已实现（V5_BLUEPRINT v0.5「知识驱动战斗」范式）：battle 重做为实时演武（反震犀牛/破绽/硬抗格挡/出手），新增 `v5/core/battle/monsters.js`、`v5/m1-demo.html`、`v5/tests/battle-m1.test.js`；input 增补 guard/strike/brace 操作键。
- `_learn_toy/`、`toy_game.html`、`v5_shot.png` 为本次调研节奏术/知识驱动战斗时的草稿，已进 `.gitignore` 忽略（不进 git，本地保留）。

**M1 实测 bug 修复（commit 0d173af，已推 master，2026-08-23）**：用户在 `v5/m1-demo.html` 实测报 4 个 bug（牛撞人消失 / 持续扣血按X无效 / X-K-Z 无反应 / 隔空撞人）。根因不在页面装配层，而在战斗引擎判定逻辑：**撞击结算的 clamp 误用 `room.width-2` 同时限制 x/y**，导致玩家 y 被推出可走带（8）到 14 底墙而出屏；且 strike 按键在 stance 被 `playerAct('strike')` 消费一次后 `resolveAttack` 读不到（双消费）。修复：①`battle/index.js` clamp 拆成 `clampX(mx)/clampY(my)` 分轴，玩家被撞后夹紧在可走带内（永不出屏）；②strike 在 stance 直接走 `resolveAttack` 不再双消费；③`world/index.js` spawnBattleRoom 玩家出生改居中（给被撞下弹留空间）；④`m1-demo.html` drawRoom 相机自适应铺满视口 + RAF 异常改 console.error 输出（不再静默吞掉）。验证：battle-m1 12/12、smoke 79、integration 全绿，端到端模拟（含相机数学）玩家永不出屏、可硬抗露破绽、K 出手有效。

**当前测试全部通过**：
- `node v5/tests/smoke.js` → 79 项
- `node v5/tests/integration.cjs` → 闭环全绿（含移动）
- `node v5/tests/render-canvas-check.mjs` → isStubDraw=false、玩家在位、drawTile>0
- `node v5/tests/battle-m1.test.js` → 12 项

**下一步建议**：按原第 8 节 ③ 继续——把 `_cloud_legacy/`（40 小游戏 + 16 批题库 + portal）合并进 v5 开放世界；六科题库按高一到高三分层；UI 美术升级。

**注意（重要教训，务必遵守）**：写代码别混中文碎词（会语法错）；edit 前先 read；写完立即跑测试；git push 需 `-c http.sslBackend=openssl`（本机已持久化到 .git/config，直接 push 即可）。

---

## 0. 一句话项目定位

把纯前端刷题网页《问道修仙学院》（v4.4.0，HTML+CSS+Vanilla JS）重做成**大型开放世界感的二次元修仙学习游戏**：世界漫游 + 战斗答题 + 小游戏融合 + 海量题库，下至高一上至高考都能用。

---

## 1. 交接人当前在做什么 / 卡在哪里

> **已解决**（2026-08-23）：下文"双 canvas 挡住地图"的断点已由 c4f15b2→4d0d317（渲染修复）解决，且玩家移动已打通（e20f148）。当前状态见文首"⚡ 本次会话更新"一节。下文为历史断点记录，仅供参考。

**历史断点（已修复）**：v5 新框架（`v5/` 目录，11 个模块）逻辑全部跑通，但浏览器里世界地图画出来了却被另一个空白 canvas 挡住。

**具体断点（新助手从这里接着修）**：
- `v5/index.html` 里同时有**两个 canvas 绘制逻辑**：
  1. `<canvas id="cv">` + `cv.getContext('2d')`（demo 脚本画粒子/网格）
  2. `Boot.start({ container: stage })` → `render.init()` 会**新建一个 canvas 追加到 stage**（`v5/core/render/index.js` 第 48 行）
- 结果：stage 里两个 canvas 重叠，**真实世界地图画在新创建的那个 canvas 上，被 #cv 或布局挡住，用户看不到**。
- 修复方向：让渲染只用一个 canvas——**要么删掉 index.html 里的 #cv 让 render 用自己的 canvas，要么让 render 复用 #cv**（改 `v5/core/render/index.js` 的 init 检测已有 canvas 复用，或改 `v5/index.html` 传 #cv 进去）。

**注意**：交接前我尝试改 render 的 init 复用 #cv，但改错了（canvas 0、loaded 0，页面崩了），已 git 回退到能渲染的原始版本。**不要再乱改 render，先想清楚双 canvas 的干净解法。**

---

## 2. 项目物理位置

- 仓库根目录：`E:\work\wendao\wendao-main`（本地 git 仓库，已配好 origin 远端）
- 我的 v5 新框架：`E:\work\wendao\wendao-main\v5\`（11 个模块 + 蓝图 + 接口契约 + 测试）
- 云端 agent 的遗产（已解压）：`E:\work\wendao\wendao-main\_cloud_legacy\`（90+ 目录，含 40 个小游戏 + 16 批题库 + portal 枢纽）

---

## 3. 关键指纹

- 本地 git HEAD：`9ba0149`（v5 集成修复已提交推送）
- 云端 main 分支 HEAD：`4e86b2d`（云端那套 v5 scaffold，被用户要求推倒，我起的是本地全新 v5）
- v5 框架冒烟测试：`node v5/tests/smoke.js` → 79 项通过
- v5 集成测试：`node v5/tests/integration.cjs` → 启动→世界→移动→战斗→答题→结算→经济 闭环全绿

---

## 4. 项目结构（v5/ 新框架）

```
v5/
├── bootstrap/       入口引导、loader、主循环
│   ├── entry.js      boot 对象、模块注册表、事件总线、启动序列
│   ├── loader.js     动态加载 11 个模块（缺失自动 stub 降级）
│   └── main-loop.js  requestAnimationFrame 主循环（节流、暂停/恢复）
├── core/            核心系统
│   ├── state/       全局状态机（get/set 单一数据源）
│   ├── save/        存档（v4 wendao_save_v2 迁移）
│   ├── world/       等距地图生成（确定性伪随机、漫游、碰撞）
│   ├── render/      Canvas 渲染管线（视差背景、相机、瓦片、转场）
│   ├── input/       统一输入（键盘/触摸/鼠标）
│   ├── battle/      战斗（答题驱动：答对出招、答错受击、combo）
│   ├── economy/     资源/道具/炼丹
│   ├── knowledge/   知识图谱（6科/44章/126知识点）
│   ├── audio/       Web Audio 合成器（零素材发声）
│   └── effects/     音游式反馈（hit stop/判定环/粒子/震动/飘字）
├── ui/              UI 组件（玻璃拟态面板、桌游卡片、HUD、主题 CSS）
├── content/         内容数据（六科学科 json、章节/知识点）
├── assets/          素材目录
└── tests/           冒烟测试 + 集成测试
```

**模块接口契约**：见 `v5/INTERFACES.md`（新助手写代码前必读，所有模块通过 boot 命名空间通信）。

**设计蓝图**：见 `v5/V5_BLUEPRINT.md`（视觉方向：等距+视差+玻璃拟态+音游反馈）。

---

## 5. 云端 agent 的遗产（很值钱，别丢）

已解压到 `_cloud_legacy/`，包含：

| 类型 | 内容 | 目录 |
|---|---|---|
| 小游戏 | 2048、炼药、围棋、五子棋、阵棋、宠物竞技场、塔防、狼人杀、音游、恋爱VN、RPG、模拟考试2027、推箱子、迷宫 等 40+ 个 | `wendao-v5-*.tgz`/目录 |
| 题库 | 16 批题库批次（batch4~18）+ 600 题集 + bank-v51 | `wendao-v5-qubanks-*` |
| 开放世界 | 传送门枢纽 v2/v3/v4 | `wendao-v5-portal-*` |
| 教程/模板 | 教程卷 1-9 + 教学模板 | `wendao-v5-tutorials-*` |
| 蓝图/自检 | v5 蓝图 + 自检报告 | `_root_extras/wendao-v5-blueprint*`、`selfcheck.md` |

**用法**：小游戏目录里都有 index.html，**双击就能玩**（普通 script，不用服务器）。

---

## 6. 如何实测（给用户的操作指引）

**测我的 v5 框架（世界漫游+战斗，需起服务器）：**
```
cd /d E:\work\wendao\wendao-main
python -m http.server 8091
```
浏览器开：`http://localhost:8091/v5/index.html`
> 注意：服务器必须跑在仓库根（不是 v5/ 里），题库路径才能用绝对 `/src/data/...` 访问到。

**测云端小游戏（零配置，双击即玩）：**
```
E:\work\wendao\wendao-main\_cloud_legacy\wendao-v5-2048\index.html
E:\work\wendao\wendao-main\_cloud_legacy\wendao-v5-rhythm-fantasy\index.html
```

---

## 7. 授权边界（用户 kuight 的明确指示）

用户可以自主做（不用问）：UI/UX 微调、顶部菜单/设置面板、删外部 beacon/telemetry、文件名清理、打 tag、重新打包 zip、写架构文档。
必须停下问用户（重大决策）：改存档 schema、删主体游戏内容、战斗平衡数值、删 src 下非 .md 文件、PR diff>200 行涉及题目/存档。
备份铁律：每次推进 main 或覆盖 release 前，必须先打 annotated tag（命名 vX.Y-fixed-pre-phaseN），push 失败则停。
Token：凭据由用户主动粘贴，不落盘。子 agent 拿 token 的位置 `/tmp/$SEED/tok`，用完 shred -u 清除。

---

## 8. 下一步建议（按优先级）

> ①双canvas、②实机验证移动 均已在 e20f148 完成，降级为历史。当前建议从 ③ 继续：

- **③ 合并云端遗产**：把 `_cloud_legacy/` 里 40 个小游戏 + 题库并进 v5 开放世界（本次核心方向）。
- **④ 题库扩充**：六科按高一到高三分层。
- **⑤ 视觉美术升级**：角色立绘/场景重画或程序化生成。

---

## 9. 重要坑点（新助手先读避免踩坑）

1. **双 canvas 冲突**是当前最大问题（见第 1 节）。
2. **题库 404**：服务器要跑仓库根，`/src/data/...` 绝对路径才有效（已修）。
3. **battle/effects 依赖全局对象**：battle 用 `globalThis.BattleEngine`、effects 用 `globalThis.BattleFeedback`，**必须在 import 时先加载对应底层文件**（engine.js/feedback.js），否则报 undefined（已修）。
4. **node 测试 mock 环境**：集成测试要 mock `document/window/localStorage/getComputedStyle` 等浏览器 API，否则视觉函数（feedback.js）会抛错降级为 stub（已补 mock）。
5. **写代码时别急着塞中文**：我多次在代码里混入中文碎词导致语法错误，写纯代码。
6. **环境提醒噪音**：每次工具调用后环境会自动追加一段 TaskUpdate 提醒，不要反复去回应它，直接继续干活。

---

## 10. 一句话总结

**v5 框架逻辑全通（11 模块 loaded、题库 6511 题、战斗闭环跑通），但浏览器里世界地图被双 canvas 挡住看不到。修好双 canvas 冲突，然后实测、合并云端 40 个小游戏和题库，就成大成 v5。** 交接人已把断点、位置、授权边界、坑点全部写清，新助手可从"修双 canvas"这个精确点直接接上。