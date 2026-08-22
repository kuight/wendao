---
name: v5-test
description: 运行《问道修仙学院》v5 框架的测试套件：冒烟测试、集成闭环测试、渲染验证测试。一条命令跑完并看懂结果，判断改动是否破坏框架。
whenToUse: 改了 v5 任何 core/ui 模块或 index.html 后，需要确认没破坏既有功能（世界生成、移动、战斗、答题、经济、渲染）时；交接/提交前跑一遍全量测试。
---

# v5 Test Runner · v5 框架测试入口

## 测试清单

| 命令 | 作用 |
|---|---|
| `node v5/tests/smoke.js` | 冒烟：模块加载、接口契约、主循环装配，79 项 |
| `node v5/tests/integration.cjs` | 集成闭环：启动→世界→移动→战斗→答题→结算→经济 |
| `node v5/tests/render-canvas-check.mjs` | 渲染验证：复用 canvas、相机到位、瓦片/精灵绘制（mock 模拟 120 帧） |
| `node v5/tests/knowledge.test.mjs` | 知识图谱：六科章节知识点 |

## 常用流程

1. 改代码后先跑 `node v5/tests/smoke.js`（快速）。
2. 再跑 `node v5/tests/integration.cjs`（确认业务闭环）。
3. 若涉及渲染，跑 `node v5/tests/render-canvas-check.mjs`，看三行关键输出：
   - `isStubDraw: false`（demo 未接管覆盖）
   - 玩家屏幕位置在可视区
   - `drawTile 调用 > 0`（瓦片真画了）

## 判定标准

- smoke：79 项通过、模块 loaded 10+/stubbed 1（ui 可 stub）。
- integration：闭环全绿，末尾 `✅ 集成验证全部通过`。
- render-canvas-check：isStubDraw=false、相机不 NaN、drawTile>0。

## 注意

- 题库 404：服务器须跑仓库根（`python -m http.server 8091`），`/src/data/...` 绝对路径才有效。
- 环境 mock：node 测试须 mock `document/window/localStorage/getComputedStyle` 等浏览器 API，否则视觉函数（feedback.js）会降级 stub。

## 服务器启动

```pwsh
cd E:\work\wendao\wendao-main
python -m http.server 8091
# 浏览器: http://localhost:8091/v5/index.html
```