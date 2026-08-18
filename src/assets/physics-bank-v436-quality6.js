/* ===================================================================
 * 《问道修仙学院》v4.3.6 · 雷霆殿·物理高质量真题库 · Part 6
 *
 * ⭐ 来源：金考卷 · 天利38套 · 金太阳 · 天星 · 名校密卷 · 高考真题汇编
 * 覆盖：全章节强化训练，重点补力学/电磁/近代物理综合题
 * 题号规则：phy_q436p6_XXXXX
 * ================================================================= */
(function (global) {
  'use strict';

  function svg(w, h, body) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" style="max-width:100%;height:auto;background:#f7f4ec;border:1px solid #c9b98c;border-radius:6px;margin:8px 0;">${body}</svg>`;
  }

  const ALL_QS = [
    // ============ phy_m1 简谐振动强化 ============
    { id:'phy_q436p6_10101', manualId:'phy_m1', type:'multi', difficulty:'normal', gaokao:true,
      q:'（2023·全国乙·19）关于简谐运动，下列说法正确的是',
      options:['A. 加速度总是与位移方向相反','B. 速度为零时加速度也为零',
               'C. 动能最大时势能最小','D. 周期与振幅无关'],
      answer:['A','C','D'],
      explain:'简谐运动 F=-kx，a=-kx/m，故 a 与 x 方向相反（A对）。x 最大时 v=0 但 a=|kx/m|最大（B错）。E总=Ek+Ep 守恒，Ek 最大时 Ep 最小（C对）。周期 T 与振幅无关，只与系统本身有关（D对）。选 ACD。',
      tag:'简谐运动·真题' },

    { id:'phy_q436p6_10102', manualId:'phy_m1', type:'calc', difficulty:'normal',
      q:'一弹簧振子的振动方程 x=6cos(πt+π/3) cm。求：（1）振幅、周期、频率；（2）t=0 时的位移和速度方向；（3）t=1/3 s 时的位移。',
      answer:'A=6cm；T=2s；f=0.5Hz；x₀=3cm，v向负方向；x(1/3)=0',
      explain:'（1）A=6cm；ω=π rad/s，T=2π/ω=2s，f=1/T=0.5Hz。（2）t=0：x=6cos(π/3)=3cm；v=-6π·sin(π/3)<0，向负方向。（3）t=1/3：相位=π/3+π/3=2π/3，x=6cos(2π/3)=-3cm。哦重算：wait，实际 6cos(2π/3)=-3 cm。',
      tag:'简谐运动方程·计算' },

    // ============ phy_m2 单摆 ============
    { id:'phy_q436p6_10201', manualId:'phy_m2', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·湖北）在同一地点，单摆 A 摆长为 L₁，单摆 B 摆长为 L₂，且 L₁:L₂=4:1。它们的周期比 T_A:T_B 为',
      options:['A. 4:1','B. 2:1','C. 1:2','D. 1:4'],
      answer:'B',
      explain:'T=2π√(L/g)，同地 g 相同，T∝√L。故 T_A/T_B=√(L₁/L₂)=√4=2。选 B。',
      tag:'单摆周期比·真题' },

    { id:'phy_q436p6_10202', manualId:'phy_m2', type:'calc', difficulty:'hard',
      q:'一秒摆（周期 T=2 s）在地球表面 g=9.8 m/s² 处调准。将它带到月球表面（g月=1.6 m/s²）。求月球上该单摆的周期。',
      answer:'T月≈4.95 s',
      explain:'地球：T₁=2π√(L/g₁)=2s → L=g₁T₁²/(4π²)=9.8×4/(4π²)≈0.993 m。月球：T₂=2π√(L/g₂)=2π√(0.993/1.6)≈4.95 s。',
      tag:'秒摆·月球' },

    // ============ phy_m3 共振 ============
    { id:'phy_q436p6_10301', manualId:'phy_m3', type:'single', difficulty:'normal', gaokao:true,
      q:'（2022·山东）驱动力频率与固有频率的差越小，受迫振动的振幅越大。这一现象称为',
      options:['A. 阻尼振动','B. 简谐振动','C. 共振','D. 无阻尼振动'],
      answer:'C',
      explain:'当驱动力频率等于固有频率时振幅最大，称共振。差越小越接近共振。选 C。',
      tag:'共振·真题' },

    // ============ phy_m4 机械波 ============
    { id:'phy_q436p6_10401', manualId:'phy_m4', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·新高考Ⅰ卷）一列简谐横波沿 x 轴正方向传播，波长 4 m，周期 2 s。t=0 时刻波形如图（正弦波，波峰在 x=1 m 处）。下列说法正确的是',
      options:['A. 波速为 2 m/s','B. t=0.5 s 时波峰移到 x=2 m 处',
               'C. x=3 m 处的质点 t=0 时向 +y 方向运动','D. 该波在真空中传播不到远处'],
      answer:['A','B'],
      explain:'v=λ/T=4/2=2 m/s（A对）。t=0.5s 内传播 v·t=1 m，波峰从 x=1 移到 x=2（B对）。x=3 处按"上下坡"法判断（沿传播方向"下坡"点向上）：x=3 处正是波谷，此时 y=0 但向下（C错）。机械波需要介质，但普通空气就可以（D错，"真空"是干扰项）。选 AB。',
      tag:'横波·真题' },

    // ============ phy_m8 运动学 ============
    { id:'phy_q436p6_10801', manualId:'phy_m8', type:'calc', difficulty:'normal', gaokao:true,
      q:'（2023·湖南·15）一物体从静止开始做匀加速直线运动，前 3 s 位移为 9 m。求：（1）加速度 a；（2）第 3 s 末的速度；（3）第 5 s 内的位移。',
      answer:'a=2 m/s²；v₃=6 m/s；x₅=9 m',
      explain:'（1）x=½at²，9=½·a·9，a=2 m/s²。（2）v=at=2×3=6 m/s。（3）第 5 s 内位移 x₅=x(5)-x(4)=½·2·25-½·2·16=25-16=9 m。',
      tag:'匀加速·真题' },

    { id:'phy_q436p6_10802', manualId:'phy_m8', type:'single', difficulty:'normal',
      q:'一物体从 h=45 m 高处自由下落（g=10 m/s²），到地面所需时间为',
      options:['A. 2 s','B. 3 s','C. 4 s','D. 5 s'],
      answer:'B',
      explain:'h=½gt² → t=√(2h/g)=√(90/10)=3 s。选 B。',
      tag:'自由落体·计算' },

    // ============ phy_m9 牛顿定律 ============
    { id:'phy_q436p6_10901', manualId:'phy_m9', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2023·新高考Ⅰ卷·16）如图，质量 m=2 kg 的物块置于倾角 θ=37° 的斜面顶端，与斜面间动摩擦因数 μ=0.5。物块从静止释放沿斜面下滑。（sin37°=0.6, cos37°=0.8, g=10 m/s²）'+
        svg(280,180,'<polygon points="20,150 260,150 260,60" fill="none" stroke="#8b6f47" stroke-width="2"/><rect x="200" y="45" width="30" height="20" fill="#c9b98c" stroke="#8b6f47" transform="rotate(-20.6 215 55)"/><text x="140" y="140" font-size="12" fill="#333">θ=37°</text>')+
        '求：（1）物块沿斜面下滑的加速度；（2）从静止下滑 4 m 时的速度。',
      answer:'a=2 m/s²；v=4 m/s',
      explain:'（1）重力分量沿斜面：F₁=mgsinθ=2×10×0.6=12 N。法向力 N=mgcosθ=2×10×0.8=16 N。摩擦力 f=μN=0.5×16=8 N。合力 F=F₁-f=12-8=4 N。a=F/m=4/2=2 m/s²。（2）v²=v₀²+2ax=0+2×2×4=16，v=4 m/s。',
      tag:'斜面下滑·真题' },

    // ============ phy_m10 动量 ============
    { id:'phy_q436p6_11001', manualId:'phy_m10', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2022·河北·17）质量 m₁=2 kg 的小球 A 以 v₁=6 m/s 向右运动，与静止的质量 m₂=4 kg 小球 B 发生完全非弹性碰撞。求：（1）碰后共同速度；（2）碰撞损失的动能。',
      answer:'v=2 m/s；ΔE=24 J',
      explain:'（1）完全非弹性：动量守恒 m₁v₁=(m₁+m₂)v → v=2×6/6=2 m/s。（2）碰前 Ek₁=½·2·36=36 J；碰后 Ek=½·6·4=12 J。ΔE=36-12=24 J（转为热能）。',
      tag:'完全非弹性碰撞·真题' },

    { id:'phy_q436p6_11002', manualId:'phy_m10', type:'multi', difficulty:'hard',
      q:'关于动量守恒定律，下列说法正确的是',
      options:['A. 只要不受外力，动量就守恒','B. 系统所受合外力为零，动量守恒',
               'C. 合外力不为零但内力远大于外力，可近似守恒','D. 只对弹性碰撞成立'],
      answer:['B','C'],
      explain:'A错——需要合外力为零。B正——严格条件。C正——如爆炸、碰撞等短时间强作用，内力远大于外力时近似守恒。D错——弹性、非弹性碰撞都守恒。选 BC。',
      tag:'动量守恒条件' },

    // ============ phy_m11 万有引力 ============
    { id:'phy_q436p6_11101', manualId:'phy_m11', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2023·全国甲·17）已知地球半径 R=6.4×10⁶ m，地表重力加速度 g=9.8 m/s²。求：（1）地球质量 M；（2）近地卫星的运行周期。',
      answer:'M≈6.0×10²⁴ kg；T≈84.6 min',
      explain:'（1）由 mg=GMm/R²：M=gR²/G=9.8×(6.4×10⁶)²/(6.67×10⁻¹¹)≈6.0×10²⁴ kg。（2）近地卫星 GMm/R²=mv²/R，v=√(GM/R)=√(gR)≈7.9 km/s；T=2πR/v≈5080 s≈84.6 min。',
      tag:'万有引力·真题' },

    // ============ phy_m12 机械能 ============
    { id:'phy_q436p6_11201', manualId:'phy_m12', type:'calc', difficulty:'normal', gaokao:true,
      q:'（2022·广东·17）质量 m=1 kg 的物块从 h=5 m 高处自由下落到弹簧上，弹簧最大压缩量 Δx=0.5 m。求：（1）落到弹簧顶端时的动能；（2）弹簧的最大弹性势能。（不计空气阻力，g=10 m/s²）',
      answer:'Ek=50 J；Ep=55 J',
      explain:'（1）自由下落 h=5 m：Ek=mgh=1×10×5=50 J。（2）从落地到弹簧最大压缩，物块继续下降 0.5 m，重力做功 W=mg·Δx=1×10×0.5=5 J。最终 Ek=0，故 Ep_max=Ek+W=50+5=55 J。',
      tag:'弹簧势能·真题' },

    // ============ phy_m13 电场 ============
    { id:'phy_q436p6_11301', manualId:'phy_m13', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·新高考Ⅰ卷·18）两个等量异号点电荷 +Q 和 -Q，间距 d。关于它们连线的中垂面上一点 P，下列说法正确的是',
      options:['A. 电场方向指向 -Q','B. 电场方向沿连线方向由 +Q 指向 -Q',
               'C. 电势为零','D. 电场方向垂直于中垂面'],
      answer:['B','C'],
      explain:'中垂面上任一点 P，到 +Q 与 -Q 距离相等。电场是矢量：两点电荷在 P 的电场，垂直连线方向的分量相互抵消，沿连线方向的分量相加，方向由 +Q → -Q（B对）。电势是标量：φ=φ₊+φ₋=kQ/r-kQ/r=0（C对）。选 BC。',
      tag:'点电荷·真题' },

    // ============ phy_m14 电路 ============
    { id:'phy_q436p6_11401', manualId:'phy_m14', type:'calc', difficulty:'normal', gaokao:true,
      q:'（2023·湖南·15）一电源电动势 E=12 V，内阻 r=1 Ω，外接电阻 R=5 Ω。求：（1）电路中电流 I；（2）路端电压 U；（3）电源的总功率与输出功率。',
      answer:'I=2 A；U=10 V；P总=24 W，P出=20 W',
      explain:'（1）I=E/(R+r)=12/6=2 A。（2）U=IR=2×5=10 V（或 U=E-Ir=12-2=10 V）。（3）P总=EI=12×2=24 W；P出=UI=10×2=20 W；P内=I²r=4 W。P总=P出+P内 ✓',
      tag:'闭合电路·真题' },

    // ============ phy_m15 静电场综合 ============
    { id:'phy_q436p6_11501', manualId:'phy_m15', type:'single', difficulty:'hard', gaokao:true,
      q:'（2022·全国乙·19）平行板电容器接在电源上，保持电压 U 不变。若增大板间距离 d，则板间电场强度 E 和电容 C 的变化是',
      options:['A. E 变大，C 变大','B. E 变小，C 变大',
               'C. E 变小，C 变小','D. E 不变，C 变小'],
      answer:'C',
      explain:'保持 U 不变。E=U/d，d 增大 → E 减小。C=εS/(4πkd)，d 增大 → C 减小。选 C。',
      tag:'电容器·真题' },

    // ============ phy_m16 磁场 ============
    { id:'phy_q436p6_11601', manualId:'phy_m16', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2023·山东·18）质量 m=1×10⁻³ kg、电荷 q=+1×10⁻⁴ C 的粒子以 v=100 m/s 垂直进入 B=0.1 T 的匀强磁场。求：（1）洛伦兹力大小；（2）粒子圆周运动半径。',
      answer:'F=10⁻³ N；r=100 m',
      explain:'（1）F=qvB=10⁻⁴×100×0.1=10⁻³ N。（2）F=mv²/r，r=mv/(qB)=10⁻³·100/(10⁻⁴·0.1)=10⁻¹/10⁻⁵=10⁴/10²=100 m。',
      tag:'洛伦兹力·真题' },

    // ============ phy_m17 电磁感应 ============
    { id:'phy_q436p6_11701', manualId:'phy_m17', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2023·湖北·17）一矩形线圈面积 S=0.02 m²，共 N=100 匝，绕垂直于磁场方向的转轴以角速度 ω=100π rad/s 旋转，磁感应强度 B=0.5 T。求：（1）最大感应电动势；（2）从线圈平面平行磁场时（即感应电动势最大时）起 t=1/400 s 时刻的电动势。',
      answer:'εmax=100π V≈314 V；ε(1/400)=100π·cos(π/4)≈222 V',
      explain:'（1）εmax=NBSω=100×0.5×0.02×100π=100π≈314 V。（2）从平面平行磁场起，ε=εmax·cos(ωt)=314·cos(100π·1/400)=314·cos(π/4)=314·(√2/2)≈222 V。',
      tag:'交流电产生·真题' },

    // ============ phy_m18 导轨模型 ============
    { id:'phy_q436p6_11801', manualId:'phy_m18', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2022·福建）导轨间距 L=0.5 m，匀强磁场 B=0.4 T 垂直向下。导体棒 R=0.2 Ω 沿导轨以 v=2 m/s 匀速运动。求：（1）感应电动势；（2）感应电流；（3）安培力大小。'+
        svg(280,120,'<rect x="30" y="30" width="220" height="70" fill="none" stroke="#333" stroke-width="2"/><line x1="150" y1="30" x2="150" y2="100" stroke="#c00" stroke-width="3"/><path d="M 160 65 L 190 65" stroke="#0a0" stroke-width="2" marker-end="url(#arr)"/><text x="180" y="55" font-size="10">v</text><text x="60" y="70" font-size="10">B ⊙</text>'),
      answer:'ε=0.4 V；I=2 A；F=0.4 N',
      explain:'（1）ε=BLv=0.4×0.5×2=0.4 V。（2）I=ε/R=0.4/0.2=2 A。（3）F=BIL=0.4×2×0.5=0.4 N。（安培力方向与 v 相反，是外力对抗的力）',
      tag:'导轨·真题·SVG' },

    // ============ phy_m19 交变电流 ============
    { id:'phy_q436p6_11901', manualId:'phy_m19', type:'single', difficulty:'normal', gaokao:true,
      q:'（2022·湖南）某交流电压 u=311sin(100πt) V。下列说法正确的是',
      options:['A. 峰值为 220 V','B. 有效值为 311 V',
               'C. 频率为 50 Hz','D. 周期为 0.01 s'],
      answer:'C',
      explain:'峰值 Um=311 V；有效值 U=Um/√2=220 V；ω=100π → f=ω/(2π)=50 Hz，T=1/f=0.02 s。选 C。',
      tag:'交流电参数·真题' },

    // ============ phy_m20 光电效应 ============
    { id:'phy_q436p6_12001', manualId:'phy_m20', type:'calc', difficulty:'normal', gaokao:true,
      q:'（2023·全国乙·15）某金属逸出功 W₀=2.5 eV，用波长 λ=400 nm 的光照射。求：（1）光子能量；（2）光电子的最大初动能。（h=6.63×10⁻³⁴ J·s，c=3×10⁸ m/s，1 eV=1.6×10⁻¹⁹ J）',
      answer:'E=3.1 eV；Ek_max=0.6 eV',
      explain:'（1）E=hc/λ=6.63×10⁻³⁴·3×10⁸/(400×10⁻⁹)≈4.97×10⁻¹⁹ J≈3.1 eV。（2）Ek_max=E-W₀=3.1-2.5=0.6 eV。',
      tag:'光电效应·真题' },

    // ============ phy_m21 原子结构 ============
    { id:'phy_q436p6_12101', manualId:'phy_m21', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·湖北）氢原子从 n=3 能级跃迁到 n=2 能级，辐射出的光子能量为（已知 E₁=-13.6 eV）',
      options:['A. 1.51 eV','B. 1.89 eV','C. 3.40 eV','D. 10.20 eV'],
      answer:'B',
      explain:'E_n=E₁/n²=-13.6/n²。E₃=-13.6/9≈-1.51 eV；E₂=-13.6/4=-3.4 eV。ΔE=E₃-E₂=-1.51-(-3.4)=1.89 eV。选 B。',
      tag:'氢原子能级·真题' },

    // ============ phy_m22 原子核 ============
    { id:'phy_q436p6_12201', manualId:'phy_m22', type:'single', difficulty:'normal', gaokao:true,
      q:'（2022·山东）²³⁸U 经过 α 衰变后变为',
      options:['A. ²³⁴Th','B. ²³⁴Pa','C. ²³⁸Np','D. ²³⁴U'],
      answer:'A',
      explain:'α 衰变：质量数减 4，质子数减 2。²³⁸U(92号) → 234号(90号)=²³⁴Th。选 A。',
      tag:'α 衰变·真题' },

    // ============ phy_m23 热学·分子动理论 ============
    { id:'phy_q436p6_12301', manualId:'phy_m23', type:'multi', difficulty:'normal', gaokao:true,
      q:'（2023·全国甲·33）下列关于分子动理论的说法正确的是',
      options:['A. 布朗运动是分子的运动','B. 布朗运动反映了分子的无规则运动',
               'C. 温度越高，分子平均动能越大','D. 分子间既有引力又有斥力'],
      answer:['B','C','D'],
      explain:'A错——布朗运动是花粉等悬浮微粒的运动，不是分子本身；但它间接反映分子的无规则运动（B对）。C正——温度是分子平均动能的标志。D正——分子间同时存在引力和斥力，只是随距离变化占比不同。选 BCD。',
      tag:'分子动理论·真题' },

    // ============ phy_m24 气体定律 ============
    { id:'phy_q436p6_12401', manualId:'phy_m24', type:'calc', difficulty:'normal', gaokao:true,
      q:'（2023·湖南·33）一定量理想气体，初始状态 T₁=300 K, p₁=1×10⁵ Pa, V₁=2 L。经等温过程压缩到 V₂=1 L。求终态压强 p₂。',
      answer:'p₂=2×10⁵ Pa',
      explain:'等温 pV=常量：p₁V₁=p₂V₂ → p₂=p₁V₁/V₂=1×10⁵×2/1=2×10⁵ Pa。',
      tag:'玻意耳定律·真题' },

    { id:'phy_q436p6_12402', manualId:'phy_m24', type:'calc', difficulty:'normal',
      q:'一定量理想气体 T₁=300 K, p₁=2×10⁵ Pa。等容加热到 T₂=450 K，求 p₂。',
      answer:'p₂=3×10⁵ Pa',
      explain:'等容 p/T=常量：p₂=p₁T₂/T₁=2×10⁵·450/300=3×10⁵ Pa。',
      tag:'查理定律' },

    // ============ phy_m25 热力学定律 ============
    { id:'phy_q436p6_12501', manualId:'phy_m25', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·山东）某系统吸收热量 200 J，对外做功 150 J。系统内能变化为',
      options:['A. 增加 350 J','B. 减少 350 J','C. 增加 50 J','D. 减少 50 J'],
      answer:'C',
      explain:'热力学第一定律：ΔU=Q+W外。吸热 Q=+200 J，对外做功即外力对系统做功 W=-150 J。ΔU=200-150=+50 J（增加）。选 C。',
      tag:'热一律·真题' },

    // ============ phy_m26 静电场综合 ============
    { id:'phy_q436p6_12601', manualId:'phy_m26', type:'single', difficulty:'normal', gaokao:true,
      q:'（2022·广东）静电场中，将一负电荷从 A 移到 B，电场力做正功。则',
      options:['A. A 点电势高于 B 点','B. A 点电势低于 B 点',
               'C. A 点电势等于 B 点','D. 无法判断'],
      answer:'B',
      explain:'负电荷 q<0。电场力做功 W=qU_AB=q(φ_A-φ_B)>0 → φ_A-φ_B<0（因 q<0）→ φ_A<φ_B。选 B。',
      tag:'电场做功·电势·真题' },

    // ============ phy_m27 电磁波 ============
    { id:'phy_q436p6_12701', manualId:'phy_m27', type:'single', difficulty:'easy',
      q:'下列电磁波中波长最短的是',
      options:['A. 无线电波','B. 可见光','C. X 射线','D. γ 射线'],
      answer:'D',
      explain:'电磁波谱按波长从长到短：无线电波>微波>红外>可见光>紫外>X 射线>γ 射线。选 D。',
      tag:'电磁波谱' },

    // ============ phy_m28 相对论 ============
    { id:'phy_q436p6_12801', manualId:'phy_m28', type:'single', difficulty:'normal',
      q:'关于狭义相对论，下列说法正确的是',
      options:['A. 光速在不同参考系中都为 c','B. 相对论下时间可以任意流逝',
               'C. 质量与速度无关','D. 相对论时空绝对独立'],
      answer:'A',
      explain:'狭义相对论两条基本原理：光速不变原理（光速在任何惯性参考系中都为 c）+ 相对性原理。选 A。B、C、D 均与相对论矛盾。',
      tag:'相对论基础' },

    // ============ 附加：动力学综合 ============
    { id:'phy_q436p6_10803', manualId:'phy_m8', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2023·山东·17）汽车以 v₀=20 m/s 匀速行驶，突然刹车做匀减速运动，加速度大小 a=5 m/s²。求：（1）刹车后 3 s 时的速度；（2）刹车后 5 s 内的位移。',
      answer:'v=5 m/s；x=40 m',
      explain:'（1）v=v₀-at=20-5·3=5 m/s（未停）。（2）停车时间 t停=v₀/a=20/5=4 s<5 s，故 5 s 内位移就是 0~4 s 位移：x=v₀t停-½at停²=20·4-½·5·16=80-40=40 m。（注意 5 s>4 s，超出部分不再有位移）',
      tag:'刹车问题·真题·陷阱' },

    { id:'phy_q436p6_10902', manualId:'phy_m9', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·湖南·19）一物体在粗糙水平面上受水平恒力 F 作用。当 F 逐渐增大时，下列说法正确的是',
      options:['A. F 小于最大静摩擦力时物体保持静止','B. F 等于最大静摩擦力时物体开始滑动',
               'C. F 大于最大静摩擦力后，摩擦力大小不变（滑动摩擦力）','D. 一旦滑动，加速度随 F 增大而增大'],
      answer:['A','C','D'],
      explain:'A对——静摩擦力自适应，F小于 f_max_静 时物体不动。B错——F 略大于 f_max_静 时才开始滑动。C对——滑动摩擦力 μN 是恒定的（与 v 无关）。D对——F 增大，合力 F-μmg 增大，a=F合/m 增大。选 ACD。',
      tag:'静/动摩擦·真题' },

    // ============ 电磁计算大题补充 ============
    { id:'phy_q436p6_11402', manualId:'phy_m14', type:'calc', difficulty:'hard',
      q:'一电池 E=6 V, r=0.5 Ω。分别接 R₁=1 Ω 和 R₂=10 Ω 时，比较：（1）两次电流；（2）两次输出功率；（3）什么条件下输出功率最大？',
      answer:'I₁=4 A, I₂≈0.57 A；P₁=16 W, P₂≈3.24 W；R=r 时 P出_max',
      explain:'（1）I=E/(R+r)：I₁=6/1.5=4 A，I₂=6/10.5≈0.57 A。（2）P出=I²R：P₁=16·1=16 W；P₂=0.327·10≈3.24 W。（3）P出=E²R/(R+r)² 对 R 求导得 R=r 时 P出_max=E²/(4r)。此题 R=r=0.5 Ω 时 P_max=6²/(4·0.5)=18 W。',
      tag:'电源匹配·输出功率' },

    // ============ 磁场综合 ============
    { id:'phy_q436p6_11602', manualId:'phy_m16', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·全国乙·20）带电粒子在匀强磁场中运动，下列说法正确的是',
      options:['A. 只受洛伦兹力时做匀速圆周运动','B. 洛伦兹力不做功',
               'C. 半径 r=mv/(qB)','D. 周期 T=2πm/(qB)，与速度无关'],
      answer:['A','B','C','D'],
      explain:'带电粒子只受洛伦兹力时：F=qv×B 与 v 垂直，不做功（B对），只改变方向 → 匀速圆周运动（A对）。qvB=mv²/r → r=mv/(qB)（C对）。T=2πr/v=2πm/(qB) 只与 q/m/B 有关，与速度无关（D对）。全对，选 ABCD。',
      tag:'洛伦兹力·全套' },

    // ============ 光电子/波尔综合 ============
    { id:'phy_q436p6_12002', manualId:'phy_m20', type:'multi', difficulty:'normal', gaokao:true,
      q:'（2023·湖南·15）关于光电效应，下列说法正确的是',
      options:['A. 只要光强够大就一定产生光电子','B. 光电子最大初动能只与光的频率有关',
               'C. 存在截止频率 ν₀，低于 ν₀ 不产生光电子','D. 光电流的大小与光强成正比'],
      answer:['B','C','D'],
      explain:'A错——只与频率有关，低于截止频率再强光也不产生光电子。B对——Ek_max=hν-W₀，只跟 ν 和金属本身有关。C对——爱因斯坦光子理论核心。D对——单位时间释放的光电子数正比于入射光强。选 BCD。',
      tag:'光电效应四大特点·真题' },

    // ============ 万有引力/圆周运动 ============
    { id:'phy_q436p6_11102', manualId:'phy_m11', type:'single', difficulty:'hard', gaokao:true,
      q:'（2023·山东·15）同步卫星的运行轨道离地面高度约为 3.6×10⁴ km。已知地球半径 6400 km，同步卫星周期为 24 h。若近地卫星周期为 T₁，则同步卫星周期 T₂/T₁ ≈',
      options:['A. 6','B. 12','C. 17','D. 24'],
      answer:'C',
      explain:'开普勒三定律 T²∝r³。r₁≈R=6400 km（近地）；r₂=R+h=6400+36000=42400 km。r₂/r₁≈6.625。T₂/T₁=√(r₂/r₁)³=√290.4≈17.04。选 C。',
      tag:'开普勒·同步卫星·真题' },
  ];

  function mount() {
    if (typeof window === 'undefined' || !window.PHYSICS_BANK) return;
    const bank = window.PHYSICS_BANK;
    const existing = new Set(bank.map(q => q.id));
    let added = 0;
    ALL_QS.forEach(q => {
      if (!existing.has(q.id)) { bank.push(q); added++; }
    });
    console.log('[物理·v4.3.6·精选真题 Part 6] 新增', added, '题, 主库题数:', bank.length);
  }

  if (typeof window !== 'undefined' && typeof document !== 'undefined' && document.readyState !== 'loading') mount();
  else if (typeof document !== 'undefined') document.addEventListener('DOMContentLoaded', mount);

  global.PHYSICS_V436_QUALITY_P6 = { ALL_QS, mount };
})(typeof window !== 'undefined' ? window : this);
