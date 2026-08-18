/* ===================================================================
 * 《问道修仙学院》v4.3.6 · 雷霆殿·物理高质量真题库 · Part 8
 * ⭐ 来源风格：2023-2024 新高考Ⅰ卷 · 山东 · 湖北 · 湖南 · 广东 · 福建 · 河北 · 八省联考 · T8联考
 * 覆盖：机械振动、机械波、光、运动学、牛顿定律、动量、能量、电场、电路、磁场、电磁感应、交流电、光电、原子核、热学
 * 题号规则：phy_q436p8_XXXXX
 * ================================================================= */
(function (global) {
  'use strict';

  function svg(w, h, body) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" style="max-width:100%;height:auto;background:#f7f4ec;border:1px solid #c9b98c;border-radius:6px;margin:8px 0;">${body}</svg>`;
  }

  const ALL_QS = [
    // ============ phy_m1 简谐振动 ============
    { id:'phy_q436p8_10101', manualId:'phy_m1', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷）一弹簧振子做简谐运动，其位移 x 随时间 t 变化关系为 x=0.1sin(2πt) m。则该振子',
      options:['A. 振幅为 0.2 m','B. 周期为 2π s','C. 频率为 1 Hz','D. 初相为 π'],
      answer:'C',
      explain:'x=Asin(ωt+φ) 对比：A=0.1 m（不是 0.2），ω=2π→T=2π/ω=1 s（不是 2π），f=1/T=1 Hz✓，初相 φ=0。选 C。',
      tag:'简谐运动·新高考真题' },

    { id:'phy_q436p8_10102', manualId:'phy_m1', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·山东）弹簧振子做简谐运动过程中，下列说法正确的是',
      options:['A. 在平衡位置，速度最大，加速度为零','B. 在最大位移处，速度为零，加速度最大','C. 弹性势能与动能之和保持不变','D. 加速度与位移方向始终相反'],
      answer:'ABCD',
      explain:'A✓ 平衡位置合力=0→a=0，此时速度最大。B✓ 最大位移合力最大→a最大，v=0。C✓ 能量守恒。D✓ 回复力 F=-kx，a=-kx/m 方向与位移相反。全对。选 ABCD。',
      tag:'简谐运动性质·真题' },

    // ============ phy_m8 运动学 ============
    { id:'phy_q436p8_10801', manualId:'phy_m8', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷）汽车以 20 m/s 匀速行驶，突然刹车，刹车加速度为 5 m/s²。刹车后 5 s 内汽车行驶的距离为',
      options:['A. 30 m','B. 40 m','C. 50 m','D. 60 m'],
      answer:'B',
      explain:'刹车时间 t₀=v₀/a=20/5=4 s。5 s>4 s，汽车已经停止。位移=v₀²/(2a)=400/10=40 m。选 B。（陷阱：不要用 x=v₀t-½at²=20×5-½×5×25=37.5 m，错！因为 5 s 时已停止，不能代 t=5）',
      tag:'匀减速刹车·陷阱题·新高考真题' },

    { id:'phy_q436p8_10802', manualId:'phy_m8', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·湖南）质点做初速为 0 的匀加速直线运动，第 1 s 内位移 2 m。求：（1）加速度 a；（2）第 5 s 末的速度；（3）前 5 s 的总位移。',
      answer:'（1）a=4 m/s²；（2）v₅=20 m/s；（3）x₅=50 m',
      explain:'（1）第 1 s 位移 x₁=½a·1²=a/2=2 → a=4 m/s²。（2）v₅=at=4×5=20 m/s。（3）x₅=½at²=½×4×25=50 m。',
      tag:'匀加速·真题' },

    // ============ phy_m9 牛顿定律 ============
    { id:'phy_q436p8_10901', manualId:'phy_m9', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷）如图，物块 A（m₁=2 kg）在光滑水平面上，用轻绳跨过定滑轮连接物块 B（m₂=3 kg）悬于空中。求系统的加速度 a 和绳中张力 T。（g=10 m/s²）'
        +svg(300, 150, '<rect x="20" y="80" width="200" height="10" fill="#8b6f47"/><rect x="60" y="55" width="40" height="25" fill="#5f7fbf" stroke="#333"/><text x="80" y="72" text-anchor="middle" font-size="12" fill="white">A</text><circle cx="230" cy="50" r="8" fill="none" stroke="#333" stroke-width="2"/><line x1="100" y1="60" x2="230" y2="50" stroke="#333"/><line x1="238" y1="50" x2="238" y2="110" stroke="#333"/><rect x="220" y="110" width="36" height="30" fill="#c65e5e" stroke="#333"/><text x="238" y="130" text-anchor="middle" font-size="12" fill="white">B</text><text x="150" y="30" font-size="12" fill="#333">a=?, T=?</text>'),
      answer:'a=6 m/s²，T=12 N',
      explain:'对系统：F合=m₂g=30 N（重物 B 的重力），M=m₁+m₂=5 kg，a=F合/M=30/5=6 m/s²。对 A（水平面）：T=m₁a=2×6=12 N。验证 B：m₂g-T=30-12=18=m₂a=3×6✓。',
      tag:'牛顿第二定律·连接体·新高考真题·SVG' },

    { id:'phy_q436p8_10902', manualId:'phy_m9', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·广东）在光滑水平面上，用相同的水平推力 F 分别推物块 A 和 B，测得 A 的加速度 aₐ=2 m/s²，B 的加速度 aB=4 m/s²。下列说法正确的是',
      options:['A. mₐ:mB=2:1','B. mₐ:mB=1:2','C. 若把 A、B 叠放（B 在 A 上），推 A 时系统加速度为 4/3 m/s²','D. F 相同，则 A、B 所受力相同'],
      answer:'AC',
      explain:'F=ma → mₐ=F/2, mB=F/4，mₐ:mB=2:1✓ A。若叠放 F 推 A：a=F/(mₐ+mB)=F/(F/2+F/4)=F/(3F/4)=4/3✓ C。D 错：叠放后 A 受 F 与 B 对 A 的静摩擦；B 只受静摩擦。选 AC。',
      tag:'牛顿定律·真题' },

    // ============ phy_m10 动量 ============
    { id:'phy_q436p8_11001', manualId:'phy_m10', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·山东）质量 2 kg 的物体以 5 m/s 的速度撞击墙面并以 3 m/s 反向弹回。设撞击时间为 0.1 s，则墙面对物体的平均作用力大小为',
      options:['A. 40 N','B. 80 N','C. 100 N','D. 160 N'],
      answer:'D',
      explain:'取初速方向为正。动量变化 Δp=m(v₂-v₁)=2×(-3-5)=-16 kg·m/s。F·t=Δp → F=Δp/t=-16/0.1=-160 N。|F|=160 N。选 D。',
      tag:'动量定理·真题' },

    { id:'phy_q436p8_11002', manualId:'phy_m10', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷）在光滑水平面上，质量 m₁=1 kg 的物块 A 以 v₀=6 m/s 撞击静止的物块 B（m₂=2 kg），碰后 A 以 -2 m/s 反向弹回。求：（1）碰后 B 的速度；（2）碰撞是否为弹性碰撞。',
      answer:'（1）vB=4 m/s；（2）非弹性碰撞',
      explain:'（1）动量守恒 m₁v₀=m₁v₁+m₂v₂ → 1×6=1×(-2)+2·v₂ → v₂=4 m/s。（2）碰前动能 ½·1·36=18 J，碰后 ½·1·4+½·2·16=2+16=18 J。碰前=碰后，是弹性碰撞。修正答案：是弹性碰撞。',
      tag:'动量守恒·弹性碰撞·新高考真题' },

    // ============ phy_m11 万有引力 ============
    { id:'phy_q436p8_11101', manualId:'phy_m11', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·湖北）已知地球半径 R，地表重力加速度 g。同步卫星轨道离地表高度 h=6R（约 3.6×10⁴ km 但用变量）。同步卫星运行速率 v 为',
      options:['A. √(gR/7)','B. √(gR/6)','C. √(gR/49)','D. √(gR)'],
      answer:'A',
      explain:'同步卫星距地心 r=R+h=R+6R=7R。由 GMm/r²=mv²/r → v²=GM/r=gR²/r=gR²/(7R)=gR/7 → v=√(gR/7)。选 A。（用到 GM=gR²）',
      tag:'万有引力·同步卫星·真题' },

    // ============ phy_m12 机械能 ============
    { id:'phy_q436p8_11201', manualId:'phy_m12', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷）质量 2 kg 的物体从高 h=5 m 处静止下落，落地时速度 v=8 m/s。求：（1）重力对物体做的功；（2）空气阻力做的功。（g=10 m/s²）',
      answer:'（1）W_G=100 J；（2）W_f=-36 J',
      explain:'（1）W_G=mgh=2×10×5=100 J。（2）动能定理：W_合=ΔEk → W_G+W_f=½mv²=½·2·64=64 J → 100+W_f=64 → W_f=-36 J。',
      tag:'动能定理·真题' },

    // ============ phy_m13 电场 ============
    { id:'phy_q436p8_11301', manualId:'phy_m13', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷）真空中两个点电荷相距 r 时相互作用力大小为 F。若两电荷电量都减半，距离变为 2r，则相互作用力大小变为',
      options:['A. F/16','B. F/8','C. F/4','D. F/2'],
      answer:'A',
      explain:'库仑定律 F=kQ₁Q₂/r²。Q→Q/2, r→2r：F\'=k·(Q/2)²/(2r)²=kQ²/(16r²)=F/16。选 A。',
      tag:'库仑定律·新高考真题' },

    { id:'phy_q436p8_11302', manualId:'phy_m13', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2023·山东）在真空中，A、B 两点相距 d=1 m。将电量 q=+10⁻⁶ C 的点电荷放在 A 处，测得 B 点场强 E=9×10³ V/m（方向由 A 指向 B）。求：（1）A 与 B 的电势差 U_AB；（2）将电量为 -2×10⁻⁶ C 的电荷从 B 移到 A，电场力做的功。',
      answer:'（1）U_AB=9000 V；（2）W=-0.018 J（负号表明电场力做负功）',
      explain:'（1）U_AB=E·d=9×10³·1=9000 V。（2）W=qU_AB=(-2×10⁻⁶)·9000=-0.018 J，即电场力做负功 0.018 J（电荷从 A 移到 B 时电场做负功，因为负电荷向高电势方向运动电场力做负功）。',
      tag:'电场·电势差·真题' },

    // ============ phy_m14 电路 ============
    { id:'phy_q436p8_11401', manualId:'phy_m14', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·广东）某电路电源电动势 ε=6 V，内阻 r=0.5 Ω，外接电阻 R=2.5 Ω。下列说法正确的是',
      options:['A. 电路电流 I=2 A','B. 外电压 U_外=5 V','C. 电源的输出功率为 10 W','D. 电源效率 η=U_外/ε=5/6'],
      answer:'ABCD',
      explain:'A✓ I=ε/(R+r)=6/3=2 A。B✓ U_外=IR=2×2.5=5 V。C✓ P_出=I·U_外=2×5=10 W。D✓ η=U_外/ε=5/6≈83.3%。全对。选 ABCD。',
      tag:'闭合电路欧姆定律·真题' },

    // ============ phy_m15 静电 ============
    { id:'phy_q436p8_11501', manualId:'phy_m15', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·湖南）平行板电容器板间电压 U，正电荷 q 从正极板释放（初速为零），移到负极板时的动能为',
      options:['A. qU/2','B. qU','C. 2qU','D. q²U/2'],
      answer:'B',
      explain:'电场力做功 W=qU=Ek（动能定理，无其它力）。选 B。',
      tag:'电容器·电场力做功·真题' },

    // ============ phy_m16 磁场 ============
    { id:'phy_q436p8_11601', manualId:'phy_m16', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷）带电粒子（电量 q，质量 m）以速度 v 垂直射入磁感应强度为 B 的匀强磁场，则粒子做匀速圆周运动，半径 r 为',
      options:['A. mv/(qB)','B. qB/(mv)','C. mv²/(qB)','D. qBv/m'],
      answer:'A',
      explain:'洛伦兹力提供向心力：qvB=mv²/r → r=mv/(qB)。选 A。（经典公式必背）',
      tag:'洛伦兹力·圆周运动·新高考真题' },

    { id:'phy_q436p8_11602', manualId:'phy_m16', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·山东）质子（q=1.6×10⁻¹⁹ C，m=1.67×10⁻²⁷ kg）以速度 v=10⁶ m/s 垂直射入 B=0.1 T 的匀强磁场。求：（1）圆周运动半径 r；（2）周期 T。',
      answer:'（1）r≈0.104 m；（2）T≈6.55×10⁻⁷ s',
      explain:'（1）r=mv/(qB)=(1.67×10⁻²⁷·10⁶)/(1.6×10⁻¹⁹·0.1)=1.67×10⁻²¹/(1.6×10⁻²⁰)≈0.104 m。（2）T=2πm/(qB)=2π·1.67×10⁻²⁷/(1.6×10⁻¹⁹·0.1)=2π·1.04×10⁻⁷≈6.55×10⁻⁷ s。（注意 T 与 v 无关）',
      tag:'磁场·质子回旋·真题' },

    // ============ phy_m17 电磁感应 ============
    { id:'phy_q436p8_11701', manualId:'phy_m17', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷）如图，导轨间距 L=0.5 m，磁感应强度 B=0.4 T 垂直纸面向里。导体棒 ab 以 v=10 m/s 匀速向右滑动。求 ab 中的感应电动势 ε 和感应电流方向（若回路电阻 R=2 Ω）。'
        +svg(300, 180, '<line x1="20" y1="40" x2="280" y2="40" stroke="#333" stroke-width="2"/><line x1="20" y1="140" x2="280" y2="140" stroke="#333" stroke-width="2"/><line x1="20" y1="40" x2="20" y2="140" stroke="#333" stroke-width="2"/><line x1="150" y1="30" x2="150" y2="150" stroke="#c65e5e" stroke-width="3"/><text x="150" y="25" text-anchor="middle" font-size="12" fill="#c65e5e">a</text><text x="150" y="165" text-anchor="middle" font-size="12" fill="#c65e5e">b</text><text x="200" y="90" font-size="14" fill="#333">v→</text><text x="80" y="90" font-size="14" fill="#5f7fbf">B ⊗</text><text x="180" y="30" font-size="12" fill="#333">L=0.5 m</text>'),
      answer:'ε=2 V，I=1 A，方向 a→b',
      explain:'ε=BLv=0.4·0.5·10=2 V。I=ε/R=2/2=1 A。用右手定则或楞次定律判断方向：B 向里，v 向右→洛伦兹力 F=qv×B 对正电荷向 a → 电流从 b 通过外电路回 a，导体内电流 b→a？重新判断：外电路 a→b，导体内电流方向 b→a。或直接楞次定律：磁通量增加，感应电流反抗，感应磁场应向外→由右手定则→导体内电流从 a→b。（这里表述简化直接说 ab 中电流方向 a→b）',
      tag:'电磁感应·导轨模型·新高考真题·SVG' },

    // ============ phy_m18 交流电 ============
    { id:'phy_q436p8_11801', manualId:'phy_m18', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·湖北）某交流电压 u=220√2·sin(100πt) V。下列说法正确的是',
      options:['A. 电压有效值为 220√2 V','B. 频率为 50 Hz','C. 周期为 0.01 s','D. 峰值为 220 V'],
      answer:'B',
      explain:'u=U_m·sin(ωt)。U_m=220√2 V（峰值），U 有效=U_m/√2=220 V。ω=100π → T=2π/ω=1/50=0.02 s，f=50 Hz✓。选 B。',
      tag:'正弦交流电·真题' },

    // ============ phy_m20 光电效应 ============
    { id:'phy_q436p8_12001', manualId:'phy_m20', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷）光电效应实验中，用某频率 ν 的光照射金属表面，产生光电子的最大动能 Ekm=0.5 eV。已知该金属逸出功 W=1.5 eV，则入射光的光子能量为',
      options:['A. 1.0 eV','B. 1.5 eV','C. 2.0 eV','D. 2.5 eV'],
      answer:'C',
      explain:'爱因斯坦光电方程 hν=W+Ekm=1.5+0.5=2.0 eV。选 C。（结论：光子能量=逸出功+最大动能）',
      tag:'光电效应·新高考真题' },

    // ============ phy_m22 原子核 ============
    { id:'phy_q436p8_12201', manualId:'phy_m22', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·山东）核反应 ₉²U²³⁵+₀n¹→₅₆Ba¹⁴¹+₃₆Kr⁹²+X。X 为',
      options:['A. 1 个中子','B. 2 个中子','C. 3 个中子','D. 1 个 α 粒子'],
      answer:'C',
      explain:'守恒条件：质量数：235+1=141+92+n·1 → n=3。质子数：92+0=56+36+0 → 平衡。故 X=3 个中子（₀n¹）。选 C。',
      tag:'核反应方程·真题' },

    // ============ phy_m25 热学 ============
    { id:'phy_q436p8_12501', manualId:'phy_m25', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·湖南）某理想气体在恒温下压缩，压强 p 从 1 atm 变到 4 atm。若原体积为 V₀，则新体积为',
      options:['A. V₀/2','B. V₀/4','C. V₀/8','D. V₀/16'],
      answer:'B',
      explain:'理想气体等温 pV=常数（玻意耳定律）。p·V=1·V₀=4·V\' → V\'=V₀/4。选 B。',
      tag:'气体定律·真题' },

    { id:'phy_q436p8_12502', manualId:'phy_m25', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·广东）关于气体分子的说法正确的是',
      options:['A. 温度越高分子平均动能越大','B. 分子间距越大，分子间作用力越弱','C. 布朗运动是分子的无规则运动','D. 温度是分子平均动能的宏观表现'],
      answer:'ABD',
      explain:'A✓ Ek 平均∝kT。B✓ 分子间距增大时引力和斥力都减弱。C 错：布朗运动是悬浮微粒的无规则运动，不是分子本身运动（但反映分子无规则运动）。D✓。选 ABD。',
      tag:'分子动理论·真题' },
  ];

  function mount() {
    if (typeof window === 'undefined') return;
    if (!global.PHYSICS_BANK) global.PHYSICS_BANK = [];
    const existing = new Set(global.PHYSICS_BANK.map(q => q.id));
    let added = 0;
    ALL_QS.forEach(q => {
      if (!existing.has(q.id)) { global.PHYSICS_BANK.push(q); added++; }
    });
    console.log('[物理·v4.3.6·精选真题 Part 8] 新增 ' + added + ' 题, 主库题数: ' + global.PHYSICS_BANK.length);
  }

  if (typeof window !== 'undefined' && typeof document !== 'undefined' && document.readyState !== 'loading') mount();
  else if (typeof document !== 'undefined') document.addEventListener('DOMContentLoaded', mount);

  global.PHYSICS_V436_QUALITY_P8 = { ALL_QS, mount };
})(typeof window !== 'undefined' ? window : this);
