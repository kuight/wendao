# 《问道修仙学院》v5 项目交接文档（云端版）

> 生成时间：2026-08-25
> 交接对象：全新 AI 模型（零记忆、零上下文）
> 目标：读完本文档就能接手，不重走弯路。

---

## 0. 项目一句话

纯前端修仙学习游戏。v5 = 元气骑士(Soul Knight)式 Roguelike 地牢 × 六科知识点深度融合。

---

## 1. 物理位置

- 仓库：https://github.com/kuight/wendao （master 分支）
- 本地根：E:\work\wendao\wendao-main
- v5 代码：E:\work\wendao\wendao-main\v5\
- 工作规划目录：E:\work\问道-蓝图规划[待办]\
- GitHub Token：<TOKEN请向用户kuight索取>

---

## 2. 如何运行

```
cd E:\work\wendao\wendao-main
python -m http.server 8091
```

---

## 3. 当前代码基线（git master HEAD = 最新）

### 3.1 v5 模块框架（v5/ 目录）—— 11 模块，全部完成

| 模块 | 文件 | 状态 |
|------|------|------|
| bootstrap | entry.js, loader.js, main-loop.js | ✅ |
| core/state | index.js | ✅ |
| core/save | index.js | ✅ |
| core/world | index.js, dungeon.js, loot.js, iso-map.js | ✅ |
| core/render | index.js, canvas-engine.js | ✅ |
| core/input | index.js | ✅ |
| core/battle | index.js, engine.js, monsters.js | ✅ |
| core/economy | index.js | ✅ |
| core/knowledge | index.js, curriculum.js, graph.js | ✅ |
| core/audio | index.js, synth.js | ✅ |
| core/effects | index.js, feedback.js | ✅ |
| ui | index.js + components/ | ✅ |

### 3.2 可运行的页面

| 文件 | 用途 | 状态 |
|------|------|------|
| v5/index.html | 主框架（等距世界 + 11模块装配） | ✅ CDP验证通过 |
| v5/m1-demo.html | M1反震犀牛实测（含结算答题面板） | ✅ |
| v5/soul-knight-demo.html | 核心地牢Demo（16KB，minified） | ✅ 可玩，但minified难编辑 |
| v5/gravity-room.html | 重力房间Demo（超重与失重） | ✅ CDP验证通过 |
| v5/arrow-tower.html | 箭塔房Demo（匀变速弹道预测） | ✅ |
| v5/venues/alchemy-lab.html | 丹鼎峰·化学 | ✅ |
| v5/venues/math-tower.html | 推衍宫·数学 | ✅ |
| v5/venues/geo-explore.html | 山河阁·地理 | ✅ |
| v5/venues/literary-hall.html | 文渊阁·语文 | ✅ |
| v5/venues/word-arena.html | 译灵堂·英语 | ✅ |

### 3.3 测试套件

| 文件 | 状态 |
|------|------|
| smoke.js (79项) | ✅ 全绿 |
| integration.cjs | ✅ 全绿 |
| battle-m1.test.js (12项) | ✅ 全绿 |
| render-canvas-check.mjs | ✅ 全绿 |
| knowledge.test.mjs (15项) | ⚠️ 1个已知夹具失败（physics-bank在vm环境不加载，浏览器正常） |

---

## 4. 蓝图（详细版在 v5/V5_BLUEPRINT.md）

### 核心架构：Hub-and-Spoke 多场馆融合

```
修仙学院（等距开放世界）← 统一修为/熟练度/存档
  ├─ 雷霆殿·物理 → 肉鸽地牢战斗
  ├─ 丹鼎峰·化学 → 炼金实验室
  ├─ 推衍宫·数学 → 塔防谜题塔
  ├─ 山河阁·地理 → 探索建造沙盒
  ├─ 文渊阁·语文 → 文字冒险馆
  └─ 译灵堂·英语 → 词汇竞技场
```

### 分步实施（当前进度）

| 阶段 | 内容 | 状态 |
|------|------|------|
| S0 | 11模块框架 + 等距世界 + 移动 + 渲染 | ✅ |
| S1a | M1三怪演知识战斗 | ✅ |
| S1b | 地牢生成器 + 掉宝 + Soul Knight Demo | ✅ |
| S2 | 五场馆MVP原型 | ✅ |
| S3 | 126知识点bestiary + 题库合并 | ⏳ 下一步 |
| S4 | 美术/打磨 | ⏳ 未来 |

---

## 5. 严重教训（务必遵守）

### 5.1 代码生成
- ❌ 绝对不要用 write 工具写代码：会注入随机垃圾token
- ❌ 绝对不要用 PowerShell Add-Content 追加代码：会静默失败（已验证2次）
- ✅ 用 node.js fs.writeFileSync 一次性原子写入完整文件
- ✅ 写完立即验证：node --check（JS）或 CDP 浏览器检查（HTML）

### 5.2 编辑文件
- edit 前先 read 当前文件
- edit 后立即验证（node --check 或跑测试）
- edit 工具偶尔也会污染文件（行尾垃圾 token）

### 5.3 用户偏好（关键！）
- ❌ 不要写设计叙事文档——"你写叙事的意义在哪？？我又不是让你写小说！"
- ✅ 交付物是能跑的游戏代码/可交互Demo
- ✅ 把知识点融入可玩的游戏机制，让玩家通过操作感受概念
- ✅ 先跑通、再扩展——每一个Demo必须CDP验证通过再提交
- 质量 > 数量。不要急。深度思考后再动手。

### 5.4 其他
- git push 需要 -c http.sslBackend=openssl（已持久化到.git/config）
- 服务器必须跑仓库根（python -m http.server 8091）
- GitHub 秘密扫描会拦截含token的文件推送——勿在文档中写token
- 同样命令重试超3次必须换策略

---

## 6. 下一步建议

1. 把 soul-knight-demo.html 的minified代码拆成可维护的模块
2. 继续设计更多知识点的战斗房间（按物理→化学→数学顺序）
3. 每个知识房间先做独立Demo验证玩法，再集成到地牢引擎
4. 合并云端17批约10,890题进 knowledge 路由
5. 铺8种演法引擎 + 秘境分层/随机房间

---

## 7. 关键文件指纹（优先读）

| 优先级 | 文件 | 说明 |
|--------|------|------|
| P0 | v5/soul-knight-demo.html | 核心地牢Demo（16033字节，minified） |
| P0 | v5/V5_BLUEPRINT.md | v5蓝图 |
| P0 | v5/INTERFACES.md | 模块接口契约 |
| P0 | v5/gravity-room.html | 重力房间Demo（可参考的知识战斗模板） |
| P0 | v5/arrow-tower.html | 箭塔房Demo |
| P1 | v5/core/world/dungeon.js | 房间生成器（node测试30/30全连通） |
| P1 | v5/core/world/loot.js | 掉宝系统 |
| P1 | v5/core/battle/index.js | 战斗引擎 |
| P1 | v5/core/battle/monsters.js | 怪物定义 |
| P2 | v5/venues/*.html | 五场馆MVP原型 |
| P2 | v5/tests/*.js | 测试套件 |
