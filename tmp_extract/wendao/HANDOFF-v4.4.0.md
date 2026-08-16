# 《问道修仙学院》v4.4.0 · AI 对接文档（HANDOFF）

> **给下一个接手的 AI 看的备忘录**
> 项目：福建莆田四中高二学生（物化地）的边玩边学修仙 HTML 单机游戏
> 当前版本：**v4.4.0**（化学 12 篇 + ⚡ 雷劫限时闯关）
> 上一版：v4.3.9（语文·选必下第一单元古诗词 7 篇）
> 更新日期：2026-07-22

---

## 一、用户是谁 · 要什么

- **身份**：福建莆田四中高二理科生，物化地组合
- **基础**：自评"不太好"，希望循序渐进
- **形式**：单机 HTML，双击即开，手机电脑都能用
- **v4.4.0 触发的诉求**：用户原话"你先把这两都做完再说吧，不要停嘛"——A（化学 4 大模块讲义）+ B（雷劫玩法）**并行完整交付**

**用户开发偏好（雷打不动）**：
- 每完成一个文件立即 UploadFileWrapper 上传（沙盒会随时被回收）
- 对接文档要写详细，防止沙箱丢失后接手 AI 摸不着头脑
- **不要停** —— 一路推进，中途别问东问西打断
- Token 管够，但也别浪

---

## 二、v4.4.0 到底做了什么（速览）

### A · 化学一轮复习深度包（12 篇秘籍）
追加到 `CHEMISTRY_MANUALS`（原秘籍完全不动），id 用 `chem_xbx_*`：

| 模块 | 秘籍 | id |
|------|------|-----|
| 01·物质及变化 | 《离子反应》 | `chem_xbx_lizi` |
| 01·物质及变化 | 《氧化还原反应》 | `chem_xbx_redox` |
| 01·物质及变化 | 《陌生情境方程》 | `chem_xbx_stranger` |
| 02·化学计量 | 《物质的量与摩尔》 | `chem_xbx_amount` |
| 02·化学计量 | 《热重分析计算》 | `chem_xbx_thermogravimetric` |
| 03·金属化合物 | 《钠及其化合物》 | `chem_xbx_sodium` |
| 03·金属化合物 | 《铁及其化合物》 | `chem_xbx_iron` |
| 03·金属化合物 | 《铝及其化合物》 | `chem_xbx_aluminum` |
| 04·非金属 | 《氯及其化合物》 | `chem_xbx_chlorine` |
| 04·非金属 | 《硫及其化合物》 | `chem_xbx_sulfur` |
| 04·非金属 | 《氮及其化合物》 | `chem_xbx_nitrogen` |
| 04·非金属 | 《硅及无机非金属》 | `chem_xbx_silicon` |

**素材来源**：老师给的《一轮复习用元素化学》zip 包（4 大模块 · 40 讲 DOC）

### 化学特化四段式讲义
| 段落 | 数据字段 | 内容 |
|------|---------|------|
| 💡 核心概念 | `points[].concept` | 微观理解、为什么这样反应 |
| 🧪 实验现象 | `points[].phenomena` | 颜色/气味/装置图/口诀 |
| ⚗️ 必背方程式 | `points[].equations` | 离子式、化学式、条件 |
| ⚠️ 高频陷阱 | `points[].pitfalls[]` | 离子共存、氧化还原判错 |

**LM.startDeepDive 已加化学分支**：id 以 `chem_xbx_` 开头，或 `deepDive.points[0].concept` 存在 → 走 `renderChemistryDeepDive`。

### B · ⚡ 雷劫限时闯关（全学科通用玩法）
每张秘籍卡右下角第 **5 个 mini 按钮**：⚡ **雷劫**（紫红渐变色）。

三档难度：
| 等级 | 题量 | 时间 | HP | 基础奖励 | 连击加成 |
|------|------|------|-----|---------|---------|
| 一劫·凝雷 | 5 | 60s | 3 | +30 修 | +3/连 |
| 二劫·紫雷 | 8 | 90s | 3 | +60 修 | +5/连 |
| 三劫·天雷 | 12 | 120s | 2 | +120 修 | +8/连 |

题源智能四档回退（保证任何秘籍都能启动）：
1. `SubjectPage.bank` 中 `manualId` 匹配当前秘籍
2. 同学科整个题库随机
3. `manual.deepDive.stepExamples` 抽 choice 型题
4. 闪卡改造成 4 选 1（`front → 4 个候选 back`）

---

## 三、项目结构（v4.4.0）

