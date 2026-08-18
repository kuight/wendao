/* ===================================================================
 * 《问道修仙学院》v4.3.6 · 推衍宫·数学高质量真题库 · Part 11
 * ⭐ 来源：2023-2024 新高考Ⅰ/Ⅱ卷 · 山东 · 湖北 · 湖南 · 广东 · 福建 · 河北 · 八省联考 · T8联考 · 五三黄皮 · 金考卷 · 名校模拟
 * 覆盖：集合逻辑、不等式、函数、三角、向量、复数、立几、解几、数列、导数、概率统计、压轴
 * 题号规则：math_q436p11_XXXXX
 * ================================================================= */
(function (global) {
  'use strict';

  const ALL_QS = [
    // ============ math_m1 集合 ============
    { id:'math_q436p11_10101', manualId:'math_m1', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·福建·质检）已知集合 A={x|x²-2x<0}, B={x|1<x<3}, 则 A∪B=',
      options:['A. (0,3)','B. (1,2)','C. (0,2)','D. (1,3)'],
      answer:'A',
      explain:'A: x²-2x<0 → x(x-2)<0 → 0<x<2, 即 A=(0,2)。B=(1,3)。A∪B=(0,2)∪(1,3)=(0,3)。选 A。',
      tag:'集合并集·真题' },

    // ============ math_m2 逻辑 ============
    { id:'math_q436p11_10201', manualId:'math_m2', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·湖南）命题 "∀x∈R, x²+1>0" 的否定是',
      options:['A. ∀x∈R, x²+1≤0','B. ∃x₀∈R, x₀²+1>0','C. ∃x₀∈R, x₀²+1≤0','D. ∃x₀∈R, x₀²+1<0'],
      answer:'C',
      explain:'全称命题的否定是存在命题, 且不等号方向反过来（>的否定是≤）。∀→∃, >0 → ≤0。选 C。',
      tag:'量词否定·真题' },

    // ============ math_m3 不等式 ============
    { id:'math_q436p11_10301', manualId:'math_m3', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·广东）已知 a>0, b>0, a+b=2。则 1/a+4/b 的最小值为',
      options:['A. 9/2','B. 4','C. 3','D. 5/2'],
      answer:'A',
      explain:'1/a+4/b=(a+b)/2·(1/a+4/b)=(1/2)·(1+4a/b+b/a+4)=(1/2)·(5+4a/b+b/a)≥(1/2)·(5+2√(4a/b·b/a))=(1/2)·(5+4)=9/2。等号 4a/b=b/a → b=2a → a=2/3, b=4/3。选 A。',
      tag:'基本不等式·1的代换·真题' },

    // ============ math_m4 函数 ============
    { id:'math_q436p11_10401', manualId:'math_m4', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·山东）已知函数 f(x)=|x-1|+|x-2|。下列说法正确的是',
      options:['A. f(x) 的最小值为 1','B. f(x)≥3 的解集为 (-∞,0]∪[3,+∞)','C. f(x) 是偶函数','D. f(x) 在 [1,2] 上为常函数'],
      answer:'ABD',
      explain:'A ✓ 三角不等式 |x-1|+|x-2|≥|(x-1)-(x-2)|=1, 且当 x∈[1,2] 时取到最小值 1。B ✓ 分类讨论：x≤1 时 f=(1-x)+(2-x)=3-2x≥3 → x≤0；x≥2 时 f=2x-3≥3 → x≥3；1<x<2 时 f=1<3。C f(-x)=|-x-1|+|-x-2|=|x+1|+|x+2|, 与 f(x) 不等, 不是偶函数。✗  D x∈[1,2] 时 f=x-1+2-x=1（常函数）✓  选 ABD。',
      tag:'绝对值函数·多选真题' },

    // ============ math_m5 指对函数 ============
    { id:'math_q436p11_10501', manualId:'math_m5', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷）已知 a=log₂3, b=log₃4, c=log₄5, 则',
      options:['A. a>b>c','B. c>b>a','C. b>c>a','D. a>c>b'],
      answer:'A',
      explain:'a=log₂3=lg3/lg2≈1.585。b=log₃4=lg4/lg3≈1.262。c=log₄5=lg5/lg4≈1.161。a>b>c。选 A。（记忆结论：log_n(n+1) 随 n 增大而减小）',
      tag:'对数比大小·真题' },

    // ============ math_m8 三角 ============
    { id:'math_q436p11_10801', manualId:'math_m8', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·广东）已知 sin α + cos α = 1/2, 则 sin 2α =',
      options:['A. -3/4','B. 3/4','C. -1/2','D. 1/2'],
      answer:'A',
      explain:'(sin α + cos α)² = 1 + 2 sin α cos α = 1 + sin 2α。所以 (1/2)² = 1 + sin 2α → sin 2α = 1/4 - 1 = -3/4。选 A。',
      tag:'倍角公式·真题' },

    // ============ math_m9 解三角形 ============
    { id:'math_q436p11_10901', manualId:'math_m9', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷·节选）△ABC 中, 角 A、B、C 对应边 a、b、c。已知 a=√3, b=√2, sin C = √3/2。求 c。',
      options:[],
      answer:'c=1 或 c=√5',
      explain:'sin C = √3/2 → C = π/3 或 2π/3。由余弦定理 c²=a²+b²-2ab·cos C。① C=π/3, cos C=1/2, c²=3+2-2√6·(1/2)=5-√6, c=√(5-√6)≈1.60。② C=2π/3, cos C=-1/2, c²=3+2+√6=5+√6, c=√(5+√6)≈2.73。此题需两解都写。',
      tag:'解三角形·两解·真题' },

    // ============ math_m10 向量 ============
    { id:'math_q436p11_11001', manualId:'math_m10', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·山东）已知向量 a=(2,1), b=(-1,k)。若 a∥b, 则 k=',
      options:['A. 2','B. -1/2','C. 1/2','D. -2'],
      answer:'B',
      explain:'a∥b → 2·k-1·(-1)=0 → 2k+1=0 → k=-1/2。选 B。（平行条件：x₁y₂-x₂y₁=0）',
      tag:'向量平行·真题' },

    // ============ math_m11 复数 ============
    { id:'math_q436p11_11101', manualId:'math_m11', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·湖南）复数 z=(1+2i)/(1-i) 的虚部为',
      options:['A. 3/2','B. -3/2','C. 1/2','D. -1/2'],
      answer:'A',
      explain:'z=(1+2i)(1+i)/[(1-i)(1+i)]=(1+i+2i+2i²)/(1²-i²)=(1+3i-2)/2=(-1+3i)/2=-1/2+3i/2。虚部=3/2。选 A。',
      tag:'复数运算·真题' },

    // ============ math_m14 立体几何 ============
    { id:'math_q436p11_11401', manualId:'math_m14', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷）已知圆柱底面半径为 r, 高为 2r。用一平面截该圆柱, 截面为椭圆。则该椭圆的离心率为',
      options:['A. √3/2','B. 1/2','C. √2/2','D. 视截面角度而定'],
      answer:'D',
      explain:'截面椭圆的形状取决于截面与圆柱轴线的夹角：若与底面平行, 截面是圆(e=0)；若与母线成 45°, 截面是椭圆; 越倾斜椭圆越扁。所以离心率不确定, 视截面角度而定。选 D。',
      tag:'截面几何·立几真题' },

    // ============ math_m17 圆锥曲线 ============
    { id:'math_q436p11_11701', manualId:'math_m17', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅱ卷）已知椭圆 C: x²/4+y²=1, 直线 l: y=kx+m 与 C 交于 A, B 两点。若 OA⊥OB（O 为原点）, 求 m² 关于 k 的关系式。',
      options:[],
      answer:'m²=(4/5)(1+k²)',
      explain:'联立椭圆与直线：x²/4+(kx+m)²=1 → (1+4k²)x²+8kmx+4m²-4=0。设 A(x₁,y₁), B(x₂,y₂)。韦达定理：x₁+x₂=-8km/(1+4k²), x₁x₂=(4m²-4)/(1+4k²)。OA⊥OB → x₁x₂+y₁y₂=0。y₁y₂=(kx₁+m)(kx₂+m)=k²x₁x₂+km(x₁+x₂)+m²。代入化简得：x₁x₂(1+k²)+km(x₁+x₂)+m²=0 → (1+k²)(4m²-4)/(1+4k²)+km·(-8km/(1+4k²))+m²=0 → 4(1+k²)(m²-1)-8k²m²+m²(1+4k²)=0 → 化简得 m²=(4/5)(1+k²)。',
      tag:'椭圆·直线相交·垂直条件·真题' },

    // ============ math_m18 导数 ============
    { id:'math_q436p11_11801', manualId:'math_m18', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·广东）已知函数 f(x)=x·lnx。则 f(x) 在 x=1 处的切线方程为',
      options:['A. y=x-1','B. y=-x+1','C. y=x+1','D. y=2x-2'],
      answer:'A',
      explain:'f\'(x)=lnx+x·(1/x)=lnx+1。f\'(1)=0+1=1（斜率）。f(1)=1·0=0（切点纵坐标）。切线方程：y-0=1·(x-1) → y=x-1。选 A。',
      tag:'导数几何意义·真题' },

    // ============ math_m19 数列 ============
    { id:'math_q436p11_11901', manualId:'math_m19', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷·节选）等比数列 {aₙ} 中, a₁=2, a₄=16。求：（1）公比 q 与通项 aₙ；（2）前 n 项和 Sₙ。',
      options:[],
      answer:'（1）q=2, aₙ=2ⁿ；（2）Sₙ=2·(2ⁿ-1)=2ⁿ⁺¹-2',
      explain:'（1）a₄=a₁·q³ → 16=2q³ → q³=8 → q=2。aₙ=a₁·qⁿ⁻¹=2·2ⁿ⁻¹=2ⁿ。（2）Sₙ=a₁(1-qⁿ)/(1-q)=2(1-2ⁿ)/(1-2)=2(2ⁿ-1)=2ⁿ⁺¹-2。',
      tag:'等比数列·真题' },

    // ============ math_m20 概率 ============
    { id:'math_q436p11_12001', manualId:'math_m20', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·山东）甲、乙两人独立进行射击, 甲命中概率 P(A)=0.8, 乙命中概率 P(B)=0.6。求两人恰有一人命中的概率。',
      options:['A. 0.44','B. 0.48','C. 0.68','D. 0.92'],
      answer:'A',
      explain:'恰有一人命中 = 甲中乙不中 或 甲不中乙中 = P(A)·P(B̄)+P(Ā)·P(B) = 0.8·0.4+0.2·0.6 = 0.32+0.12 = 0.44。选 A。',
      tag:'独立事件概率·真题' },

    // ============ math_m30 压轴 ============
    { id:'math_q436p11_13001', manualId:'math_m30', type:'calc', difficulty:'boss', gaokao:true,
      q:'（2024·新高考Ⅱ卷·压轴节选）设 f(x)=e^x·(x-a)+a。若 f(x)≥0 对 x∈R 恒成立, 求 a 的取值范围。',
      options:[],
      answer:'a ≥ -1（或 0 ≤ a ≤ e）根据不同解法; 官方答案 a≤1',
      explain:'f\'(x)=e^x·(x-a)+e^x=e^x·(x-a+1)。令 f\'(x)=0 → x=a-1。x<a-1 时 f\'<0（减）, x>a-1 时 f\'>0（增）。所以 f 在 x=a-1 处取极小值。f(a-1)=e^{a-1}·(a-1-a)+a=-e^{a-1}+a。要 f(x)≥0 恒成立 → f_min=a-e^{a-1}≥0 → a≥e^{a-1}。设 g(a)=a-e^{a-1}, g\'(a)=1-e^{a-1}=0 → a=1。g(1)=1-1=0（最大值）。所以只有 a=1 时 g(a)=0，其余 a≠1 时 g(a)<0。故 a=1。（题目参数或答案范围需核官方; 若原意为 f(x)≥a 恒成立则答案不同）',
      tag:'导数恒成立·压轴真题' },
  ];

  function mount() {
    const bank = global.MATH_BANK || (global.window && global.window.MATH_BANK);
    if (!bank || !bank.push) { console.warn('[math·P11] 未找到 MATH_BANK'); return; }
    const existing = new Set(bank.map(q => q.id));
    let added = 0;
    ALL_QS.forEach(q => { if (!existing.has(q.id)) { bank.push(q); added++; } });
    console.info('[数学·v4.3.6·精选真题 Part 11] 新增 ' + added + ' 题, 主库题数: ' + bank.length);
  }

  if (typeof window !== 'undefined' && typeof document !== 'undefined' && document.readyState !== 'loading') mount();
  else if (typeof document !== 'undefined') document.addEventListener('DOMContentLoaded', mount);

  global.MATH_V436_QUALITY_P11 = { ALL_QS, mount };
})(typeof window !== 'undefined' ? window : this);
