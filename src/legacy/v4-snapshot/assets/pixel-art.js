/* ===============================================================
 * 《问道修仙学院》v4.0 · 像素风 CG 渲染引擎（PixelArt）
 *
 * 用途：为妖兽/建筑/场景/道具生成【像素风 SVG】，替代纯 emoji
 * 依据用户需求：除人物外全部像素风，男性向 & 美少女比例适中，
 *              符合现代二次元修仙审美
 *
 * 用法：
 *   PixelArt.monster('小妖', 'easy')  → SVG string
 *   PixelArt.monster('妖王', 'boss')  → 更压迫感
 *   PixelArt.scene('sect_gate')       → 场景背景
 *   PixelArt.item('pill_hong')        → 道具
 *   PixelArt.building('雷霆殿')       → 宗门建筑
 *
 * 设计：8-bit 像素风 + 修仙符文点缀 + 二次元色彩
 * =============================================================== */

(function (global) {
  'use strict';

  // ============================================================
  // 通用像素工具
  // ============================================================
  // 用 rect 拼像素画（比 image-rendering:pixelated 更可控）
  // pixels: 二维数组，每格是颜色索引或空
  // palette: {'0':'#xxx', '1':'#xxx' ...}
  function drawPixels(pixels, palette, cellSize = 6, xOff = 0, yOff = 0) {
    const rows = pixels.length;
    const cols = pixels[0].length;
    let out = '';
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const p = pixels[y][x];
        if (p === '.' || p === ' ' || p === 0 || p == null) continue;
        const color = palette[p] || p;  // 支持直接写颜色
        out += `<rect x="${xOff + x * cellSize}" y="${yOff + y * cellSize}" width="${cellSize}" height="${cellSize}" fill="${color}"/>`;
      }
    }
    return out;
  }

  // 从字符串行数组转 2D 像素
  function toPixels(lines) {
    return lines.map(l => l.split(''));
  }

  // v4.0 R3：亦馆色调系统
  // 将原始 palette 中的“中性紫”色彩重映射为宗门主色，保留高光/阴影/眼睛等软硬件色
  function _tintPalette(orig, hue, diff) {
    // 默认不处理，如果 hue 存在则重着“紫色系列”。
    // 紫色包括：#2b1f5a #3a2560 #4a3070 #5a3a8a #6b4fa0 #9b6be5 #b288ff #c88bff
    // 暗紫→宗色 dark，中紫→宗色 primary，亮紫→宗色 accent
    const map = {
      '#2b1f5a': hue.dark,
      '#3a2560': hue.dark,
      '#4a3070': hue.dark,
      '#5a3a8a': hue.primary,
      '#6b4fa0': hue.primary,
      '#7a2a2a': hue.dark,
      '#8a2a3c': hue.dark,
      '#9b6be5': hue.primary,
      '#b288ff': hue.primary,
      '#c88bff': hue.accent,
      '#a83c3c': hue.primary,
      '#e25b5b': (diff === 'boss') ? '#e25b5b' : hue.primary,   // boss 红保留
      '#f0e6ff': hue.accent,
      '#ff9ec6': hue.accent,
    };
    const out = {};
    for (const k in orig) {
      out[k] = map[orig[k]] || orig[k];
    }
    return out;
  }

  // 危险符文环（boss 背景）
  function _dangerRing(w, h) {
    const cx = w / 2, cy = h / 2, r = Math.min(w, h) * 0.45;
    const runes = [];
    for (let i = 0; i < 8; i++) {
      const ang = (i / 8) * Math.PI * 2;
      const x = cx + Math.cos(ang) * r;
      const y = cy + Math.sin(ang) * r;
      runes.push(`<text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="middle" font-size="${Math.floor(w*0.05)}" fill="#e25b5b" opacity="0.55" style="font-family:serif;">${['牺','王','靈','封','斩','魔','降','住'][i]}</text>`);
    }
    return `<g class="danger-runes">${runes.join('')}</g>`;
  }

  // Boss 额外符文（头顶王字 + 侧边链）
  function _bossSymbols(w, h, hue) {
    return `
      <g class="boss-mark" opacity="0.85">
        <text x="${w/2}" y="${Math.max(20, h*0.08)}" text-anchor="middle" font-size="${Math.floor(w*0.08)}" fill="#ffcc44" style="font-family:serif;font-weight:bold;filter:drop-shadow(0 0 4px #e25b5b);">王</text>
        <text x="${w*0.08}" y="${h*0.5}" font-size="${Math.floor(w*0.05)}" fill="${hue.accent}" opacity="0.6">〖</text>
        <text x="${w*0.9}" y="${h*0.5}" font-size="${Math.floor(w*0.05)}" fill="${hue.accent}" opacity="0.6">〗</text>
      </g>
    `;
  }

  // ============================================================
  // 妖兽像素图库（按难度）
  // 每张图内部用字符表示：
  //   . = 透明
  //   数字/字母 = 调色板颜色索引
  // ============================================================

  // 【小妖】20×20 一只调皮的小鬼/幽灵/野狼幼崽
  const MONSTERS = {
    // 小妖：easy 难度
    xiaogui: {
      name: '小鬼',
      pixels: toPixels([
        "....22222222........",
        "...2333333322.......",
        "..233355553322......",
        ".23336666633322.....",
        ".23366999966322.....",
        ".23369aaa96632......",
        ".23369aaa96632......",
        ".23366999966322.....",
        ".23336666633322.....",
        "..233355553322......",
        "...2333bbbb322......",
        "....2333333322......",
        ".....22222222.......",
        ".....2222222........",
        "....22.....22.......",
        "....22.....22.......",
        "...cc2.....2cc......",
        "..cccc.....cccc.....",
        ".cccccc...cccccc....",
        "cccccccc.cccccccc..."
      ]),
      palette: { '2':'#2b1f5a', '3':'#5a3a8a', '5':'#9b6be5', '6':'#b288ff', '9':'#f0e6ff', 'a':'#e25b5b', 'b':'#3a2560', 'c':'#4a3070' }
    },
    // 幽狼：easy 
    youlang: {
      name: '幽狼',
      pixels: toPixels([
        "..............1.....",
        ".....1.......11.....",
        "....11.......11.....",
        "...111111.111111....",
        "..11222222222221....",
        ".1122222222222221...",
        ".1223333333333221...",
        "1223a3333333a3221...",
        "1223a3333333a3221...",
        "12233333443333221...",
        "12233333443333221...",
        "12222222222222211...",
        ".12222222222221.....",
        "..1.1........1.1....",
        "...11........11.....",
        "....1........1......",
        "....1........1......",
        "....1........1......",
        "...11........11.....",
        "...11........11....."
      ]),
      palette: { '1':'#1c1740', '2':'#3a2d6b', '3':'#6b4fa0', '4':'#e25b5b', 'a':'#ff9ec6' }
    },
    // 中妖：normal
    yaoshou: {
      name: '妖兽',
      pixels: toPixels([
        "......111......111..",
        "......1a1......1a1..",
        ".....1aaa1....1aaa1.",
        "....1aa22a1..1a22aa1",
        "...1a222222aa222222a",
        "..1a22233332222333322",
        ".1a2233444332234443a2",
        "1a223344b444333b4433a",
        "1a2233444444444444332",
        ".1a22334444444443332.",
        "..1a2233444443333221.",
        "...1a2333333333221...",
        "....1a22222222221....",
        ".....1cccccccc1......",
        "......c1c1c1c........",
        "......11.11.1........",
        ".....11..11.11.......",
        "....11...11..11......",
        "...11....11...11.....",
        "..11.....11....11...."
      ]),
      palette: { '1':'#1c1740', '2':'#7a2a2a', '3':'#a83c3c', '4':'#e25b5b', 'a':'#ffcc44', 'b':'#f5c97a', 'c':'#5a1a1a' }
    },
    // 大妖：hard
    dayao: {
      name: '大妖',
      pixels: toPixels([
        "....1111....1111....",
        "...1cccc1..1cccc1...",
        "..1caaaac11caaaac1..",
        ".1caaa9aacaa9aaac1..",
        "1caaaaaaaaaaaaaac1..",
        "1caaa88aaaa88aaac1..",
        "1caaa88aaaa88aaac1..",
        "1caaaaa9999aaaaac1..",
        ".1caaa9dddd9aaac1...",
        "..1cddddddddddc1....",
        "..1cd44444444dc1....",
        ".1cddd4eeee4dddc1...",
        "1caaaddddd44dddaac1.",
        "1caaaaadddddaaaaac1.",
        ".1caaaaaaaaaaaaac1..",
        "..1cccccccccccccc1..",
        "..1c1c1c11c1c1c1c1..",
        ".11.11.11.11.11.11..",
        "11..11..11.11..11.1.",
        "1....1...1..1....1.."
      ]),
      palette: { '1':'#0b0a1b', 'c':'#4a1c1c', 'a':'#8a2a3c', '9':'#ffcc44', '8':'#fff2cc', 'd':'#e25b5b', '4':'#5a1a1a', 'e':'#fff' }
    },
    // Boss：妖王
    yaowang: {
      name: '妖王',
      pixels: toPixels([
        "..1........1........1........1..",
        ".1a1......1a1......1a1......1a1.",
        "1aca1....1aca1....1aca1....1aca1",
        "1cccc1111cccc1111cccc1111cccc111",
        ".1cccccccccccccccccccccccccccc1.",
        "..1cbb999bcccccccccccccccc999bb1",
        "..1cb99e99bcccccccccccccccc99e9b",
        ".1cb999e999bccccccccccccccc999e9",
        "1cb9999e9999bcccccccccccccccb999",
        "1cbb99eee99bbccccccccccccccccbb9",
        ".1cbbbbbbbbbccccccccccccccccccbb",
        "..1ccbbbbbccccddddddddddccccccc.",
        "..1cccccccccddffffffffffddccccc.",
        "..1cccccccddffff4444ffffddcccccc",
        "..1ccccccdddff4eeee4ffdddcccccc.",
        "..1ccccccdd4eeeeeee4dddcccccccc.",
        "..1cccccdddd4444444dddddcccccccc",
        "..1cccccddddddddddddddcccccccccc",
        "..1cccccaaaaaaaaaaaacccccccccccc",
        "..1c8888888888888888888888cccc..",
        "..1cc88b8b8b8b8b8b8b8b88cccccc..",
        "..1ccc.cccccccc.ccccccccccccc...",
        "..11.....11.11....11.11........",
        "..11.....11.11....11.11........",
        "..11.....11.11....11.11........",
        "..11.....11.11....11.11........"
      ]),
      palette: { '1':'#0b0a1b', 'c':'#4a1c1c', 'b':'#1c0e2a', '9':'#ff9ec6', 'e':'#fff2cc', 'a':'#8a2a3c', 'd':'#e25b5b', 'f':'#ffcc44', '4':'#5a1a1a', '8':'#4a1c1c' }
    },
  };

  // 学科对应的默认妖兽映射（不同学科差异化搭配）
  const MONSTER_BY_SUBJECT = {
    physics:   { easy:'xiaogui',  normal:'yaoshou', hard:'dayao', boss:'yaowang' },
    chemistry: { easy:'youlang',  normal:'yaoshou', hard:'dayao', boss:'yaowang' },
    geography: { easy:'xiaogui',  normal:'yaoshou', hard:'dayao', boss:'yaowang' },
    chinese:   { easy:'youlang',  normal:'yaoshou', hard:'dayao', boss:'yaowang' },
    math:      { easy:'xiaogui',  normal:'yaoshou', hard:'dayao', boss:'yaowang' },
    english:   { easy:'youlang',  normal:'yaoshou', hard:'dayao', boss:'yaowang' },
  };

  // v4.0 R3：宗门特色配色（六宗六色）——即使复用同一像素骨架，
  //   也能通过重着色让每宗妖兽视觉截然不同
  const SECT_HUE = {
    physics:   { primary:'#7fb3ff', accent:'#6ed5e0', dark:'#1a2a5a', glow:'#6ed5e0' },  // 雷霆青蓝
    chemistry: { primary:'#ff8a5c', accent:'#ffc45c', dark:'#4a1a10', glow:'#ff8a5c' },  // 丹鼎橙红
    geography: { primary:'#8ce28c', accent:'#7fffd4', dark:'#1a3a20', glow:'#8ce28c' },  // 山河翠碧
    chinese:   { primary:'#f5c97a', accent:'#ffe6a3', dark:'#4a3010', glow:'#f5c97a' },  // 文渊赤金
    math:      { primary:'#b288ff', accent:'#c88bff', dark:'#2a1a5a', glow:'#b288ff' },  // 推衍紫电
    english:   { primary:'#ff9ec6', accent:'#7fffd4', dark:'#4a1a3a', glow:'#ff9ec6' },  // 译灵粉青
  };

  // 妖兽命名池（每宗每难度独立命名，避免"小妖"重复）
  const MONSTER_NAMES = {
    physics:   { easy:['雷萤','电蝶','气旋子'],   normal:['雷豹','磁鼬','光影蛟'], hard:['雷罗刹','伏波妖将','磁狱之王'], boss:['九霄雷帝','太一雷君'] },
    chemistry: { easy:['丹烛怪','酸蚀虫','醛蛾'], normal:['焱狐','汞蛇','硫蜥'],   hard:['丹狱夜叉','有机之魇','酸碱罗刹'], boss:['丹皇','六气魔尊'] },
    geography: { easy:['山灵','溪灵','气魂'],     normal:['风狼','岩虎','洋流蛟'], hard:['山岳巨怪','极地凶兽','三角洲魔'], boss:['山河巨神','天地大妖王'] },
    chinese:   { easy:['字灵','墨鸦','诗魅'],     normal:['文豪残念','古卷之影','词狐'], hard:['骚灵','赋魔','经义妖将'], boss:['文渊魔君','太史魔主'] },
    math:      { easy:['算灵','符点怪','函数蜥'], normal:['几何魅','数列蛊','概率狐'], hard:['微积魔','空间罗刹','矩阵妖将'], boss:['推衍魔主','无穷魔君'] },
    english:   { easy:['时态灵','词根蛾','虚拟精'], normal:['语法狐','从句蛟','冠词妖'], hard:['修辞罗刹','完型魔','阅读大妖'], boss:['译灵魔君','跨语域魔主'] },
  };

  // ============================================================
  // 场景像素图库（用于剧情/CG 帧背景）
  // ============================================================
  const SCENES = {
    // 山门（宗门大门）
    sect_gate: () => {
      // 300×180 像素山门 CG，用 SVG 混合像素矩形
      return `
        <svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block;">
          <defs>
            <linearGradient id="skygate" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stop-color="#1a1440"/><stop offset="1" stop-color="#4a2a70"/>
            </linearGradient>
            <linearGradient id="mtn1" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stop-color="#3a2560"/><stop offset="1" stop-color="#1c1740"/>
            </linearGradient>
          </defs>
          <rect width="300" height="180" fill="url(#skygate)"/>
          <!-- 星星 -->
          ${[[30,20],[60,15],[100,30],[150,10],[200,25],[240,18],[270,35],[80,50],[220,55]].map(([x,y])=>
            `<rect x="${x}" y="${y}" width="2" height="2" fill="#fff2cc" opacity="0.9"/>`).join('')}
          <!-- 月亮 -->
          <circle cx="240" cy="35" r="18" fill="#fff2cc" opacity="0.85"/>
          <circle cx="234" cy="30" r="16" fill="url(#skygate)"/>
          <!-- 远山 -->
          <polygon points="0,120 50,80 100,100 160,70 220,90 270,75 300,95 300,180 0,180" fill="url(#mtn1)"/>
          <polygon points="0,140 80,110 140,130 200,105 260,125 300,115 300,180 0,180" fill="#2b1f5a" opacity="0.85"/>
          <!-- 石阶 -->
          ${[0,1,2,3,4,5].map(i => `<rect x="${100 - i*3}" y="${150+i*4}" width="${100+i*6}" height="4" fill="#3a2d6b"/>`).join('')}
          <!-- 山门（左右柱） -->
          <rect x="115" y="80" width="10" height="70" fill="#6b3020"/>
          <rect x="175" y="80" width="10" height="70" fill="#6b3020"/>
          <!-- 门额横梁（飞檐） -->
          <polygon points="105,80 195,80 210,60 90,60" fill="#8a3d2a"/>
          <polygon points="90,60 210,60 200,50 100,50" fill="#a04a30"/>
          <!-- 匾额 -->
          <rect x="130" y="65" width="40" height="15" fill="#f5c97a"/>
          <text x="150" y="76" font-size="8" text-anchor="middle" fill="#4a2a10" font-family="serif">仙门</text>
          <!-- 灯笼 -->
          <circle cx="110" cy="95" r="6" fill="#ff5c5c"/>
          <circle cx="110" cy="95" r="4" fill="#ffcc44" opacity="0.6"/>
          <circle cx="190" cy="95" r="6" fill="#ff5c5c"/>
          <circle cx="190" cy="95" r="4" fill="#ffcc44" opacity="0.6"/>
          <!-- 灵气 -->
          ${[70,110,150,190,230].map(x=>
            `<circle cx="${x}" cy="${140+Math.sin(x)*5}" r="1.5" fill="#b288ff" opacity="0.6"><animate attributeName="cy" values="${140};${120};${140}" dur="3s" repeatCount="indefinite"/></circle>`
          ).join('')}
        </svg>
      `;
    },

    // 洞府（内部）
    cave: () => `
      <svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block;">
        <defs>
          <radialGradient id="cavebg" cx="0.5" cy="0.5" r="0.6">
            <stop offset="0" stop-color="#3a2560"/><stop offset="1" stop-color="#0b0a1b"/>
          </radialGradient>
        </defs>
        <rect width="300" height="180" fill="url(#cavebg)"/>
        <!-- 石壁纹理 -->
        ${Array.from({length:30}).map(()=>{
          const x = Math.floor(Math.random()*300), y = Math.floor(Math.random()*180);
          return `<rect x="${x}" y="${y}" width="3" height="3" fill="#2a1a4a" opacity="0.5"/>`;
        }).join('')}
        <!-- 打坐蒲团 -->
        <ellipse cx="150" cy="140" rx="45" ry="10" fill="#8a3d2a"/>
        <ellipse cx="150" cy="138" rx="42" ry="8" fill="#a04a30"/>
        <!-- 火盆 -->
        <rect x="80" y="130" width="18" height="10" fill="#4a2a10"/>
        <polygon points="80,130 98,130 100,125 78,125" fill="#6b3020"/>
        <path d="M 82 128 Q 84 118 85 128 Q 87 115 89 128 Q 91 120 93 128 Q 95 116 96 128" fill="#ff9c3a" opacity="0.85"/>
        <!-- 灵石堆 -->
        <polygon points="215,140 225,125 240,140" fill="#6ed5e0" opacity="0.8"/>
        <polygon points="205,145 220,130 235,148" fill="#7fb3ff" opacity="0.7"/>
        <!-- 灵气粒子 -->
        ${[70,110,150,190,230].map(x=>
          `<circle cx="${x}" cy="${100}" r="1.5" fill="#b288ff" opacity="0.6"><animate attributeName="cy" values="100;60;100" dur="4s" repeatCount="indefinite" begin="${x*0.01}s"/><animate attributeName="opacity" values="0.6;0;0.6" dur="4s" repeatCount="indefinite"/></circle>`
        ).join('')}
        <!-- 顶部钟乳 -->
        ${[30,70,110,150,190,230,270].map(x=>
          `<polygon points="${x-4},0 ${x+4},0 ${x},${8+Math.random()*8}" fill="#1c1740"/>`).join('')}
      </svg>
    `,

    // 山峰
    mountain: () => `
      <svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block;">
        <defs>
          <linearGradient id="mtnsky" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stop-color="#2a4a8a"/><stop offset="1" stop-color="#ff9ec6" stop-opacity="0.4"/>
          </linearGradient>
        </defs>
        <rect width="300" height="180" fill="url(#mtnsky)"/>
        <!-- 云海 -->
        ${[[50,90],[130,85],[200,95],[260,88]].map(([x,y])=>
          `<ellipse cx="${x}" cy="${y}" rx="35" ry="6" fill="#fff" opacity="0.5"/>`).join('')}
        <!-- 山尖 -->
        <polygon points="0,140 60,60 100,100 160,40 220,90 280,50 300,110 300,180 0,180" fill="#3a2d6b"/>
        <polygon points="0,155 40,110 90,130 140,90 200,120 250,100 300,135 300,180 0,180" fill="#1c1740"/>
        <!-- 峰上小亭 -->
        <rect x="152" y="35" width="16" height="8" fill="#8a3d2a"/>
        <polygon points="148,35 172,35 165,25 155,25" fill="#a04a30"/>
        <!-- 太阳/月亮 -->
        <circle cx="60" cy="35" r="14" fill="#ffcc44" opacity="0.9"/>
      </svg>
    `,

    // Boss 战场
    boss_arena: () => `
      <svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block;">
        <defs>
          <radialGradient id="bossbg" cx="0.5" cy="0.5" r="0.7">
            <stop offset="0" stop-color="#7a1c1c"/><stop offset="0.5" stop-color="#2a0a0a"/><stop offset="1" stop-color="#0b0a1b"/>
          </radialGradient>
        </defs>
        <rect width="300" height="180" fill="url(#bossbg)"/>
        <!-- 血月 -->
        <circle cx="150" cy="50" r="24" fill="#e25b5b"/>
        <circle cx="145" cy="45" r="20" fill="#8a2a3c"/>
        <!-- 闪电 -->
        <polyline points="80,20 90,50 75,55 100,90" stroke="#fff2cc" stroke-width="2" fill="none" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0;0.8" dur="1.5s" repeatCount="indefinite"/>
        </polyline>
        <polyline points="220,15 210,45 230,50 200,85" stroke="#fff2cc" stroke-width="2" fill="none" opacity="0.7">
          <animate attributeName="opacity" values="0.7;0;0.7" dur="1.7s" repeatCount="indefinite"/>
        </polyline>
        <!-- 地表裂缝 -->
        <polygon points="0,140 300,140 300,180 0,180" fill="#1a0a0a"/>
        <path d="M 40 145 L 80 165 L 120 148 L 160 170 L 200 150 L 240 172 L 280 152" stroke="#e25b5b" stroke-width="2" fill="none" opacity="0.9"/>
        <!-- 骷髅堆点缀 -->
        ${[60,120,200,260].map(x=>
          `<circle cx="${x}" cy="160" r="3" fill="#ccc" opacity="0.6"/><rect x="${x-2}" y="163" width="4" height="4" fill="#aaa" opacity="0.5"/>`
        ).join('')}
        <!-- 火焰粒子 -->
        ${Array.from({length:15}).map(()=>{
          const x = 20 + Math.floor(Math.random()*260);
          return `<rect x="${x}" y="${140}" width="2" height="2" fill="#ff5c5c"><animate attributeName="y" values="140;100;140" dur="${1.5+Math.random()}s" repeatCount="indefinite" begin="${Math.random()}s"/><animate attributeName="opacity" values="1;0;1" dur="${1.5+Math.random()}s" repeatCount="indefinite"/></rect>`;
        }).join('')}
      </svg>
    `,

    // 藏经阁
    library: () => `
      <svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block;">
        <defs>
          <linearGradient id="libbg" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stop-color="#2a2050"/><stop offset="1" stop-color="#0b0a1b"/>
          </linearGradient>
        </defs>
        <rect width="300" height="180" fill="url(#libbg)"/>
        <!-- 书架 -->
        ${[20,90,160,230].map(x=>{
          let books = '';
          for (let i = 0; i < 6; i++) {
            const y = 40 + i * 20;
            const w = 8 + Math.floor(Math.random()*4);
            for (let j = 0; j < 5; j++) {
              const bx = x + j*11;
              const colors = ['#6ed5e0','#f5c97a','#b288ff','#8ce28c','#ff9ec6'];
              books += `<rect x="${bx}" y="${y}" width="${w}" height="16" fill="${colors[(i+j)%5]}" opacity="0.85"/>`;
              books += `<rect x="${bx+1}" y="${y+2}" width="1" height="12" fill="#fff" opacity="0.3"/>`;
            }
            books += `<rect x="${x-2}" y="${y+16}" width="60" height="2" fill="#4a2a10"/>`;
          }
          return books + `<rect x="${x-4}" y="30" width="64" height="2" fill="#6b3020"/>`;
        }).join('')}
        <!-- 桌子 -->
        <rect x="100" y="150" width="100" height="6" fill="#8a3d2a"/>
        <rect x="105" y="156" width="4" height="20" fill="#8a3d2a"/>
        <rect x="191" y="156" width="4" height="20" fill="#8a3d2a"/>
        <!-- 桌上一本翻开的书 -->
        <polygon points="130,148 170,148 168,142 132,142" fill="#f5c97a"/>
        <rect x="149" y="142" width="2" height="6" fill="#4a2a10"/>
        <!-- 蜡烛 -->
        <rect x="115" y="140" width="3" height="10" fill="#fff2cc"/>
        <ellipse cx="116" cy="138" rx="2" ry="3" fill="#ff9c3a"/>
      </svg>
    `,

    // 天空/飞升
    sky: () => `
      <svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block;">
        <defs>
          <linearGradient id="skysky" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stop-color="#fff2cc"/><stop offset="0.5" stop-color="#ff9ec6"/><stop offset="1" stop-color="#b288ff"/>
          </linearGradient>
        </defs>
        <rect width="300" height="180" fill="url(#skysky)"/>
        <!-- 云 -->
        ${[[40,50,30],[120,30,40],[220,60,35],[80,110,25],[180,120,30],[260,100,28]].map(([x,y,r])=>
          `<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r*0.35}" fill="#fff" opacity="0.85"/>`
        ).join('')}
        <!-- 光芒 -->
        <circle cx="150" cy="80" r="30" fill="#fff2cc" opacity="0.9"/>
        ${[0,45,90,135,180,225,270,315].map(a=>{
          const rad = a * Math.PI / 180;
          const x2 = 150 + Math.cos(rad) * 80;
          const y2 = 80 + Math.sin(rad) * 80;
          return `<line x1="150" y1="80" x2="${x2}" y2="${y2}" stroke="#fff2cc" stroke-width="2" opacity="0.5"/>`;
        }).join('')}
        <!-- 仙鹤剪影 -->
        <path d="M 40 140 Q 45 135 55 140 Q 60 138 65 143 Q 70 141 75 145" stroke="#fff" stroke-width="1.5" fill="none" opacity="0.8"/>
        <path d="M 200 130 Q 205 125 215 130 Q 220 128 225 133" stroke="#fff" stroke-width="1.5" fill="none" opacity="0.8"/>
      </svg>
    `,

    // 战胜（金光）
    battle_win: () => `
      <svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block;">
        <defs>
          <radialGradient id="winbg" cx="0.5" cy="0.5" r="0.7">
            <stop offset="0" stop-color="#fff2cc"/><stop offset="0.5" stop-color="#f5c97a"/><stop offset="1" stop-color="#4a2a70"/>
          </radialGradient>
        </defs>
        <rect width="300" height="180" fill="url(#winbg)"/>
        <!-- 中央爆光 -->
        <circle cx="150" cy="90" r="45" fill="#fff" opacity="0.9">
          <animate attributeName="r" values="40;55;40" dur="1.5s" repeatCount="indefinite"/>
        </circle>
        <!-- 光柱 -->
        ${[-30,-15,0,15,30].map(deg=>{
          return `<rect x="148" y="20" width="4" height="140" fill="#fff2cc" opacity="0.6" transform="rotate(${deg} 150 90)"/>`;
        }).join('')}
        <!-- 飞舞金光粒子 -->
        ${Array.from({length:20}).map(()=>{
          const x = 20 + Math.floor(Math.random()*260);
          const y = 20 + Math.floor(Math.random()*140);
          return `<rect x="${x}" y="${y}" width="3" height="3" fill="#fff2cc"><animate attributeName="opacity" values="1;0;1" dur="${1+Math.random()}s" repeatCount="indefinite" begin="${Math.random()}s"/></rect>`;
        }).join('')}
      </svg>
    `,

    // 药田/丹房
    shrine: () => `
      <svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block;">
        <defs>
          <linearGradient id="shrbg" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stop-color="#4a2a70"/><stop offset="1" stop-color="#1c1740"/>
          </linearGradient>
        </defs>
        <rect width="300" height="180" fill="url(#shrbg)"/>
        <!-- 药田 -->
        ${[[60,140,'#8ce28c'],[110,150,'#ff9ec6'],[160,145,'#f5c97a'],[210,148,'#6ed5e0'],[260,142,'#b288ff']].map(([x,y,c])=>{
          return `<circle cx="${x}" cy="${y}" r="3" fill="${c}"/><rect x="${x-1}" y="${y}" width="2" height="10" fill="#4a3020"/><ellipse cx="${x-3}" cy="${y+5}" rx="4" ry="2" fill="${c}" opacity="0.8"/><ellipse cx="${x+3}" cy="${y+7}" rx="4" ry="2" fill="${c}" opacity="0.8"/>`;
        }).join('')}
        <!-- 丹炉 -->
        <ellipse cx="150" cy="105" rx="30" ry="8" fill="#4a2a10"/>
        <rect x="120" y="80" width="60" height="25" fill="#6b3020"/>
        <ellipse cx="150" cy="80" rx="30" ry="8" fill="#8a3d2a"/>
        <ellipse cx="150" cy="80" rx="20" ry="5" fill="#1a0a0a"/>
        <!-- 火焰从炉子里升起 -->
        <path d="M 138 78 Q 140 60 145 78 Q 148 55 152 78 Q 155 62 160 78" fill="#ff9c3a" opacity="0.9"/>
        <path d="M 142 76 Q 145 65 148 76 Q 151 60 154 76" fill="#ffcc44"/>
        <!-- 上升的丹药颗粒 -->
        ${[145,150,155].map((x,i)=>
          `<circle cx="${x}" cy="60" r="2" fill="#ff5c5c"><animate attributeName="cy" values="60;30;60" dur="${2+i*0.3}s" repeatCount="indefinite" begin="${i*0.3}s"/><animate attributeName="opacity" values="1;0.3;1" dur="${2+i*0.3}s" repeatCount="indefinite"/></circle>`
        ).join('')}
      </svg>
    `,
  };

  // ============================================================
  // 建筑图（宗门）像素画
  // ============================================================
  const BUILDINGS = {
    physics:   { emoji:'⚡', color:'#7fb3ff', name:'雷霆殿', roof:'#4a2a70' },
    chemistry: { emoji:'⚗',  color:'#ff9c3a', name:'丹鼎峰', roof:'#8a3d2a' },
    geography: { emoji:'🌏', color:'#8ce28c', name:'山河阁', roof:'#3a5a3a' },
    chinese:   { emoji:'📜', color:'#f5c97a', name:'文渊阁', roof:'#6b3020' },
    math:      { emoji:'🔢', color:'#b288ff', name:'推衍宫', roof:'#4a2a70' },
    english:   { emoji:'🌐', color:'#ff9ec6', name:'译灵堂', roof:'#4a2a4a' },
  };

  function buildingSvg(sect) {
    const b = BUILDINGS[sect] || BUILDINGS.physics;
    return `
      <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block;">
        <!-- 台基 -->
        <rect x="10" y="115" width="180" height="8" fill="#3a2560"/>
        <rect x="20" y="108" width="160" height="10" fill="#5a4080"/>
        <!-- 主楼柱 -->
        <rect x="30" y="60" width="8" height="50" fill="#8a3d2a"/>
        <rect x="162" y="60" width="8" height="50" fill="#8a3d2a"/>
        <rect x="60" y="60" width="8" height="50" fill="#8a3d2a"/>
        <rect x="132" y="60" width="8" height="50" fill="#8a3d2a"/>
        <!-- 墙 -->
        <rect x="38" y="65" width="22" height="45" fill="${b.color}" opacity="0.4"/>
        <rect x="68" y="65" width="64" height="45" fill="${b.color}" opacity="0.5"/>
        <rect x="140" y="65" width="22" height="45" fill="${b.color}" opacity="0.4"/>
        <!-- 门 -->
        <rect x="88" y="80" width="24" height="30" fill="#4a2a10"/>
        <rect x="99" y="82" width="2" height="26" fill="#f5c97a"/>
        <!-- 一层屋檐 -->
        <polygon points="20,60 180,60 190,50 10,50" fill="${b.roof}"/>
        <polygon points="10,50 190,50 185,45 15,45" fill="#5a1a1a"/>
        <!-- 翘角 -->
        <polygon points="10,50 15,45 8,42 3,48" fill="${b.roof}"/>
        <polygon points="190,50 185,45 192,42 197,48" fill="${b.roof}"/>
        <!-- 二层墙 -->
        <rect x="70" y="25" width="60" height="20" fill="${b.color}" opacity="0.5"/>
        <!-- 二层屋顶（歇山顶） -->
        <polygon points="60,25 140,25 145,15 55,15" fill="${b.roof}"/>
        <polygon points="55,15 145,15 100,0" fill="#5a1a1a"/>
        <polygon points="55,15 60,10 50,7 45,13" fill="${b.roof}"/>
        <polygon points="145,15 140,10 150,7 155,13" fill="${b.roof}"/>
        <!-- 匾额 -->
        <rect x="80" y="30" width="40" height="10" fill="#f5c97a"/>
        <text x="100" y="38" font-size="7" text-anchor="middle" fill="#4a2a10" font-family="serif">${b.name}</text>
        <!-- 灵光 -->
        <circle cx="100" cy="8" r="3" fill="${b.color}">
          <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite"/>
        </circle>
      </svg>
    `;
  }

  // ============================================================
  // 道具像素图
  // ============================================================
  const ITEMS = {
    // 丹药系列（32×32 像素）
    pill_hong: {
      name: '回灵丹',
      pixels: toPixels([
        ".....11111.....",
        "....1222221....",
        "...122333221...",
        "..12233433221..",
        "..12334554321..",
        ".1233445544321.",
        "12234456654321.",
        "12234456654321.",
        "12234455554321.",
        "12234443344321.",
        ".1233333333321.",
        "..12232222321..",
        "...122222221...",
        "....1222221....",
        ".....11111....."
      ]),
      palette: { '1':'#3a1010', '2':'#8a2a2a', '3':'#e25b5b', '4':'#ff8080', '5':'#ffcccc', '6':'#fff' }
    },
    pill_juxian: {
      name: '聚仙丹',
      pixels: toPixels([
        ".....11111.....",
        "....1222221....",
        "...122333221...",
        "..12234443221..",
        "..12344554321..",
        ".1234456654321.",
        "12345567765431.",
        "12345567765431.",
        "12345566665431.",
        "12344554455431.",
        ".1233444444321.",
        "..12333333321..",
        "...122222221...",
        "....1222221....",
        ".....11111....."
      ]),
      palette: { '1':'#2a1a4a', '2':'#4a2a80', '3':'#7a4ac0', '4':'#b288ff', '5':'#d4a3ff', '6':'#fff2ff', '7':'#fff' }
    },
    lingshi: {
      name: '灵石',
      pixels: toPixels([
        ".......11.......",
        "......1221......",
        ".....122321.....",
        "....1233432.....",
        "...123344321....",
        "..12234554321...",
        ".1223456654321..",
        "1223345665443211",
        "1223344554433211",
        ".1223334443221..",
        "..1223333332...."   ,
        "...1233332321...",
        "....1223321.....",
        ".....1221......",
        "......11........"
      ]),
      palette: { '1':'#1c1740', '2':'#2a5a80', '3':'#4a8cb8', '4':'#6ed5e0', '5':'#a0f0f8', '6':'#fff' }
    },
    sword: {
      name: '仙剑',
      pixels: toPixels([
        ".....11........",
        "....1221.......",
        "...12332.......",
        "...12332.......",
        "...12332.......",
        "...12332.......",
        "...12332.......",
        "...12332.......",
        "...12332.......",
        "...12332.......",
        "..1113321......",
        ".14413331......",
        "144413334......",
        ".14413334......",
        "..1143441......",
        "....11.........",
        "....11.........",
        "....11........."
      ]),
      palette: { '1':'#2a2050', '2':'#6ed5e0', '3':'#a0f0f8', '4':'#f5c97a' }
    },
  };

  // ============================================================
  // 主 API
  // ============================================================
  const PixelArt = {

    /**
     * 渲染妖兽（4档难度 × 6学科 = 24 种视觉组合）
     * v4.0 R3：宗门特色重着色 + 难度分级压迫感（背景aura/心跳动画/尺寸）
     * @param diff 'easy'|'normal'|'hard'|'boss'
     * @param sect (可选) 学科用于妖兽选择与配色
     * @param scale 缩放（默认按难度自动放大）
     */
    monster(diff = 'normal', sect = 'physics', scale = null) {
      const key = (MONSTER_BY_SUBJECT[sect] || MONSTER_BY_SUBJECT.physics)[diff] || 'yaoshou';
      const m = MONSTERS[key];
      if (!m) return '';
      // 难度自动尺寸：easy 4px / normal 5px / hard 6px / boss 7px
      const autoScale = diff === 'boss' ? 7 : diff === 'hard' ? 6 : diff === 'normal' ? 5 : 4;
      const cellSize = scale || autoScale;
      const w = m.pixels[0].length * cellSize;
      const h = m.pixels.length * cellSize;
      const isBoss = diff === 'boss';
      const isHard = diff === 'hard';

      // 宗门重着色：把原色板中通用色（灰紫/暗红）替换为宗门主色
      const hue = SECT_HUE[sect] || SECT_HUE.physics;
      const palette = _tintPalette(m.palette, hue, diff);

      // 背景 aura：boss=红黑震屏 / hard=紫红 / normal=淡光 / easy=清透
      const auraId = 'aura_' + Math.random().toString(36).slice(2, 8);
      let auraLayer = '';
      if (isBoss) {
        auraLayer = `
          <defs>
            <radialGradient id="${auraId}" cx="0.5" cy="0.55" r="0.6">
              <stop offset="0" stop-color="#e25b5b" stop-opacity="0.55"/>
              <stop offset="0.55" stop-color="${hue.dark}" stop-opacity="0.35"/>
              <stop offset="1" stop-color="#0b0a1b" stop-opacity="0"/>
            </radialGradient>
          </defs>
          <rect width="${w}" height="${h}" fill="url(#${auraId})"/>
          <!-- 危险符文环 -->
          ${_dangerRing(w, h)}`;
      } else if (isHard) {
        auraLayer = `
          <defs>
            <radialGradient id="${auraId}" cx="0.5" cy="0.55" r="0.55">
              <stop offset="0" stop-color="${hue.primary}" stop-opacity="0.4"/>
              <stop offset="1" stop-color="#0b0a1b" stop-opacity="0"/>
            </radialGradient>
          </defs>
          <rect width="${w}" height="${h}" fill="url(#${auraId})"/>`;
      } else {
        auraLayer = `
          <defs>
            <radialGradient id="${auraId}" cx="0.5" cy="0.5" r="0.6">
              <stop offset="0" stop-color="${hue.accent}" stop-opacity="0.15"/>
              <stop offset="1" stop-color="#0b0a1b" stop-opacity="0"/>
            </radialGradient>
          </defs>
          <rect width="${w}" height="${h}" fill="url(#${auraId})"/>`;
      }

      const glowColor = isBoss ? '#e25b5b' : (isHard ? hue.primary : hue.glow);
      const glowStrength = isBoss ? 18 : (isHard ? 12 : 6);
      const animStyle = isBoss
        ? 'animation:xx-boss-shake 1.4s infinite;'
        : (isHard ? 'animation:xx-hard-pulse 2.2s infinite;' : '');

      return `
        <svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg"
             class="pixel-monster ${isBoss?'is-boss':(isHard?'is-hard':'')}"
             style="width:${w}px;height:${h}px;image-rendering:pixelated;image-rendering:crisp-edges;filter:drop-shadow(0 0 ${glowStrength}px ${glowColor});${animStyle}">
          ${auraLayer}
          ${drawPixels(m.pixels, palette, cellSize)}
          ${isBoss ? _bossSymbols(w, h, hue) : ''}
        </svg>
      `;
    },

    /** 学科对应本关默认妖兽名（v4.0 R3：宗门本地化命名） */
    monsterName(diff, sect) {
      const pool = (MONSTER_NAMES[sect] || MONSTER_NAMES.physics)[diff] || ['妖兽'];
      return pool[Math.floor(Math.random() * pool.length)];
    },

    /**
     * 场景 CG 背景
     */
    scene(name) {
      const fn = SCENES[name] || SCENES.sect_gate;
      return fn();
    },

    /**
     * 宗门建筑
     */
    building(sect) {
      return buildingSvg(sect);
    },

    /**
     * 道具
     */
    item(key, scale = 4) {
      const it = ITEMS[key];
      if (!it) return '';
      const cellSize = scale;
      const w = it.pixels[0].length * cellSize;
      const h = it.pixels.length * cellSize;
      return `
        <svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg"
             style="width:${w}px;height:${h}px;image-rendering:pixelated;image-rendering:crisp-edges;">
          ${drawPixels(it.pixels, it.palette, cellSize)}
        </svg>
      `;
    },

    /** 道具名 */
    itemName(key) { return (ITEMS[key] || {}).name || key; },

    // Getter
    listMonsters() { return Object.keys(MONSTERS); },
    listScenes()   { return Object.keys(SCENES); },
    listItems()    { return Object.keys(ITEMS); },
  };

  global.PixelArt = PixelArt;
})(typeof window !== 'undefined' ? window : this);