```
wendao/
├── index.html
├── subjects/
│   ├── math.html / physics.html
│   ├── chemistry.html  🆕 挂化学 3 + 雷劫
│   ├── geography.html / english.html / chinese.html
├── assets/
│   ├── learning-modes-v438.js                    # v4.3.8 4 种玩法主引擎
│   ├── learning-modes-loader-v438.js             # v4.3.8 挂载器
│   ├── learning-modes-chinese-patch-v439.js      # v4.3.9 语文渲染补丁
│   ├── learning-modes-chemistry-patch-v440.js  🆕 v4.4.0 化学渲染补丁
│   └── thunder-tribulation-v440.js             🆕 v4.4.0 雷劫玩法引擎
├── data/
│   ├── chemistry-manual.js                       # 原秘籍（不动）
│   ├── chemistry-xbx-manual-v440.js            🆕 追加 12 篇
│   ├── deep-dive-chemistry-v440.js             🆕 化学 12 篇手写讲义
│   ├── deep-dive-chinese-v439.js
│   ├── chinese-xbx-manual-v439.js
│   ├── deep-dive-math-v438.js / deep-dive-physics-v438.js
│   ├── deep-dive-fallback-v438.js
│   └── ...
├── CHANGELOG-v4.3.5g.md ~ CHANGELOG-v4.4.0.md
└── HANDOFF-v4.3.5j.md, v4.3.6b.md, v4.3.8.md, v4.3.9.md, v4.4.0.md
```

---

## 四、加载顺序（chemistry.html 尾部）

**顺序不能错**：

```html
<!-- v4.3.8 主引擎 -->
<script src="../data/deep-dive-fallback-v438.js"></script>
<script src="../data/deep-dive-math-v438.js"></script>
<script src="../data/deep-dive-physics-v438.js"></script>
<script src="../assets/learning-modes-v438.js"></script>
<script src="../assets/learning-modes-loader-v438.js"></script>

<!-- v4.4.0 化学包（数据先→追加 manual→patch 最后）-->
<script src="../data/deep-dive-chemistry-v440.js"></script>
<script src="../data/chemistry-xbx-manual-v440.js"></script>
<script src="../assets/learning-modes-chemistry-patch-v440.js"></script>

<!-- v4.4.0 雷劫（放最后，全学科相同）-->
<script src="../assets/thunder-tribulation-v440.js"></script>
```

其他 5 个学科页只需挂雷劫（不挂化学包）。

---

## 五、核心 API

### 化学深度讲义数据结构
```js
{
  subtitle: '一句话点题',
  points: [{
    title: '章节小标题',
    concept: '为什么这样...（HTML 允许，含 <b>）',
    phenomena: '实验现象/口诀/装置...',
    equations: '方程式（HTML 结构化，<br> 分段）',
    pitfalls: ['❌ 陷阱 1', '❌ 陷阱 2', ...]
  }],
  flashcards: [{ front, back }],
  puzzles: [{ formula, tip }],
  stepExamples: [{ stem, steps: [{ ask, type, options, answerIndex, hint, explain }] }],
  _handwritten: true
}
```

### 雷劫 API
```js
LM.startThunder({ manual, sect })    // 弹三档选择面板
LMThunder.TIERS[1|2|3]                // 三档配置（count/time/hp/xiuwei/comboBonus）
LMThunder.startThunder(...)           // 内部启动
```

### Loader 扩展映射
```js
MAP = {
  'chem_xbx_lizi':               'chem_xbx_lizi',
  'chem_xbx_redox':              'chem_xbx_redox',
  'chem_xbx_stranger':           'chem_xbx_stranger',
  'chem_xbx_amount':             'chem_xbx_amount',
  'chem_xbx_thermogravimetric':  'chem_xbx_thermogravimetric',
  'chem_xbx_sodium':             'chem_xbx_sodium',
  'chem_xbx_iron':               'chem_xbx_iron',
  'chem_xbx_aluminum':           'chem_xbx_aluminum',
  'chem_xbx_chlorine':           'chem_xbx_chlorine',
  'chem_xbx_sulfur':             'chem_xbx_sulfur',
  'chem_xbx_nitrogen':           'chem_xbx_nitrogen',
  'chem_xbx_silicon':            'chem_xbx_silicon'
}
```

**关键**：`patchLoader` 会先 `m.deepDive = null` 清掉 fallback，再强制挂手写讲义。这是 v4.3.9 就修复的 bug，v4.4.0 沿用。

---

## 六、v4.4.0 已知问题 / 未做

- ❌ **无机化合物转化方程式展示.pdf（3.8MB）** 未使用——可以做成"元素转化关系图"可视化
- ❌ **有机命名提升版.doc（3.5MB）** 未使用——可以专门做一个有机化学模块
- ❌ **数学 18 讲 PPTX（54MB）** 未使用——数学讲义可升级到辅导班级别
- ⚠️ 雷劫题源智能回退可能取到"不匹配当前秘籍知识点"的题——因为 SubjectPage.bank 里题库和 chem_xbx_* 秘籍的 manualId 大概率不匹配，会走回退到"同学科随机"。建议 v4.4.1 给 xbx 系列秘籍单独出对应题库

