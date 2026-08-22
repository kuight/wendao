---
name: world-render-debug
description: 排查 v5 世界地图/渲染不显示的技能：双 canvas 冲突、canvas-engine 未暴露 ctx、world 未暴露 map、相机坐标系错乱、draw/drawScene 接口不一致。按序排查这些已知坑位，快速定位"逻辑对但画面空白"。
whenToUse: v5/index.html 世界地图空白、只有网格/粒子背景看不到瓦片、玩家消失、或 render 报 undefined/NaN 时。
---

# World Render Debug · 世界渲染排障

## 症状模式

用户说"地图空空荡荡"——通常不是真的没有，而是**真实渲染被覆盖或画到了屏幕外**。按本技能逐条排查。

## 已确认的坑位（按出现频率，2026-08 实证）

### 1. canvas-engine 未暴露 ctx（崩溃）
- 现象：`drawScene` 报 `engine.ctx.createLinearGradient` undefined，主循环每帧崩，背景画不出。
- 修复：`createCanvasEngine` 的 api 加 `api.ctx = ctx;`。

### 2. world 未暴露 map/npcs/events（瓦片不画）
- 现象：`_drawTiles` 里 `world.map` 是 undefined，直接 return，**瓦片一个不画**（只剩背景）。
- 修复：world 模块 `boot.world` 用 getter 暴露 `map/npcs/events`（模块内闭包私有变量）。

### 3. draw vs drawScene 接口不一致（demo 接管覆盖）
- 现象：main-loop 每帧调 `boot.render.draw(ctx)`，但 render 只暴露 `drawScene`。`boot.render.draw` 是 undefined → demo 脚本 `isStubDraw` 误判为 true → demoDraw 每帧清屏画网格/粒子，**覆盖世界地图**。
- 修复：render api 加 `draw: drawScene` 别名。

### 4. drawScene 参数不兼容（相机 NaN）
- 现象：main-loop 传 ctx 对象，内部期望数字 dt → `Math.pow(0.001, 对象)` = NaN → 相机 NaN，画面错乱。
- 修复：drawScene 开头归一化 `dt`（对象取 `.dt`，非数字回退 0.016）+ 相机 NaN 自愈。

### 5. 相机坐标系错乱（玩家瓦片画到屏幕外）
- 现象：相机目标用 `gx*tileW` 矩形坐标，而瓦片/玩家用 `gridToScreen` 等距坐标 → 玩家在屏幕外，视野只看到远景。
- 修复：相机目标统一用 `engine.gridToScreen(x, y)`。

### 6. 双 canvas 冲突（已处理）
- render.init 用 `container.querySelector('canvas')` 复用现有 `#cv`，不新建。检查 stage 内应只有 1 个 canvas。

## 排查顺序

1. 跑 `node v5/tests/render-canvas-check.mjs`，看关键三行：isStubDraw / 玩家屏幕位置 / drawTile 计数。
2. 浏览器确认（需 danger-full-access）用 browser-verify 技能截图 + 抓 console。
3. 对号入座修上面坑位。

## 设计原则

- 渲染只应有一个驱动循环 + 一个 canvas + 一套坐标系（等距 gridToScreen）。
- 接口契约（IFACES）要与 main-loop / demo 装配脚本的实际调用一致，缺一个方法名就会静默失败。
- 别乱改 render 内部结构，优先做参数兼容与暴露别名这类最小修复。