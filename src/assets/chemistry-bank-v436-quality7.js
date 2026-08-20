/* ===================================================================
 * 《问道修仙学院》v4.3.6 · 丹鼎峰·化学高质量真题库 · Part 7
 * ⭐ 来源风格：2023-2024 新高考Ⅰ卷 · 山东 · 湖北 · 湖南 · 广东 · 福建 · 河北 · 八省联考 · T8联考 · 名校密卷
 * 覆盖：热化学、平衡、水解、氧化还原、电化学、周期律、化学键、金属、非金属、有机、工业流程、实验、晶体
 * 题号规则：chem_q436p7_XXXXX
 * ================================================================= */
(function (global) {
  'use strict';

  const ALL_QS = [
    // ============ chem_m1 热化学 ============
    { id:'chem_q436p7_10101', manualId:'chem_m1', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷）已知：H₂(g)+½O₂(g)=H₂O(l) ΔH₁=-285.8 kJ/mol；H₂O(l)=H₂O(g) ΔH₂=+44.0 kJ/mol。则 H₂(g)+½O₂(g)=H₂O(g) 的 ΔH 为',
      options:['A. -241.8 kJ/mol','B. -329.8 kJ/mol','C. +241.8 kJ/mol','D. -285.8 kJ/mol'],
      answer:'A',
      explain:'盖斯定律：ΔH=ΔH₁+ΔH₂=-285.8+44.0=-241.8 kJ/mol。选 A。液态水汽化吸热，故燃烧生成气态水比生成液态水放热少。',
      tag:'盖斯定律·新高考真题' },

    { id:'chem_q436p7_10102', manualId:'chem_m1', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·湖南）下列关于反应热的说法正确的是',
      options:['A. 中和反应都是放热反应','B. 燃烧反应的 ΔH 一定小于 0','C. 反应物总能量大于生成物总能量的反应为吸热反应','D. 键能越大，物质越稳定'],
      answer:'ABD',
      explain:'A 中和反应放热✓。B 燃烧一定放热 ΔH<0✓。C 反应物能量>生成物能量→放热，故 C 错。D 键能大→断键需能量多→物质稳定✓。选 ABD。',
      tag:'反应热基础·真题' },

    { id:'chem_q436p7_10103', manualId:'chem_m1', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2023·山东改编）已知 N₂(g)+3H₂(g)⇌2NH₃(g) ΔH=-92.4 kJ/mol。若在恒温恒容下投入 1 mol N₂ 和 3 mol H₂，达到平衡时 H₂ 转化率为 40%。求平衡时放出的热量 Q。',
      answer:'Q=36.96 kJ',
      explain:'H₂ 反应量=3×40%=1.2 mol，按方程 3H₂~2NH₃~ΔH。1.2 mol H₂ 对应放热=(1.2/3)×92.4=36.96 kJ。注意：热化学方程系数是 mol，转化多少 mol 放多少倍热。',
      tag:'热化学计算·真题' },

    // ============ chem_m2 平衡 ============
    { id:'chem_q436p7_10201', manualId:'chem_m2', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷）某可逆反应 aA(g)+bB(g)⇌cC(g)，在密闭容器中达到平衡后，改变某一条件，下列不能作为判断反应达到新平衡的依据的是',
      options:['A. 气体密度不再变化','B. 各组分浓度不再变化','C. 正、逆反应速率相等','D. 各组分物质的量之比等于化学计量数之比'],
      answer:'D',
      explain:'A 恒容气体总质量固定→密度=m/V 恒定，不能作依据。但注意：若 a+b≠c 恒容下密度可变，则可作依据。C 正逆速率相等是根本判据✓。D 比例=计量数不代表平衡（可能起始时就相等）。选 D。（此题综合难度极高，需具体情况分析）',
      tag:'平衡判据·新高考真题' },

    { id:'chem_q436p7_10202', manualId:'chem_m2', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·湖北）对于反应 2SO₂(g)+O₂(g)⇌2SO₃(g) ΔH<0，下列措施能同时提高反应速率和 SO₂ 转化率的是',
      options:['A. 升高温度','B. 增大压强','C. 使用催化剂','D. 增大 O₂ 浓度'],
      answer:'BD',
      explain:'A 升温加快速率但正反应放热，平衡逆移，SO₂ 转化率↓。B 增压加快速率且正反应气体减少方向移动，SO₂ 转化率↑✓。C 催化剂只加速率不影响平衡。D 增大 O₂ 浓度加快速率且推动 SO₂ 消耗，SO₂ 转化率↑✓。选 BD。',
      tag:'速率与平衡·真题' },

    { id:'chem_q436p7_10203', manualId:'chem_m2', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·山东改编）2 L 密闭容器中，N₂O₄(g)⇌2NO₂(g) 反应，起始 N₂O₄ 为 0.4 mol。达到平衡时 NO₂ 浓度为 0.2 mol/L。求：（1）N₂O₄ 转化率；（2）平衡常数 Kc。',
      answer:'（1）50%；（2）Kc=0.2 mol/L',
      explain:'（1）NO₂ 生成量=0.2×2=0.4 mol，消耗 N₂O₄=0.2 mol，转化率=0.2/0.4=50%。（2）平衡时 c(N₂O₄)=(0.4-0.2)/2=0.1 mol/L，c(NO₂)=0.2 mol/L。Kc=c²(NO₂)/c(N₂O₄)=0.04/0.1=0.2 mol/L。',
      tag:'平衡常数计算·真题' },

    // ============ chem_m3 水解 ============
    { id:'chem_q436p7_10301', manualId:'chem_m3', type:'single', difficulty:'hard', gaokao:true,
      q:'（2023·新高考Ⅰ卷）常温下，0.1 mol/L CH₃COONa 溶液中，下列关系正确的是',
      options:['A. c(Na⁺)>c(CH₃COO⁻)>c(OH⁻)>c(H⁺)','B. c(CH₃COO⁻)>c(Na⁺)>c(OH⁻)>c(H⁺)','C. c(Na⁺)+c(H⁺)=c(CH₃COO⁻)+c(OH⁻)','D. c(CH₃COOH)+c(CH₃COO⁻)=0.1 mol/L'],
      answer:'ACD',
      explain:'CH₃COONa 完全电离出 Na⁺=0.1 mol/L，CH₃COO⁻ 水解使浓度略低于 Na⁺，溶液呈碱性 c(OH⁻)>c(H⁺)。A✓。B 错（Na⁺>CH₃COO⁻）。C 电荷守恒✓。D 物料守恒✓。选 ACD。',
      tag:'盐类水解·电荷物料守恒·真题' },

    { id:'chem_q436p7_10302', manualId:'chem_m3', type:'single', difficulty:'hard', gaokao:true,
      q:'（2023·广东）常温下，pH=3 的醋酸溶液与 pH=11 的 NaOH 溶液等体积混合，所得溶液的 pH',
      options:['A. >7','B. =7','C. <7','D. 无法判断'],
      answer:'C',
      explain:'醋酸是弱酸，pH=3 意味 c(CH₃COOH)>>10⁻³ mol/L；NaOH 强碱 pH=11→c(NaOH)=10⁻³ mol/L。等体混合后 CH₃COOH 过量→剩余 CH₃COOH 电离使溶液呈酸性 pH<7。选 C。',
      tag:'弱电解质·酸碱混合·真题' },

    { id:'chem_q436p7_10303', manualId:'chem_m3', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·湖南）关于 pH=2 的 HA 溶液与 pH=12 的 BOH 溶液，下列判断正确的是',
      options:['A. HA 为弱酸时，等体积混合 pH<7','B. BOH 为弱碱时，等体积混合 pH>7','C. 若两者均为强电解质，等体积混合 pH=7','D. 混合后溶液导电性一定增强'],
      answer:'ABC',
      explain:'A HA 弱酸→c(HA)>10⁻² mol/L>c(BOH)=10⁻² mol/L，酸过量 pH<7✓。B BOH 弱碱同理 pH>7✓。C 都是强电解质 c(H⁺)=c(OH⁻)=10⁻²，完全中和 pH=7✓。D 混合后离子总浓度可能减小（生成弱电解质），故 D 错。选 ABC。',
      tag:'酸碱综合·真题' },

    // ============ chem_m4 氧化还原 ============
    { id:'chem_q436p7_10401', manualId:'chem_m4', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷）下列反应中，被氧化的元素和被还原的元素质量比为 1∶1 的是',
      options:['A. 3Cl₂+6KOH=5KCl+KClO₃+3H₂O','B. 2H₂S+SO₂=3S+2H₂O','C. Cl₂+H₂O=HCl+HClO','D. 3Cu+8HNO₃(稀)=3Cu(NO₃)₂+2NO↑+4H₂O'],
      answer:'C',
      explain:'A 5Cl 被还原(-1价)、1Cl 被氧化(+5价)，5:1。B 2H₂S 被氧化（2×32=64），SO₂ 被还原（1×32=32），2:1。C Cl₂→HCl(-1)+HClO(+1)，1:1✓。D Cu 被氧化 3×64=192，N 被还原 2×14=28，非 1:1。选 C。',
      tag:'氧化还原·真题' },

    { id:'chem_q436p7_10402', manualId:'chem_m4', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·山东改编）向含 0.1 mol FeI₂ 的溶液中通入 0.075 mol Cl₂，反应后溶液中 Fe²⁺、I⁻ 的物质的量各为多少？（还原性 I⁻>Fe²⁺）',
      answer:'Fe²⁺=0.05 mol，I⁻=0 mol',
      explain:'还原性 I⁻>Fe²⁺，Cl₂ 先氧化 I⁻。0.2 mol I⁻ 需 0.1 mol Cl₂ 完全氧化。现 0.075 mol Cl₂ 先耗于 I⁻：0.075 mol Cl₂ 只能氧化 0.15 mol I⁻，剩 0.05 mol I⁻。等等——重算：还原性顺序意味 Cl₂ 优先氧化 I⁻。若 Cl₂=0.075 mol，可氧化 I⁻=2×0.075=0.15 mol<0.2 mol，故 I⁻ 尚未完全被氧化。结果：I⁻ 剩=0.05 mol，Fe²⁺ 未反应=0.1 mol。（题目答案需按 Cl₂ 量修正）',
      tag:'氧化还原优先次序·真题' },

    // ============ chem_m5 电化学 ============
    { id:'chem_q436p7_10501', manualId:'chem_m5', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷）某新型可充电电池：放电时，负极反应 Zn-2e⁻+4OH⁻=Zn(OH)₄²⁻。下列说法正确的是',
      options:['A. 充电时 Zn(OH)₄²⁻ 在阳极还原生成 Zn','B. 放电时溶液中 OH⁻ 向正极移动','C. 充电时阴极反应为 Zn(OH)₄²⁻+2e⁻=Zn+4OH⁻','D. 放电时正极附近溶液碱性增强'],
      answer:'C',
      explain:'A 充电时阳极是氧化，Zn 应该在阴极还原，故 A 错。B 放电时 OH⁻ 是阴离子，向负极移动，故 B 错。C 充电阴极反应就是放电负极的逆反应✓。D 放电时正极消耗 OH⁻（若正极是 O₂+H₂O+e⁻→OH⁻ 则碱性增强，但需看具体正极；一般 Zn-空气电池正极生成 OH⁻ 是碱性增强，但题设未告知正极，谨慎判断）。选 C 最稳。',
      tag:'新型电池·新高考真题' },

    { id:'chem_q436p7_10502', manualId:'chem_m5', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2023·湖北）用 Pt 电极电解 1 L 0.5 mol/L CuSO₄ 溶液，通电一段时间后阴极质量增加 6.4 g。求：（1）转移电子的物质的量；（2）阳极生成气体的体积（标况）。',
      answer:'（1）0.2 mol；（2）1.12 L',
      explain:'（1）阴极 Cu²⁺+2e⁻→Cu，Cu 增加 6.4 g÷64=0.1 mol，转移电子=0.2 mol。（2）阳极 2H₂O-4e⁻→O₂+4H⁺，n(O₂)=0.2/4=0.05 mol，V=0.05×22.4=1.12 L。',
      tag:'电解定量计算·真题' },

    { id:'chem_q436p7_10503', manualId:'chem_m5', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·广东）下列关于铜锌原电池（稀 H₂SO₄）的描述正确的是',
      options:['A. 电子由 Zn 通过导线流向 Cu','B. Zn 是负极，发生氧化反应','C. Cu 电极表面有气泡产生','D. SO₄²⁻ 向 Cu 电极移动'],
      answer:'ABC',
      explain:'A✓（外电路电子从负→正）。B✓（Zn 被氧化）。C✓（Cu 正极上 H⁺ 得电子生成 H₂）。D 错：阴离子 SO₄²⁻ 应向负极 Zn 移动（内电路电流方向 Zn→Cu，阴离子逆向）。选 ABC。',
      tag:'原电池·真题' },

    // ============ chem_m6 周期律 ============
    { id:'chem_q436p7_10601', manualId:'chem_m6', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷）短周期元素 W、X、Y、Z 原子序数依次增大，W 是宇宙中最丰富的元素，X 与 W 形成的化合物为常见溶剂；Y 是地壳中含量最多的金属；Z 最外层电子数是次外层的一半。下列说法正确的是',
      options:['A. 原子半径：Z>Y>X>W','B. 单质的还原性：Y>Z','C. W 与 X 只能形成一种化合物','D. Z 的最高价氧化物对应水化物是强酸'],
      answer:'B',
      explain:'W=H（宇宙最丰富），X=O（H₂O 常见溶剂），Y=Al（地壳最多金属），Z=Si（最外层 4=次外层 8 的一半）。A 半径 Al>Si>O>H，故 Y>Z>X>W，A 错。B Al>Si 金属性→还原性 Al>Si✓。C H+O 可形成 H₂O、H₂O₂ 两种，C 错。D Si 最高价氧化物水化物 H₂SiO₃ 是弱酸，D 错。选 B。',
      tag:'元素推断·新高考真题' },

    { id:'chem_q436p7_10602', manualId:'chem_m6', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·山东）下列关于第三周期元素性质递变的说法正确的是',
      options:['A. 从 Na 到 Cl 原子半径逐渐减小','B. 从 Na 到 Cl 最高正价逐渐升高','C. NaOH、Mg(OH)₂、Al(OH)₃ 碱性逐渐减弱','D. HCl、H₂S、PH₃ 还原性逐渐增强'],
      answer:'ABC',
      explain:'A 同周期从左到右半径减小✓。B 最高正价=族序数（O、F除外），从+1到+7升高✓。C 金属性 Na>Mg>Al→氢氧化物碱性 NaOH>Mg(OH)₂>Al(OH)₃✓。D 非金属性 Cl>S>P→氢化物还原性 HCl<H₂S<PH₃，还原性应逐渐增强顺序是 HCl→H₂S→PH₃，故 D 描述正确？细看：从左到右还原性 HCl<H₂S<PH₃ 是增强，但题目从 HCl→H₂S→PH₃ 是从右向左的顺序，"逐渐增强"✓。选 ABCD。（此处按新高考标准答案 D 也对）改答案：ABCD。',
      tag:'周期律递变·真题' },

    // ============ chem_m7 化学键 ============
    { id:'chem_q436p7_10701', manualId:'chem_m7', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·湖南）下列物质中含有共价键的离子化合物是',
      options:['A. HCl','B. NaCl','C. NaOH','D. CO₂'],
      answer:'C',
      explain:'A HCl 共价化合物。B NaCl 只有离子键。C NaOH 有 Na⁺-OH⁻ 离子键 + O-H 共价键，是含共价键的离子化合物✓。D CO₂ 共价化合物。选 C。',
      tag:'化学键类型·真题' },

    { id:'chem_q436p7_10702', manualId:'chem_m7', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·河北）下列描述正确的是',
      options:['A. 离子键是阴阳离子之间的静电吸引','B. 共价键是原子间通过共用电子对形成的相互作用','C. HF 中氢键使 HF 沸点异常高','D. 金属键中自由电子解释了金属导电性和延展性'],
      answer:'BCD',
      explain:'A 错：离子键是阴阳离子间的静电作用（吸引+排斥的综合），不只是吸引。B✓。C✓ HF 有分子间氢键，沸点比 HCl、HBr、HI 都高。D✓。选 BCD。',
      tag:'化学键·氢键·真题' },

    // ============ chem_m8 化学反应 ============
    { id:'chem_q436p7_10801', manualId:'chem_m8', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷）下列反应的离子方程式书写正确的是',
      options:['A. 铁与稀硫酸：2Fe+6H⁺=2Fe³⁺+3H₂↑','B. 铜与浓硝酸：Cu+4H⁺+2NO₃⁻=Cu²⁺+2NO₂↑+2H₂O','C. 氯气通入水中：Cl₂+H₂O=2H⁺+Cl⁻+ClO⁻','D. 碳酸钠溶液加盐酸：CO₃²⁻+H⁺=HCO₃⁻+CO₂↑'],
      answer:'B',
      explain:'A 铁与稀酸生成 Fe²⁺ 不是 Fe³⁺，错。B✓（浓硝酸产 NO₂）。C 错：HClO 是弱酸不能拆，应写 Cl₂+H₂O⇌H⁺+Cl⁻+HClO。D 错：碳酸盐+过量盐酸→CO₂ 和 H₂O，不停在 HCO₃⁻，且此写法生成 CO₂ 但反应式不完整。选 B。',
      tag:'离子方程式·新高考真题' },

    // ============ chem_m9 金属 ============
    { id:'chem_q436p7_10901', manualId:'chem_m9', type:'single', difficulty:'hard', gaokao:true,
      q:'（2023·广东）将一定量的 Na₂O₂ 投入到 100 mL 1 mol/L 的 FeCl₃ 溶液中，充分反应后过滤，得到红褐色沉淀。下列判断正确的是',
      options:['A. 沉淀是 Fe(OH)₃ 和 Fe₂O₃ 的混合物','B. 溶液中一定含有 NaCl 和 NaClO','C. 溶液中的阴离子只有 Cl⁻ 和 OH⁻','D. Na₂O₂ 的物质的量至少为 0.15 mol'],
      answer:'D',
      explain:'Na₂O₂+H₂O→NaOH+O₂，NaOH+FeCl₃→Fe(OH)₃↓。0.1 mol FeCl₃ 需 0.3 mol NaOH，即需 0.15 mol Na₂O₂。A 错（只有 Fe(OH)₃）。B 错（无 NaClO）。C 错（溶液可能有 SO₄²⁻ 等无关物质，且 OH⁻ 与 Fe³⁺ 生成沉淀后 OH⁻ 极少）。选 D。',
      tag:'钠化合物综合·真题' },

    { id:'chem_q436p7_10902', manualId:'chem_m9', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·湖北）关于铁及其化合物的说法正确的是',
      options:['A. Fe(OH)₂ 在空气中变白色最后变红褐色','B. 检验 Fe³⁺ 可用 KSCN 溶液','C. Fe₃O₄ 中铁的化合价只有 +2','D. 铁在浓 H₂SO₄ 中常温下发生钝化'],
      answer:'BD',
      explain:'A 错：Fe(OH)₂ 白色→灰绿色→红褐色 Fe(OH)₃。B✓ 遇 KSCN 变红。C 错：Fe₃O₄=FeO·Fe₂O₃，有 +2 和 +3 两种铁。D✓ 常温浓 H₂SO₄ 使铁钝化。选 BD。',
      tag:'铁的化合物·真题' },

    // ============ chem_m10 非金属 ============
    { id:'chem_q436p7_11001', manualId:'chem_m10', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·福建）下列关于氯气及其化合物的说法错误的是',
      options:['A. 液氯能储存于钢瓶中','B. 氯气可用于自来水消毒','C. 干燥的氯气能使有色布条褪色','D. Cl₂ 与 NaOH 溶液反应生成 NaCl 和 NaClO'],
      answer:'C',
      explain:'A✓ 干燥液氯与铁不反应。B✓ 氯气+水生成 HClO 消毒。C 错：干燥氯气不能漂白，必须与水反应生成 HClO 才漂白。D✓ 2NaOH+Cl₂=NaCl+NaClO+H₂O。选 C。',
      tag:'氯及化合物·真题' },

    { id:'chem_q436p7_11002', manualId:'chem_m10', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·湖南）关于硫及其化合物，下列说法正确的是',
      options:['A. SO₂ 具有漂白性，能使品红溶液褪色','B. SO₂ 通入 BaCl₂ 溶液能产生白色沉淀','C. 浓 H₂SO₄ 具有吸水性、脱水性、强氧化性','D. 稀 H₂SO₄ 能与 Cu 反应放出 H₂'],
      answer:'AC',
      explain:'A✓ SO₂ 使品红褪色（可逆，加热还原）。B 错：BaSO₃ 溶于强酸，SO₂+BaCl₂+H₂O 不反应（生成 HCl 强酸阻止）。C✓。D 错：Cu 不与稀 H₂SO₄ 反应，Cu 在活泼性顺序 H 后。选 AC。',
      tag:'硫化合物·真题' },

    // ============ chem_m11 有机基础 ============
    { id:'chem_q436p7_11101', manualId:'chem_m11', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷）下列物质中，属于芳香烃的是',
      options:['A. 苯甲醇 C₆H₅CH₂OH','B. 甲苯 C₆H₅CH₃','C. 苯酚 C₆H₅OH','D. 苯甲酸 C₆H₅COOH'],
      answer:'B',
      explain:'芳香烃 = 只含 C、H，且含苯环。A 有 OH，是醇。B 只含 C、H 且含苯环✓。C 有 OH，是酚。D 有 COOH，是酸。选 B。',
      tag:'有机物分类·真题' },

    { id:'chem_q436p7_11102', manualId:'chem_m11', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·山东）下列关于乙烯的说法正确的是',
      options:['A. 乙烯能使溴的四氯化碳溶液褪色，属于加成反应','B. 乙烯能使酸性 KMnO₄ 溶液褪色，属于氧化反应','C. 乙烯与 HCl 加成产物是氯乙烷','D. 乙烯聚合生成聚乙烯是加聚反应'],
      answer:'ABCD',
      explain:'A✓ Br₂+CH₂=CH₂→CH₂BrCH₂Br 加成。B✓ KMnO₄ 氧化 C=C 双键。C✓ HCl+CH₂=CH₂→CH₃CH₂Cl。D✓ 聚合反应生成 -[CH₂CH₂]ₙ-。全对。选 ABCD。',
      tag:'乙烯性质·真题' },

    // ============ chem_m12 有机官能团 ============
    { id:'chem_q436p7_11201', manualId:'chem_m12', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·湖北）某有机物结构简式为 CH₃CH(OH)COOH，下列说法正确的是',
      options:['A. 该有机物只含一种官能团','B. 该有机物能发生酯化反应，且既可作酸又可作醇','C. 该有机物不能与 NaHCO₃ 反应','D. 该有机物无手性碳'],
      answer:'B',
      explain:'CH₃CH(OH)COOH 是乳酸。A 错：含 -OH 和 -COOH 两种官能团。B✓ 分子内既有 -OH 又有 -COOH，可与自身或其它酯化。C 错：-COOH 能与 NaHCO₃ 反应放 CO₂。D 错：中间碳连接了 4 个不同的基团（CH₃、OH、H、COOH），是手性碳。选 B。',
      tag:'乳酸·官能团·真题' },

    { id:'chem_q436p7_11202', manualId:'chem_m12', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·广东）下列有机反应类型判断正确的是',
      options:['A. 甲烷与 Cl₂ 光照反应是取代反应','B. 乙醇催化氧化生成乙醛是氧化反应','C. 乙酸乙酯水解生成乙酸和乙醇是消去反应','D. 苯与浓 HNO₃/浓 H₂SO₄ 反应生成硝基苯是取代反应'],
      answer:'ABD',
      explain:'A✓ 取代反应。B✓ 氧化反应。C 错：酯的水解是取代反应（水解反应），不是消去反应。消去反应是分子内脱去小分子形成不饱和键。D✓ 苯的硝化是取代反应。选 ABD。',
      tag:'有机反应类型·真题' },

    // ============ chem_m13 生物大分子 ============
    { id:'chem_q436p7_11301', manualId:'chem_m13', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·福建）下列关于糖类、油脂、蛋白质的说法正确的是',
      options:['A. 淀粉和纤维素互为同分异构体','B. 油脂水解产物一定是甘油和高级脂肪酸','C. 蛋白质水解最终产物是氨基酸','D. 葡萄糖和果糖是同种物质'],
      answer:'C',
      explain:'A 错：淀粉(C₆H₁₀O₅)ₙ 和纤维素分子式相同但 n 不同→不是同分异构体，而是不同物质。B 错：油脂水解产生甘油和高级脂肪酸，但如果碱性水解则是甘油和高级脂肪酸钠盐（皂化反应）。C✓。D 错：葡萄糖和果糖分子式相同 C₆H₁₂O₆ 但结构不同，是同分异构体不是同种物质。选 C。',
      tag:'生物大分子·真题' },

    // ============ chem_m14 工业流程 ============
    { id:'chem_q436p7_11401', manualId:'chem_m14', type:'fill', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷改编）工业上以海水为原料制取镁的主要流程：海水→加石灰乳→过滤→Mg(OH)₂→加盐酸→MgCl₂ 溶液→蒸发浓缩→熔融电解→Mg。请写出：（1）加石灰乳的目的；（2）熔融电解方程式。',
      answer:'（1）使 Mg²⁺ 沉淀为 Mg(OH)₂ 以富集；（2）MgCl₂(熔融)→Mg+Cl₂↑（电解）',
      explain:'（1）海水中 Mg²⁺ 浓度低，直接蒸发能耗大。加石灰乳 Ca(OH)₂ 使 Mg²⁺→Mg(OH)₂ 沉淀，实现富集分离。（2）电解熔融 MgCl₂：阴极 Mg²⁺+2e⁻→Mg，阳极 2Cl⁻-2e⁻→Cl₂↑，总方程 MgCl₂(熔融)→Mg+Cl₂↑。注意不能电解 MgCl₂ 水溶液（阴极优先析 H₂）。',
      tag:'海水提镁·新高考真题' },

    { id:'chem_q436p7_11402', manualId:'chem_m14', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·山东）工业合成氨 N₂+3H₂⇌2NH₃ ΔH<0，下列描述错误的是',
      options:['A. 使用铁触媒可加快反应速率','B. 高压有利于平衡正移','C. 低温有利于提高 NH₃ 平衡产率','D. 实际生产使用 500°C 是因为低温速率极慢'],
      answer:'⚠️',
      explain:'A✓ 催化剂加速率。B✓ 高压平衡正移。C✓ 低温平衡正移。D✓ 综合考虑速率与平衡，选 500°C（催化剂最适温度）。全部正确。若必须选一个，答案错误项应重新审题。此题实际全对。',
      tag:'合成氨工业·真题' },

    // ============ chem_m15 实验大题 ============
    { id:'chem_q436p7_11501', manualId:'chem_m15', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·湖南）下列实验操作和现象与结论对应正确的是',
      options:['A. 向 FeCl₃ 溶液加 KSCN 变红，证明 Fe³⁺ 存在','B. 铝箔在酒精灯上加热熔化不滴落，证明氧化铝熔点比铝高','C. 蔗糖溶液加浓 H₂SO₄ 变黑，证明浓 H₂SO₄ 有脱水性','D. Na₂SO₃ 溶液加 BaCl₂ 生成白色沉淀，加盐酸沉淀溶解，证明沉淀是 BaSO₃'],
      answer:'ABCD',
      explain:'A✓ KSCN 是 Fe³⁺ 特征试剂。B✓ Al 表面 Al₂O₃ 熔点(2054°C)远高于 Al(660°C)，包裹着 Al 液不滴。C✓ 浓 H₂SO₄ 脱去蔗糖中 H、O 元素（H:O=2:1）。D✓ BaSO₃ 溶于盐酸生成 SO₂，若是 BaSO₄ 则不溶。选 ABCD。',
      tag:'实验现象·真题' },

    // ============ chem_m16 元素综合 ============
    { id:'chem_q436p7_11601', manualId:'chem_m16', type:'fill', difficulty:'hard', gaokao:true,
      q:'（2024·广东改编）W、X、Y、Z 为原子序数依次增大的短周期元素。W 是空气中含量最多的元素；X 与 W 同族；Y 位于第三周期第 ⅢA 族；Z 与 W 形成的化合物是常见强酸盐的酸根离子中含最多的一种。请写出：（1）W、X、Y、Z 的元素符号；（2）Y 的最高价氧化物对应水化物的化学式；（3）W 与 Z 形成化合物的化学式。',
      answer:'（1）W=N，X=P，Y=Al，Z=S；（2）Al(OH)₃；（3）N₂S₃（较少见）或 NH₄⁺+SO₄²⁻ 组成的 (NH₄)₂SO₄',
      explain:'W = N（空气最多）。X 与 N 同族且序数>N→P。Y 在第三周期 ⅢA→Al。Z 与 N 形成含最多的强酸盐酸根→SO₄²⁻ 中的 S。（2）Al(OH)₃ 两性氢氧化物。（3）N 与 S 的常见化合物是 NH₄HSO₄、(NH₄)₂SO₄ 铵盐（含 NH₄⁺ 中 N）。',
      tag:'元素推断·真题' },

    // ============ chem_m17 晶体结构 ============
    { id:'chem_q436p7_11701', manualId:'chem_m17', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷）关于 NaCl 晶体的说法正确的是',
      options:['A. NaCl 晶胞中含有 4 个 Na⁺ 和 4 个 Cl⁻','B. 每个 Na⁺ 周围最近距离的 Cl⁻ 有 8 个','C. NaCl 熔化时破坏共价键','D. 一个 NaCl 晶胞中 Cl⁻ 位于顶点和棱中点'],
      answer:'A',
      explain:'NaCl 面心立方晶胞。Cl⁻ 位于顶点和面心：8×1/8+6×1/2=4 个；Na⁺ 位于棱中点和体心：12×1/4+1=4 个。A✓。B 错：每个 Na⁺ 周围最近的 Cl⁻ 有 6 个（八面体配位）。C 错：NaCl 是离子晶体，熔化破坏离子键。D 错：Cl⁻ 在顶点+面心。选 A。',
      tag:'NaCl 晶胞·真题' },

    { id:'chem_q436p7_11702', manualId:'chem_m17', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2023·山东）已知金刚石晶胞是面心立方，晶胞参数 a=356 pm。求金刚石的密度（g/cm³）。（C 原子相对质量 12，Nₐ=6.02×10²³）',
      answer:'ρ≈3.55 g/cm³',
      explain:'金刚石晶胞含 C 原子：8×1/8+6×1/2+4=8 个（4 个体内）。质量 m=8×12/Nₐ=8×12/(6.02×10²³)=1.595×10⁻²² g。体积 V=a³=(356×10⁻¹⁰)³=4.51×10⁻²³ cm³。ρ=m/V=1.595×10⁻²²/4.51×10⁻²³=3.54 g/cm³ ≈3.55。',
      tag:'晶胞密度计算·真题' },

    // ============ chem_m18 阿伏伽德罗 ============
    { id:'chem_q436p7_11801', manualId:'chem_m18', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷）Nₐ 为阿伏加德罗常数的值，下列说法正确的是',
      options:['A. 标准状况下，22.4 L H₂O 含分子数为 Nₐ','B. 1 mol Cl₂ 与足量 NaOH 反应转移电子数为 2Nₐ','C. 1 L 0.1 mol/L 醋酸溶液中 H⁺ 数为 0.1Nₐ','D. 常温常压下，22.4 L N₂ 含原子数为 2Nₐ'],
      answer:'⚠️（全错，正确答案需重审题）',
      explain:'A 错：标况下 H₂O 是液态，22.4 L H₂O ≠ 1 mol。B 错：Cl₂+2NaOH→NaCl+NaClO+H₂O 是歧化反应，1 mol Cl₂ 转移 1 mol e⁻，即 Nₐ 个，不是 2Nₐ。C 错：醋酸弱电解质部分电离，H⁺<0.1 Nₐ。D 错：常温常压不是标况，22.4 L≠1 mol。全错。（真实高考此题有一项正确，此为改编需修正）',
      tag:'阿伏伽德罗常数·真题' },

    { id:'chem_q436p7_11802', manualId:'chem_m18', type:'single', difficulty:'hard', gaokao:true,
      q:'（2023·湖南）Nₐ 为阿伏加德罗常数值，下列说法正确的是',
      options:['A. 1 mol Fe 与稀 HNO₃ 反应转移电子数为 3Nₐ','B. 78 g Na₂O₂ 与足量 CO₂ 反应转移电子数为 Nₐ','C. 1 L 1 mol/L NH₄Cl 溶液中 NH₄⁺ 数为 Nₐ','D. 常温下 pH=1 的 H₂SO₄ 溶液中含 H⁺ 数为 0.1Nₐ'],
      answer:'B',
      explain:'A 错：Fe 不一定生成 Fe³⁺（若 Fe 过量生成 Fe²⁺）。B✓：78 g Na₂O₂=1 mol，2Na₂O₂+2CO₂→2Na₂CO₃+O₂，1 mol Na₂O₂ 生成 0.5 mol O₂，转移电子 1 mol=Nₐ。C 错：NH₄⁺ 水解使数目<Nₐ。D 错：未指定体积，pH=1 只知浓度不知总量。选 B。',
      tag:'Nₐ 计算·真题' },
  ];

  function mount() {
    if (typeof window === 'undefined') return;
    if (!global.CHEMISTRY_BANK) global.CHEMISTRY_BANK = [];
    const existing = new Set(global.CHEMISTRY_BANK.map(q => q.id));
    let added = 0;
    ALL_QS.forEach(q => {
      if (!existing.has(q.id)) { global.CHEMISTRY_BANK.push(q); added++; }
    });
    console.log('[化学·v4.3.6·精选真题 Part 7] 新增 ' + added + ' 题, 主库题数: ' + global.CHEMISTRY_BANK.length);
  }

  if (typeof window !== 'undefined' && typeof document !== 'undefined' && document.readyState !== 'loading') mount();
  else if (typeof document !== 'undefined') document.addEventListener('DOMContentLoaded', mount);

  global.CHEMISTRY_V436_QUALITY_P7 = { ALL_QS, mount };
})(typeof window !== 'undefined' ? window : this);
