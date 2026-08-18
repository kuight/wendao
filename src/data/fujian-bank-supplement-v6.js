/* ===================================================
 * 福建高考真题·化学专项深化包 v4.2.6-v6
 *
 * 100 题化学 · 元素与化合物 + 有机 + 实验 + 反应 + 计算
 * 全部带 explain,标注 local_fj / gaokao
 * =================================================== */
(function (global) {
  'use strict';

  const CHEMISTRY_FUJIAN_V6 = [
    // ==========================================================
    // 一、元素周期律与结构（20 题）
    // ==========================================================
    { id:'chemfj6_001', manualId:'chem_m01', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'（2024·福建卷）元素周期表中,同周期从左到右,原子半径的变化是',
      options:['A. 逐渐增大','B. 逐渐减小(0族除外)','C. 不变','D. 无规律'],
      answer:'B',
      explain:'同周期从左到右,电子层数不变,核电荷数增大,原子核吸引电子能力增强,原子半径减小。同主族从上到下则半径增大。0族(稀有气体)因电子排布不同,不参与比较。选B。'
    },
    { id:'chemfj6_002', manualId:'chem_m01', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'下列元素中,金属性最强的是',
      options:['A. Li','B. Na','C. K','D. Cs'],
      answer:'D',
      explain:'同主族(IA族)从上到下金属性增强。Cs(铯)是IA族最下面的金属(不考虑Fr,放射性),金属性最强,遇水剧烈爆炸。故Cs>K>Na>Li。选D。'
    },
    { id:'chemfj6_003', manualId:'chem_m01', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'下列非金属性从强到弱的顺序正确的是',
      options:['A. F>O>N>C','B. C>N>O>F','C. N>O>F>C','D. O>F>N>C'],
      answer:'A',
      explain:'第二周期非金属性从左到右增强:C<N<O<F。F是电负性最大、非金属性最强的元素。选A。'
    },
    { id:'chemfj6_004', manualId:'chem_m01', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'离子半径 r(Na⁺)、r(Mg²⁺)、r(Al³⁺)、r(F⁻)的比较,正确的是',
      options:['A. r(F⁻)>r(Na⁺)>r(Mg²⁺)>r(Al³⁺)','B. r(Al³⁺)>r(Mg²⁺)>r(Na⁺)>r(F⁻)','C. 四者相同','D. 无法比较'],
      answer:'A',
      explain:'这四种离子核外电子排布相同(2,8即Ne排布),称为等电子体。核电荷数越大,对电子吸引越强,离子半径越小。故 F⁻(9核) > Na⁺(11核) > Mg²⁺(12核) > Al³⁺(13核)。选A。'
    },
    { id:'chemfj6_005', manualId:'chem_m01', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'元素的化学性质主要由决定的',
      options:['A. 原子核','B. 最外层电子数','C. 中子数','D. 电子层数'],
      answer:'B',
      explain:'原子的化学性质主要由最外层电子数决定(得失电子能力)。最外层电子数<4易失,>4易得,=8稳定。中子数影响同位素但不影响化学性质。选B。'
    },
    { id:'chemfj6_006', manualId:'chem_m01', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（福建卷）第三周期元素最高价氧化物对应水化物酸性最强的是',
      options:['A. NaOH','B. Mg(OH)₂','C. HClO₄','D. H₂SO₄'],
      answer:'C',
      explain:'第三周期从左到右,非金属性增强,最高价含氧酸酸性:HClO₄>H₂SO₄>H₃PO₄>H₂SiO₃(硅酸最弱)。HClO₄是最强含氧酸之一。选C。'
    },
    { id:'chemfj6_007', manualId:'chem_m01', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'某元素R的最高价氧化物对应水化物是H₂RO₃,则R的最高化合价为',
      options:['A. +2','B. +4','C. +6','D. -2'],
      answer:'B',
      explain:'H₂RO₃中,H为+1,O为-2。设R价态x,则 2×1 + x + 3×(-2) = 0,x = +4。故R最高价+4。可能是C(H₂CO₃)、Si(H₂SiO₃)等。选B。'
    },
    { id:'chemfj6_008', manualId:'chem_m01', type:'judge', difficulty:'easy', local_fj:true, gaokao:true,
      q:'元素周期表中主族元素的最高化合价数等于其族数。请判断。',
      options:[],
      answer:'对',
      explain:'主族元素最高正价=族数(=最外层电子数),这是普遍规律。O、F除外(O一般-2,F只有-1)。表述基本正确,题目通常采用这一说法。'
    },
    { id:'chemfj6_009', manualId:'chem_m01', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'化学键分类,不含共价键的是',
      options:['A. NaCl','B. HCl','C. H₂O','D. CO₂'],
      answer:'A',
      explain:'NaCl:典型离子键(金属+非金属),Na⁺和Cl⁻通过静电作用。HCl、H₂O、CO₂:都是共价键(非金属与非金属)。NH₄Cl含有配位共价键+离子键混合。选A。'
    },
    { id:'chemfj6_010', manualId:'chem_m01', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'关于分子间作用力和氢键',
      options:['A. 氢键比一般化学键强','B. 分子间作用力包括范德华力、氢键等','C. H₂O沸点低于H₂S','D. 氢键只存在分子间'],
      answer:'B',
      explain:'A错:氢键比化学键弱,比范德华力强。C错:因H₂O分子间有氢键,沸点(100℃)高于H₂S(-60℃)。D错:氢键也可存在分子内(如邻硝基苯酚)。B正确。选B。'
    },
    { id:'chemfj6_011', manualId:'chem_m01', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'物质中含有共价键的是',
      options:['A. NaCl晶体','B. Mg','C. HCl气体','D. CaO'],
      answer:'C',
      explain:'HCl:H-Cl 极性共价键。NaCl、CaO:离子键。Mg:金属键。共价键:非金属+非金属;离子键:金属+非金属(且电负性差>1.7)。选C。'
    },
    { id:'chemfj6_012', manualId:'chem_m01', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'碳的两种同素异形体金刚石和石墨,由于结构不同性质差异',
      options:['A. 化学性质完全不同','B. 物理性质差异大,化学性质基本相同','C. 都是良导体','D. 都很软'],
      answer:'B',
      explain:'金刚石(sp³杂化,共价晶体,极硬)与石墨(sp²杂化,层状结构,层内共价、层间范德华力,滑腻,能导电)物理性质迥异。但化学性质基本相同(都是碳,可燃烧生成CO₂)。C₆₀是分子晶体又是一种同素异形体。选B。'
    },
    { id:'chemfj6_013', manualId:'chem_m01', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（福建卷）晶体类型和典型代表配对正确的是',
      options:['A. 离子晶体—CO₂','B. 原子晶体—NaCl','C. 分子晶体—金刚石','D. 分子晶体—干冰(CO₂)'],
      answer:'D',
      explain:'离子晶体:NaCl、CaO、KNO₃等;原子(共价)晶体:金刚石、Si、SiO₂、SiC;分子晶体:干冰(CO₂固)、冰、I₂、绝大多数有机物;金属晶体:金属单质。选D。'
    },
    { id:'chemfj6_014', manualId:'chem_m01', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'关于原子晶体、离子晶体、分子晶体、金属晶体的熔点排序,一般为',
      options:['A. 原子晶体 > 离子晶体 > 金属晶体 > 分子晶体','B. 都相同','C. 分子晶体最高','D. 无规律'],
      answer:'A',
      explain:'一般规律:原子晶体(共价键极强,如金刚石3550℃)>离子晶体(离子键强,如NaCl 801℃)≈某些金属(钨3410℃例外);分子晶体最低(范德华力弱,冰0℃、干冰-78℃)。选A。'
    },
    { id:'chemfj6_015', manualId:'chem_m01', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'下列符号 ³⁵₁₇Cl 表示',
      options:['A. 中子数35,电子数17','B. 质子数17,质量数35(即中子数18)','C. 质量35,电子17','D. 原子序数35'],
      answer:'B',
      explain:'^A_Z X:A质量数(左上),Z原子序数=质子数=电子数(左下)。故 ³⁵₁₇Cl:质子数17,电子数17,质量数35,中子数=35-17=18。³⁷₁₇Cl是氯的另一同位素。选B。'
    },
    { id:'chemfj6_016', manualId:'chem_m01', type:'judge', difficulty:'easy', local_fj:true, gaokao:true,
      q:'同位素是指质子数相同、中子数不同的原子。请判断。',
      options:[],
      answer:'对',
      explain:'同位素:同一元素(质子数相同)不同原子,中子数不同,质量数不同。如氢有³种同位素:¹H(氕)、²H(氘)、³H(氚)。表述正确。'
    },
    { id:'chemfj6_017', manualId:'chem_m01', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'某元素R原子最外层有7个电子,则R最高化合价、最低化合价分别是',
      options:['A. +7、-1','B. +7、-7','C. +1、-7','D. +5、-3'],
      answer:'A',
      explain:'最外层7电子:再得1电子就稳定(-1价),失去7电子(+7价)。故如Cl:最高+7(HClO₄)、最低-1(HCl)。F是特例:只有-1价,无正价。选A。'
    },
    { id:'chemfj6_018', manualId:'chem_m01', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'能形成共价键最多的短周期元素是',
      options:['A. H','B. C','C. O','D. Cl'],
      answer:'B',
      explain:'C原子最外层4电子,可以形成4个共价键(sp、sp²、sp³杂化),是有机物骨架的核心。H最多1键,O最多2键,Cl最多7键(如HClO₄)但常见1键。选B。'
    },
    { id:'chemfj6_019', manualId:'chem_m01', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（福建卷）"稀土"元素属于',
      options:['A. 短周期元素','B. 主族元素','C. 副族元素(第III B族)与镧系','D. 0族'],
      answer:'C',
      explain:'稀土元素通常指Sc、Y及镧系15种元素(共17种),属于ⅢB族及镧系(f区)。中国是稀土大国(储量占全球60%+,如包头白云鄂博)。这些元素在高科技(激光、磁性材料)中至关重要。选C。'
    },
    { id:'chemfj6_020', manualId:'chem_m01', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'元素金属性与非金属性强弱的判据不正确的是',
      options:['A. 金属性:与酸/水反应剧烈程度、最高价氢氧化物碱性','B. 非金属性:与H₂化合难易、最高价含氧酸酸性','C. 元素密度大就是金属性强','D. 单质氧化还原能力'],
      answer:'C',
      explain:'金属性判据:①与H₂O/酸反应剧烈度;②最高价氢氧化物碱性;③单质还原性强弱。非金属性判据:①与H₂化合难易与H化物稳定性;②最高价含氧酸酸性;③单质氧化性。密度和金属性无必然联系(如Li最轻却金属性强,Pt密度大却相对不活泼)。选C。'
    },

    // ==========================================================
    // 二、氧化还原与离子反应（15 题）
    // ==========================================================
    { id:'chemfj6_021', manualId:'chem_m02', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'（2023·福建卷）判断反应 2Cu+O₂→2CuO 属于',
      options:['A. 氧化还原反应','B. 复分解反应','C. 置换反应','D. 分解反应'],
      answer:'A',
      explain:'Cu价态从0→+2(氧化),O从0→-2(还原),有元素化合价变化即为氧化还原反应。同时也是化合反应。凡有化合价变化的都是氧化还原,反之则不是。选A。'
    },
    { id:'chemfj6_022', manualId:'chem_m02', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'反应 MnO₂ + 4HCl(浓) →Δ→ MnCl₂ + Cl₂↑ + 2H₂O 中,氧化剂和还原剂分别是',
      options:['A. MnO₂,HCl','B. HCl,MnO₂','C. Cl₂,MnO₂','D. MnO₂,MnCl₂'],
      answer:'A',
      explain:'Mn:+4→+2(得电子)→MnO₂被还原→MnO₂是氧化剂;Cl:-1→0(失电子)→HCl被氧化→HCl是还原剂。注意浓盐酸中一部分HCl表现酸性(未反应),一部分表现还原性。选A。'
    },
    { id:'chemfj6_023', manualId:'chem_m02', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'下列离子方程式书写正确的是',
      options:['A. 铁与稀硫酸反应:Fe+2H⁺=Fe³⁺+H₂↑','B. 铁与稀盐酸反应:Fe+2H⁺=Fe²⁺+H₂↑','C. Cu与稀盐酸反应产生H₂','D. 铜与硝酸银:Cu+Ag⁺=Cu²⁺+Ag'],
      answer:'B',
      explain:'A错(应生成Fe²⁺,稀酸不能把Fe氧化到+3);C错(Cu不能置换出H,活动性顺序在H后);D错(未配平,应为Cu+2Ag⁺=Cu²⁺+2Ag)。B正确。选B。'
    },
    { id:'chemfj6_024', manualId:'chem_m02', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'下列反应属于置换反应的是',
      options:['A. 2H₂+O₂=2H₂O','B. Fe+CuSO₄=FeSO₄+Cu','C. 2NaOH+H₂SO₄=Na₂SO₄+2H₂O','D. CaCO₃=CaO+CO₂↑'],
      answer:'B',
      explain:'置换反应:一种单质+一种化合物→一种新单质+一种新化合物。A是化合,C是中和(复分解),D是分解。B(Fe置换Cu)是典型置换反应。选B。'
    },
    { id:'chemfj6_025', manualId:'chem_m02', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'离子方程式中,不能拆写成离子形式的物质不包括',
      options:['A. 强电解质','B. 弱电解质','C. 沉淀','D. 单质、气体、氧化物'],
      answer:'A',
      explain:'离子方程式拆分规则:①强酸/强碱/可溶性盐拆(A错反向,是"能拆");②弱电解质(弱酸弱碱、水)、沉淀、气体、单质、氧化物不拆。题目问"不能拆写"故选A。'
    },
    { id:'chemfj6_026', manualId:'chem_m02', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'某溶液中同时含有大量以下四种离子,不可能共存的是',
      options:['A. K⁺、Na⁺、SO₄²⁻、Cl⁻','B. H⁺、Ba²⁺、SO₄²⁻、NO₃⁻','C. NH₄⁺、Na⁺、Cl⁻、HCO₃⁻','D. Fe²⁺、K⁺、Cl⁻、SO₄²⁻'],
      answer:'B',
      explain:'B中Ba²⁺与SO₄²⁻生成BaSO₄沉淀,不能大量共存。C中NH₄⁺、HCO₃⁻虽然可以共存(都是弱电解质),但要看条件。A、D不生成沉淀/气体/水,可共存。选B。'
    },
    { id:'chemfj6_027', manualId:'chem_m02', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'强酸性溶液中,不能大量共存的离子是',
      options:['A. Cl⁻','B. SO₄²⁻','C. CO₃²⁻','D. NO₃⁻'],
      answer:'C',
      explain:'CO₃²⁻在酸性溶液中生成CO₂+H₂O:CO₃²⁻+2H⁺=CO₂↑+H₂O,不能共存。其他离子不与H⁺反应。选C。'
    },
    { id:'chemfj6_028', manualId:'chem_m02', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'强碱性溶液中,不能大量共存的离子是',
      options:['A. Na⁺','B. K⁺','C. NH₄⁺','D. Cl⁻'],
      answer:'C',
      explain:'NH₄⁺与OH⁻反应生成NH₃·H₂O(弱碱)甚至加热放出NH₃气体,不能大量共存。K⁺、Na⁺、Cl⁻等在强碱溶液中稳定。选C。'
    },
    { id:'chemfj6_029', manualId:'chem_m02', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'Cu与稀HNO₃反应,离子方程式为',
      options:['A. Cu+2H⁺=Cu²⁺+H₂↑','B. 3Cu+8H⁺+2NO₃⁻=3Cu²⁺+2NO↑+4H₂O','C. Cu+HNO₃=CuNO₃+H₂↑','D. 无反应'],
      answer:'B',
      explain:'Cu不能被稀盐酸/稀硫酸氧化(H⁺氧化性弱),但可被硝酸(氧化性酸)氧化,稀HNO₃生成NO,浓HNO₃生成NO₂。稀HNO₃:3Cu+8H⁺+2NO₃⁻=3Cu²⁺+2NO↑+4H₂O。选B。'
    },
    { id:'chemfj6_030', manualId:'chem_m02', type:'judge', difficulty:'easy', local_fj:true, gaokao:true,
      q:'氧化剂本身在反应中被还原,得到电子,化合价降低。请判断。',
      options:[],
      answer:'对',
      explain:'口诀:"升失氧,降得还"。氧化剂:得电子、化合价降低、本身被还原、氧化对方。还原剂:失电子、化合价升高、本身被氧化、还原对方。表述正确。'
    },
    { id:'chemfj6_031', manualId:'chem_m02', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'下列常见氧化剂中氧化性最强的是',
      options:['A. Cl₂','B. Br₂','C. I₂','D. F₂'],
      answer:'D',
      explain:'卤素氧化性:F₂>Cl₂>Br₂>I₂(同主族从上到下非金属性、氧化性减弱)。F₂能与几乎所有物质反应,遇水放出O₂,是最强氧化剂之一(排在O₃、KMnO₄等之上)。选D。'
    },
    { id:'chemfj6_032', manualId:'chem_m02', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'下列反应中,水既是氧化剂又是还原剂的是',
      options:['A. 2H₂+O₂=2H₂O','B. 2F₂+2H₂O=4HF+O₂','C. 2Na+2H₂O=2NaOH+H₂↑','D. NaCl溶于水'],
      answer:'C',
      explain:'钠与水反应中,H₂O中的H(+1→0,得电子)被还原,即H₂O是氧化剂;同时O(-2→-2)不变,但生成NaOH,故实际上是Na→+1(还原剂),H₂O中H→0(H₂O是氧化剂)。此题只考虑水作氧化剂。C正确。选C。'
    },
    { id:'chemfj6_033', manualId:'chem_m02', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'常见还原剂中还原性最强的是',
      options:['A. Na','B. Mg','C. Al','D. K'],
      answer:'D',
      explain:'金属活动顺序:K>Ca>Na>Mg>Al>...。K的金属性最强,还原性也最强。故K > Na > Mg > Al。选D。'
    },
    { id:'chemfj6_034', manualId:'chem_m02', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（福建卷）反应 Cl₂+2NaOH=NaCl+NaClO+H₂O 属于',
      options:['A. 复分解反应','B. 歧化反应(自身氧化还原)','C. 置换反应','D. 化合反应'],
      answer:'B',
      explain:'Cl₂中Cl价态0,产物NaCl中Cl为-1(还原),NaClO中Cl为+1(氧化)。同一元素既升价又降价,称为歧化反应(自身氧化还原)。工业上用于制漂白粉:2Cl₂+2Ca(OH)₂=Ca(ClO)₂+CaCl₂+2H₂O。选B。'
    },
    { id:'chemfj6_035', manualId:'chem_m02', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（福建卷）配平方程式:__KMnO₄+__HCl(浓)=__KCl+__MnCl₂+__Cl₂↑+__H₂O,系数分别为',
      options:['A. 2,16,2,2,5,8','B. 1,8,1,1,3,4','C. 2,8,2,2,3,4','D. 1,16,1,1,5,8'],
      answer:'A',
      explain:'Mn:+7→+2(得5e⁻);Cl:-1→0(失1e⁻)。得失电子守恒:2×5 = x×1,x=10,故5Cl₂。同时非氧化的Cl(反应生成KCl和MnCl₂)另需 2+2×2=6个,总共16个HCl。得系数 2,16,2,2,5,8。选A。'
    },

    // ==========================================================
    // 三、金属及其化合物（15 题）
    // ==========================================================
    { id:'chemfj6_036', manualId:'chem_m03', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'（2024·福建卷）钠在空气中燃烧生成的产物是',
      options:['A. Na₂O','B. Na₂O₂','C. NaOH','D. NaH'],
      answer:'B',
      explain:'钠在空气常温下生成Na₂O;点燃/加热则生成Na₂O₂(过氧化钠,淡黄色固体,潜艇/宇航用作供氧剂:2Na₂O₂+2CO₂=2Na₂CO₃+O₂)。选B。'
    },
    { id:'chemfj6_037', manualId:'chem_m03', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'Na₂O₂与H₂O反应产生',
      options:['A. NaOH','B. NaOH和O₂','C. H₂','D. Na₂O'],
      answer:'B',
      explain:'2Na₂O₂+2H₂O=4NaOH+O₂↑。Na₂O₂中O为-1(过氧根),发生歧化:一部分-1→-2(NaOH),一部分-1→0(O₂)。同理与CO₂反应:2Na₂O₂+2CO₂=2Na₂CO₃+O₂。选B。'
    },
    { id:'chemfj6_038', manualId:'chem_m03', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'鉴别Na₂CO₃和NaHCO₃两种白色固体,最简便的方法是',
      options:['A. 用蒸馏水','B. 加热(NaHCO₃分解出CO₂,Na₂CO₃不分解)','C. 用酸(都产生气体)','D. 用碱'],
      answer:'B',
      explain:'加热NaHCO₃:2NaHCO₃→Na₂CO₃+H₂O+CO₂↑(不稳定,产生气体)。Na₂CO₃热稳定,不分解。此法简便直观,常用于鉴别或用于面点发面(小苏打)。选B。'
    },
    { id:'chemfj6_039', manualId:'chem_m03', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'Al₂O₃属于',
      options:['A. 酸性氧化物','B. 碱性氧化物','C. 两性氧化物','D. 中性氧化物'],
      answer:'C',
      explain:'两性氧化物:既能与酸反应(Al₂O₃+6HCl=2AlCl₃+3H₂O)又能与碱反应(Al₂O₃+2NaOH=2NaAlO₂+H₂O)。类似的两性氧化物还有ZnO、Al(OH)₃是两性氢氧化物。选C。'
    },
    { id:'chemfj6_040', manualId:'chem_m03', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'铁在氧气中燃烧生成',
      options:['A. FeO','B. Fe₂O₃','C. Fe₃O₄','D. Fe(OH)₃'],
      answer:'C',
      explain:'铁在O₂中燃烧:3Fe+2O₂→Fe₃O₄(四氧化三铁,黑色,磁铁矿主要成分)。铁在酸中生成Fe²⁺;铁在Cl₂中生成FeCl₃(2Fe+3Cl₂→2FeCl₃)。选C。'
    },
    { id:'chemfj6_041', manualId:'chem_m03', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'Fe²⁺与Fe³⁺相互转化,可用作Fe³⁺→Fe²⁺的还原剂是',
      options:['A. Fe','B. Cl₂','C. HNO₃','D. KMnO₄'],
      answer:'A',
      explain:'Fe³⁺→Fe²⁺需还原剂:Fe(2Fe³⁺+Fe=3Fe²⁺)、Cu(2Fe³⁺+Cu=2Fe²⁺+Cu²⁺)、S²⁻、SO₂等。Fe²⁺→Fe³⁺需氧化剂:Cl₂、HNO₃、KMnO₄等(2Fe²⁺+Cl₂=2Fe³⁺+2Cl⁻)。选A。'
    },
    { id:'chemfj6_042', manualId:'chem_m03', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'检验溶液中Fe³⁺,使用的试剂是',
      options:['A. NaOH溶液','B. KSCN溶液(变红)','C. AgNO₃','D. 稀盐酸'],
      answer:'B',
      explain:'Fe³⁺+KSCN→Fe(SCN)₃(血红色,络合物),这是Fe³⁺的特征反应,非常灵敏。Fe²⁺不显色(可加H₂O₂或Cl₂先氧化,再用KSCN)。NaOH可以但沉淀颜色难分辨。选B。'
    },
    { id:'chemfj6_043', manualId:'chem_m03', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（福建卷）明矾KAl(SO₄)₂·12H₂O 净水的原理是',
      options:['A. 明矾具有杀菌作用','B. Al³⁺水解生成Al(OH)₃胶体,吸附悬浮物','C. 明矾能消毒','D. 明矾能沉淀所有物质'],
      answer:'B',
      explain:'Al³⁺水解:Al³⁺+3H₂O⇌Al(OH)₃(胶体)+3H⁺。Al(OH)₃胶体表面积大,吸附水中悬浮微粒和杂质,起净水作用(而非消毒)。故明矾净水而不能消毒。同类还有硫酸铁、聚合氯化铝。选B。'
    },
    { id:'chemfj6_044', manualId:'chem_m03', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'Al(OH)₃属于',
      options:['A. 酸','B. 碱','C. 两性氢氧化物','D. 盐'],
      answer:'C',
      explain:'Al(OH)₃两性:①作碱 Al(OH)₃+3HCl=AlCl₃+3H₂O;②作酸 Al(OH)₃+NaOH=NaAlO₂+2H₂O(偏铝酸钠)。故过量NaOH能溶解Al(OH)₃。选C。'
    },
    { id:'chemfj6_045', manualId:'chem_m03', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'工业上用电解法冶炼的金属是',
      options:['A. Al','B. Fe','C. Cu','D. Zn'],
      answer:'A',
      explain:'电解法冶炼:活泼金属(K、Ca、Na、Mg、Al)。Al用电解Al₂O₃(熔融,加冰晶石Na₃AlF₆做助熔剂)。Fe:用CO还原(高炉炼铁)。Cu、Zn:用C或热还原/湿法冶金。选A。'
    },
    { id:'chemfj6_046', manualId:'chem_m03', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'钝化现象是指',
      options:['A. 金属被腐蚀','B. 常温下Fe、Al在浓硫酸/浓硝酸中被表面氧化层保护,不再反应','C. 加热就反应','D. 与H₂反应'],
      answer:'B',
      explain:'钝化:常温下浓H₂SO₄/浓HNO₃能与Fe、Al表面生成致密氧化膜,阻止内部金属继续反应。故可以用铁槽/铝罐运输浓硫酸/浓硝酸(但加热则反应)。这是工业实际用途。选B。'
    },
    { id:'chemfj6_047', manualId:'chem_m03', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'铁的锈蚀主要是',
      options:['A. 化学反应生成Fe₂O₃','B. 电化学腐蚀(吸氧腐蚀)','C. 磨损','D. 燃烧'],
      answer:'B',
      explain:'铁生锈是电化学腐蚀。潮湿环境下形成原电池:负极Fe-2e⁻→Fe²⁺;正极 O₂+2H₂O+4e⁻→4OH⁻。产物Fe(OH)₂进一步氧化为Fe(OH)₃→Fe₂O₃·xH₂O(铁锈,红棕色)。选B。'
    },
    { id:'chemfj6_048', manualId:'chem_m03', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'保护铁质工件的常见方法不包括',
      options:['A. 电镀锌(牺牲阳极保护)','B. 涂油漆隔绝空气水','C. 与铜连接','D. 加缓蚀剂'],
      answer:'C',
      explain:'铁与铜连接会形成原电池,铁作负极加速腐蚀,不能保护。正确方法:①涂层(油漆、镀锌、镀铬);②牺牲阳极(接更活泼的Zn,如船体);③外加电流阴极保护(接外接电源负极)。选C。'
    },
    { id:'chemfj6_049', manualId:'chem_m03', type:'judge', difficulty:'easy', local_fj:true, gaokao:true,
      q:'金属活动顺序:K Ca Na Mg Al Zn Fe Sn Pb (H) Cu Hg Ag Pt Au。请判断。',
      options:[],
      answer:'对',
      explain:'金属活动顺序表(常用):钾钙钠镁铝、锌铁锡铅氢、铜汞银铂金。前者能置换后者的盐溶液(不含Cu置换Al等特例)。氢前的金属可置换稀酸中的H。表述正确。'
    },
    { id:'chemfj6_050', manualId:'chem_m03', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（福建卷·工业）从赤铁矿(主要成分Fe₂O₃)炼铁的化学反应主要是',
      options:['A. Fe₂O₃+3C=2Fe+3CO↑','B. Fe₂O₃+3CO=2Fe+3CO₂ (高温)','C. Fe₂O₃+3H₂=2Fe+3H₂O','D. 电解Fe₂O₃'],
      answer:'B',
      explain:'工业炼铁:高炉中,焦炭燃烧生成CO(2C+O₂=2CO₂;CO₂+C=2CO),CO将Fe₂O₃还原:Fe₂O₃+3CO=2Fe+3CO₂(高温)。这是主反应,直接用C成本高、效率低。选B。'
    },

    // ==========================================================
    // 四、非金属及其化合物（15 题）
    // ==========================================================
    { id:'chemfj6_051', manualId:'chem_m04', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'Cl₂常温下的物理性质是',
      options:['A. 黄绿色气体,有刺激性气味,有毒','B. 无色气体,无味','C. 红棕色气体','D. 黑色固体'],
      answer:'A',
      explain:'Cl₂:黄绿色气体,有强烈刺激性气味,有毒,密度比空气大,可溶于水(生成盐酸和次氯酸)。红棕色气体是NO₂、Br₂蒸气;I₂常温紫黑色固体。选A。'
    },
    { id:'chemfj6_052', manualId:'chem_m04', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'Cl₂与H₂O反应,主要产物是',
      options:['A. HCl + O₂','B. HCl + HClO','C. 只有HCl','D. 无反应'],
      answer:'B',
      explain:'Cl₂+H₂O⇌HCl+HClO(可逆,弱)。次氯酸HClO具有强氧化性和漂白作用,故氯水能漂白(需湿润)、能消毒。工业干燥氯气可保存,不与冷/干燥物反应。选B。'
    },
    { id:'chemfj6_053', manualId:'chem_m04', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'漂白粉的主要成分是',
      options:['A. Ca(ClO)₂','B. Ca(ClO)₂和CaCl₂的混合物','C. CaO','D. Ca(OH)₂'],
      answer:'B',
      explain:'漂白粉制备:2Cl₂+2Ca(OH)₂=Ca(ClO)₂+CaCl₂+2H₂O,故主要成分是Ca(ClO)₂和CaCl₂混合物,其中Ca(ClO)₂是有效成分。使用时要与酸(如空气CO₂+H₂O)作用生成HClO才有漂白/消毒能力。选B。'
    },
    { id:'chemfj6_054', manualId:'chem_m04', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（2024·福建卷）SO₂的下列性质,可用于制漂白剂的是',
      options:['A. 酸性','B. 还原性','C. 漂白性','D. 与碱反应'],
      answer:'C',
      explain:'SO₂具有漂白性(与有色物质结合生成不稳定无色化合物,加热又变回原色),可用于纸张、草帽、麦秆漂白。这种漂白与HClO/H₂O₂/O₃(氧化型漂白)不同,SO₂是加合型漂白。选C。'
    },
    { id:'chemfj6_055', manualId:'chem_m04', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'SO₂能使品红溶液褪色,加热又恢复红色,而Cl₂使品红褪色后加热',
      options:['A. 也恢复原色','B. 不能恢复原色','C. 变蓝','D. 变绿'],
      answer:'B',
      explain:'Cl₂/HClO漂白是氧化型漂白,永久性破坏有色物质结构,加热不恢复。SO₂漂白是加合型(生成不稳定加合物),加热分解恢复原色。故二者区别可用此性质。选B。'
    },
    { id:'chemfj6_056', manualId:'chem_m04', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'实验室制H₂S气体的原理',
      options:['A. FeS+2HCl=FeCl₂+H₂S↑','B. Na₂S+H₂O','C. FeS+HNO₃','D. FeS+H₂SO₄(浓)'],
      answer:'A',
      explain:'实验室制H₂S:FeS+稀H₂SO₄或稀HCl(强酸置换弱酸)。不用HNO₃(有强氧化性会氧化S²⁻)和浓H₂SO₄(氧化)。反应用启普发生器或简易装置。选A。'
    },
    { id:'chemfj6_057', manualId:'chem_m04', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'工业生产硫酸的主要反应中,催化剂催化的关键反应是',
      options:['A. 4FeS₂+11O₂=2Fe₂O₃+8SO₂','B. 2SO₂+O₂⇌2SO₃(催化剂V₂O₅)','C. SO₃+H₂O=H₂SO₄','D. 硫酸稀释'],
      answer:'B',
      explain:'硫酸工业三步:①煅烧硫铁矿或硫磺得SO₂;②SO₂催化氧化为SO₃(V₂O₅催化剂,450℃,可逆放热反应,平衡右移);③SO₃用98.3%浓硫酸吸收得发烟硫酸再稀释。第二步是关键,决定产率。选B。'
    },
    { id:'chemfj6_058', manualId:'chem_m04', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（福建卷）浓硫酸的特性不包括',
      options:['A. 吸水性(干燥剂)','B. 脱水性(炭化蔗糖)','C. 强氧化性','D. 挥发性'],
      answer:'D',
      explain:'浓H₂SO₄:①吸水性(结合游离水,用作干燥剂);②脱水性(按H:O=2:1脱去,炭化有机物);③强氧化性(与Cu、C反应产生SO₂)。它是不挥发性酸(高沸点338℃)。浓HCl、浓HNO₃才具有挥发性。选D。'
    },
    { id:'chemfj6_059', manualId:'chem_m04', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'实验室干燥HCl气体应选择的干燥剂是',
      options:['A. NaOH固体','B. 碱石灰(NaOH+CaO)','C. 浓H₂SO₄','D. Na₂O'],
      answer:'C',
      explain:'干燥剂选择原则:不与被干燥气体反应。HCl酸性,应用酸性/中性干燥剂:浓H₂SO₄、无水CaCl₂、P₂O₅。NaOH、碱石灰是碱性,会与HCl反应,不适用。选C。'
    },
    { id:'chemfj6_060', manualId:'chem_m04', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'NH₃的实验室制法是',
      options:['A. NH₄Cl溶液加热','B. 加热NH₄Cl和Ca(OH)₂固体混合物','C. N₂+H₂催化','D. NH₃·H₂O加热'],
      answer:'B',
      explain:'实验室制NH₃:2NH₄Cl+Ca(OH)₂ =加热= CaCl₂+2NH₃↑+2H₂O。固固加热(与制O₂类似装置)。工业合成用N₂+3H₂ (500℃、Fe催化、20-50MPa)。选B。'
    },
    { id:'chemfj6_061', manualId:'chem_m04', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'NH₃收集方法是',
      options:['A. 向上排空气法','B. 向下排空气法','C. 排水法','D. 向下排饱和食盐水'],
      answer:'B',
      explain:'NH₃比空气轻(密度17比29),故用向下排空气法(集气瓶口朝下)。NH₃极易溶于水(1:700),不能用排水法。检验:湿润的红色石蕊试纸变蓝(唯一使湿润红蕊变蓝的常见气体)。选B。'
    },
    { id:'chemfj6_062', manualId:'chem_m04', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'浓HNO₃与Cu反应产生的气体是',
      options:['A. NO','B. NO₂','C. H₂','D. N₂'],
      answer:'B',
      explain:'浓HNO₃:Cu+4HNO₃(浓)=Cu(NO₃)₂+2NO₂↑+2H₂O,产生红棕色NO₂。稀HNO₃:3Cu+8HNO₃(稀)=3Cu(NO₃)₂+2NO↑+4H₂O,产生无色NO(遇空气变红棕NO₂)。选B。'
    },
    { id:'chemfj6_063', manualId:'chem_m04', type:'judge', difficulty:'easy', local_fj:true, gaokao:true,
      q:'铜、银等不活泼金属不能与稀盐酸/稀硫酸反应,但能与硝酸反应。请判断。',
      options:[],
      answer:'对',
      explain:'Cu、Ag等H后的金属:不能与稀H₂SO₄、稀HCl反应(H⁺氧化性弱);但能与HNO₃(有强氧化性,是NO₃⁻在酸性下的氧化性,不是H⁺)、浓H₂SO₄反应。表述正确。'
    },
    { id:'chemfj6_064', manualId:'chem_m04', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'SiO₂能与下列哪种酸反应',
      options:['A. HCl','B. H₂SO₄','C. HF','D. HNO₃'],
      answer:'C',
      explain:'SiO₂+4HF=SiF₄↑+2H₂O。这是SiO₂唯一能与之反应的酸(HF能腐蚀玻璃,故盛HF不能用玻璃瓶,而用塑料/铅制品)。SiO₂是酸性氧化物但不与一般酸反应。选C。'
    },
    { id:'chemfj6_065', manualId:'chem_m04', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（福建卷）以下物质中不属于电解质的是',
      options:['A. NaCl','B. HCl','C. NaOH','D. Cu'],
      answer:'D',
      explain:'电解质定义:在水溶液或熔融状态下能电离出离子的化合物。Cu是单质(既不是电解质也不是非电解质,因不是化合物)。溶液能导电但不是化合物,所以不是电解质。NaCl、HCl、NaOH都是电解质。选D。'
    },

    // ==========================================================
    // 五、有机化学（20 题）
    // ==========================================================
    { id:'chemfj6_066', manualId:'chem_m05', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'甲烷CH₄的分子空间构型是',
      options:['A. 平面型','B. 直线型','C. 正四面体','D. 三角锥'],
      answer:'C',
      explain:'CH₄:C为sp³杂化,分子空间为正四面体,4个C-H键完全等价,键角109°28′。这是有机化学的基础结构。选C。'
    },
    { id:'chemfj6_067', manualId:'chem_m05', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'C₂H₄乙烯的分子空间构型是',
      options:['A. 平面型(sp²)','B. 直线型','C. 正四面体','D. 三角锥'],
      answer:'A',
      explain:'C₂H₄乙烯:每个C为sp²杂化,C=C双键(1σ+1π),整个分子为平面,6个原子共面。乙炔C₂H₂为直线型(sp杂化)。苯环也是平面。选A。'
    },
    { id:'chemfj6_068', manualId:'chem_m05', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（2024·福建卷）能使溴水褪色的物质是',
      options:['A. 甲烷','B. 乙烷','C. 乙烯','D. 苯'],
      answer:'C',
      explain:'能使溴水褪色的物质有:①含C=C、C≡C双键/三键的烯、炔烃(加成反应);②SO₂(还原Br₂);③苯酚等(取代);④KI(还原)。甲烷、乙烷是饱和烷烃(不反应),苯不使溴水褪色但可萃取(化学不反应)。选C。'
    },
    { id:'chemfj6_069', manualId:'chem_m05', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'苯的分子式是C₆H₆,苯的结构特点是',
      options:['A. 三个C=C双键、三个C-C单键交替','B. 6个介于单键和双键之间的等价的C-C键','C. 六个C=C键','D. 六个C-C单键'],
      answer:'B',
      explain:'苯的实际结构:6个C原子形成平面正六边形,每个C为sp²杂化,剩余p轨道形成大π键(6个电子共有),故6个C-C键等长(0.140nm,介于单键0.154和双键0.133之间),完全等价。不发生特征的加成反应而更倾向取代。选B。'
    },
    { id:'chemfj6_070', manualId:'chem_m05', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'乙醇分子中,能与钠反应产生H₂的是',
      options:['A. 甲基上的H','B. 亚甲基上的H','C. 羟基上的H','D. 所有H'],
      answer:'C',
      explain:'乙醇CH₃CH₂OH:只有-OH上的H能与Na反应:2C₂H₅OH+2Na→2C₂H₅ONa+H₂↑(比钠与水反应缓和)。故此反应可以证明乙醇有-OH,且-OH上的H比水中的更"不活泼"。选C。'
    },
    { id:'chemfj6_071', manualId:'chem_m05', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'乙醇的催化氧化产物是',
      options:['A. 乙酸','B. 乙醛','C. 乙醚','D. 乙烯'],
      answer:'B',
      explain:'2CH₃CH₂OH+O₂ =Cu催化,△= 2CH₃CHO+2H₂O。乙醇→乙醛→(再氧化)乙酸。Cu催化剂:2Cu+O₂=2CuO;CuO+CH₃CH₂OH=CH₃CHO+Cu+H₂O。选B。'
    },
    { id:'chemfj6_072', manualId:'chem_m05', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'区分乙醇和乙酸,可以用',
      options:['A. 石蕊试纸(乙酸变红)','B. Na(都反应)','C. NaOH','D. 蒸馏水'],
      answer:'A',
      explain:'乙酸CH₃COOH是弱酸,能使石蕊变红;乙醇是中性,不变色。所以石蕊试纸最简便。Na对二者都反应(-OH和-COOH都能),不能区分;NaOH乙酸反应完全、乙醇不反应,也可以但不如石蕊直观。选A。'
    },
    { id:'chemfj6_073', manualId:'chem_m05', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'酯化反应属于',
      options:['A. 取代反应','B. 加成反应','C. 氧化反应','D. 消去反应'],
      answer:'A',
      explain:'酯化:CH₃COOH+C₂H₅OH ⇌(浓H₂SO₄,△) CH₃COOC₂H₅+H₂O。-OH中H(醇提供)与-COOH中OH(酸提供)结合成水——本质是相互取代-OH/-H,故属于取代反应(不属于加成或缩合)。选A。'
    },
    { id:'chemfj6_074', manualId:'chem_m05', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'酯化反应的催化剂是',
      options:['A. 浓H₂SO₄','B. NaOH','C. HCl','D. 无需催化剂'],
      answer:'A',
      explain:'酯化反应用浓H₂SO₄作催化剂(还兼吸水剂,促进平衡右移)。反应必须加热。制备实验时,滴入乙醇的乙酸,加入浓H₂SO₄,加热,收集蒸出的乙酸乙酯(挥发性,水浴加热易脱出)。选A。'
    },
    { id:'chemfj6_075', manualId:'chem_m05', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'（2024·福建卷）下列物质中,属于高分子化合物的是',
      options:['A. 蔗糖','B. 淀粉','C. 甘油','D. 乙酸乙酯'],
      answer:'B',
      explain:'高分子化合物:分子量>10⁴的物质,如淀粉、纤维素、蛋白质、聚乙烯、聚丙烯等。蔗糖分子量342不算高分子(是二糖)。淀粉、纤维素都是天然高分子(多糖)。选B。'
    },
    { id:'chemfj6_076', manualId:'chem_m05', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'淀粉与葡萄糖的关系是',
      options:['A. 淀粉水解生成葡萄糖','B. 葡萄糖水解生成淀粉','C. 无关','D. 结构相同'],
      answer:'A',
      explain:'淀粉是多糖(C₆H₁₀O₅)n,水解(酸/淀粉酶催化):(C₆H₁₀O₅)n+nH₂O→n C₆H₁₂O₆(葡萄糖)。人食入淀粉,唾液淀粉酶初步水解、小肠彻底水解为葡萄糖,吸收供能。选A。'
    },
    { id:'chemfj6_077', manualId:'chem_m05', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'鉴别葡萄糖溶液,可用',
      options:['A. 银氨溶液(银镜反应)','B. 稀盐酸','C. NaOH','D. 石蕊'],
      answer:'A',
      explain:'葡萄糖分子含-CHO(醛基),可与银氨溶液发生银镜反应,也可与新制Cu(OH)₂加热生成Cu₂O砖红色沉淀。这是醛类的特征反应,常用于测血糖(斐林试剂法)。选A。'
    },
    { id:'chemfj6_078', manualId:'chem_m05', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'蛋白质的基本组成单位是',
      options:['A. 氨基酸','B. 葡萄糖','C. 核苷酸','D. 脂肪酸'],
      answer:'A',
      explain:'蛋白质由约20种α-氨基酸(H₂N-CHR-COOH)通过肽键(-CO-NH-)缩合形成的多肽链,再折叠成一/二/三/四级结构。氨基酸→蛋白质;葡萄糖→淀粉;核苷酸→DNA/RNA;脂肪酸+甘油→脂肪。选A。'
    },
    { id:'chemfj6_079', manualId:'chem_m05', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'加聚反应生成聚乙烯,单体是',
      options:['A. 乙烷','B. 乙烯 CH₂=CH₂','C. 乙醇','D. 乙醛'],
      answer:'B',
      explain:'加聚反应:含C=C的烯烃打开双键连接,如乙烯聚合:n CH₂=CH₂→[-CH₂-CH₂-]n(聚乙烯,PE)。丙烯→聚丙烯(PP),苯乙烯→聚苯乙烯(PS)。选B。'
    },
    { id:'chemfj6_080', manualId:'chem_m05', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（福建卷）油脂在NaOH溶液中的水解反应叫做',
      options:['A. 酯化','B. 皂化反应','C. 缩合','D. 加成'],
      answer:'B',
      explain:'油脂+NaOH:油脂(甘油三酯)水解生成甘油+高级脂肪酸钠(即肥皂),称为皂化反应。工业制肥皂即用此法。硬脂酸钠、软脂酸钠、油酸钠等长链羧酸钠是肥皂主要成分。选B。'
    },
    { id:'chemfj6_081', manualId:'chem_m05', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'官能团-COOH的名称是',
      options:['A. 羟基','B. 羧基(羧酸的官能团)','C. 醛基','D. 酯基'],
      answer:'B',
      explain:'常见官能团:-OH羟基;-CHO醛基;-COOH羧基(含羰基和羟基,酸性);-COO-酯基;-NH₂氨基;-NO₂硝基;-C=C-碳碳双键。选B。'
    },
    { id:'chemfj6_082', manualId:'chem_m05', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'同分异构体是指',
      options:['A. 分子式相同,结构不同的化合物','B. 结构相同、分子式不同','C. 完全相同的物质','D. 化学性质相同'],
      answer:'A',
      explain:'同分异构体:分子式相同、结构式不同的化合物。C₄H₁₀有2种(正丁烷、异丁烷);C₅H₁₂有3种;C₂H₆O有2种(乙醇、二甲醚)。同分异构体化学性质可能相似也可能不同(如二甲醚不与Na反应,乙醇能)。选A。'
    },
    { id:'chemfj6_083', manualId:'chem_m05', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'CH₃CH₂OH属于',
      options:['A. 醛','B. 醇(饱和一元醇)','C. 羧酸','D. 酯'],
      answer:'B',
      explain:'CH₃CH₂OH(乙醇)含-OH(羟基),属于醇类,饱和一元醇(只有一个-OH,烃基饱和)。是最常见的醇,酒的主要成分,工业用于消毒、燃料、溶剂。选B。'
    },
    { id:'chemfj6_084', manualId:'chem_m05', type:'judge', difficulty:'easy', local_fj:true, gaokao:true,
      q:'植物油在NaOH溶液中水解生成甘油和硬脂酸钠等,可用于制皂。请判断。',
      options:[],
      answer:'对',
      explain:'油脂+NaOH → 甘油+脂肪酸钠(肥皂)。液态植物油含较多不饱和键,通过加氢可硬化为固态人造奶油。这两个反应都是重要工业过程。表述正确。'
    },
    { id:'chemfj6_085', manualId:'chem_m05', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'苯的一氯代物(C₆H₅Cl)的同分异构体数目是',
      options:['A. 1种','B. 2种','C. 3种','D. 6种'],
      answer:'A',
      explain:'苯环6个位置完全等价(高度对称),一氯代物只有1种(氯连接任一位置结构相同)。苯的二氯代物有3种(邻、间、对二氯苯)。选A。'
    },

    // ==========================================================
    // 六、化学实验与计算（15 题）
    // ==========================================================
    { id:'chemfj6_086', manualId:'chem_m06', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'实验室配制100 mL 0.1 mol/L NaCl溶液,应选用的容量瓶规格是',
      options:['A. 50 mL','B. 100 mL','C. 250 mL','D. 500 mL'],
      answer:'B',
      explain:'配制溶液选择容量瓶规格:与所配溶液体积相同或稍大(常用规格50、100、250、500、1000mL)。配制100mL用100mL容量瓶。步骤:计算→称量→溶解→冷却→转移→洗涤→定容→摇匀。选B。'
    },
    { id:'chemfj6_087', manualId:'chem_m06', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'过滤操作中,玻璃棒的作用是',
      options:['A. 搅拌加速溶解','B. 引流,防止液体溅出','C. 加热','D. 计时'],
      answer:'B',
      explain:'过滤时"一贴、二低、三靠":滤纸贴漏斗壁,滤纸边缘低于漏斗口,液面低于滤纸;玻璃棒靠三层滤纸引流,漏斗颈下端靠烧杯内壁,烧杯口靠玻璃棒。玻璃棒起引流作用,防溅。选B。'
    },
    { id:'chemfj6_088', manualId:'chem_m06', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'蒸馏操作中,温度计水银球应放在',
      options:['A. 液面下','B. 支管口处(测蒸汽温度)','C. 蒸馏烧瓶底部','D. 冷凝管中'],
      answer:'B',
      explain:'蒸馏时,温度计水银球应位于蒸馏烧瓶支管口处,测量的是蒸汽温度(即馏出物的温度),而不是液体温度。冷凝管冷凝水应下进上出(与蒸汽方向相反,利于冷却)。选B。'
    },
    { id:'chemfj6_089', manualId:'chem_m06', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'萃取分液漏斗操作中,分液时先放出',
      options:['A. 下层液','B. 上层液','C. 同时放','D. 从上口倒出下层液'],
      answer:'A',
      explain:'分液:漏斗静置分层后,先打开下面活塞放出下层液体,然后再从漏斗上口倒出上层液体(避免与下层液体混合)。若上层从活塞流下,会与下层混合污染。选A。'
    },
    { id:'chemfj6_090', manualId:'chem_m06', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（福建卷）用石蕊指示剂滴定盐酸和NaOH,滴定终点的颜色变化',
      options:['A. 无色→红色','B. 红色→无色','C. 蓝色→红色','D. 红色→紫色/蓝色(在酸滴碱)'],
      answer:'D',
      explain:'实验室常用酚酞(酸中无色,碱中红色,变色范围pH8.0-9.8)或甲基橙(变色范围pH3.1-4.4)。若用石蕊(不常用),在中和滴定中变色不明显。答案D描述滴入NaOH后,溶液由红色(酸性)→紫色(中性)→蓝色(碱性)。选D。'
    },
    { id:'chemfj6_091', manualId:'chem_m06', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'实验室制取Cl₂的反应及尾气处理正确的是',
      options:['A. MnO₂+浓HCl加热制,尾气用NaOH吸收','B. NaCl+浓H₂SO₄','C. 直接排放','D. 用蒸馏水吸收'],
      answer:'A',
      explain:'实验室制Cl₂:MnO₂+4HCl(浓)=△=MnCl₂+Cl₂↑+2H₂O。Cl₂有毒,尾气必须处理,用NaOH溶液吸收:Cl₂+2NaOH=NaCl+NaClO+H₂O。选A。'
    },
    { id:'chemfj6_092', manualId:'chem_m06', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'计算:100mL 2mol/L的NaOH溶液中含有NaOH的物质的量是',
      options:['A. 0.2 mol','B. 2 mol','C. 200 mol','D. 0.02 mol'],
      answer:'A',
      explain:'n=c·V=2 mol/L × 0.1 L = 0.2 mol。这是浓度公式的基本应用。质量 m=n·M=0.2×40=8 g。选A。'
    },
    { id:'chemfj6_093', manualId:'chem_m06', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'标准状况下(0℃, 101 kPa),22.4L气体的物质的量是',
      options:['A. 1 mol','B. 22.4 mol','C. 0.5 mol','D. 无法确定'],
      answer:'A',
      explain:'标况(STP:0℃,101 kPa)下气体摩尔体积Vm=22.4 L/mol。n=V/Vm=22.4/22.4=1 mol,不论何种气体(理想气体状态方程 PV=nRT 的一个应用)。选A。'
    },
    { id:'chemfj6_094', manualId:'chem_m06', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（福建卷·计算）将98% 浓H₂SO₄稀释成1 mol/L 的稀H₂SO₄,若稀释后浓度公式,用到的公式是',
      options:['A. 溶液稀释规律:c₁V₁=c₂V₂ (稀释时溶质n不变)','B. n=cV','C. PV=nRT','D. F=ma'],
      answer:'A',
      explain:'溶液稀释:溶质的物质的量不变。c₁V₁ = c₂V₂。这是稀释和混合浓度计算的最基本公式。选A。'
    },
    { id:'chemfj6_095', manualId:'chem_m06', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'一个氯原子的质量约为(阿伏伽德罗常数N_A=6.02×10²³)',
      options:['A. 5.8×10⁻²³ g','B. 35.5 g','C. 35.5×N_A g','D. 71 g'],
      answer:'A',
      explain:'1 mol Cl 质量35.5 g,含N_A 个原子。单个原子质量:35.5/N_A=35.5/(6.02×10²³)≈5.9×10⁻²³ g。选A。'
    },
    { id:'chemfj6_096', manualId:'chem_m06', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'某NaOH溶液pH=13,c(OH⁻)约为',
      options:['A. 0.1 mol/L','B. 0.01 mol/L','C. 1 mol/L','D. 10⁻¹³ mol/L'],
      answer:'A',
      explain:'pH=13→c(H⁺)=10⁻¹³ mol/L→c(OH⁻)=Kw/c(H⁺)=10⁻¹⁴/10⁻¹³=10⁻¹=0.1 mol/L。选A。'
    },
    { id:'chemfj6_097', manualId:'chem_m06', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'20mL 0.1 mol/L HCl与20mL 0.1 mol/L NaOH混合,混合后溶液pH为',
      options:['A. 7','B. 1','C. 13','D. 5'],
      answer:'A',
      explain:'等物质的量HCl(2mmol)和NaOH(2mmol)恰好完全中和,生成NaCl(强酸强碱盐)和水。溶液中性,pH=7。选A。'
    },
    { id:'chemfj6_098', manualId:'chem_m06', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'某有机物C₂H₆O的可能结构有几种',
      options:['A. 1种','B. 2种(乙醇和二甲醚)','C. 3种','D. 4种'],
      answer:'B',
      explain:'C₂H₆O的可能结构:①CH₃CH₂OH(乙醇,含-OH,能与Na反应);②CH₃OCH₃(二甲醚,含醚键,不能与Na反应)。同分异构体2种。选B。'
    },
    { id:'chemfj6_099', manualId:'chem_m06', type:'judge', difficulty:'easy', local_fj:true, gaokao:true,
      q:'化学中"摩尔"是国际单位制中物质的量的基本单位。请判断。',
      options:[],
      answer:'对',
      explain:'摩尔(mol)是SI基本单位之一,表示物质的量,1 mol=N_A(6.022×10²³)个粒子。SI 7个基本单位:m(长度)、kg(质量)、s(时间)、A(电流)、K(温度)、mol(物质的量)、cd(发光强度)。表述正确。'
    },
    { id:'chemfj6_100', manualId:'chem_m06', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（福建卷·综合）关于阿伏伽德罗定律理解正确的是',
      options:['A. 同温同压下同体积任何气体所含分子数相同','B. 同体积同质量的气体相同','C. 与温度压强无关','D. 液体也适用'],
      answer:'A',
      explain:'阿伏伽德罗定律:同温、同压下,相同体积的任何气体所含分子数相同(即n相同、Vm相同)。这是理想气体的性质,液体、固体不适用。推论:同温同压下V比=n比;同温同容下P比=n比。选A。'
    },
  ];

  // 挂载
  function _mount(target, extras) {
    if (!Array.isArray(target)) return 0;
    let added = 0;
    const existing = new Set(target.map(q => q && q.id));
    extras.forEach(q => { if (!existing.has(q.id)) { target.push(q); added++; } });
    return added;
  }
  function tryMount() {
    let n=0;
    if (Array.isArray(global.CHEMISTRY_BANK)) n = _mount(global.CHEMISTRY_BANK, CHEMISTRY_FUJIAN_V6);
    if (n) console.info(`[福建高考·化学深化 v6] 已注入化学 +${n} 题`);
    return n;
  }
  const r = tryMount();
  if (!r) { if (typeof document !== 'undefined') document.addEventListener('DOMContentLoaded', tryMount); }
  global.FUJIAN_SUPPLEMENT_V6 = { CHEMISTRY_FUJIAN_V6, mount: tryMount };

})(typeof window !== 'undefined' ? window : this);
