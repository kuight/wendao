# 🗒️ v4.3.5j 对接文档（给下一次失忆的 AI）

> 用户：福建莆田四中高二理科生（物化地）· 本项目名"问道·物化地"
> 本轮版本号：**v4.3.5i → v4.3.5j**
> 本轮解决的问题：用户反馈的 5 个问题 + 补充音效系统

---

## 一、本轮 5 个问题 + 修复策略

| # | 问题 | 修复位置 | 关键手法 |
|---|---|---|---|
| ① | 交互演道 canvas 溢出、无法向右滑动 | `assets/v435j-fix.css` | canvas `max-width:100%` 自适应 + 外壳 `overflow-x:auto` + 窄屏合并成单列 |
| ② | 主页纯色背景太丑 + 字看不清 | `assets/v435j-fix.css` | body 加 `splash_v435.jpg` + 蒙层；标题/文字加 `text-shadow`；八宫格加毛玻璃 |
| ③ | 语文/数学/英语没有专属场景背景 | 生图 3 张 + 改 `v435d-scene-bg.css` + `v435j-fix.css` | 新生成 `sect_chinese/math/english.jpg`；替换 scene-bg 中原来共用 `scroll_hall.png` 的映射 |
| ④ | 回山门弹一堆已完成的成就 & 发奖 | `assets/v435j-fix.js` | 移除单次锁的 `_v435gSilentAudited`；每次 `_checkAchievements` **前置**跑一次"未 done 项静默追认"，并同时打 `rewardGiven:true` 防止后续再发奖 |
| ⑤ | 妖兽数值按玩家算 & 太低 | `assets/v435j-fix.js` | 重写 `Game.scaleMonsterForRealm`：normal 妖 = 1.15× 玩家、hard = 1.85×、boss = 3.2×、legend = 5.0×；**优先用 `enemyRid` 而非玩家 rid** |
| ⑥ | 用户新增需求：音效 | `assets/v435j-fix.js` | 新增 `Sfx` 系统，接 pixabay CDN 免费音效；失败时用 WebAudio 合成音兜底；订阅 6 类游戏事件 |

---

## 二、本轮交付的所有文件

**放到 `assets/` 目录：**

1. **`assets/v435j-fix.css`**（新文件）
   - CSS 修复：问题 ①②③
   - 加载点：`<head>` 里，**放在 `v435d-scene-bg.css` 之后**
   - 引用：`<link rel="stylesheet" href="assets/v435j-fix.css">`

2. **`assets/v435j-fix.js`**（新文件）
   - JS 修复：问题 ④⑤⑥
   - 加载点：**所有其他 JS 之后**（在 `v435d-arena-fat.js` 后面）
   - 引用：`<script src="assets/v435j-fix.js"></script>`

3. **`assets/img/scenes/sect_chinese.jpg`**（新图片，178KB）
4. **`assets/img/scenes/sect_math.jpg`**（新图片，217KB）
5. **`assets/img/scenes/sect_english.jpg`**（新图片，198KB）

**修改的既有文件：**

6. **`index.html`** — 加入两处引用（见上文）
7. **`assets/v435d-scene-bg.css`** — 第 33、34、35 行把 `scroll_hall.png` 换成各自的 `sect_*.jpg`（路径从 `../assets/img/scenes/xxx` 简化为 `img/scenes/xxx`，因为 CSS 就放在 assets/ 里）

---

## 三、下次可能出现的追加问题 & 应对预案

### 🔊 音效相关

- **音效播放失败** → 检查 `SFX_URLS` 里的 CDN 是否还可用（pixabay 有时改路径）。降级路径已内置（WebAudio 合成音），至少能出声。
- **首次点击才有声** → 浏览器策略：Audio 需要用户交互后才能自动播放。不用改代码，第一次点击后就正常。
- **用户嫌吵想关** → 控制台 `Sfx.setEnabled(false)`，或加 UI 开关调用 `Sfx.setEnabled(true/false)` + `Sfx.setVolume(0.3)`。设置会自动持久化到 `Game.state.settings.soundOn`。

### 🐛 静默追认相关

- 如果用户再报"回山门还是弹成就"，说明有些成就没走 `_checkAchievements` 路径而是直接 emit `achievementUnlock` → 需要额外在 `emit` 之前加过滤。
- `Game._checkAchievements` 已被包装，包装函数在 `v435j-fix.js` 里，保留了原函数引用（`_origCheck`）。

### ⚔ 妖兽数值

