# 《问道修仙学院》v4.3.8 · AI 对接文档（HANDOFF）

> **给下一个接手的 AI 看的备忘录**
> 项目：福建莆田四中高二学生（物化地）的边玩边学修仙 HTML 单机游戏
> 当前版本：**v4.3.8**（多玩法 × 教学深度）
> 上一版：v4.3.7（题库清洗 + 高质量真题合并）

---

## 一、用户是谁 · 要什么

- **身份**：福建莆田四中高二理科生，物化地组合
- **基础**：自评"不太好"，希望循序渐进
- **形式**：单机 HTML，双击即开，手机电脑都能用
- **核心诉求（v4.3.8 直接对应）**：
  > "教学不够有深度不够详细简单，上来就做题，玩法太少层次感不够，跟学习搭边整体很无趣，我希望可以有多个玩法板块对应多个学习模式以及知识点"

**用户开发偏好（重要！）**：
- **每完成一个文件立即 UploadFileWrapper 上传**——沙箱可能随时被回收，白干过一次
- **对接文档要写详细**——目的就是防止沙箱丢失后接手 AI 摸不着头脑
- **不要停**——一路推进，中途别问东问西打断
- Token 管够，但也别浪

---

## 二、项目结构（v4.3.8）

```
wendao/
├── index.html                    # 首页（选学科）
├── subjects/                     # 六个学科页
│   ├── math.html
│   ├── physics.html
│   ├── chemistry.html
│   ├── geography.html
│   ├── chinese.html
│   └── english.html
├── assets/                       # 主引擎
│   ├── game-core.js              # 老引擎（v4.3.6b，不改）
│   ├── subject-page.js           # 学科页通用逻辑（不改，v4.3.8 通过补丁增强）
│   ├── immersive-learning.js     # 老"沉浸参悟"引擎（保留）
│   ├── learning-modes-v438.js         🆕 v4.3.8 4 种玩法引擎
│   ├── learning-modes-loader-v438.js  🆕 v4.3.8 挂载器
│   └── ...v437/v436 各种题库和补丁
├── data/                         # 数据
│   ├── math-manual.js            # 数学秘籍（30 章，MATH_MANUALS）
│   ├── physics-manual.js         # 物理秘籍
│   ├── chemistry-manual.js
│   ├── geography-manual.js
│   ├── chinese-manual.js
│   ├── english-manual.js
│   ├── deep-dive-math-v438.js         🆕 数学 10 章手写讲义
│   ├── deep-dive-physics-v438.js      🆕 物理 10 章手写讲义
│   ├── deep-dive-fallback-v438.js     🆕 其他章节自动兜底
│   └── ...各科题库
├── CHANGELOG-v4.3.5g.md ~ CHANGELOG-v4.3.8.md  # 每版日志
└── HANDOFF-v4.3.5j.md, HANDOFF-v4.3.6b.md, HANDOFF-v4.3.8.md  # 对接文档
```

---

## 三、v4.3.8 到底做了什么（速览）

### 教学深度化（Deep Dive · 四段式讲义）
每篇秘籍新增 `manual.deepDive` 字段。每个知识点用四段式拆解：

| 段落 | 说明 |
|------|------|
| 💡 **why**       | 为什么这样——直觉推导 |
| ⚠️ **pitfalls**  | 3 条最容易踩的坑 |
| 🧠 **mnemonic** | 一句话口诀 |
| ⚡ **reflex**    | 见到 X → 立刻反射 Y |

- **手写覆盖**：数学 math_m1~m10、物理 physics_m1~m10（共 30 章）
- **兜底覆盖**：其他 85 章由 `DeepDiveFallback()` 基于 keyPoints 自动生成
- **总计**：115 篇秘籍 100% 有 deepDive

### 4 种玩法引擎（window.LM）
每张秘籍卡右下角新增 4 个 mini 按钮：

```
🔮 闪卡（LM.startFlashcard）
🧩 拼盘（LM.startFormulaPuzzle）
🌌 精析（LM.startStepAnalysis）
🎯 深参（LM.startDeepDive）
```

---

## 四、核心 API（下一版接手 AI 必看）

### window.LM
```js
LM.startFlashcard({ manual, sect })       // 60 秒 5 张速记
LM.startFormulaPuzzle({ manual, sect })    // 公式散成符号点选拼回
LM.startStepAnalysis({ manual, sect })     // 一题分 3~5 步
LM.startDeepDive({ manual, sect })         // 四段式讲义面板
```
- `manual`：一篇秘籍对象（必须有 `deepDive` 字段）
- `sect`：学科名（用于奖励结算 &日后统计）
- 所有玩法共用 `.lm-overlay` 遮罩，样式 `#lm-v438-css`

### window.LMLoader
```js
LMLoader.attachDeepDive(manual)   // 给单篇 manual 挂 deepDive
LMLoader.attachAll()              // 扫全部 window.*_MANUALS 挂
LMLoader.enhance()                // 补丁 SubjectPage._renderManuals
LMLoader.reinject()               // 手动重扫 DOM 补按钮（调试用）
```

