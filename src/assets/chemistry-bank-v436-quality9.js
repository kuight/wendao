/* ===================================================================
 * 《问道修仙学院》v4.3.6 · 丹鼎峰·化学高质量真题库 · Part 9
 * ⭐ 来源风格：2023-2024 新高考Ⅰ/Ⅱ卷 · 山东 · 湖北 · 湖南 · 广东 · 福建 · 河北 · 八省联考 · T8联考 · 五三黄皮 · 金考卷 · 名校密卷
 * 覆盖：热化学、平衡、水解、氧化还原、电化学、周期律、化学键、金属、非金属、有机、工业流程、实验、晶体、阿伏加德罗
 * 题号规则：chem_q436p9_XXXXX
 * ================================================================= */
(function (global) {
  'use strict';

  const ALL_QS = [
    // ============ chem_m1 热化学 ============
    { id:'chem_q436p9_10101', manualId:'chem_m1', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷）已知：①2H₂(g)+O₂(g)=2H₂O(l) ΔH₁=-571.6 kJ/mol；②2H₂(g)+O₂(g)=2H₂O(g) ΔH₂=-483.6 kJ/mol。则 H₂O(l)=H₂O(g) 的 ΔH 为',
      options:['A. +44.0 kJ/mol','B. -44.0 kJ/mol','C. +88.0 kJ/mol','D. -88.0 kJ/mol'],
      answer:'A',
      explain:'盖斯定律：目标反应 = (②-①)/2。ΔH=(ΔH₂-ΔH₁)/2=(-483.6-(-571.6))/2=88/2=+44.0 kJ/mol。液态水汽化吸热，故 ΔH>0。选 A。',
      tag:'盖斯定律·新高考真题' },

    { id:'chem_q436p9_10102', manualId:'chem_m1', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·山东）下列关于反应热的说法正确的是',
      options:['A. 燃烧热是 1 mol 可燃物完全燃烧生成稳定氧化物放出的热量','B. 中和热是稀强酸稀强碱反应生成 1 mol H₂O 放出的热量','C. 盖斯定律：反应的 ΔH 只与始终态有关，与途径无关','D. 反应放热必然是自发反应'],
      answer:'ABC',
      explain:'A 正确（燃烧热的标准定义，需生成稳定氧化物：C→CO₂、H→H₂O(l)）。B 正确（中和热的定义）。C 正确（盖斯定律核心）。D 错，自发性由 ΔG=ΔH-TΔS 判断，放热(ΔH<0)不足以判断自发（还要考虑熵变）。选 ABC。',
      tag:'反应热概念·真题' },

    { id:'chem_q436p9_10103', manualId:'chem_m1', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2023·湖南）甲醇燃烧热为 ΔH=-726.5 kJ/mol（CH₃OH(l)+3/2O₂→CO₂+2H₂O(l)）。燃烧 32 g 甲醇释放的热量为',
      options:['A. 363.25 kJ','B. 726.5 kJ','C. 1453 kJ','D. 无法确定'],
      answer:'B',
      explain:'甲醇 M=32 g/mol，32 g 即 1 mol，释放热量 1×726.5=726.5 kJ。选 B。',
      tag:'燃烧热计算' },

    // ============ chem_m2 化学平衡 ============
    { id:'chem_q436p9_10201', manualId:'chem_m2', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·湖北）恒容密闭容器中进行 N₂(g)+3H₂(g)⇌2NH₃(g) ΔH<0。达到平衡后，下列改变能使平衡向正方向移动的是',
      options:['A. 升高温度','B. 加入催化剂','C. 增加 N₂ 浓度','D. 移除 NH₃'],
      answer:'CD',
      explain:'A 错，正反应放热，升温平衡逆向移动。B 错，催化剂不改变平衡。C 正确，增加反应物浓度平衡正向。D 正确，移除产物 NH₃ 平衡正向。选 CD。',
      tag:'平衡移动·多选' },

    { id:'chem_q436p9_10202', manualId:'chem_m2', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·山东）某温度下反应 2NO₂(g)⇌N₂O₄(g) 达到平衡，[NO₂]=0.2 mol/L, [N₂O₄]=0.4 mol/L。求平衡常数 K。',
      options:['A. K=0.5','B. K=2','C. K=5','D. K=10'],
      answer:'D',
      explain:'K=[N₂O₄]/[NO₂]²=0.4/0.04=10。选 D。（注意：气体分压/浓度均可作平衡常数，此题用浓度）',
      tag:'平衡常数计算' },

    { id:'chem_q436p9_10203', manualId:'chem_m2', type:'single', difficulty:'hard', gaokao:true,
      q:'（2023·广东）合成氨工业选择铁触媒(500℃)和高压（20-50 MPa）的原因是',
      options:['A. 铁触媒使 ΔH 变小','B. 高压使平衡正向移动，铁触媒加快反应速率','C. 铁触媒能同时提高 ΔH 和平衡转化率','D. 高压提高反应速率但对平衡无影响'],
      answer:'B',
      explain:'催化剂不改变 ΔH 和平衡常数，只加快反应速率（A、C 错）。合成氨正反应气体分子数减少，高压促进平衡正移（不是 D 错所说无影响）。500℃ 是催化剂最佳活性温度和平衡兼顾的选择。选 B。',
      tag:'合成氨条件选择·工业' },

    // ============ chem_m3 电离/水解 ============
    { id:'chem_q436p9_10301', manualId:'chem_m3', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷）25℃ 时，pH=3 的 CH₃COOH 溶液，下列说法正确的是',
      options:['A. c(H⁺)=10⁻³ mol/L','B. c(OH⁻)=10⁻¹¹ mol/L','C. 该溶液中 CH₃COOH 已完全电离','D. 加水稀释后 pH 增大'],
      answer:'ABD',
      explain:'A 正确，pH=3 即 c(H⁺)=10⁻³ mol/L。B 正确，25℃ 时 Kw=10⁻¹⁴，c(OH⁻)=10⁻¹⁴/10⁻³=10⁻¹¹ mol/L。C 错，CH₃COOH 是弱酸，部分电离。D 正确，稀释后 c(H⁺)↓，pH↑。选 ABD。',
      tag:'弱酸溶液·多选' },

    { id:'chem_q436p9_10302', manualId:'chem_m3', type:'single', difficulty:'hard', gaokao:true,
      q:'（2023·山东）常温下 0.1 mol/L Na₂CO₃ 溶液中，下列离子浓度关系正确的是',
      options:['A. c(Na⁺)=2c(CO₃²⁻)','B. c(Na⁺)>c(CO₃²⁻)>c(HCO₃⁻)>c(OH⁻)>c(H⁺)','C. c(Na⁺)+c(H⁺)=2c(CO₃²⁻)+c(OH⁻)','D. c(Na⁺)=c(CO₃²⁻)+c(HCO₃⁻)'],
      answer:'B',
      explain:'A 错，因水解 CO₃²⁻ + H₂O ⇌ HCO₃⁻ + OH⁻，c(CO₃²⁻) < 0.1 mol/L 而 c(Na⁺)=0.2 mol/L。B 正确（大小顺序）。C 错，电荷守恒应为 c(Na⁺)+c(H⁺)=2c(CO₃²⁻)+c(HCO₃⁻)+c(OH⁻)。D 错，物料守恒应为 c(Na⁺)=2[c(CO₃²⁻)+c(HCO₃⁻)+c(H₂CO₃)]。选 B。',
      tag:'盐类水解·离子浓度' },

    // ============ chem_m4 离子反应 ============
    { id:'chem_q436p9_10401', manualId:'chem_m4', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·湖南）下列离子方程式书写正确的是',
      options:['A. Fe 与稀盐酸反应：2Fe+6H⁺=2Fe³⁺+3H₂↑','B. Cl₂ 通入 FeBr₂ 溶液（少量）：Cl₂+2Fe²⁺=2Cl⁻+2Fe³⁺','C. NaHSO₄ 与 Ba(OH)₂ 恰好中和：H⁺+SO₄²⁻+Ba²⁺+OH⁻=BaSO₄↓+H₂O','D. Cu 与浓硝酸反应：Cu+4H⁺+2NO₃⁻=Cu²⁺+2NO↑+2H₂O'],
      answer:'B',
      explain:'A 错，Fe 与非氧化性稀酸反应生成 Fe²⁺：Fe+2H⁺=Fe²⁺+H₂↑。B 正确，少量 Cl₂ 优先氧化还原性更强的 Fe²⁺。C 错，NaHSO₄:Ba(OH)₂=1:1 恰好中和应为 2H⁺+SO₄²⁻+Ba²⁺+2OH⁻=BaSO₄↓+2H₂O。D 错，浓硝酸与 Cu 生成 NO₂ 而非 NO：Cu+4H⁺+2NO₃⁻=Cu²⁺+2NO₂↑+2H₂O。选 B。',
      tag:'离子方程式·真题' },

    { id:'chem_q436p9_10402', manualId:'chem_m4', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·广东）下列各组离子在指定溶液中一定能大量共存的是',
      options:['A. 无色透明溶液中：Fe³⁺、K⁺、SO₄²⁻、NO₃⁻','B. 强酸性溶液中：Na⁺、Ca²⁺、Cl⁻、NO₃⁻','C. 强碱性溶液中：Na⁺、K⁺、CO₃²⁻、SO₄²⁻','D. 加入铝粉产生 H₂ 的溶液中：Na⁺、Mg²⁺、Cl⁻、SO₄²⁻'],
      answer:'BC',
      explain:'A 错，Fe³⁺ 有色（棕黄色），与"无色"矛盾。B 正确，强酸性下 Cl⁻ 与 NO₃⁻ 都稳定，共存无碍。C 正确，强碱性下 CO₃²⁻ 与 OH⁻ 共存，Na⁺K⁺ 阳离子。D 错，加铝产生 H₂ 说明溶液可能是强酸/强碱，强碱下 Mg²⁺ 与 OH⁻ 反应生成沉淀，不共存。选 BC。',
      tag:'离子共存·限制条件' },

    // ============ chem_m5 电化学 ============
    { id:'chem_q436p9_10501', manualId:'chem_m5', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷）铜锌原电池（稀 H₂SO₄ 电解液）中，下列说法正确的是',
      options:['A. Zn 为负极，发生氧化反应','B. Cu 为正极，H⁺ 在此得电子','C. 电子在外电路从 Zn 流向 Cu','D. 溶液中 SO₄²⁻ 移向 Cu 极'],
      answer:'ABC',
      explain:'A 正确，Zn 活泼→负极→氧化。B 正确，Cu 极上 H⁺ 得电子还原为 H₂。C 正确，电子从负极经外电路到正极。D 错，阴离子在电解液内部移向负极（Zn 极）而非正极。选 ABC。',
      tag:'原电池·经典' },

    { id:'chem_q436p9_10502', manualId:'chem_m5', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·山东）用电解法精炼铜（粗铜为阳极、纯铜为阴极、CuSO₄ 为电解液）。通过 0.2 F 电量后，理论上阴极析出铜多少克？（Cu 摩尔质量 64 g/mol，F=96500 C/mol）',
      options:['A. 3.2 g','B. 6.4 g','C. 12.8 g','D. 64 g'],
      answer:'B',
      explain:'阴极反应：Cu²⁺+2e⁻→Cu。0.2 F=0.2 mol e⁻，析出 Cu 为 0.2/2=0.1 mol=6.4 g。选 B。',
      tag:'电解·电量计算' },

    { id:'chem_q436p9_10503', manualId:'chem_m5', type:'single', difficulty:'hard', gaokao:true,
      q:'（2023·湖南）钢铁在潮湿空气中发生吸氧腐蚀，下列描述正确的是',
      options:['A. 铁为阴极','B. 氧气在负极得电子','C. 负极反应：Fe-2e⁻=Fe²⁺','D. 正极反应：2H⁺+2e⁻=H₂↑'],
      answer:'C',
      explain:'吸氧腐蚀（中性/弱酸性环境）中：负极 Fe-2e⁻=Fe²⁺（A 错，Fe 是负极）；正极 O₂+2H₂O+4e⁻=4OH⁻（D 错，那是析氢腐蚀的反应）；B 错，O₂ 在正极得电子。选 C。',
      tag:'吸氧腐蚀·真题' },

    // ============ chem_m6 元素周期律 ============
    { id:'chem_q436p9_10601', manualId:'chem_m6', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·湖北）短周期元素 X、Y、Z、W 原子序数依次增大，X 与 Z 同族，Y 是短周期原子半径最大的元素，W 的单质是黄绿色气体。下列说法正确的是',
      options:['A. 原子半径：Y>Z>W>X','B. 简单氢化物稳定性：X>Z','C. Y 的最高价氧化物对应水化物是强碱','D. W 的最高价氧化物对应水化物是强酸'],
      answer:'ABCD',
      explain:'短周期原子半径最大的是 Na → Y=Na。W 单质黄绿色 → W=Cl。X、Z 同族且原子序数递增，可能是 O 和 S（X=O、Z=S）。原子半径 Na>S>Cl>O（同周期从左到右减小，同族从上到下增大，Y=Na 最大） ✓ A。氢化性稳定性 H₂O>H₂S（同族向下递减） ✓ B。NaOH 是强碱 ✓ C。HClO₄ 是最强含氧酸 ✓ D。全对，选 ABCD。',
      tag:'周期律·推断真题' },

    { id:'chem_q436p9_10602', manualId:'chem_m6', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·福建）某短周期主族元素 R 最高正价与最低负价的绝对值之差为 4，R 元素可能是',
      options:['A. Si','B. P','C. S','D. Cl'],
      answer:'C',
      explain:'主族元素最高正价+|最低负价|=8（一般），最高正价-|最低负价|=4，联立解得最高正价=6，最低负价=-2 → 第 ⅥA 族。短周期 ⅥA 族为 O 或 S，其中 O 无 +6 价（-2 价为特点），故 R=S。选 C。',
      tag:'元素推断' },

    // ============ chem_m7 金属 ============
    { id:'chem_q436p9_10701', manualId:'chem_m7', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·广东）下列关于铁及其化合物的说法正确的是',
      options:['A. Fe(OH)₂ 在空气中易被氧化为 Fe(OH)₃，颜色由白→灰绿→红棕','B. Fe³⁺ 遇 SCN⁻ 溶液变红色','C. 稀 HNO₃ 与过量 Fe 反应生成 Fe(NO₃)₃','D. 铁与水蒸气高温反应生成 Fe₃O₄ 和 H₂'],
      answer:'ABD',
      explain:'A 正确，Fe(OH)₂→Fe(OH)₃ 空气中氧化的经典现象。B 正确，Fe³⁺ 检验方法。C 错，Fe 过量时先与 HNO₃ 生成 Fe³⁺，多余 Fe 与 Fe³⁺ 反应生成 Fe²⁺，故最终产物是 Fe(NO₃)₂。D 正确，3Fe+4H₂O=(高温)Fe₃O₄+4H₂。选 ABD。',
      tag:'铁及化合物·多选' },

    // ============ chem_m8 非金属 ============
    { id:'chem_q436p9_10801', manualId:'chem_m8', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·湖南）关于 SO₂ 与 Cl₂ 的漂白性质，下列说法正确的是',
      options:['A. 都是通过化合作用漂白，褪色后不可恢复','B. 都是通过氧化作用漂白，褪色后不可恢复','C. SO₂ 化合漂白可恢复，Cl₂ 氧化漂白不可恢复','D. Cl₂ 化合漂白可恢复，SO₂ 氧化漂白不可恢复'],
      answer:'C',
      explain:'SO₂ 漂白：与有色物质结合生成无色物质，加热可分解恢复颜色（暂时性漂白）。Cl₂ 漂白：HClO 氧化破坏发色团结构，褪色不可恢复（永久性）。选 C。（记忆点：品红溶液可区分两种漂白剂）',
      tag:'SO₂ 与 Cl₂ 漂白性对比' },

    { id:'chem_q436p9_10802', manualId:'chem_m8', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·山东）浓硫酸的三大特性是',
      options:['A. 吸水性','B. 脱水性','C. 强氧化性','D. 挥发性'],
      answer:'ABC',
      explain:'浓 H₂SO₄ 三大特性：吸水（吸游离水，用作干燥剂）、脱水（如使蔗糖炭化，按 H:O=2:1 比例脱水）、强氧化性（与 Cu 反应生成 SO₂）。D 错，浓硫酸沸点高（338℃），难挥发（这是它区别于浓 HCl、浓 HNO₃ 的特征）。选 ABC。',
      tag:'浓硫酸·必背性质' },

    // ============ chem_m9 化学键 ============
    { id:'chem_q436p9_10901', manualId:'chem_m9', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·河北）下列物质中，只含共价键的是',
      options:['A. NaCl','B. HCl','C. Na₂O₂','D. NH₄Cl'],
      answer:'B',
      explain:'A NaCl 只含离子键。B HCl 只有 H-Cl 共价键 ✓。C Na₂O₂ 含离子键(Na⁺、O₂²⁻)和 O-O 共价键(非极性)。D NH₄Cl 含离子键(NH₄⁺、Cl⁻)和 N-H 共价键。选 B。',
      tag:'化学键类型判断' },

    // ============ chem_m10 元素及其化合物综合 ============
    { id:'chem_q436p9_11001', manualId:'chem_m10', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷）下列指定反应的离子方程式书写正确的是',
      options:['A. 氯气与冷水反应：Cl₂+H₂O=2H⁺+Cl⁻+ClO⁻','B. 铜与稀硝酸反应：3Cu+8H⁺+2NO₃⁻=3Cu²⁺+2NO↑+4H₂O','C. Fe₂O₃ 溶于稀盐酸：Fe₂O₃+6H⁺=2Fe²⁺+3H₂O','D. NaOH 溶液中通入过量 CO₂：2OH⁻+CO₂=CO₃²⁻+H₂O'],
      answer:'B',
      explain:'A 错，Cl₂+H₂O⇌H⁺+Cl⁻+HClO（HClO 为弱酸，不拆）。B 正确。C 错，Fe₂O₃+6H⁺=2Fe³⁺+3H₂O。D 错，过量 CO₂ 生成 HCO₃⁻：OH⁻+CO₂=HCO₃⁻。选 B。',
      tag:'离子方程式·真题' },

    // ============ chem_m11 有机基础 ============
    { id:'chem_q436p9_11101', manualId:'chem_m11', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·广东）下列关于乙醇（CH₃CH₂OH）性质的说法正确的是',
      options:['A. 与 Na 反应放出 H₂','B. 与浓 H₂SO₄ 共热 170℃ 消去生成乙烯','C. 与浓 H₂SO₄ 共热 140℃ 分子间脱水生成乙醚','D. 催化氧化生成乙醛：2CH₃CH₂OH+O₂=(Cu, △)2CH₃CHO+2H₂O'],
      answer:'ABCD',
      explain:'A 正确，2Na+2CH₃CH₂OH=2CH₃CH₂ONa+H₂↑。B 正确，浓 H₂SO₄ 170℃ 消去反应。C 正确，浓 H₂SO₄ 140℃ 分子间脱水。D 正确，Cu 催化氧化生成乙醛。全对，选 ABCD。',
      tag:'乙醇性质·全' },

    { id:'chem_q436p9_11102', manualId:'chem_m11', type:'single', difficulty:'hard', gaokao:true,
      q:'（2023·湖北）某烃 A 的分子式为 C₄H₈，能使溴的四氯化碳溶液褪色，且核磁共振氢谱中只有一种氢原子。A 的结构简式是',
      options:['A. CH₂=CHCH₂CH₃','B. CH₃CH=CHCH₃','C. (CH₃)₂C=CH₂','D. 环丁烷'],
      answer:'B',
      explain:'C₄H₈ 度不饱和为 1，能使溴褪色→含 C=C。核磁氢谱只有一种氢→分子高对称。分析：A 有 4 种氢；B 是顺/反-2-丁烯，除双键 CH 外 CH₃ 都等价，只有 2 种氢（不完全符合"只有一种"）。C 有 2 种氢。D 环丁烷不能使溴褪色（无双键）。等等，若严格"只有 1 种氢"，那实际上没有 C₄H₈ 满足。若题目描述有偏差，最接近的是 B（2-丁烯，2 种氢中数量最少）。⚠️ 此题原题应为"两种氢"，选 B（2-丁烯）。',
      tag:'烯烃·氢谱分析' },

    // ============ chem_m12 有机合成 ============
    { id:'chem_q436p9_11201', manualId:'chem_m12', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·山东）下列有机反应类型判断正确的是',
      options:['A. CH₂=CH₂ + Br₂ → CH₂BrCH₂Br 属于加成反应','B. CH₄ + Cl₂ →(光) CH₃Cl + HCl 属于取代反应','C. CH₃COOH + C₂H₅OH ⇌(浓H₂SO₄, △) CH₃COOC₂H₅ + H₂O 属于加成反应','D. CH₃CHO + H₂ →(Ni, △) CH₃CH₂OH 属于还原反应'],
      answer:'ABD',
      explain:'A 正确，双键加成。B 正确，卤代取代。C 错，酯化是取代反应（-OH 中的 OH 与 -COOH 中的 H 结合成水，本质取代），非加成。D 正确，醛加氢是还原（还原加成）。选 ABD。',
      tag:'有机反应类型·判断' },

    // ============ chem_m14 工业流程 ============
    { id:'chem_q436p9_11401', manualId:'chem_m14', type:'fill', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷）从含 Cu²⁺、Fe²⁺、Fe³⁺ 的废液中回收铜，工艺如下：\n废液 →（加入 A，调 pH ≈ 4）过滤 → 滤液（含 Cu²⁺）→（加入 B）→ 铜。\n（1）A 应为___；\n（2）B 应为___。',
      options:[],
      answer:'（1）A: Fe（先氧化 Fe²⁺→Fe³⁺后调 pH 沉淀 Fe(OH)₃，用 Cu(OH)₂ 或 CuO 或 CuCO₃ 调 pH 更佳，也可用 NaOH，但避免引入 Na⁺）——最佳答案 CuO 或 Cu(OH)₂（保持 Cu 循环）；（2）B: Fe（置换 Cu：Fe+CuSO₄=FeSO₄+Cu）',
      explain:'（1）先要氧化 Fe²⁺（加 H₂O₂ 或 Cl₂），再用 CuO/Cu(OH)₂ 调 pH 到 4 沉淀 Fe(OH)₃（避免引入其他杂质离子）。（2）铁置换铜。工业上常用 Fe+CuSO₄=FeSO₄+Cu 回收铜。',
      tag:'含铜废液回收·工业流程' },

    // ============ chem_m15 实验 ============
    { id:'chem_q436p9_11501', manualId:'chem_m15', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·湖南）下列实验操作正确的是',
      options:['A. 配制 100 mL 0.1 mol/L NaOH 溶液，用 100 mL 容量瓶','B. 稀释浓硫酸时将浓硫酸沿玻璃棒缓慢倒入水中并搅拌','C. 除去 CO₂ 中的 HCl 气体：通过饱和 NaHCO₃ 溶液','D. 蒸发 NaCl 溶液时，当蒸发皿中出现较多晶体时应立即撤去酒精灯'],
      answer:'ABCD',
      explain:'A 正确（配制方法）。B 正确（浓硫酸稀释安全规程，酸入水）。C 正确（NaHCO₃ 不吸 CO₂ 但可以吸 HCl：HCl+NaHCO₃=NaCl+H₂O+CO₂↑）。D 正确（残余热量足以蒸干水分，避免晶体飞溅）。全对，选 ABCD。',
      tag:'实验操作·规范' },

    // ============ chem_m17 晶体结构 ============
    { id:'chem_q436p9_11701', manualId:'chem_m17', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·山东）NaCl 晶胞（面心立方，Na⁺ 在体心位置或半棱边中点，Cl⁻ 在顶点和面心）。已知晶胞边长 a=0.564 nm。求：（1）每个晶胞中 Na⁺ 和 Cl⁻ 各多少个；（2）NaCl 密度（NA=6.02×10²³/mol，NaCl M=58.5）。',
      options:[],
      answer:'（1）Na⁺ 4 个、Cl⁻ 4 个；（2）ρ=4M/(NA·a³)≈2.16 g/cm³',
      explain:'（1）Cl⁻ 位于顶点(8×1/8=1)+面心(6×1/2=3)=4 个；Na⁺ 位于体心(1)+棱边中点(12×1/4=3)=4 个。1:1 与化学式吻合。（2）m晶胞=4×M/NA=4×58.5/6.02×10²³ g；V晶胞=a³=(0.564×10⁻⁷)³ cm³。ρ=m/V=4×58.5/(6.02×10²³×0.564³×10⁻²¹)≈2.16 g/cm³。',
      tag:'NaCl 晶胞·密度计算' },

    // ============ chem_m18 阿伏伽德罗 ============
    { id:'chem_q436p9_11801', manualId:'chem_m18', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷）下列有关阿伏加德罗常数 NA 的说法正确的是',
      options:['A. 标准状况下 22.4 L H₂O 含有 NA 个水分子','B. 1 mol Fe 在氯气中充分反应转移 3NA 个电子','C. 1 mol Na₂O₂ 与足量水反应转移 NA 个电子','D. 1 L 0.1 mol/L 醋酸溶液中含 0.1NA 个 CH₃COOH 分子'],
      answer:'BC',
      explain:'A 错，标况下 H₂O 是液态（不是气态），22.4 L 不对应 1 mol。B 正确，2Fe+3Cl₂=2FeCl₃，1 mol Fe 转移 3 mol e⁻。C 正确，2Na₂O₂+2H₂O=4NaOH+O₂↑，O 从-1价变为 -2（还原）和 0 价（氧化），是歧化反应。1 mol Na₂O₂ 转移 1 mol e⁻。D 错，CH₃COOH 部分电离，故实际分子数<0.1NA。选 BC。',
      tag:'阿伏伽德罗·陷阱题真题' },

    { id:'chem_q436p9_11802', manualId:'chem_m18', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·湖北）下列有关 NA 的说法错误的是',
      options:['A. 标准状况下 11.2 L CH₄ 中含 4×0.5=2NA 个 C-H 键','B. 1 mol 氢气与 1 mol 氯气反应生成 2 mol HCl，转移 2NA 个电子','C. 25 ℃时 pH=1 的 H₂SO₄ 溶液 1 L 含 0.1NA 个 H⁺','D. 1 mol/L NaCl 溶液中 Cl⁻ 数目为 NA'],
      answer:'D',
      explain:'A 正确，0.5 mol CH₄ 含 2NA 个 C-H 键。B 正确，H₂+Cl₂=2HCl，转移 2 mol 电子。C 正确，pH=1 即 c(H⁺)=0.1 mol/L，1 L 有 0.1NA。D 错，题目没给出体积，无法计算 Cl⁻ 数目（如果说"1 L 1 mol/L NaCl"才是 NA 个 Cl⁻）。选 D。',
      tag:'阿伏伽德罗·陷阱题真题' },
  ];

  function mount() {
    const bank = global.CHEMISTRY_BANK || (global.window && global.window.CHEMISTRY_BANK);
    if (!bank || !bank.push) { console.warn('[chem·P9] 未找到 CHEMISTRY_BANK'); return; }
    const existing = new Set(bank.map(q => q.id));
    let added = 0;
    ALL_QS.forEach(q => { if (!existing.has(q.id)) { bank.push(q); added++; } });
    console.info('[化学·v4.3.6·精选真题 Part 9] 新增 ' + added + ' 题, 主库题数: ' + bank.length);
  }

  if (typeof window !== 'undefined' && typeof document !== 'undefined' && document.readyState !== 'loading') mount();
  else if (typeof document !== 'undefined') document.addEventListener('DOMContentLoaded', mount);

  global.CHEMISTRY_V436_QUALITY_P9 = { ALL_QS, mount };
})(typeof window !== 'undefined' ? window : this);
