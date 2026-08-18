# 《问道修仙学院》v4.3.9 · AI 对接文档（HANDOFF）

> **给下一个接手的 AI 看的备忘录**
> 项目：福建莆田四中高二学生（物化地）的边玩边学修仙 HTML 单机游戏
> 当前版本：**v4.3.9**（语文·选必下第一单元古诗词深度包）
> 上一版：v4.3.8（多玩法 × 四段式深度讲义）
> 更新日期：2026-07-22

---

## 一、用户是谁 · 要什么

- **身份**：福建莆田四中高二理科生，物化地组合
- **基础**：自评"不太好"，希望循序渐进
- **形式**：单机 HTML，双击即开，手机电脑都能用
- **v4.3.9 触发的诉求**：期末考试范围就是老师给的"选必下第一单元古诗词滚动小纸条 1-10"，直接对应

**用户开发偏好（雷打不动）**：
- 每完成一个文件立即 UploadFileWrapper 上传——沙盒可能随时被回收，白干过 2 次
- 对接文档要写详细——就是防止沙箱丢失后接手 AI 摸不着头脑
- **不要停** —— 一路推进，中途别问东问西打断
- Token 管够，但也别浪

---

## 二、v4.3.9 到底做了什么（速览）

### 语文·选必下第一单元古诗词 · 7 篇独立秘籍

追加到 `CHINESE_MANUALS`（原 chn_m1~m9 完全不动）：

| id | 标题 | 对应小纸条 |
|-----|------|-----------|
| `chn_xbx_mang` | 《氓·卫风》 | 1 |
| `chn_xbx_lisao` | 《离骚》 | 2 + 3 |
| `chn_xbx_kongque` | 《孔雀东南飞》 | 4 + 5 |
| `chn_xbx_shudao` | 《蜀道难》 | 6 + 7 |
| `chn_xbx_shuxiang` | 《蜀相》 | 8 |
| `chn_xbx_wanghaichao` | 《望海潮》 | 9 |
| `chn_xbx_yangzhouman` | 《扬州慢》 | 10 |

**素材来源**：老师给的《【6.10维叶语文】选必下重点知识复习滚动小纸条1-10（检测版）》 4783 字 .doc

**覆盖度**：老师原文 **106 个加点词、59 条情境默写** 零遗漏；检测版空括号全部按参考答案补齐。

**总量**：117 张闪卡 · 30 个拼盘 · 28 道分步题步骤

---

### 语文特化三段式讲义（区别于数学物理的四段式）

数学物理用的是"why → pitfalls → mnemonic → reflex"（理科反射建构）。
语文因为学习模式完全不同，改为特化三段式：

| 段落 | 数据字段 | 内容 |
|------|---------|------|
| 📖 字词考点 | `points[].keyWords[]` | 逐词讲考什么，含字音字形/古今异义/同类联想 |
| 🎨 意象与手法 | `points[].imagery` | 意象、手法、情感、文学史地位 |
| 🎯 情境默写 | `points[].dictation[]` | 情境提示 → 原句反射 |

`LM.startDeepDive` 已加语文分支：
- id 以 `chn_xbx_` 开头，或 `deepDive.points[0].keyWords` 存在 → 走 `renderChineseDeepDive`
- 其他走原四段式渲染

---

## 三、项目结构（v4.3.9）

```
wendao/
├── index.html                                    # 首页
├── subjects/
│   ├── math.html / physics.html / chemistry.html
│   ├── geography.html / english.html
│   └── chinese.html                              # v4.3.9 尾部新增 3 个脚本
├── assets/
│   ├── learning-modes-v438.js                    # v4.3.8 4 种玩法主引擎（不动）
│   ├── learning-modes-loader-v438.js             # v4.3.8 挂载器（不动）
│   ├── learning-modes-chinese-patch-v439.js  🆕  # v4.3.9 语文渲染补丁 + Loader 扩展
│   └── ...v437/v436 各种老补丁
├── data/
│   ├── chinese-manual.js                         # 原 9 篇（不动）
│   ├── chinese-xbx-manual-v439.js            🆕  # v4.3.9 追加 7 篇独立秘籍
│   ├── deep-dive-chinese-v439.js             🆕  # v4.3.9 语文手写深度讲义
│   ├── deep-dive-math-v438.js                    # v4.3.8 数学 10 章
│   ├── deep-dive-physics-v438.js                 # v4.3.8 物理 10 章
│   ├── deep-dive-fallback-v438.js                # 兜底
│   └── ...
├── CHANGELOG-v4.3.5g.md ~ CHANGELOG-v4.3.9.md
└── HANDOFF-v4.3.5j.md, HANDOFF-v4.3.6b.md, HANDOFF-v4.3.8.md, HANDOFF-v4.3.9.md
```

