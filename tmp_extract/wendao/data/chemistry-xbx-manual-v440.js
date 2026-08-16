/* ================================================================
 * 《问道修仙学院》v4.4.0 · 化学·一轮复习秘籍（追加）
 *
 * 素材来源：老师给的《一轮复习用元素化学》zip 包（4 大模块）
 *   01 化学物质及其变化      → 挑 3 讲
 *   02 化学计量              → 挑 2 讲
 *   03 金属及其化合物        → 挑 3 讲
 *   04 非金属及其化合物      → 挑 4 讲
 * 合计：12 篇
 *
 * id 命名：chem_xbx_*   —— "选必下"拼音首字母
 * 加载顺序：本文件在 chemistry-manual.js 之后加载
 * ================================================================ */
(function (global) {
  'use strict';

  const APPEND = [
    // ============== 模块 01·化学物质及其变化 ==============
    {
      id: 'chem_xbx_lizi',
      title: '《离子反应与离子方程式》',
      tier: '一轮·物质及其变化',
      chapter: '模块01·第3-5讲',
      summary: '离子反应是复分解或氧化还原；离子方程式是"以离子形式表示反应实质"的书写工具。',
      keyPoints: [
        '离子共存三判据：不产生沉淀/气体/弱电解质；不发生氧化还原',
        '离子方程式书写四步：写→拆→删→查（拆强不拆弱）',
        '"与量有关"三大陷阱：过量少量顺序、酸式盐、双水解',
        '常见拆分规则：强酸强碱可溶盐拆成离子；弱酸弱碱不拆；沉淀气体单质氧化物不拆',
        '"↑↓"符号：气体沉淀要标，弱电解质水不标'
      ],
      example: '过量 CO₂ 通入 NaAlO₂ 溶液，离子方程式怎么写？'
    },
    {
      id: 'chem_xbx_redox',
      title: '《氧化还原反应》',
      tier: '一轮·物质及其变化',
      chapter: '模块01·第6-7讲',
      summary: '化合价升降是本质，电子得失是内核；配平三大方法（价升降/得失电子守恒/观察法）。',
      keyPoints: [
        '四大守恒：质量守恒、电荷守恒、电子得失守恒、原子个数守恒',
        '氧化性还原性强弱：氧化剂>氧化产物；还原剂>还原产物',
        '双线桥法：从反应物指向生成物，标"失/得 n×e⁻"，价变元素连线',
        '常见氧化剂：MnO₄⁻/Cr₂O₇²⁻/HNO₃/H₂SO₄(浓)/Cl₂/O₂/HClO',
        '常见还原剂：金属单质/Fe²⁺/S²⁻/I⁻/SO₃²⁻/H₂/C/CO'
      ],
      example: '用双线桥表示 MnO₂+4HCl(浓)=MnCl₂+Cl₂↑+2H₂O 的电子转移。'
    },
    {
      id: 'chem_xbx_stranger',
      title: '《陌生情境方程式书写》',
      tier: '一轮·物质及其变化',
      chapter: '模块01·微专题3',
      summary: '高考高频压轴——陌生反应方程式的书写与配平（工艺流程题的心脏）。',
      keyPoints: [
        '三步法：读情境（反应物/产物/条件）→ 判反应类型（复分解/氧化还原）→ 用守恒配平',
        '氧化还原方程配平：电子得失守恒（价升降总数相等）',
        '离子方程式配平：先电子守恒 → 再电荷守恒 → 最后原子守恒（H₂O 兜底）',
        '陌生反应常见"信息词"：绿色化学、酸性条件、碱性条件、加热、催化',
        '答题模板：氧化剂+还原剂→氧化产物+还原产物（先框骨架再配数）'
      ],
      example: '酸性条件下 KMnO₄ 氧化草酸（H₂C₂O₄）的离子方程式怎么写？'
    },

    // ============== 模块 02·化学计量 ==============
    {
      id: 'chem_xbx_amount',
      title: '《物质的量与摩尔》',
      tier: '一轮·化学计量',
      chapter: '模块02·核心概念',
      summary: '物质的量 n（mol）是化学计量的核心——一切换算通过 n 中转。',
      keyPoints: [
        '核心公式：n = m/M = N/N_A = V(气)/22.4L·mol⁻¹（标况）= c·V(溶液)',
        'N_A = 6.02×10²³/mol（阿伏加德罗常数）',
        '气体摩尔体积 22.4 L/mol —— 前提：标准状况（0°C, 101kPa）',
        '气体状态 4 判据：温度、压强、气体（水/HF/SO₃ 都不是）、纯物质',
        '溶液浓度 c=n/V —— V 是溶液体积（不是溶质！不是溶剂！）'
      ],
      example: '标况下 5.6L CO₂ 的物质的量、质量、分子数各是多少？'
    },
    {
      id: 'chem_xbx_thermogravimetric',
      title: '《热重分析法计算》',
      tier: '一轮·化学计量',
      chapter: '模块02·微专题5',
      summary: '通过物质加热失重曲线（TG）反推固体成分——工艺流程题的高频压轴。',
      keyPoints: [
        '思路：读图找台阶（每级质量损失）→ 判断失去什么（H₂O/CO₂/O₂ 常见）→ 反推组成',
        '常见失重：结晶水（低温 100-200°C）、CO₂（碳酸盐 300-800°C）、O₂（高价氧化物）',
        '假设法：设初始 1 mol 或初始 100g，代入方程算最终质量',
        '常见对象：CuSO₄·5H₂O、CaCO₃、NaHCO₃、Mg(OH)₂'
      ],
      example: '100g CuSO₄·5H₂O 加热至 200°C 完全脱水，剩余固体质量？'
    },

    // ============== 模块 03·金属及其化合物 ==============
    {
      id: 'chem_xbx_sodium',
      title: '《钠及其化合物》',
      tier: '一轮·金属及化合物',
      chapter: '模块03·第1讲',
      summary: '钠是最活泼常见金属——Na/Na₂O/Na₂O₂/NaOH/Na₂CO₃/NaHCO₃六大员。',
      keyPoints: [
        'Na 与水：2Na+2H₂O=2NaOH+H₂↑（浮熔游响红——五字诀）',
        'Na₂O₂ 与水/CO₂：过氧化钠既氧化又还原（歧化），常考作供氧剂',
        'Na₂CO₃ vs NaHCO₃：热稳定性 Na₂CO₃>NaHCO₃（小苏打受热分解）',
        '"侯氏制碱"（联合制碱法）：向饱和食盐水通 NH₃ 再通 CO₂',
        '焰色反应：Na 黄色，K 紫色（隔蓝色钴玻璃观察，避免 Na 黄光干扰）'
      ],
      example: '为什么 NaHCO₃ 常用于治胃酸而不用 Na₂CO₃？写出化学方程式。'
    },
    {
      id: 'chem_xbx_iron',
      title: '《铁及其重要化合物》',
      tier: '一轮·金属及化合物',
      chapter: '模块03·第2讲',
      summary: '铁是变价金属考点大户——Fe²⁺/Fe³⁺ 的相互转化是核心。',
      keyPoints: [
        'Fe²⁺(浅绿)⇌Fe³⁺(棕黄)——离子共存/转化最高频',
        '氧化 Fe²⁺→Fe³⁺：Cl₂/H₂O₂/HNO₃/浓 H₂SO₄/O₂',
        '还原 Fe³⁺→Fe²⁺：Fe/Cu/H₂S/SO₂/I⁻',
        '检验：Fe³⁺ 用 KSCN（血红）；Fe²⁺ 用 KSCN 无色 + 加氧化剂（H₂O₂/氯水）变红',
        'Fe(OH)₂ 制备：白色→灰绿→红棕（4Fe(OH)₂+O₂+2H₂O=4Fe(OH)₃）',
        '铁三角：Fe ⇌ Fe²⁺ ⇌ Fe³⁺（高中"经典循环图"）'
      ],
      example: '如何鉴别 FeCl₂ 和 FeCl₃ 两瓶无标签溶液？写出至少两种方法。'
    },
    {
      id: 'chem_xbx_aluminum',
      title: '《铝及其重要化合物》',
      tier: '一轮·金属及化合物',
      chapter: '模块03·第3讲',
      summary: '铝是"两性"代表——既溶于强酸又溶于强碱。',
      keyPoints: [
        '两性金属：2Al+6HCl=2AlCl₃+3H₂↑；2Al+2NaOH+2H₂O=2NaAlO₂+3H₂↑',
        'Al(OH)₃ 两性：与酸生成 Al³⁺；与强碱生成 AlO₂⁻',
        '制备 Al(OH)₃：用弱碱（NH₃·H₂O）滴 AlCl₃——不用 NaOH（会溶）',
        '"铝三角"图：Al ⇌ Al³⁺ ⇌ Al(OH)₃ ⇌ AlO₂⁻',
        '钝化：常温下与浓 HNO₃/浓 H₂SO₄ 钝化（表面形成致密氧化膜）',
        '铝热反应：2Al+Fe₂O₃=(点燃)Al₂O₃+2Fe（焊接铁轨）'
      ],
      example: '为什么制 Al(OH)₃ 要用氨水而不用 NaOH？'
    },

    // ============== 模块 04·非金属及其化合物 ==============
    {
      id: 'chem_xbx_chlorine',
      title: '《氯及其重要化合物》',
      tier: '一轮·非金属及化合物',
      chapter: '模块04·第1讲',
      summary: '氯是活泼卤族——Cl₂/HCl/HClO/漂白粉/氯离子 一条线。',
      keyPoints: [
        'Cl₂ 与水：Cl₂+H₂O⇌HCl+HClO（可逆！——氯水成分复杂）',
        '氯水含七种粒子：Cl₂/HClO/H₂O/H⁺/Cl⁻/ClO⁻/OH⁻',
        'HClO 特性：弱酸、见光分解（2HClO=(光)2HCl+O₂↑）、强氧化性、漂白',
        '漂白粉制备：2Cl₂+2Ca(OH)₂=Ca(ClO)₂+CaCl₂+2H₂O；有效成分 Ca(ClO)₂',
        '氯气实验室制法：MnO₂+4HCl(浓)=(△)MnCl₂+Cl₂↑+2H₂O',
        'Cl⁻ 检验：加稀 HNO₃ + AgNO₃ → 白色沉淀不溶于稀硝酸'
      ],
      example: '氯水久置后 pH 如何变化？为什么新制氯水要避光保存？'
    },
    {
      id: 'chem_xbx_sulfur',
      title: '《硫及其化合物》',
      tier: '一轮·非金属及化合物',
      chapter: '模块04·第2讲',
      summary: '硫的价态从 -2 到 +6——H₂S/S/SO₂/SO₃/H₂SO₃/H₂SO₄。',
      keyPoints: [
        'SO₂ 三大性质：酸性氧化物（对应 H₂SO₃）、还原性（→SO₃）、氧化性（→S）、漂白性（与有色物结合，可逆！加热恢复）',
        'SO₂ vs Cl₂ 漂白区别：SO₂ 结合式漂白（可逆），Cl₂/HClO 氧化式漂白（不可逆）',
        '浓 H₂SO₄ 三大特性：吸水性（干燥剂）、脱水性（脱有机物 H/O，使蔗糖变黑）、强氧化性',
        '浓 H₂SO₄ 与 Cu：Cu+2H₂SO₄(浓)=(△)CuSO₄+SO₂↑+2H₂O（加热才反应，冷时钝化）',
        'SO₄²⁻ 检验：加稀 HCl 无变化 + BaCl₂ → 白色沉淀（防止 Ag⁺/CO₃²⁻/SO₃²⁻ 干扰，一定要先酸化）',
        '接触法制硫酸：S/FeS₂→SO₂→(V₂O₅催化)SO₃→(浓 H₂SO₄吸收)发烟硫酸'
      ],
      example: '如何用一种试剂鉴别 SO₂ 和 CO₂？为什么品红能区分？'
    },
    {
      id: 'chem_xbx_nitrogen',
      title: '《氮及其重要化合物》',
      tier: '一轮·非金属及化合物',
      chapter: '模块04·第6讲',
      summary: '氮循环：N₂/NH₃/NO/NO₂/HNO₃——变价复杂考频最高的一族。',
      keyPoints: [
        'N₂ 稳定性：三键难破，惰性；工业固氮（N₂+3H₂⇌2NH₃，高温高压催化）',
        'NH₃：碱性气体（唯一碱性气体！）；喷泉实验；实验室制法（NH₄Cl+Ca(OH)₂=(△)CaCl₂+2NH₃↑+2H₂O）',
        'NO vs NO₂：NO 无色，与 O₂ 反应变红棕（2NO+O₂=2NO₂）；NO₂ 红棕色，与水反应（3NO₂+H₂O=2HNO₃+NO）',
        'HNO₃ 强氧化性：稀 HNO₃ + Cu → NO；浓 HNO₃ + Cu → NO₂',
        '钝化：常温下 Fe/Al 与浓 HNO₃/浓 H₂SO₄ 钝化（可用铁罐/铝罐运输）',
        '铵盐特性：受热分解、遇碱产生 NH₃（检验 NH₄⁺ 用 NaOH + 湿润红色石蕊试纸变蓝）'
      ],
      example: '为什么工业上不用 HNO₃ 与铁反应制取 H₂？稀 HNO₃ 与 Cu 反应的离子方程式？'
    },
    {
      id: 'chem_xbx_silicon',
      title: '《硅及无机非金属材料》',
      tier: '一轮·非金属及化合物',
      chapter: '模块04·第9讲',
      summary: '硅是"半导体之王"——Si/SiO₂/H₂SiO₃/Na₂SiO₃ 的不同寻常之处。',
      keyPoints: [
        'SiO₂ 反常：唯一与氢氟酸反应的酸性氧化物（SiO₂+4HF=SiF₄↑+2H₂O，刻蚀玻璃）',
        'SiO₂ 反常：与强碱反应生成盐（SiO₂+2NaOH=Na₂SiO₃+H₂O，实验室 NaOH 不能装在玻璃塞磨口瓶）',
        'H₂SiO₃：不溶于水，用可溶性硅酸盐加酸制（Na₂SiO₃+2HCl=2NaCl+H₂SiO₃↓）',
        'Si 单质：良好半导体，工业制法（SiO₂+2C=(高温)Si+2CO↑）',
        '无机非金属材料：水泥、玻璃、陶瓷；新型（光导纤维 SiO₂、碳化硅 SiC）',
        '硅酸盐组成表示法：氧化物形式 aM₂O·bMO·cSiO₂（如高岭石 Al₂O₃·2SiO₂·2H₂O）'
      ],
      example: '为什么盛 NaOH 溶液的试剂瓶不能用磨口玻璃塞？写化学方程式。'
    }
  ];

  if (Array.isArray(global.CHEMISTRY_MANUALS)) {
    APPEND.forEach(m => {
      if (!global.CHEMISTRY_MANUALS.find(x => x.id === m.id)) {
        global.CHEMISTRY_MANUALS.push(m);
      }
    });
  } else {
    global.CHEMISTRY_MANUALS = APPEND.slice();
  }

  global.CHEMISTRY_XBX_MANUALS = APPEND;

})(typeof window !== 'undefined' ? window : this);
