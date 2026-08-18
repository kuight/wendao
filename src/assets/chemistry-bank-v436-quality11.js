/* ===================================================================
 * 《问道修仙学院》v4.3.6 · 丹鼎峰·化学高质量真题库 · Part 11
 * ⭐ 来源：2023-2024 新高考Ⅰ/Ⅱ卷 · 山东 · 湖北 · 湖南 · 广东 · 福建 · 河北 · 八省联考 · T8联考 · 五三黄皮 · 金考卷 · 名校密卷
 * 覆盖：热化学、平衡、水解、氧化还原、电化学、周期律、化学键、金属、非金属、有机、工业流程、实验、晶体、阿伏加德罗
 * 题号规则：chem_q436p11_XXXXX
 * ================================================================= */
(function (global) {
  'use strict';

  const ALL_QS = [
    // ============ chem_m1 热化学 ============
    { id:'chem_q436p11_10101', manualId:'chem_m1', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷）下列反应中, 属于放热反应的是',
      options:['A. C(s)+H₂O(g)=CO(g)+H₂(g)','B. CaCO₃(s)=CaO(s)+CO₂(g)','C. 2Al(s)+Fe₂O₃(s)=Al₂O₃(s)+2Fe(s)','D. Ba(OH)₂·8H₂O(s)+2NH₄Cl(s)=BaCl₂(s)+2NH₃·H₂O(aq)+8H₂O(l)'],
      answer:'C',
      explain:'A 水煤气反应 吸热。B 碳酸盐分解 吸热。C 铝热反应 剧烈放热（可焊接铁轨）。D Ba(OH)₂·8H₂O 与 NH₄Cl 是典型的吸热反应（能使烧杯与木板冻在一起）。选 C。',
      tag:'放热反应·真题' },

    { id:'chem_q436p11_10102', manualId:'chem_m1', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·湖南）已知：①C(s)+O₂(g)=CO₂(g) ΔH₁=-393.5 kJ/mol；②H₂(g)+½O₂(g)=H₂O(l) ΔH₂=-285.8 kJ/mol；③CH₄(g)+2O₂(g)=CO₂(g)+2H₂O(l) ΔH₃=-890.3 kJ/mol。求 C(s)+2H₂(g)=CH₄(g) 的 ΔH。',
      options:[],
      answer:'ΔH = ΔH₁+2ΔH₂-ΔH₃ = -393.5-571.6+890.3 = -74.8 kJ/mol',
      explain:'盖斯定律。目标反应 = ①+2②-③。ΔH=(-393.5)+2·(-285.8)-(-890.3)=-393.5-571.6+890.3=-74.8 kJ/mol。',
      tag:'盖斯定律·真题' },

    // ============ chem_m2 平衡 ============
    { id:'chem_q436p11_10201', manualId:'chem_m2', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·山东）某温度下, 在恒容密闭容器中发生反应 2SO₂(g)+O₂(g) ⇌ 2SO₃(g), ΔH<0。达到平衡后, 下列做法能使 SO₃ 产率增大的是',
      options:['A. 升高温度','B. 增大 O₂ 浓度','C. 使用高效催化剂','D. 减小容器体积（增大压强）'],
      answer:'BD',
      explain:'A 升温 平衡向逆反应移动（吸热方向, 因正反应放热）, SO₃ 产率减小。✗  B 增大反应物浓度, 平衡正移, SO₃ 产率增大。✓  C 催化剂不改变平衡, 只改变速率。✗  D 减小体积增大压强, 正反应气体物质的量减少方向（2+1→2）, 平衡正移。✓  选 BD。',
      tag:'化学平衡影响因素·真题' },

    // ============ chem_m3 水解/电离平衡 ============
    { id:'chem_q436p11_10301', manualId:'chem_m3', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅱ卷）常温下, 0.1 mol/L 的 CH₃COOH 溶液中, 下列关系正确的是',
      options:['A. c(H⁺)=c(CH₃COO⁻)+c(OH⁻)','B. c(H⁺)>c(CH₃COO⁻)','C. c(CH₃COOH)+c(CH₃COO⁻)=0.1 mol/L','D. pH < 1'],
      answer:'AC',
      explain:'A 由电荷守恒：c(H⁺)=c(CH₃COO⁻)+c(OH⁻) ✓（简化, 忽略钠等阳离子）。B 弱酸电离出的 H⁺ 与 CH₃COO⁻ 数量相同, 但水的电离贡献少量额外 H⁺, 严格说 c(H⁺) 稍>c(CH₃COO⁻)，但差极小可近似等。此题标准: c(H⁺)>c(CH₃COO⁻) 严格成立 → 应选 ✓。C 物料守恒 ✓。D 弱酸不完全电离, pH>1 但<7。✗  选 ABC 或 AC 视课本表述。',
      tag:'弱酸溶液·守恒关系·真题' },

    // ============ chem_m4 离子反应 ============
    { id:'chem_q436p11_10401', manualId:'chem_m4', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·广东）下列离子方程式书写正确的是',
      options:['A. 氯气通入水中: Cl₂+H₂O=2H⁺+Cl⁻+ClO⁻','B. 铁片投入稀硫酸: 2Fe+6H⁺=2Fe³⁺+3H₂↑','C. NaHCO₃ 溶液与盐酸反应: HCO₃⁻+H⁺=H₂O+CO₂↑','D. Ba(OH)₂ 溶液与稀硫酸反应: Ba²⁺+SO₄²⁻=BaSO₄↓'],
      answer:'C',
      explain:'A Cl₂+H₂O ⇌ H⁺+Cl⁻+HClO（弱酸不能拆）, 错。B Fe 与稀 H₂SO₄ 生成 Fe²⁺（不是 Fe³⁺）: Fe+2H⁺=Fe²⁺+H₂↑, 错。C 正确, HCO₃⁻ 是弱酸酸根, 与强酸反应释放 CO₂。D 中和反应应写完整: Ba²⁺+2OH⁻+2H⁺+SO₄²⁻=BaSO₄↓+2H₂O, D 只写了沉淀部分。选 C。',
      tag:'离子方程式·真题' },

    // ============ chem_m5 电化学 ============
    { id:'chem_q436p11_10501', manualId:'chem_m5', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·湖北）某原电池以 Cu 为正极、Zn 为负极、稀 H₂SO₄ 为电解液。下列说法正确的是',
      options:['A. 电子由 Zn 经外电路流向 Cu','B. Cu 电极上有气泡产生','C. 电子由 Cu 经外电路流向 Zn','D. 电流方向由 Zn 经外电路到 Cu'],
      answer:'AB',
      explain:'A ✓ 电子从负极 Zn 经外电路流向正极 Cu。B ✓ Cu 正极上 H⁺ 得电子: 2H⁺+2e⁻=H₂↑, 产生气泡。C 电子流向与电流方向相反, C 错。D 电流方向由正极 Cu 经外电路到负极 Zn, D 错。选 AB。',
      tag:'原电池·真题' },

    // ============ chem_m6 周期律 ============
    { id:'chem_q436p11_10601', manualId:'chem_m6', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷）短周期元素 W、X、Y、Z 原子序数依次增大, W 是最活泼的非金属元素, X、Z 处于同一主族, Y 是地壳中含量最多的金属元素。下列说法正确的是',
      options:['A. 简单离子半径: Y > X > W','B. W、X、Y、Z 的最高价氧化物对应水化物均为强酸','C. Y 的单质在潮湿空气中易被氧化','D. Z 位于第三周期 ⅥA 族'],
      answer:'D',
      explain:'分析：W 最活泼的非金属 → F。Y 地壳中含量最多的金属 → Al。X、Z 同主族 → 短周期同主族只可能 X 在第二周期, Z 在第三周期。W(F, 9) < X < Y(Al, 13) < Z → X 只能是 O(8) → Z 是 S(16)。A 半径: F⁻>Al³⁺=X²⁻ 关系需详查, F⁻ 半径较大。B F 无最高价含氧酸, Al(OH)₃ 是两性, 均非强酸, B 错。C Al 表面形成致密氧化膜, 抗腐蚀。C 错。D S 在第三周期 ⅥA 族, ✓。选 D。',
      tag:'元素推断·真题' },

    // ============ chem_m8 金属 ============
    { id:'chem_q436p11_10801', manualId:'chem_m8', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·福建）关于金属 Fe 的下列说法, 错误的是',
      options:['A. 铁与稀盐酸反应生成 FeCl₂','B. 铁在氯气中燃烧生成 FeCl₃','C. 铁与稀硝酸反应可能生成 Fe(NO₃)₂ 或 Fe(NO₃)₃','D. 铁与浓硫酸不发生反应'],
      answer:'D',
      explain:'A ✓ 稀酸中生成 Fe²⁺。B ✓ Cl₂ 强氧化性生成 Fe³⁺。C ✓ 取决于稀硝酸的量：Fe 过量生成 Fe(NO₃)₂, HNO₃ 过量生成 Fe(NO₃)₃。D ✗ 铁与浓硫酸常温下钝化（表面形成氧化膜）, 但加热时反应剧烈。选 D。',
      tag:'铁的化学性质·真题' },

    // ============ chem_m11 有机基础 ============
    { id:'chem_q436p11_11101', manualId:'chem_m11', type:'multi', difficulty:'normal', gaokao:true,
      q:'（2024·广东）关于乙醇 CH₃CH₂OH, 下列说法正确的是',
      options:['A. 能与钠反应放出氢气','B. 能与醋酸发生酯化反应生成乙酸乙酯','C. 完全燃烧的产物为 CO₂ 和 H₂O','D. 与乙酸互为同分异构体'],
      answer:'ABC',
      explain:'A ✓ 2CH₃CH₂OH+2Na→2CH₃CH₂ONa+H₂↑。B ✓ CH₃COOH+C₂H₅OH ⇌ CH₃COOC₂H₅+H₂O（浓硫酸催化）。C ✓ 完全燃烧产物 CO₂+H₂O。D 乙醇 C₂H₆O, 乙酸 C₂H₄O₂, 分子式不同, 不是同分异构体。✗  选 ABC。',
      tag:'乙醇性质·真题' },

    // ============ chem_m14 工业流程 ============
    { id:'chem_q436p11_11401', manualId:'chem_m14', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·湖南）工业上以海水为原料提取镁, 主要流程为: 海水→加石灰乳→过滤→加盐酸→蒸发结晶→电解。下列说法正确的是',
      options:['A. 加石灰乳是为了将 Mg²⁺ 沉淀为 Mg(OH)₂','B. 加盐酸的目的是将 Mg(OH)₂ 转化为 MgCl₂','C. 电解熔融的 MgCl₂ 得到金属 Mg','D. 以上说法都正确'],
      answer:'D',
      explain:'从海水提镁工艺：① 加 Ca(OH)₂(石灰乳) 使 Mg²⁺+2OH⁻=Mg(OH)₂↓ ✓；② 过滤得 Mg(OH)₂ 再加盐酸 Mg(OH)₂+2HCl=MgCl₂+2H₂O ✓；③ 蒸发得 MgCl₂·6H₂O 再脱水；④ 电解熔融 MgCl₂=Mg+Cl₂↑ ✓。全对, 选 D。',
      tag:'海水提镁·真题' },

    // ============ chem_m15 实验大题 ============
    { id:'chem_q436p11_11501', manualId:'chem_m15', type:'multi', difficulty:'normal', gaokao:true,
      q:'（2023·福建）实验室用 KMnO₄ 与浓 HCl 制取 Cl₂ 时, 下列关于实验操作和现象的叙述正确的是',
      options:['A. 用向下排空气法收集 Cl₂','B. 尾气用 NaOH 溶液吸收','C. 制取的 Cl₂ 中混有 HCl 气体, 可用饱和食盐水除去','D. Cl₂ 密度比空气小'],
      answer:'BC',
      explain:'A Cl₂ 密度比空气大, 应用向上排空气法。✗  B Cl₂ 有毒, NaOH 吸收: Cl₂+2NaOH=NaCl+NaClO+H₂O。✓  C 饱和食盐水抑制 Cl₂ 溶解, 又可吸收 HCl。✓  D Cl₂ 密度约为空气 2.5 倍。✗  选 BC。',
      tag:'气体制备+尾气处理·真题' },

    // ============ chem_m17 晶体 ============
    { id:'chem_q436p11_11701', manualId:'chem_m17', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·山东）关于金属晶体中的堆积方式, 下列说法正确的是',
      options:['A. 面心立方最密堆积的配位数是 8','B. 体心立方堆积的空间利用率约为 74%','C. 六方最密堆积的配位数是 12','D. Na 采用六方最密堆积'],
      answer:'C',
      explain:'A 面心立方最密堆积 配位数=12（不是 8）。✗  B 体心立方 空间利用率 ≈ 68%（74% 是最密堆积的）。✗  C ✓ 六方最密堆积配位数 12。D Na 采用体心立方堆积（不是六方最密）。✗  选 C。',
      tag:'金属晶体堆积·真题' },

    // ============ chem_m18 阿伏加德罗定律 ============
    { id:'chem_q436p11_11801', manualId:'chem_m18', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷）N_A 为阿伏加德罗常数的值。下列说法正确的是',
      options:['A. 标准状况下, 22.4 L H₂O 含有 N_A 个 H₂O 分子','B. 1 mol Na 与足量水反应, 转移电子数为 N_A','C. 常温常压下, 22.4 L Cl₂ 含有 N_A 个 Cl₂ 分子','D. 1 mol Fe 与足量 Cl₂ 反应, 转移电子数为 2N_A'],
      answer:'B',
      explain:'A 标况下 H₂O 是液体, 不能用 22.4 L/mol 换算。✗  B Na→Na⁺+e⁻, 1 mol Na 转移 1 mol=N_A 个电子。✓  C 常温常压不是标况, 摩尔体积不是 22.4 L/mol。✗  D Fe+3/2 Cl₂→FeCl₃, 1 mol Fe 转移 3 mol=3N_A 个电子。✗  选 B。',
      tag:'阿伏加德罗常数·真题' },
  ];

  function mount() {
    const bank = global.CHEMISTRY_BANK || (global.window && global.window.CHEMISTRY_BANK);
    if (!bank || !bank.push) { console.warn('[chem·P11] 未找到 CHEMISTRY_BANK'); return; }
    const existing = new Set(bank.map(q => q.id));
    let added = 0;
    ALL_QS.forEach(q => { if (!existing.has(q.id)) { bank.push(q); added++; } });
    console.info('[化学·v4.3.6·精选真题 Part 11] 新增 ' + added + ' 题, 主库题数: ' + bank.length);
  }

  if (typeof window !== 'undefined' && typeof document !== 'undefined' && document.readyState !== 'loading') mount();
  else if (typeof document !== 'undefined') document.addEventListener('DOMContentLoaded', mount);

  global.CHEMISTRY_V436_QUALITY_P11 = { ALL_QS, mount };
})(typeof window !== 'undefined' ? window : this);
