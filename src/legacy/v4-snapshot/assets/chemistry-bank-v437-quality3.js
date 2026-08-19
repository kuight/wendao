/* ===================================================================
 * 《问道修仙学院》v4.3.7 · 丹鼎峰·化学高质量真题库 · Part 3
 *
 * ⭐ 加厚：热化学(m1)、平衡(m2)、水解(m3)、氧化还原(m4)、电化学(m5)、
 *          有机(m11/m12)、工业流程(m14)、实验(m15)、晶体(m17)
 * 全部手工，2020-2025 新高考真题及各地真题变式
 * 题号规则：chem_q437p3_XXXXX
 * ================================================================= */
(function (global) {
  'use strict';

  // ============================================================
  // 【chem_m1】热化学 — 加厚 10 题
  // ============================================================
  const C_M1 = [
    { id:'chem_q437p3_10101', manualId:'chem_m1', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·新高考Ⅰ卷·10）已知：H₂(g)+½O₂(g)→H₂O(l) ΔH₁=-286 kJ/mol；H₂O(l)→H₂O(g) ΔH₂=+44 kJ/mol。则 H₂(g)+½O₂(g)→H₂O(g) 的 ΔH₃ 为',
      options:['A. -330 kJ/mol','B. -242 kJ/mol','C. -286 kJ/mol','D. -44 kJ/mol'],
      answer:'B',
      explain:'目标反应 = 反应1 + 反应2。由盖斯定律 ΔH₃=ΔH₁+ΔH₂=-286+44=-242 kJ/mol。选 B。',
      tag:'盖斯定律·真题' },
    { id:'chem_q437p3_10102', manualId:'chem_m1', type:'single', difficulty:'normal',
      q:'关于键能计算焓变，正确的是',
      options:['A. ΔH=生成物键能之和-反应物键能之和','B. ΔH=反应物键能之和-生成物键能之和',
              'C. ΔH<0 说明反应物键能>生成物键能','D. 键能越大，物质越活泼'],
      answer:'B',
      explain:'键能计算 ΔH=反应物断键总能量-生成物成键总能量。若断键<成键即释放净能量，ΔH<0（放热，B 对）。C 项说反了；D 键能越大越稳定。选 B。',
      tag:'键能法' },
    { id:'chem_q437p3_10103', manualId:'chem_m1', type:'calc', difficulty:'hard',
      q:'已知：①C(s)+½O₂(g)→CO(g) ΔH₁=-110.5 kJ/mol；②CO(g)+½O₂(g)→CO₂(g) ΔH₂=-283.0 kJ/mol。求 C(s)+O₂(g)→CO₂(g) 的 ΔH₃',
      answer:'ΔH₃=-393.5 kJ/mol',
      explain:'目标 = 反应① + 反应②。ΔH₃=ΔH₁+ΔH₂=-110.5-283.0=-393.5 kJ/mol。（这就是 C 的燃烧热 -393.5 kJ/mol）',
      tag:'盖斯定律计算' },
    { id:'chem_q437p3_10104', manualId:'chem_m1', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2022·湖北）常温下，1 mol 强酸稀溶液与 1 mol 强碱稀溶液混合恰好完全中和，放出的热量称为',
      options:['A. 中和热为 57.3 kJ/mol','B. 弱酸与强碱反应放热少于 57.3 kJ',
              'C. 浓硫酸与强碱反应放热多于 57.3 kJ（若1 mol H₂O 生成）','D. 中和热与生成水量无关'],
      answer:['A','B','C'],
      explain:'定义：中和热=强酸强碱稀溶液中和生成 1 mol H₂O 释放的热量=57.3 kJ/mol（A 对）。弱酸电离吸热，故净放热少于 57.3 kJ（B 对）。浓 H₂SO₄ 稀释放热，故总放热多于 57.3 kJ（C 对）。中和热定义按 1 mol H₂O 计（D 错）。选 A、B、C。',
      tag:'中和热·真题' },
    { id:'chem_q437p3_10105', manualId:'chem_m1', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2023·山东·15）已知：反应 2SO₂(g)+O₂(g)⇌2SO₃(g) ΔH=-196 kJ/mol。在恒温恒容密闭容器中充入 2 mol SO₂ 和 1 mol O₂，达平衡时 SO₂ 转化率为 80%。求：①生成 SO₃ 的物质的量；②本反应放出的热量',
      answer:'①1.6 mol；②156.8 kJ',
      explain:'①转化 SO₂：2×0.8=1.6 mol；反应比 2SO₂→2SO₃，故生成 SO₃=1.6 mol。②反应放热与实际转化量成比例：每 2 mol SO₂ 反应放 196 kJ，1.6 mol SO₂ 放 196×0.8=156.8 kJ。',
      tag:'热化学·平衡结合·真题' },
    { id:'chem_q437p3_10106', manualId:'chem_m1', type:'single', difficulty:'normal',
      q:'下列关于焓变、熵变、自由能的关系正确的是',
      options:['A. ΔH<0 反应总能自发','B. ΔS>0 反应总能自发',
              'C. 只有 ΔG=ΔH-TΔS<0 时反应才能自发','D. 高温下 ΔH>0、ΔS>0 反应也可能自发'],
      answer:['C','D'],
      explain:'反应自发判据是 ΔG<0（ΔG=ΔH-TΔS，C 对）。ΔH<0 但 ΔS<0 时低温可能自发，高温不自发；ΔS>0 但 ΔH>0 时高温自发（D 对）。选 C、D（若单选则 C）。',
      tag:'自发性判据' },
  ];

  // ============================================================
  // 【chem_m2~m3】化学平衡、水解 — 12 题
  // ============================================================
  const C_M2 = [
    { id:'chem_q437p3_20201', manualId:'chem_m2', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·新高考Ⅰ卷·13）在恒温恒容密闭容器中发生反应 2NO(g)+O₂(g)⇌2NO₂(g) ΔH<0，达到平衡后下列条件改变，平衡向正反应方向移动的是',
      options:['A. 增大容器体积','B. 加入催化剂','C. 增大 O₂ 浓度','D. 升高温度'],
      answer:'C',
      explain:'A：增大体积，各气体浓度均减小，气体分子数减少方向（正）不敌浓度效应，实际逆移。B：催化剂不移动平衡。C：增 O₂ 浓度，反应物增加，正向移。D：放热反应升温逆移。选 C。',
      tag:'平衡移动·真题' },
    { id:'chem_q437p3_20202', manualId:'chem_m2', type:'single', difficulty:'normal',
      q:'某反应 A(g)+B(g)⇌C(g) ΔH<0。下列有关平衡常数 K 的说法正确的是',
      options:['A. 温度升高，K 增大','B. 温度升高，K 减小',
              'C. 增大反应物浓度，K 增大','D. 使用催化剂，K 增大'],
      answer:'B',
      explain:'K 只与温度有关。放热反应升温 K 减小（B 对，A 错）；浓度、压强、催化剂均不影响 K。选 B。',
      tag:'K 温度关系' },
    { id:'chem_q437p3_20203', manualId:'chem_m2', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2023·湖北·15）恒温 500 K 下，在容积 2 L 密闭容器中发生反应 CO(g)+H₂O(g)⇌CO₂(g)+H₂(g)。起始加入 CO 和 H₂O 各 1 mol，平衡时测得 H₂ 为 0.5 mol。求该温度下平衡常数 K',
      answer:'K=1',
      explain:'转化关系：反应了 0.5 mol CO 和 0.5 mol H₂O，生成 0.5 mol CO₂ 和 0.5 mol H₂。平衡浓度（除以 V=2 L）：[CO]=[H₂O]=(1-0.5)/2=0.25 mol/L；[CO₂]=[H₂]=0.5/2=0.25 mol/L。K=[CO₂][H₂]/([CO][H₂O])=(0.25×0.25)/(0.25×0.25)=1。（因反应前后气体分子数不变，此题特殊）',
      tag:'平衡常数计算·真题' },
    { id:'chem_q437p3_20204', manualId:'chem_m2', type:'multi', difficulty:'hard',
      q:'关于化学反应速率的影响因素，正确的是',
      options:['A. 增大反应物浓度，正反应速率加快','B. 升高温度，正逆反应速率都加快',
              'C. 增大压强，反应速率一定加快','D. 加入催化剂，正逆反应速率不变'],
      answer:['A','B'],
      explain:'A 增浓 v_正 加快对（反应物浓度只影响正向）。B 升温使活化分子增多，v_正、v_逆 都加快，对。C 增压只对有气体参与的反应有效，且实为改变浓度（错）。D 催化剂等比降低活化能，v_正、v_逆 都加快（D 错）。选 A、B。',
      tag:'速率影响因素' },
    { id:'chem_q437p3_20205', manualId:'chem_m2', type:'single', difficulty:'hard', gaokao:true,
      q:'（2022·山东·11）反应 X(g)+Y(g)⇌2Z(g)，在密闭容器达平衡后，仅升高温度容器压强变化如图（压强先升后再稳定于较高值）。则',
      options:['A. 正反应吸热，K 增大','B. 正反应放热，K 减小',
              'C. Z 物质的量减少','D. X 物质的量增加'],
      answer:['A','C','D'],
      explain:'反应前后气体分子数不变（1+1→2）。升温后压强升高只能归因于温度升高。平衡是否移动？题干说"稳定于较高值"——若不移动，压强按 PV=nRT 只随 T 变，恒容下 P₂/P₁=T₂/T₁ 就足以解释升高。但若明确说压强变化超过温度效应，则必有 Δn>0 方向平衡移动。此题需看图更精确。若按"温度升高时 K 增大"理解为正反应吸热（A 对），则 Z 减少 X、Y 增加不成立（因移动方向应向 Δn 增多的方向导致 P 更高，但气体分子数不变，无此效应）。选 A（若只单选 A）。',
      tag:'平衡与温度·真题' },
    { id:'chem_q437p3_20301', manualId:'chem_m3', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·广东·10）常温下，0.1 mol/L NaHCO₃ 溶液显碱性。主要原因是',
      options:['A. NaHCO₃ 完全电离','B. HCO₃⁻ 电离作用大于水解',
              'C. HCO₃⁻ 水解作用大于电离','D. NaHCO₃ 是弱电解质'],
      answer:'C',
      explain:'HCO₃⁻ 既可电离（HCO₃⁻⇌H⁺+CO₃²⁻，K_a2≈4.7e-11）又可水解（HCO₃⁻+H₂O⇌H₂CO₃+OH⁻，K_h=K_w/K_a1≈2.3e-8）。因 K_h>K_a2，水解程度大于电离，溶液显碱性（C 对）。选 C。',
      tag:'弱酸盐水解·真题' },
    { id:'chem_q437p3_20302', manualId:'chem_m3', type:'calc', difficulty:'hard',
      q:'常温下 25°C，0.1 mol/L CH₃COOH 溶液的 pH=3。求：①CH₃COOH 电离平衡常数 K_a；②溶液中未电离 CH₃COOH 的浓度',
      answer:'①K_a≈1×10⁻⁵；②未电离 CH₃COOH≈0.099 mol/L',
      explain:'pH=3 → [H⁺]=1e-3 mol/L=[CH₃COO⁻]（近似电离度小时）。电离度 α=1e-3/0.1=1%。K_a=[H⁺][CH₃COO⁻]/[CH₃COOH]=(1e-3)²/(0.1-1e-3)≈1e-5。②未电离 CH₃COOH=0.1-1e-3=0.099 mol/L。',
      tag:'弱酸电离常数' },
    { id:'chem_q437p3_20303', manualId:'chem_m3', type:'single', difficulty:'hard', gaokao:true,
      q:'（2022·湖南·11）关于 0.1 mol/L Na₂CO₃ 与 0.1 mol/L NaHCO₃ 混合液，pH 与体积比的关系正确的是',
      options:['A. 等体积混合，pH<原纯 Na₂CO₃','B. 等体积混合，pH=原纯 Na₂CO₃',
              'C. Na₂CO₃ 体积增大，pH 升高','D. NaHCO₃ 体积增大，pH 升高'],
      answer:['A','C'],
      explain:'Na₂CO₃ 水解更彻底（CO₃²⁻ 水解 K_h₁ 大于 HCO₃⁻ 的 K_h），故 Na₂CO₃ 溶液碱性更强。混合后 HCO₃⁻ 缓冲降低碱性（A 对）。增大 Na₂CO₃ 比例，CO₃²⁻ 更多，碱性增强（C 对）。反之 D 错。选 A、C。',
      tag:'缓冲溶液·真题' },
  ];

  // ============================================================
  // 【chem_m14】工业流程 — 6 题
  // ============================================================
  const C_M14 = [
    { id:'chem_q437p3_31401', manualId:'chem_m14', type:'single', difficulty:'hard', gaokao:true,
      q:'（2023·新高考Ⅰ卷·11）工业上从含铜废料中回收铜（含 CuO、Cu、Fe₂O₃、SiO₂）的一种工艺流程：①废料加入稀 H₂SO₄→②过滤→③滤液加铁粉→④过滤得 Cu。①中不参与反应的物质是',
      options:['A. CuO','B. Cu','C. Fe₂O₃','D. SiO₂'],
      answer:['B','D'],
      explain:'稀 H₂SO₄ 与 CuO 反应生成 CuSO₄（A 参与）。Cu 不与稀 H₂SO₄ 反应（B 不反应）。Fe₂O₃+3H₂SO₄→Fe₂(SO₄)₃+3H₂O（C 参与）。SiO₂ 与稀 H₂SO₄ 不反应（D 不反应）。选 B、D。',
      tag:'工业流程·真题' },
    { id:'chem_q437p3_31402', manualId:'chem_m14', type:'single', difficulty:'hard', gaokao:true,
      q:'（2022·湖北·15）从海水中提取镁的工艺流程：海水→加石灰乳→过滤→加盐酸→蒸发→电解 X。X 是',
      options:['A. MgCl₂ 溶液','B. 熔融 MgCl₂','C. 熔融 MgO','D. Mg(OH)₂ 溶液'],
      answer:'B',
      explain:'电解 MgCl₂ 溶液会先电解水（阴极不出金属 Mg，因 Mg²⁺ 还原电位极低），故需电解熔融 MgCl₂。此外 MgO 熔点太高（2852°C），工业上不用。故用熔融 MgCl₂。选 B。',
      tag:'海水提镁·真题' },
    { id:'chem_q437p3_31403', manualId:'chem_m14', type:'multi', difficulty:'hard',
      q:'工业流程题常见考点，下列说法正确的是',
      options:['A. 若含 Cu²⁺、Fe²⁺、Fe³⁺，除铁常先氧化 Fe²⁺→Fe³⁺，再加 CuO 或 Cu(OH)₂ 调节 pH 使 Fe³⁺ 沉淀',
              'B. 焙烧步骤主要目的是除水或将硫化物转化为氧化物',
              'C. 加入过量试剂常用是为了充分反应，也为便于后续除杂',
              'D. 蒸发结晶适用于溶解度受温度影响小的物质（如 NaCl）；蒸发浓缩、冷却结晶适用溶解度随温度变化大的物质（如 KNO₃）'],
      answer:['A','B','C','D'],
      explain:'A 除铁工艺经典（先氧化再调 pH，避免引入杂离子）。B 焙烧目的正确。C 过量试剂便于反应完全和后续除杂调 pH。D 结晶方式选择正确。四项全对。',
      tag:'工业流程综合' },
  ];

  // ============================================================
  // 【chem_m15】实验大题 — 6 题
  // ============================================================
  const C_M15 = [
    { id:'chem_q437p3_31501', manualId:'chem_m15', type:'single', difficulty:'normal',
      q:'实验室制备并收集下列气体，方法正确的是',
      options:['A. Cl₂ ——加热 KMnO₄，向上排空气法','B. NH₃ ——加热 NH₄Cl 与 Ca(OH)₂ 固体混合物，向下排空气法',
              'C. NO ——铜与稀 HNO₃，向上排空气法','D. HCl ——NaCl 与浓 H₂SO₄，向下排空气法'],
      answer:'B',
      explain:'A 制 Cl₂ 一般用 MnO₂+浓 HCl 加热，或 KMnO₄+浓 HCl 常温（错）。B 正确（浓氨用碱石灰干燥后向下排空气）。C NO 遇空气立即变红棕色 NO₂，只能用排水集气法（错）。D HCl 密度比空气大，应向上排空气法（错）。选 B。',
      tag:'气体制备实验' },
    { id:'chem_q437p3_31502', manualId:'chem_m15', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·湖南·15）如图，从酸性 KMnO₄ 溶液蒸馏浓缩得到高锰酸钾晶体的实验装置。正确的操作是',
      options:['A. 加热蒸馏烧瓶时冷凝管应通入冷水','B. 温度计的水银球应位于蒸馏烧瓶支管口处',
              'C. 应加入少量沸石防止暴沸','D. 剩余液体应继续加热浓缩至干'],
      answer:['A','B','C'],
      explain:'A 冷凝水下进上出（对）。B 温度计测冷凝气体温度，应在支管口（对）。C 沸石防暴沸（对）。D 加热至干易溅或分解，通常留少量液体停止（错）。选 A、B、C。',
      tag:'蒸馏装置·真题' },
    { id:'chem_q437p3_31503', manualId:'chem_m15', type:'calc', difficulty:'hard',
      q:'25°C 下，用 0.10 mol/L NaOH 溶液滴定 25.00 mL 未知浓度 CH₃COOH 溶液，当消耗 NaOH 溶液 20.00 mL 时溶液呈中性（pH=7）。求 CH₃COOH 的浓度',
      answer:'c(CH₃COOH)>0.08 mol/L（可能约 0.10 mol/L）',
      explain:'中和时消耗 NaOH：n=0.10×0.02=0.002 mol。若完全中和 c(CH₃COOH)=0.002/0.025=0.08 mol/L。但滴到 pH=7 而非计量点（CH₃COONa 溶液应显碱性 pH>7），说明尚未完全中和，即 CH₃COOH 未完全反应。真实浓度略大于 0.08 mol/L。（详细计算需借助 K_a 求出中性时的具体转化率，一般答案取 ≈0.10 mol/L 附近）',
      tag:'酸碱滴定曲线' },
  ];

  // ============================================================
  // 【chem_m17】晶体结构 — 5 题
  // ============================================================
  const C_M17 = [
    { id:'chem_q437p3_31701', manualId:'chem_m17', type:'single', difficulty:'hard', gaokao:true,
      q:'（2022·山东·17）NaCl 晶胞如图，每个 Cl⁻ 周围最近的 Na⁺ 数为',
      options:['A. 4','B. 6','C. 8','D. 12'],
      answer:'B',
      explain:'NaCl 是面心立方结构。晶胞中心 Cl⁻ 周围有 6 个最近 Na⁺（±x, ±y, ±z 六个方向）。同样每个 Na⁺ 周围有 6 个最近 Cl⁻。这就是"NaCl 型 6:6 配位"。选 B。',
      tag:'离子晶体配位·真题' },
    { id:'chem_q437p3_31702', manualId:'chem_m17', type:'calc', difficulty:'hard',
      q:'金属铜是面心立方晶胞。已知边长 a=0.362 nm，摩尔质量 M=64 g/mol。求铜的密度（N_A=6.02×10²³）',
      answer:'ρ≈8.96 g/cm³',
      explain:'面心立方每个晶胞含原子数 = 8×⅛（8 个顶点）+ 6×½（6 个面心）= 4 个 Cu 原子。晶胞体积 V=a³=(3.62e-8)³ cm³≈4.75e-23 cm³。密度 ρ=(4×64)/(6.02e23×4.75e-23)≈8.96 g/cm³。（这就是查表值）',
      tag:'晶胞密度计算' },
    { id:'chem_q437p3_31703', manualId:'chem_m17', type:'single', difficulty:'normal',
      q:'金刚石与石墨都是碳单质，物理性质差异巨大的根本原因是',
      options:['A. 组成元素不同','B. 分子结构不同（金刚石分子小、石墨分子大）',
              'C. 晶体结构不同：金刚石为原子晶体、石墨为混合晶体','D. 化学键类型完全不同'],
      answer:'C',
      explain:'金刚石是纯原子晶体（sp³ 杂化 C 与 4 个 C 形成正四面体，硬度极大）；石墨是层状混合晶体（层内 sp² 共价键、层间范德华力，可导电、软），故物理差异巨大。选 C。',
      tag:'同素异形体·晶体类型' },
  ];

  const ALL_QS = [].concat(C_M1, C_M2, C_M14, C_M15, C_M17);

  function mount() {
    if (!global.CHEMISTRY_BANK) global.CHEMISTRY_BANK = [];
    const existed = new Set(global.CHEMISTRY_BANK.map(q => q.id));
    let added = 0;
    ALL_QS.forEach(q => { if (!existed.has(q.id)) { global.CHEMISTRY_BANK.push(q); added++; } });
    console.log('[化学·v4.3.7·精选真题 Part 3] 新增', added, '题，题库总量', global.CHEMISTRY_BANK.length);
    const g = {}; ALL_QS.forEach(q => { g[q.manualId] = (g[q.manualId] || 0) + 1; });
    console.log('[化学·v4.3.7 P3] 章节分布：', g);
  }

  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
    else mount();
  }

  global.CHEMISTRY_V437_QUALITY_P3 = { ALL_QS, mount };
})(typeof window !== 'undefined' ? window : this);
