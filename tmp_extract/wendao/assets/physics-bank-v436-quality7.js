/* ===================================================================
 * 《问道修仙学院》v4.3.6 · 雷霆殿·物理高质量真题库 · Part 7
 * ⭐ 来源风格：新高考一卷 / 八省联考 / 金考卷 / 名校联考
 * 覆盖：动力学、引力、能量、动量、电场、电路、磁场、电磁感应、交变电流、近代物理、热学、电磁波
 * 题号规则：phy_q436p7_XXXXX
 * ================================================================= */
(function (global) {
  'use strict';

  function svg(w, h, body) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" style="max-width:100%;height:auto;background:#f7f4ec;border:1px solid #c9b98c;border-radius:6px;margin:8px 0;">${body}</svg>`;
  }

  const ALL_QS = [
    { id:'phy_q436p7_10901', manualId:'phy_m9', type:'single', difficulty:'normal', gaokao:true,
      q:'质量为 m 的物块置于光滑水平面上，受到大小恒为 F 的水平拉力作用，经过时间 t 后速度大小为',
      options:['A. Ft/m','B. Fm/t','C. Ft²/m','D. m/(Ft)'],
      answer:'A',
      explain:'光滑水平面上仅受拉力 F，故加速度 a=F/m。由 v=at 得 v=Ft/m。选 A。',
      tag:'牛顿第二定律' },

    { id:'phy_q436p7_11001', manualId:'phy_m10', type:'single', difficulty:'normal', gaokao:true,
      q:'两颗卫星分别绕同一行星做匀速圆周运动，轨道半径分别为 r 和 4r。则它们的线速度大小之比 v₁:v₂ 为',
      options:['A. 1:2','B. 2:1','C. 4:1','D. 1:4'],
      answer:'B',
      explain:'卫星圆轨道速度 v=√(GM/r)，故 v 与 r^{-1/2} 成正比。于是 v₁:v₂=√(1/r):√(1/4r)=2:1。选 B。',
      tag:'万有引力与航天' },

    { id:'phy_q436p7_11101', manualId:'phy_m11', type:'calc', difficulty:'hard', gaokao:true,
      q:'质量为 1 kg 的物块从离地 1.8 m 高处由静止释放，忽略空气阻力，取 g=10 m/s²。求物块落地前瞬间的速度大小。',
      answer:'6 m/s',
      explain:'机械能守恒：mgh=1/2 mv²，故 v=√(2gh)=√(2×10×1.8)=√36=6 m/s。',
      tag:'机械能守恒' },

    { id:'phy_q436p7_11201', manualId:'phy_m12', type:'calc', difficulty:'hard', gaokao:true,
      q:'质量为 2 kg 的小车以 3 m/s 的速度沿光滑直线运动，与静止的质量为 1 kg 的小球发生正碰并粘在一起，求碰后共同速度大小。',
      answer:'2 m/s',
      explain:'碰撞过程中动量守恒：2×3=(2+1)v，得 v=2 m/s。粘在一起属于完全非弹性碰撞。',
      tag:'动量守恒' },

    { id:'phy_q436p7_11301', manualId:'phy_m13', type:'single', difficulty:'normal', gaokao:true,
      q:'关于电场强度和电势，下列说法正确的是',
      options:['A. 电场强度大的地方电势一定高','B. 沿电场线方向电势一定降低','C. 电势为零处电场强度一定为零','D. 正电荷只受电场力作用时一定向电势高处运动'],
      answer:'B',
      explain:'电场线方向就是电势降低最快的方向，B 对。电场强度大小与电势高低无必然对应关系，A 错。电势为零只是参考面选择，C 错。正电荷若初速度不为零，其运动方向未必总指向电势高处，D 错。',
      tag:'电场与电势' },

    { id:'phy_q436p7_11501', manualId:'phy_m15', type:'single', difficulty:'normal', gaokao:true,
      q:'两个定值电阻 R₁=2Ω、R₂=3Ω 串联接入电路，则它们的总电阻为',
      options:['A. 1.2Ω','B. 5Ω','C. 6Ω','D. 8Ω'],
      answer:'B',
      explain:'串联电阻直接相加，R=R₁+R₂=2+3=5Ω。选 B。',
      tag:'串联电路' },

    { id:'phy_q436p7_11601', manualId:'phy_m16', type:'calc', difficulty:'hard', gaokao:true,
      q:'某电源电动势 E=6 V，内阻 r=1 Ω，外接定值电阻 R=2 Ω。求电路中的电流大小和外电阻消耗的功率。',
      answer:'I=2 A；P=8 W',
      explain:'由闭合电路欧姆定律 I=E/(R+r)=6/(2+1)=2 A。外电阻功率 P=I²R=2²×2=8 W。',
      tag:'闭合电路欧姆定律' },

    { id:'phy_q436p7_11701', manualId:'phy_m17', type:'single', difficulty:'hard', gaokao:true,
      q:'带电粒子垂直进入匀强磁场中做匀速圆周运动。若只增大粒子的速度，其轨道半径将',
      options:['A. 变大','B. 变小','C. 不变','D. 先变大后变小'],
      answer:'A',
      explain:'洛伦兹力提供向心力：qvB=mv²/r，得 r=mv/(qB)。当 m、q、B 不变时，v 增大，r 随之增大。选 A。',
      tag:'磁场中带电粒子运动' },

    { id:'phy_q436p7_11801', manualId:'phy_m18', type:'calc', difficulty:'hard', gaokao:true,
      q:'一根长为 0.5 m 的导体棒以 4 m/s 的速度垂直切割磁感线运动，磁感应强度 B=0.8 T，求导体棒两端产生的感应电动势。',
      answer:'1.6 V',
      explain:'切割磁感线产生的感应电动势 E=BLv=0.8×0.5×4=1.6 V。',
      tag:'电磁感应基础' },

    { id:'phy_q436p7_11901', manualId:'phy_m19', type:'single', difficulty:'normal', gaokao:true,
      q:'理想变压器原线圈匝数为 1000，副线圈匝数为 200，当原线圈接 220 V 交流电时，副线圈两端电压约为',
      options:['A. 44 V','B. 110 V','C. 220 V','D. 1100 V'],
      answer:'A',
      explain:'理想变压器有 U₁/U₂=n₁/n₂，所以 U₂=U₁·n₂/n₁=220×200/1000=44 V。选 A。',
      tag:'理想变压器' },

    { id:'phy_q436p7_12001', manualId:'phy_m20', type:'single', difficulty:'hard', gaokao:true,
      q:'某金属的逸出功为 W₀，照射频率为 ν 的光时，恰好发生光电效应。若把入射光频率增大到 2ν，则光电子最大初动能为',
      options:['A. 0','B. hν','C. W₀','D. 2hν-W₀'],
      answer:'C',
      explain:'恰好发生光电效应说明 hν=W₀。频率变为 2ν 时，最大初动能 Ek=h·2ν-W₀=2W₀-W₀=W₀。选 C。',
      tag:'光电效应方程' },

    { id:'phy_q436p7_12101', manualId:'phy_m21', type:'single', difficulty:'normal', gaokao:true,
      q:'氢原子从 n=3 能级跃迁到 n=2 能级时，将',
      options:['A. 吸收光子，能量增大','B. 放出光子，能量减小','C. 吸收光子，能量减小','D. 放出光子，能量增大'],
      answer:'B',
      explain:'由高能级跃迁到低能级时，原子能量减小，并以光子形式放出能量。选 B。',
      tag:'玻尔模型' },

    { id:'phy_q436p7_12201', manualId:'phy_m22', type:'single', difficulty:'normal', gaokao:true,
      q:'某放射性元素经过 10 天后剩余质量变为原来的 1/4，则其半衰期为',
      options:['A. 2.5 天','B. 5 天','C. 10 天','D. 20 天'],
      answer:'B',
      explain:'剩余 1/4= (1/2)²，说明经历了两个半衰期，所以半衰期 T=10/2=5 天。选 B。',
      tag:'半衰期' },

    { id:'phy_q436p7_12401', manualId:'phy_m24', type:'calc', difficulty:'hard', gaokao:true,
      q:'一定质量的理想气体，在温度不变的情况下，压强由 1.0×10^5 Pa 增大到 2.0×10^5 Pa。若原体积为 4 L，则末体积为多少。',
      answer:'2 L',
      explain:'温度不变，满足玻意耳定律 p₁V₁=p₂V₂。故 V₂=p₁V₁/p₂=(1.0×10^5×4)/(2.0×10^5)=2 L。',
      tag:'玻意耳定律' },

    { id:'phy_q436p7_12501', manualId:'phy_m25', type:'multi', difficulty:'hard', gaokao:true,
      q:'关于热力学定律，下列说法正确的是',
      options:['A. 第一类永动机不可能制成','B. 第二类永动机不可能制成','C. 热量不可能自发地从低温物体传到高温物体','D. 一切与热现象有关的宏观过程都具有方向性'],
      answer:['A','B','C','D'],
      explain:'A 违反能量守恒，因此第一类永动机不可能制成。B 违反热力学第二定律，因此第二类永动机不可能制成。C 正是热力学第二定律的常见表述：热量不能自发地由低温物体传到高温物体。D 正确，涉及热现象的宏观过程都具有方向性。故四项都正确。',
      tag:'热力学定律' },

    { id:'phy_q436p7_12701', manualId:'phy_m27', type:'single', difficulty:'normal', gaokao:true,
      q:'关于电磁波，下列说法正确的是',
      options:['A. 电磁波只能在真空中传播','B. 电磁波传播不需要介质','C. 电磁波在真空中的传播速度与频率有关','D. 红外线不是电磁波'],
      answer:'B',
      explain:'电磁波既可在真空中传播，也可在介质中传播，但不需要介质，B 对。真空中各种电磁波速度都为 c，与频率无关，C 错。红外线属于电磁波，D 错。A 过于绝对。',
      tag:'电磁波基础' },

    { id:'phy_q436p7_11802', manualId:'phy_m18', type:'calc', difficulty:'boss', gaokao:true,
      q:'如图所示，导体棒 ab 长 L=0.4 m，垂直放在间距也为 0.4 m 的平行导轨上，导轨电阻不计。整个装置处于磁感应强度 B=0.5 T 的匀强磁场中，磁场方向垂直纸面向里。棒在水平外力作用下向右匀速运动，速度 v=5 m/s，电阻 R=1 Ω。' + svg(320,150,'<line x1="40" y1="50" x2="280" y2="50" stroke="#6b4f2d" stroke-width="4"/><line x1="40" y1="110" x2="280" y2="110" stroke="#6b4f2d" stroke-width="4"/><line x1="140" y1="50" x2="140" y2="110" stroke="#1f4b8f" stroke-width="6"/><text x="132" y="44" font-size="12">a</text><text x="132" y="126" font-size="12">b</text><circle cx="70" cy="80" r="10" stroke="#555" fill="none"/><path d="M63 73 L77 87 M77 73 L63 87" stroke="#555"/><circle cx="230" cy="80" r="10" stroke="#555" fill="none"/><path d="M223 73 L237 87 M237 73 L223 87" stroke="#555"/><path d="M150 80 L210 80" stroke="#d33" stroke-width="3" marker-end="url(#arr)"/><defs><marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><polygon points="0 0, 6 3, 0 6" fill="#d33"/></marker></defs><text x="175" y="72" font-size="12">v</text>') + '求：(1) 感应电动势；(2) 电路中的电流；(3) 棒所受安培力大小。',
      answer:'(1) 1.0 V；(2) 1.0 A；(3) 0.20 N',
      explain:'(1) E=BLv=0.5×0.4×5=1.0 V。(2) I=E/R=1.0/1=1.0 A。(3) 棒受安培力 F=BIL=0.5×1.0×0.4=0.20 N。',
      tag:'导轨切割磁感线·带图' },
  ];

  function mount() {
    if (!global.PHYSICS_BANK) global.PHYSICS_BANK = [];
    const existing = new Set(global.PHYSICS_BANK.map(q => q.id));
    let n = 0;
    ALL_QS.forEach(q => { if (!existing.has(q.id)) { global.PHYSICS_BANK.push(q); n++; } });
    console.log('[物理·v4.3.6·精选真题 Part 7] 新增', n, '题, 主库题数:', global.PHYSICS_BANK.length);
    const stat = {};
    ALL_QS.forEach(q => { stat[q.manualId] = (stat[q.manualId]||0)+1; });
    console.log('[物理·v4.3.6 P7] 章节分布：', stat);
  }

  if (typeof window !== 'undefined' && typeof document !== 'undefined' && document.readyState !== 'loading') mount();
  else if (typeof document !== 'undefined') document.addEventListener('DOMContentLoaded', mount);

  global.PHYSICS_V436_QUALITY_P7 = { ALL_QS, mount };
})(typeof window !== 'undefined' ? window : this);
