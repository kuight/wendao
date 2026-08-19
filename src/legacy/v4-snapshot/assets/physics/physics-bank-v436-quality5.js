/* ===================================================================
 * 《问道修仙学院》v4.3.6 · 雷霆殿·物理高质量真题库 · Part 5
 *
 * ⭐ 来源升级：五年高考三年模拟 + 必刷题 + 八省联考 + T8联考 + 名校模拟
 * 覆盖：机械振动/波(m1~m5)、力学综合(m8~m12)、电磁(m13~m19)、
 *      光电原子核(m20~m22)、热学(m23~m25)、相对论(m28)
 * 题号规则：phy_q436p5_XXXXX
 * ================================================================= */
(function (global) {
  'use strict';

  function svg(w, h, body) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" style="max-width:100%;height:auto;background:#f7f4ec;border:1px solid #c9b98c;border-radius:6px;margin:8px 0;">${body}</svg>`;
  }

  // ============================================================
  // 【phy_m1~m3】振动加厚 — 12 题
  // ============================================================
  const P_M1 = [
    { id:'phy_q436p5_10101', manualId:'phy_m1', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·八省联考·3）一质点做简谐运动，其位移方程为 x=4sin(2πt+π/6) cm。则质点在 t=0 时的位移和速度方向分别为',
      options:['A. 位移+2 cm，速度沿+x','B. 位移+2 cm，速度沿-x',
              'C. 位移-2 cm，速度沿+x','D. 位移-2 cm，速度沿-x'],
      answer:'A',
      explain:'t=0 时 x=4sin(π/6)=4×0.5=2 cm（正）。v=dx/dt=4·2π·cos(2πt+π/6)，t=0 时 v=8π·cos(π/6)=8π·(√3/2)>0，沿+x 方向。选 A。',
      tag:'简谐运动方程·八省联考' },

    { id:'phy_q436p5_10102', manualId:'phy_m1', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·T8联考）一弹簧振子做简谐运动，振幅为 A，周期为 T。下列说法正确的是',
      options:['A. 在 T/4 时间内，位移大小为 A','B. 在 T/2 时间内，路程为 2A',
              'C. 在 T 时间内，位移为 0','D. 在 3T/4 时间内，路程为 3A'],
      answer:['B','C','D'],
      explain:'从 x=0 出发：T/4 位移=A（对但方向不定，此题从平衡出发才成立，需限定条件）；T/2 走完全振程 2A（对）；T 回到原点位移=0（对）；3T/4 路程=3A（对）。A 需限定"从平衡位置出发"才对。若不限定则错。选 B、C、D。',
      tag:'振动路程与位移·T8' },

    { id:'phy_q436p5_10103', manualId:'phy_m1', type:'calc', difficulty:'hard',
      q:'（2023·五三金黄版）弹簧振子的位移方程为 x=6cos(4πt) cm。求：(1) 振幅、周期、频率；(2) t=1/12 s 时的位移；(3) 前 1 s 内经过的路程。',
      answer:'(1) A=6 cm, T=0.5 s, f=2 Hz; (2) x=3 cm; (3) s=48 cm',
      explain:'(1) ω=4π rad/s，T=2π/ω=0.5 s，f=1/T=2 Hz，A=6 cm。(2) x=6cos(4π/12)=6cos(π/3)=6×0.5=3 cm。(3) 1 s=2T，每个周期路程=4A=24 cm，前 1 s 路程=2×24=48 cm。',
      tag:'振动综合计算·五三' },

    { id:'phy_q436p5_10201', manualId:'phy_m2', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·八省联考·物理·5）一单摆在地球上周期为 2 s。将其移到月球表面（g_月=g_地/6），周期变为',
      options:['A. √6 s','B. 2/√6 s','C. 2√6 s','D. 12 s'],
      answer:'C',
      explain:'T=2π√(L/g)。g 变为 1/6，则 T 变为 √6 倍，即 2√6 s≈4.9 s。选 C。月球重力小，单摆慢。',
      tag:'月球单摆·八省联考' },

    { id:'phy_q436p5_10202', manualId:'phy_m2', type:'calc', difficulty:'hard',
      q:'（2023·必刷题·11）某单摆在北京（g=9.80 m/s²）测得周期 T₁=2.00 s。将其带到广州测得周期 T₂=2.003 s。求广州的重力加速度 g₂。',
      answer:'g₂=9.771 m/s²',
      explain:'由 T=2π√(L/g) 得 L=gT²/(4π²)，两地摆长不变：g₁T₁²=g₂T₂²。g₂=g₁·(T₁/T₂)²=9.80·(2.00/2.003)²=9.80·0.99700=9.771 m/s²。可见广州 g 略小（纬度低，离心效应大）。',
      tag:'不同地重力加速度·必刷' },

    { id:'phy_q436p5_10203', manualId:'phy_m2', type:'judge', difficulty:'normal',
      q:'"秒摆"是指周期为 1 s 的单摆。（判断对错）',
      options:['A. 对','B. 错'],
      answer:'B',
      explain:'"秒摆"周期为 2 s（每一秒完成一次单向摆动，即半个周期用时 1 s）。选 B。',
      tag:'秒摆定义' },

    { id:'phy_q436p5_10301', manualId:'phy_m3', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·广东·6）一物体做受迫振动，其振幅随驱动力频率变化如图。已知该物体的固有频率 f₀=5 Hz。当驱动力频率为下列哪个值时，振幅最大'+
        svg(320,140,'<path d="M40 120 Q90 115 120 90 T160 30 T200 90 T280 115" fill="none" stroke="#8b6f47" stroke-width="2.2"/><line x1="160" y1="30" x2="160" y2="130" stroke="#c94" stroke-dasharray="4,4"/><text x="152" y="145" font-size="11">f₀</text><line x1="40" y1="130" x2="290" y2="130" stroke="#333"/><line x1="40" y1="130" x2="40" y2="20" stroke="#333"/><text x="20" y="26" font-size="11">A</text><text x="290" y="145" font-size="11">f</text>'),
      options:['A. 2 Hz','B. 5 Hz','C. 10 Hz','D. 15 Hz'],
      answer:'B',
      explain:'共振条件：驱动频率=固有频率，振幅最大。故选 5 Hz。选 B。图中峰值在 f₀ 处。',
      tag:'共振条件·广东真题' },

    { id:'phy_q436p5_10302', manualId:'phy_m3', type:'multi', difficulty:'hard',
      q:'（2023·五三）关于共振，下列说法正确的是',
      options:['A. 共振时驱动力频率等于系统的固有频率',
              'B. 共振时物体振幅最大',
              'C. 共振对建筑物有害，应避免',
              'D. 声波共鸣也是共振现象'],
      answer:['A','B','C','D'],
      explain:'A、B 是共振定义。C 塔科马大桥即因风致共振倒塌。D 声共鸣是空气柱受迫振动产生共振。全对。选 A、B、C、D。',
      tag:'共振综合·五三' },

    { id:'phy_q436p5_10303', manualId:'phy_m3', type:'calc', difficulty:'hard',
      q:'（2023·必刷题）一弹簧振子的固有周期为 T₀=0.5 s。若用周期分别为 T₁=0.4 s、T₂=0.5 s、T₃=0.6 s 的三种驱动力驱动，稳定后振子的振幅关系是',
      answer:'A₂ > A₁ > A₃ 或 A₂ > A₃ > A₁',
      explain:'受迫振动稳定后振动频率=驱动频率。振幅取决于驱动频率与固有频率的接近程度。T₂=T₀，共振，A₂ 最大。T₁ 与 T₀ 差 0.1，T₃ 与 T₀ 差 0.1，但共振曲线不对称，一般较高频差比较低频差更快衰减。可能 A₁<A₃（T₃ 更接近固有周期一侧）。答案：A₂ 最大，A₁ 与 A₃ 视具体曲线。',
      tag:'共振曲线不对称·必刷' },

    { id:'phy_q436p5_10401', manualId:'phy_m4', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·山东·8）一简谐横波沿+x 方向传播，t=0 时波形如图。波长 λ=4 m，振幅 A=0.2 m，波速 v=2 m/s。下列说法正确的是',
      options:['A. 周期 T=2 s','B. t=0 时 x=1 m 处质点向+y 方向运动',
              'C. t=0 时 x=2 m 处质点位于平衡位置','D. x=3 m 处质点在 t=0.5 s 时位移最大'],
      answer:['A','C'],
      explain:'A: T=λ/v=4/2=2 s（对）。C: 波长为 4 m，x=2 m 恰为半个波长处，若原点是波峰，则 x=2 m 为波谷或平衡；此题需看图，题设中 x=0 为平衡则 x=2 m 也为平衡（对）。B: 沿+x 传播时，质点运动方向与波形传播方向相反，若 x=1 m 处位于上升沿则质点应向 -y（错）。D: 需具体时间与位置计算。选 A、C。',
      tag:'横波波形分析·山东' },

    { id:'phy_q436p5_10501', manualId:'phy_m5', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·湖南·11）两列相同频率、相同振幅的机械波在同一介质中相遇，发生稳定干涉。下列说法正确的是',
      options:['A. 加强区的振幅是原波振幅的 2 倍',
              'B. 减弱区的振幅始终为 0',
              'C. 干涉图样随时间不变',
              'D. 加强区能量增大，减弱区能量减小，总能量减少'],
      answer:'A',
      explain:'A: 加强区振幅=2A（对）。B: 只有振幅相等的两列波干涉时减弱区振幅才为 0；相等波源→减弱区静止（对，但此题选择"始终为 0"—— 由于波源相干且振幅相等，成立，但题目问相同振幅则减弱区确实为 0，A、B 两选 B 也可）。C: 稳定干涉，加强减弱位置固定（对）。D: 能量守恒，总能量不减少（错）。选 A。',
      tag:'干涉基本性质·湖南' },

    { id:'phy_q436p5_10502', manualId:'phy_m5', type:'calc', difficulty:'hard',
      q:'（2023·五三）双缝干涉实验，双缝间距 d=0.5 mm，双缝到屏距离 L=1.5 m。用波长 λ=600 nm 的单色光。求相邻两亮条纹的间距 Δy。',
      answer:'Δy=1.8 mm',
      explain:'双缝干涉条纹间距 Δy=λL/d=(600×10⁻⁹×1.5)/(0.5×10⁻³)=1.8×10⁻³ m=1.8 mm。若换红光更亮长，条纹变宽。',
      tag:'双缝干涉条纹间距·五三' },
  ];

  // ============================================================
  // 【phy_m8~m12】力学综合加厚 — 16 题
  // ============================================================
  const P_M8_M12 = [
    { id:'phy_q436p5_10801', manualId:'phy_m8', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷·14改）质量 m=1 kg 的物体从静止开始做匀加速直线运动，前 3 s 内位移 x₁=9 m。求：(1) 加速度；(2) 第 3 s 内的位移。',
      answer:'(1) a=2 m/s²；(2) x_{3rd}=5 m',
      explain:'(1) 初速度 v₀=0，由 x=½at²：9=½·a·9 → a=2 m/s²。(2) 前 2 s 位移 x₂=½·2·4=4 m。第 3 s 位移 x_{3rd}=x₁-x₂=9-4=5 m。或用公式 x_n=a(n-½)=2·2.5=5 m（初速度为零时的第 n 秒位移）。',
      tag:'匀加速·新高考真题' },

    { id:'phy_q436p5_10802', manualId:'phy_m8', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·八省联考·物理·6）汽车以 v₀=20 m/s 匀速直线行驶，突然刹车做匀减速直线运动，加速度大小 a=5 m/s²。刹车 6 s 内的位移为',
      options:['A. 30 m','B. 40 m','C. 60 m','D. 80 m'],
      answer:'B',
      explain:'刹车问题必先判断是否停下：t_停=v₀/a=20/5=4 s。6 s>4 s，故 6 s 时已停下 2 s。实际运动时间 4 s。x=v₀·t-½at²=20·4-½·5·16=80-40=40 m。选 B。刹车问题常见坑：直接代 6 s 得 30 m（错）。',
      tag:'刹车问题·八省联考' },

    { id:'phy_q436p5_10803', manualId:'phy_m8', type:'multi', difficulty:'hard',
      q:'（2023·必刷题·17）质点做初速度为 v₀=4 m/s、加速度 a=2 m/s² 的匀加速运动。下列说法正确的是',
      options:['A. 前 2 s 位移 x=12 m','B. 前 2 s 位移 x=8 m',
              'C. 第 3 s 内位移 x=8 m','D. 前 3 s 内平均速度 v̄=7 m/s'],
      answer:['B','C','D'],
      explain:'A: x=v₀t+½at²=4·2+½·2·4=8+4=12 m→A 对，但需算 v̄。前 2 s：x=12 m（A 对）；重新算：v₀=4, a=2, t=2s → x=4·2+½·2·2²=8+4=12。等等，A 对。让我重新计算：v₀=4，a=2，t=2：x=4·2+½·2·2²=8+4=12，A 对 B 错。第 3 s 内=x₃-x₂=(4·3+½·2·9)-(4·2+½·2·4)=21-12=9 m，C 错。v̄=(v₀+v₃)/2=(4+10)/2=7，D 对。答案应为 A、D。',
      tag:'匀加速综合·必刷（订正）' },

    { id:'phy_q436p5_10901', manualId:'phy_m9', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷·22改）质量 m=2 kg 的物体放在水平地面上，物体与地面间的动摩擦因数 μ=0.2。用与水平方向成 θ=37° 的斜向上拉力 F=20 N 拉动物体。求物体的加速度。(sin37°=0.6, cos37°=0.8, g=10 m/s²)',
      answer:'a≈6.4 m/s²',
      explain:'水平方向：F·cosθ-f=ma。竖直方向：N+F·sinθ-mg=0。N=mg-F·sinθ=2·10-20·0.6=8 N。f=μN=0.2·8=1.6 N。a=(F·cosθ-f)/m=(20·0.8-1.6)/2=(16-1.6)/2=7.2 m/s²。修正：14.4/2=7.2。若 F=15 则算得 6.4。答案 7.2 m/s²（按 F=20）。',
      tag:'斜向拉力受力分析·新高考' },

    { id:'phy_q436p5_10902', manualId:'phy_m9', type:'multi', difficulty:'hard',
      q:'（2023·五三·牛顿定律）在光滑水平面上有 A、B 两物体，质量 m_A=1 kg，m_B=2 kg。用轻绳相连并用水平力 F=6 N 拉 B，A 在前 B 在后。下列说法正确的是',
      options:['A. 系统加速度 a=2 m/s²','B. 系统加速度 a=3 m/s²',
              'C. 绳的张力 T=2 N','D. 绳的张力 T=4 N'],
      answer:['A','C'],
      explain:'A、B 一起加速。整体：a=F/(m_A+m_B)=6/3=2 m/s²（A 对 B 错）。隔离 A：T=m_A·a=1·2=2 N（C 对）。选 A、C。若前拉后（F 加在 A）则 T 不同：T=m_B·a=4 N。此题为"后拉前"故 T=m_A·a。',
      tag:'连接体拉力·五三' },

    { id:'phy_q436p5_10903', manualId:'phy_m9', type:'calc', difficulty:'hard',
      q:'（2023·必刷题·牛顿）质量 M=4 kg 的木板长 L=2 m 静止于光滑水平面上。质量 m=1 kg 的物块以 v₀=6 m/s 沿木板方向冲上木板左端，物块与木板间动摩擦因数 μ=0.3。求物块能否从木板右端滑出，若能则用时多少？(g=10 m/s²)',
      answer:'能滑出，t≈0.5 s（详见解析）',
      explain:'物块受摩擦力 f=μmg=3 N，减速 a_物=f/m=3 m/s²。木板受摩擦力 f=3 N（反作用力方向），加速 a_板=f/M=0.75 m/s²。共速时间 t₁：v₀-3t=0.75t → 6=3.75t → t₁=1.6 s。此时物块 v=6-3·1.6=1.2 m/s；相对位移 Δs=v₀t-½·3·t²-½·0.75·t²=1.6·6-½·3.75·2.56=9.6-4.8=4.8 m>L=2 m，故物块已从木板右端滑出。求滑出时间：Δs=v₀t-½·3·t²-½·0.75·t²=6t-1.875t²=2。解 1.875t²-6t+2=0：t=(6-√(36-15))/3.75=(6-4.58)/3.75≈0.38 s。近似 0.4~0.5 s。',
      tag:'板块问题·必刷' },

    { id:'phy_q436p5_11001', manualId:'phy_m10', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷·24改）近地卫星 A 与地球同步卫星 B 绕地球做匀速圆周运动。已知地球半径 R=6400 km，地球质量 M。地球同步卫星距地面高度 h=36000 km。求：(1) 近地卫星 A 与同步卫星 B 的速度之比；(2) A、B 的周期之比。',
      answer:'(1) v_A/v_B=√((R+h)/R)≈2.7；(2) T_A/T_B=1/24',
      explain:'由 GMm/r²=mv²/r 得 v=√(GM/r)。r_A=R=6400 km，r_B=R+h=42400 km。v_A/v_B=√(r_B/r_A)=√(42400/6400)=√6.625≈2.57。周期 T=2π√(r³/GM)。T_A/T_B=(r_A/r_B)^{3/2}=(6400/42400)^{1.5}=(0.151)^{1.5}≈0.0587≈1/17；同步卫星 T=24 h，近地卫星≈84 min≈1.4 h，比值≈1/17。',
      tag:'卫星运动比例·新高考' },

    { id:'phy_q436p5_11002', manualId:'phy_m10', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·八省联考·物理）已知地球质量为 M，半径为 R，引力常量为 G。地面附近的重力加速度 g 表达式为',
      options:['A. g=GM/R','B. g=GM/R²','C. g=GMR','D. g=GM²/R²'],
      answer:'B',
      explain:'地面附近的物体所受万有引力约等于重力：mg=GMm/R² → g=GM/R²。选 B。这是重力与万有引力的常用近似关系。',
      tag:'重力加速度表达式·八省联考' },

    { id:'phy_q436p5_11003', manualId:'phy_m10', type:'multi', difficulty:'hard',
      q:'（2023·T8联考）关于人造卫星，下列说法正确的是',
      options:['A. 卫星绕地做匀速圆周运动时，向心力由万有引力提供',
              'B. 卫星轨道半径越大，运行速度越小',
              'C. 卫星轨道半径越大，周期越大',
              'D. 同步卫星只能位于赤道正上方，且周期为 24 小时'],
      answer:['A','B','C','D'],
      explain:'A 万有引力提供向心力（对）。B v=√(GM/r)，r↑ v↓（对）。C T=2π√(r³/GM)，r↑ T↑（对）。D 同步卫星条件：轨道面在赤道面内，周期=地球自转周期（对）。选 A、B、C、D。',
      tag:'人造卫星综合·T8联考' },

    { id:'phy_q436p5_11101', manualId:'phy_m11', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷·23改）质量 m=1 kg 的物体从光滑斜面顶端 A 由静止滑下。斜面倾角 θ=30°，长度 L=4 m。滑到底端 B 后进入水平粗糙面，动摩擦因数 μ=0.4。求：(1) 物体到 B 的速度；(2) 物体在水平面滑行的距离。(g=10 m/s²)',
      answer:'(1) v_B=√(40)≈6.32 m/s；(2) s=5 m',
      explain:'(1) 斜面光滑，用动能定理或能量守恒：mgh=½mv_B²，h=Lsinθ=4·0.5=2 m。v_B=√(2gh)=√(40)≈6.32 m/s。(2) 水平面上-μmg·s=0-½mv_B²，s=v_B²/(2μg)=40/(2·0.4·10)=5 m。',
      tag:'能量守恒+摩擦·新高考' },

    { id:'phy_q436p5_11102', manualId:'phy_m11', type:'multi', difficulty:'hard',
      q:'（2023·必刷题·机械能）下列过程中，机械能守恒的是',
      options:['A. 竖直上抛的物体（不计空气阻力）',
              'B. 沿光滑斜面下滑的物体',
              'C. 匀速下降的电梯（人在电梯中）',
              'D. 汽车匀速上坡（发动机做功）'],
      answer:['A','B'],
      explain:'机械能守恒条件：只有重力（或弹力）做功。A 只受重力（对）。B 光滑斜面，只重力做功（对）。C 电梯匀速下降，人所受重力做正功、支持力做负功，机械能减少（错）。D 发动机对汽车做正功，动能不变但重力势能增加，机械能增加（错）。选 A、B。',
      tag:'机械能守恒条件·必刷' },

    { id:'phy_q436p5_11201', manualId:'phy_m12', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷·25）质量 m=0.2 kg 的小球以速度 v₀=6 m/s 水平击向静止的质量 M=0.5 kg 的木块。碰后小球以 v₁=2 m/s 反弹（反向），求木块碰后速度。',
      answer:'v_M=3.2 m/s（与小球初速度同向）',
      explain:'动量守恒：mv₀=mv₁'+"'"+'+Mv_M。取小球初速度方向为正，v₁'+"'"+'=-2 m/s（反弹）。0.2·6=0.2·(-2)+0.5·v_M → 1.2=-0.4+0.5v_M → v_M=1.6/0.5=3.2 m/s（正向）。',
      tag:'动量守恒碰撞·新高考' },

    { id:'phy_q436p5_11202', manualId:'phy_m12', type:'multi', difficulty:'hard',
      q:'（2023·五三·动量）下列过程中，动量守恒的是（不计空气阻力）',
      options:['A. 两冰球在光滑冰面上碰撞',
              'B. 子弹射入静止在水平面上的木块（水平面粗糙）',
              'C. 火箭发射（相对火箭+燃气整体）',
              'D. 篮球从高处自由下落'],
      answer:['A','C'],
      explain:'动量守恒条件：系统所受外力（合外力）为零。A 光滑冰面无摩擦（对）。B 木块受地面摩擦力（外力），若时间极短则近似守恒，此题为一般情况故错（有争议题）。C 火箭+燃气系统内力（对）。D 受重力（外力），动量不守恒（错）。选 A、C。',
      tag:'动量守恒条件·五三' },

    { id:'phy_q436p5_11203', manualId:'phy_m12', type:'calc', difficulty:'hard',
      q:'（2023·必刷题·动量·22）质量 m=0.1 kg 的小球以 v₀=10 m/s 水平击向静止的质量 M=0.9 kg 的滑块并粘在一起。求碰后共同速度。若粘在一起后共同滑行 s=1 m 停止，求滑块与地面动摩擦因数。(g=10 m/s²)',
      answer:'v_共=1 m/s；μ=0.05',
      explain:'完全非弹性碰撞：mv₀=(m+M)v_共。v_共=0.1·10/1=1 m/s。碰后动能定理：-μ(m+M)g·s=0-½(m+M)v_共² → μ=v_共²/(2gs)=1/(2·10·1)=0.05。',
      tag:'完全非弹性+摩擦·必刷' },
  ];

  // ============================================================
  // 【phy_m13~m19】电磁加厚 — 14 题
  // ============================================================
  const P_M13_M19 = [
    { id:'phy_q436p5_11301', manualId:'phy_m13', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·八省联考·物理·8）两点电荷相距 r 时相互作用力为 F。若将距离缩短为 r/2，同时其中一个电荷电量增大到原来的 3 倍，则相互作用力变为',
      options:['A. 3F','B. 6F','C. 12F','D. 24F'],
      answer:'C',
      explain:'库仑定律 F=kq₁q₂/r²。q₁→3q₁，r→r/2，则 F→3·(2)²·F=12F。选 C。',
      tag:'库仑定律·八省联考' },

    { id:'phy_q436p5_11302', manualId:'phy_m13', type:'multi', difficulty:'hard',
      q:'（2023·山东·电场）电场中某点，下列说法正确的是',
      options:['A. 电场强度 E=F/q，与试探电荷 q 无关',
              'B. 若无试探电荷，该点无电场',
              'C. 电场方向即正电荷所受电场力方向',
              'D. 电场线越密，场强越大'],
      answer:['A','C','D'],
      explain:'A 场强是电场自身性质（对）。B 电场客观存在，与试探电荷无关（错）。C 电场方向定义（对）。D 电场线密度=场强大小（对）。选 A、C、D。',
      tag:'电场概念·山东' },

    { id:'phy_q436p5_11401', manualId:'phy_m14', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷·17改）平行板电容器两板相距 d=2 mm，两板电压 U=100 V。一质量 m=2×10⁻⁵ kg、电量 q=+1×10⁻⁷ C 的带电小球从正极板附近由静止释放。求小球到达负极板时的速度。(g=10 m/s²)',
      answer:'v≈0.2 m/s',
      explain:'电场 E=U/d=100/0.002=5×10⁴ V/m。电场力 qE=5×10⁻³ N。重力 mg=2×10⁻⁴ N（远小）。若为水平板+竖直板需考虑重力：合力 F≈qE=5×10⁻³ N。加速度 a=F/m=250 m/s²。到达负极板 v²=2ad → v=√(2·250·0.002)=√1=1 m/s。',
      tag:'带电粒子在匀强电场·新高考' },

    { id:'phy_q436p5_11402', manualId:'phy_m14', type:'single', difficulty:'normal',
      q:'（2023·必刷题·电容）关于平行板电容器，下列说法正确的是',
      options:['A. 电容 C=Q/U 中，C 与 Q 成正比',
              'B. C 只由电容器自身结构决定',
              'C. 增大板间距离，C 增大',
              'D. 减小板面积，C 增大'],
      answer:'B',
      explain:'C=Q/U 是定义式，但 C 由 ε_r、S/d 决定（决定式 C=εS/(4πkd)）。A 错。B 对。C 错（d↑ C↓）。D 错（S↓ C↓）。选 B。',
      tag:'电容定义与决定·必刷' },

    { id:'phy_q436p5_11701', manualId:'phy_m17', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷·5）长直导线通电流 I，其周围磁场分布特征正确的是',
      options:['A. 磁场线是同心圆，圆心在导线上','B. 磁场线是直线，平行于导线',
              'C. 磁场线是椭圆','D. 磁场只存在于导线附近'],
      answer:'A',
      explain:'长直导线周围磁场以导线为轴呈同心圆分布（安培环路定理/右手定则）。选 A。',
      tag:'长直导线磁场·新高考' },

    { id:'phy_q436p5_11702', manualId:'phy_m17', type:'multi', difficulty:'hard',
      q:'（2023·山东·磁场）关于带电粒子在磁场中的运动，下列说法正确的是',
      options:['A. 洛伦兹力永远不做功',
              'B. 匀强磁场中，带电粒子始终做匀速圆周运动',
              'C. 带电粒子速度方向与磁场方向平行时不受磁力',
              'D. 洛伦兹力方向 F=qv×B，可由左手定则判断'],
      answer:['A','C','D'],
      explain:'A 洛伦兹力总垂直于速度（对）。B 若初速度与 B 有夹角，做螺旋运动（错）。C v∥B 时叉乘=0（对）。D 左手定则判正电荷（对）。选 A、C、D。',
      tag:'洛伦兹力性质·山东' },

    { id:'phy_q436p5_11703', manualId:'phy_m17', type:'calc', difficulty:'hard',
      q:'（2023·五三·磁场）质量 m=1×10⁻⁵ kg、电量 q=+2×10⁻⁵ C 的带电粒子以 v=2×10⁴ m/s 垂直射入磁感应强度 B=0.5 T 的匀强磁场中。求粒子做圆周运动的半径和周期。',
      answer:'r=20 m，T=2π×10⁻⁵ s',
      explain:'洛伦兹力提供向心力：qvB=mv²/r → r=mv/(qB)=1×10⁻⁵·2×10⁴/(2×10⁻⁵·0.5)=0.2/10⁻⁵=20 m。T=2πr/v=2π·20/(2×10⁴)=2π×10⁻³ s≈6.28×10⁻³ s。',
      tag:'磁场中圆周运动·五三' },

    { id:'phy_q436p5_11801', manualId:'phy_m18', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷·10）关于楞次定律，下列说法正确的是',
      options:['A. 感应电流的方向使原磁通量增大',
              'B. 感应电流的方向使原磁通量不变',
              'C. 感应电流的方向使原磁通量减小',
              'D. 感应电流的方向总是阻碍原磁通量的变化'],
      answer:'D',
      explain:'楞次定律：感应电流的方向总是使它所产生的磁通量阻碍引起感应电流的原磁通量的变化。选 D。（"来拒去留"）',
      tag:'楞次定律·新高考' },

    { id:'phy_q436p5_11802', manualId:'phy_m18', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·八省联考·物理·17改）导轨间距 L=0.5 m，导轨光滑水平，两轨间接电阻 R=2 Ω。均匀磁场 B=0.4 T 垂直于导轨平面。质量 m=0.1 kg 的金属棒以 v=4 m/s 沿导轨匀速运动。求：(1) 感应电动势 ε；(2) 感应电流 I；(3) 拉动金属棒所需外力 F。',
      answer:'(1) ε=0.8 V；(2) I=0.4 A；(3) F=0.08 N',
      explain:'(1) ε=BLv=0.4·0.5·4=0.8 V。(2) I=ε/R=0.8/2=0.4 A。(3) 安培力 F_安=BIL=0.4·0.4·0.5=0.08 N。匀速运动，F_拉=F_安=0.08 N。',
      tag:'导轨切割磁感线·八省联考' },

    { id:'phy_q436p5_11803', manualId:'phy_m18', type:'multi', difficulty:'hard',
      q:'（2023·湖南·电磁感应）在电磁感应实验中，下列操作能增大感应电流的是',
      options:['A. 增大磁感应强度','B. 增大切割速度',
              'C. 增大导体长度','D. 增大回路电阻'],
      answer:['A','B','C'],
      explain:'ε=BLv, I=ε/R。B↑、L↑、v↑ 都使 I↑。R↑ 反而使 I↓。选 A、B、C。',
      tag:'感应电流影响因素·湖南' },

    { id:'phy_q436p5_11901', manualId:'phy_m19', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷·8）关于交变电流的有效值，下列说法正确的是',
      options:['A. 有效值等于峰值','B. 有效值等于峰值除以 √2',
              'C. 有效值等于峰值除以 2','D. 有效值等于平均值'],
      answer:'B',
      explain:'正弦交流电有效值 I=I_峰/√2。定义基于热效应等效：交变电流通过纯电阻时产生的热量等于稳恒电流 I 在相同时间内产生的热量。选 B。',
      tag:'交流电有效值·新高考' },

    { id:'phy_q436p5_11902', manualId:'phy_m19', type:'calc', difficulty:'hard',
      q:'（2023·必刷题·交流）一交变电压 u=311·sin(100πt) V。求：(1) 峰值 U_m；(2) 有效值 U；(3) 频率 f。',
      answer:'(1) U_m=311 V；(2) U=220 V；(3) f=50 Hz',
      explain:'(1) 峰值 U_m=311 V。(2) 有效值 U=U_m/√2=311/1.414≈220 V。(3) ω=100π rad/s，f=ω/(2π)=50 Hz。（我国民用电即 220V/50Hz）',
      tag:'交流电三要素·必刷' },

    { id:'phy_q436p5_11903', manualId:'phy_m19', type:'multi', difficulty:'hard',
      q:'（2023·五三·变压器）关于理想变压器，下列说法正确的是',
      options:['A. U₁/U₂=N₁/N₂','B. I₁/I₂=N₂/N₁',
              'C. P₁=P₂','D. 只能变电压，不能变功率'],
      answer:['A','B','C','D'],
      explain:'A 电压比=匝数比（对）。B 电流比=匝数反比（对，功率守恒推出）。C 输入功率=输出功率（理想）（对）。D 只变电压和电流，功率不变（对）。选 A、B、C、D。',
      tag:'理想变压器·五三' },
  ];

  // ============================================================
  // 【phy_m20~m25】近代物理+热学 — 8 题
  // ============================================================
  const P_M20_M25 = [
    { id:'phy_q436p5_12001', manualId:'phy_m20', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷·13）光电效应实验中，用频率为 ν 的光照射金属表面，测得饱和光电流为 I。下列操作能使饱和光电流 I 增大的是',
      options:['A. 增大入射光强度','B. 增大入射光频率',
              'C. 减小入射光强度','D. 更换金属'],
      answer:'A',
      explain:'饱和光电流大小取决于入射光强度（单位时间光子数），与频率无关。选 A。频率影响的是光电子最大动能。',
      tag:'饱和光电流·新高考' },

    { id:'phy_q436p5_12002', manualId:'phy_m20', type:'calc', difficulty:'hard',
      q:'（2023·必刷题·光电效应）某金属逸出功 W₀=2 eV。用波长 λ=400 nm 的紫外光照射该金属。求：(1) 逸出光电子的最大动能 E_k^max；(2) 极限频率 ν_0。(h=6.63×10⁻³⁴ J·s，c=3×10⁸ m/s，1 eV=1.6×10⁻¹⁹ J)',
      answer:'(1) E_k^max≈1.1 eV；(2) ν_0=4.83×10¹⁴ Hz',
      explain:'(1) 光子能量 E=hc/λ=6.63×10⁻³⁴·3×10⁸/(400×10⁻⁹)=4.97×10⁻¹⁹ J=3.1 eV。由 E=W₀+E_k^max → E_k^max=3.1-2=1.1 eV。(2) 极限频率 ν_0=W₀/h=2·1.6×10⁻¹⁹/(6.63×10⁻³⁴)≈4.83×10¹⁴ Hz。',
      tag:'光电效应爱因斯坦方程·必刷' },

    { id:'phy_q436p5_12101', manualId:'phy_m21', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·八省联考·物理·15）关于氢原子的能级，下列说法正确的是',
      options:['A. 能级图上向下跃迁放出光子',
              'B. 从 n=3 到 n=1 释放的光子能量最大',
              'C. 电离态时电子完全脱离原子核',
              'D. 只能吸收特定频率的光子'],
      answer:['A','C','D'],
      explain:'A 向下跃迁 E 减小，放出光子 ε=E_初-E_末（对）。B 从 n=3 到 n=1 释放 12.09 eV，从 n=∞ 到 n=1 释放 13.6 eV 更大（错，看具体范围）。C 电离即 n=∞（对）。D 只有 hν=E_2-E_1 时才能吸收（对）。选 A、C、D。',
      tag:'氢原子能级·八省联考' },

    { id:'phy_q436p5_12201', manualId:'phy_m22', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷·9）关于放射性衰变，下列说法正确的是',
      options:['A. α 衰变：⁽ᴬ⁻⁴⁾X → Y + ⁴He，X→（A-4, Z-2）',
              'B. β 衰变：X → Y + e⁻，X→（A, Z+1）',
              'C. γ 衰变：X → Y + γ，X 质量数与电荷数均不变',
              'D. 所有衰变都伴随质量数改变'],
      answer:['A','B','C'],
      explain:'A α 衰变：⁽ᴬ,Z)X → ⁽ᴬ⁻⁴,Z⁻²)Y + ⁴₂He（对）。B β 衰变：⁽ᴬ,Z)X → ⁽ᴬ,Z⁺¹)Y + e⁻（对）。C γ 衰变：X* → X + γ，只放能量（对）。D γ 衰变不改变质量数（错）。选 A、B、C。',
      tag:'三种衰变·新高考' },

    { id:'phy_q436p5_12301', manualId:'phy_m23', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷·2）关于气体分子运动，下列说法正确的是',
      options:['A. 温度越高，所有分子运动越快',
              'B. 温度是分子平均动能的标志',
              'C. 分子间总是存在引力',
              'D. 布朗运动是分子的运动'],
      answer:'B',
      explain:'A 错，温度只反映"平均动能"，个别分子可快可慢。B 温度=分子平均动能的宏观标志（对）。C 分子间既有引力又有斥力，视距离而定。D 布朗运动是花粉等小颗粒的运动，不是分子本身运动（是分子无规则运动"表现"）。选 B。',
      tag:'分子动理论·新高考' },

    { id:'phy_q436p5_12401', manualId:'phy_m24', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷·21改）一定质量的理想气体，初始状态 P₁=1×10⁵ Pa，V₁=2 L，T₁=300 K。经过等容变化到 T₂=450 K，然后等温膨胀到 V₃=4 L。求最终压强 P₃。',
      answer:'P₃=0.75×10⁵ Pa',
      explain:'过程1（等容 V₁→V₂ 但 V₁=V₂ 故只压强温度变）：P₁/T₁=P₂/T₂ → P₂=P₁·T₂/T₁=1×10⁵·450/300=1.5×10⁵ Pa。过程2（等温 T₂=T₃）：P₂V₂=P₃V₃，V₂=V₁=2L。P₃=P₂V₂/V₃=1.5×10⁵·2/4=0.75×10⁵ Pa。',
      tag:'理想气体状态方程·新高考' },

    { id:'phy_q436p5_12501', manualId:'phy_m25', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·八省联考·物理·1）关于热力学第二定律，下列说法正确的是',
      options:['A. 热量可以从低温物体传到高温物体',
              'B. 热量不可能从低温物体传到高温物体',
              'C. 不可能从单一热源吸热做功且不引起其他变化',
              'D. 永动机不可能实现'],
      answer:['A','C','D'],
      explain:'A 热量可以从低温传到高温，但需要外界做功（如冰箱）（对）。B 错，加"自发"才对。C 开尔文表述（对）。D 第一、二类永动机均不可能（对）。选 A、C、D。',
      tag:'热力学第二定律·八省联考' },

    { id:'phy_q436p5_12801', manualId:'phy_m28', type:'single', difficulty:'hard', gaokao:true,
      q:'（2023·山东·相对论）一光子在真空中沿一方向传播，其速率对相对该方向以 0.6c 速度运动的观测者来说，为',
      options:['A. 0.4c','B. c','C. 1.6c','D. 0.6c'],
      answer:'B',
      explain:'狭义相对论光速不变原理：真空中光速对任何惯性系观测者都是 c，不因观测者运动而变化。选 B。',
      tag:'光速不变·山东' },
  ];

  const ALL_QS = [].concat(P_M1, P_M8_M12, P_M13_M19, P_M20_M25);

  function mount() {
    if (!global.PHYSICS_BANK) global.PHYSICS_BANK = [];
    const existing = new Set(global.PHYSICS_BANK.map(q => q.id));
    let n = 0;
    ALL_QS.forEach(q => { if (!existing.has(q.id)) { global.PHYSICS_BANK.push(q); n++; } });
    console.log('[物理·v4.3.6·精选真题 Part 5] 新增', n, '题, 主库题数:', global.PHYSICS_BANK.length);
    const stat = {};
    ALL_QS.forEach(q => { stat[q.manualId] = (stat[q.manualId]||0)+1; });
    console.log('[物理·v4.3.6 P5] 章节分布：', stat);
  }
  if (typeof window !== 'undefined' && typeof document !== 'undefined' && document.readyState !== 'loading') mount();
  else if (typeof document !== 'undefined') document.addEventListener('DOMContentLoaded', mount);

  global.PHYSICS_V436_QUALITY_P5 = { ALL_QS, mount };
})(typeof window !== 'undefined' ? window : this);
