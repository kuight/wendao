# 灵宠对战 · Pet Arena

本地只写的 v5 小游戏原型。定位：把知识点问答嵌进回合制灵宠战斗。

## 结构
- `index.html`：战斗界面
- `arena-core.js`：战斗引擎、答题奖励、存档写入
- `pets.json`：8 只灵宠定义
- `style.css`：视觉与动画

## 玩法
1. 默认上场灵宠为灵狐。
2. 每回合可选：攻击 / 防御 / 技能 / 学习 / 收服。
3. 点“学习”会抽取绑定学科题；答对后获得：
   - 灵力 +25
   - 下次行动速度 +10
4. 技能需要 25 灵力，终结技阈值在引擎中预留为 60 灵力。
5. 对手血量归零即胜利，结算修为与灵玉。
6. 对手残血且己方灵力 ≥30 时可尝试收服。

## 学科绑定
- 物理：灵狐（力学）
- 数学：青鸾（函数）、鲲鹏（概率）
- 地理：白泽（地貌）、九尾（生态）
- 化学：朱雀（元素）、玄武（反应原理）
- 综合：黄龙（综合思维）

## 存档
仅追加写入：
- `state.v5.minigame.petArena.roster`
- `state.v5.minigame.petArena.currentArena`
- `state.v5.minigame.petArena.rank`
- `state.v5.minigame.petArena.wins`

不会覆盖其它 v4/v5 字段。

## 验收
- `node --check arena-core.js`
- HTML 标签平衡
- `pets.json` 可解析且至少 8 只宠物
- 总体积控制在 45KB 内
