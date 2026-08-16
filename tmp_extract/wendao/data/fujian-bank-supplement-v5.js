/* ===================================================
 * 福建高考真题·物理专项深化包 v4.2.6-v5
 *
 * 独立于 v1-v4,可并存
 * 侧重：物理 100 题（力学 40 + 电磁 20 + 光学热学近代 40）
 *      → 三科题库正式冲击 4000 题级
 *
 * 全部带 explain,标注 local_fj / gaokao
 * =================================================== */
(function (global) {
  'use strict';

  const PHYSICS_FUJIAN_V5 = [
    // ==========================================================
    // 一、力学专项（40 题）
    // ==========================================================

    // ---- 匀变速直线运动（8）----
    { id:'phyfj5_001', manualId:'phy_m01', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'初速度为零的匀加速直线运动,第1秒末速度为2m/s,则加速度和第3秒末的速度分别是',
      options:['A. a=2,v3=6','B. a=1,v3=3','C. a=2,v3=4','D. a=4,v3=12'],
      answer:'A',
      explain:'a=(v1-0)/1=2m/s²;v3=at=2×3=6m/s。选A。'
    },
    { id:'phyfj5_002', manualId:'phy_m01', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'自由落体10s下落的距离(g=10m/s²)',
      options:['A. 100m','B. 500m','C. 50m','D. 1000m'],
      answer:'B',
      explain:'h=½gt²=½×10×10²=500m。选B。'
    },
    { id:'phyfj5_003', manualId:'phy_m01', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'汽车以20m/s匀速行驶,刹车加速度大小为5m/s²,刹车后6s内位移为',
      options:['A. 40m','B. 60m','C. 30m','D. 120m'],
      answer:'A',
      explain:'先算停车时间 t₀=v/a=20/5=4s。6s>4s,只能算前4s。x=v²/(2a)=400/10=40m。选A。'
    },
    { id:'phyfj5_004', manualId:'phy_m01', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'一物体做匀减速直线运动,前2s位移16m,前4s位移24m,则加速度大小为',
      options:['A. 2m/s²','B. 4m/s²','C. 1m/s²','D. 8m/s²'],
      answer:'B',
      explain:'设初速v0,加速度a(减速取负值)。x1=v0·2+½a·4=16;x2=v0·4+½a·16=24。解得v0=10m/s,a=-4m/s²。加速度大小4m/s²。选B。'
    },
    { id:'phyfj5_005', manualId:'phy_m01', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'匀变速直线运动中,相邻相等时间T内的位移之差等于',
      options:['A. aT','B. aT²','C. a/T','D. 常数,数值不定'],
      answer:'B',
      explain:'Δx=aT²,这是匀变速运动的判据。常用逐差法求加速度。选B。'
    },
    { id:'phyfj5_006', manualId:'phy_m01', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'某质点做直线运动,速度—时间图像上,速度对时间轴所围面积表示',
      options:['A. 加速度','B. 位移','C. 力','D. 平均速度'],
      answer:'B',
      explain:'v-t图像下方"面积"表示位移(x=vΔt的累积)。斜率表示加速度。选B。'
    },
    { id:'phyfj5_007', manualId:'phy_m01', type:'judge', difficulty:'easy', local_fj:true, gaokao:true,
      q:'匀变速直线运动中,某段时间的平均速度等于中间时刻的瞬时速度。请判断。',
      options:[],
      answer:'对',
      explain:'匀变速运动 v_avg = (v0+vt)/2 = v_(t/2),即时间段的平均速度等于该段中间时刻的瞬时速度。这是匀变速的重要结论,常用于打点计时器求瞬时速度。'
    },
    { id:'phyfj5_008', manualId:'phy_m01', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'甲以10m/s匀速追赶前方100m处以初速度2m/s匀加速(a=2m/s²)出发的乙,甲追上乙需要',
      options:['A. 10s','B. 无法追上','C. 20s','D. 5s'],
      answer:'B',
      explain:'甲、乙速度相等时:v乙=2+2t=10,得t=4s。此时甲位移40m,乙位移=2×4+½×2×16=24m,乙已行至100+24=124m,甲位于40m,乙比甲远84m。之后乙比甲快,追不上。选B。'
    },

    // ---- 牛顿运动定律（8）----
    { id:'phyfj5_009', manualId:'phy_m02', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'惯性大小取决于',
      options:['A. 速度大小','B. 质量','C. 受力大小','D. 加速度'],
      answer:'B',
      explain:'惯性是物体保持原有运动状态的性质,大小唯一由质量决定,与速度、受力、加速度均无关。选B。'
    },
    { id:'phyfj5_010', manualId:'phy_m02', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（2023·福建卷）质量2kg物体在4N合外力作用下由静止开始运动,3s末速度为',
      options:['A. 6m/s','B. 4m/s','C. 12m/s','D. 8m/s'],
      answer:'A',
      explain:'a=F/m=4/2=2m/s²;v=at=2×3=6m/s。选A。'
    },
    { id:'phyfj5_011', manualId:'phy_m02', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'电梯以a=2m/s²加速上升,人质量50kg,人对电梯地板的压力为(g=10m/s²)',
      options:['A. 600N','B. 500N','C. 400N','D. 1000N'],
      answer:'A',
      explain:'加速上升:视重N-mg=ma,N=m(g+a)=50×12=600N。选A。'
    },
    { id:'phyfj5_012', manualId:'phy_m02', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'物体在光滑水平面上受两个力,F1=6N向东,F2=8N向北,合力大小为',
      options:['A. 14N','B. 10N','C. 2N','D. 48N'],
      answer:'B',
      explain:'两力垂直,合力 F=√(6²+8²)=√100=10N。选B。'
    },
    { id:'phyfj5_013', manualId:'phy_m02', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'牛顿第三定律的内容是',
      options:['A. 作用力与反作用力大小相等、方向相反、作用在同一物体上','B. 作用力与反作用力大小相等、方向相反、作用在两个物体上','C. 力越大则运动越快','D. 静止物体一定不受力'],
      answer:'B',
      explain:'牛顿第三定律:作用力与反作用力大小相等、方向相反、作用在两个不同物体上、性质相同、同时产生同时消失。A错(应作用在两个物体上)。选B。'
    },
    { id:'phyfj5_014', manualId:'phy_m02', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'质量2kg物体在μ=0.2的水平面上受水平推力8N运动,g=10m/s²,加速度为',
      options:['A. 2m/s²','B. 4m/s²','C. 3m/s²','D. 1m/s²'],
      answer:'C',
      explain:'摩擦力 f=μmg=0.2×2×10=4N;合力 F=8-4=4N;a=F/m=4/2=2m/s²。选A。'
    },
    { id:'phyfj5_015', manualId:'phy_m02', type:'judge', difficulty:'easy', local_fj:true, gaokao:true,
      q:'物体所受合外力为零时,一定保持静止。请判断。',
      options:[],
      answer:'错',
      explain:'合外力为零时,物体保持"原运动状态",即静止或匀速直线运动。不一定静止。表述错误。'
    },
    { id:'phyfj5_016', manualId:'phy_m02', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'一物体沿斜面(θ=30°)下滑,若μ=√3/3,下滑加速度为(g=10m/s²)',
      options:['A. 0','B. 5m/s²','C. 10m/s²','D. 8m/s²'],
      answer:'A',
      explain:'沿斜面向下 mg sinθ - μmg cosθ = ma。tan30°=√3/3,即μ=tanθ,此时下滑力恰好等于摩擦力,a=0(匀速下滑或临界)。选A。'
    },

    // ---- 圆周运动（8）----
    { id:'phyfj5_017', manualId:'phy_m03', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'做匀速圆周运动的物体,其合外力方向总是',
      options:['A. 沿切线方向','B. 沿半径指向圆心','C. 沿半径指向圆外','D. 与速度方向相同'],
      answer:'B',
      explain:'匀速圆周运动速度大小不变、方向不断变化,加速度指向圆心(向心加速度),故合外力(=ma)也指向圆心。选B。'
    },
    { id:'phyfj5_018', manualId:'phy_m03', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'质量2kg物体在半径R=1m的圆周上以v=4m/s做匀速圆周运动,所受向心力为',
      options:['A. 32N','B. 16N','C. 8N','D. 4N'],
      answer:'A',
      explain:'F=mv²/R=2×16/1=32N。选A。'
    },
    { id:'phyfj5_019', manualId:'phy_m03', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'汽车在半径R=100m的水平弯道上转弯,轮胎与地面摩擦因数μ=0.4,g=10m/s²,汽车最大速度为',
      options:['A. 20m/s','B. 40m/s','C. 10m/s','D. 4m/s'],
      answer:'A',
      explain:'摩擦力提供向心力:μmg=mv²/R,v=√(μgR)=√(0.4×10×100)=20m/s。选A。'
    },
    { id:'phyfj5_020', manualId:'phy_m03', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'汽车经过凸形桥顶时,对桥面的压力比汽车重力',
      options:['A. 大','B. 小','C. 相等','D. 无法判断'],
      answer:'B',
      explain:'桥顶做圆周运动向心力指向下方(圆心在下),故 mg-N=mv²/R,N=m(g-v²/R)<mg,对桥面压力比重力小(超速会失重甚至飞起)。选B。'
    },
    { id:'phyfj5_021', manualId:'phy_m03', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'物体做匀速圆周运动,以下量不变的是',
      options:['A. 速度','B. 加速度','C. 动量','D. 动能'],
      answer:'D',
      explain:'匀速圆周运动:速度方向变(A不选)、加速度方向变(B不选)、动量mv方向变(C不选)。只有动能 Ek=½mv² 因v大小不变而不变。选D。'
    },
    { id:'phyfj5_022', manualId:'phy_m03', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'角速度ω、周期T、频率f的关系是',
      options:['A. ω=2πT','B. ω=2π/T','C. f=1/(2πT)','D. ω=T/(2π)'],
      answer:'B',
      explain:'ω=2π/T=2πf(rad/s),f=1/T。选B。'
    },
    { id:'phyfj5_023', manualId:'phy_m03', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'竖直平面内圆周运动的最高点,轻绳中最小张力=0时,小球速度为(半径R,重力g)',
      options:['A. √(gR)','B. √(2gR)','C. gR','D. 0'],
      answer:'A',
      explain:'最高点最小速度:重力恰提供向心力,mg=mv²/R,v_min=√(gR)。若是轻杆则最小速度可以为0(杆能提供向上支持力)。选A。'
    },
    { id:'phyfj5_024', manualId:'phy_m03', type:'judge', difficulty:'easy', local_fj:true, gaokao:true,
      q:'向心力是一种特殊性质的力。请判断。',
      options:[],
      answer:'错',
      explain:'向心力不是新性质的力,而是效果力——由重力、弹力、摩擦力、张力等一种或几种性质的力所提供,方向指向圆心。表述错误。'
    },

    // ---- 万有引力与航天（8）----
    { id:'phyfj5_025', manualId:'phy_m04', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'万有引力定律 F=GMm/r²,G叫做',
      options:['A. 万有引力常量','B. 万有引力','C. 加速度','D. 距离'],
      answer:'A',
      explain:'G叫做万有引力常量,由英国科学家卡文迪许通过扭秤实验测定,G≈6.67×10⁻¹¹ N·m²/kg²。选A。'
    },
    { id:'phyfj5_026', manualId:'phy_m04', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（2024·福建卷）人造卫星绕地球做匀速圆周运动,提供向心力的是',
      options:['A. 卫星自身动力','B. 地球对卫星的万有引力','C. 太阳引力','D. 空气浮力'],
      answer:'B',
      explain:'太空真空环境无空气,卫星靠地球万有引力提供做圆周运动所需向心力:GMm/r²=mv²/r=mω²r。选B。'
    },
    { id:'phyfj5_027', manualId:'phy_m04', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'第一宇宙速度是',
      options:['A. 7.9 km/s','B. 11.2 km/s','C. 16.7 km/s','D. 300000 km/s'],
      answer:'A',
      explain:'第一宇宙速度=√(gR地)=7.9km/s(近地圆轨道速度,人造卫星最小发射速度);第二宇宙速度=11.2km/s(逃离地球最小速度);第三宇宙速度=16.7km/s(逃离太阳系)。选A。'
    },
    { id:'phyfj5_028', manualId:'phy_m04', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'同步卫星特点是',
      options:['A. 轨道任意','B. 周期24h、赤道正上方、约3.6万km高','C. 绕地球两极运动','D. 高度自由'],
      answer:'B',
      explain:'地球同步卫星:①位于赤道正上方;②周期24h(与地球自转同步);③轨道半径固定约4.22×10⁴km,高度约3.6万km;④角速度、线速度均相同。选B。'
    },
    { id:'phyfj5_029', manualId:'phy_m04', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'开普勒第三定律 T²/a³=k,其中k',
      options:['A. 与中心天体无关','B. 只与卫星质量有关','C. 只与中心天体质量有关','D. 与轨道无关'],
      answer:'C',
      explain:'开普勒第三定律 T²/a³=k=4π²/(GM),k只与中心天体质量M有关,与卫星质量无关。绕太阳的所有行星共享同一个k(值)。选C。'
    },
    { id:'phyfj5_030', manualId:'phy_m04', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'两颗人造卫星A、B,A的轨道半径是B的4倍,则周期T_A:T_B=',
      options:['A. 4:1','B. 2:1','C. 8:1','D. 16:1'],
      answer:'C',
      explain:'开普勒第三定律 T²∝r³。r_A=4r_B → T_A²/T_B² = 4³ = 64 → T_A/T_B=8。选C。'
    },
    { id:'phyfj5_031', manualId:'phy_m04', type:'judge', difficulty:'easy', local_fj:true, gaokao:true,
      q:'近地卫星、同步卫星和月球比较,近地卫星线速度最大。请判断。',
      options:[],
      answer:'对',
      explain:'v=√(GM/r),r越小v越大。近地卫星r最小(~6400km) → v最大(~7.9km/s);同步卫星r≈4.22×10⁴km → v≈3.1km/s;月球r≈3.84×10⁵km → v≈1.02km/s。表述正确。'
    },
    { id:'phyfj5_032', manualId:'phy_m04', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'地球表面重力加速度g,地球半径R,则地球质量M可表示为',
      options:['A. M=gR²/G','B. M=gR/G','C. M=gR/G²','D. M=g/GR'],
      answer:'A',
      explain:'地表:mg=GMm/R²,得 M=gR²/G。这是"黄金替换"公式,可用于估算天体质量。选A。'
    },

    // ---- 动量与能量（8）----
    { id:'phyfj5_033', manualId:'phy_m11', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'动量的定义式是',
      options:['A. p=mv','B. p=Ft','C. p=½mv²','D. p=mgh'],
      answer:'A',
      explain:'动量 p=mv(矢量,方向与速度相同,单位 kg·m/s);冲量 I=Ft;动能 Ek=½mv²;重力势能 Ep=mgh。选A。'
    },
    { id:'phyfj5_034', manualId:'phy_m11', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（2024·福建卷）质量2kg物体动量为10kg·m/s,其速度为',
      options:['A. 5m/s','B. 10m/s','C. 20m/s','D. 2.5m/s'],
      answer:'A',
      explain:'p=mv, v=p/m=10/2=5m/s。选A。'
    },
    { id:'phyfj5_035', manualId:'phy_m11', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'合外力等于系统总动量的',
      options:['A. 变化率','B. 冲量','C. 加速度','D. 位移'],
      answer:'A',
      explain:'牛顿第二定律另一表述:F合=Δp/Δt,即合外力等于动量对时间的变化率。也可写为 F·Δt = Δp(冲量定理)。选A。'
    },
    { id:'phyfj5_036', manualId:'phy_m11', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'两个质量分别为1kg 和2kg 的物体,以3m/s和1m/s 相向运动,发生完全非弹性碰撞,共同速度为',
      options:['A. 1/3 m/s 向1kg方向','B. 1/3 m/s 反方向','C. 0','D. 1 m/s'],
      answer:'A',
      explain:'设正方向沿1kg运动方向。总动量 = 1×3 + 2×(-1) = 1kg·m/s。合并后 m=3kg,v = 1/3 m/s(正方向,即沿1kg运动方向)。选A。'
    },
    { id:'phyfj5_037', manualId:'phy_m11', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'弹性碰撞中,动量守恒,同时',
      options:['A. 动能守恒','B. 机械能损失','C. 内能增加','D. 温度升高'],
      answer:'A',
      explain:'弹性碰撞的特征:动量守恒 + 动能守恒(无能量损失)。非弹性碰撞:动量守恒,动能有损失(部分转化为内能)。完全非弹性:动能损失最大,碰后合体。选A。'
    },
    { id:'phyfj5_038', manualId:'phy_m11', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'重力做功的特点是',
      options:['A. 与路径有关','B. 只与初末位置的高度差有关,与路径无关','C. 恒为正','D. 恒为零'],
      answer:'B',
      explain:'重力是保守力,做功只与初末位置的高度差有关,与路径无关(W重=mgh,h是下降高度)。故重力势能 Ep=mgh 有意义。选B。'
    },
    { id:'phyfj5_039', manualId:'phy_m11', type:'judge', difficulty:'easy', local_fj:true, gaokao:true,
      q:'一切碰撞过程动量都守恒,但动能不一定守恒。请判断。',
      options:[],
      answer:'对',
      explain:'碰撞时间极短,内力远大于外力,系统总动量守恒(前提是无外力或外力冲量可忽略)。动能是否守恒取决于碰撞类型:弹性守恒、非弹性损失。表述正确。'
    },
    { id:'phyfj5_040', manualId:'phy_m11', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'一颗子弹以300m/s射入静止木块(质量为子弹的99倍),子弹嵌入木块后共同速度为',
      options:['A. 30 m/s','B. 3 m/s','C. 300 m/s','D. 100 m/s'],
      answer:'B',
      explain:'完全非弹性碰撞。设子弹质量m,木块99m。动量守恒:m×300 = 100m×v,v=3 m/s。选B。'
    },

    // ==========================================================
    // 二、光学与热学、近代物理（40 题）
    // ==========================================================

    // ---- 机械振动与波（8）----
    { id:'phyfj5_041', manualId:'phy_m17', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'单摆做简谐运动的条件是',
      options:['A. 摆角小(≤5°)','B. 摆球质量大','C. 摆线足够长','D. 摆球有电荷'],
      answer:'A',
      explain:'单摆做简谐运动的条件是摆角≤5°(小角度近似),此时回复力约等于沿切向的重力分量,近似正比于位移。摆角过大就不再是简谐运动。选A。'
    },
    { id:'phyfj5_042', manualId:'phy_m17', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'单摆的周期公式为',
      options:['A. T=2π√(L/g)','B. T=2π√(g/L)','C. T=2πLg','D. T=2π/(Lg)'],
      answer:'A',
      explain:'单摆周期 T=2π√(L/g),只与摆长L和当地重力加速度g有关,与摆球质量、振幅无关。故单摆可作为计时装置(如老式钟表)。选A。'
    },
    { id:'phyfj5_043', manualId:'phy_m17', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'一简谐横波在弹性介质中传播,某质点振动位移最大时',
      options:['A. 速度最大','B. 速度为零','C. 加速度为零','D. 位移一直变大'],
      answer:'B',
      explain:'简谐振动中,位移最大时速度=0(端点)、加速度最大(F=-kx,方向指向平衡位置);经过平衡位置时,速度最大、位移=0、加速度=0。选B。'
    },
    { id:'phyfj5_044', manualId:'phy_m17', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（2023·福建卷）机械波传播的是',
      options:['A. 介质','B. 振动状态和能量','C. 波形','D. 声波本身'],
      answer:'B',
      explain:'机械波传播的是"振动的形式和能量",而不是介质本身。介质中的质点只在平衡位置附近振动,不随波迁移(如水波,水面上的漂浮物只上下振动)。选B。'
    },
    { id:'phyfj5_045', manualId:'phy_m17', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'波长λ、频率f、波速v的关系是',
      options:['A. v=λf','B. v=λ/f','C. v=f/λ','D. v=λ+f'],
      answer:'A',
      explain:'波速 v=λf(基本波动方程)。频率由波源决定;波长和波速由介质决定。同一波在不同介质中频率不变,波长波速改变。选A。'
    },
    { id:'phyfj5_046', manualId:'phy_m17', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'下列关于波的说法错误的是',
      options:['A. 波可以发生干涉','B. 波可以发生衍射','C. 光波是电磁波','D. 声波是横波'],
      answer:'D',
      explain:'声波是纵波(振动方向与传播方向平行);水波是横波(表面波);光波、电磁波是横波。声波在空气、固体、液体中均可传播,而横波只能在固体中传播。选D。'
    },
    { id:'phyfj5_047', manualId:'phy_m17', type:'judge', difficulty:'easy', local_fj:true, gaokao:true,
      q:'两列波相遇时可以发生干涉的条件是频率相同、相位差恒定、振动方向相同。请判断。',
      options:[],
      answer:'对',
      explain:'干涉的三个基本条件:频率相同、相位差恒定(相干光)、振动方向相同。加强区永远加强,减弱区永远减弱,形成稳定干涉图样。表述正确。'
    },
    { id:'phyfj5_048', manualId:'phy_m17', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'多普勒效应:声源向观察者靠近时,观察者听到的频率将',
      options:['A. 变高','B. 变低','C. 不变','D. 忽高忽低'],
      answer:'A',
      explain:'多普勒效应:声源与观察者相互靠近时,单位时间接收到的波数增多,观察者接收到的频率变高;远离时变低。这就是火车鸣笛驶近声调变高、驶远声调变低的原因。选A。'
    },

    // ---- 几何光学(8) ----
    { id:'phyfj5_049', manualId:'phy_m18', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'光的直线传播定律的例证是',
      options:['A. 小孔成像','B. 平面镜成像','C. 凸透镜成像','D. 光的干涉'],
      answer:'A',
      explain:'光在均匀介质中沿直线传播,小孔成像(倒立、缩小的实像)是其直接证据。B是反射;C是折射(凸透镜);D是波动性。选A。'
    },
    { id:'phyfj5_050', manualId:'phy_m18', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'光从空气进入水中,发生折射,折射角与入射角相比',
      options:['A. 折射角小于入射角','B. 折射角大于入射角','C. 相等','D. 折射角=0'],
      answer:'A',
      explain:'光从光疏介质(空气,n≈1)进入光密介质(水,n=1.33),折射角<入射角(折射光线靠近法线)。反之从水进入空气则折射角>入射角(可能全反射)。选A。'
    },
    { id:'phyfj5_051', manualId:'phy_m18', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'某介质折射率为1.5,则该介质中光速为(c=3×10⁸ m/s)',
      options:['A. 2×10⁸ m/s','B. 4.5×10⁸ m/s','C. 3×10⁸ m/s','D. 1.5×10⁸ m/s'],
      answer:'A',
      explain:'v=c/n=3×10⁸/1.5=2×10⁸ m/s。光在介质中传播速度总是小于真空中的c。选A。'
    },
    { id:'phyfj5_052', manualId:'phy_m18', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'全反射发生的条件是',
      options:['A. 光从光密介质射向光疏介质,入射角≥临界角','B. 光从光疏介质射向光密介质','C. 光在同一介质中传播','D. 光以0°入射'],
      answer:'A',
      explain:'全反射条件:①光从光密介质→光疏介质(如从水到空气、玻璃到空气);②入射角≥临界角C(sinC=1/n)。达此条件时折射光完全消失,全部反射回来。光纤即利用全反射原理。选A。'
    },
    { id:'phyfj5_053', manualId:'phy_m18', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'凸透镜成像规律:物距u<f时',
      options:['A. 成倒立缩小实像','B. 成倒立放大实像','C. 成正立放大虚像','D. 不成像'],
      answer:'C',
      explain:'凸透镜成像:u>2f→倒立缩小实像(照相机);u=2f→倒立等大实像;f<u<2f→倒立放大实像(投影);u=f→不成像;u<f→正立放大虚像(放大镜)。选C。'
    },
    { id:'phyfj5_054', manualId:'phy_m18', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'白光通过三棱镜后分成七彩光谱,是因为',
      options:['A. 光的干涉','B. 光的衍射','C. 不同颜色光在同种介质中折射率不同','D. 三棱镜发光'],
      answer:'C',
      explain:'白光是复色光,不同颜色的光在同一介质中折射率不同(紫光n最大偏折最厉害,红光n最小偏折最小),故经三棱镜后各色光分开,形成红橙黄绿蓝靛紫的光谱,称为色散。选C。'
    },
    { id:'phyfj5_055', manualId:'phy_m18', type:'judge', difficulty:'easy', local_fj:true, gaokao:true,
      q:'平面镜成像的特点是:物像等大、关于镜面对称、成的是虚像。请判断。',
      options:[],
      answer:'对',
      explain:'平面镜成像:物与像关于镜面对称、大小相等、左右相反(镜像)、虚像(不能被光屏承接)、正立。表述正确。'
    },
    { id:'phyfj5_056', manualId:'phy_m18', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'光线从玻璃(n=1.5)射向空气,临界角C满足',
      options:['A. sinC=1/1.5=0.667','B. sinC=1.5','C. C=90°','D. sinC=0.5'],
      answer:'A',
      explain:'从光密→光疏,临界角sinC=1/n=1/1.5=2/3≈0.667,C≈41.8°。入射角>41.8°时发生全反射。选A。'
    },

    // ---- 物理光学(8) ----
    { id:'phyfj5_057', manualId:'phy_m19', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'双缝干涉实验中,相邻两条亮纹的间距为Δy,与什么有关',
      options:['A. Δy=λL/d(L为屏距,d为缝距)','B. 与颜色无关','C. 与缝距成正比','D. 与波长无关'],
      answer:'A',
      explain:'双缝干涉条纹间距公式:Δy=λL/d,与波长λ、屏距L成正比,与缝距d成反比。故不同颜色光(不同λ)条纹间距不同——红光条纹宽,紫光窄。选A。'
    },
    { id:'phyfj5_058', manualId:'phy_m19', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'光的衍射现象证明光具有',
      options:['A. 粒子性','B. 波动性','C. 磁性','D. 直线性'],
      answer:'B',
      explain:'衍射是波绕过障碍物的现象,是波的独有特征。光的衍射(单缝、圆孔、圆板)证明光具有波动性。选B。'
    },
    { id:'phyfj5_059', manualId:'phy_m19', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'两列频率相同的相干光波叠加,在某点相长干涉的条件是路程差Δr=',
      options:['A. kλ(k=0,±1,±2,...)','B. (k+½)λ','C. kλ/2','D. 任意值'],
      answer:'A',
      explain:'相长干涉(加强):Δr=kλ(整数倍波长);相消干涉(减弱):Δr=(k+½)λ(半波长的奇数倍)。选A。'
    },
    { id:'phyfj5_060', manualId:'phy_m19', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'光的偏振现象证明光是',
      options:['A. 纵波','B. 横波','C. 无波动性','D. 只是粒子'],
      answer:'B',
      explain:'只有横波才有偏振现象。光可以偏振(如经过偏振片后光强变化),说明光波是横波(电场和磁场振动方向都垂直于传播方向)。选B。'
    },
    { id:'phyfj5_061', manualId:'phy_m19', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'电磁波谱按波长由长到短的正确顺序是',
      options:['A. 无线电波→红外线→可见光→紫外线→X射线→γ射线','B. γ射线→X射线→紫外线→可见光→红外线→无线电波','C. 无线电波→X射线→γ射线→可见光','D. 可见光→红外线→紫外线'],
      answer:'A',
      explain:'电磁波谱按波长从长到短:无线电波>红外线>可见光(红>紫)>紫外线>X射线>γ射线;频率、能量顺序则相反。选A。'
    },
    { id:'phyfj5_062', manualId:'phy_m19', type:'judge', difficulty:'easy', local_fj:true, gaokao:true,
      q:'光既表现波动性,又表现粒子性,称为光的波粒二象性。请判断。',
      options:[],
      answer:'对',
      explain:'干涉、衍射、偏振显示光的波动性;光电效应、康普顿效应显示光的粒子性(光子)。光具有波粒二象性,这是量子力学的基础。表述正确。'
    },
    { id:'phyfj5_063', manualId:'phy_m19', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'能穿透几厘米厚铝板并有荧光作用的是',
      options:['A. 红外线','B. X射线','C. 紫外线','D. 可见光'],
      answer:'B',
      explain:'X射线波长极短(0.001~10nm),穿透力强,能穿透人体、金属薄板,用于医学诊断(X光片)和工业探伤。γ射线穿透力更强但主要用于治疗肿瘤。选B。'
    },
    { id:'phyfj5_064', manualId:'phy_m19', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'红外线的主要应用不包括',
      options:['A. 遥控器','B. 红外测温','C. 夜视仪','D. 消毒杀菌'],
      answer:'D',
      explain:'红外线波长长、能量低,常用于遥控、测温(热成像)、夜视仪、通信。消毒杀菌用紫外线(能量高,能破坏微生物DNA)。选D。'
    },

    // ---- 热学(8) ----
    { id:'phyfj5_065', manualId:'phy_m20', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'理想气体状态方程 PV/T=常量,其中T是',
      options:['A. 摄氏温度','B. 热力学温度(K)','C. 华氏温度','D. 任意温度'],
      answer:'B',
      explain:'气体状态方程 PV=nRT或PV/T=常量,T必须是热力学温度(开尔文,K),T(K) = t(℃) + 273.15。选B。'
    },
    { id:'phyfj5_066', manualId:'phy_m20', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（2023·福建卷）分子间作用力说法正确的是',
      options:['A. 分子间只有引力','B. 分子间只有斥力','C. 分子间既有引力又有斥力','D. 分子间无作用力'],
      answer:'C',
      explain:'分子间同时存在引力和斥力,合力表现取决于距离:①r<r₀时,斥力占主导(表现为排斥);②r=r₀时,引斥力平衡;③r>r₀时,引力占主导。当r>10r₀时才可忽略。选C。'
    },
    { id:'phyfj5_067', manualId:'phy_m20', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'布朗运动反映的是',
      options:['A. 分子的运动','B. 分子的静止','C. 悬浮微粒的无规则运动(间接反映液体分子的热运动)','D. 液体的对流'],
      answer:'C',
      explain:'布朗运动是1827年英国植物学家布朗发现的:悬浮在液体中的花粉微粒做无规则运动。这是液体分子无规则运动碰撞微粒的间接反映,微粒本身并非分子。选C。'
    },
    { id:'phyfj5_068', manualId:'phy_m20', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'热力学第一定律 ΔU=Q+W,若气体从外界吸热300J,同时对外做功100J,则内能变化',
      options:['A. 增加200J','B. 减少200J','C. 增加400J','D. 不变'],
      answer:'A',
      explain:'ΔU=Q+W。约定:吸热Q>0,放热Q<0;外界对气体做功W>0,气体对外做功W<0。此处Q=+300,W=-100(气体对外做功),ΔU=+300-100=+200J,内能增加200J。选A。'
    },
    { id:'phyfj5_069', manualId:'phy_m20', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'热力学第二定律的一种表述是',
      options:['A. 热量不能从低温物体传向高温物体','B. 热量不能自发地从低温物体传向高温物体','C. 热量绝对不能被利用','D. 温度可以为零'],
      answer:'B',
      explain:'热二律克劳修斯表述:热量不能"自发地"从低温传向高温(冰箱可以做到,但需要外界做功)。开尔文表述:不可能从单一热源吸热完全变成有用功而不引起其他变化(即永动机不可能)。选B。'
    },
    { id:'phyfj5_070', manualId:'phy_m20', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'气体等温压缩过程,气体',
      options:['A. 吸热并对外做功','B. 放热并被外界做功','C. 温度升高','D. 内能减小'],
      answer:'B',
      explain:'等温:ΔU=0(理想气体内能只与温度有关)。压缩:W>0(外界对气体做功)。故Q=-W<0,即气体放热。选B。'
    },
    { id:'phyfj5_071', manualId:'phy_m20', type:'judge', difficulty:'easy', local_fj:true, gaokao:true,
      q:'温度是分子平均动能的标志。请判断。',
      options:[],
      answer:'对',
      explain:'温度T的微观本质是分子平均平动动能的量度:Ek_avg = 3kT/2(k为玻尔兹曼常量)。故温度只与分子平均动能有关,与分子数、体积、总动能无关。表述正确。'
    },
    { id:'phyfj5_072', manualId:'phy_m20', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'一定质量理想气体,温度不变时,体积从2L压缩为0.5L,压强从1atm变为',
      options:['A. 4 atm','B. 0.25 atm','C. 2 atm','D. 8 atm'],
      answer:'A',
      explain:'等温:PV=常数(玻意耳定律)。P₁V₁=P₂V₂:1×2=P₂×0.5,P₂=4 atm。压缩4倍,压强变为原来的4倍。选A。'
    },

    // ---- 近代物理(8) ----
    { id:'phyfj5_073', manualId:'phy_m21', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'光电效应现象证明光具有',
      options:['A. 波动性','B. 粒子性(光子)','C. 磁性','D. 引力'],
      answer:'B',
      explain:'1905年爱因斯坦提出光子说,解释光电效应:光以光子(hν)的形式与电子作用,一个光子给一个电子能量。故光电效应证明光具有粒子性。选B。'
    },
    { id:'phyfj5_074', manualId:'phy_m21', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（2024·福建卷）某金属的截止频率为ν₀,入射光的频率ν必须满足什么条件才能发生光电效应',
      options:['A. ν=ν₀','B. ν>ν₀','C. ν<ν₀','D. 与频率无关,只看强度'],
      answer:'B',
      explain:'发生光电效应的必要条件:入射光频率ν≥截止频率ν₀(截止频率由金属材料的逸出功决定)。光强影响的是光电子数目(电流大小),不影响能否发生。选B。'
    },
    { id:'phyfj5_075', manualId:'phy_m21', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'爱因斯坦光电效应方程为',
      options:['A. hν=W₀+½mv²_max','B. hν=W₀-½mv²_max','C. hν=½mv²','D. E=mc²'],
      answer:'A',
      explain:'爱因斯坦光电效应方程:hν = W₀ + ½mv²_max。hν为光子能量,W₀为逸出功,½mv²_max为光电子最大初动能。选A。E=mc²是质能方程。'
    },
    { id:'phyfj5_076', manualId:'phy_m21', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'德布罗意假设:一切实物粒子都具有波动性,其物质波波长λ为',
      options:['A. λ=h/p','B. λ=h/E','C. λ=hν','D. λ=p/h'],
      answer:'A',
      explain:'德布罗意假设:物质波波长λ=h/p=h/(mv)。粒子动量越大,波长越短。电子的波长可通过金属晶格发生衍射(戴维孙-革末实验),证实德布罗意假设。选A。'
    },
    { id:'phyfj5_077', manualId:'phy_m21', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'原子的核式结构模型是谁提出的',
      options:['A. 汤姆孙','B. 卢瑟福','C. 玻尔','D. 爱因斯坦'],
      answer:'B',
      explain:'1911年卢瑟福通过α粒子散射实验(极少数α大角度反弹),提出原子核式结构:原子中间有一个带正电、质量集中的原子核,电子绕核转动。汤姆孙是"枣糕模型",玻尔是量子化轨道。选B。'
    },
    { id:'phyfj5_078', manualId:'phy_m21', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'玻尔氢原子模型中,电子从高能级跃迁到低能级时',
      options:['A. 吸收光子','B. 释放光子,能量 hν = E高 - E低','C. 无能量变化','D. 原子核变化'],
      answer:'B',
      explain:'玻尔模型:①原子只能处于分立的定态;②电子从高能级跃迁到低能级时释放光子,hν=E_高-E_低;吸收光子则从低跃迁到高。氢原子光谱的分立性由此解释。选B。'
    },
    { id:'phyfj5_079', manualId:'phy_m21', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'原子核由什么组成',
      options:['A. 质子和电子','B. 质子和中子','C. 电子和中子','D. 光子和电子'],
      answer:'B',
      explain:'原子核由质子(带+e,数=原子序数Z)和中子(不带电)组成,统称为核子。核外由电子(带-e)绕行。X的元素符号:^A_Z X,A为质量数(=质子数+中子数),Z为质子数。选B。'
    },
    { id:'phyfj5_080', manualId:'phy_m21', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'α衰变时,新核比原子核',
      options:['A. 质量数减4,电荷数减2','B. 质量数减2,电荷数减1','C. 质量数不变,电荷数减1','D. 质量数减1,电荷数不变'],
      answer:'A',
      explain:'α衰变:释放一个^4_2He(α粒子),故新核质量数A-4,电荷数Z-2,如 ^238_92U → ^234_90Th + ^4_2He。β衰变:中子→质子+电子,质量数A不变,电荷数Z+1。选A。'
    },

    // ---- 高频综合与实验(8) ----
    { id:'phyfj5_081', manualId:'phy_m22', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（2024·福建卷·实验）打点计时器实验中,电磁式打点计时器工作电源是',
      options:['A. 4~6V 交流电','B. 220V 直流电','C. 220V 交流电','D. 干电池'],
      answer:'A',
      explain:'电磁式打点计时器:4~6V低压交流电,打点周期0.02s(50Hz)。电火花计时器:220V交流电。别混淆。选A。'
    },
    { id:'phyfj5_082', manualId:'phy_m22', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'验证机械能守恒定律实验中,减少误差最有效的措施是',
      options:['A. 增大重物质量','B. 减小空气阻力(用密度大的重物)','C. 用秒表计时','D. 使用木质导轨'],
      answer:'B',
      explain:'机械能守恒实验的主要系统误差来自空气阻力和摩擦。用密度大的重物(如铁球)可以降低空气阻力相对影响。此外要保证纸带上下运动,尽量竖直等。选B。'
    },
    { id:'phyfj5_083', manualId:'phy_m22', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'用伏安法测电阻,若电流表内接(与R串联),电压表读数比R两端实际电压',
      options:['A. 偏大(误差=U_A)','B. 偏小','C. 相等','D. 无关'],
      answer:'A',
      explain:'电流表内接:U_测 = U_R + U_A > U_R,测得R偏大。适合于测大电阻(R>>R_A)。反之外接适合测小电阻(R<<R_V)。选A。'
    },
    { id:'phyfj5_084', manualId:'phy_m22', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（福建卷）用多用电表测电阻,换挡后必须重新调',
      options:['A. 机械零点','B. 欧姆零点','C. 电流零点','D. 无需调'],
      answer:'B',
      explain:'多用电表每次换欧姆挡后,必须先"短接两表笔"重新调欧姆零点(否则读数不准)。机械零点只在使用前调一次。选B。'
    },
    { id:'phyfj5_085', manualId:'phy_m22', type:'judge', difficulty:'easy', local_fj:true, gaokao:true,
      q:'物理实验中,减少偶然误差的方法是多次测量取平均值。请判断。',
      options:[],
      answer:'对',
      explain:'偶然误差:多次测量取平均值可减小(数理统计上呈正态分布,平均值接近真值)。系统误差:改进方法或仪器才能减少。表述正确。'
    },
    { id:'phyfj5_086', manualId:'phy_m22', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'游标卡尺(10分度)读数时,主尺读数10mm,游标第7条与主尺对齐,则读数为',
      options:['A. 10.7 mm','B. 10.07 mm','C. 10.70 mm','D. 17 mm'],
      answer:'A',
      explain:'10分度游标最小分度值0.1mm。读数=主尺整数部分+游标对齐格数×0.1mm。=10 + 7×0.1 = 10.7mm。50分度游标最小0.02mm,20分度0.05mm。选A。'
    },
    { id:'phyfj5_087', manualId:'phy_m22', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'螺旋测微器(千分尺)读数:主尺5mm、可动刻度27.5格,则读数为',
      options:['A. 5.275 mm','B. 5.0275 mm','C. 5.55 mm','D. 5.5 mm'],
      answer:'A',
      explain:'千分尺最小分度0.01mm,可读到0.001mm(估读)。读数=主尺整数+可动刻度×0.01mm。=5 + 27.5×0.01 = 5.275mm。选A。'
    },
    { id:'phyfj5_088', manualId:'phy_m22', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（福建卷·实验）用单摆测重力加速度g,测得摆长L=1.00m,50次全振动时间为100s,则g=',
      options:['A. π² m/s² ≈9.87','B. 4π²','C. π m/s²','D. 2π m/s²'],
      answer:'A',
      explain:'T=100/50=2s;g=4π²L/T²=4π²×1/4=π²≈9.87 m/s²。这也是"π²约等于9.8"的巧合来源。选A。'
    },

    // ---- 综合应用(12) 已在上文分配到各章 ----
    { id:'phyfj5_089', manualId:'phy_m01', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'高铁列车从上海到北京全程1300km,平均速度约260km/h,总耗时约',
      options:['A. 4h','B. 5h','C. 3h','D. 6h'],
      answer:'B',
      explain:'t=s/v=1300/260=5h。这是京沪高铁基本参数。选B。'
    },
    { id:'phyfj5_090', manualId:'phy_m17', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'一列波沿x轴正方向传播,波速v=2m/s,某时刻波形如正弦,波长λ=4m,则频率f=',
      options:['A. 0.5 Hz','B. 2 Hz','C. 8 Hz','D. 4 Hz'],
      answer:'A',
      explain:'f=v/λ=2/4=0.5 Hz。周期T=1/f=2s。选A。'
    },
    { id:'phyfj5_091', manualId:'phy_m21', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'质能方程E=mc²中,若1g物质完全湮灭转化为能量,释放的能量约为',
      options:['A. 9×10¹³ J','B. 9×10⁶ J','C. 3×10⁸ J','D. 9×10¹⁶ J'],
      answer:'A',
      explain:'E=mc²=10⁻³×(3×10⁸)²=10⁻³×9×10¹⁶=9×10¹³ J。相当于2.15万吨TNT,即一颗小型核弹。这也是核能强大的原因。选A。'
    },
    { id:'phyfj5_092', manualId:'phy_m21', type:'judge', difficulty:'easy', local_fj:true, gaokao:true,
      q:'核裂变和核聚变都能释放巨大能量。请判断。',
      options:[],
      answer:'对',
      explain:'裂变:重核(如U-235)分裂为轻核,释放能量(原子弹、核电站)。聚变:轻核(如氢的同位素氘、氚)聚合成重核(He),释放更大能量(氢弹、太阳内部、可控核聚变ITER项目)。表述正确。'
    },
    { id:'phyfj5_093', manualId:'phy_m22', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'一节干电池电动势ε=1.5V,内阻r=0.5Ω,外接R=4.5Ω,通过的电流为',
      options:['A. 0.3 A','B. 0.5 A','C. 3 A','D. 1.5 A'],
      answer:'A',
      explain:'I=ε/(R+r)=1.5/(4.5+0.5)=1.5/5=0.3 A。选A。'
    },
    { id:'phyfj5_094', manualId:'phy_m22', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'一均质细杆水平放置,支点在中点两侧不等,若在长端加10N向下的力,短端应加多大向下的力才能平衡?(长:短=2:1)',
      options:['A. 20N','B. 10N','C. 5N','D. 15N'],
      answer:'A',
      explain:'杠杆平衡:F1×L1=F2×L2。设短端力F,长端力10N,长臂:短臂=2:1。10×2=F×1,F=20N。选A。'
    },
    { id:'phyfj5_095', manualId:'phy_m11', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'子弹水平射入木块,子弹穿透木块前后动量变化了ΔP,以下正确',
      options:['A. 木块动量变化了ΔP(数值相同、方向相同)','B. 木块动量变化了-ΔP','C. 木块动量变化为0','D. 无关'],
      answer:'A',
      explain:'子弹与木块系统动量守恒,子弹减少的动量ΔP即为木块增加的动量ΔP(方向相同,即子弹初动量方向)。选A。'
    },
    { id:'phyfj5_096', manualId:'phy_m03', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'半径R的水平圆盘上,距轴心r处放小物块,盘匀速转动,物块随盘运动的最大角速度取决于',
      options:['A. 物块与盘的最大静摩擦力','B. 物块质量','C. 圆盘直径','D. 转动方向'],
      answer:'A',
      explain:'物块靠静摩擦提供向心力:f≤μmg。mω²r ≤ μmg,ω_max=√(μg/r)。故最大角速度由摩擦因数和距离决定,与质量、方向无关。选A。'
    },
    { id:'phyfj5_097', manualId:'phy_m04', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'地球表面附近的重力加速度g,与月球表面重力加速度g_月之比约为',
      options:['A. 6:1','B. 1:6','C. 4:1','D. 1:4'],
      answer:'A',
      explain:'月球质量M_月≈M_地/81,月球半径R_月≈R_地/3.67。g=GM/R²。g_月/g=(1/81)×(3.67)²≈13.4/81≈0.166≈1/6。故月表重力加速度约为地表的1/6(所以宇航员在月球轻盈)。选A。'
    },
    { id:'phyfj5_098', manualId:'phy_m19', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'双缝干涉实验中,将单色光换成波长更短的光,条纹间距将',
      options:['A. 变宽','B. 变窄','C. 不变','D. 消失'],
      answer:'B',
      explain:'Δy=λL/d,波长λ变短,条纹间距Δy变小,条纹更密。故紫光条纹比红光窄。选B。'
    },
    { id:'phyfj5_099', manualId:'phy_m20', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'气体等压膨胀,气体',
      options:['A. 吸热并对外做功','B. 放热并被外界做功','C. 内能减小','D. 不变化'],
      answer:'A',
      explain:'等压膨胀:V增大,由 pV=nRT,T增大,ΔU>0;气体对外做功W_气=pΔV>0(在ΔU=Q+W的约定下,W为外界对气体做功,故W<0)。Q=ΔU-W>0,即吸热。选A。'
    },
    { id:'phyfj5_100', manualId:'phy_m18', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'光纤通信利用了光的',
      options:['A. 折射','B. 全反射','C. 干涉','D. 衍射'],
      answer:'B',
      explain:'光纤:内层玻璃芯折射率高,外层包层折射率低,光在两者界面发生全反射,沿光纤传播损耗小。故光纤通信基于全反射原理。选B。'
    },
  ];

  // ================================================================
  // 挂载
  // ================================================================
  function _mount(target, extras) {
    if (!Array.isArray(target)) return 0;
    let added = 0;
    const existing = new Set(target.map(q => q && q.id));
    extras.forEach(q => { if (!existing.has(q.id)) { target.push(q); added++; } });
    return added;
  }
  function tryMount() {
    let n=0;
    if (Array.isArray(global.PHYSICS_BANK)) n = _mount(global.PHYSICS_BANK, PHYSICS_FUJIAN_V5);
    if (n) console.info(`[福建高考·物理深化 v5] 已注入物理 +${n} 题`);
    return n;
  }
  const r = tryMount();
  if (!r) {
    if (typeof document !== 'undefined') document.addEventListener('DOMContentLoaded', tryMount);
  }
  global.FUJIAN_SUPPLEMENT_V5 = { PHYSICS_FUJIAN_V5, mount: tryMount };

})(typeof window !== 'undefined' ? window : this);
