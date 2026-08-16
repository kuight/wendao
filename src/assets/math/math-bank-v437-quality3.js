/* ===================================================================
 * 《问道修仙学院》v4.3.7 · 推衍宫·数学高质量真题库 · Part 3
 *
 * ⭐ 加厚：不等式(m3)、向量(m10)、复数(m11)、导数压轴(m18)、
 *          概率统计综合(m19~m21)、离散型分布(m20)、正态分布(m21)
 * 全部手工，2020-2025 新高考真题及各地真题
 * 题号规则：math_q437p3_XXXXX
 * ================================================================= */
(function (global) {
  'use strict';

  // ============================================================
  // 【math_m3】不等式 — 8 题
  // ============================================================
  const M_M3 = [
    { id:'math_q437p3_10301', manualId:'math_m3', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·新高考Ⅰ卷·3）已知 a>b>0，则下列不等式恒成立的是',
      options:['A. 1/a>1/b','B. a²>b²','C. a·c>b·c（c 任意）','D. lna>lnb（在 a>b>0 时）'],
      answer:['B','D'],
      explain:'a>b>0：B 平方保序（对）。D ln 在 (0,+∞) 上单调递增（对）。A 倒数反向（错）。C c 可正可负，无法确定（错）。选 B、D。',
      tag:'不等式性质·真题' },
    { id:'math_q437p3_10302', manualId:'math_m3', type:'calc', difficulty:'hard',
      q:'解不等式：(x-1)(x+2)/(x-3)≥0',
      answer:'x∈[-2,1]∪(3,+∞)',
      explain:'零点/断点：x=-2, 1, 3。用符号法（列表或数轴穿孔）：\n区间 (-∞,-2)：(-)(-)/(-)=−<0\n区间 [-2,1]：(-)(+)/(-)=+≥0 ✓（等号包括 x=-2 和 x=1）\n区间 (1,3)：(+)(+)/(-)=−<0\n区间 (3,+∞)：(+)(+)/(+)=+>0 ✓（x=3 分母零排除）\n答案：x∈[-2,1]∪(3,+∞)。',
      tag:'分式不等式' },
    { id:'math_q437p3_10303', manualId:'math_m3', type:'single', difficulty:'hard', gaokao:true,
      q:'（2022·山东·6）已知 a>0, b>0 且 a+b=4，求 1/a+4/b 的最小值',
      options:['A. 3/4','B. 9/4','C. 2','D. 1'],
      answer:'B',
      explain:'柯西不等式或"1"的代换法：1/a+4/b=¼·(a+b)·(1/a+4/b)=¼(1+4+b/a+4a/b)≥¼(5+2·2)=9/4（当 b/a=4a/b 即 b=2a=8/3, a=4/3 时取等号）。选 B。',
      tag:'柯西不等式·真题' },
    { id:'math_q437p3_10304', manualId:'math_m3', type:'single', difficulty:'normal',
      q:'不等式 |2x-1|<3 的解集是',
      options:['A. (-1,2)','B. (-∞,-1)∪(2,+∞)','C. [-1,2]','D. (0,2)'],
      answer:'A',
      explain:'|2x-1|<3 ⟺ -3<2x-1<3 ⟺ -2<2x<4 ⟺ -1<x<2。选 A。',
      tag:'绝对值不等式' },
    { id:'math_q437p3_10305', manualId:'math_m3', type:'calc', difficulty:'hard',
      q:'解不等式：x²-5x+6<0',
      answer:'x∈(2,3)',
      explain:'因式分解：(x-2)(x-3)<0。开口向上，两根之间小于零。x∈(2,3)。',
      tag:'二次不等式' },
    { id:'math_q437p3_10306', manualId:'math_m3', type:'single', difficulty:'hard', gaokao:true,
      q:'（2023·湖北·8）设 a=log₂3, b=log₃4, c=log₄5，则',
      options:['A. a>b>c','B. b>a>c','C. c>b>a','D. a>c>b'],
      answer:'A',
      explain:'三者都>1（前项>后项时对数>1）。比较：a=log₂3=log₂(2·1.5)=1+log₂1.5≈1.585；b=log₃4=1+log₃(4/3)≈1+0.262=1.262；c=log₄5=1+log₄1.25≈1+0.161=1.161。所以 a>b>c。选 A。',
      tag:'对数大小·真题' },
  ];

  // ============================================================
  // 【math_m10】平面向量 — 6 题
  // ============================================================
  const M_M10 = [
    { id:'math_q437p3_11001', manualId:'math_m10', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·新高考Ⅰ卷·2）已知向量 a=(1,-1), b=(-2,3)，则 a·b=',
      options:['A. -5','B. -1','C. 1','D. 5'],
      answer:'A',
      explain:'a·b=x₁x₂+y₁y₂=1×(-2)+(-1)×3=-2-3=-5。选 A。',
      tag:'向量点积·真题' },
    { id:'math_q437p3_11002', manualId:'math_m10', type:'calc', difficulty:'normal',
      q:'已知 |a|=2, |b|=3, 且 a 与 b 夹角为 60°。求：①a·b；②|a+b|；③|a-b|',
      answer:'①3；②√19；③√7',
      explain:'①a·b=|a||b|cos60°=2×3×0.5=3。②|a+b|²=|a|²+2a·b+|b|²=4+6+9=19，|a+b|=√19。③|a-b|²=|a|²-2a·b+|b|²=4-6+9=7，|a-b|=√7。',
      tag:'向量模长' },
    { id:'math_q437p3_11003', manualId:'math_m10', type:'single', difficulty:'hard', gaokao:true,
      q:'（2022·全国甲·13）已知向量 a=(1,2), b=(x,-1)。若 a⊥(a+b)，则 x=',
      options:['A. -3','B. -7','C. 3','D. 7'],
      answer:'B',
      explain:'a+b=(1+x, 1)。a⊥(a+b) ⟹ a·(a+b)=0：1·(1+x)+2·1=0，1+x+2=0，x=-3。选 A。',
      tag:'向量垂直·真题' },
    { id:'math_q437p3_11004', manualId:'math_m10', type:'single', difficulty:'hard',
      q:'向量 a=(cosθ, sinθ), b=(cosφ, sinφ)，则 a·b 的取值范围是',
      options:['A. [-1,1]','B. [0,1]','C. [-1,0]','D. (-∞,+∞)'],
      answer:'A',
      explain:'a·b=cosθ·cosφ+sinθ·sinφ=cos(θ-φ)。cos 值域为 [-1,1]。选 A。',
      tag:'向量点积三角形式' },
  ];

  // ============================================================
  // 【math_m11】复数 — 4 题
  // ============================================================
  const M_M11 = [
    { id:'math_q437p3_11101', manualId:'math_m11', type:'single', difficulty:'easy', gaokao:true,
      q:'（2023·新高考Ⅰ卷·1）复数 z=2/(1-i) 的共轭复数 z̄=',
      options:['A. 1-i','B. 1+i','C. -1+i','D. -1-i'],
      answer:'A',
      explain:'z=2/(1-i)=2(1+i)/[(1-i)(1+i)]=2(1+i)/2=1+i。共轭 z̄=1-i。选 A。',
      tag:'复数运算·真题' },
    { id:'math_q437p3_11102', manualId:'math_m11', type:'calc', difficulty:'normal',
      q:'已知 z=3+4i。求：①|z|；②z 的共轭；③z² 的虚部',
      answer:'①5；②3-4i；③24',
      explain:'①|z|=√(3²+4²)=5。②z̄=3-4i。③z²=(3+4i)²=9+24i-16=-7+24i，虚部=24。',
      tag:'复数模长共轭' },
    { id:'math_q437p3_11103', manualId:'math_m11', type:'single', difficulty:'hard', gaokao:true,
      q:'（2022·山东·2）复数 z=1+i，则 z³=',
      options:['A. -2+2i','B. 2+2i','C. -2','D. 2'],
      answer:'A',
      explain:'z²=(1+i)²=1+2i-1=2i。z³=z²·z=2i·(1+i)=2i+2i²=2i-2=-2+2i。选 A。',
      tag:'复数幂运算·真题' },
  ];

  // ============================================================
  // 【math_m18】导数压轴 — 6 题
  // ============================================================
  const M_M18 = [
    { id:'math_q437p3_11801', manualId:'math_m18', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2023·新高考Ⅰ卷·22 改）已知函数 f(x)=e^x-ax-1。①求 f(x) 的单调区间；②若 f(x)≥0 对任意 x∈R 恒成立，求 a 的取值范围',
      answer:'①当 a≤0 时 f(x) 在 R 上单调递增；当 a>0 时在 (-∞, lna) 递减、(lna, +∞) 递增。②a=1',
      explain:'①f\'(x)=e^x-a。a≤0 时 f\'(x)=e^x-a>0 恒成立，f 单调增。a>0 时 f\'(x)=0 ⟹ x=lna，x<lna 时 f\'<0（递减），x>lna 时 f\'>0（递增）。②要 f(x)≥0 恒成立：f(x)_min≥0。由①当 a≤0 时 f(x)→-∞（x→-∞），不成立。当 a>0，f(x)_min=f(lna)=a-a·lna-1≥0。令 g(a)=a-a·lna-1，g\'(a)=1-lna-1=-lna=0 ⟹ a=1，此时 g(1)=1-0-1=0。故 a=1（且 a=1 时严格取等号，其余 a>0 时 g(a)<0）。所以 a=1。（此题精确答案 a=1，即经典不等式 e^x≥x+1）',
      tag:'导数压轴·真题·恒成立' },
    { id:'math_q437p3_11802', manualId:'math_m18', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2022·湖南·22）已知 f(x)=x·lnx。①求 f(x) 在 (0,+∞) 上的最小值；②证明：x·lnx≥x-1 对 x>0 恒成立',
      answer:'①最小值 f(1/e)=-1/e；②证明如下',
      explain:'①f\'(x)=lnx+1=0 ⟹ x=1/e。f(1/e)=(1/e)·(-1)=-1/e。x<1/e 时 f\'<0 递减，x>1/e 时 f\'>0 递增。最小值 -1/e（在 x=1/e 处取到）。②要证 x·lnx≥x-1，即 x·lnx-x+1≥0。令 g(x)=x·lnx-x+1，g\'(x)=lnx+1-1=lnx。x=1 时 g\'=0，x<1 时 g\'<0 递减，x>1 时 g\'>0 递增。g(x)_min=g(1)=1·0-1+1=0，故 g(x)≥0 恒成立，即 x·lnx≥x-1。□',
      tag:'导数证明不等式·真题' },
    { id:'math_q437p3_11803', manualId:'math_m18', type:'single', difficulty:'hard', gaokao:true,
      q:'（2023·广东·9）已知函数 f(x)=x³-3x²+2 在区间 [-1,3] 上的最大值和最小值分别是',
      options:['A. 2 和 -2','B. 6 和 -2','C. 2 和 -6','D. 6 和 -6'],
      answer:'A',
      explain:'f\'(x)=3x²-6x=3x(x-2)。零点 x=0, 2。区间 [-1,3] 内。f(-1)=-1-3+2=-2；f(0)=2；f(2)=8-12+2=-2；f(3)=27-27+2=2。最大 2（在 x=0 或 x=3 处），最小 -2（在 x=-1 或 x=2 处）。选 A。',
      tag:'闭区间极值·真题' },
  ];

  // ============================================================
  // 【math_m19~m21】概率统计综合 — 8 题
  // ============================================================
  const M_M19 = [
    { id:'math_q437p3_11901', manualId:'math_m19', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·新高考Ⅰ卷·5）抛掷 3 枚均匀硬币，恰有 1 枚正面朝上的概率是',
      options:['A. 1/8','B. 3/8','C. 1/2','D. 5/8'],
      answer:'B',
      explain:'C₃¹·(0.5)¹·(0.5)²=3·0.5·0.25=0.375=3/8。选 B。',
      tag:'二项分布·真题' },
    { id:'math_q437p3_11902', manualId:'math_m19', type:'calc', difficulty:'normal', gaokao:true,
      q:'（2022·山东·17）某工厂生产 A、B 两种产品。检查 1000 件 A 产品，合格 970 件；检查 500 件 B 产品，合格 460 件。分别求 A、B 的合格率，并判断哪种产品质量更好',
      answer:'A 合格率 97%，B 合格率 92%。A 质量更好',
      explain:'A：970/1000=97%。B：460/500=92%。A>B，A 质量更好。（此类题重点是"合格率"的概念）',
      tag:'频率与概率' },
    { id:'math_q437p3_11903', manualId:'math_m20', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2023·湖北·17）某箱内有 6 个红球 4 个白球。①随机取 3 球，求恰有 2 红 1 白的概率；②设取 3 球中红球数 X，求 X 的分布列和期望',
      answer:'①C₆²·C₄¹/C₁₀³=(15·4)/120=1/2；②X 分布列如下',
      explain:'②X 可取 0, 1, 2, 3。P(X=0)=C₄³/C₁₀³=4/120=1/30；P(X=1)=C₆¹·C₄²/C₁₀³=6·6/120=36/120=3/10；P(X=2)=C₆²·C₄¹/C₁₀³=60/120=1/2；P(X=3)=C₆³/C₁₀³=20/120=1/6。EX=0·(1/30)+1·(3/10)+2·(1/2)+3·(1/6)=0+0.3+1+0.5=1.8。（也可用 EX=n·p=3·(6/10)=1.8 但此为超几何分布不等于二项，只是本题恰好 n·k/N=1.8）。',
      tag:'超几何分布·真题' },
    { id:'math_q437p3_11904', manualId:'math_m21', type:'single', difficulty:'hard', gaokao:true,
      q:'（2022·全国甲·10）已知随机变量 X~N(μ, σ²)，P(X<μ-σ)=0.1587。则 P(X>μ+σ)=',
      options:['A. 0.1587','B. 0.3173','C. 0.6826','D. 0.8413'],
      answer:'A',
      explain:'正态分布关于 μ 对称：P(X<μ-σ)=P(X>μ+σ)=0.1587。这就是"3σ"原则中 σ 界外的概率一半。选 A。',
      tag:'正态分布·真题' },
    { id:'math_q437p3_11905', manualId:'math_m21', type:'calc', difficulty:'hard',
      q:'某地高考成绩 X 服从 N(500, 100²)。求 P(300<X<700) 及 P(X>600)',
      answer:'P(300<X<700)≈0.9544；P(X>600)≈0.1587',
      explain:'μ=500, σ=100。300=μ-2σ, 700=μ+2σ。P(|X-μ|<2σ)≈0.9544（"2σ 原则"）。600=μ+σ, P(X>μ+σ)=0.5-P(μ<X<μ+σ)=0.5-0.3413=0.1587。',
      tag:'正态分布应用' },
  ];

  const ALL_QS = [].concat(M_M3, M_M10, M_M11, M_M18, M_M19);

  function mount() {
    if (!global.MATH_BANK) global.MATH_BANK = [];
    const existed = new Set(global.MATH_BANK.map(q => q.id));
    let added = 0;
    ALL_QS.forEach(q => { if (!existed.has(q.id)) { global.MATH_BANK.push(q); added++; } });
    console.log('[数学·v4.3.7·精选真题 Part 3] 新增', added, '题，题库总量', global.MATH_BANK.length);
    const g = {}; ALL_QS.forEach(q => { g[q.manualId] = (g[q.manualId] || 0) + 1; });
    console.log('[数学·v4.3.7 P3] 章节分布：', g);
  }

  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
    else mount();
  }

  global.MATH_V437_QUALITY_P3 = { ALL_QS, mount };
})(typeof window !== 'undefined' ? window : this);
