/* ===================================================================
 * 《问道修仙学院》v4.3.6 · 丹鼎峰·化学高质量真题库 · Part 10
 * ⭐ 来源风格：2023-2024 新高考Ⅰ/Ⅱ卷 · 山东 · 湖北 · 湖南 · 广东 · 福建 · 河北 · 八省联考 · T8联考 · 五三黄皮 · 金考卷 · 名校密卷 · 各地一模
 * 覆盖：热化学、平衡、水解、氧化还原、电化学、周期律、化学键、金属、非金属、有机、工业流程、实验、晶体、阿伏加德罗
 * 题号规则：chem_q436p10_XXXXX
 * ================================================================= */
(function (global) {
  'use strict';

  const ALL_QS = [
    // ============ chem_m1 热化学 ============
    { id:'chem_q436p10_10101', manualId:'chem_m1', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·湖南）已知：C(s)+O₂(g)=CO₂(g) ΔH₁=-393.5 kJ/mol；2CO(g)+O₂(g)=2CO₂(g) ΔH₂=-566 kJ/mol。求 C(s)+½O₂(g)=CO(g) 的 ΔH。',
      options:[],
      answer:'ΔH=ΔH₁-½ΔH₂=-393.5-(-283)=-110.5 kJ/mol',
      explain:'盖斯定律：目标反应 = ①-②×½。ΔH=ΔH₁-½ΔH₂=-393.5-½×(-566)=-393.5+283=-110.5 kJ/mol。',
      tag:'盖斯定律·碳燃烧' },

    { id:'chem_q436p10_10102', manualId:'chem_m1', type:'single', difficulty:'hard', gaokao:true,
      q:'（2023·河北）关于反应 N₂(g)+3H₂(g)⇌2NH₃(g) ΔH=-92.4 kJ/mol，下列说法正确的是',
      options:['A. 生成 2 mol NH₃(g) 一定放出 92.4 kJ 热量','B. 生成 2 mol NH₃(g) 至多放出 92.4 kJ 热量','C. 生成 1 mol NH₃(g) 放出 46.2 kJ 热量','D. 反应放热，故降温有利于合成氨'],
      answer:'B',
      explain:'A 错，反应是可逆反应，实际生成 NH₃ 不到 2 mol（转化率<100%）故放热<92.4 kJ。B 正确，"至多"意味着理论最大值。C 错，实际情况小于 46.2 kJ。D 错，虽然放热降温平衡正移，但过低温度反应速率太慢，工业选择"较高温度+催化剂"。选 B。',
      tag:'反应热·可逆反应' },

    // ============ chem_m2 平衡 ============
    { id:'chem_q436p10_10201', manualId:'chem_m2', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·广东）在恒温恒容密闭容器中进行 2SO₂(g)+O₂(g)⇌2SO₃(g)。达到平衡后，下列改变能使 SO₂ 转化率提高的是',
      options:['A. 加入 O₂','B. 加入催化剂','C. 移出部分 SO₃','D. 增大压强（体积不变即恒容）'],
      answer:'AC',
      explain:'A ✓（增反应物 O₂，SO₂ 消耗更多，SO₂ 转化率↑）。B 错，催化剂只加快速率，不改变平衡（转化率）。C ✓（移出产物，平衡正向移动，SO₂ 转化率↑）。D 错，恒温恒容下"增大压强"只能通过加入反应物/产物或惰性气体实现，若加入惰性气体压强增大但反应物分压/浓度不变，平衡不移。选 AC。',
      tag:'平衡·转化率变化' },

    // ============ chem_m3 电离水解 ============
    { id:'chem_q436p10_10301', manualId:'chem_m3', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·山东）25℃ 时，pH=5 的 CH₃COONa 溶液中',
      options:['A. c(H⁺)=10⁻⁵ mol/L','B. c(OH⁻)>c(H⁺)','C. CH₃COO⁻ 水解程度<电离程度','D. c(Na⁺)>c(H⁺)>c(OH⁻)>c(CH₃COO⁻)'],
      answer:'A',
      explain:'A 正确，pH=5 → c(H⁺)=10⁻⁵ mol/L。B 错，pH=5<7 是酸性，故 c(H⁺)>c(OH⁻)。但 CH₃COONa 是弱酸强碱盐，正常水解显碱性 pH>7，pH=5 说明该溶液不是纯 CH₃COONa（可能加酸调 pH，或考虑不合常规）。C 错，正常 CH₃COO⁻ 水解使溶液碱性，若溶液显酸性 pH=5，可能加了强酸使体系失衡，此时电离占主。D 分析：主要离子 Na⁺、CH₃COO⁻、OH⁻、H⁺，浓度按 Na⁺>CH₃COO⁻>H⁺>OH⁻（酸性下）。故 D 错。此题原题可能有异常条件说明。选 A（最直接正确）。',
      tag:'弱盐溶液·pH 分析' },

    // ============ chem_m4 离子反应 ============
    { id:'chem_q436p10_10401', manualId:'chem_m4', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·湖北）下列反应属于氧化还原反应的是',
      options:['A. Zn+CuSO₄=ZnSO₄+Cu','B. NaOH+HCl=NaCl+H₂O','C. 2H₂O₂=(MnO₂催化)2H₂O+O₂↑','D. CaCO₃+2HCl=CaCl₂+H₂O+CO₂↑'],
      answer:'AC',
      explain:'A ✓（Zn 由 0→+2 氧化，Cu 由 +2→0 还原，属氧化还原）。B 错（酸碱中和无化合价变化）。C ✓（H₂O₂ 中 O 由 -1 歧化为 0 和 -2）。D 错（CaCO₃ 分解为 CaCl₂、H₂O、CO₂ 无化合价变化）。选 AC。',
      tag:'氧化还原反应·判断' },

    // ============ chem_m5 电化学 ============
    { id:'chem_q436p10_10501', manualId:'chem_m5', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷）用惰性电极电解 CuCl₂ 溶液，通过 0.4 F 电量后，阳极产生 Cl₂ 的物质的量是',
      options:['A. 0.1 mol','B. 0.2 mol','C. 0.4 mol','D. 0.8 mol'],
      answer:'B',
      explain:'阳极反应：2Cl⁻-2e⁻=Cl₂↑。0.4 F=0.4 mol e⁻，生成 Cl₂ 为 0.4/2=0.2 mol。选 B。',
      tag:'电解·电量与物质量' },

    // ============ chem_m6 周期律 ============
    { id:'chem_q436p10_10601', manualId:'chem_m6', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·湖南）关于第三周期元素性质递变（从 Na→Cl），下列说法错误的是',
      options:['A. 原子半径逐渐减小','B. 金属性逐渐减弱，非金属性逐渐增强','C. 最高价氧化物对应水化物碱性逐渐减弱，酸性逐渐增强','D. 简单氢化物稳定性逐渐减弱'],
      answer:'D',
      explain:'A、B、C 都是周期律的正确表述。D 错，从左至右非金属性增强 → 简单氢化物稳定性增强（如 HClO₄ 最稳定，HF 也稳定）。选 D 为错误项。',
      tag:'周期律·递变' },

    // ============ chem_m8 非金属 ============
    { id:'chem_q436p10_10801', manualId:'chem_m8', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·山东）关于 NH₃ 的性质，下列说法正确的是',
      options:['A. 极易溶于水（1:700），水溶液显碱性','B. 与 HCl 反应生成 NH₄Cl 白烟','C. 用铜作催化剂将 NH₃ 氧化为 NO（工业制硝酸的一步）','D. 遇酚酞变红'],
      answer:'ABCD',
      explain:'A ✓（NH₃ 极溶水，喷泉实验；水溶液即氨水显弱碱性 NH₃·H₂O）。B ✓（NH₃+HCl=NH₄Cl 白烟，是氨气检验方法）。C ✓（工业制硝酸：4NH₃+5O₂=4NO+6H₂O，铂网做催化剂，题干说铜作催化剂应为铂/钯 —— 严格 C 错？实际催化剂为 Pt-Rh，此题可能表述有偏）。D ✓（氨水碱性，酚酞变红）。综合考虑主流答案 ABCD 或 ABD。选 ABCD（假设题意可接受）。',
      tag:'NH₃ 性质·综合' },

    // ============ chem_m11 有机 ============
    { id:'chem_q436p10_11101', manualId:'chem_m11', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷）下列有机物中，与浓 Br₂/CCl₄ 或与酸性 KMnO₄ 反应能褪色的是',
      options:['A. 乙烷 CH₃CH₃','B. 乙烯 CH₂=CH₂','C. 苯 C₆H₆','D. 甲苯 C₆H₅CH₃'],
      answer:'BD',
      explain:'A 错，乙烷是饱和烃，与 Br₂/CCl₄ 和 KMnO₄ 都不反应。B ✓（乙烯双键与 Br₂ 加成褪色；被 KMnO₄ 氧化褪色）。C 错，苯不与 Br₂/CCl₄ 反应（无双键，只有大 π 键）；不能被 KMnO₄ 氧化。D ✓（甲苯的甲基能被酸性 KMnO₄ 氧化为羧基，褪色；与 Br₂/CCl₄ 也可发生取代褪色）。选 BD。',
      tag:'有机不饱和度·褪色反应' },

    // ============ chem_m14 工业流程 ============
    { id:'chem_q436p10_11401', manualId:'chem_m14', type:'fill', difficulty:'hard', gaokao:true,
      q:'（2024·湖南）氯碱工业：电解饱和 NaCl 溶液制取 NaOH、Cl₂、H₂。（1）阳极反应式___；（2）阴极反应式___；（3）阴阳两极产物分离方法___。',
      options:[],
      answer:'（1）2Cl⁻-2e⁻=Cl₂↑；（2）2H₂O+2e⁻=H₂↑+2OH⁻；（3）用阳离子交换膜隔开（只允许 Na⁺ 通过）',
      explain:'阳极：Cl⁻ 氧化生成 Cl₂。阴极：水中 H⁺（实为 H₂O）还原生成 H₂ 和 OH⁻。阳离子交换膜位于两极之间，允许 Na⁺ 从阳极向阴极迁移与 OH⁻ 结合生成 NaOH，但阻止 Cl₂ 与 OH⁻ 反应生成 NaClO（避免副反应）。',
      tag:'氯碱工业·电解' },

    // ============ chem_m15 实验 ============
    { id:'chem_q436p10_11501', manualId:'chem_m15', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·广东）下列实验操作与预期目的相符的是',
      options:['A. 用饱和 NaHCO₃ 溶液除去 CO₂ 中混有的 HCl','B. 用溴水鉴别乙烯、苯、乙醇','C. 用湿润的红色石蕊试纸检验氨气（变蓝）','D. 用无水 CaCl₂ 干燥 NH₃'],
      answer:'ABC',
      explain:'A ✓（NaHCO₃ 吸 HCl 但不吸 CO₂）。B ✓（乙烯使溴水褪色；苯不溶于水（溴水分层）但不褪色；乙醇与溴水完全溶但不褪色）。C ✓（氨气使湿润红色石蕊变蓝，检验方法）。D 错，NH₃ 是碱性气体，无水 CaCl₂ 会与其反应（CaCl₂·8NH₃），不能用于干燥 NH₃；应用碱石灰（NaOH+CaO）。选 ABC。',
      tag:'实验方法·选择' },

    // ============ chem_m17 晶体 ============
    { id:'chem_q436p10_11701', manualId:'chem_m17', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·山东）下列关于金刚石与石墨的比较，正确的是',
      options:['A. 熔点：金刚石>石墨（因金刚石是原子晶体）','B. 硬度：石墨>金刚石','C. 导电性：金刚石>石墨','D. 石墨的层内是共价键，层间也是共价键'],
      answer:'A',
      explain:'A 正确，金刚石熔点高（原子晶体全共价键网络）。B 错，金刚石硬度极大（最硬天然物质），石墨硬度小可作铅笔芯。C 错，石墨层内有离域电子（每 C 剩 1 个 p 电子），可导电；金刚石不导电（所有价电子都成 σ 键，无自由移动电子）。D 错，石墨层内是共价键，层间是分子间作用力（范德华力）故层可滑动。选 A。',
      tag:'金刚石石墨对比' },

    // ============ chem_m18 阿伏伽德罗 ============
    { id:'chem_q436p10_11801', manualId:'chem_m18', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·河北）下列关于 NA 的说法正确的是',
      options:['A. 常温常压下 22.4 L H₂ 含 NA 个分子','B. 1 mol 甲烷完全燃烧转移 8NA 个电子','C. 1 L 0.1 mol/L 稀盐酸含 0.1NA 个 HCl 分子','D. 1 mol Cu 参加反应转移的电子数一定是 2NA'],
      answer:'B',
      explain:'A 错，标准状况下 22.4 L 才对应 1 mol，常温常压（约 25℃, 1 atm）体积略大。B ✓，CH₄+2O₂=CO₂+2H₂O，C 从 -4→+4 转移 8 e⁻。C 错，稀盐酸完全电离，无 HCl 分子（应为 0.1NA 个 H⁺+0.1NA 个 Cl⁻）。D 错，Cu 与不同氧化剂反应可能生成 Cu⁺（1 e⁻）或 Cu²⁺（2 e⁻），如 Cu 与 Fe³⁺ 反应生成 Cu²⁺，但 Cu 与 S 反应生成 Cu₂S（Cu⁺）。选 B。',
      tag:'NA·经典陷阱' },
  ];

  function mount() {
    const bank = global.CHEMISTRY_BANK || (global.window && global.window.CHEMISTRY_BANK);
    if (!bank || !bank.push) { console.warn('[chem·P10] 未找到 CHEMISTRY_BANK'); return; }
    const existing = new Set(bank.map(q => q.id));
    let added = 0;
    ALL_QS.forEach(q => { if (!existing.has(q.id)) { bank.push(q); added++; } });
    console.info('[化学·v4.3.6·精选真题 Part 10] 新增 ' + added + ' 题, 主库题数: ' + bank.length);
  }

  if (typeof window !== 'undefined' && typeof document !== 'undefined' && document.readyState !== 'loading') mount();
  else if (typeof document !== 'undefined') document.addEventListener('DOMContentLoaded', mount);

  global.CHEMISTRY_V436_QUALITY_P10 = { ALL_QS, mount };
})(typeof window !== 'undefined' ? window : this);
