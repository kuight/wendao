# 《问道修仙学院》 v4.3.6b · 对接文档（HANDOFF）

> 面向下一位（可能是被重置后的自己）AI 助手。  
> **读完这份文档 = 15 秒接手项目**，不用再翻源码。

---

## 0. 项目一句话

**"边玩边学的二次元修仙 RPG"**——把六科高考真题包在修仙世界观里，答题解锁功法、境界、灵植、炼丹、灵宠、成就。

- **目标用户**：一个高三学生（**基础较差、冲刺双一流**）——所以 ①玩法要爽 ②教学要真的能补基础，两者都是核心，不是玩具。
- **单机项目**：纯静态 HTML+CSS+原生 JS，本地双击 `index.html` 或 `python3 -m http.server` 就能跑。
- **存档**：`localStorage`，可导出/导入 JSON。
- **版本号规则**：`v4.<主>.<次><字母>`，比如 `v4.3.6b`（当前）→ `v4.3.6c` → …→ `v4.3.7`。

---

## 1. 目录结构

```
project/
├── index.html                       主入口（大地图+八宫格）
├── subjects/
│   ├── math.html                    数学·推衍宫
│   ├── physics.html                 物理·雷霆殿
│   ├── chemistry.html               化学·丹鼎峰
│   ├── geography.html               地理·苍穹阁
│   ├── chinese.html                 语文·星河阁
│   └── english.html                 英语·万邦殿
├── data/                            主题库 + 语料
│   ├── {sect}-manual.js             功法卷（知识点）
│   ├── {sect}-bank.js               主题库
│   ├── story-data.js                剧情脚本
│   ├── fujian-bank-supplement-v2~6.js
│   ├── geography-bank-supplement-v7*.js
│   ├── chinese-bank-supplement-v1.js
│   ├── content-pack-v426.js
│   └── quality-parts/               (备份留档，实际加载的是 assets/ 里的)
├── assets/                          所有 JS/CSS + 高质量补丁
│   ├── game-core.js                 ★ 核心：Game/UI/Story 状态机
│   ├── ui-components.js
│   ├── story-engine.js
│   ├── auto-visualizer.js           SVG 自动上色/画图
│   ├── immersive-learning.js        4 阶段沉浸式教学
│   ├── knowledge-graph-v436.js      58 manual + 60 关联边
│   ├── smart-question-v436.js       ★ 智能出题（60/25/15 混合）
│   ├── battle-arena-v436.js        真·回合制战斗
│   ├── battle-skills-v435d.js      战斗中主动技能
│   ├── alchemy-lab-v435d.js        炼丹房 3 段小游戏
│   ├── spirit-garden-v435d.js      灵植园
│   ├── subject-page.js              subject 页面共用渲染
│   ├── v437a-loader.js              ★ 一键装载 quality 补丁
│   ├── v437a-quality-fix.js         SQ 索引重建 + Immersive fallback
│   ├── reclassify-bank-v437a.js     题目自动重分类到正确 manualId
│   ├── {sect}-bank-v436-quality3~11.js  ← 本次(6b)新增到 p11
│   ├── {sect}-bank-v437-quality*.js      更高阶补丁
│   ├── {sect}-bank-v438-part1.js         v4.3.8 预告
│   ├── sound-effects-v437.js
│   ├── battle-arena-v437-balance.js
│   ├── style*.css
│   └── ...
├── _archived_patches/               ★ 已合入 game-core 的老 hotfix，不再加载
└── CHANGELOG-v4.3.*.md              各版本变更日志
```

**关键三件套**（读源码的入口顺序）：
1. `assets/game-core.js` → 游戏状态/存档/境界/事件
2. `assets/smart-question-v436.js` → 怎么抽题
3. `assets/v437a-loader.js` → 怎么装载扩展题库

---

## 2. 版本历史（简史）

| 版本 | 关键改动 |
|------|----------|
| v4.2.6 | 场景引擎 + 战斗动画 + 内容包 |
| v4.3.5g/h/i | 硬伤修补：竞态、洞府修为、成就闪、怪物曲线 |
| v4.3.5j | 视觉恢复（CG/场景背景），逻辑与 v4.3.5i 一致 |
| **v4.3.6a** | 上一稳定版：知识图谱 KG-v436 + 智能出题 SQ-v436 + 战斗竞技场 v436 |
| **v4.3.6b（当前）** | ★ 高质量真题库大扩容：+482 题 |
| v4.3.7 (计划) | 战斗平衡 + sound-effects |
| v4.3.8 (预告) | math-bank-v438-part1 已有雏形 |

---

## 3. 玩法核心（速览）

- **10 大境界**：炼气→炼体→筑基→金丹→元婴→化神→渡劫→炼虚→大乘→**登仙**（=高考通关）
- **六大宗门**：语数英物化地，各守一卷天道真经
- **4 阶段参悟功法**：通览篇目 → 导引示例 → 首次试炼(3题) → 参悟成功
- **斩妖场**：每大境界 12 只妖 = 3 凡阶 + 4 同阶 + 3 精英 + 2 妖王；越阶 +3 起禁入
- **真·炼丹房**（丹药房节点）：3 段小游戏 → 下品~极品
- **灵植园**（灵宠殿内）：种药材供炼丹
- **洞府**：**只回 HP/MP/道心，不产修为**，每日 2 次上限，1 小时冷却
- **秘境**：奖励砍到 5%，只做奇遇/装备/材料
- **心魔录**：错题化作心魔扎根，须重战克之
- **智能出题（SQ）**：60% 本经 + 25% KG 关联知识点 + 15% 已学回顾

