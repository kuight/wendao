---
name: browser-verify
description: 用真实浏览器（本机 Edge/Chrome）验证 v5 页面渲染与运行状态：截图看画面、读 DOM/console、跑 JS 检查。解决"代码逻辑对但浏览器里看不到"的渲染类问题。
whenToUse: 需要确认世界地图/UI 在浏览器里到底长什么样、有没有 JS 报错、元素/Canvas 内容是否可见时；尤其是调试 v5/index.html 的渲染管线、双 canvas、相机偏移、地图瓦片不显示这类问题。
---

# Browser Verify · 真实浏览器验证技能

## 为什么需要它

本项目是纯前端 Canvas 游戏（`v5/index.html`）。很多渲染类 bug（世界地图空白、双 canvas 冲突、相机偏移、瓦片不显示）**只能在真实浏览器里确认**——node mock 能验证逻辑，但画面上"看到什么"必须用真浏览器截图/DOM 才可信。

本技能用本机已安装的 **Edge/Chrome headless + CDP（Chrome DevTools Protocol）** 驱动，不依赖在线安装 playwright/puppeteer，零外部依赖。

## 前提与授权

> **重要**：headless 浏览器多进程 IPC 被 DSH 的受限沙箱禁止（报 `FATAL: mojo platform_channel 拒绝访问`）。
> 真正执行浏览器命令时，需要一次 `danger-full-access` 沙箱授权（改 `sandbox_permissions: "danger-full-access"` 重跑被拒的那条命令）。
> 授权只对当次命令生效，不影响会话其余部分。

## 用法

### 1. 启动 headless Edge（带 CDP 端口）

```pwsh
$env:MSEDGE = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
& $env:MSEDGE --headless --no-sandbox --disable-gpu --disable-crash-reporter --disable-breakpad --no-first-run --user-data-dir="E:\work\edgeprof2" --remote-debugging-port=9222 "about:blank" 2>&1 | Select-Object -Last 4
Start-Sleep -Seconds 3
Invoke-WebRequest -Uri "http://127.0.0.1:9222/json/version" -UseBasicParsing -TimeoutSec 5
```

### 2. 截图

```pwsh
& $env:MSEDGE --headless --no-sandbox --disable-gpu --disable-crash-reporter --disable-breakpad --hide-scrollbars --user-data-dir="E:\work\edgeprof2" --window-size=960,800 --virtual-time-budget=6000 --screenshot="E:\work\shot.png" "http://localhost:8091/v5/index.html"
```

### 3. 用 CDP 脚本读 DOM / console / 跑 JS（本项目脚本）

`node scripts/cdp-probe.mjs <url> <jsExpr>` —— 连 9222 端口，导航到 url，执行 jsExpr 并打印结果（含 console 消息、页面标题、是否有错误）。

示例：

```pwsh
node scripts/cdp-probe.mjs http://localhost:8091/v5/index.html "document.querySelectorAll('canvas').length + ' canvases; ' + (Boot&&Boot.report?JSON.stringify(Boot.report.modules.map(m=>m.name+':'+m.status)):'no boot')"
```

## 常见检查

- **canvas 数量**：应为 1（render 复用了 `#cv`，无双 canvas）。
- **console 错误**：抓 `Runtime.consoleAPICalled` / `Runtime.exceptionThrown`，排查 drawScene 崩溃。
- **Boot.report**：确认 11 个模块 loaded（非 stubbed）。
- **地图瓦片是否真的画了**：`window.__v5DrawnTiles` 之类埋点，或读 canvas 像素。

## 定位记录（v5 渲染断点，2026-08 已修复）

- 双 canvas：`render.init` 用 `container.querySelector('canvas')` 复用 `#cv`，不再新建。
- canvas-engine 需暴露 `api.ctx`，否则 `drawScene` 在画背景时抛 `engine.ctx.createLinearGradient` 崩溃。
- world 模块需 getter 暴露 `map/npcs/events`，否则 render 读 `boot.world.map` 为 undefined，瓦片不画。
- render API 需暴露 `draw` 别名（= drawScene），否则 main-loop 找不到 `boot.render.draw`，且 demo 的 `isStubDraw` 误判为 true 用 demoDraw 覆盖画面。
- 相机坐标必须用 `gridToScreen` 等距坐标系，不能用 `gx*tileW` 矩形坐标。
- 验证命令：`node v5/tests/render-canvas-check.mjs` → isStubDraw=false、相机到位、drawTile>0。

## 已知限制

- 受沙箱限制，headless Edge 需 `danger-full-access` 授权才能启动。
- 若 Edge 路径不同，改 `$env:MSEDGE`。