---

## 四、加载顺序（chinese.html 尾部）

**顺序不能错**——数据必须在 loader 前、patch 必须在最后：

```html
<!-- v4.3.8 主引擎 -->
<script src="../data/deep-dive-fallback-v438.js"></script>
<script src="../data/deep-dive-math-v438.js"></script>
<script src="../data/deep-dive-physics-v438.js"></script>
<script src="../assets/learning-modes-v438.js"></script>
<script src="../assets/learning-modes-loader-v438.js"></script>

<!-- v4.3.9 语文包（必须在 loader 之后） -->
<script src="../data/deep-dive-chinese-v439.js"></script>       <!-- 数据先 -->
<script src="../data/chinese-xbx-manual-v439.js"></script>       <!-- 追加秘籍 -->
<script src="../assets/learning-modes-chinese-patch-v439.js"></script>  <!-- patch 最后 -->
```

---

## 五、核心 API（下一版接手 AI 必看）

### 语文深度讲义数据结构
```js
{
  subtitle: '一句话点题',
  points: [{
    title: '章节标题',
    keyWords: [
      { word: '抱布贸丝', meaning: '贸：交易，交换（不是"贸然"的贸）' },
      ...
    ],
    imagery: '【核心意象·xxx】... <br>【手法·xxx】... （HTML 允许）',
    dictation: [
      { hint: '写女子勤劳的两句', text: '三岁为妇，靡室劳矣...' },
      ...
    ]
  }, ...],
  flashcards: [{ front, back }, ...],
  puzzles: [{ formula: 'a + b ≥ ...', tip }, ...],  // 空格分 token
  stepExamples: [{ stem, steps: [{ ask, type, options, answerIndex, hint, explain }] }],
  _handwritten: true
}
```

### 挂载映射（LMLoader 扩展）
```js
MAP = {
  'chn_xbx_mang':         'chinese_mang',
  'chn_xbx_lisao':        'chinese_lisao',
  'chn_xbx_kongque':      'chinese_kongque',
  'chn_xbx_shudao':       'chinese_shudao',
  'chn_xbx_shuxiang':     'chinese_shuxiang',
  'chn_xbx_wanghaichao':  'chinese_wanghaichao',
  'chn_xbx_yangzhouman':  'chinese_yangzhouman'
}
```

`patchLoader` 会**清掉 fallback 再强制挂手写**（关键 bug 修复见第七节）。

---

## 六、v4.3.9 已知问题 / 未做

- ❌ **老师给的化学 4 大模块** 未使用（本轮时间给了语文）——已在 zip 包 `materials/chem-element.zip` 里
- ❌ **老师给的数学 18 讲 PPTX** 未使用——在 `materials/math.zip` 里
- ❌ **⚡ 雷劫限时闯关** 仍未做（用户票选第 5 名的玩法）
- ⚠️ `chn_m4 《古诗意境谱》` 和 `chn_m8 《名篇默写宝鉴》` 这两篇老秘籍与 v4.3.9 新秘籍**内容有重叠**（都涉及古诗词默写）——目前是并存，用户点开老的看到聚合内容、点开新的看到分篇内容。日后可能要做迁移

---

## 七、给下一版（v4.4.0）AI 的建议

### 优先级 1：化学 4 大模块手写讲义
- 用户老师给的 zip 包（`materials/chem-element.zip` 75MB）：
  - `01 化学物质及其变化` / `02 化学计量` / `03 金属及其化合物` / `04 非金属及其化合物`
  - 附加：无机化合物转化方程式展示.pdf + 有机命名提升版.doc