---

## 七、给下一版（v4.4.1）AI 的建议

### 优先级 1：数学讲义升级
- 素材：`materials/math.zip` 里 18 讲 PPTX（函数概念/单调性/奇偶性/幂/指对函数...）
- v4.3.8 数学 10 章讲义已在位，用 PPTX 素材再补深度到辅导班级别
- 每讲配"课后达标 分级演练"可直接做进雷劫的题源

### 优先级 2：有机化学模块
- 素材：`materials/chem-element/有机命名提升版.doc`（3.5MB）
- 新增 `chem_youji_*` 系列（甲烷/乙烯/苯/醇/醛/酸/酯）4-6 篇秘籍

### 优先级 3：xbx 系列秘籍专用题库
- v4.4.0 雷劫的题源目前主要走"同学科随机"回退——精度不够
- 可以给 chem_xbx_* / chn_xbx_* 每篇挂 20-30 道专用题（不用大改，追加一个 xbx-bank-*.js 即可）

### 已经踩过的坑（v4.4.0 独有）

1. **雷劫按钮的挂载时机**
   - `LMLoader.reinject` 在 v4.3.8 就有，但只挂 4 个 mini 按钮
   - v4.4.0 通过<b>包裹 reinject</b>的方式，每次刷新后追加"⚡ 雷劫"作为第 5 个按钮
   - 位置：`thunder-tribulation-v440.js` 里 `patchLoaderButtons()` 函数

2. **fallback 覆盖 bug（v4.3.9 已修）**
   - patchLoader 必须先 `m.deepDive = null` 再挂手写讲义
   - 否则 v438 loader 挂的 fallback 会阻挡手写

3. **化学四段式识别**
   - LM.startDeepDive 判断分支：id 前缀 `chem_xbx_` 或 `points[0].concept` 存在
   - 两个条件任一满足就走化学渲染器（防止 id 命名不一致时漏渲染）

### 复现 v4.4.0 验证（Node）
```bash
cd wendao
node -e "
global.window = global;
global.document = { readyState:'complete', addEventListener:(e,f)=>e==='DOMContentLoaded'&&f(),
  head:{appendChild:()=>{}}, body:{appendChild:()=>{}},
  getElementById:()=>null, createElement:()=>({dataset:{},style:{},addEventListener:()=>{},appendChild:()=>{},querySelectorAll:()=>[],querySelector:()=>null,remove:()=>{},classList:{add:()=>{},remove:()=>{}},onclick:null,innerHTML:'',textContent:'',closest:()=>null}),
  querySelectorAll:()=>[], querySelector:()=>null };
global.setTimeout = setTimeout;
global.MutationObserver = function(){ return { observe:()=>{} } };
require('./data/chemistry-manual.js');
require('./assets/learning-modes-v438.js');
require('./data/deep-dive-fallback-v438.js');
require('./assets/learning-modes-loader-v438.js');
require('./data/deep-dive-chemistry-v440.js');
require('./data/chemistry-xbx-manual-v440.js');
require('./assets/learning-modes-chemistry-patch-v440.js');
require('./assets/thunder-tribulation-v440.js');
setTimeout(()=>{
  const xbx = CHEMISTRY_MANUALS.slice(-12);
  console.log('化学手写命中:', xbx.filter(m=>m.deepDive&&m.deepDive._handwritten).length, '/ 12');
  console.log('LM.startThunder:', typeof LM.startThunder);
}, 300);
"
```

预期：
```
化学手写命中: 12 / 12
LM.startThunder: function
```

---

## 八、版本关系速查

| 版本 | 主线 |
|------|------|
| v4.2 | 沉浸参悟引擎 |
| v4.3.5 涅槃 | 洞府/斩妖场平衡 |
| v4.3.6 | 知识图谱、智能出题 |
| v4.3.7 | 题库清洗 + 高质量真题合并 |
| v4.3.8 | 4 种玩法引擎 + 数学/物理各 10 章手写 |
| v4.3.9 | 语文·选必下第一单元古诗词 7 篇 |
| **v4.4.0**（本版）| **化学 12 篇 + ⚡ 雷劫限时闯关** |
| v4.4.1（未做）| 数学讲义升级 / 有机化学模块 / xbx 专用题库 |

---

**版本号**：v4.4.0
**发布日期**：2026-07-22
**接手人给下一位接手人的一句话**：语数物化四科手写讲义都到位了（数学 10 / 物理 10 / 语文 7 / 化学 12 = 39 篇手写），4 种学习玩法 + 雷劫爽感玩法都齐了。下版本要么做数学讲义升级（PPTX 素材在位），要么做有机化学（老师素材还在）。老玩法一如既往不要动。