### deepDive 数据结构
```js
{
  subtitle: '一句话点题',
  points: [
    {
      title: '知识点标题',
      why: '直觉/推导',
      pitfalls: ['❌ 坑 1', '❌ 坑 2', '❌ 坑 3'],
      mnemonic: '一句话口诀',
      reflex: '见 X → 反射 Y'
    }
  ],
  flashcards: [{ front: '正面', back: '背面' }],
  puzzles: [{ formula: 'a + b ≥ 2 √ ( a b )', tip: '基本不等式' }],  // 空格分隔 token
  stepExamples: [{
    stem: '题目主干',
    steps: [
      { ask: '问题', type: 'choice', options: [...], answerIndex: 0, hint: '...', explain: '...' },
      { ask: '问题', type: 'fill', answer: ['1','1.0'], explain: '...' }
    ]
  }],
  _handwritten: true,   // 或 _auto: true
}
```

---

## 五、v4.3.8 已知问题 / 未做

- ❌ **雷劫限时闯关** 未做（用户票选第 5 名）——列为 v4.3.9 首选
- ❌ **归元概念连线** 未做（用户票选第 3 名）——列为 v4.3.9 备选
- ❌ **化学/地理手写讲义** 全走兜底（用户当时选"数理前 10 章手写"）——建议 v4.3.9 手写化学 10 章
- ⚠️ **拼盘公式分词**：目前用空格分隔，讲义里写公式必须像 `a + b ≥ 2 √ ( a b )` 这样带空格，不带空格会用简易规则切分（可能不完美）
- ⚠️ **沙箱 playwright** 缺 libatk 系统库，UI 无法自动截图验证，只能靠 Node require 语法/逻辑验证

---

## 六、给下一版（v4.3.9）AI 的建议

### 优先做（用户已表态）
1. **⚡ 雷劫限时闯关** —— 用户投票第 5 名，但爽感最强，做完再问反馈
2. **📖 化学 10 章手写讲义** —— 用户是"物化地"选手，化学讲义空缺明显
3. **🗺️ 学习路径地图** —— 把散点玩法串成"通关路线"（比如：闪卡 → 拼盘 → 精析 → 斩妖，走完拿功法）

### 已经踩过的坑
- ⚠️ **绝对不要动 game-core.js 和题库**：老玩法用户不吐槽，动了容易翻车
- ⚠️ **SubjectPage.init 在 subject.html 内联脚本里同步跑，你新加的 loader 会晚**：所以我用 MutationObserver + 补丁 _renderManuals 双保险
- ⚠️ **v4.3.7 已经把版本号占了**（题库清洗），v4.3.8 是我的教学深度版
- ⚠️ **英语 manual 是 window.ENGLISH_MANUALS**（不是 global 导出）—— 兼容处理已经在 loader 里
- ⚠️ **首次访问会弹欢迎弹窗**（v4.3.5 涅槃重制版更新说明）——它会挡按钮，playwright 测试要先关掉

### 复现 v4.3.8 验证（Node 环境）
```bash
cd wendao
node -e "
global.window = global;
global.document = { readyState:'complete', addEventListener:()=>{},
  head:{appendChild:()=>{}}, getElementById:()=>null,
  createElement:()=>({dataset:{},style:{},addEventListener:()=>{},appendChild:()=>{},
    querySelectorAll:()=>[],querySelector:()=>null,remove:()=>{},classList:{add:()=>{},remove:()=>{}}}),
  body:{appendChild:()=>{}}, querySelectorAll:()=>[], querySelector:()=>null };
global.setTimeout = setTimeout;
global.MutationObserver = function(){ return { observe:()=>{} } };
require('./data/math-manual.js');
require('./data/physics-manual.js');
require('./assets/learning-modes-v438.js');
require('./data/deep-dive-fallback-v438.js');
require('./data/deep-dive-math-v438.js');
require('./data/deep-dive-physics-v438.js');
require('./assets/learning-modes-loader-v438.js');
LMLoader.attachAll();
console.log('LM 方法:', Object.keys(LM).filter(k=>k.startsWith('start')));
console.log('数学讲义章节:', Object.keys(MATH_DEEP_DIVE).length);
console.log('math_m1 手写?', MATH_MANUALS[0].deepDive._handwritten);
"
```

预期输出：
```
LM 方法: [ 'startFlashcard', 'startFormulaPuzzle', 'startStepAnalysis', 'startDeepDive' ]
数学讲义章节: 10
math_m1 手写?  true
```

---

## 七、版本关系速查

| 版本 | 主线 |
|------|------|
| v4.2 | 沉浸参悟引擎（immersive-learning）+ manual 深度化尝试（其实是模板套壳） |
| v4.3.5 涅槃重制 | 洞府/斩妖场平衡大调 |
| v4.3.6 | 知识图谱、智能出题、可视化 |
| v4.3.7 | 题库清洗 + 高质量真题合并 |
| **v4.3.8**（本版）| **4 种玩法引擎 + 四段式深度讲义** |
| v4.3.9（未做） | 雷劫限时 / 化学手写讲义 / 学习路径地图（建议方向） |

---

## 八、开发规约（沿用 v4.3.6b）

1. **不新建版本号跳跃**：v4.3.8 后一版就是 v4.3.9（继续教学深度线）
2. **每完成一个文件立即上传**（用户强调）
3. **HANDOFF 每版更新**（就是这个文档）
4. **不动 game-core.js、题库、存档格式**
5. **CSS 一次性注入**（避免每次弹窗重复 style）
6. **中文注释 + 版本标记**（`v4.3.8` 字样便于日后 grep）

---

**版本号**：v4.3.8
**发布日期**：2026-07-22
**接手人给下一位接手人的一句话**：教学深度和多玩法这条线走通了，用户的核心痛点解决了 60%，下版本继续把化学/地理手写讲义补上、加雷劫爽感玩法。别动老玩法。
