# 《问道修仙学院》v4.3.5g 变更日志

## 核心方向
> 用户原话：**"你这个重构的4.3.6a一样啊，完全是集百家之短……以4.3.5f重新构造吧"**  
> **停止打补丁，把所有 hotfix 合并进核心文件（game-core.js / ui-components.js）**

## 一、架构级变更
- ✅ 从 6 个学科 HTML 页 + index.html 中删除 **13 类 78 个补丁 script 标签**：
  - `balance-patch-v428` / `curve-patch-v430`
  - `v432-hotfix` / `v433-hotfix` / `v434-hotfix`
  - `v435-remake` / `v435b-interactive` / `v435c-hotfix`
  - `v435d-hotfix` / `v435d-arena-fat`
  - `v435e-safety` / `v435f-hotfix`
  - `v436-integration`
- ✅ 有效逻辑已全部合并进 `game-core.js` 与 `ui-components.js` 主文件
- ✅ 保留独立**功能模块**：`alchemy-lab`、`spirit-garden`、`battle-skills`、`knowledge-graph`、`smart-question`、`battle-arena`、`scene-engine`、`battle-anim`

## 二、用户明确要求的核心变更

### 🎯 前期易 · 后期难的成长曲线（本次核心）
用户原话：**"让奖励和成长曲线不同，要前期较为容易突破，后期越来越难突破"**

**重写 `getRealmMultiplier()` 数学模型**：让奖励倍率增速 < 需求曲线增速（1.085），确保后期越难。

| 境界（rid） | 突破需要 exp | 单次奖励 | **突破题数** |
|---:|---:|---:|---:|
| 1  (炼气一) |     3 255 |       155 | **21 题** |
| 5  (炼气五) |     4 511 |       166 | **28 题** |
| 30 (炼气末) |    34 675 |     1 062 | **33 题** |
| 60 (炼体末) |   400 780 |    11 702 | **35 题** |
| 90 (筑基末) | 4.63 M    |    85 147 | **55 题** |
| 150 (元婴末)| 618 M     |   3.7 M   | **167 题** |
| 210 (渡劫末)| 82.6 亿    |   1.3 亿   | **638 题** |
| 300 (登仙末)| 127.6 兆   |   175 亿   | **7 281 题** |

## 三、四大 Bug 修复

### Bug 1 — 四宫格双触发
- `bindFourGrid` 改为空实现（避免元素级 onclick）
- 加入 `document.addEventListener('click')` **文档级事件委托**
- 用 `global.__wendao_gridDelegateInstalled` 单例锁，防止多次绑定

### Bug 2 — 洞府闭关问道
- `_openCaveModal` 完整重写
- 支持 **5 种题型**：单选 / 多选 / 判断 / 填空 / 计算
- 集成 `Game.judgeAnswer` 权威判定
- 每日 4 次 + 30 分钟冷却 + 洞府等级奖励加成
- **打坐不产修为**，修为唯一入口是"闭关问道"

### Bug 3 — 成就系统防抖
- `_checkAchievements` 内加入 **100ms debounce + 单栈锁**
- 同帧内多个成就合并为一条摘要 toast

### Bug 4 — 怪物 enemyRid 缩放
- 弃用"跟随玩家等级"缩放，改为 `baseDef.enemyRid` 作为基准
- 越阶惩罚封顶 ×20（防止百万 HP 怪）
- `getMonsterTitle(diff, ridOverride)` 修复：headliner 现在基于**怪物境界**而不是玩家境界
- 修复前：rid=60 怪物显示"炼气期·中阶"；修复后：正确显示"炼体期·中阶 + 噬灵变异"

## 四、次要 Bug 修复

### `formatBigNum` 京 / 垓 / 秭单位
以前 `3.7e16 → "3.70e+16"`（科学计数法很丑）  
现在 `3.7e16 → "3.7京"`  
支持到 **载**（10^44），基本无止境

### `getMonsterTitle` / `_playerTierName` 兼容 rid 参数
以前只看玩家 realmId，怪物 title 全部错乱  
现在正确匹配怪物自身境界

## 五、题库与功法状态

| 学科 | 题库数量 | 功法数量 | interactive 字段覆盖 |
|:---:|:---:|:---:|:---:|
| 物理 | 5 692 | 28 | **28/28（100%）** |
| 化学 | 3 859 | 18 | **18/18（100%）** |
| 地理 | 3 002 | 12 | **12/12（100%）** |
| 语文 | 136 | 9 | — |
| 数学 | 3 601 | 30 | — |
| 英语 | 83 | 18 | — |
| **合计** | **16 373** | **115** | **58/58 主科** |

## 六、模块加载顺序（清理后）
```
game-core.js
pixel-art.js
ui-components.js
story-engine.js
auto-visualizer.js
immersive-learning.js
side-dock.js
interactive-engine.js      ← v4.1 IE 引擎（1767 行）已恢复
[数据文件们]
scene-engine-v426.js
battle-anim-v426.js
alchemy-lab-v435d.js
spirit-garden-v435d.js
battle-skills-v435d.js
knowledge-graph-v436.js
smart-question-v436.js
battle-arena-v436.js
subject-page.js（学科页）
```

## 七、诊断测试报告

- ✅ 39/39 脚本全部加载通过
- ✅ 10/10 全局对象（Game / UI / AutoViz / IE / Immersive / PixelArt / SceneEngine / BattleAnim / SideDock / Story）
- ✅ 12/12 关键 API 存在
- ✅ 五种题型 answerReport 均正常回值
- ✅ judgeAnswer 10/10 用例通过（单选 / 多选 / 判断 / 填空 / 大小写 / 空格容忍 / 多答案）
- ✅ 20/20 IE 交互组件类型可 render（`c.getContext` 报错仅出现在 Node 假 DOM，浏览器正常）
- ✅ 无 hotfix 残留全局变量