- 如果玩家反馈"现在妖兽太强打不过"，把 `DIFF_MULT` 里各档的 `hp/atk` 系数往下调 0.15～0.25 即可。
- 数值公式的推荐参考（可让用户测试）：

  | 难度 | HP 相对玩家 | ATK 每回合伤害占玩家 HP |
  |---|---|---|
  | easy | 0.75× | 2-3% |
  | normal | 1.15× | 4-6% |
  | hard (精英) | 1.85× | 7-10% |
  | boss (妖王) | 3.20× | 12-16% |
  | legend (真君) | 5.00× | 18-22% |

  可以让用户在控制台跑 `v435j.testMonster('boss', 75)` 查看某境界某难度的妖兽属性。

### 🎨 视觉

- 若用户嫌"八宫格背景太深看不清"，调整 `v435j-fix.css` 里 `.xx-four-grid > div` 的 `background linear-gradient` 里 rgba 的 alpha（当前 0.78/0.88 → 改小如 0.55/0.72）。
- 主页 body 背景当前用的是 `splash_v435.jpg`（用户之前已经生成过的启动画）。如果用户想换更"日常主页"感觉的图，可以生成一张新的作为主页专用背景，或直接换文件名。

---

## 四、项目路径 & 版本考古（记忆恢复用）

- **主入口**：`index.html` → 加载所有 assets/*.js *.css
- **核心逻辑**：`assets/game-core.js`（2400+ 行，主状态机、境界、成就、答题、突破等）
- **UI 组件**：`assets/ui-components.js`（1900+ 行，主页 header、六大宗门卡、世界地图、四宫格等）
- **学科页**：`assets/subject-page.js`（1300+ 行，功法参悟、斩妖场旧版）
- **斩妖场新版**（覆盖 subject-page._renderArena）：`assets/v435d-arena-fat.js`
- **交互引擎**：`assets/interactive-engine.js`（1600+ 行，物理/化学各种 canvas 交互演示）
- **沉浸学习**：`assets/immersive-learning.js`（900+ 行，功法四阶段流程 UI）
- **数据文件**：`data/story-data.js`、`data/questions-*.js`（各学科题库）、`data/manuals-*.js`（各学科功法）
- **场景背景系统**：`assets/v435d-scene-bg.css` + JS 里给 body 加 `.v435d-sect-<subject>` class

### 版本历史速览
- **v4.3.5g/g-r2**：引入 `_silentAuditAchievements`（首次读档静默补录成就）
- **v4.3.5h**：修复各种小问题（详见 CHANGELOG-v4.3.5h.md）
- **v4.3.5i**：把 `getTargetStatsForRealm` / `scaleMonsterForRealm` / `getRealmMultiplier` 内联进 `game-core.js`（原本靠 hotfix 补丁，删了就 broke）
- **v4.3.5j**（本轮）：视觉修复 + 妖兽数值加强 + 静默追认强化 + 音效系统

---

## 五、用户偏好 & 沟通风格提醒

- 用户是**高二学生**，基础不太好，喜欢**循序渐进**、**修仙沉浸感**。
- 表达偏口语化，习惯用"这得修"、"要修改"、"哪里不对"这样直接的表达。
- 用户**看重"完成一个文件马上发"**——不要憋大合集，做完一个 upload 一个。
- **token 快耗尽时立即写对接文档**，用户 explicitly 要求过（见本文档就是这么产生的）。
- 沙盒经常被重置（每次会话开始都得重下 zip + 记忆.txt 恢复），做好幂等：先 `mkdir -p`、`ls`、`grep -q` 检查再动手。
- 用户偏好**打补丁式的独立修复文件**（v435c-hotfix.js、v435d-arena-fat.js、v435j-fix.js 都是这种）——好处是易回滚，坏处是文件多；上一轮 v4.3.5i 已经把最关键的补丁内联回 core 了。

---

## 六、下次接手可直接用的检查清单

用户装完新文件后，让他打开浏览器 F12 控制台，应该看到：

```
[v435j] 已包装 _checkAchievements（前置静默追认）
[v435j] 已重写 Game.scaleMonsterForRealm（HP/ATK 加强，按 enemyRid）
[v435j] 已重写 Game.scaleMonster（转发到 scaleMonsterForRealm）
[v435j] 音效系统已装载（Sfx.play(key), Sfx.setEnabled(bool)）
[v435j] v4.3.5j 补丁装载完成 · window.v435j 可用
```

**验证问题 ④**：控制台跑 `Game.state.achievements` 看已达标的成就是否都 `done:true, rewardGiven:true, silentAudit:true`。回山门刷新页面，不应该弹任何成就 toast。

**验证问题 ⑤**：控制台跑 `v435j.testMonster('boss', Game.state.char.realmId)`，看 boss HP 应该是玩家 maxHp 的 ~3.2 倍。同阶 `normal` 应该 ≥ 玩家 maxHp。

**验证问题 ⑥**：答一题看有没有"叮"或"咚"声；点任何按钮有 click 音；胜利/失败/突破/成就都有对应音。

---

**签署**：v4.3.5j · 2026-07-06 · Genspark 助手交付
