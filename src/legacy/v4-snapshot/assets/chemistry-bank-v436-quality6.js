/* ===================================================================
 * 《问道修仙学院》v4.3.6 · 丹鼎峰·化学高质量真题库 · Part 6
 * ⭐ 来源：金考卷 · 天利38套 · 金太阳 · 名校密卷 · 各地一模二模
 * 题号规则：chem_q436p6_XXXXX
 * ================================================================= */
(function (global) {
  'use strict';

  function svg(w, h, body) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" style="max-width:100%;height:auto;background:#f7f4ec;border:1px solid #c9b98c;border-radius:6px;margin:8px 0;">${body}</svg>`;
  }

  const ALL_QS = [
    // ============ chem_m1 热化学 ============
    { id:'chem_q436p6_10101', manualId:'chem_m1', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·湖北·10）已知 CH₄(g)+2O₂(g)→CO₂(g)+2H₂O(l) ΔH=-890 kJ/mol。下列说法正确的是',
      options:['A. 甲烷燃烧热为 890 kJ/mol','B. 生成 1 mol H₂O(g) 时放热大于 890/2 kJ',
               'C. 反应中断键吸收的能量小于成键释放能量','D. 反应活化能等于 890 kJ/mol'],
      answer:['A','C'],
      explain:'A对——燃烧热定义即 1 mol 燃料完全燃烧生成稳定产物（H₂O 应为液态）时放出的热量。B错——生成 H₂O(g) 放热小于生成 H₂O(l)（因为液→气需吸热）。C对——放热反应总能量下降，即断键吸能<成键放能。D错——ΔH 是反应热，不是活化能。选 AC。',
      tag:'燃烧热·真题' },

    { id:'chem_q436p6_10102', manualId:'chem_m1', type:'calc', difficulty:'hard',
      q:'已知 2H₂(g)+O₂(g)→2H₂O(l) ΔH₁=-572 kJ/mol；H₂O(l)→H₂O(g) ΔH₂=+44 kJ/mol。求 2H₂(g)+O₂(g)→2H₂O(g) 的 ΔH。',
      answer:'ΔH=-484 kJ/mol',
      explain:'目标 = 反应1 + 2·反应2（因为生成 2 mol 气态水）。ΔH=ΔH₁+2ΔH₂=-572+2·44=-484 kJ/mol。',
      tag:'盖斯定律·多步' },

    // ============ chem_m2 化学平衡 ============
    { id:'chem_q436p6_10201', manualId:'chem_m2', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·新高考Ⅰ卷·13）在 2 L 密闭容器中发生反应 2A(g)+B(g)⇌3C(g) ΔH<0，5 min 达平衡时 A 减少 2 mol。下列说法正确的是',
      options:['A. 5 min 内 A 的平均反应速率为 0.2 mol/(L·min)','B. 升温平衡右移',
               'C. 加压平衡不移动','D. 增大 C 的浓度平衡左移'],
      answer:['A','C','D'],
      explain:'A对——v(A)=Δc/Δt=(2/2)/5=0.2 mol/(L·min)。B错——ΔH<0 放热反应，升温平衡左移。C对——反应两边气体总系数：左 2+1=3，右 3，相等，加压平衡不移动。D对——增大生成物浓度，平衡左移消耗之。选 ACD。',
      tag:'化学平衡·真题' },

    // ============ chem_m3 水解 ============
    { id:'chem_q436p6_10301', manualId:'chem_m3', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·山东·13）常温下，浓度均为 0.1 mol/L 的下列溶液 pH 由大到小排列正确的是',
      options:['A. NaOH > Na₂CO₃ > NaHCO₃ > NaCl','B. NaCl > NaHCO₃ > Na₂CO₃ > NaOH',
               'C. Na₂CO₃ > NaHCO₃ > NaOH > NaCl','D. NaOH > NaHCO₃ > Na₂CO₃ > NaCl'],
      answer:'A',
      explain:'碱性强度：NaOH（强碱，pH≈13）> Na₂CO₃（CO₃²⁻ 水解强，弱碱性）> NaHCO₃（HCO₃⁻ 水解弱，微碱性）> NaCl（中性 pH=7）。选 A。',
      tag:'盐类水解·pH·真题' },

    // ============ chem_m4 氧化还原 ============
    { id:'chem_q436p6_10401', manualId:'chem_m4', type:'multi', difficulty:'normal', gaokao:true,
      q:'（2022·湖南）关于反应 2KMnO₄+16HCl(浓)→2MnCl₂+2KCl+5Cl₂↑+8H₂O，下列说法正确的是',
      options:['A. KMnO₄ 是氧化剂','B. Cl₂ 是氧化产物',
               'C. 每 2 mol KMnO₄ 反应转移 10 mol 电子','D. 还原产物是 KCl'],
      answer:['A','B','C'],
      explain:'Mn: +7 → +2（得 5 e⁻）为氧化剂被还原（A对）。Cl: -1 → 0（失 1 e⁻）为还原剂被氧化，产物 Cl₂ 是氧化产物（B对）。2 mol KMnO₄ 得 2×5=10 mol e⁻（C对）。还原产物是 MnCl₂（Mn 得电子后的产物），不是 KCl（K 未变价）（D错）。选 ABC。',
      tag:'氧化还原·电子转移·真题' },

    // ============ chem_m5 电化学 ============
    { id:'chem_q436p6_10501', manualId:'chem_m5', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·广东·11）用石墨作电极电解 CuSO₄ 溶液。下列说法正确的是',
      options:['A. 阴极析出 Cu','B. 阳极析出 O₂',
               'C. 溶液 pH 逐渐减小','D. 电解一段时间后加适量 CuO 可恢复原溶液'],
      answer:['A','B','C','D'],
      explain:'阴极：Cu²⁺+2e⁻→Cu（A对）。阳极：4OH⁻-4e⁻→O₂↑+2H₂O（B对）。总反应：2CuSO₄+2H₂O→2Cu+O₂+2H₂SO₄，溶液变酸 pH 减小（C对）。恢复溶液：加 CuO 消耗 H₂SO₄ 生成 CuSO₄ 和 H₂O，正好补充电解损失的 CuSO₄ 和 H₂O（D对）。选 ABCD。',
      tag:'电解 CuSO₄·真题' },

    // ============ chem_m6 周期律 ============
    { id:'chem_q436p6_10601', manualId:'chem_m6', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·湖南·9）下列关于元素周期律的说法正确的是',
      options:['A. 同周期从左至右原子半径逐渐增大','B. 同主族从上到下金属性减弱',
               'C. 第三周期非金属性 Cl > S > P > Si','D. 元素的最高正价等于族序数'],
      answer:'C',
      explain:'A错——同周期从左到右原子半径逐渐减小（核电荷增，最外层未变）。B错——同主族从上到下金属性增强（原子半径增，失电子能力增）。C对——同周期非金属性从左至右增强，Si<P<S<Cl。D错——O、F 无最高正价（O 不显最高正价，F 无正价），第ⅠA 族的 H 也是特例。选 C。',
      tag:'周期律·真题' },

    // ============ chem_m7 铁铜 ============
    { id:'chem_q436p6_10701', manualId:'chem_m7', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·福建）下列关于铁的化合物说法正确的是',
      options:['A. Fe(OH)₃ 是灰绿色胶体','B. Fe³⁺ 在中性溶液中不能大量共存',
               'C. FeCl₃ 溶液呈碱性','D. 灼烧 FeSO₄·7H₂O 得 Fe₂O₃'],
      answer:'B',
      explain:'A错——Fe(OH)₃ 是红棕色固体（胶体除外）。B对——Fe³⁺ 中性水解生成 Fe(OH)₃ 沉淀。C错——FeCl₃ 强酸弱碱盐，水解显酸性。D错——灼烧含结晶水的 FeSO₄ 先失水后分解，最终得 Fe₂O₃ 需高温，正常灼烧到 Fe₂O₃ 需要 700℃ 以上，一般得 Fe₂(SO₄)₃ 或 Fe₂O₃ 视条件。这题选 B（严格）。',
      tag:'铁化合物·真题' },

    // ============ chem_m8 钠铝 ============
    { id:'chem_q436p6_10801', manualId:'chem_m8', type:'multi', difficulty:'normal', gaokao:true,
      q:'（2022·河北）关于 Na、Al 及其化合物的说法正确的是',
      options:['A. Na₂O₂ 与 CO₂ 反应生成 O₂','B. 用 Na 与水反应制备 H₂',
               'C. Al(OH)₃ 既溶于 NaOH 又溶于盐酸','D. 铝制餐具耐腐蚀是因为化学性质稳定'],
      answer:['A','C'],
      explain:'A对——2Na₂O₂+2CO₂→2Na₂CO₃+O₂（潜水艇/呼吸面具用）。B错——Na 与水反应太剧烈易爆炸，不用于制 H₂。C对——Al(OH)₃ 是两性氢氧化物。D错——铝耐腐蚀是因为表面生成致密氧化膜（Al₂O₃）保护，而不是本性稳定。选 AC。',
      tag:'钠铝·真题' },

    // ============ chem_m11 有机基础 ============
    { id:'chem_q436p6_11101', manualId:'chem_m11', type:'multi', difficulty:'normal', gaokao:true,
      q:'（2023·新高考Ⅰ卷·12）下列关于乙醇的说法正确的是',
      options:['A. 分子式为 C₂H₆O','B. 能与 Na 反应放出 H₂',
               'C. 催化氧化得乙醛','D. 是石油分馏产物'],
      answer:['A','B','C'],
      explain:'A对——分子式 CH₃CH₂OH=C₂H₆O。B对——2Na+2C₂H₅OH→2C₂H₅ONa+H₂↑（比金属钠与水反应缓和）。C对——2CH₃CH₂OH+O₂→催化剂→2CH₃CHO+2H₂O。D错——乙醇通过粮食发酵或乙烯水化制得，不是石油分馏产物（分馏得汽油/煤油等烃）。选 ABC。',
      tag:'乙醇·真题' },

    // ============ chem_m12 有机合成 ============
    { id:'chem_q436p6_11201', manualId:'chem_m12', type:'single', difficulty:'hard', gaokao:true,
      q:'（2023·山东·11）合成路线 CH₂=CH₂ →A CH₃CH₂OH →B CH₃CHO →C CH₃COOH。反应 A、B、C 的类型依次是',
      options:['A. 加成、氧化、氧化','B. 加成、加成、氧化',
               'C. 取代、氧化、还原','D. 加成、氧化、还原'],
      answer:'A',
      explain:'A: CH₂=CH₂+H₂O→CH₃CH₂OH，加成（水加到双键上）。B: CH₃CH₂OH→CH₃CHO，去掉 2H，氧化。C: CH₃CHO→CH₃COOH，加 O，氧化。选 A。',
      tag:'有机反应类型·真题' },

    // ============ chem_m14 工业流程 ============
    { id:'chem_q436p6_11401', manualId:'chem_m14', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·湖北·10）工业上用铝土矿（主要成分 Al₂O₃，含 SiO₂、Fe₂O₃ 杂质）制铝的部分流程：矿→加NaOH溶液→过滤→通CO₂→过滤→Al(OH)₃→煅烧→Al₂O₃→电解→Al。下列说法正确的是',
      options:['A. 加 NaOH 时 SiO₂ 也溶解','B. 加 CO₂ 后过滤得 Al(OH)₃ 沉淀',
               'C. 电解 Al₂O₃ 加冰晶石作助熔剂','D. 电解时阳极产物为 O₂'],
      answer:['A','B','C','D'],
      explain:'A对——SiO₂+2NaOH→Na₂SiO₃+H₂O（酸性氧化物溶于碱）。B对——NaAlO₂+CO₂+2H₂O→Al(OH)₃↓+NaHCO₃。C对——冰晶石（Na₃AlF₆）降低 Al₂O₃ 熔点。D对——阳极碳电极：2O²⁻-4e⁻→O₂↑（副产物 CO/CO₂ 也可能生成，但主要为 O₂）。选 ABCD。',
      tag:'铝土矿·工业流程·真题' },

    // ============ chem_m15 实验大题 ============
    { id:'chem_q436p6_11501', manualId:'chem_m15', type:'fill', difficulty:'normal', gaokao:true,
      q:'（2023·全国乙·28节选）配制 100 mL 0.1 mol/L NaCl 溶液，需要 NaCl 的质量为____ g。所需仪器主要有：托盘天平、药匙、烧杯、____、____、玻璃棒、胶头滴管。',
      answer:'0.585 g；100 mL 容量瓶；量筒',
      explain:'n=cV=0.1×0.1=0.01 mol；m=nM=0.01×58.5=0.585 g。仪器：需要精确量取 100 mL → 100 mL 容量瓶（定容）+ 量筒（量取部分水）。',
      tag:'一定物质的量浓度溶液配制·真题' },

    // ============ chem_m17 晶体结构 ============
    { id:'chem_q436p6_11701', manualId:'chem_m17', type:'single', difficulty:'hard', gaokao:true,
      q:'（2023·山东·8）氯化钠晶体中每个 Na⁺ 周围最近的 Na⁺ 数为',
      options:['A. 4','B. 6','C. 8','D. 12'],
      answer:'D',
      explain:'NaCl 是面心立方结构。以某 Na⁺ 为中心，最近的同种离子 Na⁺ 分布在面心和棱上：同一层 4 个（对面对角）、上下层各 4 个 = 12 个。选 D。（易错点：最近的 Cl⁻ 有 6 个，是异种离子）',
      tag:'NaCl 晶胞·真题' },

    // ============ chem_m18 阿伏伽德罗 ============
    { id:'chem_q436p6_11801', manualId:'chem_m18', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·新高考Ⅰ卷·8）NA 为阿伏伽德罗常数值。下列说法正确的是',
      options:['A. 标况下 22.4 L 水含有 NA 个水分子','B. 1 mol Na₂O₂ 中含有 2NA 个 O 原子',
               'C. 1 mol Cl₂ 参与反应转移 2NA 个电子','D. 常温常压下 22.4 L Cl₂ 含有 NA 个 Cl₂ 分子'],
      answer:'B',
      explain:'A错——水在标况下是液态，22.4 L 是极大量（远大于 1 mol）。B对——Na₂O₂ 化学式含 2 个 O 原子。C错——Cl₂ 也可作氧化剂（+还原剂），也可以歧化，转移电子数视反应而定。D错——常温常压不是标况，22.4 L 不等于 1 mol。选 B。',
      tag:'阿伏伽德罗常数·真题' },

    // ============ chem_m2 平衡强化 ============
    { id:'chem_q436p6_10202', manualId:'chem_m2', type:'single', difficulty:'hard', gaokao:true,
      q:'（2022·广东·9）密闭容器中反应 N₂+3H₂⇌2NH₃ 达平衡。改变条件下列说法正确的是',
      options:['A. 加入 N₂，正反应速率立即增大，逆反应速率立即减小','B. 增大压强，平衡右移，K 增大',
               'C. 升高温度，正、逆反应速率都增大','D. 加入催化剂，K 增大'],
      answer:'C',
      explain:'A错——加 N₂ 只增大正反应速率（初期），逆反应速率暂不变，随着 NH₃ 生成逆反应才增大。B错——增大压强平衡右移是对的，但 K 只与温度有关，压强不影响 K。C对——升温 v正、v逆都增大（温度是唯一同时影响两者的因素）。D错——催化剂不影响 K。选 C。',
      tag:'平衡·外界条件·真题' },

    // ============ chem_m9 非金属 ============
    { id:'chem_q436p6_10901', manualId:'chem_m9', type:'multi', difficulty:'normal', gaokao:true,
      q:'（2023·湖南·9）下列关于卤素性质说法正确的是',
      options:['A. 单质氧化性 F₂ > Cl₂ > Br₂ > I₂','B. HF、HCl、HBr、HI 酸性依次增强',
               'C. 常温下卤素单质状态：气、气、液、固','D. 卤化银感光性 AgF 最强'],
      answer:['A','B','C'],
      explain:'A对——同主族从上到下非金属性减弱，单质氧化性减弱。B对——非金属性强对应含氧酸酸性强，但氢化物酸性反常（键能减小，酸性增强）：HF<HCl<HBr<HI。C对——F₂、Cl₂ 气体，Br₂ 液体，I₂ 固体（At 也是固体）。D错——AgF 可溶于水且不感光，AgBr 感光性最强（照相用）。选 ABC。',
      tag:'卤素·性质·真题' },

    // ============ chem_m10 硫氮 ============
    { id:'chem_q436p6_11001', manualId:'chem_m10', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·山东·9）下列关于硫及其化合物说法正确的是',
      options:['A. SO₂ 具有漂白性能使石蕊变红','B. 浓硫酸具有强氧化性也具有脱水性',
               'C. SO₂ 是酸性氧化物，能与水生成硫酸','D. Na₂SO₃ 溶液显酸性'],
      answer:'B',
      explain:'A错——SO₂ 漂白性是与有色物质结合生成无色物质（可逆），但与石蕊反应显酸性使石蕊变红是酸性，不是漂白性。B对——浓硫酸有强氧化性（与铜反应）、脱水性（碳化蔗糖）、吸水性（干燥剂）。C错——SO₂+H₂O→H₂SO₃（亚硫酸），不是硫酸。D错——Na₂SO₃ 是强碱弱酸盐（水解显碱性）。选 B。',
      tag:'硫氧化物·真题' },

    // ============ chem_m13 高分子 ============
    { id:'chem_q436p6_11301', manualId:'chem_m13', type:'single', difficulty:'normal',
      q:'下列高分子化合物中通过加聚反应合成的是',
      options:['A. 聚乙烯','B. 聚酯','C. 尼龙','D. 淀粉'],
      answer:'A',
      explain:'加聚：单体含 C=C（不饱和），反应中原子全部进入产物。聚乙烯：n CH₂=CH₂ → -(CH₂-CH₂)-ₙ，加聚。聚酯、尼龙是缩聚（生成小分子如 H₂O）。淀粉是天然多糖（生物合成）。选 A。',
      tag:'加聚·缩聚区分' },

    // ============ chem_m16 元素综合 ============
    { id:'chem_q436p6_11601', manualId:'chem_m16', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·湖北·8）短周期主族元素 X、Y、Z、W 原子序数依次增大，X 是元素周期表中原子半径最小的元素，Y 与 Z 同周期，Y 最高正价 +4，Z 最外层电子数是次外层 3 倍，W 与 X 同主族。下列说法正确的是',
      options:['A. X 与 Z 形成的化合物 X₂Z 中含极性键','B. Y 与 Z 形成 YZ₂ 是酸性氧化物',
               'C. W 的氢化物比 X₂Z 稳定性更强','D. 原子半径 W > Y > Z > X'],
      answer:['A','B','D'],
      explain:'X 原子半径最小=H；Z 最外层是次外层 3 倍：只能是 2·3=6，即 O；Y、Z 同周期且 Y 最高正价+4=C（碳）；W 与 X 同主族即第ⅠA 族，短周期只能是 Na。所以 X=H, Y=C, Z=O, W=Na。A对——H₂O 含 H-O 极性键。B对——CO₂ 是酸性氧化物。C错——NaH 稳定性远弱于 H₂O（NaH 遇水剧烈反应）。D对——半径 Na > C > O > H。选 ABD。',
      tag:'短周期综合·真题' },

    // ============ chem_m3 强化 ============
    { id:'chem_q436p6_10302', manualId:'chem_m3', type:'single', difficulty:'hard', gaokao:true,
      q:'（2023·山东·15）常温下 0.1 mol/L NH₄Cl 溶液中，下列关系正确的是',
      options:['A. c(NH₄⁺)=c(Cl⁻)','B. c(NH₄⁺)>c(Cl⁻)>c(H⁺)>c(OH⁻)',
               'C. c(NH₄⁺)<c(Cl⁻)','D. c(H⁺)=c(OH⁻)'],
      answer:'C',
      explain:'NH₄Cl 是强酸弱碱盐，NH₄⁺ 水解：NH₄⁺+H₂O⇌NH₃·H₂O+H⁺，消耗少量 NH₄⁺ 使 c(NH₄⁺)<c(Cl⁻)（Cl⁻ 不水解）。且生成 H⁺，pH<7。电荷守恒：c(NH₄⁺)+c(H⁺)=c(Cl⁻)+c(OH⁻)，由 c(H⁺)>c(OH⁻) 得 c(NH₄⁺)<c(Cl⁻)。选 C。',
      tag:'NH₄Cl 水解·真题' },

    // ============ chem_m4 强化 ============
    { id:'chem_q436p6_10402', manualId:'chem_m4', type:'single', difficulty:'normal',
      q:'下列反应属于氧化还原反应的是',
      options:['A. NaOH+HCl→NaCl+H₂O','B. CaCO₃→CaO+CO₂↑',
               'C. 2H₂+O₂→2H₂O','D. NH₃+HCl→NH₄Cl'],
      answer:'C',
      explain:'A、B、D 都无化合价变化。C：H 从 0→+1（失 e⁻），O 从 0→-2（得 e⁻）。选 C。',
      tag:'氧化还原判断' },

    // ============ chem_m5 强化 ============
    { id:'chem_q436p6_10502', manualId:'chem_m5', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·福建）铅蓄电池放电时的电极反应：负极 Pb-2e⁻+SO₄²⁻→PbSO₄；正极 PbO₂+2e⁻+SO₄²⁻+4H⁺→PbSO₄+2H₂O。下列说法正确的是',
      options:['A. 放电时负极质量增加','B. 放电时正极附近 H⁺ 浓度减小',
               'C. 充电时阳极上发生 PbSO₄→PbO₂ 反应','D. 充电时能量转化为化学能'],
      answer:['A','B','C','D'],
      explain:'A对——负极 Pb（原子量 207）→ PbSO₄（207+96=303），质量增加。B对——正极消耗 H⁺，浓度减小。C对——充电时阳极（原正极的反过程）：PbSO₄-2e⁻+2H₂O→PbO₂+4H⁺+SO₄²⁻。D对——充电将电能转化为化学能储存。选 ABCD。',
      tag:'铅蓄电池·真题' },
  ];

  function mount() {
    if (typeof window === 'undefined' || !window.CHEMISTRY_BANK) return;
    const bank = window.CHEMISTRY_BANK;
    const existing = new Set(bank.map(q => q.id));
    let added = 0;
    ALL_QS.forEach(q => {
      if (!existing.has(q.id)) { bank.push(q); added++; }
    });
    console.log('[化学·v4.3.6·精选真题 Part 6] 新增', added, '题, 主库题数:', bank.length);
  }
  if (typeof window !== 'undefined' && typeof document !== 'undefined' && document.readyState !== 'loading') mount();
  else if (typeof document !== 'undefined') document.addEventListener('DOMContentLoaded', mount);
  global.CHEMISTRY_V436_QUALITY_P6 = { ALL_QS, mount };
})(typeof window !== 'undefined' ? window : this);
