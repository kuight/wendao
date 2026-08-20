/* ===================================================================
 * 《问道修仙学院》v4.3.6 · 推衍宫·数学高质量真题库 · Part 6
 * ⭐ 来源风格：新高考一卷 / 八省联考 / 金考卷 / 天利38套 / 名校密卷
 * 覆盖：函数、三角、向量、复数、立几、圆锥曲线、数列、导数、概率统计、压轴综合
 * 题号规则：math_q436p6_XXXXX
 * ================================================================= */
(function (global) {
  'use strict';

  function svg(w, h, body) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" style="max-width:100%;height:auto;background:#fbf8ef;border:1px solid #d8c79c;border-radius:6px;margin:8px 0;">${body}</svg>`;
  }

  const ALL_QS = [
    { id:'math_q436p6_10301', manualId:'math_m3', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·新高考风格）设 x>0，y>0，且 x+y=2。下列结论正确的是',
      options:['A. xy≤1','B. x²+y²≥2','C. 1/x+1/y≥2','D. |x-y|<2'],
      answer:['A','B','C','D'],
      explain:'A：由均值不等式，xy≤((x+y)/2)²=1。B：x²+y²=(x+y)²-2xy=4-2xy≥2。C：1/x+1/y=(x+y)/(xy)=2/xy≥2。D：因 x>0，y>0 且 x+y=2，故二者都严格落在 (0,2) 内，因此 |x-y|<2。四项都成立。',
      tag:'均值不等式·高频综合' },

    { id:'math_q436p6_10401', manualId:'math_m4', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·联考改编）已知函数 f(x)=|x-1|+|x+1|。则 f(x) 的最小值为',
      options:['A. 0','B. 1','C. 2','D. 4'],
      answer:'C',
      explain:'数轴上看，点 x 到 -1 与 1 的距离和。当 x∈[-1,1] 时，|x-1|+|x+1|=(1-x)+(x+1)=2，为常数；在区间外更大。故最小值为 2。选 C。',
      tag:'绝对值函数·最值' },

    { id:'math_q436p6_10501', manualId:'math_m5', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·名校模拟）设 a=ln2，b=2^0.3，c=e^0.3，则 a，b，c 的大小关系是',
      options:['A. a<b<c','B. a<c<b','C. b<a<c','D. c<a<b'],
      answer:'A',
      explain:'a=ln2≈0.693。b=2^0.3=e^{0.3ln2}≈e^{0.2079}≈1.231。c=e^0.3≈1.350。故 a<b<c。选 A。',
      tag:'指数对数比较' },

    { id:'math_q436p6_10601', manualId:'math_m6', type:'calc', difficulty:'hard', gaokao:true,
      q:'（新高考一卷风格）已知函数 f(x)=x^3-3x+1。求：(1) f(x) 的单调区间；(2) f(x) 的极值；(3) 判断方程 f(x)=0 的实根个数。',
      answer:'(1) (-∞,-1)增，(-1,1)减，(1,+∞)增；(2) 极大值3，极小值-1；(3) 3个实根',
      explain:'f\'(x)=3x²-3=3(x-1)(x+1)。故在 (-∞,-1) 与 (1,+∞) 上导数为正，在 (-1,1) 上导数为负，所以先增后减再增。f(-1)=(-1)^3-3(-1)+1=3，为极大值；f(1)=1-3+1=-1，为极小值。又因三次函数首项系数为正，x→-∞ 时 f→-∞，x→+∞ 时 f→+∞，且极大值>0、极小值<0，所以图像与 x 轴有 3 个交点，即 3 个实根。',
      tag:'函数单调性与零点' },

    { id:'math_q436p6_10801', manualId:'math_m8', type:'single', difficulty:'normal', gaokao:true,
      q:'已知函数 y=2sin(ωx+φ)（ω>0）的部分图像如图所示：' + svg(320,120,'<line x1="20" y1="60" x2="300" y2="60" stroke="#666"/><line x1="40" y1="15" x2="40" y2="105" stroke="#666"/><path d="M40 60 C60 20, 80 20, 100 60 S140 100, 160 60 S220 20, 280 60" fill="none" stroke="#1e6cff" stroke-width="3"/><circle cx="40" cy="60" r="3" fill="#c24"/><circle cx="100" cy="60" r="3" fill="#c24"/><circle cx="160" cy="60" r="3" fill="#c24"/><text x="96" y="78" font-size="12">π/2</text><text x="156" y="78" font-size="12">π</text><text x="8" y="24" font-size="12">y</text><text x="292" y="76" font-size="12">x</text>') + '若图中相邻两个零点的距离为 π/2，且最大值为 2，则 ω 的值为',
      options:['A. 1','B. 2','C. 3','D. 4'],
      answer:'B',
      explain:'对 y=2sin(ωx+φ)，相邻零点间距为 π/ω。题给间距为 π/2，所以 π/ω=π/2，得 ω=2。最大值已经说明振幅为 2，与 ω 无关。选 B。',
      tag:'三角函数图像·带图' },

    { id:'math_q436p6_11001', manualId:'math_m10', type:'calc', difficulty:'hard', gaokao:true,
      q:'在 △ABC 中，角 A，B，C 所对边分别为 a，b，c。已知 a=2，b=2，C=60°。求 c 及 △ABC 的面积。',
      answer:'c=2；面积为√3',
      explain:'由余弦定理 c²=a²+b²-2abcosC=4+4-2·2·2·1/2=4，所以 c=2。面积 S=1/2·ab·sinC=1/2·2·2·√3/2=√3。',
      tag:'余弦定理·面积' },

    { id:'math_q436p6_11101', manualId:'math_m11', type:'single', difficulty:'normal', gaokao:true,
      q:'已知向量 a=(1,2)，b=(m,1)。若 a∥b，则 m=',
      options:['A. 1/2','B. 2','C. -1/2','D. -2'],
      answer:'A',
      explain:'向量平行对应坐标成比例：m/1=1/2，故 m=1/2。也可用行列式 1·1-2m=0，得 m=1/2。选 A。',
      tag:'向量平行条件' },

    { id:'math_q436p6_11201', manualId:'math_m12', type:'single', difficulty:'normal', gaokao:true,
      q:'复数 z=(2-i)/(1+i) 在复平面内对应的点位于',
      options:['A. 第一象限','B. 第二象限','C. 第三象限','D. 第四象限'],
      answer:'D',
      explain:'z=(2-i)(1-i)/(1+i)(1-i)=(2-2i-i+i²)/2=(1-3i)/2=1/2-3i/2。实部>0，虚部<0，在第四象限。选 D。',
      tag:'复数几何意义' },

    { id:'math_q436p6_11401', manualId:'math_m14', type:'single', difficulty:'hard', gaokao:true,
      q:'如图，正方体 ABCD-A₁B₁C₁D₁ 的棱长为 1：' + svg(240,180,'<polygon points="50,120 120,120 170,90 100,90" fill="none" stroke="#444"/><polygon points="50,60 120,60 170,30 100,30" fill="none" stroke="#444"/><line x1="50" y1="120" x2="50" y2="60" stroke="#444"/><line x1="120" y1="120" x2="120" y2="60" stroke="#444"/><line x1="170" y1="90" x2="170" y2="30" stroke="#444"/><line x1="100" y1="90" x2="100" y2="30" stroke="#444"/><text x="42" y="132" font-size="12">A</text><text x="120" y="132" font-size="12">B</text><text x="172" y="94" font-size="12">C</text><text x="92" y="96" font-size="12">D</text><text x="38" y="58" font-size="12">A₁</text><text x="120" y="58" font-size="12">B₁</text><text x="172" y="30" font-size="12">C₁</text><text x="92" y="28" font-size="12">D₁</text>') + '则直线 AC₁ 与平面 ABB₁A₁ 所成角的正弦值为',
      options:['A. 1/√3','B. √2/√3','C. 1/2','D. √3/2'],
      answer:'A',
      explain:'取坐标 A(0,0,0)，B(1,0,0)，D(0,1,0)，A₁(0,0,1)，则 C₁(1,1,1)。直线 AC₁ 的方向向量 v=(1,1,1)。平面 ABB₁A₁ 为 y=0，其法向量 n=(0,1,0)。线面角 α 满足 sinα=|v·n|/(|v||n|)=1/√3。故所求为 1/√3。选 A。',
      tag:'线面角·正方体带图' },

    { id:'math_q436p6_11501', manualId:'math_m15', type:'single', difficulty:'normal', gaokao:true,
      q:'已知圆 C:(x-1)^2+(y+2)^2=4，则圆心 C 到直线 3x+4y+2=0 的距离为',
      options:['A. 1/5','B. 2/5','C. 3/5','D. 4/5'],
      answer:'C',
      explain:'圆心为 (1,-2)。点到直线距离 d=|3·1+4·(-2)+2|/√(3²+4²)=|3-8+2|/5=3/5。选 C。',
      tag:'点到直线距离' },

    { id:'math_q436p6_11601', manualId:'math_m16', type:'calc', difficulty:'hard', gaokao:true,
      q:'已知椭圆 E: x²/9+y²/5=1 的左、右焦点分别为 F₁，F₂。求： (1) 焦距；(2) 过 F₂ 且垂直于 x 轴的直线与椭圆交于 A，B，则 |AB| 为多少。',
      answer:'(1) 2√4=4；(2) 10/3',
      explain:'椭圆中 a²=9，b²=5，所以 c²=a²-b²=4，c=2，焦距为 2c=4。(2) 右焦点 F₂(2,0)，过 F₂ 且垂直 x 轴的直线为 x=2。代入椭圆：4/9+y²/5=1，得 y²/5=5/9，y²=25/9，y=±5/3，因此 |AB|=10/3。',
      tag:'椭圆通径型' },

    { id:'math_q436p6_11701', manualId:'math_m17', type:'fill', difficulty:'normal', gaokao:true,
      q:'等差数列 {a_n} 中，a_1=3，公差 d=2，则前 10 项和 S₁₀=____。',
      answer:'120',
      explain:'a₁₀=a₁+9d=3+18=21。S₁₀=10(a₁+a₁₀)/2=10(3+21)/2=120。',
      tag:'等差数列前n项和' },

    { id:'math_q436p6_11801', manualId:'math_m18', type:'calc', difficulty:'hard', gaokao:true,
      q:'数列 {a_n} 满足 a₁=1，a_{n+1}=2a_n+1。求 a_n 的通项公式。',
      answer:'a_n=2^n-1',
      explain:'设 b_n=a_n+1，则 b_{n+1}=a_{n+1}+1=2a_n+2=2(a_n+1)=2b_n，且 b₁=2。故 {b_n} 是首项为 2、公比为 2 的等比数列，b_n=2^n。于是 a_n=b_n-1=2^n-1。',
      tag:'递推转化·数列综合' },

    { id:'math_q436p6_11901', manualId:'math_m19', type:'single', difficulty:'normal', gaokao:true,
      q:'函数 f(x)=x²e^x 在 x=0 处的导数值为',
      options:['A. 0','B. 1','C. 2','D. e'],
      answer:'A',
      explain:'f\'(x)=2xe^x+x²e^x=e^x(2x+x²)。代入 x=0，得 f\'(0)=1·0=0。选 A。',
      tag:'导数运算' },

    { id:'math_q436p6_12001', manualId:'math_m20', type:'calc', difficulty:'hard', gaokao:true,
      q:'求函数 f(x)=x+1/x（x>0）的最小值，并求取得最小值时 x 的值。',
      answer:'最小值2，在 x=1 处取得',
      explain:'方法一：均值不等式，x+1/x≥2√(x·1/x)=2，当且仅当 x=1 时取等号。方法二：f\'(x)=1-1/x²=(x²-1)/x²，知在 (0,1) 上减，在 (1,+∞) 上增，所以 x=1 处最小，最小值 2。',
      tag:'导数与最值' },

    { id:'math_q436p6_12101', manualId:'math_m21', type:'single', difficulty:'normal', gaokao:true,
      q:'甲、乙两人独立解答一道题，甲做对的概率为 0.8，乙做对的概率为 0.7，则恰有一人做对的概率为',
      options:['A. 0.10','B. 0.24','C. 0.38','D. 0.56'],
      answer:'C',
      explain:'恰有一人做对 = 甲对乙错 + 甲错乙对 = 0.8×0.3 + 0.2×0.7 = 0.24+0.14 = 0.38。选 C。',
      tag:'独立事件概率' },

    { id:'math_q436p6_12201', manualId:'math_m22', type:'multi', difficulty:'hard', gaokao:true,
      q:'设随机变量 X~B(4,1/2)，则下列结论正确的是',
      options:['A. E(X)=2','B. D(X)=1','C. P(X=2)=3/8','D. P(X≥1)=15/16'],
      answer:['A','B','C','D'],
      explain:'二项分布 B(n,p)：E(X)=np=4×1/2=2；D(X)=np(1-p)=4×1/2×1/2=1。P(X=2)=C₄²(1/2)^4=6/16=3/8。P(X≥1)=1-P(X=0)=1-(1/2)^4=15/16。全对。',
      tag:'二项分布' },

    { id:'math_q436p6_12301', manualId:'math_m23', type:'single', difficulty:'normal', gaokao:true,
      q:'某组数据为 2，4，4，6，8，则这组数据的平均数为',
      options:['A. 4','B. 4.8','C. 5','D. 6'],
      answer:'B',
      explain:'平均数 = (2+4+4+6+8)/5 = 24/5 = 4.8。选 B。',
      tag:'统计基础' },

    { id:'math_q436p6_12401', manualId:'math_m24', type:'single', difficulty:'normal', gaokao:true,
      q:'从 6 本不同的书中任选 3 本，选法种数为',
      options:['A. 18','B. 20','C. 24','D. 120'],
      answer:'B',
      explain:'这是组合问题，选法为 C₆³=6×5×4/(3×2×1)=20。选 B。',
      tag:'组合计数' },

    { id:'math_q436p6_12501', manualId:'math_m25', type:'calc', difficulty:'hard', gaokao:true,
      q:'已知双曲线 x²/9-y²/16=1 的离心率 e 为多少？焦点坐标是什么？',
      answer:'e=5/3，焦点为(±5,0)',
      explain:'对双曲线 x²/a²-y²/b²=1，有 a²=9，b²=16，c²=a²+b²=25，c=5。离心率 e=c/a=5/3。焦点在 x 轴上，所以坐标为 (±5,0)。',
      tag:'双曲线性质' },

    { id:'math_q436p6_12601', manualId:'math_m26', type:'calc', difficulty:'hard', gaokao:true,
      q:'设函数 f(x)=ln x - x + 2。求 f(x) 的最大值。',
      answer:'最大值1，在 x=1 处取得',
      explain:'定义域 x>0。f\'(x)=1/x-1=(1-x)/x。当 0<x<1 时，f\'>0；x>1 时，f\'<0。所以 x=1 处取最大值。f(1)=ln1-1+2=1。',
      tag:'导数应用·最值' },

    { id:'math_q436p6_12701', manualId:'math_m27', type:'calc', difficulty:'hard', gaokao:true,
      q:'数列 {a_n} 满足 a_n>0，且 S_n=3a_n-1（其中 S_n 为前 n 项和）。求 {a_n} 的通项公式。',
      answer:'a_n=(1/2)(3/2)^{n-1}',
      explain:'由 S_n=3a_n-1，S_{n-1}=3a_{n-1}-1，相减得 a_n=S_n-S_{n-1}=3a_n-3a_{n-1}，移项得 2a_n=3a_{n-1}，即 a_n=(3/2)a_{n-1}。又由 n=1 时，S_1=a_1=3a_1-1，解得 a_1=1/2。故 {a_n} 是首项为 1/2、公比为 3/2 的等比数列，所以 a_n=(1/2)(3/2)^{n-1}。',
      tag:'由Sn求an·高阶应用' },

    { id:'math_q436p6_12801', manualId:'math_m28', type:'single', difficulty:'hard', gaokao:true,
      q:'棱长为 2 的正四面体的外接球半径为',
      options:['A. √6/2','B. √6/4','C. √3/2','D. √2'],
      answer:'A',
      explain:'正四面体棱长为 a 时，外接球半径 R=a√6/4。代入 a=2，得 R=2√6/4=√6/2。选 A。',
      tag:'空间几何综合' },

    { id:'math_q436p6_12901', manualId:'math_m29', type:'calc', difficulty:'hard', gaokao:true,
      q:'甲乙两台机器独立生产零件，甲机次品率 2%，乙机次品率 3%。现各抽取 1 件。求： (1) 至少有 1 件次品的概率；(2) 恰有 1 件次品的概率。',
      answer:'(1) 0.0494；(2) 0.0488',
      explain:'(1) 至少 1 件次品 = 1-两件都合格 = 1-0.98×0.97 = 1-0.9506 = 0.0494。(2) 恰有 1 件次品 = 甲次乙好 + 甲好乙次 = 0.02×0.97 + 0.98×0.03 = 0.0194+0.0294 = 0.0488。',
      tag:'概率统计综合' },

    { id:'math_q436p6_13001', manualId:'math_m30', type:'calc', difficulty:'boss', gaokao:true,
      q:'设函数 f(x)=ln x-ax+1（x>0）。讨论：方程 f(x)=0 在 x>0 上有两个不同实根时，实数 a 的取值范围。',
      answer:'0<a<1',
      explain:'f\'(x)=1/x-a。若方程有两个不同实根，则函数应先增后减，因此必须 a>0。由 f\'(x)=0 得极值点 x=1/a。此时极大值为 f(1/a)=ln(1/a)-a·(1/a)+1=-ln a。要有两个不同实根，必须极大值大于 0，即 -ln a>0，所以 0<a<1。又当 x→0^+ 时，f(x)→-∞；x→+∞ 时，f(x)→-∞，故在 0<a<1 时图像先上升后下降并穿过 x 轴两次。',
      tag:'导数压轴·参数讨论' },
  ];

  function mount() {
    if (!global.MATH_BANK) global.MATH_BANK = [];
    const existing = new Set(global.MATH_BANK.map(q => q.id));
    let n = 0;
    ALL_QS.forEach(q => { if (!existing.has(q.id)) { global.MATH_BANK.push(q); n++; } });
    console.log('[数学·v4.3.6·精选真题 Part 6] 新增', n, '题, 主库题数:', global.MATH_BANK.length);
    const stat = {};
    ALL_QS.forEach(q => { stat[q.manualId] = (stat[q.manualId]||0)+1; });
    console.log('[数学·v4.3.6 P6] 章节分布：', stat);
  }

  if (typeof window !== 'undefined' && typeof document !== 'undefined' && document.readyState !== 'loading') mount();
  else if (typeof document !== 'undefined') document.addEventListener('DOMContentLoaded', mount);

  global.MATH_V436_QUALITY_P6 = { ALL_QS, mount };
})(typeof window !== 'undefined' ? window : this);
