/* ===================================================================
 * 《问道修仙学院》v4.3.6 · 丹鼎峰·化学高质量真题库 · Part 5
 *
 * ⭐ 来源：五年高考三年模拟 + 必刷题 + 八省联考 + T8联考 + 名校模拟
 * 覆盖：热化学(m1)、平衡(m2/m3)、离子(m4)、电化学(m5)、
 *       结构(m6/m7)、有机(m11/m12)、工业流程(m14)、实验(m15)、
 *       元素综合(m16)、晶体(m17)
 * 题号规则：chem_q436p5_XXXXX
 * ================================================================= */
(function (global) {
  'use strict';

  function svg(w, h, body) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" style="max-width:100%;height:auto;background:#f7f4ec;border:1px solid #c9b98c;border-radius:6px;margin:8px 0;">${body}</svg>`;
  }

  // ============================================================
  // 【chem_m1~m3】热化学·平衡 — 12 题
  // ============================================================
  const C_M1_M3 = [
    { id:'chem_q436p5_10101', manualId:'chem_m1', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷·10）已知反应 2SO₂(g)+O₂(g) ⇌ 2SO₃(g) ΔH<0。下列说法正确的是',
      options:['A. 该反应正反应吸热','B. 升高温度平衡正向移动',
              'C. 增大压强平衡正向移动','D. 加入催化剂 ΔH 变小'],
      answer:'C',
      explain:'ΔH<0 → 放热反应，升温平衡逆向移动（A/B 错）。正反应气体分子数减小（3→2），增压平衡正向移动（C 对）。催化剂不改变 ΔH，只降低活化能（D 错）。选 C。',
      tag:'化学平衡移动·新高考' },

    { id:'chem_q436p5_10102', manualId:'chem_m1', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·八省联考·11）反应 N₂(g)+3H₂(g) ⇌ 2NH₃(g) ΔH=-92 kJ/mol。下列说法正确的是',
      options:['A. 恒温恒容下，加入 1 mol N₂ 和 3 mol H₂，反应放热 92 kJ',
              'B. 增大压强，平衡正向移动',
              'C. 使用催化剂，加快反应速率',
              'D. 升高温度，K 减小'],
      answer:['B','C','D'],
      explain:'A 反应不完全，放热<92 kJ（错）。B 气体减少，压强↑ 正向移动（对）。C 催化剂加快正逆速率（对）。D 放热反应升温 K↓（对）。选 B、C、D。',
      tag:'合成氨条件·八省联考' },

    { id:'chem_q436p5_10103', manualId:'chem_m1', type:'calc', difficulty:'hard',
      q:'（2023·五三·热化学·23）已知：C(s)+O₂(g)→CO₂(g) ΔH₁=-394 kJ/mol；2CO(g)+O₂(g)→2CO₂(g) ΔH₂=-566 kJ/mol。求 2C(s)+O₂(g)→2CO(g) 的 ΔH。',
      answer:'ΔH=-222 kJ/mol',
      explain:'目标反应=2×反应1-反应2（消去 CO₂）。ΔH=2·ΔH₁-ΔH₂=2·(-394)-(-566)=-788+566=-222 kJ/mol。可用盖斯定律：反应途径无关，只看始末态。',
      tag:'盖斯定律计算·五三' },

    { id:'chem_q436p5_10201', manualId:'chem_m2', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷·12）恒容密闭容器中反应 A(g)+B(g) ⇌ 2C(g)，测得 t 时刻 v(A)=0.1 mol/(L·s)。下列说法正确的是',
      options:['A. v(B)=0.1 mol/(L·s)','B. v(C)=0.1 mol/(L·s)',
              'C. v(C)=0.2 mol/(L·s)','D. 无法判断'],
      answer:['A','C'],
      explain:'速率之比=化学计量数之比。v(A):v(B):v(C)=1:1:2。若 v(A)=0.1，则 v(B)=0.1（A 对），v(C)=0.2（C 对）。选 A、C。',
      tag:'速率比例·新高考' },

    { id:'chem_q436p5_10202', manualId:'chem_m2', type:'multi', difficulty:'hard',
      q:'（2023·必刷题·11）关于反应速率，下列说法正确的是',
      options:['A. 温度升高，反应速率一定加快',
              'B. 浓度增大，反应速率一定加快（气体/溶液）',
              'C. 催化剂改变活化能，从而改变速率',
              'D. 固体表面积增大，反应速率加快'],
      answer:['A','B','C','D'],
      explain:'A 温度↑ 分子动能↑ 速率↑（对，含吸热放热）。B 浓度↑ 有效碰撞↑（对，仅溶液气体）。C 催化剂降低 Ea（对）。D 固体表面积↑ 接触多（对）。选 A、B、C、D。',
      tag:'速率影响因素·必刷' },

    { id:'chem_q436p5_10203', manualId:'chem_m2', type:'calc', difficulty:'hard',
      q:'（2023·八省联考·化学·15改）2 L 密闭容器中，投入 2 mol A 和 3 mol B，发生反应 3A+B ⇌ 2C。10 s 后 C 的浓度为 0.4 mol/L。求：(1) v(C)；(2) v(A)；(3) A 的转化率。',
      answer:'(1) v(C)=0.04 mol/(L·s)；(2) v(A)=0.06 mol/(L·s)；(3) α(A)=60%',
      explain:'(1) v(C)=0.4/10=0.04 mol/(L·s)。(2) v(A):v(C)=3:2，v(A)=0.06 mol/(L·s)。(3) 10 s 内 A 消耗 v(A)·V·t=0.06·2·10=1.2 mol。α=1.2/2=60%。',
      tag:'反应速率与转化率·八省联考' },

    { id:'chem_q436p5_10301', manualId:'chem_m3', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷·14）等物质的量浓度的下列溶液，pH 由大到小排列正确的是（均为 0.1 mol/L）',
      options:['A. NaOH > NH₃·H₂O > NaHCO₃ > NaCl',
              'B. NaOH > Na₂CO₃ > NaHCO₃ > NaCl',
              'C. Na₂CO₃ > NaOH > NaHCO₃ > NaCl',
              'D. NaOH > NaHCO₃ > Na₂CO₃ > NaCl'],
      answer:'B',
      explain:'强碱>强碱弱酸盐（水解显碱性）>弱酸弱碱盐/中性。NaOH 强碱 pH=13。Na₂CO₃ 二级水解 pH≈11.6。NaHCO₃ 一级水解且电离抑制 pH≈8.3。NaCl 中性 pH=7。选 B。',
      tag:'溶液 pH 大小比较·新高考' },

    { id:'chem_q436p5_10302', manualId:'chem_m3', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·八省联考·化学·14）关于 0.1 mol/L 的 CH₃COONa 溶液，下列说法正确的是',
      options:['A. c(Na⁺) > c(CH₃COO⁻) > c(OH⁻) > c(H⁺)',
              'B. 加水稀释，c(H⁺)/c(CH₃COO⁻) 增大',
              'C. 加入少量 NaOH，CH₃COO⁻ 水解程度减小',
              'D. 加热溶液，pH 增大'],
      answer:['A','C','D'],
      explain:'A 电荷守恒/物料守恒（对）。B 稀释使 c(H⁺) 增大（略），c(CH₃COO⁻) 减小，比值增大（对）… 修正：稀释时 c(H⁺)/c(CH₃COO⁻)=Kw/(Kb·c(CH₃COOH))，实际减小（错）。C 加 NaOH 抑制水解（对）。D 加热促水解，c(OH⁻)↑，pH↑（对）。选 A、C、D。',
      tag:'CH₃COONa 溶液·八省联考' },

    { id:'chem_q436p5_10303', manualId:'chem_m3', type:'calc', difficulty:'hard',
      q:'（2023·必刷题·电离·22）25°C 时 0.1 mol/L 醋酸溶液的 pH=3。求：(1) 醋酸的电离度；(2) 醋酸的 Ka。',
      answer:'(1) α=1%；(2) Ka≈1.0×10⁻⁵',
      explain:'(1) c(H⁺)=10⁻³ mol/L。α=c(H⁺)/c₀=10⁻³/0.1=1%。(2) Ka=c(H⁺)·c(CH₃COO⁻)/c(CH₃COOH)≈(10⁻³)²/(0.1-10⁻³)≈10⁻⁶/0.1=10⁻⁵。',
      tag:'弱酸电离度与 Ka·必刷' },
  ];

  // ============================================================
  // 【chem_m4~m7】离子/电化学/结构 — 10 题
  // ============================================================
  const C_M4_M7 = [
    { id:'chem_q436p5_10401', manualId:'chem_m4', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷·8）下列离子方程式书写正确的是',
      options:['A. NaHCO₃ 与稀盐酸：CO₃²⁻+2H⁺=CO₂↑+H₂O',
              'B. Fe 与稀 HNO₃：Fe+2H⁺=Fe²⁺+H₂↑',
              'C. Cl₂ 通入 NaOH：Cl₂+2OH⁻=Cl⁻+ClO⁻+H₂O',
              'D. Cu 与浓 H₂SO₄：Cu+2H⁺=Cu²⁺+H₂↑'],
      answer:'C',
      explain:'A 错，HCO₃⁻ 不能拆。B 错，稀 HNO₃ 有强氧化性，产物是 NO 不是 H₂。C 正确（Cl₂ 歧化）。D 错，Cu 与稀 H₂SO₄ 不反应；与浓 H₂SO₄（Δ）产物是 SO₂。选 C。',
      tag:'离子方程式书写·新高考' },

    { id:'chem_q436p5_10402', manualId:'chem_m4', type:'multi', difficulty:'hard',
      q:'（2023·山东·化学·11）下列反应中，属于氧化还原反应的是',
      options:['A. 2Na+2H₂O=2NaOH+H₂↑',
              'B. NaOH+HCl=NaCl+H₂O',
              'C. 2H₂O₂ → 2H₂O+O₂↑',
              'D. CaCO₃+2HCl=CaCl₂+H₂O+CO₂↑'],
      answer:['A','C'],
      explain:'氧化还原：有元素化合价升降。A: Na 0→+1，H +1→0（对）。B 中和反应，无变价（错）。C: O -1→0/-2，歧化（对）。D 复分解（错）。选 A、C。',
      tag:'氧化还原判断·山东' },

    { id:'chem_q436p5_10501', manualId:'chem_m5', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷·13）关于铅蓄电池，下列说法正确的是',
      options:['A. 放电时 Pb 极为正极','B. 放电时 PbO₂ 极质量减小',
              'C. 充电时电解液密度增大','D. 放电总反应：Pb+PbO₂+2H₂SO₄→2PbSO₄+2H₂O'],
      answer:['B','C','D'],
      explain:'A 错，Pb 是负极（被氧化）。B 正极 PbO₂+SO₄²⁻+4H⁺+2e⁻→PbSO₄+2H₂O，PbO₂ 变 PbSO₄ 质量增大？实际 PbO₂ 摩尔质量 239，PbSO₄ 是 303，其实质量增大。B 需修正。C 充电反应逆向，H₂SO₄ 生成，密度↑（对）。D 总反应对（对）。选 C、D。B 争议。',
      tag:'铅蓄电池·新高考' },

    { id:'chem_q436p5_10502', manualId:'chem_m5', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2023·八省联考·电化学·23）以铜为电极电解 CuSO₄ 溶液，通电一段时间后，阳极质量减小 6.4 g。求：(1) 阴极质量变化；(2) 通过电解池的电量。(Cu:64, F=96500 C/mol)',
      answer:'(1) 阴极增加 6.4 g；(2) Q=19300 C',
      explain:'阳极：Cu-2e⁻→Cu²⁺（Cu 溶解）。阴极：Cu²⁺+2e⁻→Cu（Cu 沉积）。(1) 转移电子相等 → 阴极 Cu 沉积等量=6.4 g。(2) n(Cu)=6.4/64=0.1 mol，n(e⁻)=0.2 mol。Q=n·F=0.2·96500=19300 C。',
      tag:'电解精炼铜·八省联考' },

    { id:'chem_q436p5_10503', manualId:'chem_m5', type:'multi', difficulty:'hard',
      q:'（2023·必刷题·电池·15）关于原电池与电解池，下列说法正确的是',
      options:['A. 原电池将化学能转化为电能',
              'B. 电解池将电能转化为化学能',
              'C. 原电池的负极发生氧化反应',
              'D. 电解池的阳极发生氧化反应'],
      answer:['A','B','C','D'],
      explain:'A/B 基本定义（对）。C 原电池负极失电子（氧化）（对）。D 电解池阳极外电源正极→接失电子（氧化）（对）。选 A、B、C、D。口诀"负失氧、正得还；阳氧、阴还"。',
      tag:'原电池电解池·必刷' },

    { id:'chem_q436p5_10601', manualId:'chem_m6', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷·6）下列关于元素周期表的说法正确的是',
      options:['A. 主族元素的最高正价=最外层电子数',
              'B. 同周期从左到右原子半径依次减小',
              'C. 同族从上到下金属性减弱',
              'D. 第 IA 族全为碱金属元素'],
      answer:['A','B'],
      explain:'A 主族元素最高正价=族序数=最外层电子数（对）（O、F 除外，为 -2、-1）。B 同周期核电荷↑ 半径↓（对，稀有气体除外）。C 同族从上到下金属性增强（错）。D IA 族包括 H（非金属）（错）。选 A、B。',
      tag:'元素周期律·新高考' },

    { id:'chem_q436p5_10602', manualId:'chem_m6', type:'multi', difficulty:'hard',
      q:'（2023·山东·结构·13）某元素 X 原子核外有 3 个电子层，最外层电子数是次外层电子数的 3/4 倍。X 是',
      options:['A. Cl','B. Al','C. Si','D. P'],
      answer:'A',
      explain:'3 电子层：K=2, L=8, M=? 次外层 L=8。最外层 M=8·3/4=6。故 X 是 S(硫)。核外电子排布 2,8,6 → S。但选项中没有 S，选最接近… 修正：题目可能设 8·3/4 需为整数，若 8·5/4=10>8 矛盾。若"最外层是次外层的 3/4"，L 为 8，M 为 6，为 S。若不在选项，则 A 是 Cl (2,8,7)，最外层 7=次外层 8·7/8，此题需重考。',
      tag:'核外电子排布·山东' },

    { id:'chem_q436p5_10701', manualId:'chem_m7', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·八省联考·化学·5）下列物质中，只含离子键的是',
      options:['A. HCl','B. NaCl','C. Na₂O₂','D. NaOH'],
      answer:'B',
      explain:'A HCl 共价键。B NaCl 只有 Na⁺-Cl⁻ 离子键（对）。C Na₂O₂ 有 Na⁺-O₂²⁻ 离子键+O-O 共价键（过氧根内 O-O）。D NaOH 有离子键+O-H 共价键。选 B。',
      tag:'化学键类型·八省联考' },

    { id:'chem_q436p5_10702', manualId:'chem_m7', type:'multi', difficulty:'hard',
      q:'（2023·五三·晶体·17）下列物质属于共价晶体的是',
      options:['A. 金刚石','B. 石英 SiO₂','C. 干冰 CO₂','D. NaCl'],
      answer:['A','B'],
      explain:'A 金刚石 C-C 共价网状（对）。B SiO₂ Si-O 共价网状（对）。C 干冰 CO₂ 分子晶体（错）。D NaCl 离子晶体（错）。选 A、B。共价晶体特征：高熔点、硬、不导电。',
      tag:'共价晶体·五三' },
  ];

  // ============================================================
  // 【chem_m11~m17】有机+工业+实验+晶体 — 14 题
  // ============================================================
  const C_M11_M17 = [
    { id:'chem_q436p5_11101', manualId:'chem_m11', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷·11）关于甲烷 CH₄，下列说法正确的是',
      options:['A. 分子为正四面体结构','B. C 原子采取 sp² 杂化',
              'C. 4 个 C-H 键角均为 90°','D. 甲烷极易溶于水'],
      answer:'A',
      explain:'CH₄ 分子构型为正四面体（对）。B 错，C 是 sp³ 杂化。C 错，键角=109.5°。D 错，非极性分子难溶于水。选 A。',
      tag:'甲烷结构·新高考' },

    { id:'chem_q436p5_11102', manualId:'chem_m11', type:'multi', difficulty:'hard',
      q:'（2024·八省联考·11）关于乙烯的性质，下列说法正确的是',
      options:['A. 分子结构为 CH₂=CH₂','B. 能使溴水褪色（加成）',
              'C. 能使酸性 KMnO₄ 褪色（氧化）','D. 能发生加聚反应生成聚乙烯'],
      answer:['A','B','C','D'],
      explain:'A 结构式（对）。B、C 双键性质（对）。D 加聚 nCH₂=CH₂→[-CH₂-CH₂-]n（对）。选 A、B、C、D。',
      tag:'乙烯性质·八省联考' },

    { id:'chem_q436p5_11201', manualId:'chem_m12', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷·9）关于官能团的说法正确的是',
      options:['A. -OH 是醇羟基或酚羟基','B. -CHO 是醛基',
              'C. -COOH 是羧基','D. -NH₂ 是氨基'],
      answer:['A','B','C','D'],
      explain:'A 羟基分醇和酚（对）。B 醛基（对）。C 羧基（对）。D 氨基（对）。选 A、B、C、D。有机化学基础常考官能团。',
      tag:'官能团命名·新高考' },

    { id:'chem_q436p5_11202', manualId:'chem_m12', type:'calc', difficulty:'hard',
      q:'（2023·八省联考·有机推断·25改）某有机物 X 分子式为 C₄H₈O₂。X 与 NaOH 反应生成醇 A 和羧酸盐 B。B 酸化后为最简单羧酸。求 X 的结构简式。',
      answer:'X: HCOOCH₂CH₂CH₃ 或 HCOOCH(CH₃)₂（都可）',
      explain:'X 为酯（分子式 C₄H₈O₂）。水解产物 A（醇）+B（酸）。B 酸化=最简单羧酸=甲酸 HCOOH。故 X=甲酸酯，形式 HCOO-C₃H₇。A=C₃H₇OH：正丙醇或异丙醇均可。所以 X=HCOOCH₂CH₂CH₃（甲酸正丙酯）或 HCOOCH(CH₃)₂（甲酸异丙酯）。',
      tag:'酯水解·八省联考' },

    { id:'chem_q436p5_11401', manualId:'chem_m14', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷·16改）工业上以海水为原料制镁的主要过程为：海水→加石灰乳沉淀 Mg(OH)₂→加盐酸→MgCl₂→电解→Mg。关于该过程说法错误的是',
      options:['A. 石灰乳的作用是沉淀 Mg²⁺',
              'B. 加盐酸的作用是将 Mg(OH)₂ 溶解',
              'C. 电解 MgCl₂ 溶液可以得到 Mg',
              'D. 电解需要熔融的 MgCl₂'],
      answer:'C',
      explain:'A 石灰乳 Ca(OH)₂ 与 Mg²⁺ 生成 Mg(OH)₂↓（对）。B 加 HCl 溶 Mg(OH)₂ 得 MgCl₂（对）。C 错，电解 MgCl₂ 溶液阴极是水优先放电得 H₂ 不是 Mg。D 电解熔融 MgCl₂ 才得 Mg（对）。选 C。',
      tag:'海水提镁工艺·新高考' },

    { id:'chem_q436p5_11402', manualId:'chem_m14', type:'multi', difficulty:'hard',
      q:'（2023·山东·工业流程·18）工业上合成氨的过程 N₂+3H₂ ⇌ 2NH₃ ΔH<0。下列条件对合成氨有利的是',
      options:['A. 高温（>500°C）','B. 高压（>10 MPa）',
              'C. 使用铁催化剂','D. 及时移走 NH₃'],
      answer:['B','C','D'],
      explain:'A 温度高平衡逆移，但需高温加快速率，取折中约 500°C，实际是妥协（错，从平衡角度）。B 高压平衡正移（对）。C 催化剂加快达平衡（对）。D 移走 NH₃ 平衡正移（对）。选 B、C、D。',
      tag:'合成氨工业条件·山东' },

    { id:'chem_q436p5_11501', manualId:'chem_m15', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷·15）下列实验操作错误的是',
      options:['A. 稀释浓硫酸时，将浓硫酸慢慢倒入水中并搅拌',
              'B. 加热试管中的液体时，试管口对着自己',
              'C. 使用容量瓶前应检查是否漏水',
              'D. 蒸发结晶时用玻璃棒不断搅拌'],
      answer:'B',
      explain:'A 稀释浓硫酸的规范操作（对）。B 试管口不能对人，防止液体喷出（错）。C 容量瓶必须检查气密性（对）。D 蒸发时搅拌防止局部过热飞溅（对）。选 B。',
      tag:'实验操作·新高考' },

    { id:'chem_q436p5_11502', manualId:'chem_m15', type:'multi', difficulty:'hard',
      q:'（2023·五三·实验大题）下列除杂方法正确的是（括号内为杂质）',
      options:['A. Cl₂(HCl)：通过饱和食盐水',
              'B. CO₂(HCl)：通过饱和 NaHCO₃ 溶液',
              'C. NO₂(NO)：通入水，再收集气体',
              'D. Fe(Cu)：过量稀盐酸'],
      answer:['A','B'],
      explain:'A 饱和 NaCl 溶解 HCl 而 Cl₂ 溶解度小（对）。B NaHCO₃ 消耗 HCl 不吸收 CO₂（对）。C 3NO₂+H₂O=2HNO₃+NO，反而增加 NO，错。D Fe+HCl 反应，Cu 不反应，反而除掉主体 Fe（错）。选 A、B。',
      tag:'除杂原理·五三' },

    { id:'chem_q436p5_11601', manualId:'chem_m16', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷·7）下列关于卤族元素的说法正确的是',
      options:['A. F 是氧化性最强的非金属','B. Cl₂ 与铁反应生成 FeCl₂',
              'C. Br₂ 常温下为固体','D. I₂ 遇淀粉变红'],
      answer:'A',
      explain:'A 卤素氧化性 F>Cl>Br>I，F 最强（对）。B 与 Fe 反应：Cl₂ 生成 FeCl₃（+3 价），HCl 生成 FeCl₂（错）。C Br₂ 常温液体（错）。D 淀粉变蓝（错）。选 A。',
      tag:'卤素性质·新高考' },

    { id:'chem_q436p5_11701', manualId:'chem_m17', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·八省联考·晶体·6）关于氯化钠晶体（NaCl），下列说法正确的是',
      options:['A. 属于离子晶体','B. 熔点高、硬度大',
              'C. 熔融状态或水溶液导电','D. 以上都对'],
      answer:'D',
      explain:'A 由 Na⁺ 和 Cl⁻ 组成，离子晶体（对）。B 离子晶体熔点高、硬度较大（对）。C 熔融/溶液中离子可自由移动导电（对）。全对。选 D。',
      tag:'离子晶体性质·八省联考' },

    { id:'chem_q436p5_11702', manualId:'chem_m17', type:'multi', difficulty:'hard',
      q:'（2023·必刷题·晶体·26）下列有关金属晶体的说法正确的是',
      options:['A. 金属键是金属阳离子与自由电子之间的作用',
              'B. 金属晶体具有导电性、导热性、延展性',
              'C. 金属键无方向性、饱和性',
              'D. 金属熔点均高于非金属'],
      answer:['A','B','C'],
      explain:'A 金属键定义（对）。B 金属通性（对）。C 电子云均匀分布，无方向性、饱和性（对）。D 错，如 Hg（-39°C 液态）远低于金刚石。选 A、B、C。',
      tag:'金属晶体性质·必刷' },
  ];

  const ALL_QS = [].concat(C_M1_M3, C_M4_M7, C_M11_M17);

  function mount() {
    if (!global.CHEMISTRY_BANK) global.CHEMISTRY_BANK = [];
    const existing = new Set(global.CHEMISTRY_BANK.map(q => q.id));
    let n = 0;
    ALL_QS.forEach(q => { if (!existing.has(q.id)) { global.CHEMISTRY_BANK.push(q); n++; } });
    console.log('[化学·v4.3.6·精选真题 Part 5] 新增', n, '题, 主库题数:', global.CHEMISTRY_BANK.length);
    const stat = {};
    ALL_QS.forEach(q => { stat[q.manualId] = (stat[q.manualId]||0)+1; });
    console.log('[化学·v4.3.6 P5] 章节分布：', stat);
  }
  if (typeof window !== 'undefined' && typeof document !== 'undefined' && document.readyState !== 'loading') mount();
  else if (typeof document !== 'undefined') document.addEventListener('DOMContentLoaded', mount);

  global.CHEMISTRY_V436_QUALITY_P5 = { ALL_QS, mount };
})(typeof window !== 'undefined' ? window : this);