- **用户是物化地选手，化学讲义空白是当前最大短板**
- 按 v4.3.9 语文的套路：追加 `chem_xbx_*` 独立秘籍 + 手写 deepDive
- 化学要不要"三段式"变种？我建议：
  - 📖 反应规律（keyReactions）——方程式为主
  - 🎨 现象与实验（experiment）——颜色、气味、装置图
  - 🎯 高频陷阱（pitfalls）——离子共存、氧化还原易错

### 优先级 2：数学讲义升级
- `materials/math.zip` 里 18 讲 PPTX 每讲配"课后达标 分级演练"
- 可以做进 **⚡ 雷劫限时闯关**（用户票选第 5 名的玩法）
- v4.3.8 数学 10 章讲义可以再升级到"辅导班"级别

### 已经踩过的坑（v4.3.9 独有）

1. **兜底 fallback 抢先挂载覆盖 bug**（关键！）
   - v438 Loader 会给<b>所有</b> manual 挂 fallback deepDive
   - v439 patch 如果检查 `m.deepDive` 已存在就跳过，会导致手写讲义永远挂不上
   - **修复**：patchLoader 在扫描时先 `m.deepDive = null` 清掉 fallback，再让手写覆盖
   - 位置：`learning-modes-chinese-patch-v439.js` 里 `patchLoader()` 函数第 ~110 行

2. **加载顺序陷阱**
   - v4.3.8 的 loader 会在 DOMContentLoaded 后立刻扫全部 manual 挂 fallback
   - v4.3.9 的 patch 必须放在 v4.3.8 loader 之后，用 `setTimeout(ready, 80)` 保证晚一步执行

3. **id 命名与老 manual 不冲突**
   - 老 manual 用 `chn_m1~m9`
   - 新的用 `chn_xbx_*`（选必下拼音首字母）保证 id 唯一

### 复现 v4.3.9 验证（Node）
```bash
cd wendao
node -e "
global.window = global;
global.document = { readyState:'complete', addEventListener:(e,f)=>e==='DOMContentLoaded'&&f(),
  head:{appendChild:()=>{}}, body:{appendChild:()=>{}},
  getElementById:()=>null, createElement:()=>({dataset:{},style:{},addEventListener:()=>{},appendChild:()=>{},querySelectorAll:()=>[],querySelector:()=>null,remove:()=>{},classList:{add:()=>{},remove:()=>{}},onclick:null,innerHTML:''}),
  querySelectorAll:()=>[], querySelector:()=>null };
global.setTimeout = setTimeout;
global.MutationObserver = function(){ return { observe:()=>{} } };
require('./data/chinese-manual.js');
require('./assets/learning-modes-v438.js');
require('./data/deep-dive-fallback-v438.js');
require('./assets/learning-modes-loader-v438.js');
require('./data/deep-dive-chinese-v439.js');
require('./data/chinese-xbx-manual-v439.js');
require('./assets/learning-modes-chinese-patch-v439.js');
setTimeout(()=>{
  const xbx = CHINESE_MANUALS.slice(-7);
  console.log('手写命中:', xbx.filter(m=>m.deepDive&&m.deepDive._handwritten).length, '/ 7');
}, 300);
"
```

预期：`手写命中: 7 / 7`

---

## 八、版本关系速查

| 版本 | 主线 |
|------|------|
| v4.2 | 沉浸参悟引擎 |
| v4.3.5 涅槃 | 洞府/斩妖场平衡 |
| v4.3.6 | 知识图谱、智能出题 |
| v4.3.7 | 题库清洗 + 高质量真题合并 |
| v4.3.8 | 4 种玩法引擎 + 四段式深度讲义（数学物理各 10 章手写） |
| **v4.3.9**（本版）| **语文·选必下第一单元古诗词深度包 · 7 篇手写** |
| v4.4.0（未做）| 化学 4 大模块手写 / 数学升级 / 雷劫玩法 |

---

**版本号**：v4.3.9
**发布日期**：2026-07-22
**接手人给下一位接手人的一句话**：语文这块用老师原文一字不改做完了 7 篇（覆盖期末范围）。用户还有化学 4 大模块和数学 18 讲 PPTX 的一手素材没用，下版本要么做化学讲义（用户是物化地，最急），要么做雷劫玩法（用户票选第 5 名）。老玩法一如既往不要动。
