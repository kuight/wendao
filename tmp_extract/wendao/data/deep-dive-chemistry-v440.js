/* ================================================================
 * 《问道修仙学院》v4.4.0 · 化学·深度讲义（一轮复习 12 篇）
 *
 * 素材来源：老师给的《一轮复习用元素化学》zip 包（4 大模块）
 * 化学特化四段式：
 *   💡 concept  - 核心概念·为什么
 *   🧪 phenomena - 实验现象（颜色/气味/装置图关键点）
 *   ⚗️ equations - 必背方程式（离子式/化学式/电极式）
 *   ⚠️ pitfalls  - 高频陷阱（离子共存/氧化还原判错/量变质变）
 *
 * flashcards / puzzles / stepExamples 结构复用 v438
 * ================================================================ */
(function (global) {
  'use strict';

  const CHEMISTRY_DEEP_DIVE = {

    /* ==================== 模块 01 · 化学物质及其变化 ==================== */

    'chem_xbx_lizi': {
      subtitle: '离子反应是复分解或氧化还原——离子方程式看清"实质"，避开三大量变陷阱',
      points: [
        {
          title: '一、核心概念·离子反应本质',
          concept: `离子反应发生的<b>本质</b>是：溶液中<b>离子浓度显著减小</b>。
减小的三种途径：① 生成沉淀（BaSO₄↓）② 生成气体（CO₂↑）③ 生成弱电解质（H₂O、CH₃COOH）。
氧化还原型离子反应第四种：④ 发生电子转移（Fe+2Fe³⁺=3Fe²⁺）。`,
          phenomena: `【判断沉淀】看溶解性口诀："钾钠铵硝可溶尽；碳酸只溶钾钠铵；硫酸不溶钡和铅"
【判断气体】常见：CO₂、SO₂、H₂S、NH₃、HCl（浓）、Cl₂
【判断弱电解质】水、弱酸（HF/CH₃COOH/HClO/H₂CO₃/H₂SO₃）、弱碱（NH₃·H₂O）`,
          equations: `【离子方程式书写四步】<br>
① <b>写</b>：正确的化学方程式<br>
② <b>拆</b>：强酸强碱可溶盐拆成离子（"强酸强碱溶盐拆"）<br>
③ <b>删</b>：删去两边未参加反应的离子<br>
④ <b>查</b>：查原子守恒、电荷守恒、（氧化还原时）电子守恒<br>
【关键：不拆的物质】沉淀、气体、弱电解质、单质、氧化物 — <b>都写化学式</b>`,
          pitfalls: [
            '❌ 把 Ca(OH)₂ 拆成 Ca²⁺+2OH⁻（澄清石灰水拆，石灰乳不拆——量少可溶）',
            '❌ 弱酸弱碱写成离子形式（醋酸 CH₃COOH 不拆，氨水 NH₃·H₂O 不拆）',
            '❌ 双水解方程漏气体沉淀符号（Al³⁺+3HCO₃⁻=Al(OH)₃↓+3CO₂↑ 两个箭头都要）',
            '❌ 硫酸盐+氯化钡忽略稀盐酸预处理（防 Ag⁺/CO₃²⁻ 干扰）'
          ]
        },
        {
          title: '二、"与量有关"三大陷阱（微专题2）',
          concept: `"过量/少量/等量"改变离子方程式的<b>系数比例</b>，甚至改变产物。
核心：先判"谁少谁定量"，用<b>少量物质配 1 mol</b> 反推另一物质用量。`,
          phenomena: `【三大高频量变】
① Ca(OH)₂ + 少量/过量 CO₂
② NaAlO₂ + 少量/过量 HCl
③ AlCl₃ + 少量/过量 NaOH`,
          equations: `【CO₂通入 NaOH】少量 CO₂ → Na₂CO₃：CO₂+2OH⁻=CO₃²⁻+H₂O<br>
     过量 CO₂ → NaHCO₃：CO₂+OH⁻=HCO₃⁻<br>
【HCl 滴入 NaAlO₂】少量 HCl：AlO₂⁻+H⁺+H₂O=Al(OH)₃↓<br>
     过量 HCl：AlO₂⁻+4H⁺=Al³⁺+2H₂O<br>
【NaOH 滴入 AlCl₃】少量：Al³⁺+3OH⁻=Al(OH)₃↓<br>
     过量：Al³⁺+4OH⁻=AlO₂⁻+2H₂O`,
          pitfalls: [
            '❌ 少量/过量顺序颠倒——记住"看谁滴入谁"（滴入的是"少量"的那个）',
            '❌ 酸式盐忽视 —— NaHSO₄=Na⁺+H⁺+SO₄²⁻（完全电离），NaHCO₃=Na⁺+HCO₃⁻（HCO₃⁻ 不拆）',
            '❌ 双水解（Al³⁺+HCO₃⁻、Al³⁺+CO₃²⁻、Fe³⁺+HCO₃⁻）忘记完全水解产生沉淀+气体'
          ]
        }
      ],
      flashcards: [
        { front: '离子反应发生的本质？', back: '溶液中离子浓度显著减小（沉淀/气体/弱电解质/电子转移）' },
        { front: '离子方程式书写四步？', back: '写→拆→删→查' },
        { front: '哪些物质"不拆"？', back: '沉淀、气体、弱电解质、单质、氧化物' },
        { front: 'NaHSO₄ 在水溶液中如何电离？', back: 'NaHSO₄=Na⁺+H⁺+SO₄²⁻（完全电离，特殊！）' },
        { front: 'NaHCO₃ 电离和水解的差别？', back: '电离 HCO₃⁻⇌H⁺+CO₃²⁻；水解 HCO₃⁻+H₂O⇌H₂CO₃+OH⁻' },
        { front: '少量 CO₂ 通入 NaOH 生成？', back: 'Na₂CO₃（CO₂+2OH⁻=CO₃²⁻+H₂O）' },
        { front: '过量 CO₂ 通入 NaOH 生成？', back: 'NaHCO₃（CO₂+OH⁻=HCO₃⁻）' },
        { front: 'Al³⁺+HCO₃⁻ 双水解方程？', back: 'Al³⁺+3HCO₃⁻=Al(OH)₃↓+3CO₂↑（两个符号都要！）' },
        { front: 'Ba²⁺+SO₄²⁻ 检验前为何加稀盐酸？', back: '防止 Ag⁺、CO₃²⁻、SO₃²⁻ 干扰（酸化后只有 SO₄²⁻ 才成白沉淀）' },
        { front: '离子共存三判据？', back: '不生成沉淀/气体/弱电解质；不发生氧化还原' },
        { front: 'Fe³⁺ 和哪些离子不共存？', back: 'S²⁻/I⁻/SCN⁻（生成沉淀或反应）；CO₃²⁻/HCO₃⁻/AlO₂⁻（双水解）' },
        { front: '有色离子有哪些？', back: 'Cu²⁺蓝、Fe²⁺浅绿、Fe³⁺棕黄、MnO₄⁻紫红、Cr₂O₇²⁻橙' },
        { front: '强酸强碱盐拆分口诀？', back: '"钾钠铵硝可溶尽"——K⁺/Na⁺/NH₄⁺/NO₃⁻ 的盐一律可溶都拆' },
        { front: '石灰水 vs 石灰乳 拆法？', back: '澄清石灰水 Ca(OH)₂ 拆；石灰乳（悬浊液）不拆' },
        { front: '离子方程式除守恒外还需检查？', back: '电荷守恒（左右总电荷相等）' }
      ],
      puzzles: [
        { formula: 'C O _ 2 + 2 O H ⁻ = C O _ 3 ² ⁻ + H _ 2 O', tip: '少量 CO₂ 通入 NaOH' },
        { formula: 'A l ³ ⁺ + 3 H C O _ 3 ⁻ = A l ( O H ) _ 3 ↓ + 3 C O _ 2 ↑', tip: '双水解·两个符号都要' },
        { formula: 'A l O _ 2 ⁻ + 4 H ⁺ = A l ³ ⁺ + 2 H _ 2 O', tip: '过量 HCl 滴入 NaAlO₂' }
      ],
      stepExamples: [{
        stem: '向 NaAlO₂ 溶液中通入过量 CO₂，写出离子方程式。',
        steps: [
          {
            ask: '第一步：这是复分解反应还是氧化还原？',
            type: 'choice',
            options: ['复分解（无价态变化）', '氧化还原（有价态变化）', '既是也不是', '看不出来'],
            answerIndex: 0,
            explain: 'CO₂ 是酸性氧化物，NaAlO₂ 是强碱弱酸盐。这是<b>复分解型</b>反应，无化合价变化。'
          },
          {
            ask: '第二步：过量 CO₂ 意味着产物是什么盐？',
            type: 'choice',
            options: ['Na₂CO₃', 'NaHCO₃', 'Al₂(CO₃)₃', '不能形成盐'],
            answerIndex: 1,
            hint: '过量 CO₂ 生成酸式盐',
            explain: '过量 CO₂ 时永远生成<b>酸式盐 NaHCO₃</b>，同时 AlO₂⁻ 被酸化为 Al(OH)₃ 沉淀。'
          },
          {
            ask: '第三步：Al(OH)₃ 在过量 CO₂ 里会溶解吗？',
            type: 'choice',
            options: ['会溶解生成 Al³⁺', '不会溶解，仍是 Al(OH)₃↓', '生成 AlO₂⁻', '与 CO₂ 反应'],
            answerIndex: 1,
            hint: 'H₂CO₃ 酸性太弱',
            explain: '<b>关键陷阱</b>：H₂CO₃ 太弱，不能溶解 Al(OH)₃！所以最终产物是 <b>Al(OH)₃ 沉淀 + NaHCO₃</b>。'
          },
          {
            ask: '第四步：写出完整离子方程式',
            type: 'fill',
            answer: ['AlO2-+CO2+2H2O=Al(OH)3↓+HCO3-', 'AlO₂⁻+CO₂+2H₂O=Al(OH)₃↓+HCO₃⁻'],
            hint: '按 1:1:2 → 1:1 配平',
            explain: '正确答案：<b>AlO₂⁻ + CO₂ + 2H₂O = Al(OH)₃↓ + HCO₃⁻</b>。这是高考经典陷阱题："过量 CO₂ 通入 NaAlO₂"永远得酸式盐+氢氧化铝沉淀。'
          }
        ]
      }]
    },

    'chem_xbx_redox': {
      subtitle: '化合价升降是外相，电子得失是内核——四大守恒+双线桥是氧化还原的全部答题工具',
      points: [
        {
          title: '一、核心概念·四大守恒',
          concept: `氧化还原反应有<b>四大守恒</b>同时成立：
① <b>质量守恒</b>：反应前后原子种类和数目不变（配平的底线）
② <b>电荷守恒</b>：离子方程式两边总电荷相等（离子式必查）
③ <b>电子得失守恒</b>：氧化剂得电子数 = 还原剂失电子数（氧化还原核心！）
④ <b>原子个数守恒</b>：每种元素原子数相等`,
          phenomena: `【氧化剂 vs 还原剂】
· 氧化剂：<b>得</b>电子，价<b>降</b>，本身被<b>还原</b>，得到<b>还原产物</b>
· 还原剂：<b>失</b>电子，价<b>升</b>，本身被<b>氧化</b>，得到<b>氧化产物</b>
【口诀】"升失氧化还原剂，降得还原氧化剂"（升失氧、降得还）`,
          equations: `【常见氧化剂】KMnO₄、K₂Cr₂O₇、HNO₃、浓 H₂SO₄、Cl₂、O₂、HClO、H₂O₂、Fe³⁺、MnO₂<br>
【常见还原剂】活泼金属、Fe²⁺、S²⁻、I⁻、SO₃²⁻、H₂、C、CO、H₂O₂（在强氧化剂中）<br>
【氧化性强弱】F₂>Cl₂>Br₂>I₂；MnO₄⁻>Cr₂O₇²⁻>Cl₂>Fe³⁺>I₂>S`,
          pitfalls: [
            '❌ 判反应类型看有无价变化——<b>没有</b>化合价变化就不是氧化还原（记住！）',
            '❌ H₂O₂ 既是氧化剂又是还原剂——遇强氧化剂（KMnO₄）它做还原剂',
            '❌ 浓 H₂SO₄ 与 Cu 加热反应，Cu 是<b>还原剂</b>（价升 0→+2），浓 H₂SO₄ 是氧化剂（S 价降 +6→+4）',
            '❌ 歧化反应中一个物质既是氧化剂又是还原剂（Cl₂+2NaOH=NaCl+NaClO+H₂O 中 Cl 从 0→−1 和 0→+1）'
          ]
        },
        {
          title: '二、氧化还原配平（双线桥+电子守恒）',
          concept: `<b>双线桥法</b>：
① 标出反应前后<b>化合价</b>变化元素
② 画两条弧线：<b>反应物→生成物</b>，从氧化剂到还原产物、从还原剂到氧化产物
③ 每条线上标"得 n×e⁻"或"失 n×e⁻"
④ 使两条线的电子转移<b>总数相等</b>`,
          phenomena: `【配平三步流程】
① 用<b>电子得失守恒</b>定最小整数比系数（升降元素）
② 用<b>观察法</b>补齐其他系数
③ 检查<b>原子守恒 + 电荷守恒</b>（离子方程式的话）`,
          equations: `【例题】KMnO₄ + HCl → MnCl₂ + Cl₂ + KCl + H₂O<br>
Mn: +7→+2 （降 5）；Cl: −1→0 （升 1）<br>
电子守恒：Mn×2、Cl×10 → 2 KMnO₄ + 16 HCl → 2 MnCl₂ + 5 Cl₂↑ + 2 KCl + 8 H₂O<br>
（其中 10 个 HCl 参与氧化还原，6 个不变价——酸性 HCl）`,
          pitfalls: [
            '❌ 用双线桥时线不能画错方向——一定是"反应物→生成物"（不是同价元素连线）',
            '❌ 电子转移标"×n"（n 是原子数），如 2×5e⁻，忘记乘数容易漏',
            '❌ HCl 里既有做还原剂的（→Cl₂）也有做酸的（→Cl⁻），配平时分开算'
          ]
        }
      ],
      flashcards: [
        { front: '氧化还原反应的判断依据？', back: '有化合价升降（有电子转移）' },
        { front: '"升失氧化还原剂"完整意思？', back: '化合价升、失电子、被氧化、是还原剂' },
        { front: '氧化剂 vs 氧化性 vs 氧化产物？', back: '氧化剂本身；氧化剂的能力；被氧化后得到的产物' },
        { front: '氧化剂强弱：MnO₄⁻ 和 Cl₂ 谁强？', back: 'MnO₄⁻ > Cl₂（KMnO₄ 能氧化 HCl 出 Cl₂）' },
        { front: 'H₂O₂ 什么情况做氧化剂？', back: '遇还原性物质（如 SO₂/I⁻/Fe²⁺）；遇强氧化剂（KMnO₄）它做还原剂' },
        { front: '双线桥"×n"的 n 表示什么？', back: '价变原子的<b>个数</b>（不是电子数）' },
        { front: 'MnO₂+HCl(浓) 配平后系数？', back: '1:4=1:1:2（生成 1MnCl₂+1Cl₂↑+2H₂O，HCl 中 4 个只 2 个参与氧化还原）' },
        { front: '常见 5 种氧化剂？', back: 'KMnO₄、K₂Cr₂O₇、HNO₃、浓 H₂SO₄、Cl₂/HClO' },
        { front: '常见 5 种还原剂？', back: '活泼金属、Fe²⁺、S²⁻/I⁻、SO₃²⁻/SO₂、H₂/C/CO' },
        { front: '歧化反应特征？', back: '同一物质同种元素部分升价部分降价（Cl₂+NaOH）' },
        { front: '归中反应特征？', back: '两个物质中不同价态的同种元素趋向中间价（H₂S+SO₂=S+H₂O）' },
        { front: '离子方程式配平三步？', back: '电子守恒→电荷守恒→原子守恒（H₂O 兜底）' },
        { front: 'Fe³⁺ 遇 I⁻ 反应吗？', back: '会！2Fe³⁺+2I⁻=2Fe²⁺+I₂（Fe³⁺ 氧化性 > I₂）' },
        { front: '氧化性强弱如何比较？', back: '看反应能不能自发发生——能氧化对方的更强' },
        { front: '为什么 F₂ 无法从溶液中制？', back: 'F₂ 氧化性太强，会先氧化水（2F₂+2H₂O=4HF+O₂）' }
      ],
      puzzles: [
        { formula: 'M n O _ 2 + 4 H C l ( 浓 ) = M n C l _ 2 + C l _ 2 ↑ + 2 H _ 2 O', tip: '实验室制氯气' },
        { formula: '2 K M n O _ 4 + 1 6 H C l = 2 M n C l _ 2 + 5 C l _ 2 ↑ + 2 K C l + 8 H _ 2 O', tip: '高锰酸钾+浓盐酸' },
        { formula: '2 F e ³ ⁺ + 2 I ⁻ = 2 F e ² ⁺ + I _ 2', tip: '铁三价氧化碘离子' }
      ],
      stepExamples: [{
        stem: '酸性条件下 KMnO₄ 与草酸（H₂C₂O₄）反应，产物为 Mn²⁺、CO₂、H₂O。用双线桥+电子守恒配平离子方程式。',
        steps: [
          {
            ask: '第一步：判断价变元素',
            type: 'choice',
            options: [
              'Mn: +7→+2；C: +3→+4',
              'Mn: +4→+2；C: +2→+4',
              'Mn: +7→+2；C: +2→+4',
              'Mn: +6→+2；C: +3→+4'
            ],
            answerIndex: 0,
            hint: 'H₂C₂O₄ 中 C 为 +3',
            explain: '草酸 H₂C₂O₄ 中，H 为+1，O 为−2，则 C 为 +3。反应后变 CO₂，C 为+4。<b>Mn: +7→+2（降 5）；C: +3→+4（升 1）</b>。'
          },
          {
            ask: '第二步：算电子转移最小公倍数',
            type: 'choice',
            options: ['Mn×1, C×5', 'Mn×2, C×10', 'Mn×2, C×5', 'Mn×5, C×2'],
            answerIndex: 1,
            hint: 'Mn 每个降 5，C 每个升 1；但 H₂C₂O₄ 里 2 个 C',
            explain: '每 1 个 Mn 降 5，每 1 个 H₂C₂O₄（含 2 个 C）升 2。最小公倍数 10 → <b>Mn×2, H₂C₂O₄×5（即 C×10）</b>。'
          },
          {
            ask: '第三步：写出未配平骨架 2MnO₄⁻+5H₂C₂O₄+?H⁺→2Mn²⁺+?CO₂+?H₂O，H⁺ 系数？',
            type: 'choice',
            options: ['4', '6', '10', '16'],
            answerIndex: 1,
            hint: '用电荷守恒：左边 2×(−1)+? = 右边 2×(+2)+0+0；再看 H 原子',
            explain: '电荷守恒：左 −2+x=+4 → <b>x=6</b> 个 H⁺。配套查 H：左 5×2+6=16 个 H → 右 8 个 H₂O。'
          },
          {
            ask: '第四步：完整方程式',
            type: 'fill',
            answer: [
              '2MnO4-+5H2C2O4+6H+=2Mn2++10CO2↑+8H2O',
              '2MnO₄⁻+5H₂C₂O₄+6H⁺=2Mn²⁺+10CO₂↑+8H₂O'
            ],
            explain: '完整方程：<b>2MnO₄⁻ + 5H₂C₂O₄ + 6H⁺ = 2Mn²⁺ + 10CO₂↑ + 8H₂O</b>。四步配平流程：定价变→算最小公倍数→补酸/水→查电荷 + 原子。'
          }
        ]
      }]
    },

    'chem_xbx_stranger': {
      subtitle: '陌生反应方程式书写——工艺流程题的心脏，三步法拆穿新反应',
      points: [
        {
          title: '一、核心概念·陌生反应三步法',
          concept: `高考工艺流程题总会给"从未见过"的反应——不用怕，任何陌生反应都能靠<b>三步法</b>还原：
① <b>读情境</b>：找反应物、产物、反应条件（酸性/碱性/加热/催化）
② <b>判类型</b>：有化合价变化 → 氧化还原；无价变 → 复分解
③ <b>用守恒配平</b>：电子守恒（氧化还原）→ 电荷守恒（离子式）→ 原子守恒（H₂O/H⁺/OH⁻ 兜底）`,
          phenomena: `【常见"情境词"暗示】
· "酸性条件"→ 用 H⁺ 兜底（不用 OH⁻）
· "碱性条件"→ 用 OH⁻ 兜底
· "加热"→ 常有气体产物（↑符号别忘）
· "催化剂"→ 一般不消耗，方程式不写在反应物里`,
          equations: `【骨架法四步】<br>
① 写<b>反应物 → 生成物</b> 骨架<br>
② 找价变元素，写<b>电子转移</b> 关系<br>
③ 用<b>电子守恒</b>定关键系数<br>
④ 用 <b>H⁺/OH⁻/H₂O</b> 补齐 H、O 原子<br>
【实战】酸性 KMnO₄ 氧化 SO₂ → Mn²⁺+SO₄²⁻：<br>
2MnO₄⁻+5SO₂+2H₂O=2Mn²⁺+5SO₄²⁻+4H⁺`,
          pitfalls: [
            '❌ 陌生反应先"猜"再"证"——猜产物时要遵守元素守恒（反应物有的元素必须去某处）',
            '❌ 酸性条件下强行用 OH⁻，会立即被 H⁺ 中和（要用 H⁺）',
            '❌ 忽略配平后系数的最简整数比（约分！）',
            '❌ 气体沉淀符号漏标——特别是"↑↓"'
          ]
        }
      ],
      flashcards: [
        { front: '陌生反应方程式书写三步？', back: '读情境 → 判类型（是不是氧化还原）→ 用守恒配平' },
        { front: '酸性条件补氧用什么？', back: 'H⁺ 和 H₂O（不用 OH⁻）' },
        { front: '碱性条件补氧用什么？', back: 'OH⁻ 和 H₂O（不用 H⁺）' },
        { front: '氧化还原离子方程式配平顺序？', back: '电子守恒 → 电荷守恒 → 原子守恒（H₂O 补 O/H）' },
        { front: '酸性 KMnO₄ 与 SO₂ 反应产物？', back: 'Mn²⁺ + SO₄²⁻（Mn +7→+2；S +4→+6）' },
        { front: '为什么工艺流程题多用离子方程式？', back: '反应物多在溶液中，用离子式更能表达反应实质' },
        { front: '"催化剂"在方程式中出现吗？', back: '一般不出现在反应物/生成物侧，写在等号上方作条件' },
        { front: '如何判断陌生反应中的还原产物？', back: '看酸性/碱性条件下该氧化剂常见的低价态（如 MnO₄⁻ 酸性→Mn²⁺，中性→MnO₂，碱性→MnO₄²⁻）' },
        { front: '"配平后要检查什么"三查？', back: '① 电子守恒 ② 电荷守恒 ③ 原子守恒（尤其 H、O）' },
        { front: 'H₂O₂ 分解方程？', back: '2H₂O₂=(MnO₂)2H₂O+O₂↑（歧化反应）' },
        { front: 'ClO₂ 消毒剂制取（反应物 NaClO₂+Cl₂）？', back: '2NaClO₂+Cl₂=2NaCl+2ClO₂（Cl₂ 是氧化剂又是还原剂？其实 NaClO₂ 中 Cl +3 → ClO₂ 中 Cl +4；Cl₂ 中 Cl 0 → NaCl 中 Cl −1）' }
      ],
      puzzles: [
        { formula: '2 M n O _ 4 ⁻ + 5 S O _ 2 + 2 H _ 2 O = 2 M n ² ⁺ + 5 S O _ 4 ² ⁻ + 4 H ⁺', tip: '酸性 KMnO₄ 氧化 SO₂' },
        { formula: '2 H _ 2 O _ 2 = ( M n O _ 2 ) 2 H _ 2 O + O _ 2 ↑', tip: 'H₂O₂ 歧化分解' }
      ],
      stepExamples: [{
        stem: '在酸性条件下，K₂Cr₂O₇ 氧化乙醇（CH₃CH₂OH）生成 Cr³⁺ 和 CO₂。请书写离子方程式（骨架法）。',
        steps: [
          {
            ask: '第一步：判断价变元素',
            type: 'choice',
            options: [
              'Cr: +6→+3；C: −2→+4',
              'Cr: +6→+3；C: 0→+4',
              'Cr: +7→+3；C: −2→+4',
              'Cr: +6→+2；C: 0→+4'
            ],
            answerIndex: 0,
            hint: 'CH₃CH₂OH 中平均 C 价为 −2',
            explain: 'Cr₂O₇²⁻ 中 Cr 为 +6，生成 Cr³⁺ 降 3。乙醇中 C 平均价 −2（H:+1,O:−2,C:x → 2x+6-2=0 → x=−2），CO₂ 中 C 为 +4，升 6。'
          },
          {
            ask: '第二步：每个 Cr 降 3 电子，每个乙醇 C×2 升 6×2=12 电子？',
            type: 'choice',
            options: [
              '对，每个乙醇失 12e⁻，每个 Cr 得 3e⁻，最小公倍数 12',
              '每个乙醇失 6e⁻',
              '每个 Cr 得 6e⁻',
              '算不出'
            ],
            answerIndex: 0,
            hint: 'CH₃CH₂OH 分子含 2 个 C，都从 −2 升到 +4',
            explain: '每 1 个乙醇分子含 2 个 C，共升 <b>2×6=12</b> 个 e⁻。每 1 个 Cr₂O₇²⁻ 含 2 个 Cr，共降 <b>2×3=6</b> 个 e⁻。最小公倍数 12 → Cr₂O₇²⁻ ×2、乙醇 ×1。'
          },
          {
            ask: '第三步：骨架 2Cr₂O₇²⁻+CH₃CH₂OH+?H⁺→4Cr³⁺+2CO₂+?H₂O，H⁺ 数目？',
            type: 'choice',
            options: ['8', '11', '13', '16'],
            answerIndex: 3,
            hint: '电荷守恒：左 2×(-2)+x = 右 4×(+3)+0+0 → x=?',
            explain: '电荷守恒：−4+x=+12 → <b>x=16</b> 个 H⁺。H 平衡：左 6+16=22 个 H，右 22 个 H → 11 个 H₂O。'
          },
          {
            ask: '第四步：完整方程式',
            type: 'fill',
            answer: [
              '2Cr2O7^2-+CH3CH2OH+16H+=4Cr3++2CO2↑+11H2O',
              '2Cr₂O₇²⁻+CH₃CH₂OH+16H⁺=4Cr³⁺+2CO₂↑+11H₂O'
            ],
            explain: '完整：<b>2Cr₂O₇²⁻ + CH₃CH₂OH + 16H⁺ = 4Cr³⁺ + 2CO₂↑ + 11H₂O</b>。这是酒驾检测原理！Cr₂O₇²⁻ 橙色 → Cr³⁺ 绿色。'
          }
        ]
      }]
    },

    /* ==================== 模块 02 · 化学计量 ==================== */

    'chem_xbx_amount': {
      subtitle: '物质的量是化学计量的"人民币"——一切量都通过 n（mol）换算',
      points: [
        {
          title: '一、核心概念·物质的量与四大公式',
          concept: `<b>物质的量 n（mol）</b>是国际单位制 7 个基本量之一，"1 mol 粒子"= 6.02×10²³ 个粒子。
它是"宏观量"（质量/体积/浓度）和"微观量"（粒子数）之间的<b>桥梁</b>。`,
          phenomena: `【四大换算公式】
n = <b>m/M</b>（质量÷摩尔质量）
n = <b>N/N_A</b>（粒子数÷阿伏加德罗常数）
n = <b>V(气)/22.4 L·mol⁻¹</b>（标准状况下气体）
n = <b>c·V(溶液)</b>（浓度×体积）
【关键】N_A = 6.02×10²³/mol；标况 = 0°C（273.15K）+ 101.325 kPa`,
          equations: `【气体摩尔体积 22.4 L/mol 的四大陷阱】<br>
① <b>必须标况</b>——非标况不能用 22.4<br>
② <b>必须气体</b>——H₂O（液）、HF（液）、SO₃（固）、CCl₄（液）都不算<br>
③ <b>可以是混合气</b>——只要总量按气体算<br>
④ <b>密度公式</b>：气体密度 ρ = M/22.4（标况，单位 g/L）`,
          pitfalls: [
            '❌ 忘记加"标况"限制条件（非标况气体体积不能用 22.4 L/mol）',
            '❌ 把液体/固体的体积代入 22.4（水、酒精等液体不适用）',
            '❌ 浓度 c=n/V 里 V 是<b>溶液体积</b>（不是溶质、不是溶剂！）',
            '❌ N_A 陷阱：1 mol H₂SO₄ 溶于水后含 H⁺ 是 2 mol 而非 1 mol（完全电离出 2H⁺）'
          ]
        }
      ],
      flashcards: [
        { front: 'N_A 的值和单位？', back: '6.02×10²³/mol（阿伏加德罗常数）' },
        { front: '气体摩尔体积用 22.4 L/mol 的四大前提？', back: '标况、气体、纯气或混合气（不管纯度）' },
        { front: '标况定义？', back: '0°C（273.15K）+ 101.325 kPa' },
        { front: '哪些物质在标况下不是气体？', back: 'H₂O（液）、HF（液）、SO₃（固）、CH₃OH（液）、Br₂（液）' },
        { front: '浓度公式 c=n/V 里 V 是？', back: '溶液体积（不是溶剂！不是溶质！）' },
        { front: '1 mol H₂ 含几个原子？', back: '2 mol H 原子 = 2N_A 个 H 原子' },
        { front: '1 mol Na₂SO₄ 溶于水含几个离子？', back: '3 mol 离子（2 mol Na⁺ + 1 mol SO₄²⁻）' },
        { front: '1 mol CH₄ 含几个 C-H 键？', back: '4 mol C-H 键 = 4N_A 个 C-H 键' },
        { front: '气体密度 ρ 与 M 的关系（标况）？', back: 'ρ = M/22.4（g/L）' },
        { front: '相同条件下体积比 = 什么比？', back: '物质的量比（阿伏加德罗定律推论）' },
        { front: '摩尔质量 M 的数值？', back: '等于该物质相对分子/原子质量（单位 g/mol）' },
        { front: '为什么 22.4 只适用于标况？', back: '温度、压强变化时气体体积变化（PV=nRT）' }
      ],
      puzzles: [
        { formula: 'n = m / M', tip: '质量÷摩尔质量' },
        { formula: 'n = N / N _ A', tip: '粒子数÷阿伏加德罗常数' },
        { formula: 'n = V ( 气 ) / 2 2 . 4', tip: '标况气体体积÷摩尔体积' },
        { formula: 'n = c · V ( 液 )', tip: '浓度×溶液体积' }
      ],
      stepExamples: [{
        stem: '标准状况下，5.6 L CO₂ 的物质的量、质量、CO₂ 分子数、C 原子数各是多少？',
        steps: [
          {
            ask: '第一步：求 CO₂ 的物质的量 n？',
            type: 'fill',
            answer: ['0.25', '0.25mol', '0.25 mol'],
            hint: 'n = V/22.4',
            explain: 'n = 5.6/22.4 = <b>0.25 mol</b>'
          },
          {
            ask: '第二步：CO₂ 的摩尔质量是多少？质量是多少？',
            type: 'choice',
            options: [
              'M=44 g/mol；m=11 g',
              'M=44 g/mol；m=22 g',
              'M=32 g/mol；m=8 g',
              'M=28 g/mol；m=7 g'
            ],
            answerIndex: 0,
            explain: 'M(CO₂) = 12+16×2 = <b>44 g/mol</b>；m = n·M = 0.25×44 = <b>11 g</b>'
          },
          {
            ask: '第三步：CO₂ 分子数？',
            type: 'fill',
            answer: ['1.505×10^23', '0.25N_A', '0.25×6.02×10²³', '1.505e23'],
            hint: 'N = n·N_A',
            explain: 'N = 0.25 × 6.02×10²³ = <b>1.505×10²³ 个</b>（= 0.25 N_A）'
          },
          {
            ask: '第四步：C 原子数？',
            type: 'fill',
            answer: ['1.505×10^23', '0.25N_A', '1.505e23'],
            hint: '每个 CO₂ 含 1 个 C',
            explain: '每个 CO₂ 含 1 个 C，所以 C 原子数 = CO₂ 分子数 = <b>0.25 N_A = 1.505×10²³</b>。注意：如果问 O 原子数则是 <b>0.5 N_A</b>。'
          }
        ]
      }]
    },

    'chem_xbx_thermogravimetric': {
      subtitle: '热重曲线是工艺流程题的心电图——每级台阶都是物质"脱衣服"的信号',
      points: [
        {
          title: '一、核心概念·热重分析原理',
          concept: `<b>热重分析（TG）</b>：物质加热过程中，因失去 H₂O/CO₂/O₂ 等气体而<b>质量减小</b>，形成阶梯状曲线。
每级"台阶"对应一个分解反应。<b>反推组成</b>是高考工艺流程题的高频压轴题。`,
          phenomena: `【常见失重段】
· <b>低温 100-200°C</b>：脱结晶水（CuSO₄·5H₂O → CuSO₄）
· <b>中温 300-500°C</b>：碳酸氢盐/氢氧化物分解（NaHCO₃、Mg(OH)₂）
· <b>高温 600-900°C</b>：碳酸盐分解（CaCO₃ → CaO+CO₂↑）
· <b>更高温 900°C 以上</b>：高价氧化物释放 O₂（如 Fe₂O₃→FeO+O₂↑）`,
          equations: `【解题模板】<br>
1. <b>假设</b>：设初始物质 1 mol（或质量 100 g）<br>
2. <b>写方程</b>：写清每级分解反应<br>
3. <b>算比例</b>：用摩尔质量算每级剩余质量<br>
4. <b>对台阶</b>：把剩余质量比 vs 曲线台阶比对应上<br>
【典型反应】<br>
· CuSO₄·5H₂O = CuSO₄ + 5H₂O↑（M: 250 → 160）<br>
· 2NaHCO₃ = Na₂CO₃ + H₂O↑ + CO₂↑（168 → 106）<br>
· CaCO₃ = CaO + CO₂↑（100 → 56）`,
          pitfalls: [
            '❌ 假设错基准量——统一按 1 mol 或 100 g 算，中途不能换',
            '❌ 忽略结晶水的量——CuSO₄·5H₂O 中 5 分子 H₂O 是关键',
            '❌ 忘了考虑分子式里"隐藏"的元素（如 NaHCO₃ 分解同时出 CO₂ 和 H₂O）',
            '❌ 高温段可能不止一个反应叠加（比如 FeSO₄·7H₂O 先脱水再分解为 Fe₂O₃+SO₂+SO₃）'
          ]
        }
      ],
      flashcards: [
        { front: '热重分析的横纵坐标？', back: '横 = 温度；纵 = 剩余质量（或质量百分数）' },
        { front: '低温段（100-200°C）常见失重物？', back: '结晶水（CuSO₄·5H₂O 类）' },
        { front: '中温段（300-500°C）常见失重物？', back: 'NaHCO₃/Mg(OH)₂/Ca(OH)₂ 分解出 H₂O + CO₂' },
        { front: '高温段（600-900°C）常见失重物？', back: '碳酸盐（CaCO₃/MgCO₃）分解出 CO₂' },
        { front: '2NaHCO₃ 分解方程？', back: '2NaHCO₃=(△)Na₂CO₃+H₂O↑+CO₂↑（168g→106g）' },
        { front: 'CaCO₃ 分解方程？', back: 'CaCO₃=(高温)CaO+CO₂↑（100g→56g）' },
        { front: 'CuSO₄·5H₂O 完全脱水后剩余质量分数？', back: 'M=250 → 160，剩余 64%（100g→64g）' },
        { front: 'Cu(OH)₂ 分解方程？', back: 'Cu(OH)₂=(△)CuO+H₂O↑（98g→80g）' },
        { front: '热重题解题第一步？', back: '假设 1 mol 或 100 g 初始量' },
        { front: '如何判断某段失重是失水还是失 CO₂？', back: '看质量损失比例——H₂O=18, CO₂=44, O₂=32 差异明显' },
        { front: '若最终剩余为固体氧化物，如何反推初始盐？', back: '用元素守恒：氧化物中金属元素 = 初始盐中金属元素' }
      ],
      puzzles: [
        { formula: '2 N a H C O _ 3 = N a _ 2 C O _ 3 + H _ 2 O ↑ + C O _ 2 ↑', tip: '小苏打受热分解' },
        { formula: 'C a C O _ 3 = C a O + C O _ 2 ↑', tip: '高温分解石灰石' },
        { formula: 'C u ( O H ) _ 2 = C u O + H _ 2 O ↑', tip: '氢氧化铜受热分解' }
      ],
      stepExamples: [{
        stem: '100 g CuSO₄·5H₂O 加热至 200°C 完全脱去结晶水，继续加热至 1000°C 分解为 CuO 和 SO₃。求两阶段剩余固体质量。',
        steps: [
          {
            ask: '第一步：CuSO₄·5H₂O 的摩尔质量 M？',
            type: 'choice',
            options: ['160', '186', '250', '278'],
            answerIndex: 2,
            hint: 'Cu 64 + S 32 + O 64 + 5H₂O 90 = 250',
            explain: 'M(CuSO₄·5H₂O) = 64+32+64+90 = <b>250 g/mol</b>'
          },
          {
            ask: '第二步：100 g CuSO₄·5H₂O 相当于多少 mol？',
            type: 'fill',
            answer: ['0.4', '0.4mol', '0.4 mol'],
            explain: 'n = 100/250 = <b>0.4 mol</b>'
          },
          {
            ask: '第三步：脱水后（200°C）剩余 CuSO₄ 的质量？',
            type: 'fill',
            answer: ['64', '64g', '64 g'],
            hint: '0.4 mol × 160 g/mol',
            explain: '完全脱去 5 分子水后，剩余 CuSO₄。m = 0.4 × 160 = <b>64 g</b>。质量损失 100-64=36 g（是 5 分子水 = 5×0.4×18=36 g，验证正确）。'
          },
          {
            ask: '第四步：继续加热到 1000°C 分解为 CuO 和 SO₃，剩余固体（CuO）质量？',
            type: 'fill',
            answer: ['32', '32g', '32 g'],
            hint: '0.4 mol × 80 g/mol',
            explain: 'CuSO₄ = CuO + SO₃↑。CuO 的 M = 64+16 = 80 g/mol。m = 0.4×80 = <b>32 g</b>。所以完整曲线：<b>100g → 64g → 32g</b>。这就是热重题的经典解法。'
          }
        ]
      }]
    },

    /* ==================== 模块 03 · 金属及其化合物 ==================== */

    'chem_xbx_sodium': {
      subtitle: '钠是最活泼的常见金属——"浮熔游响红"五字诀记住 Na 与水反应现象',
      points: [
        {
          title: '一、核心概念·钠及其化合物',
          concept: `钠是<b>银白色柔软金属</b>，密度小（0.97 g/cm³，比水轻）、熔点低（97.8°C）、化学性质极活泼。
储存在<b>煤油</b>中（Na 与 O₂/H₂O 都剧烈反应）。`,
          phenomena: `【Na 与水反应"浮熔游响红"五字诀】
· <b>浮</b>——Na 密度小于水
· <b>熔</b>——反应放热熔化成小球
· <b>游</b>——反应生成 H₂ 推动小球游动
· <b>响</b>——H₂ 燃烧或反应剧烈发出声响
· <b>红</b>——生成 NaOH 使酚酞变红
【Na₂O vs Na₂O₂】
· Na₂O 白色（碱性氧化物），普通与水/CO₂ 反应
· Na₂O₂ <b>淡黄色</b>（过氧化物），既氧化又还原，可作供氧剂`,
          equations: `<b>Na 与水</b>：2Na + 2H₂O = 2NaOH + H₂↑<br>
<b>Na₂O₂ 与水</b>：2Na₂O₂ + 2H₂O = 4NaOH + O₂↑（歧化）<br>
<b>Na₂O₂ 与 CO₂</b>：2Na₂O₂ + 2CO₂ = 2Na₂CO₃ + O₂（潜艇/太空舱供氧关键反应！）<br>
<b>Na₂CO₃ 与 HCl（少量→多量）</b>：<br>
　少量：Na₂CO₃ + HCl = NaHCO₃ + NaCl（HCO₃⁻ 中间产物）<br>
　过量：Na₂CO₃ + 2HCl = 2NaCl + H₂O + CO₂↑<br>
<b>NaHCO₃ 受热</b>：2NaHCO₃ = Na₂CO₃ + H₂O + CO₂↑（Na₂CO₃ 不分解，稳定！）`,
          pitfalls: [
            '❌ Na 与 CuSO₄ 溶液反应：<b>先与水反应</b>，再 NaOH + CuSO₄ 生成 Cu(OH)₂↓（不是置换出 Cu！）',
            '❌ Na₂O₂ 与水/CO₂ 反应<b>既是氧化剂又是还原剂</b>（歧化），必背反应',
            '❌ 焰色反应看 K 焰要透过<b>蓝色钴玻璃</b>（滤除 Na 的黄光干扰）',
            '❌ NaHCO₃ 不能用 Na₂CO₃ 替代——碱性太强会灼伤胃壁',
            '❌ Na₂CO₃ 溶液呈碱性是<b>水解</b>：CO₃²⁻+H₂O⇌HCO₃⁻+OH⁻'
          ]
        }
      ],
      flashcards: [
        { front: 'Na 与水反应的"五字诀"？', back: '浮、熔、游、响、红' },
        { front: 'Na 的存放方法？', back: '煤油中（隔绝空气和水）' },
        { front: 'Na₂O₂ 的颜色和特殊之处？', back: '淡黄色；既氧化又还原（歧化），可做供氧剂' },
        { front: 'Na₂O₂ 与 CO₂ 反应？', back: '2Na₂O₂+2CO₂=2Na₂CO₃+O₂（潜艇太空舱供氧）' },
        { front: 'NaHCO₃ 受热分解方程？', back: '2NaHCO₃=Na₂CO₃+H₂O+CO₂↑' },
        { front: 'Na₂CO₃ 受热分解吗？', back: '不分解！热稳定性 Na₂CO₃ > NaHCO₃' },
        { front: '为什么小苏打（NaHCO₃）能治胃酸？', back: 'NaHCO₃+HCl=NaCl+H₂O+CO₂↑（碱性弱不伤胃）' },
        { front: 'Na 焰色 vs K 焰色？', back: 'Na 黄色；K 紫色（隔蓝色钴玻璃看，避免 Na 干扰）' },
        { front: 'Na 与 CuSO₄ 溶液反应产物？', back: '先 Na+H₂O→NaOH+H₂↑，再 NaOH+CuSO₄→Cu(OH)₂↓+Na₂SO₄（不是置换出 Cu！）' },
        { front: '侯氏制碱法原料和产物？', back: '原料：饱和 NaCl + NH₃ + CO₂；产物：NaHCO₃ 结晶（再灼烧得 Na₂CO₃）' },
        { front: '为什么侯氏制碱先通 NH₃ 再通 CO₂？', back: 'NH₃ 溶解度大，先饱和使溶液呈碱性，能吸收更多 CO₂' },
        { front: '除去 Na₂CO₃ 中的 NaHCO₃？', back: '加热（NaHCO₃ 分解，Na₂CO₃ 不分解）' },
        { front: '除去 NaHCO₃ 溶液中的 Na₂CO₃？', back: '通足量 CO₂：Na₂CO₃+CO₂+H₂O=2NaHCO₃' },
        { front: 'Na₂O₂ 呼吸供氧的电子平衡？', back: 'Na₂O₂ 中 O 为 −1，反应后一半升至 0（O₂）、一半降至 −2（NaOH/Na₂CO₃）' }
      ],
      puzzles: [
        { formula: '2 N a + 2 H _ 2 O = 2 N a O H + H _ 2 ↑', tip: '钠与水（浮熔游响红）' },
        { formula: '2 N a _ 2 O _ 2 + 2 H _ 2 O = 4 N a O H + O _ 2 ↑', tip: '过氧化钠与水（歧化供氧）' },
        { formula: '2 N a _ 2 O _ 2 + 2 C O _ 2 = 2 N a _ 2 C O _ 3 + O _ 2', tip: '过氧化钠与二氧化碳' },
        { formula: '2 N a H C O _ 3 = N a _ 2 C O _ 3 + H _ 2 O + C O _ 2 ↑', tip: '小苏打受热分解' }
      ],
      stepExamples: [{
        stem: '为什么 NaHCO₃ 而不是 Na₂CO₃ 常用于治胃酸？请写出反应方程式并说明原因。',
        steps: [
          {
            ask: '第一步：胃酸的主要成分是？',
            type: 'choice',
            options: ['HCl', 'H₂SO₄', 'CH₃COOH', 'HNO₃'],
            answerIndex: 0,
            explain: '胃酸主要是<b>HCl</b>（盐酸），浓度约 0.2%（pH 1.5-2）。'
          },
          {
            ask: '第二步：NaHCO₃ 与 HCl 反应方程？',
            type: 'choice',
            options: [
              'NaHCO₃+HCl=NaCl+H₂O+CO₂↑',
              'NaHCO₃+HCl=NaClO+H₂O+CO₂',
              '2NaHCO₃+HCl=Na₂CO₃+HCl↑',
              'NaHCO₃+2HCl=NaCl+H₂+CO₂↑'
            ],
            answerIndex: 0,
            explain: '<b>NaHCO₃ + HCl = NaCl + H₂O + CO₂↑</b>（复分解反应，无氧化还原）。'
          },
          {
            ask: '第三步：为什么不用 Na₂CO₃？',
            type: 'choice',
            options: [
              'Na₂CO₃ 不能中和 HCl',
              'Na₂CO₃ 碱性太强，会灼伤胃壁',
              'Na₂CO₃ 溶解度太小',
              'Na₂CO₃ 生成 CO₂ 太多'
            ],
            answerIndex: 1,
            hint: '注意水解产生 OH⁻',
            explain: 'Na₂CO₃ 水解程度大（CO₃²⁻+H₂O⇌HCO₃⁻+OH⁻），<b>碱性太强</b>会灼伤胃壁；而 NaHCO₃ 水解程度小、碱性弱，中和 HCl 后温和。'
          },
          {
            ask: '第四步：写出 Na₂CO₃ 与过量 HCl 反应的分步方程',
            type: 'fill',
            answer: [
              'Na2CO3+HCl=NaHCO3+NaCl；NaHCO3+HCl=NaCl+H2O+CO2↑',
              '两步：Na₂CO₃+HCl=NaHCO₃+NaCl，NaHCO₃+HCl=NaCl+H₂O+CO₂↑'
            ],
            hint: '分两步（滴入 HCl 时）',
            explain: '两步走：<b>① Na₂CO₃+HCl=NaHCO₃+NaCl</b>（先形成中间产物 NaHCO₃）；<b>② NaHCO₃+HCl=NaCl+H₂O+CO₂↑</b>（再放气体）。这是"CO₂ 缓慢生成"的原因，也是"Na₂CO₃+HCl 与 HCl+Na₂CO₃ 现象不同"的关键。'
          }
        ]
      }]
    },

    'chem_xbx_iron': {
      subtitle: 'Fe²⁺⇌Fe³⁺ 是化学界的"变色龙"——变价才是铁的灵魂',
      points: [
        {
          title: '一、核心概念·铁的变价',
          concept: `铁是<b>变价金属</b>——常见 +2 和 +3 两个价态。
· <b>Fe²⁺</b>（亚铁离子）：<b>浅绿色</b>溶液，有<b>还原性</b>（易被氧化）
· <b>Fe³⁺</b>（铁离子）：<b>棕黄色</b>溶液，有<b>氧化性</b>（能氧化 Cu、I⁻ 等）
铁三角：<b>Fe ⇌ Fe²⁺ ⇌ Fe³⁺</b>，是高中化学最重要的循环之一。`,
          phenomena: `【颜色速记】
· Fe（单质）：银灰色
· Fe²⁺：浅绿（FeSO₄·7H₂O 绿矾）
· Fe³⁺：棕黄（FeCl₃ 浓溶液带血色）
· Fe(OH)₂：白色（迅速氧化）→ 灰绿色 → 红棕色 Fe(OH)₃
· Fe(OH)₃：<b>红棕色</b>沉淀
· Fe₃O₄：<b>黑色</b>磁性氧化物（磁铁矿）
· Fe₂O₃：<b>红棕色</b>（赤铁矿、铁锈）
【检验】
· Fe³⁺ + KSCN → <b>血红色</b>（最灵敏！）
· Fe²⁺ + KSCN → 无色 → 加 H₂O₂/氯水 → 血红色（间接检验）`,
          equations: `<b>Fe²⁺ → Fe³⁺（氧化）</b>：<br>
· 2Fe²⁺ + Cl₂ = 2Fe³⁺ + 2Cl⁻<br>
· 2Fe²⁺ + H₂O₂ + 2H⁺ = 2Fe³⁺ + 2H₂O<br>
· 3Fe²⁺ + 4HNO₃(稀) = 3Fe³⁺ + NO↑ + 2H₂O + 3NO₃⁻（简化）<br><br>
<b>Fe³⁺ → Fe²⁺（还原）</b>：<br>
· 2Fe³⁺ + Fe = 3Fe²⁺（<b>铁三角关键</b>）<br>
· 2Fe³⁺ + Cu = 2Fe²⁺ + Cu²⁺（PCB 电路板蚀刻！）<br>
· 2Fe³⁺ + 2I⁻ = 2Fe²⁺ + I₂<br>
· 2Fe³⁺ + H₂S = 2Fe²⁺ + S↓ + 2H⁺<br><br>
<b>Fe(OH)₂ 制备</b>（关键：防氧化）：<br>
FeSO₄ + 2NaOH = Fe(OH)₂↓（白色） + Na₂SO₄<br>
4Fe(OH)₂ + O₂ + 2H₂O = 4Fe(OH)₃（白→灰绿→红棕）`,
          pitfalls: [
            '❌ Fe 与稀 HNO₃ 反应生成 Fe³⁺，不是 Fe²⁺（HNO₃ 氧化性强）',
            '❌ Fe 与浓 HNO₃/浓 H₂SO₄ 常温<b>钝化</b>（表面形成致密氧化膜）',
            '❌ Fe²⁺ 溶液配制加铁钉——防止 Fe²⁺ 被氧化为 Fe³⁺（现配现用！）',
            '❌ 检验 Fe²⁺ 不能直接用 KSCN（无反应），要加氧化剂后再用 KSCN',
            '❌ Fe(OH)₂ 极易被氧化——制备时要"除氧"（长导管插到 NaOH 液面下）'
          ]
        }
      ],
      flashcards: [
        { front: 'Fe²⁺ 和 Fe³⁺ 的颜色？', back: 'Fe²⁺ 浅绿；Fe³⁺ 棕黄' },
        { front: '"铁三角"三个物种？', back: 'Fe ⇌ Fe²⁺ ⇌ Fe³⁺' },
        { front: 'Fe³⁺ 检验最灵敏的试剂？', back: 'KSCN（血红色）' },
        { front: '检验 Fe²⁺ 的完整流程？', back: '先加 KSCN 无变化 → 再加 H₂O₂ 或氯水 → 溶液变血红' },
        { front: 'Fe(OH)₂ 制备时怎么防止氧化？', back: '除氧（滴管长导管插到 NaOH 液面下、煮沸 NaOH 除氧）' },
        { front: 'Fe(OH)₂ 空气中变化？', back: '白色→灰绿色→红棕色（Fe(OH)₃）' },
        { front: '2Fe³⁺+Fe=? 是铁三角哪一条边？', back: 'Fe³⁺→Fe²⁺（Fe 是还原剂）；产物 3Fe²⁺' },
        { front: 'PCB 电路板蚀刻用什么？为什么？', back: 'FeCl₃ 溶液；2Fe³⁺+Cu=2Fe²⁺+Cu²⁺（Cu 被氧化溶解）' },
        { front: 'Fe 与稀 HNO₃ 反应产物？', back: 'Fe(NO₃)₃（+3 价！）+ NO↑ + H₂O（HNO₃ 氧化性强，Fe→Fe³⁺）' },
        { front: 'Fe 在常温浓 HNO₃/浓 H₂SO₄ 中？', back: '钝化（表面形成致密氧化膜，不再反应）' },
        { front: 'FeCl₃ 溶液为什么呈酸性？', back: 'Fe³⁺ 水解：Fe³⁺+3H₂O⇌Fe(OH)₃+3H⁺' },
        { front: '为什么保存 FeSO₄ 溶液要加铁钉？', back: '防 Fe²⁺ 被空气中的 O₂ 氧化为 Fe³⁺' },
        { front: 'Fe₃O₄ 的颜色和别名？', back: '黑色磁性氧化物；磁铁矿（Fe₃O₄ = FeO·Fe₂O₃）' },
        { front: '还原 Fe³⁺ 的三大试剂？', back: 'Fe、Cu、I⁻（还原剂强度 Fe > Cu > I⁻）' }
      ],
      puzzles: [
        { formula: '2 F e ³ ⁺ + F e = 3 F e ² ⁺', tip: '铁三角关键·Fe 还原 Fe³⁺' },
        { formula: '2 F e ³ ⁺ + C u = 2 F e ² ⁺ + C u ² ⁺', tip: 'PCB 电路板蚀刻' },
        { formula: '2 F e ² ⁺ + C l _ 2 = 2 F e ³ ⁺ + 2 C l ⁻', tip: '氯气氧化 Fe²⁺' },
        { formula: '4 F e ( O H ) _ 2 + O _ 2 + 2 H _ 2 O = 4 F e ( O H ) _ 3', tip: 'Fe(OH)₂ 空气氧化' }
      ],
      stepExamples: [{
        stem: '给你两瓶无标签溶液，一瓶是 FeCl₂，一瓶是 FeCl₃。请设计至少两种方法鉴别（写出实验步骤和现象）。',
        steps: [
          {
            ask: '第一步：从颜色入手，两瓶溶液颜色差异？',
            type: 'choice',
            options: [
              'FeCl₂ 蓝色；FeCl₃ 无色',
              'FeCl₂ 浅绿；FeCl₃ 棕黄',
              'FeCl₂ 红色；FeCl₃ 浅绿',
              '两者都是浅绿色'
            ],
            answerIndex: 1,
            explain: '<b>FeCl₂ 浅绿（Fe²⁺），FeCl₃ 棕黄（Fe³⁺）</b>。虽然可以直接看颜色区分，但浓度稀时颜色不明显，需要化学法。'
          },
          {
            ask: '第二步：用 KSCN 溶液鉴别，现象？',
            type: 'choice',
            options: [
              '两瓶都变红',
              'FeCl₂ 变红；FeCl₃ 无变化',
              'FeCl₂ 无变化；FeCl₃ 变血红',
              '两瓶都无变化'
            ],
            answerIndex: 2,
            hint: 'KSCN 只与 Fe³⁺ 反应',
            explain: '<b>KSCN 只与 Fe³⁺ 反应生成血红色</b>：Fe³⁺+3SCN⁻→Fe(SCN)₃。所以 <b>FeCl₃ 变血红</b>，FeCl₂ 无变化。这是最经典的方法。'
          },
          {
            ask: '第三步：用 NaOH 溶液鉴别，两瓶分别的现象？',
            type: 'choice',
            options: [
              'FeCl₂ 白→灰绿→红棕；FeCl₃ 立即红棕',
              '两瓶都立即红棕',
              'FeCl₂ 立即红棕；FeCl₃ 白→灰绿→红棕',
              '都无沉淀'
            ],
            answerIndex: 0,
            hint: 'Fe(OH)₂ 白色但会被空气氧化',
            explain: '<b>FeCl₂ + NaOH → Fe(OH)₂↓（白色）</b>，暴露空气中变灰绿再变红棕（Fe(OH)₃）；<b>FeCl₃ + NaOH → Fe(OH)₃↓（直接红棕色）</b>。两者沉淀颜色变化不同。'
          },
          {
            ask: '第四步：还有什么方法？（选出最靠谱的）',
            type: 'choice',
            options: [
              '加铁粉：FeCl₃ 溶液褪色（棕黄→浅绿）；FeCl₂ 无变化',
              '加食盐水观察沉淀',
              '闻气味',
              '尝味道（绝对不可！）'
            ],
            answerIndex: 0,
            hint: '2Fe³⁺+Fe=3Fe²⁺',
            explain: '<b>加铁粉法</b>：FeCl₃ 中 2Fe³⁺+Fe=3Fe²⁺（棕黄褪成浅绿）；FeCl₂ 与 Fe 不反应。这是铁三角的经典应用。<b>方法汇总</b>：颜色/KSCN/NaOH/铁粉——四种鉴别方法覆盖高考。'
          }
        ]
      }]
    },

    'chem_xbx_aluminum': {
      subtitle: '铝是两性代表——既溶于强酸又溶于强碱，"铝三角"循环记牢',
      points: [
        {
          title: '一、核心概念·铝的两性',
          concept: `铝是<b>两性金属</b>——既能与<b>强酸</b>反应生成 Al³⁺，又能与<b>强碱</b>反应生成 AlO₂⁻。
Al(OH)₃ 是<b>两性氢氧化物</b>——既溶于酸又溶于碱。
<b>铝三角</b>：Al ⇌ Al³⁺ ⇌ Al(OH)₃ ⇌ AlO₂⁻ 是高考高频循环图。`,
          phenomena: `【钝化】常温下 Al 与浓 HNO₃/浓 H₂SO₄ <b>钝化</b>（表面形成致密 Al₂O₃ 膜）——所以常温下可用铝制容器盛装浓硝酸/浓硫酸。
【铝热反应】2Al + Fe₂O₃ =(高温)= Al₂O₃ + 2Fe，放出大量热，用于焊接铁轨。
【Al(OH)₃ 制备关键】必须用<b>弱碱（氨水）</b>——不能用 NaOH（会过量溶解）。
【明矾净水】KAl(SO₄)₂·12H₂O，水解产生 Al(OH)₃ 胶体，吸附水中杂质。`,
          equations: `<b>Al 与酸/碱</b>：<br>
· 2Al + 6HCl = 2AlCl₃ + 3H₂↑<br>
· 2Al + 2NaOH + 2H₂O = 2NaAlO₂ + 3H₂↑（每个 Al 失 3e⁻，每个 H₂O 得电子）<br><br>
<b>Al(OH)₃ 两性</b>：<br>
· Al(OH)₃ + 3HCl = AlCl₃ + 3H₂O（与酸）<br>
· Al(OH)₃ + NaOH = NaAlO₂ + 2H₂O（与碱）<br><br>
<b>Al(OH)₃ 制备</b>：<br>
· AlCl₃ + 3NH₃·H₂O = Al(OH)₃↓ + 3NH₄Cl（氨水正确！）<br>
· <b>不用</b> NaOH：Al(OH)₃ + NaOH = NaAlO₂ + 2H₂O（会溶解）<br><br>
<b>铝三角</b>：<br>
· Al³⁺ + 3OH⁻ = Al(OH)₃↓（少量 NaOH）<br>
· Al³⁺ + 4OH⁻ = AlO₂⁻ + 2H₂O（过量 NaOH）<br>
· AlO₂⁻ + H⁺ + H₂O = Al(OH)₃↓（少量 HCl）<br>
· AlO₂⁻ + 4H⁺ = Al³⁺ + 2H₂O（过量 HCl）<br><br>
<b>铝热反应</b>：2Al + Fe₂O₃ = Al₂O₃ + 2Fe`,
          pitfalls: [
            '❌ 制 Al(OH)₃ 用 NaOH：会溶解，得不到 Al(OH)₃！必须用氨水',
            '❌ AlO₂⁻ + CO₂：只能生成 Al(OH)₃ + 碳酸盐（碳酸酸性 > 偏铝酸），不管过量与否 CO₂ 都能酸化 AlO₂⁻',
            '❌ 铝与 H₂SO₄ 反应看浓度——稀 H₂SO₄ 反应放 H₂；浓 H₂SO₄ 常温钝化',
            '❌ 明矾水解方程别忘写 3 H⁺（Al³⁺+3H₂O⇌Al(OH)₃胶+3H⁺）',
            '❌ Al 和 Fe 都会被浓 HNO₃/浓 H₂SO₄ 常温钝化——但加热会剧烈反应'
          ]
        }
      ],
      flashcards: [
        { front: '铝的三大化学特性？', back: '两性（酸/碱都溶）、钝化（浓 HNO₃/浓 H₂SO₄）、铝热反应' },
        { front: 'Al 与 NaOH 反应方程？', back: '2Al+2NaOH+2H₂O=2NaAlO₂+3H₂↑' },
        { front: '为什么 Al 能溶于 NaOH？', back: 'Al 是两性金属，AlO₂⁻ 稳定，H₂O 中的 H 被 Al 还原' },
        { front: '制备 Al(OH)₃ 为什么用氨水而不用 NaOH？', back: 'NaOH 过量会溶解 Al(OH)₃：Al(OH)₃+NaOH=NaAlO₂+2H₂O' },
        { front: 'Al(OH)₃ 两性方程？', back: '与酸 Al(OH)₃+3HCl=AlCl₃+3H₂O；与碱 Al(OH)₃+NaOH=NaAlO₂+2H₂O' },
        { front: '"铝三角"四个物种？', back: 'Al、Al³⁺、Al(OH)₃、AlO₂⁻' },
        { front: '少量 NaOH 滴入 AlCl₃ 生成？', back: 'Al(OH)₃↓（Al³⁺+3OH⁻=Al(OH)₃↓）' },
        { front: '过量 NaOH 滴入 AlCl₃ 生成？', back: 'NaAlO₂（Al³⁺+4OH⁻=AlO₂⁻+2H₂O）' },
        { front: '过量 CO₂ 通入 NaAlO₂？', back: 'Al(OH)₃↓ + NaHCO₃（CO₂ 酸性 > H₂CO₃ 但不足以再溶 Al(OH)₃）' },
        { front: '过量 HCl 滴入 NaAlO₂？', back: 'AlO₂⁻+4H⁺=Al³⁺+2H₂O（先沉淀再溶）' },
        { front: '铝热反应用途？', back: '野外焊接铁轨（2Al+Fe₂O₃=Al₂O₃+2Fe 放热）' },
        { front: '明矾化学式和净水原理？', back: 'KAl(SO₄)₂·12H₂O；Al³⁺水解成 Al(OH)₃ 胶体吸附杂质' },
        { front: 'Al 在常温浓 HNO₃/浓 H₂SO₄ 中？', back: '钝化（表面形成致密 Al₂O₃ 膜，可用铝罐运输）' },
        { front: 'Al₂O₃ 是什么类型氧化物？', back: '两性氧化物（与酸/碱都反应）' },
        { front: 'Al³⁺ 溶液为什么呈酸性？', back: '水解：Al³⁺+3H₂O⇌Al(OH)₃+3H⁺' }
      ],
      puzzles: [
        { formula: '2 A l + 2 N a O H + 2 H _ 2 O = 2 N a A l O _ 2 + 3 H _ 2 ↑', tip: '铝与氢氧化钠' },
        { formula: 'A l C l _ 3 + 3 N H _ 3 · H _ 2 O = A l ( O H ) _ 3 ↓ + 3 N H _ 4 C l', tip: '制备 Al(OH)₃（用氨水！）' },
        { formula: 'A l ³ ⁺ + 4 O H ⁻ = A l O _ 2 ⁻ + 2 H _ 2 O', tip: '过量 NaOH 溶解 Al(OH)₃' },
        { formula: '2 A l + F e _ 2 O _ 3 = A l _ 2 O _ 3 + 2 F e', tip: '铝热反应（焊接铁轨）' }
      ],
      stepExamples: [{
        stem: '实验室要制备纯净 Al(OH)₃。给你 AlCl₃ 溶液、NaOH 溶液、氨水、稀盐酸，问你选哪个？为什么？',
        steps: [
          {
            ask: '第一步：Al(OH)₃ 是什么类型氢氧化物？',
            type: 'choice',
            options: ['强碱', '弱碱', '两性氢氧化物', '不稳定盐'],
            answerIndex: 2,
            explain: 'Al(OH)₃ 是<b>两性氢氧化物</b>——既溶于酸又溶于强碱。这是选试剂的关键。'
          },
          {
            ask: '第二步：用 AlCl₃ + NaOH 会怎样？',
            type: 'choice',
            options: [
              'NaOH 少量恰好得 Al(OH)₃，过量会溶解',
              '不管多少 NaOH 都得到 Al(OH)₃',
              '不反应',
              '生成 AlCl₃ 沉淀'
            ],
            answerIndex: 0,
            hint: 'Al(OH)₃+NaOH=NaAlO₂+2H₂O',
            explain: 'NaOH 少量：Al³⁺+3OH⁻=Al(OH)₃↓；NaOH 过量：Al(OH)₃+OH⁻=AlO₂⁻+2H₂O。<b>用 NaOH 时"多一滴少一滴"结果就不同</b>，不好控制。'
          },
          {
            ask: '第三步：为什么用氨水（NH₃·H₂O）就行？',
            type: 'choice',
            options: [
              '氨水是强碱，反应完全',
              '氨水是弱碱，不能溶解 Al(OH)₃（因为 Al(OH)₃+NH₃·H₂O 不反应）',
              '氨水便宜',
              '氨水易挥发'
            ],
            answerIndex: 1,
            hint: 'NH₃·H₂O 弱碱不足以溶解 Al(OH)₃',
            explain: '<b>氨水（NH₃·H₂O）是弱碱</b>，不足以让 Al(OH)₃ 转化为 AlO₂⁻。所以无论氨水加多少，都只能停留在 Al(OH)₃↓ 状态，不会过头。这就是选氨水的核心原因。'
          },
          {
            ask: '第四步：写出制备方程式',
            type: 'fill',
            answer: [
              'AlCl3+3NH3·H2O=Al(OH)3↓+3NH4Cl',
              'AlCl₃+3NH₃·H₂O=Al(OH)₃↓+3NH₄Cl'
            ],
            explain: '<b>AlCl₃ + 3NH₃·H₂O = Al(OH)₃↓ + 3NH₄Cl</b>。或用离子方程式：Al³⁺+3NH₃·H₂O=Al(OH)₃↓+3NH₄⁺（NH₃·H₂O 是弱碱不拆）。实验设计的<b>核心思路</b>：选反应物时要考虑"过量后是否会二次反应"。'
          }
        ]
      }]
    },

    /* ==================== 模块 04 · 非金属及其化合物 ==================== */

    'chem_xbx_chlorine': {
      subtitle: '氯是活泼卤族——氯水含七种粒子，漂白粉三步走',
      points: [
        {
          title: '一、核心概念·氯气与氯水',
          concept: `Cl₂ 是<b>黄绿色</b>有<b>刺激性</b>气味的有毒气体，密度比空气大，能溶于水（形成氯水）。
氯水成分复杂：<b>Cl₂ + H₂O ⇌ HCl + HClO</b>（可逆！）
氯水久置：HClO 见光分解，最终变成稀盐酸（酸性增强，漂白性消失）。`,
          phenomena: `【氯水七种粒子】
分子：<b>Cl₂、HClO、H₂O</b>
离子：<b>H⁺、Cl⁻、ClO⁻、OH⁻</b>
【氯水久置变化】
· HClO 见光分解：2HClO =(光)= 2HCl + O₂↑
· 最终变成稀盐酸（无漂白性）
· 所以氯水要<b>棕色瓶避光冷藏</b>
【HClO 特性】
· 弱酸（酸性比 H₂CO₃ 还弱）
· 强氧化性、漂白性、杀菌
· 见光分解不稳定`,
          equations: `<b>Cl₂ 制备</b>（实验室）：MnO₂ + 4HCl(浓) =(△)= MnCl₂ + Cl₂↑ + 2H₂O<br>
<b>氯气与水</b>：Cl₂ + H₂O ⇌ HCl + HClO（可逆平衡）<br>
<b>Cl₂ 与 NaOH（吸收尾气）</b>：Cl₂ + 2NaOH = NaCl + NaClO + H₂O<br>
<b>漂白粉制备</b>：2Cl₂ + 2Ca(OH)₂ = Ca(ClO)₂ + CaCl₂ + 2H₂O<br>
· 有效成分：<b>Ca(ClO)₂</b><br>
<b>漂白粉在空气中失效</b>：Ca(ClO)₂ + CO₂ + H₂O = CaCO₃↓ + 2HClO；然后 HClO 见光分解<br>
<b>Cl⁻ 检验</b>：AgNO₃ + Cl⁻ → AgCl↓（白色，不溶于稀 HNO₃）<br>
<b>Cl₂ 与铁</b>：2Fe + 3Cl₂ =(点燃)= 2FeCl₃（生成 +3 价！不是 +2）<br>
<b>Cl₂ 与铜</b>：Cu + Cl₂ =(点燃)= CuCl₂（棕黄烟）<br>
<b>Cl₂ 与 H₂</b>：H₂ + Cl₂ =(点燃或光照)= 2HCl（苍白色火焰）`,
          pitfalls: [
            '❌ 氯水呈酸性靠 <b>HCl（强酸）</b>，漂白靠 <b>HClO</b>（不是氯气！）',
            '❌ Cl₂ 与 Fe 生成 FeCl₃（+3），不是 FeCl₂（Cl₂ 氧化性强）',
            '❌ 检验 Cl⁻ 用 AgNO₃ + 稀 HNO₃ —— 稀盐酸不能用（引入 Cl⁻）',
            '❌ 漂白粉长期放置失效——被空气中 CO₂ + H₂O 分解',
            '❌ 干燥的 Cl₂ <b>不能</b>漂白——必须溶于水生成 HClO 才能漂白'
          ]
        }
      ],
      flashcards: [
        { front: 'Cl₂ 的颜色和气味？', back: '黄绿色，刺激性气味' },
        { front: '氯水含哪七种粒子？', back: '分子 Cl₂/HClO/H₂O；离子 H⁺/Cl⁻/ClO⁻/OH⁻' },
        { front: '氯水与水反应方程？', back: 'Cl₂+H₂O⇌HCl+HClO（可逆！）' },
        { front: '氯水久置最终变什么？为什么？', back: '稀盐酸；HClO 见光分解 2HClO=2HCl+O₂↑' },
        { front: '氯水为什么要棕色瓶避光冷藏？', back: '防止 HClO 分解，保持氧化性和漂白性' },
        { front: '实验室制 Cl₂ 用什么？', back: 'MnO₂+4HCl(浓)=(△)MnCl₂+Cl₂↑+2H₂O' },
        { front: '漂白粉的有效成分？', back: 'Ca(ClO)₂（次氯酸钙）' },
        { front: '漂白粉制备方程？', back: '2Cl₂+2Ca(OH)₂=Ca(ClO)₂+CaCl₂+2H₂O' },
        { front: '漂白粉在空气中怎么失效？', back: 'Ca(ClO)₂+CO₂+H₂O=CaCO₃↓+2HClO；HClO 光解' },
        { front: '为什么干燥氯气不能漂白？', back: '必须溶水生成 HClO 才能漂白（干燥 Cl₂ 无氧化性表现）' },
        { front: 'Cl₂ + Fe 生成什么？', back: 'FeCl₃（+3 价！Cl₂ 氧化性强，不是 FeCl₂）' },
        { front: 'Cl₂ + Cu 生成？现象？', back: 'CuCl₂；棕黄烟（Cu 燃烧发出）' },
        { front: 'H₂ + Cl₂ 反应条件和现象？', back: '点燃或光照；苍白色火焰，瓶口白雾' },
        { front: '尾气 Cl₂ 用什么吸收？', back: 'NaOH 溶液：Cl₂+2NaOH=NaCl+NaClO+H₂O' },
        { front: 'Cl⁻ 检验方法？', back: '加稀 HNO₃ + AgNO₃ → 白色沉淀不溶于稀硝酸' },
        { front: 'HClO 三大性质？', back: '弱酸性、强氧化性、漂白杀菌' }
      ],
      puzzles: [
        { formula: 'M n O _ 2 + 4 H C l ( 浓 ) = M n C l _ 2 + C l _ 2 ↑ + 2 H _ 2 O', tip: '实验室制氯气' },
        { formula: 'C l _ 2 + H _ 2 O ⇌ H C l + H C l O', tip: '氯气溶于水（可逆）' },
        { formula: '2 C l _ 2 + 2 C a ( O H ) _ 2 = C a ( C l O ) _ 2 + C a C l _ 2 + 2 H _ 2 O', tip: '漂白粉制备' },
        { formula: 'C a ( C l O ) _ 2 + C O _ 2 + H _ 2 O = C a C O _ 3 ↓ + 2 H C l O', tip: '漂白粉在空气中失效' }
      ],
      stepExamples: [{
        stem: '新制氯水滴到干燥有色布条上，能褪色吗？为什么？氯水久置 pH 如何变化？',
        steps: [
          {
            ask: '第一步：漂白氯水的有效成分是什么？',
            type: 'choice',
            options: ['Cl₂', 'HCl', 'HClO', 'ClO⁻'],
            answerIndex: 2,
            explain: '<b>HClO 是漂白剂</b>——强氧化性使色素分子被氧化破坏。Cl₂ 本身不漂白，必须先与水反应生成 HClO。'
          },
          {
            ask: '第二步：干燥氯气与湿润氯气分别能漂白吗？',
            type: 'choice',
            options: [
              '干燥能，湿润不能',
              '湿润能，干燥不能',
              '两者都能',
              '两者都不能'
            ],
            answerIndex: 1,
            hint: 'Cl₂+H₂O⇌HClO',
            explain: '<b>湿润氯气才能漂白</b>——因为需要水生成 HClO。这是经典实验：干燥有色布条不褪色，湿润有色布条褪色。'
          },
          {
            ask: '第三步：氯水久置 pH 如何变化？',
            type: 'choice',
            options: [
              'pH 减小（酸性增强）',
              'pH 增大（酸性减弱）',
              'pH 不变',
              '先减小后增大'
            ],
            answerIndex: 0,
            hint: 'HClO 分解为 HCl',
            explain: '<b>pH 减小（酸性增强）</b>——HClO 见光分解成 HCl（强酸）+O₂，Cl₂ 也逐渐溶入水完全变成 HCl。<b>关键</b>：弱酸 HClO 变成强酸 HCl，酸性增强，pH 下降。'
          },
          {
            ask: '第四步：为什么氯水要棕色瓶避光冷藏？',
            type: 'choice',
            options: [
              '防止 Cl₂ 挥发',
              '防止 HClO 见光分解',
              '防止水蒸发',
              '防止细菌污染'
            ],
            answerIndex: 1,
            explain: '<b>防止 HClO 见光分解</b>（2HClO=(光)=2HCl+O₂↑）。深棕色瓶挡光，冷藏减少挥发和分解。保鲜氯水的漂白/杀菌功能。'
          }
        ]
      }]
    },

    'chem_xbx_sulfur': {
      subtitle: '硫的价态从 -2 到 +6——SO₂ 的三大性质是高考必考',
      points: [
        {
          title: '一、核心概念·SO₂ 三大性质',
          concept: `SO₂ 是<b>无色刺激性</b>气体，有<b>三大性质</b>：
① <b>酸性氧化物</b>：对应亚硫酸 H₂SO₃（弱酸）
② <b>还原性</b>：S 从 +4 可升至 +6（→SO₃/H₂SO₄），与 Cl₂/H₂O₂/KMnO₄ 反应
③ <b>氧化性</b>（弱）：S 从 +4 可降至 0（→S↓）
④ <b>漂白性</b>：<b>结合式</b>漂白（与有色物结合成无色物，加热可恢复！）`,
          phenomena: `【SO₂ vs Cl₂ 漂白区别】<b>高考必考</b>
· SO₂ 结合式漂白（可逆，加热恢复颜色）：漂白品红、纸浆等
· Cl₂/HClO 氧化式漂白（不可逆，永久破坏）
· 品红检验 SO₂：褪色 → 加热 → 恢复红色（可逆是关键！）
【SO₂ + Cl₂ = ?】两者按 1:1 混合后<b>都失去漂白性</b>：
SO₂ + Cl₂ + 2H₂O = H₂SO₄ + 2HCl
【浓 H₂SO₄ 三大特性】
· <b>吸水性</b>——作干燥剂（干燥中性和酸性气体，但不能干燥碱性和还原性气体）
· <b>脱水性</b>——从有机物中夺取 H 和 O（黑面包实验：蔗糖变黑膨胀）
· <b>强氧化性</b>——加热能氧化 Cu、C 等`,
          equations: `<b>SO₂ 制取</b>：Na₂SO₃ + H₂SO₄ = Na₂SO₄ + SO₂↑ + H₂O<br>
<b>SO₂ 溶于水</b>：SO₂ + H₂O ⇌ H₂SO₃（可逆）<br>
<b>SO₂ + NaOH</b>：<br>
· 少量 SO₂：SO₂ + 2NaOH = Na₂SO₃ + H₂O<br>
· 过量 SO₂：SO₂ + NaOH = NaHSO₃<br>
<b>SO₂ 还原性</b>：<br>
· 2SO₂ + O₂ ⇌(V₂O₅/催化剂) 2SO₃（工业制硫酸）<br>
· SO₂ + Cl₂ + 2H₂O = H₂SO₄ + 2HCl<br>
· 5SO₂ + 2KMnO₄ + 2H₂O = 2MnSO₄ + K₂SO₄ + 2H₂SO₄（酸性 KMnO₄ 褪色）<br>
<b>浓 H₂SO₄ + Cu</b>：Cu + 2H₂SO₄(浓) =(△)= CuSO₄ + SO₂↑ + 2H₂O<br>
<b>浓 H₂SO₄ + C</b>：C + 2H₂SO₄(浓) =(△)= CO₂↑ + 2SO₂↑ + 2H₂O<br>
<b>SO₄²⁻ 检验</b>：稀 HCl 无变化 + BaCl₂ → 白色不溶沉淀（先酸化排除 Ag⁺、CO₃²⁻、SO₃²⁻ 干扰）`,
          pitfalls: [
            '❌ SO₂ 通品红溶液变红？<b>不对！</b>SO₂ 使品红<b>褪色</b>（加热又恢复）',
            '❌ SO₂ 与 Cl₂ 混合漂白性增强？<b>大错！</b>两者互相氧化还原，漂白性都消失',
            '❌ 浓 H₂SO₄ 干燥 H₂S/HI/HBr？不能！它会氧化这些气体',
            '❌ 浓 H₂SO₄ 常温下与 Cu <b>不反应</b>——必须加热',
            '❌ 检验 SO₄²⁻ 直接加 BaCl₂——错！<b>必须先加稀 HCl</b>排除干扰',
            '❌ Cu + 稀 H₂SO₄ <b>不反应</b>（H⁺ 氧化性不够强）'
          ]
        }
      ],
      flashcards: [
        { front: 'SO₂ 的四大性质？', back: '酸性氧化物、还原性、（弱）氧化性、漂白性' },
        { front: 'SO₂ 漂白 vs Cl₂ 漂白核心区别？', back: 'SO₂ 结合式漂白（可逆，加热恢复）；Cl₂ 氧化式漂白（不可逆）' },
        { front: '如何用一种试剂鉴别 SO₂ 和 CO₂？', back: '用品红溶液：SO₂ 使品红褪色（加热恢复）；CO₂ 无变化' },
        { front: 'SO₂ 通入氢硫酸（H₂S）？', back: '生成 S↓（SO₂ 做氧化剂）：SO₂+2H₂S=3S↓+2H₂O（归中反应）' },
        { front: 'SO₂ + Cl₂ + H₂O 生成？', back: 'H₂SO₄ + HCl（互相氧化还原，漂白性消失）' },
        { front: 'SO₂ + NaOH 少量/过量 生成？', back: '少 SO₂：Na₂SO₃；过 SO₂：NaHSO₃' },
        { front: '浓 H₂SO₄ 三大特性？', back: '吸水性、脱水性、强氧化性' },
        { front: '浓 H₂SO₄ 干燥哪些气体？', back: '中性/酸性气体（Cl₂/SO₂/CO₂/O₂/N₂）；不能干燥碱性（NH₃）或还原性（H₂S/HI）' },
        { front: 'Cu + 浓 H₂SO₄ 加热反应？', back: 'Cu+2H₂SO₄(浓)=(△)CuSO₄+SO₂↑+2H₂O（一半 H₂SO₄ 做氧化剂一半做酸）' },
        { front: '"黑面包"实验现象和原理？', back: '蔗糖变黑膨胀；浓 H₂SO₄ 脱水性夺取 C₁₂H₂₂O₁₁ 中的 H/O，生成 C 和水' },
        { front: 'SO₄²⁻ 检验步骤？', back: '先加稀 HCl 排除干扰 → 加 BaCl₂ → 白色沉淀不溶' },
        { front: '工业制硫酸接触法三步？', back: '燃烧 S 或黄铁矿→SO₂；催化氧化 SO₂→SO₃；SO₃ 溶入浓 H₂SO₄→发烟硫酸' },
        { front: '为什么 SO₃ 用浓 H₂SO₄ 吸收而不用水？', back: '直接用水会形成酸雾，吸收慢；浓 H₂SO₄ 吸收快，再稀释得到硫酸' },
        { front: '"绿矾"是什么？', back: 'FeSO₄·7H₂O（浅绿色晶体，含 Fe²⁺）' },
        { front: '为什么"品红加热恢复"是判断 SO₂ 漂白的关键？', back: '证明是结合式（可逆），与氧化式（不可逆）本质区别' }
      ],
      puzzles: [
        { formula: 'S O _ 2 + C l _ 2 + 2 H _ 2 O = H _ 2 S O _ 4 + 2 H C l', tip: 'SO₂ 与 Cl₂ 互相氧化还原' },
        { formula: 'C u + 2 H _ 2 S O _ 4 ( 浓 ) = C u S O _ 4 + S O _ 2 ↑ + 2 H _ 2 O', tip: '铜与浓硫酸（加热）' },
        { formula: '2 S O _ 2 + O _ 2 ⇌ 2 S O _ 3', tip: '接触法制硫酸·催化氧化' },
        { formula: 'S O _ 2 + 2 H _ 2 S = 3 S ↓ + 2 H _ 2 O', tip: '归中反应' }
      ],
      stepExamples: [{
        stem: '给你 SO₂ 和 CO₂ 两瓶无色气体，如何鉴别？请用两种方法。',
        steps: [
          {
            ask: '第一步：SO₂ 与 CO₂ 最大化学性质差异是？',
            type: 'choice',
            options: [
              'SO₂ 有还原性和漂白性；CO₂ 没有',
              'SO₂ 是酸性氧化物；CO₂ 不是',
              'CO₂ 溶解度大于 SO₂',
              '两者没什么本质区别'
            ],
            answerIndex: 0,
            hint: 'S 为 +4，C 为 +4，价态相同但性质不同',
            explain: '<b>SO₂ 有还原性和漂白性，CO₂ 没有</b>。虽然两者都是酸性氧化物，但 SO₂ 的 S 可升至 +6，CO₂ 的 C 已经在最高 +4 价，故 SO₂ 有还原性。'
          },
          {
            ask: '第二步：方法一——品红溶液鉴别。现象？',
            type: 'choice',
            options: [
              '两瓶都使品红褪色',
              'SO₂ 使品红褪色，加热恢复；CO₂ 无变化',
              'CO₂ 使品红褪色；SO₂ 无变化',
              '两瓶都无变化'
            ],
            answerIndex: 1,
            hint: '品红检验 SO₂ 的经典方法',
            explain: '<b>SO₂ 使品红褪色，加热恢复红色（可逆！）</b>——这是 SO₂ 结合式漂白的特征。CO₂ 无变化。<b>关键</b>：加热恢复颜色是 SO₂ 与 Cl₂ 漂白的核心区别。'
          },
          {
            ask: '第三步：方法二——酸性 KMnO₄ 或溴水鉴别。现象？',
            type: 'choice',
            options: [
              'SO₂ 使 KMnO₄ 褪色；CO₂ 不使 KMnO₄ 褪色',
              'CO₂ 使 KMnO₄ 褪色；SO₂ 不',
              '两瓶都褪色',
              '两瓶都不褪色'
            ],
            answerIndex: 0,
            hint: 'SO₂ 有还原性',
            explain: '<b>SO₂ 使酸性 KMnO₄（紫红）或溴水（橙）褪色</b>——SO₂ 被氧化为 SO₄²⁻。CO₂ 无还原性不褪色。反应：5SO₂+2KMnO₄+2H₂O=K₂SO₄+2MnSO₄+2H₂SO₄。'
          },
          {
            ask: '第四步：能否用澄清石灰水鉴别？',
            type: 'choice',
            options: [
              '能，SO₂ 使石灰水变浑浊，CO₂ 不能',
              '能，CO₂ 使石灰水变浑浊，SO₂ 不能',
              '不能，两者都使石灰水变浑浊（现象相同）',
              '两者都不能使石灰水变浑浊'
            ],
            answerIndex: 2,
            hint: 'Ca(OH)₂ + SO₂ → CaSO₃↓; Ca(OH)₂ + CO₂ → CaCO₃↓',
            explain: '<b>不能！</b>两者都是酸性氧化物，都能使石灰水变浑浊（CaSO₃/CaCO₃ 都是白色沉淀）。<b>结论</b>：石灰水法不能鉴别；必须用品红（漂白性）或 KMnO₄/溴水（还原性）。'
          }
        ]
      }]
    },

    'chem_xbx_nitrogen': {
      subtitle: '氮循环变价复杂——N₂/NH₃/NO/NO₂/HNO₃ 每一步都是考点',
      points: [
        {
          title: '一、核心概念·氮及其化合物',
          concept: `氮是<b>变价最多</b>的非金属之一（−3、0、+1、+2、+3、+4、+5 都有）：
· −3：NH₃、NH₄⁺
· 0：N₂
· +2：NO（无色）
· +4：NO₂（红棕）
· +5：HNO₃、NO₃⁻
【N₂ 稳定性】N≡N 三键（键能 946 kJ/mol）极难破坏——所以常温下 N₂ 非常稳定。`,
          phenomena: `【NH₃ 特性】
· 唯一<b>碱性</b>气体（其他常见气体都是酸性或中性）
· 极易溶于水（1:700），形成 NH₃·H₂O（弱碱）
· <b>喷泉实验</b>核心：极大溶解度差 → 快速溶解 → 内外压差 → 水喷入
· 检验：湿润红色石蕊试纸变蓝
【NO vs NO₂】
· NO：无色，与 O₂ 迅速反应变红棕（2NO+O₂=2NO₂）—— 收集用<b>排水法</b>
· NO₂：红棕色，与水反应（3NO₂+H₂O=2HNO₃+NO）—— 收集用<b>向上排空气法</b>
【HNO₃ 氧化性】
· 稀 HNO₃ + Cu → NO（无色）
· 浓 HNO₃ + Cu → NO₂（红棕）
· <b>钝化</b>：常温下 Fe/Al 与浓 HNO₃/浓 H₂SO₄ 表面钝化`,
          equations: `<b>N₂ + H₂ ⇌ 2NH₃</b>（工业合成氨，高温高压催化剂）<br>
<b>NH₃ + H₂O ⇌ NH₃·H₂O ⇌ NH₄⁺ + OH⁻</b>（NH₃·H₂O 弱碱）<br>
<b>NH₃ 实验室制</b>：2NH₄Cl + Ca(OH)₂ =(△)= CaCl₂ + 2NH₃↑ + 2H₂O<br>
<b>喷泉实验</b>：NH₃ + H₂O 极溶生成 NH₃·H₂O<br>
<b>NO + O₂</b>：2NO + O₂ = 2NO₂（无色变红棕）<br>
<b>NO₂ + H₂O</b>：3NO₂ + H₂O = 2HNO₃ + NO（工业制硝酸的关键步骤）<br>
<b>Cu + HNO₃</b>：<br>
· 稀：3Cu + 8HNO₃(稀) = 3Cu(NO₃)₂ + 2NO↑ + 4H₂O<br>
· 浓：Cu + 4HNO₃(浓) = Cu(NO₃)₂ + 2NO₂↑ + 2H₂O<br>
<b>Fe/Al + 浓 HNO₃</b>（常温）：<b>钝化</b>（可用铁罐/铝罐运浓 HNO₃）<br>
<b>NH₄⁺ 检验</b>：加浓 NaOH 加热 → 产生使湿润红色石蕊试纸变蓝的气体（NH₃）`,
          pitfalls: [
            '❌ 用 HNO₃ 制 H₂？<b>不行</b>！HNO₃ 氧化性强，不会生成 H₂，只生成 NO/NO₂',
            '❌ NO 用排空气法收集？<b>不行</b>！NO 遇 O₂ 变 NO₂，只能排水法',
            '❌ 检验 NH₄⁺ 忘了加热——盐酸受热才有 NH₃ 逸出',
            '❌ 浓 HNO₃ 与 Cu 反应写成生成 H₂——生成的是 NO₂（红棕气体）',
            '❌ 铁在<b>加热</b>浓 HNO₃ 中不钝化——会剧烈反应（只有常温才钝化）',
            '❌ NH₃ 用<b>浓 H₂SO₄</b> 干燥？<b>不行</b>！NH₃ 是碱性气体，会被酸吸收；应该用<b>碱石灰</b>'
          ]
        }
      ],
      flashcards: [
        { front: 'N₂ 为什么如此稳定？', back: 'N≡N 三键键能大（946 kJ/mol）难破坏' },
        { front: 'NH₃ 是什么性气体？', back: '唯一常见碱性气体（其他都是酸性或中性）' },
        { front: '喷泉实验原理？', back: '气体极大溶解度差 → 快速溶解 → 内外压差 → 水喷入' },
        { front: 'NH₃ 实验室制法？', back: '2NH₄Cl+Ca(OH)₂=(△)CaCl₂+2NH₃↑+2H₂O' },
        { front: 'NH₃ 用什么干燥？为什么不用浓 H₂SO₄？', back: '碱石灰；浓 H₂SO₄ 会吸收 NH₃（酸碱反应）' },
        { front: 'NO 的颜色和收集方法？', back: '无色气体；排水法（遇 O₂ 变红棕）' },
        { front: 'NO₂ 的颜色和收集方法？', back: '红棕色；向上排空气法（密度大且溶于水）' },
        { front: 'NO + O₂ 反应？', back: '2NO+O₂=2NO₂（快速反应，无色变红棕）' },
        { front: 'NO₂ 与水反应？', back: '3NO₂+H₂O=2HNO₃+NO（工业制硝酸关键）' },
        { front: 'Cu + 稀 HNO₃ 产物？', back: '3Cu+8HNO₃(稀)=3Cu(NO₃)₂+2NO↑+4H₂O' },
        { front: 'Cu + 浓 HNO₃ 产物？', back: 'Cu+4HNO₃(浓)=Cu(NO₃)₂+2NO₂↑+2H₂O' },
        { front: '为什么不能用 HNO₃ 制 H₂？', back: 'HNO₃ 强氧化性——不产生 H₂，只产生 NO/NO₂' },
        { front: '钝化是什么现象？涉及哪些金属和酸？', back: '常温下 Fe/Al 与浓 HNO₃/浓 H₂SO₄ 表面形成致密氧化膜（可用铁/铝罐运）' },
        { front: 'NH₄⁺ 检验方法？', back: '加 NaOH 溶液加热 → 湿润红色石蕊试纸变蓝' },
        { front: '工业制硝酸三步？', back: 'N₂+H₂→NH₃（合成氨）；NH₃+O₂→NO（催化氧化）；NO+O₂→NO₂；NO₂+H₂O→HNO₃' },
        { front: '氮的固定三种方式？', back: '生物固氮（豆科）、大气固氮（雷电）、工业固氮（合成氨）' }
      ],
      puzzles: [
        { formula: '2 N H _ 4 C l + C a ( O H ) _ 2 = C a C l _ 2 + 2 N H _ 3 ↑ + 2 H _ 2 O', tip: '实验室制氨气' },
        { formula: '3 N O _ 2 + H _ 2 O = 2 H N O _ 3 + N O', tip: 'NO₂ 与水（工业制硝酸）' },
        { formula: '3 C u + 8 H N O _ 3 ( 稀 ) = 3 C u ( N O _ 3 ) _ 2 + 2 N O ↑ + 4 H _ 2 O', tip: '铜与稀硝酸' },
        { formula: 'C u + 4 H N O _ 3 ( 浓 ) = C u ( N O _ 3 ) _ 2 + 2 N O _ 2 ↑ + 2 H _ 2 O', tip: '铜与浓硝酸' }
      ],
      stepExamples: [{
        stem: '铜与稀硝酸反应生成 NO 气体。若得到 4.48 L NO（标况），求消耗 Cu 的物质的量和被还原的 HNO₃ 的物质的量。',
        steps: [
          {
            ask: '第一步：写出反应方程式',
            type: 'choice',
            options: [
              '3Cu+8HNO₃(稀)=3Cu(NO₃)₂+2NO↑+4H₂O',
              'Cu+4HNO₃(稀)=Cu(NO₃)₂+2NO₂↑+2H₂O',
              'Cu+2HNO₃=Cu(NO₃)₂+H₂↑',
              '3Cu+8HNO₃(浓)=3Cu(NO₃)₂+2NO↑+4H₂O'
            ],
            answerIndex: 0,
            explain: '<b>3Cu + 8HNO₃(稀) = 3Cu(NO₃)₂ + 2NO↑ + 4H₂O</b>。稀 HNO₃ 生成 NO，浓 HNO₃ 生成 NO₂——务必分清。'
          },
          {
            ask: '第二步：4.48 L NO 是多少 mol？',
            type: 'fill',
            answer: ['0.2', '0.2mol', '0.2 mol'],
            hint: 'n=V/22.4',
            explain: 'n(NO) = 4.48/22.4 = <b>0.2 mol</b>'
          },
          {
            ask: '第三步：根据 3Cu:2NO 比例，消耗 Cu 的物质的量？',
            type: 'fill',
            answer: ['0.3', '0.3mol', '0.3 mol'],
            hint: '3Cu:2NO = ?:0.2',
            explain: '3Cu : 2NO = x : 0.2 → x = <b>0.3 mol Cu</b>'
          },
          {
            ask: '第四步：被还原的 HNO₃ 是多少 mol？（陷阱题）',
            type: 'choice',
            options: [
              '0.8 mol（所有 HNO₃ 都被还原）',
              '0.2 mol（等于 NO 的物质的量）',
              '0.6 mol（等于 Cu(NO₃)₂ 中 NO₃⁻ 数）',
              '0.4 mol'
            ],
            answerIndex: 1,
            hint: '被还原的 HNO₃ 变成 NO；作酸的 HNO₃ 变成 NO₃⁻ 留在盐里',
            explain: '<b>陷阱！被还原的 HNO₃ = 生成的 NO = 0.2 mol</b>。总共 8 mol HNO₃ 中：<b>2 mol 被还原</b>（→NO），<b>6 mol 做酸</b>（→NO₃⁻ 留在 Cu(NO₃)₂ 里）。这是"分清氧化剂用量"的经典陷阱。'
          }
        ]
      }]
    },

    'chem_xbx_silicon': {
      subtitle: '硅是半导体之王——SiO₂ 的三大"反常"是记忆点',
      points: [
        {
          title: '一、核心概念·硅及硅酸盐',
          concept: `Si 是<b>地壳含量第二</b>的元素（仅次于 O，占 27%），是<b>半导体之王</b>。
Si 的三种形态：
· 单质 Si（灰黑色，半导体）
· SiO₂（石英、水晶）
· 硅酸盐（陶瓷、玻璃、水泥）
【SiO₂ 结构】<b>原子晶体</b>——立体网状，每个 Si 连 4 个 O，每个 O 连 2 个 Si，所以化学式 SiO₂ 表示的是<b>比例</b>，不是"分子"。`,
          phenomena: `【SiO₂ 三大反常】高考必考
① <b>唯一与 HF 反应的酸性氧化物</b>：SiO₂ + 4HF = SiF₄↑ + 2H₂O（HF 刻蚀玻璃）
② <b>能与强碱直接反应</b>：SiO₂ + 2NaOH = Na₂SO₃ + H₂O（所以 NaOH 溶液不能装在玻璃塞磨口瓶中）
③ <b>沸点极高</b>（1710°C，因为是原子晶体）—— 与 CO₂（气体，分子晶体）差异巨大
【新型无机材料】
· 光导纤维（SiO₂）——通信
· 碳化硅（SiC）——磨料、耐高温
· 陶瓷、水泥、玻璃——传统三大硅酸盐材料`,
          equations: `<b>SiO₂ 特殊反应</b>：<br>
· SiO₂ + 4HF = SiF₄↑ + 2H₂O（刻蚀玻璃）<br>
· SiO₂ + 2NaOH = Na₂SiO₃ + H₂O（碱溶反应）<br>
· SiO₂ + Na₂CO₃ =(高温)= Na₂SiO₃ + CO₂↑（工业制玻璃）<br>
· SiO₂ + CaCO₃ =(高温)= CaSiO₃ + CO₂↑<br>
<b>H₂SiO₃ 制备</b>：Na₂SiO₃ + 2HCl = 2NaCl + H₂SiO₃↓（酸性 HCl > H₂SiO₃）<br>
<b>Si 单质制取</b>（工业）：<br>
· 粗硅：SiO₂ + 2C =(高温)= Si + 2CO↑<br>
· 提纯：Si + 2Cl₂ =(高温)= SiCl₄；SiCl₄ + 2H₂ =(高温)= Si + 4HCl<br>
<b>Si + NaOH</b>：Si + 2NaOH + H₂O = Na₂SiO₃ + 2H₂↑（Si 也能与强碱反应）`,
          pitfalls: [
            '❌ SiO₂ + H₂O = H₂SiO₃？<b>错！</b>SiO₂ 不溶于水，不与水反应（对应酸 H₂SiO₃ 也是不溶）',
            '❌ SiO₂ 与所有酸反应？<b>错！</b>只与 HF 反应，与其他酸不反应',
            '❌ 用 HCl 制 H₂SiO₃：<b>对的</b>！酸性 HCl > H₂SiO₃，能置换出 H₂SiO₃',
            '❌ 玻璃 = Na₂SiO₃？<b>不完全对</b>！普通玻璃是 Na₂SiO₃·CaSiO₃·SiO₂ 的复杂混合物',
            '❌ NaOH 溶液能装在玻璃塞瓶中？<b>不能</b>！SiO₂+NaOH 反应，磨口塞会粘住（要用橡胶塞）'
          ]
        }
      ],
      flashcards: [
        { front: 'Si 在地壳含量排第几？', back: '第二（仅次于 O，占 27%）' },
        { front: 'SiO₂ 属于什么晶体？', back: '原子晶体（立体网状结构，沸点极高）' },
        { front: 'SiO₂ 的三大"反常"？', back: '① 唯一与 HF 反应的酸性氧化物 ② 能与强碱反应 ③ 沸点极高（原子晶体）' },
        { front: '为什么 NaOH 溶液不能装玻璃塞瓶？', back: 'SiO₂+2NaOH=Na₂SiO₃+H₂O，磨口塞被 Na₂SiO₃ 粘住' },
        { front: 'HF 与 SiO₂ 反应方程？用途？', back: 'SiO₂+4HF=SiF₄↑+2H₂O；用于刻蚀玻璃' },
        { front: '工业制玻璃反应？', back: 'SiO₂+Na₂CO₃=(高温)Na₂SiO₃+CO₂↑；SiO₂+CaCO₃=(高温)CaSiO₃+CO₂↑' },
        { front: '工业制粗硅方程？', back: 'SiO₂+2C=(高温)Si+2CO↑' },
        { front: '如何制取 H₂SiO₃？', back: 'Na₂SiO₃+2HCl=2NaCl+H₂SiO₃↓（酸性 HCl>H₂SiO₃）' },
        { front: 'Si 单质能与什么反应？', back: '强碱（Si+2NaOH+H₂O=Na₂SiO₃+2H₂↑）、HF、O₂、Cl₂' },
        { front: '硅酸盐组成的表达法？', back: '氧化物形式 aM₂O·bMO·cSiO₂（如高岭石 Al₂O₃·2SiO₂·2H₂O）' },
        { front: '光导纤维成分？', back: 'SiO₂' },
        { front: '碳化硅（SiC）用途？', back: '磨料、耐高温材料（人造金刚砂）' },
        { front: '陶瓷、水泥、玻璃的共同基础？', back: '硅酸盐（传统无机非金属材料）' },
        { front: '为什么 SiO₂ 沸点这么高？', back: '原子晶体，Si-O 键能大，融化要破坏共价键（1710°C）' }
      ],
      puzzles: [
        { formula: 'S i O _ 2 + 4 H F = S i F _ 4 ↑ + 2 H _ 2 O', tip: 'SiO₂ 唯一与酸反应（刻蚀玻璃）' },
        { formula: 'S i O _ 2 + 2 N a O H = N a _ 2 S i O _ 3 + H _ 2 O', tip: 'SiO₂ 与强碱反应' },
        { formula: 'S i O _ 2 + N a _ 2 C O _ 3 = N a _ 2 S i O _ 3 + C O _ 2 ↑', tip: '高温制玻璃' },
        { formula: 'S i O _ 2 + 2 C = S i + 2 C O ↑', tip: '工业制粗硅' }
      ],
      stepExamples: [{
        stem: '实验室装 NaOH 溶液的试剂瓶为什么不能用磨口玻璃塞？请写反应方程式并说明。',
        steps: [
          {
            ask: '第一步：玻璃的主要成分是什么？',
            type: 'choice',
            options: [
              '纯 SiO₂',
              '含 SiO₂ 的硅酸盐（Na₂SiO₃·CaSiO₃·SiO₂）',
              '纯 Na₂SiO₃',
              '纯 CaCO₃'
            ],
            answerIndex: 1,
            explain: '普通玻璃是<b>硅酸盐混合物</b>——Na₂SiO₃·CaSiO₃·SiO₂（主要含 SiO₂）。'
          },
          {
            ask: '第二步：NaOH 与 SiO₂ 反应吗？',
            type: 'choice',
            options: [
              '不反应（SiO₂ 不活泼）',
              '反应：SiO₂+2NaOH=Na₂SiO₃+H₂O',
              '反应：SiO₂+NaOH=NaHSiO₃',
              '生成气体'
            ],
            answerIndex: 1,
            hint: 'SiO₂ 是酸性氧化物',
            explain: '<b>SiO₂ + 2NaOH = Na₂SiO₃ + H₂O</b>——SiO₂ 是酸性氧化物，与强碱反应生成盐和水。'
          },
          {
            ask: '第三步：Na₂SiO₃ 有什么特殊性质？',
            type: 'choice',
            options: [
              '易挥发',
              '易溶于水，俗称"水玻璃"，有粘性能作粘合剂',
              '易分解',
              '有毒'
            ],
            answerIndex: 1,
            hint: '水玻璃',
            explain: '<b>Na₂SiO₃ 是"水玻璃"</b>——粘稠溶液，能做粘合剂（矿物胶）。'
          },
          {
            ask: '第四步：为什么磨口玻璃塞不能用？',
            type: 'choice',
            options: [
              'NaOH 会腐蚀玻璃 → 生成 Na₂SiO₃（水玻璃）→ 有粘性 → 磨口塞被粘住打不开',
              'NaOH 会溶解玻璃',
              '玻璃塞会分解',
              '瓶子会爆炸'
            ],
            answerIndex: 0,
            hint: '"粘住"是核心',
            explain: '<b>粘住！</b>NaOH + SiO₂（玻璃内壁+塞子接触面）→ Na₂SiO₃（水玻璃）→ 有很强粘性 → <b>磨口塞被粘住打不开</b>。所以要用<b>橡胶塞</b>盛装 NaOH 溶液。这是化学实验室的经典安全操作规范。'
          }
        ]
      }]
    }

  };

  global.CHEMISTRY_DEEP_DIVE = CHEMISTRY_DEEP_DIVE;

})(typeof window !== 'undefined' ? window : this);
