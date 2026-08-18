# 《问道修仙学院》v4.3.6a 更新日志

## 核心变更：Bug 修复 + 高质量真题库大扩充

### 一、Bug 修复综合补丁（v437a-quality-fix.js）

**修复 4 大用户反馈问题：**

1. **功法跟题目对不上** 
   - 根因1: SQ 索引 `_idxCache` 只在首次 pick 时计算并缓存，后加载的 quality patch 里的新题不进 byManual 索引
   - 根因2: 老 physics-bank.js 里大量题 manualId 错位（比如 phy_m4 应该是"机械波"但塞满了"简谐振动"题）
   - 修复1: SQ.rebuildIdx() 强制重建 + pick 前自动检测长度变化
   - 修复2: reclassify-bank-v437a.js 按题干关键词把错位题重新归类到正确的 manualId
   - 修复3: 兜底改为"宁可空返回，不乱抽全库"，避免功法A抽出功法B的题

2. **初次学习功法时没有详细教学**
   - 根因: 如果 Immersive 引擎加载失败，或 manual.content 为空，就没有 fallback
   - 修复: patchImmersive 增加 fallback，即使 Immersive 引擎不可用也能显示 content 全文

3. **SVG 图例问题**
   - 根因: AutoViz.forQuestion 完全不检查题干里是否已有 `<svg>` 标签，导致重复叠图
   - 修复: patchAutoViz 检测题干里已含 SVG 时跳过自动可视化

4. **互动通道跟知识点无关错开**
   - 根因: interactive 挂到第一卷，但第一卷通常只讲开篇导入，interactive 内容是"全章总结演练"，看起来错位
   - 修复: patchInteractivePlacement 把 interactive 挪到最后一卷（学完后的整体演练）

### 二、题库智能重分类（reclassify-bank-v437a.js）

**按题干关键词把 v4.2 时代错位的 manualId 重新归类：**
- 物理: 约 2340 题重新归位
- 化学: 约 566 题重新归位
- 保留 quality 系列（手工整理的 phy_q437/phy_q436 前缀）不动

### 三、高质量真题库大扩充

**新增 v4.3.6 系列 Part 3-5 手工真题：**

| 学科 | Part 3 | Part 4 | Part 5 | 累计新增 |
|------|--------|--------|--------|----------|
| 物理 | 136    | 53     | 47     | 236      |
| 化学 | 88     | 44     | 29     | 161      |
| 地理 | 62     | 50     | 22     | 134      |
| 数学 | 52     | 44     | 18     | 114      |

**外加：**
- v437-quality3 系列（每科补充）
- math-bank-v438-part1.js（数学薄弱章节加厚 117 题）

### 四、v437a-loader.js 一键装载器

每个 `subjects/*.html` 只需一行：
```html
<script src="../assets/v437a-loader.js"></script>
```

自动完成：
1. 读取 `<body data-sect="physics">` 识别当前学科
2. 按序加载对应学科的所有 quality 补丁
3. 加载 reclassify（题目重分类）
4. 加载 v437a-fix（4 大 bug 修复）

### 五、界面优化

- 音效系统（sound-effects-v437.js）：Web Audio 合成 30+ 种音效
- 学科页面背景（subject-bg-v437.css）：6 科各自专属玻璃拟态背景
- 斩妖场数值平衡（battle-arena-v437-balance.js）：妖兽 HP/ATK 重新平衡

### 六、集成方式

打开 `subjects/physics.html`，可以看到：
```html
<body data-sect="physics">
...
<script src="../assets/physics-bank.js"></script>  <!-- 主题库 -->
<script src="../assets/v437a-loader.js"></script>  <!-- 一键装载所有补丁 -->
<script src="../assets/subject-page.js"></script>   <!-- 学科页面引擎 -->
...
```

### 七、调试

打开浏览器控制台运行：
- `v437aFix.diagnoseAll()` — 查看各科题库健康度
- `v437balance.compareWithPlayer("normal")` — 查看妖兽数值对比
- `SFX.play("correct")` — 测试音效

### 八、下一步

- 继续 Part 6/7/8...（物化地数各科补题至接近 1 万道）
- 语文/英语真题库大扩充
- 更多带 SVG 图的高质量真题

## 4.3.6a 本轮续更（Part 6 接入）
- 接入 physics-bank-v436-quality6.js
- 接入 chemistry-bank-v436-quality6.js
- 接入 geography-bank-v436-quality6.js
- 接入 math-bank-v436-quality6.js
- 更新 v437a-loader.js，自动装载 Part 6 全部补丁
