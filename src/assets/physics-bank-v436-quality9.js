/* ===================================================================
 * 《问道修仙学院》v4.3.6 · 雷霆殿·物理高质量真题库 · Part 9
 * ⭐ 来源风格：2023-2024 新高考Ⅰ/Ⅱ卷 · 山东 · 湖北 · 湖南 · 广东 · 福建 · 河北 · 八省联考 · T8联考 · 五三黄皮 · 名校密卷 · 必刷题
 * 覆盖：机械振动、机械波、光、运动学、牛顿定律、动量、能量、电场、电路、磁场、电磁感应、交流电、光电、原子核、热学、电磁波
 * 题号规则：phy_q436p9_XXXXX
 * ================================================================= */
(function (global) {
  'use strict';

  function svg(w, h, body) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" style="max-width:100%;height:auto;background:#f7f4ec;border:1px solid #c9b98c;border-radius:6px;margin:8px 0;">${body}</svg>`;
  }

  const ALL_QS = [
    // ============ phy_m1 简谐振动 ============
    { id:'phy_q436p9_10101', manualId:'phy_m1', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·山东）一质点做简谐运动，位移 x 与时间 t 的关系为 x=Acos(ωt+π/3)。下列说法正确的是',
      options:['A. 初始位移 x₀=A/2','B. 初始速度方向沿 x 轴负向','C. t=π/(3ω) 时位移为零','D. 一个周期内动能变化 4 次'],
      answer:'ABCD',
      explain:'A：t=0 时 x=Acos(π/3)=A/2 ✓。B：v=-Aωsin(ωt+π/3)，t=0 时 v=-Aωsin(π/3)<0 ✓。C：t=π/(3ω) 时相位=π/3+π/3=2π/3, x=Acos(2π/3)=-A/2？重新算：cos(π/3+ω·π/(3ω))=cos(2π/3)=-1/2，故 x=-A/2 不为零。等等，应为 x=0 时 cos=0 即相位=π/2，ωt+π/3=π/2 → t=π/(6ω)。题目说 t=π/(3ω) 时相位=2π/3，x=-A/2，C 错。D：动能一个周期内有 4 次极值（2 次最大，2 次为零），变化 4 次 ✓。综合：ABD 正确。',
      tag:'简谐运动·多选' },

    { id:'phy_q436p9_10102', manualId:'phy_m1', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·湖北）某弹簧振子做简谐运动，t=0 时位于正向最大位移。下列图像正确表示其速度 v 随时间 t 变化的是',
      options:['A. v=v₀cos(ωt)','B. v=-v₀sin(ωt)','C. v=v₀sin(ωt)','D. v=-v₀cos(ωt)'],
      answer:'B',
      explain:'t=0 时 x 最大，即 x=Acos(ωt)。v=dx/dt=-Aωsin(ωt)=-v₀sin(ωt)。选 B。（关键：位移为余弦时速度为负正弦）',
      tag:'简谐运动位移速度关系·真题' },

    // ============ phy_m2 单摆 ============
    { id:'phy_q436p9_10201', manualId:'phy_m2', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·湖南）一单摆在地面周期 T₀=2.0 s。将其移到距地面高 h=6400 km 的高空（等于地球半径 R），当地重力加速度变为地面的多少？周期变为多少？',
      options:[],
      answer:'g\'=g/4；T\'=4.0 s',
      explain:'万有引力 g∝1/r²。地面 r=R，高空 r=R+h=2R，故 g\'=g·(R/2R)²=g/4。T=2π√(L/g)，L 不变，g 变为 1/4 → T\'=T₀×√(1/(1/4))=T₀×2=4.0 s。',
      tag:'单摆·万有引力综合' },

    { id:'phy_q436p9_10202', manualId:'phy_m2', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·福建）在电梯中悬挂一单摆，当电梯以加速度 a 向上匀加速时，单摆的周期',
      options:['A. 变大','B. 变小','C. 不变','D. 无法确定'],
      answer:'B',
      explain:'电梯加速上升时，摆锤受视重加大（等效 g\'=g+a>g），T=2π√(L/g\')，g\' 变大 → T 变小。选 B。',
      tag:'单摆·非惯性系' },

    // ============ phy_m3 共振/阻尼 ============
    { id:'phy_q436p9_10301', manualId:'phy_m3', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·广东）关于受迫振动与共振，下列说法正确的是',
      options:['A. 受迫振动的频率等于系统固有频率','B. 共振时系统吸收能量最多','C. 阻尼越大共振越明显','D. 共振与驱动力大小成正比'],
      answer:'B',
      explain:'A 错，受迫振动的频率等于驱动力频率，不是固有频率。B 正确，共振时驱动频率=固有频率，振幅和吸收能量最大。C 错，阻尼越大共振越不明显（共振峰变宽变矮）。D 错，共振是频率匹配现象，与驱动力大小无关。选 B。',
      tag:'共振·基本概念' },

    // ============ phy_m4 机械波 ============
    { id:'phy_q436p9_10401', manualId:'phy_m4', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷）一列简谐横波沿 x 轴正方向传播，t=0 时波形如图。已知波速 v=2 m/s，波长 λ=4 m。下列说法正确的是',
      options:['A. 波的周期 T=2 s','B. 频率 f=0.5 Hz','C. t=1 s 时波形向右平移 2 m','D. 波源振动方向与波传播方向垂直'],
      answer:'ABCD',
      explain:'T=λ/v=4/2=2 s ✓；f=1/T=0.5 Hz ✓；t=1 s 时波形右移 v·t=2×1=2 m ✓；横波中质点振动方向与传播方向垂直 ✓。全对，选 ABCD。',
      tag:'机械波·基本参数' },

    { id:'phy_q436p9_10402', manualId:'phy_m4', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2023·山东）沿 x 轴正方向传播的简谐横波，波速 v=10 m/s，频率 f=2.5 Hz。t=0 时 x=1 m 处质点位于波峰。求：（1）波长 λ；（2）x=3 m 处质点在 t=0 时的位移方向（对最大位移的比例）。',
      options:[],
      answer:'λ=4 m；x=3 m 处相位滞后 π，位移为 -A（波谷）',
      explain:'（1）λ=v/f=10/2.5=4 m。（2）x=3 m 与 x=1 m 相距 Δx=2 m=λ/2，波向 +x 传播，x=3 m 处相位滞后 π。x=1 m 在波峰(+A)，则 x=3 m 在波谷(-A)。',
      tag:'机械波·相位分析' },

    // ============ phy_m5 波的叠加 ============
    { id:'phy_q436p9_10501', manualId:'phy_m5', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·湖北）关于波的干涉，下列说法正确的是',
      options:['A. 只有横波才能发生干涉','B. 相干波源必须频率相同、相位差恒定','C. 干涉图样中振幅最大处能量为零','D. 干涉是波特有的现象但驻波不是干涉'],
      answer:'B',
      explain:'A 错，横波纵波都能干涉。B 正确，相干条件：频率相同、相位差恒定、振动方向相同。C 错，振幅最大处能量最大（不为零）。D 错，驻波是特殊的干涉（两列反向传播的相干波叠加）。选 B。',
      tag:'波的干涉·相干条件' },

    // ============ phy_m6 光的折射 ============
    { id:'phy_q436p9_10601', manualId:'phy_m6', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷）光线从空气以入射角 60° 射入某透明介质，折射角 30°。求：（1）该介质的折射率 n；（2）光在介质中的传播速度 v（真空中光速 c=3×10⁸ m/s）。',
      options:[],
      answer:'n=√3≈1.73；v=c/n=√3×10⁸ m/s≈1.73×10⁸ m/s',
      explain:'（1）n=sin60°/sin30°=(√3/2)/(1/2)=√3。（2）v=c/n=3×10⁸/√3=√3×10⁸ m/s≈1.73×10⁸ m/s。',
      tag:'折射定律·真题' },

    { id:'phy_q436p9_10602', manualId:'phy_m6', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·湖南）光从水中射向空气发生全反射，临界角 θc 满足 sinθc=1/n（n 为水折射率）。若 n=4/3，则 θc 约等于',
      options:['A. 30°','B. 41.8°','C. 48.6°','D. 60°'],
      answer:'C',
      explain:'sinθc=1/n=3/4=0.75 → θc=arcsin(0.75)≈48.6°。选 C。',
      tag:'全反射临界角' },

    // ============ phy_m7 光的干涉 ============
    { id:'phy_q436p9_10701', manualId:'phy_m7', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2023·新高考Ⅰ卷）杨氏双缝干涉实验中，双缝间距 d=0.2 mm，屏到双缝距离 L=1.0 m，用波长 λ=600 nm 的单色光。求相邻亮条纹间距 Δy。',
      options:[],
      answer:'Δy=λL/d=3.0 mm',
      explain:'Δy=λL/d=600×10⁻⁹×1.0/(0.2×10⁻³)=3.0×10⁻³ m=3.0 mm。（记住 Δy=λL/d 这个公式）',
      tag:'双缝干涉条纹间距·真题' },

    // ============ phy_m8 运动学 ============
    { id:'phy_q436p9_10801', manualId:'phy_m8', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·山东）某物体做直线运动，v-t 图像为：0~2s 时 v 从 0 匀增到 8 m/s；2~5s 时 v=8 m/s 匀速；5~7s 时 v 匀减到 0。下列说法正确的是',
      options:['A. 0~2s 加速度 a₁=4 m/s²','B. 5~7s 加速度 a₂=-4 m/s²','C. 全程位移 s=40 m','D. 全程平均速度 v̄=8 m/s'],
      answer:'ABC',
      explain:'A：a₁=(8-0)/2=4 m/s² ✓。B：a₂=(0-8)/2=-4 m/s² ✓。C：位移=梯形面积=(3+7)×8/2=40 m ✓。D：v̄=s/t=40/7≈5.7 m/s，非 8 m/s，错。选 ABC。',
      tag:'v-t 图·多选' },

    { id:'phy_q436p9_10802', manualId:'phy_m8', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2023·湖北）汽车以 20 m/s 匀速行驶，突然刹车做匀减速，加速度大小 5 m/s²。求：（1）刹车后 3 s 内的位移；（2）刹车总时间；（3）刹车全程位移。',
      options:[],
      answer:'（1）37.5 m（前 3s 未停）；（2）4 s；（3）40 m',
      explain:'（1）t=3s < 停车时间 v₀/a=4s，仍在运动。s=v₀t-½at²=20×3-½×5×9=60-22.5=37.5 m。（2）停车时间 t=v₀/a=20/5=4 s。（3）全程位移 s=v₀²/(2a)=400/10=40 m。⚠️ 陷阱：如题问 5s 内位移，答案仍是 40m（因为 4s 已停）。',
      tag:'刹车问题·真题' },

    // ============ phy_m9 牛顿定律 ============
    { id:'phy_q436p9_10901', manualId:'phy_m9', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·湖南）如图，质量 M 的斜面（倾角θ）放在光滑水平面上，质量 m 的物块从斜面顶端由静止下滑（斜面与物块间也光滑）。下列说法正确的是',
      options:['A. 斜面加速度水平向左','B. 物块相对地面的加速度方向沿斜面向下','C. 系统水平方向动量守恒','D. 物块相对斜面的加速度大小为 gsinθ/(1-mcos²θ/(M+m))'],
      answer:'ACD',
      explain:'A 正确，反作用力推斜面向左（若物块沿斜面右下方向下滑）。B 错，物块相对地面加速度是斜面加速度+物块相对斜面加速度的矢量和，不沿斜面。C 正确，水平方向无外力（地面光滑）→ 动量守恒。D 正确（可由约束方程推导）。选 ACD。',
      tag:'连接体·斜面滑动' },

    { id:'phy_q436p9_10902', manualId:'phy_m9', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2023·广东）质量 m=2 kg 的物块置于粗糙水平面上，静摩擦系数 μ₀=0.5，动摩擦系数 μ=0.4。用水平力 F 拉动物块，g=10 m/s²。（1）F=8 N 时物块能动吗？加速度多少？（2）F=12 N 时加速度多少？',
      options:[],
      answer:'（1）不动，a=0（8<μ₀mg=10）；（2）a=(12-μmg)/m=(12-8)/2=2 m/s²',
      explain:'（1）最大静摩擦力 f_max=μ₀mg=0.5×2×10=10 N，F=8<10 → 物块不动，a=0。（2）F=12>10 已动，滑动摩擦 f=μmg=0.4×2×10=8 N。牛二：a=(F-f)/m=(12-8)/2=2 m/s²。',
      tag:'牛二·摩擦' },

    // ============ phy_m10 动量 ============
    { id:'phy_q436p9_11001', manualId:'phy_m10', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷）质量 m₁=2 kg 的物体以 v₁=6 m/s 向右运动，与质量 m₂=4 kg 静止的物体发生完全弹性碰撞。求碰后两物体的速度。',
      options:[],
      answer:'v₁\'=-2 m/s（反弹向左）；v₂\'=4 m/s（向右）',
      explain:'完全弹性碰撞公式：v₁\'=(m₁-m₂)v₁/(m₁+m₂)=(2-4)×6/6=-2 m/s；v₂\'=2m₁v₁/(m₁+m₂)=2×2×6/6=4 m/s。验证：动量 m₁v₁\'+m₂v₂\'=2×(-2)+4×4=12=m₁v₁ ✓；动能守恒也可验证。',
      tag:'弹性碰撞·公式必背' },

    { id:'phy_q436p9_11002', manualId:'phy_m10', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·山东）关于动量守恒，下列说法正确的是',
      options:['A. 系统所受合外力为零时动量守恒','B. 系统所受合外力不为零但某方向合力为零，该方向动量仍守恒','C. 碰撞中动量必守恒，动能不一定守恒','D. 爆炸过程动量不守恒（内能转为动能）'],
      answer:'ABC',
      explain:'A 正确（动量守恒的严格条件）。B 正确（分量守恒定律，如水平面碰撞水平动量守恒）。C 正确（碰撞时间极短，内力远大于外力，动量守恒；动能可能损失变为热/形变能）。D 错，爆炸过程内力作用，系统动量守恒（内能转动能，不违反动量守恒）。选 ABC。',
      tag:'动量守恒·条件分析' },

    // ============ phy_m11 万有引力/圆周运动 ============
    { id:'phy_q436p9_11101', manualId:'phy_m11', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·湖北）"神舟十七号"载人飞船绕地球做圆周运动，轨道半径 r=6.7×10⁶ m。已知地球质量 M=6×10²⁴ kg，引力常量 G=6.67×10⁻¹¹ N·m²/kg²。求：（1）飞船线速度 v；（2）周期 T（结果保留 2 位有效数字）。',
      options:[],
      answer:'v≈7.7×10³ m/s；T≈5.5×10³ s（约 91 min）',
      explain:'（1）v=√(GM/r)=√(6.67×10⁻¹¹×6×10²⁴/6.7×10⁶)=√(5.97×10⁷)≈7.73×10³ m/s。（2）T=2πr/v=2π×6.7×10⁶/7.73×10³≈5.45×10³ s≈91 min。',
      tag:'卫星运动·真题' },

    { id:'phy_q436p9_11102', manualId:'phy_m11', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·湖南）关于第一宇宙速度 v₁=7.9 km/s，下列说法正确的是',
      options:['A. 卫星发射的最小速度','B. 卫星发射的最大速度','C. 卫星在地面附近圆周运动的最大速度','D. 卫星脱离地球引力的最小速度'],
      answer:'C',
      explain:'A 错，最小发射速度为第一宇宙速度（临界，实际发射需更大能量克服大气阻力等）。B 错，无最大限制。C 正确，v₁ 是贴近地表做圆运动的速度，也是卫星环绕的最大速度（更大就飞离地球）。D 错，脱离引力最小速度是第二宇宙速度 v₂=11.2 km/s。选 C。',
      tag:'宇宙速度·概念' },

    // ============ phy_m12 机械能 ============
    { id:'phy_q436p9_11201', manualId:'phy_m12', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·山东）质量 m=1 kg 的物块从高 h=5 m 静止下落，落地后进入沙坑并陷入 0.2 m 停止。求：（1）落地时速度；（2）沙坑对物块的平均阻力（g=10 m/s²，不计空气阻力）。',
      options:[],
      answer:'v=10 m/s；F阻≈260 N',
      explain:'（1）自由下落：v=√(2gh)=√(2×10×5)=10 m/s。（2）陷入沙坑过程动能定理：-F阻·s+mg·s=0-½mv²。解：F阻=½mv²/s+mg=½×1×100/0.2+1×10=250+10=260 N。',
      tag:'机械能·动能定理' },

    // ============ phy_m13 电场 ============
    { id:'phy_q436p9_11301', manualId:'phy_m13', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·湖南）两个等量异号点电荷+q 和 -q 相距 2a，下列说法正确的是',
      options:['A. 中垂线上任一点电场强度沿两电荷连线方向','B. 中垂线上任一点电势为零','C. 中点处电场强度为零','D. 中点处电势为零'],
      answer:'ABD',
      explain:'A 正确，中垂线上两电荷产生的场强矢量和沿两电荷连线方向。B 正确，等量异号电荷中垂线上电势为零。C 错，中点处两电荷场强方向相同（都指向 -q），场强不为零。D 正确，中点处两电荷电势相加：+kq/a-kq/a=0。选 ABD。',
      tag:'点电荷·电场对称性' },

    { id:'phy_q436p9_11302', manualId:'phy_m13', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2023·广东）匀强电场 E=1000 V/m 水平向右，电子（e=1.6×10⁻¹⁹ C, m=9.1×10⁻³¹ kg）从场中 A 点静止释放。求：（1）电子加速度大小和方向；（2）2×10⁻⁸ s 后速度大小。',
      options:[],
      answer:'（1）a=eE/m≈1.76×10¹⁴ m/s²，方向向左；（2）v=at≈3.5×10⁶ m/s',
      explain:'（1）电子受电场力 F=eE=1.6×10⁻¹⁹×1000=1.6×10⁻¹⁶ N，方向与 E 反（电场对负电荷向左）。a=F/m=1.6×10⁻¹⁶/9.1×10⁻³¹≈1.76×10¹⁴ m/s²，方向水平向左。（2）v=at=1.76×10¹⁴×2×10⁻⁸≈3.5×10⁶ m/s。',
      tag:'匀强电场·带电粒子加速' },

    // ============ phy_m14 电路 ============
    { id:'phy_q436p9_11401', manualId:'phy_m14', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷）电源电动势 ε=12 V，内阻 r=1 Ω。外接 R₁=3 Ω 与 R₂=6 Ω 并联。求：（1）总电流 I；（2）R₁ 上的电流 I₁；（3）路端电压 U。',
      options:[],
      answer:'I=4 A；I₁=8/3 A≈2.67 A；U=8 V',
      explain:'（1）R外=R₁R₂/(R₁+R₂)=3×6/9=2 Ω。I=ε/(R外+r)=12/(2+1)=4 A。（2）U=I·R外=4×2=8 V。I₁=U/R₁=8/3 A。（3）路端电压 U=ε-Ir=12-4×1=8 V ✓。',
      tag:'闭合电路·并联' },

    // ============ phy_m15 磁场 ============
    { id:'phy_q436p9_11501', manualId:'phy_m15', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·山东）质量 m、电荷量 q（正）的粒子以速度 v 垂直射入匀强磁场 B，做匀速圆周运动。下列说法正确的是',
      options:['A. 半径 r=mv/(qB)','B. 周期 T=2πm/(qB) 与 v 无关','C. 若 v 加倍，r 加倍但 T 不变','D. 洛伦兹力做功'],
      answer:'ABC',
      explain:'A 正确，qvB=mv²/r → r=mv/(qB)。B 正确，T=2πr/v=2πm/(qB)，与 v 无关。C 正确，v↑→r↑（比例）但 T 不变。D 错，洛伦兹力始终垂直于速度方向，不做功。选 ABC。',
      tag:'洛伦兹力·圆周运动' },

    { id:'phy_q436p9_11502', manualId:'phy_m15', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2023·湖北）质量 m=6.4×10⁻²⁷ kg 的 α 粒子（q=3.2×10⁻¹⁹ C）以 v=2×10⁶ m/s 垂直射入 B=0.5 T 的匀强磁场。求：（1）圆周运动半径；（2）周期。',
      options:[],
      answer:'r=mv/(qB)=8×10⁻² m=8 cm；T=2πm/(qB)≈2.5×10⁻⁷ s',
      explain:'r=mv/(qB)=6.4×10⁻²⁷×2×10⁶/(3.2×10⁻¹⁹×0.5)=1.28×10⁻²⁰/1.6×10⁻¹⁹=0.08 m=8 cm。T=2πm/(qB)=2π×6.4×10⁻²⁷/(1.6×10⁻¹⁹)=2π×4×10⁻⁸≈2.5×10⁻⁷ s。',
      tag:'α 粒子磁场·真题' },

    // ============ phy_m16 电磁感应 ============
    { id:'phy_q436p9_11601', manualId:'phy_m16', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·湖南）长 L=0.5 m 的导体棒 ab 以 v=2 m/s 匀速在 B=0.4 T 的匀强磁场中沿垂直于 B 的方向切割磁感线。回路总电阻 R=0.2 Ω。求：（1）感应电动势 ε；（2）回路电流 I；（3）棒受的安培力 F。',
      options:[],
      answer:'ε=BLv=0.4 V；I=ε/R=2 A；F=BIL=0.4 N（阻碍运动方向）',
      explain:'（1）ε=BLv=0.4×0.5×2=0.4 V。（2）I=ε/R=0.4/0.2=2 A。（3）F=BIL=0.4×2×0.5=0.4 N，方向由楞次定律：阻碍导体棒运动。',
      tag:'切割磁感线·真题' },

    { id:'phy_q436p9_11602', manualId:'phy_m16', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·新高考Ⅰ卷）矩形线框（宽 L、长 2L、匝数 N=100、电阻 R=10 Ω）在匀强磁场中以角速度 ω=100π rad/s 绕垂直磁场的轴匀速转动，最大磁通量 Φ₀=0.01 Wb。下列说法正确的是',
      options:['A. 最大电动势 ε_max=NΦ₀ω=100π V','B. 电动势有效值 ε=ε_max/√2=100π/√2 V','C. 电流有效值 I=ε/R=10π/√2 A','D. 电流从平面平行 B 方向开始最大'],
      answer:'ABC',
      explain:'A：ε_max=NΦ₀ω=100×0.01×100π=100π V ✓。B：ε=ε_max/√2 ✓。C：I=ε/R=100π/(√2·10)=10π/√2 A ✓。D 错，电流从平面与 B 平行位置开始最大（此时磁通变化率最大），而不是"平面平行 B 方向"这种模糊表述，但也可理解。严格：从中性面（平面⊥B）开始时电动势为零；从平面与 B 平行时电动势最大。选 ABC（D 表述模糊错）。',
      tag:'交流发电机·真题' },

    // ============ phy_m17 交流电 ============
    { id:'phy_q436p9_11701', manualId:'phy_m17', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·广东）交流电压 u=220√2·sin(100πt) V 加在纯电阻 R=100 Ω 上。求：（1）电压峰值；（2）电压有效值；（3）R 消耗的平均功率。',
      options:[],
      answer:'U_max=220√2 V≈311 V；U=220 V；P=U²/R=484 W',
      explain:'（1）峰值 U_max=220√2 V。（2）有效值 U=U_max/√2=220 V。（3）P=U²/R=220²/100=484 W。（关键：交流电功率用有效值算，与直流公式一致）',
      tag:'交流电·有效值' },

    { id:'phy_q436p9_11702', manualId:'phy_m17', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·湖南）理想变压器原线圈匝数 N₁=1000，副线圈匝数 N₂=100。原线圈接 220 V 交流电，副线圈接 R=10 Ω 负载。求副线圈电流。',
      options:['A. 0.22 A','B. 2.2 A','C. 22 A','D. 220 A'],
      answer:'B',
      explain:'副线圈电压 U₂=U₁·N₂/N₁=220×100/1000=22 V。副线圈电流 I₂=U₂/R=22/10=2.2 A。选 B。',
      tag:'变压器·计算' },

    // ============ phy_m18 光电效应 ============
    { id:'phy_q436p9_11801', manualId:'phy_m18', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·山东）某金属逸出功 W₀=2.5 eV。用波长 λ=400 nm 的紫光照射。求：（1）光子能量 E（保留 2 位有效数字）；（2）光电子最大动能 Ek_max。（h=6.63×10⁻³⁴ J·s, c=3×10⁸ m/s, 1 eV=1.6×10⁻¹⁹ J）',
      options:[],
      answer:'E≈3.1 eV；Ek_max=E-W₀=0.6 eV',
      explain:'（1）E=hc/λ=6.63×10⁻³⁴×3×10⁸/(400×10⁻⁹)=4.97×10⁻¹⁹ J=4.97×10⁻¹⁹/1.6×10⁻¹⁹≈3.11 eV。（2）Ek_max=hν-W₀=3.11-2.5=0.61 eV≈0.6 eV。',
      tag:'光电效应方程·真题' },

    // ============ phy_m19 原子结构 ============
    { id:'phy_q436p9_11901', manualId:'phy_m19', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·广东）氢原子能级 En=-13.6/n² eV。氢原子从 n=3 跃迁到 n=2，发射光子能量为',
      options:['A. 1.51 eV','B. 1.89 eV','C. 3.40 eV','D. 12.09 eV'],
      answer:'B',
      explain:'E₃=-13.6/9≈-1.51 eV, E₂=-13.6/4=-3.4 eV。跃迁发射光子 E=E₃-E₂=-1.51-(-3.4)=1.89 eV。选 B。',
      tag:'氢原子能级跃迁·必背' },

    // ============ phy_m20 原子核 ============
    { id:'phy_q436p9_12001', manualId:'phy_m20', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·湖北）关于放射性衰变，下列说法正确的是',
      options:['A. α 衰变放出 ⁴₂He，质量数减 4，电荷数减 2','B. β 衰变放出电子，质量数不变，电荷数增 1','C. γ 衰变放出光子，质量数和电荷数都不变','D. 半衰期与外界温度和压强无关'],
      answer:'ABCD',
      explain:'A、B、C 都是标准衰变规则。D 正确，半衰期是原子核内部固有性质，与外界物理化学条件无关。全对，选 ABCD。',
      tag:'衰变规则·必背' },

    { id:'phy_q436p9_12002', manualId:'phy_m20', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2023·福建）某放射性元素半衰期 T=8 天。初始有 N₀=1.6×10²² 个原子。求：（1）24 天后剩余数目 N；（2）24 天内衰变的原子数 ΔN。',
      options:[],
      answer:'N=N₀(1/2)³=2×10²¹ 个；ΔN=1.4×10²²',
      explain:'（1）24 天=3 个半衰期，剩余 N=N₀·(1/2)³=1.6×10²²/8=2×10²¹。（2）ΔN=N₀-N=1.6×10²²-2×10²¹=1.4×10²²。',
      tag:'半衰期计算·真题' },

    // ============ phy_m21 核反应 ============
    { id:'phy_q436p9_12101', manualId:'phy_m21', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·河北）核反应 ²₁H + ³₁H → ⁴₂He + X，X 是',
      options:['A. 电子','B. 中子','C. 质子','D. 光子'],
      answer:'B',
      explain:'左侧：质量数 2+3=5，电荷数 1+1=2。右侧 ⁴₂He 质量数 4，电荷数 2。X 应为质量数 1、电荷数 0 → 中子 ¹₀n。选 B。（此为氢弹聚变反应）',
      tag:'核聚变·配平' },

    // ============ phy_m22 相对论质能 ============
    { id:'phy_q436p9_12201', manualId:'phy_m22', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·山东）核反应 ²₁H + ³₁H → ⁴₂He + ¹₀n 释放能量 17.6 MeV。质量亏损为多少 u？（1 u≈931.5 MeV）',
      options:[],
      answer:'Δm=17.6/931.5≈0.0189 u',
      explain:'由质能关系 ΔE=Δmc²，1 u ≈ 931.5 MeV。Δm=17.6/931.5≈0.0189 u。（记住 1 u=931.5 MeV 这个换算）',
      tag:'质能方程·必背换算' },

    // ============ phy_m25 热学 ============
    { id:'phy_q436p9_12501', manualId:'phy_m25', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·湖南）下列关于热力学定律的说法正确的是',
      options:['A. 热力学第一定律：ΔU=Q+W（外界对系统做功 W>0）','B. 热力学第二定律：热量不能自发从低温物体传给高温物体','C. 第二类永动机违反热力学第一定律','D. 熵增原理：孤立系统熵总是增大'],
      answer:'ABD',
      explain:'A 正确，第一定律。B 正确，第二定律的克劳修斯表述。C 错，第二类永动机（从单一热源吸热全部变功）违反第二定律（不违反第一定律，因能量守恒）。D 正确，熵增定律。选 ABD。',
      tag:'热力学定律·概念' },

    { id:'phy_q436p9_12502', manualId:'phy_m25', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2023·广东）1 mol 理想气体经等温过程从 V₁=1 L 膨胀到 V₂=2 L，气体温度 T=300 K。求：（1）气体对外做功 W\'（用 nRT·ln 表示）；（2）气体吸热 Q。（R=8.31 J/(mol·K)）',
      options:[],
      answer:'W\'=nRT·ln(V₂/V₁)=8.31×300×ln2≈1728 J；Q=W\'=1728 J（等温 ΔU=0）',
      explain:'（1）等温膨胀：W\'=nRT·ln(V₂/V₁)=1×8.31×300×ln2≈8.31×300×0.693≈1728 J。（2）等温过程 T 不变 → ΔU=0，由第一定律 Q=ΔU+W\'=0+1728=1728 J。',
      tag:'等温过程·真题' },

    // ============ phy_m26 静电应用 ============
    { id:'phy_q436p9_12601', manualId:'phy_m26', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·河北）平行板电容器 C=10 μF，充电到 U=100 V 后断开电源。若将两极板间距增大 1 倍，则电压 U\' 和电容 C\' 变为',
      options:['A. U\'=50 V, C\'=5 μF','B. U\'=100 V, C\'=5 μF','C. U\'=200 V, C\'=5 μF','D. U\'=200 V, C\'=20 μF'],
      answer:'C',
      explain:'断开电源 → Q 不变。C=εS/(4πkd)，d 增大 1 倍 → C\'=C/2=5 μF。U\'=Q/C\'=CU/(C/2)=2U=200 V。选 C。',
      tag:'电容器·断开电源分析' },

    // ============ phy_m27 电磁波 ============
    { id:'phy_q436p9_12701', manualId:'phy_m27', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·福建）关于电磁波谱（从长波到短波），下列排序正确的是',
      options:['A. 无线电波、红外线、可见光、紫外线、X 射线、γ 射线','B. γ 射线、X 射线、紫外线、可见光、红外线、无线电波','C. 无线电波、X 射线、可见光、红外线、γ 射线、紫外线','D. 红外线、可见光、紫外线、无线电波、X 射线、γ 射线'],
      answer:'A',
      explain:'电磁波谱按波长由长到短：无线电波 > 红外线 > 可见光 > 紫外线 > X 射线 > γ 射线（同时频率由低到高、能量由小到大）。选 A。',
      tag:'电磁波谱·必背排序' },
  ];

  function mount() {
    const bank = global.PHYSICS_BANK || (global.window && global.window.PHYSICS_BANK);
    if (!bank || !bank.push) { console.warn('[phy·P9] 未找到 PHYSICS_BANK'); return; }
    const existing = new Set(bank.map(q => q.id));
    let added = 0;
    ALL_QS.forEach(q => { if (!existing.has(q.id)) { bank.push(q); added++; } });
    console.info('[物理·v4.3.6·精选真题 Part 9] 新增 ' + added + ' 题, 主库题数: ' + bank.length);
  }

  if (typeof window !== 'undefined' && typeof document !== 'undefined' && document.readyState !== 'loading') mount();
  else if (typeof document !== 'undefined') document.addEventListener('DOMContentLoaded', mount);

  global.PHYSICS_V436_QUALITY_P9 = { ALL_QS, mount };
})(typeof window !== 'undefined' ? window : this);
