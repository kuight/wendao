# 剑阵迷踪（Sword-Formation Maze）· 问道 v5

御剑穿行符文剑阵：每一道符文门都是一道学科题，答对开门、答错触发伤害符文。破阵通关后解锁更高境界，直至金丹期「飞升试炼」。

## 玩法
1. 选择剑宗（6 种配色皮肤）与境界（练气 8×8 / 筑基 16×16 / 金丹 24×24），每境界 5 座剑阵，共 15 座。
2. 方向键 / WASD / 屏幕方向键 / 滑动移动；每步消耗 1 点行动力（AP）。
3. 踩上符文门弹出答题：30 秒内答对 → 破门 +1 AP；答错或超时 → 伤害符文 -10 HP（护盾可抵挡）。
4. 灵石：蓝=护盾+1，红=经验+5，金=剑气斩充能+1。
5. 剑气斩：点击「斩」后点击相邻墙壁，可破开一道墙（抄近路）。
6. 到达出口即破阵，进入下一座；破满 5 座解锁下一境界。

## 计分
`总分 = 剩余HP × 100 + 答对题数 × 50 + 时间奖励（60 秒内通关 +200）`

## 存档规范
仅使用前缀 `state.v5.minigame.swordMaze.*`：
- `state.v5.minigame.swordMaze`：`{ tier, completedMazes, bestScore, hpHistory, unlockedTiers, lastRunAt, xp }`
- `state.v5.minigame.swordMaze.leaderboard`：本地前十名 `[{ maze, score, ts }]`

仅维护本小游戏自己的 v5 存档命名空间。

## 确定性
迷宫由 `seed` 经 mulberry32 递归回溯算法生成，同一剑阵每次布局一致；题目按 `mazeId:行列` 哈希种子从题库确定性抽取。

## 集成
将本目录放入 `src/v5/minigame/sword-maze/`，由 v5 门户链接 `index.html`。需以 HTTP 服务方式打开（`fetch` 加载 JSON 分片），无外部 CDN / 无远程图片。

## 文件
- `index.html` 界面（境界/剑宗选择、迷宫渲染、HUD、答题弹窗、结算、本地排行榜）
- `maze-core.js` 引擎（确定性生成、移动、答题总线、剑气斩、存档）
- `mazes.json` 15 座剑阵（seed、尺寸、门位、灵石位）
- `clans.json` 6 剑宗配色
- `banks/swordmaze-gates-d3.json` / `d4.json` / `d5.json`：按难度惰性加载的 360 道题库分片（gzip+base64 封装，运行时解包）
- `style.css` 二次元修仙风、移动端适配


## 分片策略
- 题库按难度拆为 D3 / D4 / D5 三个 JSON 分片。
- 进入不同境界时只加载当前难度范围所需分片：练气载入 D3+D4，筑基载入 D3+D4+D5，金丹载入 D4+D5。
- 分片文件内部采用 `gzip+base64` 封装，运行时由 `maze-core.js` 解包，还原为原始 360 题对象数组；题目 id、顺序与内容不丢失。