---

## 4. 题库现状（v4.3.6b 后）

| 学科 | 主库 BANK 题数 | 覆盖 manualId 数 |
|------|----------------|------------------|
| 数学 | 217 | 29 |
| 物理 | 389 | 28 |
| 化学 | 356 | 18 |
| 地理 | 269 | 12 |
| 语文 | ~主 bank + supplement-v1 | 8-10 |
| 英语 | 主 bank | 6-8 |

**题目格式**（bank 里每一题）：
```js
{ id:'math_q436p10_10101',        // 全局唯一
  manualId:'math_m1',              // 关联到功法卷（决定哪门课/哪一卷）
  type:'single'|'multi'|'calc',    // 单选/多选/计算
  difficulty:'easy'|'normal'|'hard'|'boss'|'legend',
  gaokao:true|false,               // 是否高考真题
  q:'题干（可含 SVG 图）',
  options:['A. ...','B. ...',...], // calc 类可以为空
  answer:'A'|['A','B']|'字符串答案',
  explain:'…详细解析…',
  tag:'知识点·来源标签' }
```

**quality 补丁加载链**（自动，无需手改）：
1. `subjects/math.html` → 加载 `data/math-bank.js` 主库
2. → 加载 `assets/v437a-loader.js`
3. → v437a-loader 按学科自动扫 `PATCHES.math` 数组顺序装载：
   - v437-quality3, v436-quality3/4/5/6/**7/9/10/11**, v438-part1
4. → 每个 quality 补丁的 `mount()` 自动查重去重、追加进 `MATH_BANK`
5. → 最后加 `reclassify-bank-v437a.js`（重分类）+ `v437a-quality-fix.js`（修 SQ 索引 bug）

**新增题库**：**只需扔文件到 `assets/`，再把文件名追加到 `v437a-loader.js` 的对应 PATCHES 数组即可**。不要动 subject html。

---

## 5. 已知硬伤 / 待改进（v4.3.6b 后）

⚠️ 用户明说了：**"我还有好多不满意的地方"**——请下次上线时**先问用户具体不满意什么**（不要自己脑补），再动手。

**可能的方向**（按重要性排）：

1. **教学深度不足**：高三基础差冲双一流场景下，Immersive Learning 是否讲得清楚？很多 manual 目前是"名词+题目"，缺**结构化讲义**。
2. **卡关体验**：斩妖场卡在同一只妖 5 次以上应弹"降难度/看讲解"选项。
3. **节奏偏慢**：洞府 1 小时冷却对冲刺党过于严格，考虑高三档减到 15 分钟。
4. **秘境价值**：奖励砍到 5% 后基本无人去，建议改成"每周 1 张藏宝图 → 必掉高价材料"。
5. **错题本**：心魔录目前只列错题，缺"必错知识点热力图"和"3-2-1 复习提醒"。
6. **中英文题库单薄**：与理综差距大，如用户要冲文科需专项扩容。
7. **移动端 UI**：四宫格、战斗界面在小屏上按钮太挤。

---

## 6. 打包 & 分发流程

**打包**（做过）：
```bash
cd /home/user/wendao
zip -r wendao-v4.3.6b-p7.zip project -x "project/_archived_patches/*"
# 或包含 _archived_patches 也可以，只有 ~50KB
```

**用户接收方式**：`UploadFileWrapper` 生成 `https://www.genspark.ai/api/files/s/xxx` 链接。

**给用户后**：提醒他"整合包解压即用，双击 `index.html` 或 `python3 -m http.server` 启动"。

---

## 7. 记忆 & 用户信息（重要！）

- **用户身份**：**高三学生，基础较差，目标双一流**
- **用户对项目的态度**：这是一个**长期迭代**项目，反复打磨玩法+教学
- **用户风格**：
  - 一次上传一大批文件（题库补丁），让 AI 打包
  - 会说"帮我看看有 bug 就修"——**要主动测试，不要只是打包了事**
  - 关注"教学"和"玩法"两条线并重
  - **上下文有限**，被重置后需要靠 HANDOFF-*.md + CHANGELOG-*.md 快速上手
- **福建·莆田四中限定**：项目 footer 里写着（`2025-2026 学年`），历次真题多以福建/新高考卷为主
- **禁忌**：不要建议接入需要付费的外部 API、不要引入需要安装依赖的框架（保持"双击即跑"）

---

## 8. 下次对话第一句该问什么？

用户说 "我还有好多不满意的地方" 的时候——**不要盲猜**。第一句应该是：

> **"体验下来最想改的三件事是什么？** 可以按"最影响学习效果 / 最影响爽度 / 最想删掉的功能"给我列一下，然后我按优先级来。"

拿到具体反馈再动，能避免做无用功。

---

*End of HANDOFF · v4.3.6b · 2026-07-14*
