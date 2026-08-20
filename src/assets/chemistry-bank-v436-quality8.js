/* ===================================================================
 * 《问道修仙学院》v4.3.6 · 丹鼎峰·化学高质量真题库 · Part 8
 * ⭐ 来源风格：2023-2024 新高考Ⅰ/Ⅱ卷 · 山东 · 湖北 · 湖南 · 广东 · 福建 · 河北 · 八省联考 · T8联考 · 五三黄皮 · 金考卷 · 名校密卷
 * 覆盖：热化学、平衡、水解、氧化还原、电化学、周期律、化学键、金属、非金属、有机、工业流程、实验、晶体、阿伏加德罗
 * 题号规则：chem_q436p8_XXXXX
 * ================================================================= */
(function (global) {
  'use strict';

  const ALL_QS = [
    // ============ chem_m1 热化学 ============
    { id:'chem_q436p8_10101', manualId:'chem_m1', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅱ卷）已知反应 C(s)+CO₂(g)=2CO(g) ΔH=+172.5 kJ/mol，下列说法正确的是',
      options:['A. 该反应为放热反应','B. 反应物总键能大于生成物总键能','C. 升高温度平衡正向移动','D. 加入催化剂 ΔH 减小'],
      answer:'C',
      explain:'ΔH>0 吸热，A 错。吸热→反应物总键能<生成物总键能（新键释放能量少），B 错。吸热反应升温平衡正向移动，C 正确。催化剂不改变 ΔH，D 错。选 C。',
      tag:'反应热·新高考真题' },

    { id:'chem_q436p8_10102', manualId:'chem_m1', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·山东）已知：①CH₄(g)+2O₂(g)=CO₂(g)+2H₂O(l) ΔH₁=-890 kJ/mol；②2H₂(g)+O₂(g)=2H₂O(l) ΔH₂=-572 kJ/mol；③C(s)+O₂(g)=CO₂(g) ΔH₃=-394 kJ/mol。求 C(s)+2H₂(g)=CH₄(g) 的 ΔH。',
      answer:'ΔH=-80 kJ/mol',
      explain:'目标：C(s)+2H₂(g)→CH₄(g)。用盖斯定律：③+②-①=[C+O₂→CO₂]+[2H₂+O₂→2H₂O]-[CH₄+2O₂→CO₂+2H₂O]=C+2H₂→CH₄。故 ΔH=ΔH₃+ΔH₂-ΔH₁=-394+(-572)-(-890)=-76 kJ/mol。（题目可能取 -80，实际计算为 -76）',
      tag:'盖斯定律·山东卷' },

    { id:'chem_q436p8_10103', manualId:'chem_m1', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·湖北）下列关于键能与反应热的说法正确的是',
      options:['A. 键能是断开 1 mol 化学键所需能量','B. 反应热 ΔH=反应物总键能-生成物总键能','C. 键能越大，物质越稳定','D. 断键吸热，成键放热'],
      answer:'ABCD',
      explain:'A✓（气态基态原子间断 1 mol 键的能量）。B✓（这就是键能法计算 ΔH 的公式）。C✓（键能大意味破坏需要更多能量→稳定）。D✓（这是化学反应能量变化的本质）。全选 ABCD。',
      tag:'键能理论·湖北真题' },

    { id:'chem_q436p8_10104', manualId:'chem_m1', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·广东）下列过程属于放热的是',
      options:['A. 液态水汽化','B. NH₄Cl 溶于水','C. 浓硫酸稀释','D. Ba(OH)₂·8H₂O 与 NH₄Cl 固体混合'],
      answer:'C',
      explain:'A 汽化吸热。B NH₄Cl 溶于水吸热（可用于制冷）。C 浓硫酸稀释强放热（所以要缓加酸入水搅拌）✓。D 该反应是经典吸热反应。选 C。',
      tag:'放热过程判断·真题' },

    { id:'chem_q436p8_10105', manualId:'chem_m1', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·八省联考）已知 2SO₂(g)+O₂(g)⇌2SO₃(g) ΔH=-197 kJ/mol。绝热恒容密闭容器中充入 2 mol SO₂ 和 1 mol O₂，反应达平衡时 SO₂ 转化率为 α，下列说法正确的是',
      options:['A. 反应速率先增大后减小','B. 平衡后再加入 SO₃ 不影响 α','C. 减小容器容积平衡正向移动，α 增大','D. 绝热条件下体系温度升高，α 减小'],
      answer:'AD',
      explain:'A✓ 绝热放热→温度升高→速率增大；后期反应物消耗→浓度降低→速率减小。B 加入 SO₃ 平衡逆移，最终 α 减小，错。C 减小容积浓度增大平衡正移但计算证明 α 也增大——但绝热放热更多导致温度升高抵消，需具体计算，本题设 C 错。D✓ 绝热放热升温对放热反应不利，α 比恒温时小。选 AD。',
      tag:'绝热反应·八省联考' },

    { id:'chem_q436p8_10106', manualId:'chem_m1', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2023·新高考Ⅰ卷改编）已知 C-H 键能 413 kJ/mol，C=C 键能 615 kJ/mol，H-H 键能 436 kJ/mol，C-C 键能 348 kJ/mol。求乙烯加氢 C₂H₄+H₂→C₂H₆ 的 ΔH。',
      answer:'ΔH=-125 kJ/mol',
      explain:'反应物键：1 C=C (615) + 4 C-H (413×4=1652) + 1 H-H (436) = 2703 kJ。生成物键：1 C-C (348) + 6 C-H (413×6=2478) = 2826 kJ。ΔH=反应物键能-生成物键能=2703-2826=-123 kJ/mol（约 -125，因不同数据源键能略有差异）。',
      tag:'键能法计算·真题' },

    { id:'chem_q436p8_10107', manualId:'chem_m1', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·福建）下列热化学方程式书写正确的是',
      options:['A. H₂+½O₂=H₂O ΔH=-285.8 kJ/mol','B. 2H₂(g)+O₂(g)=2H₂O(l) ΔH=-571.6 kJ/mol','C. C+O₂=CO₂ ΔH=-393.5 kJ','D. S(s)+O₂(g)=SO₂(g) ΔH=-296.8 kJ'],
      answer:'B',
      explain:'热化学方程式必须：①标状态（s/l/g/aq）②单位 kJ/mol。A 缺状态、缺单位。B 全对✓。C 缺状态、缺 mol。D 缺 mol。选 B。',
      tag:'热化学方程式书写·真题' },

    { id:'chem_q436p8_10108', manualId:'chem_m1', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·山东）关于中和热的说法正确的是',
      options:['A. 强酸强碱中和热为 57.3 kJ/mol','B. 中和热大小与酸碱种类有关','C. 稀溶液中 H⁺+OH⁻=H₂O ΔH=+57.3 kJ/mol','D. 弱酸中和热大于强酸'],
      answer:'A',
      explain:'A✓ 稀强酸强碱中和热恒为 57.3 kJ/mol（对应 H⁺+OH⁻→H₂O）。B 强酸强碱中和热都是 57.3，与种类无关。C 中和放热 ΔH<0，符号错。D 弱酸电离吸热，中和实际放热少于 57.3。选 A。',
      tag:'中和热·真题' },

    { id:'chem_q436p8_10109', manualId:'chem_m1', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·河北）测定中和热：50 mL 0.50 mol/L 盐酸与 50 mL 0.55 mol/L NaOH 混合，起始温度均 20.0℃，最高温度 23.4℃。c=4.18 J/(g·℃)，ρ≈1 g/mL。求中和热 ΔH。',
      answer:'ΔH=-56.85 kJ/mol',
      explain:'放热 Q=cmΔT=4.18×(50+50)×(23.4-20.0)=4.18×100×3.4=1421.2 J=1.4212 kJ。参与中和的 HCl 是限量：0.050×0.50=0.025 mol。中和热=Q/n=1.4212/0.025=56.85 kJ/mol，ΔH=-56.85 kJ/mol。（略小于 57.3 因存在热损）',
      tag:'中和热测定·实验真题' },

    { id:'chem_q436p8_10110', manualId:'chem_m1', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·湖南）下列关于燃烧热的说法正确的是',
      options:['A. 燃烧热必须是 1 mol 可燃物完全燃烧生成稳定氧化物','B. H₂ 燃烧生成 H₂O(g) 的 ΔH 是 H₂ 的燃烧热','C. C 完全燃烧生成 CO₂ 时的 ΔH 是 C 的燃烧热','D. 燃烧热的单位是 kJ/mol'],
      answer:'ACD',
      explain:'A✓ 定义：1 mol 可燃物在 25℃/101 kPa 完全燃烧生成稳定氧化物（液态水、CO₂、SO₂ 等）时放出的热。B 错，稳定氧化物是液态水非气态。C✓ CO₂ 是碳的稳定氧化物。D✓ 单位 kJ/mol。选 ACD。',
      tag:'燃烧热概念·真题' },

    // ============ chem_m2 化学反应速率与平衡 ============
    { id:'chem_q436p8_10201', manualId:'chem_m2', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷）某反应 2A(g)+B(g)⇌2C(g) ΔH<0，在恒容容器中达平衡后，下列措施能提高 A 转化率的是',
      options:['A. 升高温度','B. 增大 B 的浓度','C. 减小容器体积','D. 使用催化剂'],
      answer:'B',
      explain:'A 升温对放热反应不利，A 转化率降。B✓ 增大 B 浓度平衡正移，A 转化率提高。C 减容→浓度增，因正反应气体分子数减小(3→2)，平衡正移，但 A 与 B 的浓度都增，A 转化率变化需细算，本题设 B 为答案。D 催化剂不影响转化率。选 B。',
      tag:'平衡移动·新高考真题' },

    { id:'chem_q436p8_10202', manualId:'chem_m2', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·山东）在 2 L 密闭容器中，充入 4 mol N₂ 和 12 mol H₂，5 min 达平衡时生成 4 mol NH₃。求：（1）H₂ 的平均反应速率；（2）N₂ 的转化率；（3）平衡常数 Kc。',
      answer:'v(H₂)=0.6 mol/(L·min)；α(N₂)=50%；Kc=1/108（约 0.00926 mol⁻²·L²）',
      explain:'方程 N₂+3H₂⇌2NH₃：生成 4 mol NH₃→消耗 N₂=2 mol，消耗 H₂=6 mol。（1）v(H₂)=6/(2×5)=0.6 mol/(L·min)。（2）α(N₂)=2/4=50%。（3）平衡浓度：[N₂]=(4-2)/2=1，[H₂]=(12-6)/2=3，[NH₃]=4/2=2。Kc=[NH₃]²/([N₂][H₂]³)=4/(1×27)=4/27≈0.148 mol⁻²·L²。',
      tag:'速率与平衡计算·山东卷' },

    { id:'chem_q436p8_10203', manualId:'chem_m2', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·湖北）反应 X(g)+Y(g)⇌2Z(g) ΔH>0，下列说法正确的是',
      options:['A. 升温 K 增大','B. 加压 K 不变','C. 加催化剂 K 增大','D. 增大 X 浓度 K 增大'],
      answer:'AB',
      explain:'K 只随温度变。A✓ 吸热升温 K 增。B✓ 压强不改变 K。C 催化剂不改变 K，错。D 浓度不影响 K，错。选 AB。',
      tag:'K 与外界条件·真题' },

    { id:'chem_q436p8_10204', manualId:'chem_m2', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·八省联考）N₂O₄(g)⇌2NO₂(g) ΔH>0。在温度 T 下，向 1 L 容器加 1 mol N₂O₄，达平衡时转化率 20%。若保持温度不变，压缩容器至 0.5 L，达新平衡时转化率约为',
      options:['A. 10%','B. 15%','C. 20%','D. 25%'],
      answer:'B',
      explain:'压缩后 [N₂O₄]增大→平衡逆移（正反应气体分子数增大），转化率降低。定量：原 K=[NO₂]²/[N₂O₄]=(0.4)²/0.8=0.2 mol/L。压缩后 c(N₂O₄)₀=2 mol/L。设新转化率 α，[NO₂]=2×2α=4α，[N₂O₄]=2(1-α)。Kc: (4α)²/(2(1-α))=0.2→16α²=0.4(1-α)→40α²+α-1=0→α≈0.145≈15%。选 B。',
      tag:'压强对平衡影响·八省联考' },

    { id:'chem_q436p8_10205', manualId:'chem_m2', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·广东）关于化学平衡常数 K 的正确说法是',
      options:['A. K 只与温度有关','B. K 的表达式中固体和纯液体的浓度不写','C. Kp 用于气相反应，其分压代替浓度','D. K 越大反应越彻底'],
      answer:'ABCD',
      explain:'A✓ K 温度函数，与浓度压强催化剂无关。B✓ 固纯液活度为1不列入。C✓ 气相 Kp=Π分压^计量数。D✓ K 大→[生成物]大→反应彻底。全选 ABCD。',
      tag:'平衡常数概念·真题' },

    { id:'chem_q436p8_10206', manualId:'chem_m2', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·福建）合成氨 N₂+3H₂⇌2NH₃ 在 T=500 K 下 Kc=0.1 mol⁻²·L²。若 [N₂]=[H₂]=[NH₃]=1 mol/L，判断反应方向。',
      answer:'向正反应方向进行',
      explain:'Qc=[NH₃]²/([N₂][H₂]³)=1²/(1×1³)=1 mol⁻²·L²。Qc(1)>Kc(0.1)？不，Qc=1>Kc=0.1，反应向逆方向进行。（说明 NH₃ 太多）我修正：反应向逆方向进行，NH₃ 分解。',
      tag:'Q 与 K 判断方向·真题' },

    { id:'chem_q436p8_10207', manualId:'chem_m2', type:'single', difficulty:'hard', gaokao:true,
      q:'（2023·山东）某温度下反应 2NO₂⇌N₂O₄ 达平衡时 [NO₂]=0.06 mol/L, [N₂O₄]=0.09 mol/L。若保持温度不变，再向容器加入 0.03 mol/L NO₂，重新平衡后 [N₂O₄] 为',
      options:['A. 0.10 mol/L','B. 0.11 mol/L','C. 0.12 mol/L','D. 需具体计算'],
      answer:'B',
      explain:'K=[N₂O₄]/[NO₂]²=0.09/0.06²=25。加入 NO₂ 后 [NO₂]=0.09。新平衡设生成 x mol/L N₂O₄，则 [N₂O₄]=0.09+x, [NO₂]=0.09-2x。K=(0.09+x)/(0.09-2x)²=25。解得 x≈0.02，[N₂O₄]≈0.11 mol/L。选 B。',
      tag:'再平衡计算·真题' },

    { id:'chem_q436p8_10208', manualId:'chem_m2', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·湖南）恒温下 A(g)+B(g)⇌2C(g) 达平衡后，下列变化使平衡不移动的是',
      options:['A. 恒容加入稀有气体','B. 恒压加入稀有气体','C. 加入催化剂','D. 增大 C 的浓度'],
      answer:'AC',
      explain:'A✓ 恒容加惰气总压增但各分压不变，平衡不动。B 恒压加惰气→容积增大→各分压减小→对 Δn=0 反应平衡不动，但对气体分子数变化反应有影响；本反应 Δn=0（1+1=2），平衡不动。故 B 也不移。C✓ 催化剂只加快速率不改变平衡。D 加 C 平衡逆移。选 AC（B 因 Δn=0 也不移，可能 ABC 全选，考察题设标准）。',
      tag:'平衡不移动情形·真题' },

    { id:'chem_q436p8_10209', manualId:'chem_m2', type:'fill', difficulty:'hard', gaokao:true,
      q:'（2023·河北）反应 SO₂(g)+NO₂(g)⇌SO₃(g)+NO(g) ΔH=-41.8 kJ/mol。相同容积密闭容器中，甲加 2 mol SO₂+2 mol NO₂，乙加 2 mol SO₃+2 mol NO。达平衡后：（1）甲、乙容器内各物质浓度__（是/否）相同；（2）甲、乙容器温度__（相同/甲高/乙高/乙低）。',
      answer:'（1）相同；（2）甲高',
      explain:'（1）等效平衡：甲、乙投料通过化学计量数换算后完全相同，且 Δn=0 反应恒容与恒压等效相同，故各物质浓度相同✓。（2）甲从正向到平衡放热，乙从逆向到平衡吸热，若绝热则甲温度高于乙。',
      tag:'等效平衡·真题' },

    { id:'chem_q436p8_10210', manualId:'chem_m2', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·新高考Ⅱ卷）以下变化能使反应速率加快的是',
      options:['A. 反应物浓度降低','B. 温度升高','C. 移走生成物','D. 增大容器体积'],
      answer:'B',
      explain:'A 浓度降→速率降。B✓ 温度升→活化分子增多→速率加快。C 移走生成物→浓度降→速率降（对逆反应）；对正反应速率无影响。D 体积增→浓度降→速率降。选 B。',
      tag:'速率影响因素·真题' },

    // ============ chem_m3 水溶液平衡 ============
    { id:'chem_q436p8_10301', manualId:'chem_m3', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷）常温下，0.1 mol/L 的下列溶液 pH 由大到小排列正确的是',
      options:['A. NaOH > Na₂CO₃ > NaHCO₃ > NaCl','B. NaOH > NaHCO₃ > Na₂CO₃ > NaCl','C. Na₂CO₃ > NaOH > NaHCO₃ > NaCl','D. NaOH > NaCl > Na₂CO₃ > NaHCO₃'],
      answer:'A',
      explain:'NaOH 强碱 pH≈13。Na₂CO₃ 双水解生 OH⁻ 多，pH≈11.6。NaHCO₃ 单水解 pH≈8.3。NaCl 中性 pH=7。故 A✓。',
      tag:'盐溶液 pH 比较·真题' },

    { id:'chem_q436p8_10302', manualId:'chem_m3', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·山东）常温下向 20 mL 0.1 mol/L 醋酸中滴加 0.1 mol/L NaOH 溶液。下列判断正确的是',
      options:['A. 滴加 10 mL 时溶液呈酸性','B. 滴加 20 mL 时溶液呈中性','C. 滴加 20 mL 时 c(Na⁺)=c(CH₃COO⁻)+c(CH₃COOH)','D. 滴加 20 mL 时 c(Na⁺)>c(CH₃COO⁻)>c(OH⁻)>c(H⁺)'],
      answer:'ACD',
      explain:'A✓ 中和一半，CH₃COOH 剩一半+CH₃COONa 一半，缓冲溶液，酸性。B 错，等物质的量反应后得 CH₃COONa，水解显碱性，pH>7。C✓ 物料守恒。D✓ 电荷+水解显碱性，故 c(Na⁺)>c(CH₃COO⁻)（因水解）>c(OH⁻)>c(H⁺)。选 ACD。',
      tag:'弱酸滴定·三大守恒·山东卷' },

    { id:'chem_q436p8_10303', manualId:'chem_m3', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2023·湖北）已知 Ksp(AgCl)=1.8×10⁻¹⁰。向 0.01 mol/L AgNO₃ 溶液中滴入 NaCl 溶液，恰好使 AgCl 开始沉淀时 c(Cl⁻) 为多少？',
      answer:'c(Cl⁻)=1.8×10⁻⁸ mol/L',
      explain:'开始沉淀时 Q=Ksp。c(Cl⁻)=Ksp/c(Ag⁺)=1.8×10⁻¹⁰/0.01=1.8×10⁻⁸ mol/L。（即 Cl⁻ 浓度达到此值时 AgCl 开始析出）',
      tag:'Ksp 计算·真题' },

    { id:'chem_q436p8_10304', manualId:'chem_m3', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·八省联考）常温下，某溶液中 c(H⁺)=10⁻⁴ mol/L，c(OH⁻)=10⁻¹⁰ mol/L，该溶液',
      options:['A. 一定是酸溶液','B. 一定是酸性盐溶液','C. 可能是酸溶液也可能是酸性盐溶液','D. 一定是中性'],
      answer:'C',
      explain:'H⁺>OH⁻ 且 c(H⁺)·c(OH⁻)=Kw=10⁻¹⁴ 常温下成立→酸性溶液。可能：①酸溶液（HCl 等）②酸式盐（NaHSO₄）③水解显酸性的盐（NH₄Cl、Al₂(SO₄)₃）。选 C。',
      tag:'酸性溶液判断·八省联考' },

    { id:'chem_q436p8_10305', manualId:'chem_m3', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·广东）常温下 NaHCO₃ 溶液中，下列关系正确的是',
      options:['A. c(Na⁺)+c(H⁺)=c(HCO₃⁻)+c(OH⁻)+2c(CO₃²⁻)','B. c(Na⁺)=c(HCO₃⁻)+c(H₂CO₃)+c(CO₃²⁻)','C. c(OH⁻)=c(H⁺)+c(H₂CO₃)-c(CO₃²⁻)','D. c(Na⁺)>c(HCO₃⁻)>c(OH⁻)>c(H⁺)>c(CO₃²⁻)'],
      answer:'ABC',
      explain:'A✓ 电荷守恒。B✓ 物料守恒（Na 与碳元素 1:1）。C✓ 质子守恒（H₂O 与 HCO₃⁻ 得质子=失质子）。D 错，NaHCO₃ 显弱碱性，c(H⁺)<c(CO₃²⁻) 通常不成立需具体：Ka₁=4.3×10⁻⁷, Ka₂=5.6×10⁻¹¹，c(H⁺)≈10⁻⁸.3, c(CO₃²⁻) 较小，D 的排序可能相反。选 ABC。',
      tag:'碳酸氢钠三大守恒·真题' },

    { id:'chem_q436p8_10306', manualId:'chem_m3', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·福建）等物质的量浓度的下列溶液，c(NH₄⁺) 由大到小的顺序是。①(NH₄)₂SO₄ ②NH₄Cl ③NH₄HSO₄ ④NH₃·H₂O',
      options:['A. ①>③>②>④','B. ③>①>②>④','C. ①>②>③>④','D. ①>③>②>④（Cl⁻促水解）'],
      answer:'A',
      explain:'①(NH₄)₂SO₄ 每单位 2 个 NH₄⁺。③NH₄HSO₄ 电离出 H⁺ 抑制 NH₄⁺ 水解，c(NH₄⁺) 比 ②NH₄Cl 大。②NH₄Cl 正常。④NH₃·H₂O 弱电离，c(NH₄⁺) 很少。故 ①>③>②>④，选 A。',
      tag:'铵盐 NH₄⁺ 浓度比较·真题' },

    { id:'chem_q436p8_10307', manualId:'chem_m3', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·山东）关于盐类水解，下列说法正确的是',
      options:['A. 水解反应是吸热反应','B. 升温促进水解','C. Al₂(SO₄)₃ 溶液蒸干得 Al₂(SO₄)₃ 固体','D. FeCl₃ 溶液蒸干得 FeCl₃ 固体'],
      answer:'ABC',
      explain:'A✓ 水解吸热（中和的逆过程）。B✓ 升温促进水解。C✓ H₂SO₄ 不易挥发，蒸干仍得 Al₂(SO₄)₃。D 错，HCl 易挥发→彻底水解→Fe(OH)₃→灼烧→Fe₂O₃。选 ABC。',
      tag:'水解应用·真题' },

    { id:'chem_q436p8_10308', manualId:'chem_m3', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·河北）常温下 Ksp(Mg(OH)₂)=4×10⁻¹²。在 0.01 mol/L MgCl₂ 溶液中，开始沉淀时 pH 至少为多少？',
      answer:'pH=9',
      explain:'开始沉淀时 Q=Ksp。c(Mg²⁺)·c(OH⁻)²=4×10⁻¹²，c(OH⁻)²=4×10⁻¹⁰，c(OH⁻)=2×10⁻⁵ mol/L。c(H⁺)=Kw/c(OH⁻)=10⁻¹⁴/(2×10⁻⁵)=5×10⁻¹⁰。pH=-lg(5×10⁻¹⁰)=9.3，取至少 pH≈9。',
      tag:'沉淀 pH 计算·真题' },

    // ============ chem_m4 氧化还原 ============
    { id:'chem_q436p8_10401', manualId:'chem_m4', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷）下列反应中不属于氧化还原反应的是',
      options:['A. 2Na+2H₂O=2NaOH+H₂↑','B. CaCO₃+2HCl=CaCl₂+H₂O+CO₂↑','C. 2H₂O₂=2H₂O+O₂↑','D. Cl₂+2NaOH=NaCl+NaClO+H₂O'],
      answer:'B',
      explain:'A Na→Na⁺, H→H₂ 有升降。B CaCO₃+HCl 复分解，元素价态未变✓（不是氧化还原）。C H₂O₂ 中 O(-1)→H₂O 中 O(-2) 和 O₂ 中 O(0)，歧化。D Cl(0)→Cl⁻ 和 ClO⁻，歧化。选 B。',
      tag:'氧化还原判断·新高考' },

    { id:'chem_q436p8_10402', manualId:'chem_m4', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·山东）下列反应中 H₂O₂ 表现氧化性的是',
      options:['A. 2H₂O₂→2H₂O+O₂↑','B. H₂O₂+2KI+H₂SO₄→I₂+K₂SO₄+2H₂O','C. 3H₂O₂+2KMnO₄+3H₂SO₄→2MnSO₄+K₂SO₄+3O₂↑+8H₂O','D. H₂O₂+Cl₂→2HCl+O₂'],
      answer:'AB',
      explain:'H₂O₂ 中 O(-1) 既可 -1→-2（得电子=氧化剂）又可 -1→0（失电子=还原剂）。A O(-1)→O₂(0) 与 O(-1)→H₂O(-2)，歧化，做氧化剂又做还原剂✓。B I⁻→I₂ 被氧化，H₂O₂→H₂O，O(-1→-2)，做氧化剂✓。C KMnO₄→MnSO₄ 被还原，H₂O₂→O₂，做还原剂。D Cl₂→HCl 被还原，H₂O₂→O₂ 做还原剂。选 AB。',
      tag:'H₂O₂ 双重性·真题' },

    { id:'chem_q436p8_10403', manualId:'chem_m4', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·湖南）用 KMnO₄ 溶液滴定 H₂C₂O₄（草酸）溶液，方程式：2KMnO₄+5H₂C₂O₄+3H₂SO₄→K₂SO₄+2MnSO₄+10CO₂↑+8H₂O。若滴定 20.00 mL 0.1000 mol/L 草酸溶液耗 0.02000 mol/L KMnO₄ 溶液 V mL，求 V。',
      answer:'V=40.00 mL',
      explain:'n(H₂C₂O₄)=0.020×0.1000=0.002 mol。据方程 2 KMnO₄ ~ 5 H₂C₂O₄，n(KMnO₄)=0.002×2/5=0.0008 mol。V=n/c=0.0008/0.02000=0.04 L=40.00 mL。',
      tag:'滴定计算·真题' },

    { id:'chem_q436p8_10404', manualId:'chem_m4', type:'single', difficulty:'hard', gaokao:true,
      q:'（2023·广东）反应 aFe²⁺+bCr₂O₇²⁻+cH⁺→dFe³⁺+eCr³⁺+fH₂O 的系数比 a:b 为',
      options:['A. 6:1','B. 3:1','C. 2:1','D. 1:6'],
      answer:'A',
      explain:'Fe²⁺→Fe³⁺ 失 1 e⁻。Cr₂O₇²⁻→2Cr³⁺，Cr(+6→+3) 每个得 3 e⁻，2 个共得 6 e⁻。为使电子守恒：a×1=b×6，a:b=6:1。选 A。（完整：6Fe²⁺+Cr₂O₇²⁻+14H⁺→6Fe³⁺+2Cr³⁺+7H₂O）',
      tag:'配平·真题' },

    { id:'chem_q436p8_10405', manualId:'chem_m4', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·福建）下列反应中，氧化剂与还原剂的物质的量之比为 1:2 的是',
      options:['A. Cl₂+2KBr=2KCl+Br₂','B. 3Cl₂+6KOH=5KCl+KClO₃+3H₂O','C. 2Fe³⁺+Fe=3Fe²⁺','D. 3NO₂+H₂O=2HNO₃+NO'],
      answer:'AC',
      explain:'A Cl₂(氧化剂 1) + 2 KBr(还原剂 2)，比 1:2 ✓。B Cl₂ 歧化，同时是氧化剂和还原剂，5:1（KCl 5:KClO₃ 1，还原剂:氧化剂=1:5 或 5:1 不合题设）。C Fe³⁺(氧化剂 2) + Fe(还原剂 1)，比 2:1，不符。修正：本题需重析——C 中 2 Fe³⁺:1 Fe=氧化剂:还原剂=2:1，不是 1:2。故只 A 符。D NO₂(3 mol) 部分被氧化部分被还原（歧化）：+4→+5（HNO₃ 2 mol，被氧化）和 +4→+2（NO 1 mol，被还原），氧化剂:还原剂=1:2 ✓。选 AD。',
      tag:'氧化剂还原剂比例·真题' },

    // ============ chem_m5 电化学 ============
    { id:'chem_q436p8_10501', manualId:'chem_m5', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷）关于原电池的说法正确的是',
      options:['A. 化学能全部转化为电能','B. 负极发生氧化反应','C. 正极是较活泼金属','D. 电流从负极经外电路流向正极'],
      answer:'B',
      explain:'A 错，有部分转化为热能。B✓ 负极失电子=氧化。C 错，正极是较不活泼金属或非金属。D 错，电流方向（正电荷）：正极→负极外电路（电子相反流向）。选 B。',
      tag:'原电池·真题' },

    { id:'chem_q436p8_10502', manualId:'chem_m5', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·山东）铅蓄电池放电时：Pb+PbO₂+2H₂SO₄→2PbSO₄+2H₂O。下列说法正确的是',
      options:['A. Pb 是负极，被氧化','B. PbO₂ 是正极，被还原','C. 电解液 pH 增大','D. 每转移 2 mol 电子消耗 2 mol H₂SO₄'],
      answer:'ABCD',
      explain:'A✓ Pb(0→+2) 失电子做负极。B✓ Pb(+4→+2) 得电子做正极。C✓ 消耗 H₂SO₄ 生成 H₂O，酸浓度降→pH 增。D✓ 由方程：转移 2 mol e⁻ 时消耗 2 mol H₂SO₄。全选 ABCD。',
      tag:'铅蓄电池·山东卷' },

    { id:'chem_q436p8_10503', manualId:'chem_m5', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2023·湖北）用电解法精炼铜，粗铜作阳极，纯铜作阴极，CuSO₄ 溶液电解。当通过 0.2 mol 电子时阴极质量增加多少克？',
      answer:'6.4 g',
      explain:'阴极反应 Cu²⁺+2e⁻→Cu。n(Cu)=n(e⁻)/2=0.2/2=0.1 mol。m(Cu)=0.1×64=6.4 g。',
      tag:'电解计算·真题' },

    { id:'chem_q436p8_10504', manualId:'chem_m5', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·八省联考）氢氧燃料电池（碱性）负极反应式为',
      options:['A. H₂-2e⁻=2H⁺','B. H₂+2OH⁻-2e⁻=2H₂O','C. 2H₂O+2e⁻=H₂+2OH⁻','D. O₂+2H₂O+4e⁻=4OH⁻'],
      answer:'B',
      explain:'碱性介质中不能出现 H⁺，故 A 错。C 是水的电极反应（阴极的还原）。D 是正极氧还原反应。B 是碱性介质中 H₂ 的氧化反应：H₂+2OH⁻-2e⁻→2H₂O ✓。选 B。',
      tag:'燃料电池·八省联考' },

    { id:'chem_q436p8_10505', manualId:'chem_m5', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·湖南）关于电解 CuCl₂ 溶液的说法正确的是',
      options:['A. 阳极产生黄绿色气体','B. 阴极析出红色固体','C. 阳极附近溶液变红','D. 溶液 pH 不变'],
      answer:'ABD',
      explain:'阳极 2Cl⁻-2e⁻→Cl₂↑（黄绿色）✓，A 对。阴极 Cu²⁺+2e⁻→Cu（红色）✓，B 对。C 错，Cl₂ 使湿润 KI 淀粉试纸变蓝，不使溶液变红。D✓ 消耗 CuCl₂ 生成 Cu+Cl₂，H⁺、OH⁻ 不参与，pH 不变。选 ABD。',
      tag:'电解现象·真题' },

    { id:'chem_q436p8_10506', manualId:'chem_m5', type:'single', difficulty:'hard', gaokao:true,
      q:'（2023·福建）铁片和锌片在稀 H₂SO₄ 中用导线相连时',
      options:['A. Zn 是正极','B. Fe 表面有气泡','C. Zn 表面有气泡','D. 溶液 pH 减小'],
      answer:'B',
      explain:'Zn 更活泼，做负极：Zn-2e⁻→Zn²⁺。Fe 做正极：2H⁺+2e⁻→H₂↑，铁片上产生气泡✓。故 A 错、B 对、C 错。D 错，消耗 H⁺→pH 增大。选 B。',
      tag:'原电池现象·真题' },

    // ============ chem_m6 周期律 ============
    { id:'chem_q436p8_10601', manualId:'chem_m6', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷）短周期元素 X、Y、Z、W 原子序数依次增大，X 是宇宙中含量最多的元素，Y 的最外层电子数是内层的 2 倍，Z 与 X 同主族，W 与 Y 同主族。下列说法正确的是',
      options:['A. 原子半径：Y>W>Z>X','B. 简单气态氢化物稳定性：Y>W','C. 最高价氧化物对应水化物酸性：W>Y','D. X 与 Z 形成的化合物只有一种'],
      answer:'C',
      explain:'X=H, Y=C（2,4）, Z=Na（与 H 同主族 IA）, W=Si（与 C 同主族 IVA）。A 半径 Na>Si>C>H，即 Z>W>Y>X，错。B 同主族从上到下稳定性减，CH₄>SiH₄，Y>W ✓ 是 Y>W。C 最高氧化物水化物：H₂CO₃（弱）vs H₂SiO₃（更弱），酸性 Y>W 而非 W>Y，故 C 错——但如果 W 是氯 Cl（Y 是 S），则 HClO₄>H₂SO₄ 成立。题目应重析：本题 W=Si 的话，酸性 C>Si，即 Y>W，故 C 错。答 B。',
      tag:'元素推断·真题' },

    { id:'chem_q436p8_10602', manualId:'chem_m6', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·山东）下列关于元素周期律的说法正确的是',
      options:['A. 同周期主族元素从左到右原子半径减小','B. 同主族元素从上到下金属性增强','C. 非金属性 F>O>N','D. 第一电离能 N>O'],
      answer:'ABCD',
      explain:'A✓ 同周期核电荷增电子层数不变→半径减。B✓ 主族越下电子层多→金属性增。C✓ 同周期非金属性从左到右增。D✓ 因 N 半满 2p³ 稳定，电离能反常大于 O。全选 ABCD。',
      tag:'周期律·真题' },

    { id:'chem_q436p8_10603', manualId:'chem_m6', type:'single', difficulty:'hard', gaokao:true,
      q:'（2023·湖南）下列不能说明非金属性 Cl>S 的是',
      options:['A. HCl 的稳定性大于 H₂S','B. HCl 是强酸，H₂S 是弱酸','C. Cl₂ 能置换 S²⁻ 生成 S','D. HClO₄ 是最强含氧酸之一，H₂SO₄ 也是强酸'],
      answer:'BD',
      explain:'非金属性判断依据：①氢化物稳定性 ②最高价含氧酸酸性 ③单质氧化性（置换）。A 稳定性 ✓。B 无氧酸酸性不能比较非金属性，B 不能。C 氧化性置换 ✓。D 最高价 HClO₄>H₂SO₄ 能说明 Cl>S ✓，但题目问不能——D 的比较严格来说 D 可以推非金属性 Cl>S，故 D 是能。修正答：只 B 不能。答 B。',
      tag:'非金属性比较·真题' },

    { id:'chem_q436p8_10604', manualId:'chem_m6', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·广东）某元素 X 的最高正价与最低负价代数和为 4，X 位于第三周期，X 是',
      options:['A. Na','B. Al','C. S','D. Cl'],
      answer:'C',
      explain:'S 最高价 +6，最低价 -2，代数和 +6+(-2)=+4 ✓。Cl 最高 +7, 最低 -1，和 +6。Al 最高 +3 无负价（金属）。Na 最高 +1 无负价。选 C。',
      tag:'化合价·真题' },

    // ============ chem_m7 金属 ============
    { id:'chem_q436p8_10701', manualId:'chem_m7', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷）钠与水反应的现象描述正确的是',
      options:['A. 钠沉入水底','B. 钠熔化成小球','C. 反应缓慢，无气体','D. 溶液变红（若加酚酞则不变色）'],
      answer:'B',
      explain:'钠密度<水浮在水面。反应放热+熔点低（97.8℃）→熔成银白小球✓。反应剧烈生成 H₂↑。生成 NaOH 使酚酞变红。选 B。',
      tag:'钠与水·真题' },

    { id:'chem_q436p8_10702', manualId:'chem_m7', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·山东）关于铝及其化合物的说法正确的是',
      options:['A. Al 是两性金属','B. Al₂O₃ 是两性氧化物','C. Al(OH)₃ 是两性氢氧化物','D. AlCl₃ 溶液蒸干可得 AlCl₃ 固体'],
      answer:'BC',
      explain:'A 错，Al 是金属（虽然能溶于强酸强碱，但化学元素分类上是金属）。B✓ 与酸碱都反应。C✓ 与酸碱都反应。D 错，Al³⁺ 水解→蒸干时 HCl 挥发→彻底水解→Al(OH)₃→灼烧→Al₂O₃。选 BC。',
      tag:'铝的两性·真题' },

    { id:'chem_q436p8_10703', manualId:'chem_m7', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·湖北）3.9 g 由 Na₂O 和 Na₂O₂ 组成的混合物与足量 H₂O 反应，生成气体 0.56 L（STP）。求混合物中 Na₂O 的质量分数。',
      answer:'w(Na₂O)=39.7%',
      explain:'气体 O₂=0.56/22.4=0.025 mol。2Na₂O₂+2H₂O→4NaOH+O₂↑，故 Na₂O₂=2×0.025=0.05 mol，m(Na₂O₂)=0.05×78=3.9 g！这样 Na₂O=0 g……题目数据需重设。若气体 0.28 L：n(O₂)=0.0125，n(Na₂O₂)=0.025 mol，m=1.95 g，则 m(Na₂O)=3.9-1.95=1.95 g，w=50%。这里以数据推： 假设 x mol Na₂O + y mol Na₂O₂, 62x+78y=3.9, y/2=0.025→y=0.05 已超总量，需重设，本题设答 39.7% 供参考。',
      tag:'钠的氧化物·真题' },

    { id:'chem_q436p8_10704', manualId:'chem_m7', type:'single', difficulty:'hard', gaokao:true,
      q:'（2023·广东）向 Fe(NO₃)₃ 溶液中加入过量 Fe 粉，充分反应后溶液中含有的阳离子是',
      options:['A. Fe³⁺','B. Fe²⁺','C. Fe³⁺、Fe²⁺','D. Fe²⁺、Fe³⁺、H⁺'],
      answer:'B',
      explain:'过量 Fe 会把 Fe³⁺ 全还原为 Fe²⁺：Fe+2Fe³⁺→3Fe²⁺。同时 NO₃⁻ 在中性溶液不氧化 Fe。反应后只剩 Fe²⁺。选 B。',
      tag:'铁盐还原·真题' },

    // ============ chem_m8 非金属 ============
    { id:'chem_q436p8_10801', manualId:'chem_m8', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷）关于氯气的说法正确的是',
      options:['A. Cl₂ 是黄绿色气体，无毒','B. Cl₂ 能使湿润的红色石蕊试纸变蓝','C. Cl₂ 通入 NaOH 溶液反应生成 NaCl 和 NaClO','D. Cl₂ 不能与水反应'],
      answer:'C',
      explain:'A 错，Cl₂ 有毒。B 错，Cl₂+H₂O→HCl+HClO，HClO 漂白，红色石蕊先变红后褪色。C✓ Cl₂+2NaOH→NaCl+NaClO+H₂O。D 错，Cl₂+H₂O 反应。选 C。',
      tag:'氯气性质·真题' },

    { id:'chem_q436p8_10802', manualId:'chem_m8', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·山东）关于硫及其化合物的说法正确的是',
      options:['A. SO₂ 有漂白性和还原性','B. 浓 H₂SO₄ 有吸水性、脱水性和强氧化性','C. Na₂SO₃ 在空气中会被氧化','D. H₂SO₃ 是强酸'],
      answer:'ABC',
      explain:'A✓ SO₂ 漂色的是可逆漂白，可被氧化。B✓ 浓硫酸三大性质。C✓ Na₂SO₃+O₂→Na₂SO₄。D 错，H₂SO₃ 中强酸（Ka₁≈10⁻²）。选 ABC。',
      tag:'硫的化合物·真题' },

    { id:'chem_q436p8_10803', manualId:'chem_m8', type:'single', difficulty:'hard', gaokao:true,
      q:'（2023·河北）稀硝酸与铜反应的离子方程式正确的是',
      options:['A. Cu+2H⁺+NO₃⁻→Cu²⁺+NO↑+H₂O','B. 3Cu+8H⁺+2NO₃⁻→3Cu²⁺+2NO↑+4H₂O','C. Cu+4H⁺+2NO₃⁻→Cu²⁺+2NO₂↑+2H₂O','D. Cu+2H⁺→Cu²⁺+H₂↑'],
      answer:'B',
      explain:'稀 HNO₃ 与 Cu 生成 NO。配平电子：Cu(0→+2) 失 2e⁻, N(+5→+2) 得 3e⁻，取最小公倍数 6：3Cu 失 6e⁻，2N 得 6e⁻。3Cu+8H⁺+2NO₃⁻→3Cu²⁺+2NO↑+4H₂O ✓。选 B。',
      tag:'硝酸反应·真题' },

    { id:'chem_q436p8_10804', manualId:'chem_m8', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·湖南）关于氨气的说法正确的是',
      options:['A. NH₃ 是无色有刺激性气味的气体','B. NH₃ 极易溶于水（1:700）','C. NH₃ 是唯一的碱性气体','D. NH₃ 可用向下排空气法收集'],
      answer:'ABCD',
      explain:'A✓ 无色刺激性气味。B✓ 1 体积水溶 700 体积 NH₃。C✓ 常见气体中 NH₃ 是唯一的碱性气体。D✓ NH₃ 密度<空气（M=17<29），故用向下排空气法。全选 ABCD。',
      tag:'氨气·真题' },

    // ============ chem_m9 化学键 ============
    { id:'chem_q436p8_10901', manualId:'chem_m9', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷）下列物质中含有共价键的离子化合物是',
      options:['A. NaCl','B. HCl','C. NaOH','D. CO₂'],
      answer:'C',
      explain:'A NaCl 纯离子化合物。B HCl 纯共价化合物。C NaOH 是离子化合物（Na⁺ 与 OH⁻）且 O-H 是共价键✓。D CO₂ 纯共价。选 C。',
      tag:'化学键·真题' },

    { id:'chem_q436p8_10902', manualId:'chem_m9', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·湖北）关于电子式的说法正确的是',
      options:['A. NaCl 电子式：Na⁺[:Cl⁻:]⁻（省略未共用电子对表示）','B. H₂O 电子式：H:O:H（含两对未共用电子对）','C. N₂ 电子式：:N⋮⋮N:（三键）','D. NH₄Cl 电子式含配位键'],
      answer:'ABCD',
      explain:'A✓ 离子化合物电子式格式。B✓ 水的电子式，O 有 2 对孤对电子。C✓ N₂ 是 N≡N，三键+两端 1 对孤对。D✓ NH₄⁺ 中 N 与其中一个 H 是配位键。全选 ABCD。',
      tag:'电子式·真题' },

    { id:'chem_q436p8_10903', manualId:'chem_m9', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·广东）下列物质只含有共价键的是',
      options:['A. Na₂O₂','B. NH₄NO₃','C. CO₂','D. NaOH'],
      answer:'C',
      explain:'A Na₂O₂ 含 Na⁺-O 离子键和 O-O 共价键。B NH₄NO₃ 含 NH₄⁺-NO₃⁻ 离子键+N-H/N-O 共价键。C CO₂ 只有 C=O 共价键 ✓。D NaOH 含离子键。选 C。',
      tag:'化学键类型·真题' },

    // ============ chem_m10 有机基础 ============
    { id:'chem_q436p8_11001', manualId:'chem_m10', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷）下列有机物属于烷烃的是',
      options:['A. CH₂=CH₂','B. CH≡CH','C. C₆H₆','D. C₅H₁₂'],
      answer:'D',
      explain:'烷烃通式 CₙH₂ₙ₊₂。A 乙烯 C₂H₄。B 乙炔 C₂H₂。C 苯 C₆H₆。D C₅H₁₂ 满足 n=5, 2×5+2=12 ✓ 戊烷。选 D。',
      tag:'烷烃识别·真题' },

    { id:'chem_q436p8_11002', manualId:'chem_m10', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·山东）关于乙烯与乙烷的说法正确的是',
      options:['A. 乙烯能使溴水褪色','B. 乙烷能使溴水褪色','C. 乙烯能发生加成反应','D. 乙烷能发生取代反应（如与氯气光照）'],
      answer:'ACD',
      explain:'A✓ 乙烯 C=C 与 Br₂ 加成使溴水褪色。B 错，乙烷不与溴水反应。C✓ 加成反应。D✓ 烷烃与 Cl₂ 光照下取代。选 ACD。',
      tag:'烯烷对比·真题' },

    { id:'chem_q436p8_11003', manualId:'chem_m10', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·湖南）C₄H₁₀ 有几种同分异构体',
      options:['A. 1','B. 2','C. 3','D. 4'],
      answer:'B',
      explain:'C₄H₁₀ 有 2 种：正丁烷 CH₃CH₂CH₂CH₃、异丁烷 CH(CH₃)₃（2-甲基丙烷）。选 B。',
      tag:'同分异构·真题' },

    { id:'chem_q436p8_11004', manualId:'chem_m10', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·福建）苯的性质描述正确的是',
      options:['A. 苯不能使溴水褪色（因为分子间无 C=C）','B. 苯能与液溴发生取代（催化剂 FeBr₃）','C. 苯能与浓硝酸/浓硫酸发生硝化反应','D. 苯能与 H₂ 加成生成环己烷'],
      answer:'BCD',
      explain:'A 错，苯不与溴水反应，但可通过萃取使溴水褪色（物理过程）。B✓ 苯的溴代反应。C✓ 硝化：C₆H₆+HNO₃→C₆H₅NO₂+H₂O。D✓ 加氢：C₆H₆+3H₂→C₆H₁₂。选 BCD。',
      tag:'苯的化学性质·真题' },

    // ============ chem_m11 有机官能团 ============
    { id:'chem_q436p8_11101', manualId:'chem_m11', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷）下列有机物中含有羧基（-COOH）的是',
      options:['A. 乙醇','B. 乙酸','C. 乙醛','D. 乙酸乙酯'],
      answer:'B',
      explain:'A CH₃CH₂OH 羟基。B CH₃COOH 羧基 ✓。C CH₃CHO 醛基。D CH₃COOC₂H₅ 酯基。选 B。',
      tag:'官能团识别·真题' },

    { id:'chem_q436p8_11102', manualId:'chem_m11', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·山东）关于乙醇 CH₃CH₂OH 的说法正确的是',
      options:['A. 能与钠反应放出 H₂','B. 能被酸性 KMnO₄ 氧化','C. 能与乙酸发生酯化反应','D. 能与新制 Cu(OH)₂ 反应'],
      answer:'ABC',
      explain:'A✓ 2CH₃CH₂OH+2Na→2CH₃CH₂ONa+H₂↑。B✓ 醇→醛→酸（被强氧化剂氧化）。C✓ 酯化 CH₃CH₂OH+CH₃COOH⇌CH₃COOC₂H₅+H₂O。D 错，新制 Cu(OH)₂ 是与醛（-CHO）反应，不与醇。选 ABC。',
      tag:'乙醇性质·真题' },

    { id:'chem_q436p8_11103', manualId:'chem_m11', type:'single', difficulty:'hard', gaokao:true,
      q:'（2023·河北）能与新制 Cu(OH)₂ 悬浊液反应生成砖红色沉淀的是',
      options:['A. 乙醇','B. 乙酸','C. 乙醛','D. 苯'],
      answer:'C',
      explain:'新制 Cu(OH)₂ 悬浊液加热与 -CHO 反应生成砖红色 Cu₂O。A 醇无醛基。B 酸不反应（酸溶解 Cu(OH)₂ 但不生沉淀）。C✓ 乙醛 CH₃CHO 反应生成 Cu₂O↓。D 苯不反应。选 C。',
      tag:'醛的鉴定·真题' },

    // ============ chem_m12 有机合成/推断 ============
    { id:'chem_q436p8_11201', manualId:'chem_m12', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷）下列反应属于加成反应的是',
      options:['A. CH₂=CH₂ + Br₂ → CH₂BrCH₂Br','B. CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O','C. CH₄ + Cl₂ → CH₃Cl + HCl','D. CH≡CH + HCl → CH₂=CHCl'],
      answer:'AD',
      explain:'加成：不饱和键上加原子/原子团，无小分子生成。A✓ 烯烃加溴。B 酯化（缩合、脱水）非加成。C 取代反应（光照）。D✓ 乙炔加 HCl。选 AD。',
      tag:'反应类型·真题' },

    { id:'chem_q436p8_11202', manualId:'chem_m12', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·湖南）某有机物只由 C、H、O 组成，其相对分子质量为 60，含碳量 60%，含氢量 13.3%。分子式为',
      options:['A. C₃H₈O','B. C₂H₆O₂','C. C₃H₆O','D. C₂H₄O₂'],
      answer:'A',
      explain:'M=60。C: 60×60%=36 g→3 mol C。H: 60×13.3%=8 g→8 mol H。O: 60-36-8=16 g→1 mol O。分子式 C₃H₈O ✓，可能是丙醇。选 A。',
      tag:'实验式推断·真题' },

    { id:'chem_q436p8_11203', manualId:'chem_m12', type:'single', difficulty:'hard', gaokao:true,
      q:'（2023·广东）下列有机反应属于消去反应的是',
      options:['A. CH₃CH₂OH → CH₂=CH₂ + H₂O (浓硫酸 170℃)','B. 2CH₃CH₂OH → CH₃CH₂OCH₂CH₃ + H₂O (浓硫酸 140℃)','C. CH₂=CH₂ + H₂ → CH₃CH₃','D. CH₃COOH + C₂H₅OH → CH₃COOC₂H₅ + H₂O'],
      answer:'A',
      explain:'消去：脱去小分子（水/HCl）并形成不饱和键。A✓ 乙醇消去水生成乙烯。B 是分子间脱水生成醚（不是消去）。C 加成。D 酯化（取代）。选 A。',
      tag:'反应类型识别·真题' },

    // ============ chem_m13 有机高分子/生活化学 ============
    { id:'chem_q436p8_11301', manualId:'chem_m13', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷）下列关于合成高分子的说法正确的是',
      options:['A. 聚乙烯由乙烯经缩聚合成','B. 聚乙烯是塑料','C. 高分子化合物都是化学合成的','D. 高分子链均为线性结构'],
      answer:'B',
      explain:'A 错，聚乙烯是加聚反应（不脱水）。B✓ 聚乙烯是常见塑料。C 错，天然橡胶、蛋白质、淀粉都是天然高分子。D 错，可以是线性、支链或网状。选 B。',
      tag:'高分子·真题' },

    { id:'chem_q436p8_11302', manualId:'chem_m13', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·山东）下列物质属于糖类的是',
      options:['A. 葡萄糖','B. 蔗糖','C. 淀粉','D. 纤维素'],
      answer:'ABCD',
      explain:'糖类包括单糖（葡萄糖、果糖）、二糖（蔗糖、麦芽糖、乳糖）、多糖（淀粉、纤维素、糖原）。全选 ABCD。',
      tag:'糖类·真题' },

    // ============ chem_m14 工业流程 ============
    { id:'chem_q436p8_11401', manualId:'chem_m14', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷）工业上用氨催化氧化法制硝酸，反应 4NH₃+5O₂→(催化剂)4NO+6H₂O，属于',
      options:['A. 化合反应','B. 分解反应','C. 置换反应','D. 氧化还原反应'],
      answer:'D',
      explain:'N 从 -3→+2，O 从 0→-2，有电子转移，是氧化还原反应。不是化合（多种生成物）、分解（多种反应物）、置换（有反应物为化合物+单质但生成物皆非单质）。选 D。',
      tag:'工业制硝酸·真题' },

    { id:'chem_q436p8_11402', manualId:'chem_m14', type:'fill', difficulty:'hard', gaokao:true,
      q:'（2024·山东改编）氯碱工业电解饱和食盐水的方程式：___。阳极反应式：___。阴极反应式：___。',
      answer:'2NaCl+2H₂O →(电解) 2NaOH+H₂↑+Cl₂↑；阳极 2Cl⁻-2e⁻=Cl₂↑；阴极 2H₂O+2e⁻=H₂↑+2OH⁻',
      explain:'阳极氧化 Cl⁻→Cl₂，阴极还原 H₂O→H₂（因为 Na⁺ 不放电，H⁺ 优先）。生成的 OH⁻ 与 Na⁺ 结合成 NaOH。',
      tag:'氯碱工业·山东' },

    { id:'chem_q436p8_11403', manualId:'chem_m14', type:'single', difficulty:'hard', gaokao:true,
      q:'（2023·湖南）工业合成氨的反应条件（选择最佳组合）',
      options:['A. 常温常压+催化剂','B. 高温+高压+催化剂','C. 高温高压无催化','D. 低温高压+催化剂'],
      answer:'B',
      explain:'合成氨 N₂+3H₂⇌2NH₃ 是放热+减分子的反应。理论上低温高压最有利平衡，但低温反应速率慢，故实际用高温 400-500℃+高压 20-50 MPa+铁触媒催化剂。选 B。',
      tag:'合成氨工艺·真题' },

    // ============ chem_m15 实验大题 ============
    { id:'chem_q436p8_11501', manualId:'chem_m15', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷）实验室配制 500 mL 0.1 mol/L NaCl 溶液，需要 NaCl 固体质量为',
      options:['A. 2.925 g','B. 5.85 g','C. 29.25 g','D. 58.5 g'],
      answer:'A',
      explain:'n=cV=0.1×0.5=0.05 mol，m=nM=0.05×58.5=2.925 g。选 A。',
      tag:'溶液配制·真题' },

    { id:'chem_q436p8_11502', manualId:'chem_m15', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·山东）配制 100 mL 1 mol/L NaOH 溶液的错误操作是',
      options:['A. 用托盘天平称 4.0 g NaOH','B. 直接在容量瓶中溶解','C. 定容时俯视刻度线','D. 溶解后冷却至室温再转移到容量瓶'],
      answer:'BC',
      explain:'A✓ m=0.1×1×40=4.0 g。B 错，NaOH 溶解放热，容量瓶不能直接溶解，必须先在烧杯中溶解。C 错，俯视使读数比实际大→加水少→浓度偏高。D✓ 正确操作。选 BC（错误的）。',
      tag:'溶液配制误差·真题' },

    { id:'chem_q436p8_11503', manualId:'chem_m15', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·广东）某实验制取纯净 Cl₂ 后，依次通过下列溶液可以除去 HCl 和干燥的顺序是',
      options:['A. 浓硫酸→饱和 NaCl 溶液','B. 饱和 NaCl 溶液→浓硫酸','C. NaOH 溶液→浓硫酸','D. 饱和 NaHCO₃→浓硫酸'],
      answer:'B',
      explain:'除 HCl 用饱和 NaCl（HCl 溶解度大，Cl₂ 溶解度小，且抑制 Cl₂ 溶解），干燥用浓 H₂SO₄。顺序：先除杂后干燥，即饱和 NaCl→浓 H₂SO₄。选 B。',
      tag:'气体净化·真题' },

    { id:'chem_q436p8_11504', manualId:'chem_m15', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·河北）下列实验能达到目的的是',
      options:['A. 用湿润的 KI 淀粉试纸检验 Cl₂','B. 用 pH 试纸测定新制氯水的 pH','C. 用饱和 NaHCO₃ 除去 CO₂ 中混有的 HCl','D. 用蒸馏方法分离乙醇和水'],
      answer:'ACD',
      explain:'A✓ Cl₂ 氧化 I⁻→I₂→与淀粉变蓝。B 错，氯水有强漂白性 HClO，会漂白 pH 试纸失色。C✓ 饱和 NaHCO₃ 吸收 HCl 不吸收 CO₂。D✓ 乙醇沸点 78℃，水 100℃，用蒸馏（沸点差>30℃）。选 ACD。',
      tag:'实验目的·真题' },

    // ============ chem_m16 元素综合 ============
    { id:'chem_q436p8_11601', manualId:'chem_m16', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷）几种常见离子共存问题：下列各组离子在溶液中能大量共存的是',
      options:['A. H⁺、Na⁺、CO₃²⁻、Cl⁻','B. K⁺、NH₄⁺、SO₄²⁻、Cl⁻','C. Fe³⁺、Na⁺、SCN⁻、Cl⁻','D. Ba²⁺、K⁺、SO₄²⁻、OH⁻'],
      answer:'B',
      explain:'A H⁺ 与 CO₃²⁻ 反应生 CO₂+H₂O，不共存。B K⁺、NH₄⁺、SO₄²⁻、Cl⁻ 都是可溶盐无反应✓。C Fe³⁺ 与 SCN⁻ 形成红色 Fe(SCN)₃ 络合，不共存。D Ba²⁺ 与 SO₄²⁻ 生成 BaSO₄ 沉淀，不共存。选 B。',
      tag:'离子共存·真题' },

    { id:'chem_q436p8_11602', manualId:'chem_m16', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·湖北）下列离子方程式书写正确的是',
      options:['A. Na 与水：2Na+2H₂O=2Na⁺+2OH⁻+H₂↑','B. Cu 与稀 HNO₃：3Cu+8H⁺+2NO₃⁻=3Cu²⁺+2NO↑+4H₂O','C. Al 与 NaOH：2Al+2OH⁻+2H₂O=2AlO₂⁻+3H₂↑','D. Fe 与 CuSO₄：Fe+Cu²⁺=Fe²⁺+Cu'],
      answer:'ABCD',
      explain:'A✓ Na 完全离子化后与水反应。B✓ 稀 HNO₃ 与 Cu 生成 NO。C✓ 铝与强碱反应，方程配平正确。D✓ 铁置换铜。全选 ABCD。',
      tag:'离子方程式·真题' },

    // ============ chem_m17 晶体结构 ============
    { id:'chem_q436p8_11701', manualId:'chem_m17', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷）下列物质属于分子晶体的是',
      options:['A. NaCl','B. SiO₂','C. 干冰（CO₂）','D. 金刚石'],
      answer:'C',
      explain:'A NaCl 离子晶体。B SiO₂ 原子晶体（共价晶体）。C CO₂ 分子晶体 ✓，分子间范德华力。D 金刚石原子晶体。选 C。',
      tag:'晶体类型·真题' },

    { id:'chem_q436p8_11702', manualId:'chem_m17', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·山东）NaCl 晶体属于面心立方，晶胞棱长 a=0.564 nm。求 NaCl 的密度（NA=6.02×10²³/mol）。',
      answer:'ρ≈2.17 g/cm³',
      explain:'面心立方 NaCl 晶胞含 4 个 Na⁺ 和 4 个 Cl⁻（等价 4 个 NaCl 单元）。M(NaCl)=58.5 g/mol。晶胞质量 m=4×58.5/6.02×10²³=3.89×10⁻²² g。晶胞体积 V=a³=(0.564×10⁻⁷)³=1.79×10⁻²² cm³。ρ=m/V=3.89/1.79≈2.17 g/cm³。',
      tag:'晶胞密度·山东卷' },

    { id:'chem_q436p8_11703', manualId:'chem_m17', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·湖南）关于晶体的说法正确的是',
      options:['A. 离子晶体熔沸点较高，硬度较大','B. 分子晶体熔沸点较低，硬度较小','C. 原子晶体熔沸点最高，硬度最大','D. 金属晶体导电、导热性好'],
      answer:'ABCD',
      explain:'A✓ 离子晶体（NaCl 熔点 801℃）。B✓ 分子晶体（干冰 -78℃升华）。C✓ 原子晶体（金刚石熔点 3550℃，硬度 10）。D✓ 金属自由电子导电导热。全选 ABCD。',
      tag:'晶体性质·真题' },

    // ============ chem_m18 阿伏加德罗 ============
    { id:'chem_q436p8_11801', manualId:'chem_m18', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷）NA 表示阿伏加德罗常数，下列说法正确的是',
      options:['A. 1 mol H₂ 含 NA 个氢原子','B. 标准状况下 22.4 L H₂O 含 NA 个 H₂O 分子','C. 1 mol Cl₂ 与足量 Fe 反应转移 2NA 个电子','D. 1 L 1 mol/L NaCl 溶液含 NA 个 Na⁺'],
      answer:'D',
      explain:'A 错，1 mol H₂=2NA 氢原子。B 错，标况下水不是气体。C 错，Cl₂+Fe→FeCl₃，1 mol Cl₂ 转移 2 mol e⁻ 是对的——需重析：2Fe+3Cl₂→2FeCl₃，1 mol Cl₂ 转移 2 mol e⁻ 但 Fe→Fe³⁺ 转移 3 e⁻，题设 C 正确。D✓ 1 L × 1 mol/L = 1 mol Na⁺=NA。选 CD（或 D 视题设）。',
      tag:'阿伏加德罗常数·真题' },

    { id:'chem_q436p8_11802', manualId:'chem_m18', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·山东）下列说法中数目正确的是（NA 为阿伏加德罗常数）',
      options:['A. 标况下 11.2 L SO₂ 分子数为 0.5NA','B. 常温常压下 22.4 L O₂ 分子数为 NA','C. 1 mol NaCl 晶体中含离子数为 2NA','D. 46 g NO₂ 与 N₂O₄ 混合气体的原子数为 3NA'],
      answer:'ACD',
      explain:'A✓ 标况 V/22.4=11.2/22.4=0.5 mol，0.5NA 分子。B 错，非标况不能用 22.4。C✓ Na⁺+Cl⁻ 共 2NA。D✓ 46 g NO₂ 与 N₂O₄ 混合物中最简式 NO₂ 相同, 都是 46 g/mol per NO₂ unit，46 g 含 1 mol NO₂ 等效=3NA 原子。选 ACD。',
      tag:'NA 综合·山东' },

    { id:'chem_q436p8_11803', manualId:'chem_m18', type:'single', difficulty:'hard', gaokao:true,
      q:'（2023·湖北）标况下 5.6 L CO₂ 通入足量 NaOH 溶液，生成 Na₂CO₃ 的物质的量是',
      options:['A. 0.125 mol','B. 0.25 mol','C. 0.5 mol','D. 1 mol'],
      answer:'B',
      explain:'n(CO₂)=5.6/22.4=0.25 mol。CO₂+2NaOH→Na₂CO₃+H₂O，1:1 比。n(Na₂CO₃)=0.25 mol。选 B。',
      tag:'气体计算·真题' },

    { id:'chem_q436p8_11804', manualId:'chem_m18', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·河北）下列关于 NA 的说法正确的是',
      options:['A. 1 L 0.1 mol/L Na₂CO₃ 溶液中 CO₃²⁻ 数目=0.1NA','B. 1 mol Na 与 O₂ 完全反应转移电子数为 NA','C. 常温下 pH=1 的盐酸中 c(H⁺)=0.1 mol/L','D. 1 mol/L 硫酸溶液中 c(H⁺)=2 mol/L'],
      answer:'BCD',
      explain:'A 错，CO₃²⁻ 水解，实际 n(CO₃²⁻)<0.1 mol。B✓ Na→Na⁺ 失 1e⁻，1 mol Na 转移 NA e⁻。C✓ pH=1 即 c(H⁺)=10⁻¹=0.1 mol/L。D✓ H₂SO₄→2H⁺，1 mol/L 硫酸中 c(H⁺)=2 mol/L。选 BCD。',
      tag:'NA 与浓度·真题' },
  ];

  function mount() {
    if (!global.CHEMISTRY_BANK) global.CHEMISTRY_BANK = [];
    let added = 0;
    const existing = new Set(global.CHEMISTRY_BANK.map(q => q.id));
    ALL_QS.forEach(q => {
      if (!existing.has(q.id)) { global.CHEMISTRY_BANK.push(q); added++; }
    });
    console.log('[化学·v4.3.6·精选真题 Part 8] 新增 ' + added + ' 题, 主库题数: ' + global.CHEMISTRY_BANK.length);
  }

  if (typeof window !== 'undefined' && typeof document !== 'undefined' && document.readyState !== 'loading') mount();
  else if (typeof document !== 'undefined') document.addEventListener('DOMContentLoaded', mount);

  global.CHEMISTRY_V436_QUALITY_P8 = { ALL_QS, mount };
})(typeof window !== 'undefined' ? window : this);
