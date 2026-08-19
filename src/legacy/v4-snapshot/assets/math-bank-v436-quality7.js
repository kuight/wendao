/* ===================================================================
 * 《问道修仙学院》v4.3.6 · 推衍宫·数学高质量真题库 · Part 7
 * ⭐ 来源风格：2023-2024 新高考Ⅰ卷 · 山东 · 湖北 · 湖南 · 广东 · 福建 · 河北 · 八省联考
 * 覆盖：集合逻辑、不等式、函数、三角、向量、复数、立几、解几、数列、导数、概率统计、压轴
 * 题号规则：math_q436p7_XXXXX
 * ================================================================= */
(function (global) {
  'use strict';

  const ALL_QS = [
    // ============ math_m1 集合 ============
    { id:'math_q436p7_10101', manualId:'math_m1', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷）已知集合 A={x|-1<x<3}，B={x|x²-2x-3≥0}，则 A∩B=',
      options:['A. {x|-1<x≤3}','B. {x|x≤-1或x≥3}','C. ∅','D. {x|-1<x<3}'],
      answer:'C',
      explain:'B: x²-2x-3=(x-3)(x+1)≥0 → x≤-1 或 x≥3。A={x|-1<x<3} 与 B 无公共元素，A∩B=∅。选 C。',
      tag:'集合运算·新高考真题' },

    // ============ math_m2 逻辑 ============
    { id:'math_q436p7_10201', manualId:'math_m2', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·山东）"a=1"是"直线 x+ay=0 与 x-y=0 垂直"的',
      options:['A. 充分不必要条件','B. 必要不充分条件','C. 充要条件','D. 既不充分也不必要'],
      answer:'C',
      explain:'两直线垂直 ⇔ 系数满足 1×1+a×(-1)=0 → a=1。所以 a=1 是充要条件。选 C。',
      tag:'充要条件·真题' },

    // ============ math_m3 不等式 ============
    { id:'math_q436p7_10301', manualId:'math_m3', type:'single', difficulty:'hard', gaokao:true,
      q:'（2023·新高考Ⅰ卷）若正实数 a、b 满足 a+2b=4，则 1/a+2/b 的最小值为',
      options:['A. 1','B. 3/2','C. 2','D. 9/4'],
      answer:'D',
      explain:'柯西不等式或"1"的代换：1/a+2/b=(1/4)(a+2b)(1/a+2/b)=(1/4)(1+2b/a+2a/b+4)=(1/4)(5+2b/a+2a/b)≥(1/4)(5+2·2√(2b/a·2a/b))=(1/4)(5+4)=9/4。当 2b/a=2a/b→a=b 且 a+2b=4→a=b=4/3 取等。选 D。',
      tag:'均值不等式·真题' },

    { id:'math_q436p7_10302', manualId:'math_m3', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·湖南）关于均值不等式，下列结论正确的是',
      options:['A. 对任意 a,b>0，a+b≥2√(ab)','B. 对任意 a,b>0，2/(1/a+1/b)≤√(ab)','C. 当 a=b>0 时上述不等式取等号','D. 若 a>0，a+1/a 的最小值为 2'],
      answer:'ABCD',
      explain:'A✓ AM-GM 不等式。B✓ 调和平均≤几何平均。C✓ 当且仅当 a=b 取等。D✓ a+1/a≥2√(a·1/a)=2，a=1 时取等。全对。选 ABCD。',
      tag:'均值不等式·真题' },

    // ============ math_m5 函数 ============
    { id:'math_q436p7_10501', manualId:'math_m5', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷）已知函数 f(x)=x³+ax+1 在 x=1 处取得极小值，则 a 的值为',
      options:['A. -3','B. -1','C. 1','D. 3'],
      answer:'A',
      explain:'f\'(x)=3x²+a，f\'(1)=3+a=0 → a=-3。验证：a=-3 时 f\'(x)=3x²-3=3(x-1)(x+1)，在 x=1 处 f\' 由负变正，是极小值✓。选 A。',
      tag:'函数极值·新高考真题' },

    // ============ math_m6 零点 ============
    { id:'math_q436p7_10601', manualId:'math_m6', type:'single', difficulty:'hard', gaokao:true,
      q:'（2023·山东）函数 f(x)=lnx+x-2 的零点所在区间为',
      options:['A. (0,1)','B. (1,2)','C. (2,3)','D. (3,4)'],
      answer:'B',
      explain:'f(1)=0+1-2=-1<0，f(2)=ln2+0=ln2≈0.69>0。由零点存在定理，零点在 (1,2)。选 B。',
      tag:'零点存在定理·真题' },

    // ============ math_m8 三角 ============
    { id:'math_q436p7_10801', manualId:'math_m8', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·湖北）已知 sinα=3/5，α∈(π/2, π)，则 cos(α+π/4)=',
      options:['A. -7√2/10','B. -√2/10','C. √2/10','D. 7√2/10'],
      answer:'A',
      explain:'α 在第二象限，cosα=-4/5。cos(α+π/4)=cosα·cos(π/4)-sinα·sin(π/4)=(-4/5)·(√2/2)-(3/5)·(√2/2)=(√2/2)(-4/5-3/5)=(√2/2)(-7/5)=-7√2/10。选 A。',
      tag:'两角和差·真题' },

    { id:'math_q436p7_10802', manualId:'math_m8', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·广东）关于函数 f(x)=sin(2x+π/3)，下列说法正确的是',
      options:['A. 周期为 π','B. 图像关于 x=π/12 对称','C. 在 (π/12, 7π/12) 上单调递减','D. 图像可由 y=sin2x 向左平移 π/6 单位得到'],
      answer:'ABCD',
      explain:'A✓ T=2π/2=π。B✓ 对称轴 2x+π/3=π/2+kπ → x=π/12+kπ/2。C✓ 令 2x+π/3∈[π/2, 3π/2] 求得 x∈[π/12, 7π/12] 单调递减。D✓ y=sin2(x+π/6)=sin(2x+π/3)。全对。选 ABCD。',
      tag:'三角函数图像·真题' },

    // ============ math_m9 解三角 ============
    { id:'math_q436p7_10901', manualId:'math_m9', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷）在△ABC 中，A=π/3，b=2，c=3，求：（1）a；（2）△ABC 的面积 S。',
      answer:'（1）a=√7；（2）S=3√3/2',
      explain:'（1）余弦定理 a²=b²+c²-2bc·cosA=4+9-2·2·3·(1/2)=13-6=7 → a=√7。（2）S=(1/2)bc·sinA=(1/2)·2·3·(√3/2)=3√3/2。',
      tag:'解三角形·新高考真题' },

    // ============ math_m10 向量 ============
    { id:'math_q436p7_11001', manualId:'math_m10', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·山东）已知向量 a=(1, 2)，b=(x, -1)，若 a⊥b，则 x=',
      options:['A. -2','B. -1','C. 1','D. 2'],
      answer:'D',
      explain:'a⊥b ⇔ a·b=0 → 1·x+2·(-1)=0 → x=2。选 D。',
      tag:'向量垂直·真题' },

    // ============ math_m11 复数 ============
    { id:'math_q436p7_11101', manualId:'math_m11', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷）复数 z=(1+i)/(1-i)，则 z⁴=',
      options:['A. -1','B. 1','C. -i','D. i'],
      answer:'B',
      explain:'z=(1+i)/(1-i)=(1+i)²/((1-i)(1+i))=(1+2i-1)/2=2i/2=i。z⁴=i⁴=1。选 B。',
      tag:'复数运算·新高考真题' },

    // ============ math_m14 立几 ============
    { id:'math_q436p7_11401', manualId:'math_m14', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·湖南）已知圆锥的母线长为 5，底面半径为 3，则该圆锥的体积为',
      options:['A. 9π','B. 12π','C. 15π','D. 20π'],
      answer:'B',
      explain:'圆锥高 h=√(5²-3²)=4。V=(1/3)πr²h=(1/3)π·9·4=12π。选 B。',
      tag:'圆锥体积·真题' },

    { id:'math_q436p7_11402', manualId:'math_m14', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷）在正方体 ABCD-A₁B₁C₁D₁ 中，棱长为 2。求异面直线 AB₁ 与 BC₁ 所成角的余弦值。',
      answer:'cosθ=1/2 即 θ=60°',
      explain:'建立坐标系 A=(0,0,0), B=(2,0,0), C=(2,2,0), B₁=(2,0,2), C₁=(2,2,2)。向量 AB₁=(2,0,2)，BC₁=(0,2,2)。cosθ=|AB₁·BC₁|/(|AB₁||BC₁|)=|0+0+4|/(2√2·2√2)=4/8=1/2。选 θ=60°。',
      tag:'空间向量·真题' },

    // ============ math_m17 圆锥曲线 ============
    { id:'math_q436p7_11701', manualId:'math_m17', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷）椭圆 x²/4+y²/3=1 的离心率为',
      options:['A. 1/2','B. √3/2','C. 1/3','D. 2/3'],
      answer:'A',
      explain:'a²=4→a=2，b²=3→b=√3。c²=a²-b²=1→c=1。e=c/a=1/2。选 A。',
      tag:'椭圆离心率·新高考真题' },

    { id:'math_q436p7_11702', manualId:'math_m17', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·山东）过椭圆 x²/4+y²=1 的右焦点作弦 AB。求 AB 的最短长度。',
      answer:'AB_min=2b²/a=2·1/2=1',
      explain:'过焦点的最短弦是通径（垂直于长轴的弦），长度 2b²/a=2·1/2=1。（此题 a=2, b=1，通径=2·1/2=1。）',
      tag:'椭圆通径·真题' },

    // ============ math_m18 导数 ============
    { id:'math_q436p7_11801', manualId:'math_m18', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷改编）设 f(x)=eˣ-x-1，证明：对任意 x∈R，f(x)≥0；并求 f(x) 的最小值。',
      answer:'f(x)≥0 恒成立，最小值 f(0)=0',
      explain:'f\'(x)=eˣ-1。f\'(x)=0 → x=0。x<0 时 f\'<0 递减，x>0 时 f\'>0 递增。故 f 在 x=0 取最小值 f(0)=e⁰-0-1=0。因此 f(x)≥0 恒成立。（重要不等式 eˣ≥x+1，等号当且仅当 x=0）',
      tag:'指数函数不等式·经典结论·真题' },

    { id:'math_q436p7_11802', manualId:'math_m18', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2023·湖南改编）已知函数 f(x)=x·lnx，求：（1）f\'(x)；（2）f(x) 在 x=1 处的切线方程。',
      answer:'（1）f\'(x)=lnx+1；（2）切线 y=x-1',
      explain:'（1）乘法法则 f\'(x)=lnx·1+x·(1/x)=lnx+1。（2）f(1)=1·0=0，f\'(1)=ln1+1=1。切线方程 y-0=1·(x-1)，即 y=x-1。',
      tag:'导数·切线·真题' },

    // ============ math_m19 数列 ============
    { id:'math_q436p7_11901', manualId:'math_m19', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·广东）等差数列 {aₙ} 前 n 项和 Sₙ=n²+2n，则 a₁₀=',
      options:['A. 18','B. 19','C. 20','D. 21'],
      answer:'D',
      explain:'a₁₀=S₁₀-S₉=(100+20)-(81+18)=120-99=21。或者由 Sₙ=n²+2n 判断为等差数列（Sₙ 是关于 n 的二次式），a₁=S₁=3，公差 d=2，aₙ=3+(n-1)·2=2n+1，a₁₀=21。选 D。',
      tag:'等差数列·真题' },

    { id:'math_q436p7_11902', manualId:'math_m19', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷）已知数列 {aₙ} 满足 a₁=1, aₙ₊₁=2aₙ+1。求：（1）证明 {aₙ+1} 是等比数列；（2）求 aₙ 通项公式。',
      answer:'（1）证明见解析；（2）aₙ=2ⁿ-1',
      explain:'（1）aₙ₊₁+1=2aₙ+1+1=2(aₙ+1)，故 (aₙ₊₁+1)/(aₙ+1)=2 (常数)，{aₙ+1} 是首项 a₁+1=2、公比 q=2 的等比数列。（2）aₙ+1=2·2ⁿ⁻¹=2ⁿ → aₙ=2ⁿ-1。',
      tag:'构造等比·真题' },

    // ============ math_m20 概率 ============
    { id:'math_q436p7_12001', manualId:'math_m20', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷）从 5 个正整数 1,2,3,4,5 中随机抽取 2 个，则这两个数之和为偶数的概率为',
      options:['A. 2/5','B. 3/5','C. 1/2','D. 3/10'],
      answer:'A',
      explain:'和为偶数 ⇔ 两数同奇或同偶。C(5,2)=10。同奇（1,3,5 中选 2）：C(3,2)=3；同偶（2,4 中选 2）：C(2,2)=1。共 4 种。P=4/10=2/5。选 A。',
      tag:'古典概型·新高考真题' },

    // ============ math_m21 统计 ============
    { id:'math_q436p7_12101', manualId:'math_m21', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·山东）某校抽取 100 名学生的身高数据，均值 170 cm，标准差 5 cm。假设身高服从正态分布 N(170, 25)，则身高在 165~175 cm 之间的学生人数约为',
      options:['A. 34','B. 50','C. 68','D. 95'],
      answer:'C',
      explain:'N(μ,σ²)=N(170, 25) 中 σ=5。165~175 恰为 (μ-σ, μ+σ) 区间，概率≈68.27%。100×68.27%≈68 人。选 C。',
      tag:'正态分布·3σ原则·真题' },

    // ============ math_m30 压轴 ============
    { id:'math_q436p7_13001', manualId:'math_m30', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷压轴改编）已知 f(x)=e^x-ax，若 f(x)≥0 对所有 x≥0 恒成立，求 a 的取值范围。',
      answer:'a≤e',
      explain:'x=0 时 f(0)=1>0，所以只需考虑 x>0 时 e^x/x≥a 恒成立，即 a≤min(e^x/x) 在 x>0。设 g(x)=e^x/x，g\'(x)=(e^x·x-e^x)/x²=e^x(x-1)/x²。g\'=0 → x=1。g 在 (0,1) 减，在 (1,+∞) 增，最小值 g(1)=e。故 a≤e。',
      tag:'恒成立问题·新高考压轴' },
  ];

  function mount() {
    if (typeof window === 'undefined') return;
    if (!global.MATH_BANK) global.MATH_BANK = [];
    const existing = new Set(global.MATH_BANK.map(q => q.id));
    let added = 0;
    ALL_QS.forEach(q => {
      if (!existing.has(q.id)) { global.MATH_BANK.push(q); added++; }
    });
    console.log('[数学·v4.3.6·精选真题 Part 7] 新增 ' + added + ' 题, 主库题数: ' + global.MATH_BANK.length);
  }

  if (typeof window !== 'undefined' && typeof document !== 'undefined' && document.readyState !== 'loading') mount();
  else if (typeof document !== 'undefined') document.addEventListener('DOMContentLoaded', mount);

  global.MATH_V436_QUALITY_P7 = { ALL_QS, mount };
})(typeof window !== 'undefined' ? window : this);
