/* ===================================================
 * 《问道修仙学院》交互式功法引擎 v2.0
 *
 * 这是 v2.0 的核心创新：
 *  - 所有功法不再是"看一段文字 = 参悟"
 *  - 而是嵌入可交互的动画/图表/模型
 *  - 学生通过【拖拽、调参、观察】来真正理解概念
 *
 * 调用方式：
 *   IE.render(container, { type:'sine_wave', params:{...} })
 *
 * 支持的可视化组件：
 *   ─ 物理 ─
 *   sine_wave         简谐振动 (可调 A、T)
 *   wave_propagation  机械波传播 (可调 λ、f)
 *   pendulum          单摆 (可调 L、g)
 *   lc_circuit        LC 振荡电路
 *   emf_induction     电磁感应（线圈在磁场中移动）
 *   lorentz_force     洛伦兹力轨迹
 *   gas_pv            气体 P-V 图（可调温度看 PV=nRT）
 *   wave_interference 双缝干涉
 *
 *   ─ 化学 ─
 *   reaction_progress 反应进度图（活化能）
 *   equilibrium       化学平衡天平
 *   titration         酸碱滴定曲线
 *   electrolysis      电解池/原电池示意
 *   molecule_3d       分子立体结构（简化SVG）
 *   reaction_anim     反应物→生成物动画
 *
 *   ─ 地理 ─
 *   earth_rotation    地球自转/公转（可拖拽）
 *   pressure_belt     气压带风带
 *   ocean_current     世界洋流
 *   time_zone         时区计算器
 *   sun_path          太阳直射点回归
 *   monsoon           季风成因
 *
 *   ─ 数学（备用）─
 *   function_graph    动态函数图像
 *   unit_circle       三角函数单位圆
 *
 * 每个组件都返回一个对象 { destroy(), getState() } 便于卸载
 * =================================================== */

(function (global) {
  'use strict';

  // ===== 通用工具 =====
  function el(tag, attrs={}, children=[]) {
    const e = document.createElement(tag);
    for (const k in attrs) {
      if (k === 'style' && typeof attrs[k] === 'object') Object.assign(e.style, attrs[k]);
      else if (k === 'class') e.className = attrs[k];
      else if (k.startsWith('on') && typeof attrs[k] === 'function') e.addEventListener(k.slice(2).toLowerCase(), attrs[k]);
      else e.setAttribute(k, attrs[k]);
    }
    if (typeof children === 'string') e.innerHTML = children;
    else (children || []).forEach(c => c && e.appendChild(c));
    return e;
  }
  function svg(tag, attrs={}, children=[]) {
    const e = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    (children || []).forEach(c => c && e.appendChild(c));
    return e;
  }
  function fmt(n, d=2) { return Number(n).toFixed(d); }

  // ===== v2.2 修复：补上被 oceanCurrent / monsoon / lcCircuit / waveInterference 引用但从未定义的 cv() =====
  //   之前 v2.0.1 补丁里这 4 个可视化调用了 cv('iv-canvas',w,h)，但顶层从未定义 cv，
  //   导致「地理·洋流」「地理·季风」「物理·LC振荡」「物理·杨氏双缝」四处白屏。
  //   最小可用实现：创建一个 <canvas class=iv-canvas> 并返回。
  function cv(className, width, height) {
    const c = document.createElement('canvas');
    c.className = className || 'iv-canvas';
    c.width  = width  || 640;
    c.height = height || 360;
    // 为触摸端画布加一点内边距/背景，避免全黑区突兀
    c.style.display = 'block';
    c.style.maxWidth = '100%';
    c.style.borderRadius = '10px';
    c.style.background = '#0b1226';
    return c;
  }

  // 创建一个滑块控制行
  function slider({label, min, max, step, value, unit, onInput}) {
    const valueSpan = el('span', { class:'iv-value' }, unit ? `${value}${unit}` : String(value));
    const inp = el('input', { type:'range', min, max, step, value, class:'iv-slider' });
    inp.addEventListener('input', () => {
      const v = parseFloat(inp.value);
      valueSpan.textContent = unit ? `${fmt(v, step<1?2:0)}${unit}` : fmt(v, step<1?2:0);
      onInput && onInput(v);
    });
    return el('div', { class:'iv-control-row' }, [
      el('label', {}, label),
      inp,
      valueSpan
    ]);
  }
  function readoutItem(label, val) {
    return el('div', { class:'iv-readout-item' }, [
      el('div', { class:'lab' }, label),
      el('div', { class:'val' }, val)
    ]);
  }
  function setRO(node, val) { if (node) node.textContent = val; }

  // ============================================================
  //  物理动画组件
  // ============================================================

  // 简谐振动 ----------------------------------------
  function sineWave(host, params={}) {
    const cw = el('div', { class:'iv-canvas-wrap' });
    const c = el('canvas', { width:560, height:200 });
    cw.appendChild(c);
    host.appendChild(el('div', { class:'iv-label' }, '🌊 简谐振动 · 红球随时间做正弦振动，黄线为振动图像'));
    host.appendChild(cw);

    let A = params.A ?? 60;
    let T = params.T ?? 2;
    let running = true;
    let t0 = performance.now();

    const valX = readoutItem('位移 x', '0.0 cm');
    const valV = readoutItem('速度 v', '0.0 cm/s');
    const valE = readoutItem('能量', '0%');
    const ro = el('div', { class:'iv-readout' }, [valX, valV, valE]);

    const ctrls = el('div', { class:'iv-controls' }, [
      slider({ label:'振幅 A', min:20, max:90, step:1, value:A, unit:'', onInput:v => A=v }),
      slider({ label:'周期 T', min:0.5, max:4, step:0.1, value:T, unit:'s', onInput:v => T=v }),
      el('button', { class:'iv-btn ghost', onclick: ()=>{ running=!running; if(running) t0=performance.now()-pauseTime; } }, '⏯ 暂停/继续'),
      el('button', { class:'iv-btn ghost', onclick: ()=>{ A=60; T=2; ctrls.querySelectorAll('input').forEach((i,k)=>{ i.value=[60,2][k]; i.dispatchEvent(new Event('input'));} ); } }, '↺ 重置')
    ]);
    host.appendChild(ctrls);
    host.appendChild(ro);

    const ctx = c.getContext('2d');
    let pauseTime = 0;
    const cx = 60, cy = c.height/2;
    const trail = [];
    function draw(now) {
      if (!host.isConnected) return;
      const dt = (now - t0) / 1000;
      if (!running) pauseTime = now - t0;
      const t = running ? dt : pauseTime/1000;
      ctx.clearRect(0, 0, c.width, c.height);

      // 轴
      ctx.strokeStyle = '#3a2f5c'; ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, cy); ctx.lineTo(c.width, cy);
      ctx.moveTo(cx, 20); ctx.lineTo(cx, c.height-20);
      ctx.stroke();

      // 振动图像（黄线）
      ctx.strokeStyle = '#f5c97a'; ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i=0;i<c.width-cx;i++) {
        const xt = t - i/100; // 显示历史
        const y = cy - A * Math.sin(2*Math.PI/T * xt);
        if (i===0) ctx.moveTo(cx + i, y);
        else ctx.lineTo(cx + i, y);
      }
      ctx.stroke();

      // 红球（在 x = cx 处随 t 上下振动）
      const y0 = cy - A * Math.sin(2*Math.PI/T * t);
      ctx.fillStyle = '#e25b5b';
      ctx.shadowColor = '#e25b5b'; ctx.shadowBlur = 12;
      ctx.beginPath(); ctx.arc(cx, y0, 8, 0, Math.PI*2); ctx.fill();
      ctx.shadowBlur = 0;

      // 弹簧线（左侧固定到红球）
      ctx.strokeStyle = '#b8aec0'; ctx.lineWidth = 1.5;
      ctx.beginPath();
      const sx = 10; let zigzag = 6;
      for (let i=0; i<=zigzag; i++) {
        const px = sx + (cx - sx) * i / zigzag;
        const py = cy - 6 * Math.sin(i*Math.PI) + (y0 - cy) * (i/zigzag);
        if (i===0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      ctx.stroke();

      // 数据
      const x = A * Math.sin(2*Math.PI/T * t);
      const v = (2*Math.PI/T) * A * Math.cos(2*Math.PI/T * t);
      const E = (0.5 * v*v + 0.5 * (2*Math.PI/T)*(2*Math.PI/T) * x*x) / (0.5 * (2*Math.PI/T)*(2*Math.PI/T) * A*A) * 100;
      setRO(valX.querySelector('.val'), fmt(x,1) + ' cm');
      setRO(valV.querySelector('.val'), fmt(v,1) + ' cm/s');
      setRO(valE.querySelector('.val'), fmt(E,0) + '%');

      requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
    return { destroy(){} };
  }

  // 机械波传播 ----------------------------------------
  function wavePropagation(host, params={}) {
    const cw = el('div', { class:'iv-canvas-wrap' });
    const c = el('canvas', { width:560, height:220 });
    cw.appendChild(c);
    host.appendChild(el('div', { class:'iv-label' }, '🌊 机械波 · 调节频率/波长，观察波速 v=λf 的关系'));
    host.appendChild(cw);

    let lambda = params.lambda ?? 80;   // 像素长
    let freq = params.freq ?? 1;        // Hz
    let amp = 35;

    const valV = readoutItem('波速 v', '80 px/s');
    const valL = readoutItem('波长 λ', '80 px');
    const valF = readoutItem('频率 f', '1 Hz');
    const valT = readoutItem('周期 T', '1.0 s');
    const ro = el('div', { class:'iv-readout' }, [valV, valL, valF, valT]);

    const ctrls = el('div', { class:'iv-controls' }, [
      slider({ label:'波长 λ', min:30, max:160, step:5, value:lambda, unit:' px', onInput:v=> lambda=v }),
      slider({ label:'频率 f', min:0.5, max:3, step:0.1, value:freq, unit:' Hz', onInput:v => freq=v }),
    ]);
    host.appendChild(ctrls);
    host.appendChild(ro);

    const ctx = c.getContext('2d');
    const t0 = performance.now();
    function draw(now) {
      if (!host.isConnected) return;
      const t = (now - t0) / 1000;
      const v = lambda * freq;
      ctx.clearRect(0,0,c.width,c.height);
      // 中线
      ctx.strokeStyle = '#3a2f5c';
      ctx.beginPath(); ctx.moveTo(0, c.height/2); ctx.lineTo(c.width, c.height/2); ctx.stroke();
      // 波
      const grad = ctx.createLinearGradient(0,0,c.width,0);
      grad.addColorStop(0, '#6ed5e0'); grad.addColorStop(1, '#b288ff');
      ctx.strokeStyle = grad; ctx.lineWidth = 2.5;
      ctx.shadowColor = '#6ed5e0'; ctx.shadowBlur = 10;
      ctx.beginPath();
      for (let x=0; x<c.width; x++) {
        const y = c.height/2 - amp * Math.sin(2*Math.PI * (x/lambda - freq*t));
        if (x===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
      }
      ctx.stroke();
      ctx.shadowBlur = 0;

      // 标记一个介质质点（红球，固定 x）
      const markX = 100;
      const markY = c.height/2 - amp * Math.sin(2*Math.PI*(markX/lambda - freq*t));
      ctx.fillStyle = '#e25b5b';
      ctx.shadowColor='#e25b5b'; ctx.shadowBlur=10;
      ctx.beginPath(); ctx.arc(markX, markY, 6, 0, Math.PI*2); ctx.fill();
      ctx.shadowBlur=0;

      // 波长指示
      ctx.strokeStyle = '#f5c97a';
      ctx.fillStyle = '#f5c97a';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(300, 30); ctx.lineTo(300 + lambda, 30); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(300, 26); ctx.lineTo(300, 34); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(300+lambda, 26); ctx.lineTo(300+lambda, 34); ctx.stroke();
      ctx.font='12px monospace';
      ctx.fillText('λ = '+lambda+'px', 300+lambda/2-30, 22);

      setRO(valV.querySelector('.val'), fmt(v,0)+' px/s');
      setRO(valL.querySelector('.val'), lambda+' px');
      setRO(valF.querySelector('.val'), fmt(freq,1)+' Hz');
      setRO(valT.querySelector('.val'), fmt(1/freq,2)+' s');
      requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
    return { destroy(){} };
  }

  // 单摆 ----------------------------------------
  function pendulum(host, params={}) {
    const cw = el('div', { class:'iv-canvas-wrap' });
    const c = el('canvas', { width:560, height:260 });
    cw.appendChild(c);
    host.appendChild(el('div', { class:'iv-label' }, '⏰ 单摆 · 调节摆长 L 与重力 g，观察周期 T = 2π√(L/g)'));
    host.appendChild(cw);

    let L = params.L ?? 1.2;
    let g = params.g ?? 9.8;
    let theta0 = 0.3;

    const valT = readoutItem('周期 T', '');
    const ro = el('div', { class:'iv-readout' }, [valT]);
    const ctrls = el('div', { class:'iv-controls' }, [
      slider({ label:'摆长 L', min:0.4, max:2.5, step:0.1, value:L, unit:' m', onInput:v=>L=v }),
      slider({ label:'重力 g', min:1.6, max:25, step:0.1, value:g, unit:' m/s²', onInput:v=>g=v }),
    ]);
    host.appendChild(ctrls);
    host.appendChild(ro);

    const ctx = c.getContext('2d');
    const cx = c.width/2, cy = 40;
    const t0 = performance.now();
    function draw(now) {
      if (!host.isConnected) return;
      const t = (now - t0)/1000;
      const omega = Math.sqrt(g/L);
      const T = 2*Math.PI*Math.sqrt(L/g);
      const theta = theta0 * Math.cos(omega * t);
      const len = L * 110;
      const px = cx + len*Math.sin(theta);
      const py = cy + len*Math.cos(theta);
      ctx.clearRect(0,0,c.width,c.height);
      // 横梁
      ctx.strokeStyle='#b8aec0'; ctx.lineWidth=3;
      ctx.beginPath(); ctx.moveTo(cx-60, cy); ctx.lineTo(cx+60, cy); ctx.stroke();
      // 摆线
      ctx.strokeStyle='#f5c97a'; ctx.lineWidth=2;
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(px, py); ctx.stroke();
      // 摆球
      ctx.fillStyle='#e25b5b';
      ctx.shadowColor='#e25b5b'; ctx.shadowBlur=15;
      ctx.beginPath(); ctx.arc(px, py, 14, 0, Math.PI*2); ctx.fill();
      ctx.shadowBlur=0;
      // 角度弧线
      ctx.strokeStyle='#6ed5e0';
      ctx.beginPath(); ctx.arc(cx, cy, 30, Math.PI/2 - theta0, Math.PI/2 + theta0); ctx.stroke();
      ctx.fillStyle='#6ed5e0'; ctx.font='13px monospace';
      ctx.fillText(`θ = ${fmt(theta*180/Math.PI,1)}°`, cx + 40, cy + 25);
      setRO(valT.querySelector('.val'), fmt(T,2)+' s');
      requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
    return { destroy(){} };
  }

  // 洛伦兹力轨迹 ----------------------------------------
  function lorentzForce(host, params={}) {
    const cw = el('div', { class:'iv-canvas-wrap' });
    const c = el('canvas', { width:560, height:280 });
    cw.appendChild(c);
    host.appendChild(el('div', { class:'iv-label' }, '🧲 洛伦兹力 · 带电粒子在匀强磁场中做圆周运动；调节速度/磁感应强度观察半径 r=mv/(qB)'));
    host.appendChild(cw);

    let v = params.v ?? 80;
    let B = params.B ?? 1;
    let charge = +1;
    const m = 1;

    const valR = readoutItem('半径 r', '');
    const valP = readoutItem('周期 T', '');
    const ro = el('div', { class:'iv-readout' }, [valR, valP]);

    const ctrls = el('div', { class:'iv-controls' }, [
      slider({ label:'速度 v', min:30, max:160, step:5, value:v, unit:'', onInput:val=>v=val }),
      slider({ label:'磁场 B', min:0.4, max:3, step:0.1, value:B, unit:' T', onInput:val=>B=val }),
      el('button', { class:'iv-btn ghost', onclick:()=>{ charge*=-1; resetTrack(); } }, '⚡ 切换电荷正负'),
    ]);
    host.appendChild(ctrls);
    host.appendChild(ro);

    const ctx = c.getContext('2d');
    const cx = c.width/2, cy = c.height/2;
    let px = cx, py = cy;
    let vx = v, vy = 0;
    let trail = [];

    function resetTrack() {
      px=cx-100; py=cy; vx=v; vy=0; trail=[];
    }
    resetTrack();
    let lastV = v;
    function step() {
      if (!host.isConnected) return;
      // 重置当 v 变化
      if (Math.abs(v - lastV) > 5) { lastV=v; vx = vx>0 ? v : -v; }

      // 磁场 z 方向，力 = q v × B
      // 假设 B 指向纸外，正电荷做逆时针
      const dt = 0.04;
      const fx = -charge * B * vy;
      const fy = charge * B * vx;
      vx += fx*dt; vy += fy*dt;
      // 速度大小归一到 v
      const sp = Math.sqrt(vx*vx+vy*vy);
      vx = vx/sp*v; vy = vy/sp*v;
      px += vx*dt; py += vy*dt;
      trail.push({x:px,y:py}); if (trail.length>300) trail.shift();

      ctx.clearRect(0,0,c.width,c.height);
      // 磁场（点阵表示）
      ctx.fillStyle='rgba(178,136,255,0.18)';
      for (let i=0;i<8;i++)
        for (let j=0;j<5;j++) {
          const xx = 30 + i*70 + (j%2)*30;
          const yy = 25 + j*55;
          ctx.beginPath(); ctx.arc(xx, yy, 4, 0, Math.PI*2); ctx.fill();
        }
      ctx.fillStyle='#b288ff'; ctx.font='11px monospace';
      ctx.fillText('⊙ B (出纸面)', c.width-110, 18);
      // 轨迹
      ctx.strokeStyle = charge>0 ? '#6ed5e0' : '#ff9ec6';
      ctx.lineWidth=1.8;
      ctx.shadowColor=ctx.strokeStyle; ctx.shadowBlur=8;
      ctx.beginPath();
      trail.forEach((p,i)=>{ if(i===0) ctx.moveTo(p.x,p.y); else ctx.lineTo(p.x,p.y); });
      ctx.stroke();
      ctx.shadowBlur=0;
      // 粒子
      ctx.fillStyle = charge>0 ? '#6ed5e0' : '#ff9ec6';
      ctx.shadowColor=ctx.fillStyle; ctx.shadowBlur=15;
      ctx.beginPath(); ctx.arc(px,py,8,0,Math.PI*2); ctx.fill();
      ctx.shadowBlur=0;
      ctx.fillStyle='#fff'; ctx.font='bold 10px sans-serif';
      ctx.textAlign='center'; ctx.fillText(charge>0?'+':'-', px, py+3); ctx.textAlign='start';

      const r = m*v/(Math.abs(charge)*B);
      const T = 2*Math.PI*m/(Math.abs(charge)*B);
      setRO(valR.querySelector('.val'), fmt(r,1));
      setRO(valP.querySelector('.val'), fmt(T,2)+' s');
      requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
    return { destroy(){} };
  }

  // 电磁感应 ----------------------------------------
  function emfInduction(host, params={}) {
    const cw = el('div', { class:'iv-canvas-wrap' });
    const c = el('canvas', { width:560, height:240 });
    cw.appendChild(c);
    host.appendChild(el('div', { class:'iv-label' }, '🧲 电磁感应 · 拖动磁铁进出线圈，观察感应电流（楞次定律：阻碍变化）'));
    host.appendChild(cw);

    const ctrls = el('div', { class:'iv-controls' }, [
      el('div', { class:'iv-control-row' }, [el('label',{},'磁铁位置'), el('span',{class:'iv-value'},'拖动磁铁')]),
      el('button', { class:'iv-btn ghost', id:'btn-auto' }, '🤖 自动进出')
    ]);
    host.appendChild(ctrls);

    const valFlux = readoutItem('磁通 Φ', '0');
    const valEmf  = readoutItem('感应电动势', '0');
    const valDir  = readoutItem('电流方向', '—');
    const ro = el('div', { class:'iv-readout' }, [valFlux, valEmf, valDir]);
    host.appendChild(ro);

    const ctx = c.getContext('2d');
    let magnetX = 60;
    let coilX = 360, coilY = c.height/2, coilW = 100, coilH = 80;
    let auto = false, dir = 1;
    let prevFlux = 0;

    let dragging = false, dragOffset = 0;
    c.addEventListener('mousedown', e => {
      const r = c.getBoundingClientRect();
      const x = (e.clientX - r.left) * c.width / r.width;
      if (Math.abs(x - magnetX) < 30) { dragging = true; dragOffset = x - magnetX; auto=false; }
    });
    c.addEventListener('mousemove', e => {
      if (!dragging) return;
      const r = c.getBoundingClientRect();
      const x = (e.clientX - r.left) * c.width / r.width;
      magnetX = Math.max(20, Math.min(c.width-20, x - dragOffset));
    });
    window.addEventListener('mouseup', () => dragging=false);
    c.addEventListener('touchstart', e => {
      if (e.touches.length === 0) return;
      const r = c.getBoundingClientRect();
      const x = (e.touches[0].clientX - r.left) * c.width / r.width;
      if (Math.abs(x - magnetX) < 30) { dragging = true; dragOffset = x - magnetX; auto=false; e.preventDefault(); }
    });
    c.addEventListener('touchmove', e => {
      if (!dragging || e.touches.length === 0) return;
      const r = c.getBoundingClientRect();
      const x = (e.touches[0].clientX - r.left) * c.width / r.width;
      magnetX = Math.max(20, Math.min(c.width-20, x - dragOffset));
      e.preventDefault();
    }, {passive:false});
    window.addEventListener('touchend', () => dragging=false);

    ctrls.querySelector('#btn-auto').onclick = () => { auto = !auto; };

    function draw() {
      if (!host.isConnected) return;
      if (auto) {
        magnetX += dir * 1.5;
        if (magnetX > coilX+coilW+40) dir=-1;
        if (magnetX < 30) dir=1;
      }
      ctx.clearRect(0,0,c.width,c.height);
      // 线圈
      ctx.strokeStyle='#f5c97a'; ctx.lineWidth=3;
      for (let i=0;i<8;i++) {
        ctx.beginPath();
        ctx.ellipse(coilX + i*12, coilY, 8, coilH/2, 0, 0, Math.PI*2);
        ctx.stroke();
      }
      // 磁通：磁铁距离线圈中心
      const coilCx = coilX + 4*12;
      const dist = magnetX - coilCx;
      const flux = 1500 / (Math.abs(dist)+20);
      const sig = dist < 0 ? 1 : -1;
      const flux_s = flux * sig;
      const dF = flux_s - prevFlux;
      prevFlux = flux_s;
      // 磁铁
      const mw=60, mh=24;
      ctx.fillStyle='#e25b5b';
      ctx.fillRect(magnetX-mw/2, coilY-mh/2, mw/2, mh);
      ctx.fillStyle='#6ed5e0';
      ctx.fillRect(magnetX, coilY-mh/2, mw/2, mh);
      ctx.fillStyle='#fff'; ctx.font='bold 12px sans-serif'; ctx.textAlign='center';
      ctx.fillText('N', magnetX-mw/4, coilY+4);
      ctx.fillText('S', magnetX+mw/4, coilY+4);
      ctx.textAlign='start';
      // 电流方向（亮起灯泡）
      const intensity = Math.min(1, Math.abs(dF)*80);
      ctx.fillStyle=`rgba(245,201,122,${intensity})`;
      ctx.beginPath(); ctx.arc(coilX+coilW+60, coilY, 14, 0, Math.PI*2); ctx.fill();
      ctx.strokeStyle='#b8aec0';
      ctx.beginPath(); ctx.arc(coilX+coilW+60, coilY, 14, 0, Math.PI*2); ctx.stroke();
      // 连线
      ctx.beginPath(); ctx.moveTo(coilX+coilW+10, coilY-20); ctx.lineTo(coilX+coilW+50, coilY-10);
      ctx.moveTo(coilX+coilW+10, coilY+20); ctx.lineTo(coilX+coilW+50, coilY+10); ctx.stroke();
      // 读数
      setRO(valFlux.querySelector('.val'), fmt(flux_s,0));
      setRO(valEmf.querySelector('.val'), fmt(-dF*60, 0));
      setRO(valDir.querySelector('.val'),
        Math.abs(dF) < 0.001 ? '无' : (dF>0 ? '逆时针↺' : '顺时针↻'));
      requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
    return { destroy(){} };
  }

  // 气体 P-V ----------------------------------------
  function gasPV(host, params={}) {
    const cw = el('div', { class:'iv-canvas-wrap' });
    const c = el('canvas', { width:560, height:280 });
    cw.appendChild(c);
    host.appendChild(el('div', { class:'iv-label' }, '🌡️ 理想气体 · 拖动改变体积/温度，观察 P-V 关系 (PV=nRT)'));
    host.appendChild(cw);

    let T = params.T ?? 300;  // K
    let V = params.V ?? 5;
    const n = 1, R = 0.0831;

    const valP = readoutItem('压强 P', '');
    const valV = readoutItem('体积 V', '');
    const valT = readoutItem('温度 T', '');
    const ro = el('div', { class:'iv-readout' }, [valP, valV, valT]);
    const ctrls = el('div', { class:'iv-controls' }, [
      slider({ label:'体积 V', min:1, max:10, step:0.1, value:V, unit:' L', onInput:v=>V=v }),
      slider({ label:'温度 T', min:100, max:600, step:10, value:T, unit:' K', onInput:v=>T=v }),
    ]);
    host.appendChild(ctrls);
    host.appendChild(ro);

    const ctx = c.getContext('2d');
    function draw() {
      if (!host.isConnected) return;
      ctx.clearRect(0,0,c.width,c.height);
      const P = n*R*T/V;
      // P-V 图坐标
      const ox=60, oy=240, w=200, h=200;
      // 轴
      ctx.strokeStyle='#3a2f5c'; ctx.lineWidth=1;
      ctx.beginPath(); ctx.moveTo(ox,oy); ctx.lineTo(ox+w,oy); ctx.moveTo(ox,oy); ctx.lineTo(ox,oy-h); ctx.stroke();
      ctx.fillStyle='#b8aec0'; ctx.font='12px monospace';
      ctx.fillText('V (L)', ox+w-30, oy+20);
      ctx.fillText('P', ox-30, oy-h+20);
      // 当前 T 等温线 P = nRT/V
      ctx.strokeStyle='#f5c97a'; ctx.lineWidth=2;
      ctx.beginPath();
      for (let v=1; v<=10; v+=0.1) {
        const p = n*R*T/v;
        const xx = ox + (v/10)*w;
        const yy = oy - Math.min(h-10, p*5);
        if (v===1) ctx.moveTo(xx,yy); else ctx.lineTo(xx,yy);
      }
      ctx.stroke();
      // 当前点
      const xx = ox + (V/10)*w;
      const yy = oy - Math.min(h-10, P*5);
      ctx.fillStyle='#e25b5b'; ctx.shadowColor='#e25b5b'; ctx.shadowBlur=12;
      ctx.beginPath(); ctx.arc(xx,yy,7,0,Math.PI*2); ctx.fill();
      ctx.shadowBlur=0;

      // 气体容器示意
      const conX=320, conY=70, conW=180, conH=160;
      ctx.strokeStyle='#b8aec0';
      ctx.strokeRect(conX, conY, conW, conH);
      // 活塞
      const pistonY = conY + (10-V)/10 * conH * 0.6 + 20;
      ctx.fillStyle='rgba(110,213,224,0.10)';
      ctx.fillRect(conX, pistonY, conW, conY+conH-pistonY);
      ctx.fillStyle='#f5c97a';
      ctx.fillRect(conX-5, pistonY-6, conW+10, 6);
      // 分子（数量与 V 成反比）
      const molN = Math.round(80/V);
      ctx.fillStyle = `hsl(${200 - (T-100)/5}, 80%, 65%)`;
      const seedY = pistonY + 5;
      for (let i=0;i<molN;i++) {
        const mx = conX + 8 + Math.random()*(conW-16);
        const my = seedY + Math.random()*(conY+conH-seedY-8);
        ctx.beginPath(); ctx.arc(mx, my, 2, 0, Math.PI*2); ctx.fill();
      }

      setRO(valP.querySelector('.val'), fmt(P,2)+' atm');
      setRO(valV.querySelector('.val'), fmt(V,1)+' L');
      setRO(valT.querySelector('.val'), fmt(T,0)+' K');
      requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
    return { destroy(){} };
  }

  // ============================================================
  //  化学动画组件
  // ============================================================

  // 反应进度图（活化能）
  function reactionProgress(host, params={}) {
    const cw = el('div', { class:'iv-canvas-wrap' });
    const c = el('canvas', { width:560, height:280 });
    cw.appendChild(c);
    host.appendChild(el('div', { class:'iv-label' }, '⚗ 反应进度 · 蓝线为无催化剂，绿线为有催化剂（活化能降低）。点小球→看反应过程'));
    host.appendChild(cw);

    let Ea = params.Ea ?? 80;
    let dH = params.dH ?? -40;     // 反应热（负=放热）
    let withCat = false;

    const valEa = readoutItem('活化能 Ea', '');
    const valDH = readoutItem('反应热 ΔH', '');
    const valType = readoutItem('反应类型', '');
    const ro = el('div', { class:'iv-readout' }, [valEa, valDH, valType]);

    const ctrls = el('div', { class:'iv-controls' }, [
      slider({ label:'活化能', min:30, max:150, step:5, value:Ea, unit:' kJ', onInput:v=>Ea=v }),
      slider({ label:'反应热', min:-100, max:100, step:5, value:dH, unit:' kJ', onInput:v=>dH=v }),
      el('button', { class:'iv-btn ghost', onclick:()=>{ withCat=!withCat; } }, '🧪 加催化剂')
    ]);
    host.appendChild(ctrls);
    host.appendChild(ro);

    const ctx = c.getContext('2d');
    const t0 = performance.now();
    function draw(now) {
      if (!host.isConnected) return;
      const t = (now - t0)/1000;
      ctx.clearRect(0,0,c.width,c.height);
      // 轴
      const ox=50, oy=240, w=480, h=200;
      ctx.strokeStyle='#3a2f5c'; ctx.lineWidth=1;
      ctx.beginPath(); ctx.moveTo(ox,oy); ctx.lineTo(ox+w,oy); ctx.moveTo(ox,oy); ctx.lineTo(ox,oy-h); ctx.stroke();
      ctx.fillStyle='#b8aec0'; ctx.font='12px monospace';
      ctx.fillText('反应进程', ox+w-60, oy+18);
      ctx.fillText('能量', ox-30, oy-h+10);

      // 无催化剂曲线（蓝）
      function drawCurve(EaUse, color) {
        ctx.strokeStyle=color; ctx.lineWidth=2;
        ctx.beginPath();
        const startE = 100, endE = 100 + dH;
        for (let i=0; i<=200; i++) {
          const p = i/200; // 0~1
          let e;
          if (p < 0.5) e = startE + EaUse * Math.sin(p*Math.PI);
          else e = startE + EaUse * Math.sin(p*Math.PI) - (startE - endE) * (p-0.5)*2;
          const xx = ox + p*w;
          const yy = oy - e;
          if (i===0) ctx.moveTo(xx,yy); else ctx.lineTo(xx,yy);
        }
        ctx.stroke();
      }
      drawCurve(Ea, '#6ed5e0');
      if (withCat) drawCurve(Ea*0.5, '#8ce28c');
      // 反应物/生成物标签
      ctx.fillStyle='#6ed5e0';
      ctx.fillText('反应物', ox+10, oy-100);
      ctx.fillStyle = dH<0 ? '#8ce28c':'#e25b5b';
      ctx.fillText('生成物', ox+w-50, oy-100-dH);

      // 滚动的小球
      const p = (t % 4) / 4;
      const EaUse = withCat ? Ea*0.5 : Ea;
      const startE = 100, endE = 100 + dH;
      let e;
      if (p < 0.5) e = startE + EaUse * Math.sin(p*Math.PI);
      else e = startE + EaUse * Math.sin(p*Math.PI) - (startE - endE) * (p-0.5)*2;
      const bx = ox + p*w;
      const by = oy - e;
      ctx.fillStyle = '#f5c97a';
      ctx.shadowColor='#f5c97a'; ctx.shadowBlur=14;
      ctx.beginPath(); ctx.arc(bx, by, 8, 0, Math.PI*2); ctx.fill();
      ctx.shadowBlur=0;

      setRO(valEa.querySelector('.val'), (withCat?Ea*0.5:Ea)+' kJ');
      setRO(valDH.querySelector('.val'), (dH>=0?'+':'')+dH+' kJ');
      setRO(valType.querySelector('.val'), dH<0?'放热反应':'吸热反应');
      requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
    return { destroy(){} };
  }

  // 化学平衡天平
  function equilibrium(host, params={}) {
    const wrap = el('div', { class:'iv-stage' });
    wrap.appendChild(el('div', { class:'iv-label' }, '⚖ 化学平衡 · 改变浓度、温度、压强，看勒沙特列原理如何移动平衡'));
    const eqDiv = el('div', { style:{textAlign:'center', margin:'10px 0', fontSize:'18px', color:'#f5c97a', fontFamily:'monospace'} },
      'aA + bB ⇌ cC + dD');
    wrap.appendChild(eqDiv);

    // 天平 SVG
    const svgEl = svg('svg', { viewBox:'0 0 400 200', style:'width:100%;max-width:480px;display:block;margin:0 auto;' });
    const beam = svg('line', { id:'beam', x1:60, y1:80, x2:340, y2:80, stroke:'#f5c97a', 'stroke-width':4 });
    const pivot = svg('polygon', { points:'195,80 205,80 200,140', fill:'#b8aec0' });
    const lPan = svg('rect', { id:'lpan', x:30, y:90, width:80, height:60, fill:'rgba(110,213,224,0.3)', stroke:'#6ed5e0', 'stroke-width':2, rx:4 });
    const rPan = svg('rect', { id:'rpan', x:290, y:90, width:80, height:60, fill:'rgba(140,226,140,0.3)', stroke:'#8ce28c', 'stroke-width':2, rx:4 });
    const lText = svg('text', { x:70, y:175, fill:'#6ed5e0', 'text-anchor':'middle', 'font-size':14 }); lText.textContent='反应物';
    const rText = svg('text', { x:330, y:175, fill:'#8ce28c', 'text-anchor':'middle', 'font-size':14 }); rText.textContent='生成物';
    svgEl.appendChild(pivot); svgEl.appendChild(beam); svgEl.appendChild(lPan); svgEl.appendChild(rPan);
    svgEl.appendChild(lText); svgEl.appendChild(rText);
    wrap.appendChild(svgEl);

    const valK = readoutItem('K 表观值', '1.0');
    const valDir = readoutItem('平衡移动', '不移动');
    const ro = el('div', { class:'iv-readout' }, [valK, valDir]);

    const ctrls = el('div', { class:'iv-controls' }, [
      el('button', { class:'iv-btn ghost', onclick:()=>shift(-1) }, '➕ 增加反应物浓度'),
      el('button', { class:'iv-btn ghost', onclick:()=>shift(1) }, '➕ 增加生成物浓度'),
      el('button', { class:'iv-btn ghost', onclick:()=>{tilt=0;updateView();} }, '↺ 复位'),
    ]);
    wrap.appendChild(ctrls);
    wrap.appendChild(ro);
    host.appendChild(wrap);

    let tilt = 0; // -1=正反应推进，+1=逆反应
    function shift(dir) {
      tilt = -dir;
      updateView();
    }
    function updateView() {
      const angle = tilt * 12;
      beam.setAttribute('transform', `rotate(${angle} 200 80)`);
      lPan.setAttribute('transform', `translate(0 ${-tilt*30})`);
      rPan.setAttribute('transform', `translate(0 ${tilt*30})`);
      let msg = '不移动';
      if (tilt < 0) msg = '→ 正向移动';
      if (tilt > 0) msg = '← 逆向移动';
      setRO(valDir.querySelector('.val'), msg);
    }
    return { destroy(){} };
  }

  // 反应动画（reactant → product）
  function reactionAnim(host, opt={}) {
    const wrap = el('div', { class:'iv-stage' });
    wrap.appendChild(el('div', { class:'iv-label' }, '⚗ 化学反应过程动画'));
    const stage = el('div', { class:'molecule-stage' });
    const reactants = opt.reactants || ['CH₄','+','2O₂'];
    const products = opt.products || ['CO₂','+','2H₂O'];

    function build(showProducts=false) {
      stage.innerHTML='';
      (showProducts?products:reactants).forEach((m,i)=>{
        if (m === '+' || m === '→' || m === '⇌') {
          stage.appendChild(el('span', {class:'reaction-arrow'}, m));
        } else {
          stage.appendChild(el('span', {class:'molecule '+(showProducts?'product':'reactant')}, m));
        }
      });
      if (showProducts) return;
      stage.appendChild(el('span', { class:'reaction-arrow '+(opt.heat?'heat':'') }, '→'));
      products.forEach((m,i)=>{
        if (m === '+') stage.appendChild(el('span', {class:'reaction-arrow'}, m));
        else stage.appendChild(el('span', {class:'molecule product'}, m));
      });
    }
    build(false);
    wrap.appendChild(stage);

    const ctrls = el('div', { class:'iv-controls' }, [
      el('button', { class:'iv-btn', onclick:()=>animate() }, '▶ 播放反应'),
      el('button', { class:'iv-btn ghost', onclick:()=>build(false) }, '↺ 重置')
    ]);
    wrap.appendChild(ctrls);

    if (opt.hint) wrap.appendChild(el('div', { class:'hint-bubble' }, opt.hint));
    host.appendChild(wrap);

    function animate() {
      // 简单淡出淡入
      stage.querySelectorAll('.molecule.reactant').forEach(m => {
        m.style.transition='all .8s';
        m.style.opacity=0; m.style.transform='translateX(-30px)';
      });
      setTimeout(()=>{
        stage.querySelectorAll('.molecule.product').forEach(m=>{
          m.style.opacity=0; m.style.transform='translateX(30px)';
        });
        setTimeout(()=>{
          stage.querySelectorAll('.molecule.product').forEach(m=>{
            m.style.transition='all .8s'; m.style.opacity=1; m.style.transform='none';
          });
        }, 100);
      }, 800);
    }
    return { destroy(){} };
  }

  // 酸碱滴定曲线
  function titration(host, params={}) {
    const cw = el('div', { class:'iv-canvas-wrap' });
    const c = el('canvas', { width:560, height:280 });
    cw.appendChild(c);
    host.appendChild(el('div', { class:'iv-label' }, '💧 酸碱滴定 · 强酸滴入强碱（或反之）观察 pH 突跃'));
    host.appendChild(cw);

    let V = params.V ?? 0;  // 已滴体积 mL
    let ka = params.ka ?? 14; // 0 表示强酸滴强碱
    const Veq = 25;

    const valV = readoutItem('滴加量 V', '0 mL');
    const valPH = readoutItem('当前 pH', '');
    const valState = readoutItem('状态', '酸性');
    const ro = el('div', { class:'iv-readout' }, [valV, valPH, valState]);

    const ctrls = el('div', { class:'iv-controls' }, [
      slider({ label:'滴加量', min:0, max:50, step:0.5, value:0, unit:' mL', onInput:v=>V=v }),
      el('button', { class:'iv-btn ghost', onclick:()=>{ V=0; ctrls.querySelector('input').value=0; ctrls.querySelector('input').dispatchEvent(new Event('input')); }}, '↺ 重置')
    ]);
    host.appendChild(ctrls);
    host.appendChild(ro);

    const ctx = c.getContext('2d');
    function ph(v) {
      // 强酸（0.1mol/L 25mL）滴入强碱（0.1mol/L）
      // 初始 pH=1, 等当点 pH=7, 过量 pH 趋近 13
      if (v < Veq - 0.1) {
        const cH = 0.1 * (Veq - v) / (25 + v);
        return -Math.log10(cH);
      } else if (v > Veq + 0.1) {
        const cOH = 0.1 * (v - Veq) / (25 + v);
        return 14 + Math.log10(cOH);
      } else return 7;
    }
    function draw() {
      if (!host.isConnected) return;
      ctx.clearRect(0,0,c.width,c.height);
      const ox=60, oy=250, w=420, h=200;
      ctx.strokeStyle='#3a2f5c'; ctx.lineWidth=1;
      ctx.beginPath(); ctx.moveTo(ox,oy); ctx.lineTo(ox+w,oy); ctx.moveTo(ox,oy); ctx.lineTo(ox,oy-h); ctx.stroke();
      ctx.fillStyle='#b8aec0'; ctx.font='12px monospace';
      ctx.fillText('V (mL)', ox+w-30, oy+18);
      ctx.fillText('pH', ox-30, oy-h+10);
      for (let p=0; p<=14; p+=2) {
        ctx.fillText(p, ox-22, oy - (p/14)*h + 4);
        ctx.strokeStyle='rgba(58,47,92,0.4)';
        ctx.beginPath(); ctx.moveTo(ox, oy-(p/14)*h); ctx.lineTo(ox+w, oy-(p/14)*h); ctx.stroke();
      }
      // 曲线
      ctx.strokeStyle='#6ed5e0'; ctx.lineWidth=2;
      ctx.shadowColor='#6ed5e0'; ctx.shadowBlur=6;
      ctx.beginPath();
      for (let v=0; v<=50; v+=0.2) {
        const p = ph(v);
        const xx = ox + (v/50)*w;
        const yy = oy - (p/14)*h;
        if (v===0) ctx.moveTo(xx,yy); else ctx.lineTo(xx,yy);
      }
      ctx.stroke();
      ctx.shadowBlur=0;
      // 当前点
      const curP = ph(V);
      const cxp = ox + (V/50)*w;
      const cyp = oy - (curP/14)*h;
      ctx.fillStyle='#f5c97a'; ctx.shadowColor='#f5c97a'; ctx.shadowBlur=14;
      ctx.beginPath(); ctx.arc(cxp,cyp,8,0,Math.PI*2); ctx.fill();
      ctx.shadowBlur=0;
      // 等当点
      ctx.strokeStyle='#e25b5b'; ctx.setLineDash([4,4]);
      ctx.beginPath(); ctx.moveTo(ox + (Veq/50)*w, oy); ctx.lineTo(ox + (Veq/50)*w, oy-h); ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle='#e25b5b'; ctx.fillText('等当点', ox+(Veq/50)*w-20, oy-h-2);

      setRO(valV.querySelector('.val'), fmt(V,1)+' mL');
      setRO(valPH.querySelector('.val'), fmt(curP,2));
      setRO(valState.querySelector('.val'), curP<6?'酸性':(curP>8?'碱性':'近中性'));
      requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
    return { destroy(){} };
  }

  // 原电池/电解池
  function electrolysis(host, opt={}) {
    const wrap = el('div', { class:'iv-stage' });
    const mode = opt.mode || 'galvanic'; // 'galvanic' 原电池 / 'electrolytic' 电解池
    wrap.appendChild(el('div', { class:'iv-label' }, mode==='galvanic'?'🔋 原电池 (Zn-Cu) · 锌为负极(阳极氧化)，铜为正极(阴极还原)':'⚡ 电解池 · 阳极氧化，阴极还原'));

    const svgEl = svg('svg', { viewBox:'0 0 400 240', style:'width:100%;max-width:480px;display:block;margin:0 auto;' });
    // 烧杯
    svgEl.appendChild(svg('path', { d:'M50 80 L50 200 Q50 220 70 220 L330 220 Q350 220 350 200 L350 80', fill:'rgba(110,213,224,0.1)', stroke:'#b8aec0', 'stroke-width':2 }));
    // 溶液
    svgEl.appendChild(svg('rect', { x:50, y:100, width:300, height:120, fill:'rgba(110,213,224,0.18)' }));
    // 电极
    svgEl.appendChild(svg('rect', { x:110, y:60, width:14, height:140, fill:'#cfcfd9', stroke:'#9999b3' }));
    svgEl.appendChild(svg('text', { x:117, y:50, fill:'#cfcfd9', 'text-anchor':'middle', 'font-size':14 }, ))
      .textContent = mode==='galvanic' ? 'Zn(负极)' : '阳极';
    svgEl.appendChild(svg('rect', { x:280, y:60, width:14, height:140, fill:'#e6b27a', stroke:'#c9a14d' }));
    const rt = svg('text', { x:287, y:50, fill:'#e6b27a', 'text-anchor':'middle', 'font-size':14 });
    rt.textContent = mode==='galvanic' ? 'Cu(正极)' : '阴极';
    svgEl.appendChild(rt);

    // 外电路（带电流方向）
    svgEl.appendChild(svg('path', { d:'M117 60 L117 30 L287 30 L287 60', fill:'none', stroke:'#f5c97a', 'stroke-width':2 }));
    // 电流箭头（金电流方向：正极→负极 外电路中是正极到负极？原电池中电流由正极出外电路到负极）
    // 这里画一个移动的电子或电流
    const arrow = svg('circle', { cx:200, cy:30, r:5, fill:'#f5c97a' });
    arrow.setAttribute('id','elec');
    svgEl.appendChild(arrow);
    const anim = svg('animate', { attributeName:'cx', from: mode==='galvanic'?287:117, to: mode==='galvanic'?117:287, dur:'2s', repeatCount:'indefinite' });
    arrow.appendChild(anim);

    // 离子标签
    svgEl.appendChild(svg('text', { x:200, y:160, fill:'#6ed5e0', 'text-anchor':'middle', 'font-size':14 }))
      .textContent = mode==='galvanic'?'电解质溶液':'电解质溶液';
    svgEl.appendChild(svg('text', { x:200, y:20, fill:'#f5c97a', 'text-anchor':'middle', 'font-size':12 }))
      .textContent = mode==='galvanic'?'← 外电路电流方向':'← 外电源电流方向';

    wrap.appendChild(svgEl);
    if (opt.note) wrap.appendChild(el('div', { class:'hint-bubble' }, opt.note));
    host.appendChild(wrap);
    return { destroy(){} };
  }

  // ============================================================
  //  地理动画组件
  // ============================================================

  // 地球公转/自转
  function earthRotation(host, params={}) {
    const cw = el('div', { class:'iv-canvas-wrap' });
    const c = el('canvas', { width:560, height:300 });
    cw.appendChild(c);
    host.appendChild(el('div', { class:'iv-label' }, '🌍 地球公转 · 注意黄赤交角 23°26′ 导致的太阳直射点回归运动'));
    host.appendChild(cw);

    let month = params.month ?? 6;  // 1~12
    let speed = 1;
    const valMonth = readoutItem('月份', '6 月');
    const valSun = readoutItem('太阳直射点', '');
    const valSeason = readoutItem('北半球季节', '');
    const valDay = readoutItem('北半球昼夜', '');
    const ro = el('div', { class:'iv-readout' }, [valMonth, valSun, valSeason, valDay]);

    const ctrls = el('div', { class:'iv-controls' }, [
      slider({ label:'月份', min:1, max:12, step:0.5, value:month, unit:' 月', onInput:v=>month=v }),
      el('button', { class:'iv-btn ghost', onclick:()=>{ speed = speed===0?1:0; }}, '⏯ 暂停/继续'),
    ]);
    host.appendChild(ctrls);
    host.appendChild(ro);

    const ctx = c.getContext('2d');
    let auto = 0;
    function draw(now) {
      if (!host.isConnected) return;
      if (speed) auto += 0.005;
      const m = ((month + auto) % 12 + 12) % 12 || 12;
      const angle = (m-3)/12 * Math.PI*2; // 春分 3月 在 0°
      const sunX = c.width/2, sunY = c.height/2;
      const a = 200, b = 100;
      const ex = sunX + a*Math.cos(angle);
      const ey = sunY + b*Math.sin(angle);

      ctx.clearRect(0,0,c.width,c.height);
      // 公转轨道
      ctx.strokeStyle='rgba(178,136,255,0.4)'; ctx.lineWidth=1;
      ctx.beginPath(); ctx.ellipse(sunX,sunY,a,b,0,0,Math.PI*2); ctx.stroke();
      // 太阳
      ctx.fillStyle='#f5c97a'; ctx.shadowColor='#f5c97a'; ctx.shadowBlur=24;
      ctx.beginPath(); ctx.arc(sunX,sunY,22,0,Math.PI*2); ctx.fill();
      ctx.shadowBlur=0;
      ctx.fillStyle='#e25b5b';
      for (let i=0;i<8;i++) {
        const a2 = i*Math.PI/4;
        ctx.beginPath();
        ctx.moveTo(sunX+Math.cos(a2)*22, sunY+Math.sin(a2)*22);
        ctx.lineTo(sunX+Math.cos(a2)*30, sunY+Math.sin(a2)*30);
        ctx.lineWidth=2; ctx.strokeStyle='#f5c97a'; ctx.stroke();
      }

      // 地球
      ctx.fillStyle='#6ed5e0'; ctx.shadowColor='#6ed5e0'; ctx.shadowBlur=14;
      ctx.beginPath(); ctx.arc(ex, ey, 18, 0, Math.PI*2); ctx.fill();
      ctx.shadowBlur=0;
      // 地轴（倾斜 23.4°）
      const tilt = 23.4*Math.PI/180;
      ctx.strokeStyle='#fff'; ctx.lineWidth=1.5;
      ctx.beginPath();
      ctx.moveTo(ex - 24*Math.sin(tilt), ey - 24*Math.cos(tilt));
      ctx.lineTo(ex + 24*Math.sin(tilt), ey + 24*Math.cos(tilt));
      ctx.stroke();
      // 北极标记
      ctx.fillStyle='#fff';
      ctx.beginPath(); ctx.arc(ex - 24*Math.sin(tilt), ey - 24*Math.cos(tilt), 3, 0, Math.PI*2); ctx.fill();
      ctx.font='11px monospace'; ctx.fillText('N', ex - 30*Math.sin(tilt)-3, ey - 30*Math.cos(tilt));

      // 文字
      ctx.fillStyle='#b8aec0'; ctx.font='12px monospace';
      const seasons = {3:'春分',6:'夏至',9:'秋分',12:'冬至'};
      Object.keys(seasons).forEach(k => {
        const kn = parseInt(k);
        const a = (kn-3)/12 * Math.PI*2;
        const xx = sunX + (a===0?-1:1)*a*0; // 暂时手动放4个标签
      });
      // 4个关键节点
      [['春分',3],['夏至',6],['秋分',9],['冬至',12]].forEach(([n, mo]) => {
        const a = (mo-3)/12 * Math.PI*2;
        const xx = sunX + (a)*0 + (a===0?-a:0); // 用三角函数
        const xPos = sunX + a* (a/(Math.PI*2)); // 简化
        const fx = sunX + (200+18)*Math.cos(a);
        const fy = sunY + (100+18)*Math.sin(a) + 16;
        ctx.fillStyle = Math.abs(m-mo)<0.4 ? '#f5c97a' : '#7a6b88';
        ctx.fillText(n, fx-10, fy);
      });

      // 太阳直射点
      let lat = 23.4 * Math.sin((m-3)/12 * 2*Math.PI);
      let season = '春季';
      if (m>=3 && m<6) season='春季';
      else if (m>=6 && m<9) season='夏季';
      else if (m>=9 && m<12) season='秋季';
      else season='冬季';
      const day = lat>0?'昼长夜短':(lat<0?'昼短夜长':'昼夜平分');
      setRO(valMonth.querySelector('.val'), fmt(m,1)+' 月');
      setRO(valSun.querySelector('.val'), (lat>=0?'N ':'S ') + fmt(Math.abs(lat),1) + '°');
      setRO(valSeason.querySelector('.val'), season);
      setRO(valDay.querySelector('.val'), day);
      requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
    return { destroy(){} };
  }

  // 气压带风带
  function pressureBelt(host) {
    const wrap = el('div', { class:'iv-stage' });
    wrap.appendChild(el('div', { class:'iv-label' }, '🌬 七个气压带 + 六个风带（理想模式）'));
    const svgEl = svg('svg', { viewBox:'0 0 500 360', style:'width:100%;max-width:500px;display:block;margin:0 auto;' });
    // 地球（圆）
    svgEl.appendChild(svg('circle', { cx:250, cy:180, r:160, fill:'rgba(110,213,224,0.08)', stroke:'#6ed5e0', 'stroke-width':1.5 }));
    // 纬度线
    [-60,-30,0,30,60].forEach(lat => {
      const y = 180 - lat * (160/90);
      svgEl.appendChild(svg('line', { x1:90, y1:y, x2:410, y2:y, stroke:'rgba(178,136,255,0.4)', 'stroke-dasharray':'3 3' }));
      const t = svg('text', { x:80, y:y+4, fill:'#b8aec0', 'font-size':11, 'text-anchor':'end' });
      t.textContent = lat===0?'赤道':`${Math.abs(lat)}°${lat>0?'N':'S'}`;
      svgEl.appendChild(t);
    });
    // 气压带（红=低压，蓝=高压）
    const belts = [
      { lat: 0,   name:'赤道低压带', color:'#e25b5b' },
      { lat: 30,  name:'副热带高压', color:'#6ed5e0' },
      { lat: -30, name:'副热带高压', color:'#6ed5e0' },
      { lat: 60,  name:'副极地低压', color:'#e25b5b' },
      { lat:-60,  name:'副极地低压', color:'#e25b5b' },
      { lat: 90,  name:'极地高压',   color:'#6ed5e0' },
      { lat:-90,  name:'极地高压',   color:'#6ed5e0' },
    ];
    belts.forEach(b => {
      const y = 180 - b.lat * (160/90);
      svgEl.appendChild(svg('line', { x1:90, y1:y, x2:410, y2:y, stroke:b.color, 'stroke-width':6, 'stroke-opacity':0.6 }));
      const t = svg('text', { x:418, y:y+4, fill:b.color, 'font-size':11 });
      t.textContent = b.name;
      svgEl.appendChild(t);
    });
    // 风带箭头
    const winds = [
      { lat:15,  dir:'NE', name:'信风' },
      { lat:-15, dir:'SE', name:'信风' },
      { lat:45,  dir:'SW', name:'西风' },
      { lat:-45, dir:'NW', name:'西风' },
      { lat:75,  dir:'NE', name:'极地东风' },
      { lat:-75, dir:'SE', name:'极地东风' },
    ];
    winds.forEach(w => {
      const y = 180 - w.lat*(160/90);
      for (let x=110; x<400; x+=80) {
        const arrowText = w.dir==='NE'?'↖':(w.dir==='SE'?'↙':(w.dir==='SW'?'↗':'↘'));
        const a = svg('text', { x, y:y-2, fill:'#f5c97a', 'font-size':16 });
        a.textContent = arrowText;
        svgEl.appendChild(a);
      }
    });
    wrap.appendChild(svgEl);
    wrap.appendChild(el('div', { class:'hint-bubble' },
      '<b>记忆口诀</b>：低高低高（赤道低，副热高，副极低，极地高），冷气下沉成高压，暖气上升成低压。'));
    host.appendChild(wrap);
    return { destroy(){} };
  }

  // 太阳直射回归
  function sunPath(host) {
    const cw = el('div', { class:'iv-canvas-wrap' });
    const c = el('canvas', { width:560, height:200 });
    cw.appendChild(c);
    host.appendChild(el('div', { class:'iv-label' }, '☀ 太阳直射点回归运动（一年内在南北回归线之间往复）'));
    host.appendChild(cw);

    let day = 0;
    const ctrls = el('div', { class:'iv-controls' }, [
      slider({ label:'日期', min:0, max:365, step:1, value:0, unit:' 天', onInput:v=>day=v }),
      el('button', { class:'iv-btn ghost', onclick:()=>{ playing = !playing; } }, '▶ 自动播放')
    ]);
    host.appendChild(ctrls);

    const valLat = readoutItem('直射纬度', '');
    const valDate = readoutItem('日期', '');
    const ro = el('div', { class:'iv-readout' }, [valLat, valDate]);
    host.appendChild(ro);

    let playing = false;
    const ctx = c.getContext('2d');
    function draw() {
      if (!host.isConnected) return;
      if (playing) day = (day + 1) % 365;
      ctx.clearRect(0,0,c.width,c.height);
      // 横轴：一年
      const ox=60, oy=100, w=480, h=80;
      ctx.strokeStyle='#3a2f5c';
      ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(ox+w, oy); ctx.stroke();
      // 上下界（南北回归线）
      ctx.setLineDash([4,4]); ctx.strokeStyle='#f5c97a';
      ctx.beginPath(); ctx.moveTo(ox, oy-h); ctx.lineTo(ox+w, oy-h); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(ox, oy+h); ctx.lineTo(ox+w, oy+h); ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle='#f5c97a'; ctx.font='11px monospace';
      ctx.fillText('北回归线 23°26′N', ox+5, oy-h-3);
      ctx.fillText('南回归线 23°26′S', ox+5, oy+h+12);
      ctx.fillText('赤道', ox+5, oy-3);

      // 直射点曲线 (正弦)
      ctx.strokeStyle='#6ed5e0'; ctx.lineWidth=2;
      ctx.beginPath();
      for (let d=0; d<=365; d++) {
        const lat = 23.4 * Math.sin(2*Math.PI*(d-80)/365); // 春分约在第80天
        const xx = ox + (d/365)*w;
        const yy = oy - lat * (h/23.4);
        if (d===0) ctx.moveTo(xx,yy); else ctx.lineTo(xx,yy);
      }
      ctx.stroke();
      // 当前点
      const lat = 23.4 * Math.sin(2*Math.PI*(day-80)/365);
      const xx = ox + (day/365)*w;
      const yy = oy - lat*(h/23.4);
      ctx.fillStyle='#e25b5b'; ctx.shadowColor='#e25b5b'; ctx.shadowBlur=12;
      ctx.beginPath(); ctx.arc(xx,yy,7,0,Math.PI*2); ctx.fill();
      ctx.shadowBlur=0;

      // 节气标记
      [['春分',80],['夏至',172],['秋分',266],['冬至',355]].forEach(([n,d])=>{
        const xxx = ox + (d/365)*w;
        ctx.fillStyle='#b288ff';
        ctx.fillText(n, xxx-12, oy+30);
      });

      setRO(valLat.querySelector('.val'), (lat>=0?'N ':'S ')+fmt(Math.abs(lat),1)+'°');
      setRO(valDate.querySelector('.val'), '第 '+Math.round(day)+' 天');
      requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
    return { destroy(){} };
  }

  // 时区计算器
  function timeZone(host) {
    const wrap = el('div', { class:'iv-stage' });
    wrap.appendChild(el('div', { class:'iv-label' }, '🕒 时区计算 · 拖动两地经度，看时差（东加西减）'));

    let lon1 = 120;  // 北京
    let lon2 = -75;  // 纽约（约）

    const valDiff = readoutItem('时差', '');
    const valDir = readoutItem('方向', '');
    const ro = el('div', { class:'iv-readout' }, [valDiff, valDir]);

    const ctrls = el('div', { class:'iv-controls' }, [
      slider({ label:'地点A 经度', min:-180, max:180, step:5, value:120, unit:'°', onInput:v=>{lon1=v;update();} }),
      slider({ label:'地点B 经度', min:-180, max:180, step:5, value:-75, unit:'°', onInput:v=>{lon2=v;update();} }),
    ]);
    wrap.appendChild(ctrls);
    wrap.appendChild(ro);

    const display = el('div', { style:{textAlign:'center', margin:'10px 0', fontSize:'14px', color:'#b8aec0'} });
    wrap.appendChild(display);

    function update() {
      const z1 = Math.round(lon1/15);
      const z2 = Math.round(lon2/15);
      const diff = z1 - z2;
      setRO(valDiff.querySelector('.val'), Math.abs(diff)+' 小时');
      setRO(valDir.querySelector('.val'), diff>0?'A 早于 B':(diff<0?'B 早于 A':'同时区'));
      display.innerHTML = `
        <span style="color:#f5c97a;">A: ${lon1>0?'东':'西'}${Math.abs(lon1)}° (UTC${z1>=0?'+':''}${z1})</span>
        &nbsp;&nbsp;&nbsp;
        <span style="color:#6ed5e0;">B: ${lon2>0?'东':'西'}${Math.abs(lon2)}° (UTC${z2>=0?'+':''}${z2})</span>
      `;
    }
    update();
    host.appendChild(wrap);
    return { destroy(){} };
  }

  // ============================================================
  //  数学动画（备用）
  // ============================================================

  function functionGraph(host, opt={}) {
    const cw = el('div', { class:'iv-canvas-wrap' });
    const c = el('canvas', { width:560, height:260 });
    cw.appendChild(c);
    host.appendChild(el('div', { class:'iv-label' }, '📐 ' + (opt.label || '函数图像')));
    host.appendChild(cw);

    let a = opt.a ?? 1, b = opt.b ?? 0, c2 = opt.c ?? 0;
    const ctrls = el('div', { class:'iv-controls' }, [
      slider({ label:'a', min:-3, max:3, step:0.1, value:a, unit:'', onInput:v=>a=v }),
      slider({ label:'b', min:-5, max:5, step:0.1, value:b, unit:'', onInput:v=>b=v }),
      slider({ label:'c', min:-5, max:5, step:0.1, value:c2, unit:'', onInput:v=>c2=v }),
    ]);
    host.appendChild(ctrls);

    const ctx = c.getContext('2d');
    const formula = opt.formula || 'a*x*x + b*x + c';
    const f = new Function('x','a','b','c', `return ${formula};`);

    function draw() {
      if (!host.isConnected) return;
      ctx.clearRect(0,0,c.width,c.height);
      const ox = c.width/2, oy = c.height/2;
      const sc = 25; // px per unit
      // 网格
      ctx.strokeStyle='rgba(58,47,92,0.6)'; ctx.lineWidth=1;
      for (let x=-12; x<=12; x++) { ctx.beginPath(); ctx.moveTo(ox+x*sc, 0); ctx.lineTo(ox+x*sc, c.height); ctx.stroke(); }
      for (let y=-5; y<=5; y++) { ctx.beginPath(); ctx.moveTo(0, oy+y*sc); ctx.lineTo(c.width, oy+y*sc); ctx.stroke(); }
      // 轴
      ctx.strokeStyle='#b8aec0'; ctx.lineWidth=1.5;
      ctx.beginPath(); ctx.moveTo(0,oy); ctx.lineTo(c.width,oy); ctx.moveTo(ox,0); ctx.lineTo(ox,c.height); ctx.stroke();
      // 函数曲线
      ctx.strokeStyle='#f5c97a'; ctx.lineWidth=2;
      ctx.shadowColor='#f5c97a'; ctx.shadowBlur=6;
      ctx.beginPath();
      let first=true;
      for (let px=0; px<c.width; px++) {
        const x = (px - ox)/sc;
        try {
          const y = f(x, a, b, c2);
          const py = oy - y*sc;
          if (!isFinite(py)) { first=true; continue; }
          if (first) { ctx.moveTo(px, py); first=false; } else ctx.lineTo(px, py);
        } catch (e) {}
      }
      ctx.stroke();
      ctx.shadowBlur=0;
      requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
    return { destroy(){} };
  }

  // ============================================================
  //  v2.0.1 补丁：补全 ocean_current / monsoon / lc_circuit / wave_interference
  // ============================================================

  // —— 世界洋流 ocean_current ——
  function oceanCurrent(host, params={}) {
    let hemi = params.hemi || 'both';   // 'north' | 'south' | 'both'
    const ctrls = el('div',{class:'iv-controls'},[
      el('button',{class:'iv-btn ghost', onclick:()=>{hemi='both';redraw();}},'两半球'),
      el('button',{class:'iv-btn ghost', onclick:()=>{hemi='north';redraw();}},'北半球'),
      el('button',{class:'iv-btn ghost', onclick:()=>{hemi='south';redraw();}},'南半球')
    ]);
    const c = cv('iv-canvas',640,360);
    const ctx = c.getContext('2d');
    const legend = el('div',{class:'iv-tip'},
      '🌊 暖流（红）顺时针·北半球 / 逆时针·南半球；寒流（蓝）反之。<br>记忆口诀：<b>「8 字环流」</b>——副热带海区中心。');
    host.appendChild(ctrls); host.appendChild(c); host.appendChild(legend);

    let t=0;
    function arrow(x,y,ang,col){
      ctx.save();ctx.translate(x,y);ctx.rotate(ang);
      ctx.fillStyle=col;ctx.beginPath();
      ctx.moveTo(8,0);ctx.lineTo(-6,-5);ctx.lineTo(-6,5);ctx.closePath();ctx.fill();
      ctx.restore();
    }
    function gyre(cx,cy,rx,ry,clockwise,warmColor,coldColor){
      // 椭圆环流，分四段着色（西岸暖流、东岸寒流）
      ctx.lineWidth=3;
      const seg=120;
      for(let i=0;i<seg;i++){
        const a1=(i/seg)*Math.PI*2, a2=((i+1)/seg)*Math.PI*2;
        const x1=cx+rx*Math.cos(a1), y1=cy+ry*Math.sin(a1);
        const x2=cx+rx*Math.cos(a2), y2=cy+ry*Math.sin(a2);
        // 西岸（x < cx）= 暖流；东岸（x > cx）= 寒流
        ctx.strokeStyle = (x1<cx) ? warmColor : coldColor;
        ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke();
      }
      // 流向箭头（动画）
      for(let k=0;k<6;k++){
        const phase=(t/60 + k/6)%1;
        const a = clockwise ? phase*Math.PI*2 : -phase*Math.PI*2;
        const x=cx+rx*Math.cos(a), y=cy+ry*Math.sin(a);
        const tx=-rx*Math.sin(a), ty=ry*Math.cos(a);
        const ang=Math.atan2(ty*(clockwise?1:-1), tx*(clockwise?1:-1));
        const col=(x<cx)?warmColor:coldColor;
        arrow(x,y,ang,col);
      }
    }
    function redraw(){}
    function loop(){
      if(!host.isConnected) return;
      t++;
      ctx.fillStyle='#0b1633';ctx.fillRect(0,0,c.width,c.height);
      // 陆地块（简化）
      ctx.fillStyle='#2d3a52';
      ctx.fillRect(0,140,80,80); ctx.fillRect(560,140,80,80);   // 大陆边
      ctx.fillRect(280,80,80,40); ctx.fillRect(280,240,80,40);  // 中间陆桥
      // 赤道线
      ctx.strokeStyle='rgba(255,255,255,0.25)';ctx.lineWidth=1;
      ctx.setLineDash([5,5]);ctx.beginPath();ctx.moveTo(0,180);ctx.lineTo(c.width,180);ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle='var(--xx-text-dim)';ctx.font='12px sans-serif';
      ctx.fillStyle='#888';ctx.fillText('赤道',6,176);
      // 北半球副热带环流（顺时针）
      if(hemi==='both'||hemi==='north') gyre(320,110,220,55,true,'#e25b5b','#6ed5e0');
      // 南半球副热带环流（逆时针）
      if(hemi==='both'||hemi==='south') gyre(320,250,220,55,false,'#e25b5b','#6ed5e0');
      // 文字提示
      ctx.fillStyle='#f5c97a';ctx.font='13px sans-serif';
      ctx.fillText('暖流（低纬→高纬，增温增湿）',12,24);
      ctx.fillStyle='#6ed5e0';
      ctx.fillText('寒流（高纬→低纬，降温减湿）',12,44);
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
    return { destroy(){} };
  }

  // —— 季风 monsoon ——
  function monsoon(host, params={}) {
    let season=params.season||'summer';  // 'summer' / 'winter'
    const ctrls=el('div',{class:'iv-controls'},[
      el('button',{class:'iv-btn',onclick:()=>{season='summer';info.innerHTML=tip();}},'☀ 夏季风'),
      el('button',{class:'iv-btn ghost',onclick:()=>{season='winter';info.innerHTML=tip();}},'❄ 冬季风')
    ]);
    const c=cv('iv-canvas',640,360);
    const ctx=c.getContext('2d');
    const info=el('div',{class:'iv-tip'},'');
    function tip(){
      return season==='summer'
        ? '☀ <b style="color:#e25b5b">夏季风</b>：太平洋（高压）→ 亚洲大陆（低压），<b>东南风/西南风</b>，暖湿多雨。莆田正值<b>梅雨/台风季</b>。'
        : '❄ <b style="color:#6ed5e0">冬季风</b>：亚洲大陆（高压）→ 太平洋（低压），<b>西北风/东北风</b>，干冷少雨。';
    }
    info.innerHTML=tip();
    host.appendChild(ctrls);host.appendChild(c);host.appendChild(info);
    let t=0;
    function arrow(x,y,ang,col,sz=10){
      ctx.save();ctx.translate(x,y);ctx.rotate(ang);
      ctx.fillStyle=col;ctx.beginPath();
      ctx.moveTo(sz,0);ctx.lineTo(-sz*0.7,-sz*0.6);ctx.lineTo(-sz*0.7,sz*0.6);ctx.closePath();ctx.fill();
      ctx.restore();
    }
    function loop(){
      if(!host.isConnected) return;
      t++;
      // 背景
      ctx.fillStyle='#0b1633';ctx.fillRect(0,0,c.width,c.height);
      // 大陆（左）与海洋（右）
      ctx.fillStyle = season==='summer' ? '#5a2a2a' : '#2a3a5a';
      ctx.fillRect(0,80,340,240);
      ctx.fillStyle = season==='summer' ? '#1a3a55' : '#3a2a2a';
      ctx.fillRect(340,80,300,240);
      // 标签
      ctx.fillStyle='#fff';ctx.font='14px sans-serif';
      ctx.fillText(season==='summer'?'亚洲大陆（低压·热）':'亚洲大陆（高压·冷）',30,110);
      ctx.fillText(season==='summer'?'太平洋（高压·凉）':'太平洋（低压·暖）',380,110);
      // 莆田位置标记
      ctx.fillStyle='#f5c97a';ctx.beginPath();ctx.arc(310,210,5,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='#f5c97a';ctx.font='12px sans-serif';
      ctx.fillText('★ 莆田',270,200);
      // 风向箭头
      const dir = (season==='summer') ? -1 : 1;  // 夏=海→陆(左)，冬=陆→海(右)
      const col = (season==='summer') ? '#e25b5b' : '#6ed5e0';
      for(let i=0;i<5;i++){
        const y=150+i*30;
        const phase=((t+i*20)%80)/80;
        const x = (season==='summer') ? (640-phase*640) : (phase*640);
        const ang = (season==='summer') ? Math.PI : 0;
        arrow(x,y,ang,col,12);
      }
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
    return { destroy(){} };
  }

  // —— LC 振荡电路 lc_circuit ——
  function lcCircuit(host, params={}) {
    let L=params.L||1, C=params.C||1;
    const ctrls=el('div',{class:'iv-controls'},[
      slider({label:'电感 L',min:0.2,max:5,step:0.1,value:L,unit:' H',onInput:v=>L=v}),
      slider({label:'电容 C',min:0.2,max:5,step:0.1,value:C,unit:' F',onInput:v=>C=v})
    ]);
    const c=cv('iv-canvas',640,320);
    const ctx=c.getContext('2d');
    const info=el('div',{class:'iv-tip'},'⚡ <b>LC振荡</b>：电场能（电容）↔ 磁场能（电感）相互转化。周期 T = 2π√(LC)。');
    host.appendChild(ctrls);host.appendChild(c);host.appendChild(info);
    let t0=performance.now();
    function loop(){
      if(!host.isConnected) return;
      const now=performance.now();
      const t=(now-t0)/1000;
      const T=2*Math.PI*Math.sqrt(L*C);
      const phase=(t%T)/T*Math.PI*2;
      const q=Math.cos(phase);    // 电荷
      const i=-Math.sin(phase);   // 电流
      // bg
      ctx.fillStyle='#0b1633';ctx.fillRect(0,0,c.width,c.height);
      // 电路图
      ctx.strokeStyle='#888';ctx.lineWidth=2;
      // 上下导线
      ctx.beginPath();ctx.moveTo(180,80);ctx.lineTo(420,80);ctx.moveTo(180,220);ctx.lineTo(420,220);ctx.stroke();
      // 电容（左）
      ctx.beginPath();ctx.moveTo(180,80);ctx.lineTo(180,140);ctx.moveTo(180,160);ctx.lineTo(180,220);
      ctx.moveTo(150,140);ctx.lineTo(210,140);ctx.moveTo(150,160);ctx.lineTo(210,160);ctx.stroke();
      // 电感（右，画线圈）
      ctx.beginPath();ctx.moveTo(420,80);ctx.lineTo(420,120);
      for(let k=0;k<4;k++) ctx.arc(420,135+k*15,8,Math.PI,0,false);
      ctx.moveTo(420,195);ctx.lineTo(420,220);ctx.stroke();
      // 电荷可视化（电容板上的颜色：红+蓝-）
      const qAbs=Math.abs(q);
      ctx.fillStyle=`rgba(226,91,91,${qAbs*0.9})`;ctx.fillRect(150,138-2,60,5);
      ctx.fillStyle=`rgba(110,213,224,${qAbs*0.9})`;ctx.fillRect(150,158-2,60,5);
      // 电流箭头
      if(Math.abs(i)>0.05){
        const dir=i>0?1:-1;
        ctx.fillStyle=i>0?'#f5c97a':'#b288ff';
        const ax= 300 + 60*Math.sin(phase*4);
        ctx.beginPath();
        ctx.moveTo(ax+15*dir,80);ctx.lineTo(ax-10*dir,72);ctx.lineTo(ax-10*dir,88);ctx.closePath();ctx.fill();
        ctx.beginPath();
        ctx.moveTo(ax-15*dir,220);ctx.lineTo(ax+10*dir,212);ctx.lineTo(ax+10*dir,228);ctx.closePath();ctx.fill();
      }
      // 能量条
      const Ee=q*q, Em=i*i;
      ctx.fillStyle='#222';ctx.fillRect(40,260,260,16);ctx.fillRect(340,260,260,16);
      ctx.fillStyle='#e25b5b';ctx.fillRect(40,260,260*Ee,16);
      ctx.fillStyle='#6ed5e0';ctx.fillRect(340,260,260*Em,16);
      ctx.fillStyle='#ede5d3';ctx.font='12px sans-serif';
      ctx.fillText('电场能 (½q²/C)',40,254);
      ctx.fillText('磁场能 (½Li²)',340,254);
      ctx.fillText(`T = 2π√(LC) = ${T.toFixed(2)} s`,40,298);
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
    return { destroy(){} };
  }

  // —— 双缝干涉 wave_interference ——
  function waveInterference(host, params={}) {
    let d=params.d||60, lam=params.lambda||40;
    const ctrls=el('div',{class:'iv-controls'},[
      slider({label:'缝距 d',min:30,max:120,step:5,value:d,unit:' px',onInput:v=>d=v}),
      slider({label:'波长 λ',min:20,max:80,step:2,value:lam,unit:' px',onInput:v=>lam=v})
    ]);
    const c=cv('iv-canvas',640,360);
    const ctx=c.getContext('2d');
    const info=el('div',{class:'iv-tip'},'✨ <b>双缝干涉</b>：相长（亮）出现在路径差 = nλ，相消（暗）出现在路径差 = (n+½)λ。<br>条纹间距 Δy = λL/d。');
    host.appendChild(ctrls);host.appendChild(c);host.appendChild(info);
    let t=0;
    function loop(){
      if(!host.isConnected) return;
      t+=0.6;
      ctx.fillStyle='#08060f';ctx.fillRect(0,0,c.width,c.height);
      const s1x=180, s1y=180-d/2;
      const s2x=180, s2y=180+d/2;
      // 缝屏
      ctx.fillStyle='#444';ctx.fillRect(175,0,10,s1y-5);
      ctx.fillRect(175,s1y+5,10,(s2y-5)-(s1y+5));
      ctx.fillRect(175,s2y+5,10,360-(s2y+5));
      // 屏
      ctx.fillStyle='#222';ctx.fillRect(560,0,4,360);
      // 波纹场（叠加两个圆波）
      const img=ctx.getImageData(186,0,374,360);
      for(let y=0;y<360;y++){
        for(let x=0;x<374;x++){
          const X=x+186;
          const r1=Math.hypot(X-s1x,y-s1y);
          const r2=Math.hypot(X-s2x,y-s2y);
          const v=Math.sin(2*Math.PI*r1/lam - t)+Math.sin(2*Math.PI*r2/lam - t);
          const a=Math.abs(v)/2;
          const idx=(y*374+x)*4;
          img.data[idx]=110*a; img.data[idx+1]=213*a; img.data[idx+2]=224*a; img.data[idx+3]=255;
        }
      }
      ctx.putImageData(img,186,0);
      // 屏上强度条纹
      for(let y=0;y<360;y++){
        const r1=Math.hypot(560-s1x,y-s1y);
        const r2=Math.hypot(560-s2x,y-s2y);
        const v=Math.sin(2*Math.PI*r1/lam - t)+Math.sin(2*Math.PI*r2/lam - t);
        const a=Math.abs(v)/2;
        ctx.fillStyle=`rgba(245,201,122,${a})`;
        ctx.fillRect(564,y,40,1);
      }
      // 标注
      ctx.fillStyle='#f5c97a';ctx.font='12px sans-serif';
      ctx.fillText('双缝',150,18);ctx.fillText('屏（亮纹）',556,18);
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
    return { destroy(){} };
  }

  // ============================================================
  //  分子立体结构 molecule_3d（v2.2 新增 · 修复"未知交互类型"bug）
  //  支持: CO2 / H2O / NH3 / CH4 / NaCl / C2H4 / C2H2 / C6H6 / SO2 / HCl
  //  + 自动旋转 + 拖拽旋转 + 显示键角
  // ============================================================
  function molecule3d(host, params={}) {
    const name = (params.name || 'H2O').toUpperCase();

    // 原子色谱（CPK 配色 · 暗色仙侠风版）
    const COLORS = {
      H: '#e8eef8', C: '#3a3f4a', N: '#5b8df7', O: '#e25b5b',
      S: '#f5c97a', Na:'#b288ff', Cl:'#6ed5e0', P: '#f7a55c'
    };
    const RADII = { H:14, C:22, N:21, O:20, S:26, Na:28, Cl:24, P:24 };

    // 分子结构（原子相对坐标 + 化学键）
    // 坐标系：x→右, y→上, z→屏外
    const MOLECULES = {
      'CO2':  { name:'二氧化碳 CO₂', atoms:[{e:'C',p:[0,0,0]},{e:'O',p:[-60,0,0]},{e:'O',p:[60,0,0]}],
                bonds:[[0,1,2],[0,2,2]], angle:'O=C=O 180° 直线形', polarity:'非极性' },
      'H2O':  { name:'水 H₂O', atoms:[{e:'O',p:[0,0,0]},{e:'H',p:[-46,32,0]},{e:'H',p:[46,32,0]}],
                bonds:[[0,1,1],[0,2,1]], angle:'H-O-H 104.5° V形', polarity:'极性' },
      'NH3':  { name:'氨 NH₃', atoms:[{e:'N',p:[0,0,0]},{e:'H',p:[-44,-30,16]},{e:'H',p:[44,-30,16]},{e:'H',p:[0,-30,-44]}],
                bonds:[[0,1,1],[0,2,1],[0,3,1]], angle:'H-N-H 107° 三角锥', polarity:'极性' },
      'CH4':  { name:'甲烷 CH₄', atoms:[{e:'C',p:[0,0,0]},{e:'H',p:[40,40,40]},{e:'H',p:[-40,-40,40]},{e:'H',p:[-40,40,-40]},{e:'H',p:[40,-40,-40]}],
                bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]], angle:'H-C-H 109.5° 正四面体', polarity:'非极性' },
      'NACL': { name:'氯化钠 NaCl（离子晶体）', atoms:[{e:'Na',p:[-50,0,0]},{e:'Cl',p:[50,0,0]}],
                bonds:[[0,1,'ion']], angle:'Na⁺ ↔ Cl⁻ 离子键', polarity:'离子晶体' },
      'C2H4': { name:'乙烯 C₂H₄', atoms:[{e:'C',p:[-30,0,0]},{e:'C',p:[30,0,0]},{e:'H',p:[-60,30,0]},{e:'H',p:[-60,-30,0]},{e:'H',p:[60,30,0]},{e:'H',p:[60,-30,0]}],
                bonds:[[0,1,2],[0,2,1],[0,3,1],[1,4,1],[1,5,1]], angle:'C=C双键 平面结构 120°', polarity:'非极性' },
      'C2H2': { name:'乙炔 C₂H₂', atoms:[{e:'C',p:[-25,0,0]},{e:'C',p:[25,0,0]},{e:'H',p:[-65,0,0]},{e:'H',p:[65,0,0]}],
                bonds:[[0,1,3],[0,2,1],[1,3,1]], angle:'C≡C三键 直线形 180°', polarity:'非极性' },
      'C6H6': { name:'苯 C₆H₆', atoms:(()=>{
                const a=[]; for(let i=0;i<6;i++){const t=i*Math.PI/3;a.push({e:'C',p:[Math.cos(t)*40,Math.sin(t)*40,0]});}
                for(let i=0;i<6;i++){const t=i*Math.PI/3;a.push({e:'H',p:[Math.cos(t)*70,Math.sin(t)*70,0]});}
                return a;})(), bonds:(()=>{const b=[];for(let i=0;i<6;i++)b.push([i,(i+1)%6,1.5]);for(let i=0;i<6;i++)b.push([i,i+6,1]);return b;})(),
                angle:'六边形平面 120° 大π键', polarity:'非极性' },
      'SO2':  { name:'二氧化硫 SO₂', atoms:[{e:'S',p:[0,0,0]},{e:'O',p:[-50,30,0]},{e:'O',p:[50,30,0]}],
                bonds:[[0,1,2],[0,2,2]], angle:'O=S=O 119° V形', polarity:'极性' },
      'HCL':  { name:'氯化氢 HCl', atoms:[{e:'H',p:[-40,0,0]},{e:'Cl',p:[30,0,0]}],
                bonds:[[0,1,1]], angle:'H-Cl 极性共价键', polarity:'极性' },
    };

    const mol = MOLECULES[name] || MOLECULES['H2O'];

    const cw = el('div', { class:'iv-canvas-wrap' });
    const cvs = el('canvas', { width:560, height:300 });
    cw.appendChild(cvs);
    host.appendChild(cw);

    const info = el('div', { class:'iv-readouts' }, [
      readoutItem('分子', mol.name),
      readoutItem('键角/构型', mol.angle),
      readoutItem('极性', mol.polarity),
    ]);
    host.appendChild(info);

    const ctrls = el('div', { class:'iv-controls' }, [
      el('button', { class:'iv-btn ghost', onclick:()=>{ autoRot = !autoRot; }}, '⏯ 自动旋转'),
      el('button', { class:'iv-btn ghost', onclick:()=>{ rx=0.3; ry=0; }}, '↻ 重置视角'),
      el('div', { class:'iv-hint', style:'flex:1;text-align:right;color:#888;font-size:12px;' }, '💡 鼠标/手指拖拽可旋转分子'),
    ]);
    host.appendChild(ctrls);

    const ctx = cvs.getContext('2d');
    let rx = 0.3, ry = 0;
    let autoRot = true;

    // 拖拽旋转
    let dragging = false, lx = 0, ly = 0;
    function onDown(e){ dragging = true; autoRot = false;
      const t = e.touches ? e.touches[0] : e;
      lx = t.clientX; ly = t.clientY;
    }
    function onMove(e){ if (!dragging) return; e.preventDefault();
      const t = e.touches ? e.touches[0] : e;
      ry += (t.clientX - lx) * 0.01;
      rx += (t.clientY - ly) * 0.01;
      lx = t.clientX; ly = t.clientY;
    }
    function onUp(){ dragging = false; }
    cvs.addEventListener('mousedown', onDown);
    cvs.addEventListener('mousemove', onMove);
    cvs.addEventListener('mouseup', onUp);
    cvs.addEventListener('mouseleave', onUp);
    cvs.addEventListener('touchstart', onDown, {passive:false});
    cvs.addEventListener('touchmove', onMove, {passive:false});
    cvs.addEventListener('touchend', onUp);

    function project(p) {
      // 先绕Y轴(ry)旋转，再绕X轴(rx)
      let [x,y,z] = p;
      let nx = x*Math.cos(ry) + z*Math.sin(ry);
      let nz = -x*Math.sin(ry) + z*Math.cos(ry);
      let ny = y*Math.cos(rx) - nz*Math.sin(rx);
      nz = y*Math.sin(rx) + nz*Math.cos(rx);
      const scale = 1 + nz / 400;
      return { x: 280 + nx*scale, y: 150 - ny*scale, z: nz, s: scale };
    }

    let stopped = false;
    function loop() {
      if (stopped) return;
      if (autoRot) ry += 0.012;
      ctx.fillStyle = '#0e1320';
      ctx.fillRect(0,0,560,300);
      // 网格地板
      ctx.strokeStyle = 'rgba(110,213,224,0.06)';
      ctx.lineWidth = 1;
      for (let i=-3; i<=3; i++) {
        ctx.beginPath();
        const a = project([i*30, -50, -90]); const b = project([i*30, -50, 90]);
        ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
        const c = project([-90, -50, i*30]); const d = project([90, -50, i*30]);
        ctx.moveTo(c.x, c.y); ctx.lineTo(d.x, d.y);
        ctx.stroke();
      }

      // 投影所有原子
      const pa = mol.atoms.map(a => ({ ...a, p2: project(a.p) }));

      // 画键（按z排序，远的先画）
      const bondList = mol.bonds.map(([i,j,o]) => ({ a:pa[i], b:pa[j], order:o, mz:(pa[i].p2.z+pa[j].p2.z)/2 }));
      bondList.sort((a,b)=>a.mz-b.mz);
      bondList.forEach(b => {
        const order = b.order;
        ctx.strokeStyle = order === 'ion' ? 'rgba(178,136,255,0.55)' : 'rgba(220,220,230,0.85)';
        ctx.lineWidth = order === 'ion' ? 2 : (order >= 2 ? 4 : 2.5);
        if (order === 'ion') ctx.setLineDash([6,4]); else ctx.setLineDash([]);
        // 单键
        ctx.beginPath();
        ctx.moveTo(b.a.p2.x, b.a.p2.y);
        ctx.lineTo(b.b.p2.x, b.b.p2.y);
        ctx.stroke();
        // 双键再画一条平行线
        if (order === 2 || order === 1.5) {
          const dx = b.b.p2.x - b.a.p2.x, dy = b.b.p2.y - b.a.p2.y;
          const len = Math.hypot(dx,dy) || 1; const ox = -dy/len*4, oy = dx/len*4;
          ctx.beginPath();
          ctx.moveTo(b.a.p2.x+ox, b.a.p2.y+oy);
          ctx.lineTo(b.b.p2.x+ox, b.b.p2.y+oy);
          ctx.stroke();
          if (order === 1.5) ctx.setLineDash([3,3]);
        }
        if (order === 3) {
          const dx = b.b.p2.x - b.a.p2.x, dy = b.b.p2.y - b.a.p2.y;
          const len = Math.hypot(dx,dy) || 1; const ox = -dy/len*5, oy = dx/len*5;
          ctx.beginPath(); ctx.moveTo(b.a.p2.x+ox, b.a.p2.y+oy); ctx.lineTo(b.b.p2.x+ox, b.b.p2.y+oy); ctx.stroke();
          ctx.beginPath(); ctx.moveTo(b.a.p2.x-ox, b.a.p2.y-oy); ctx.lineTo(b.b.p2.x-ox, b.b.p2.y-oy); ctx.stroke();
        }
        ctx.setLineDash([]);
      });

      // 画原子（按z排序，远的先画）
      const sorted = [...pa].sort((a,b)=>a.p2.z-b.p2.z);
      sorted.forEach(a => {
        const r = (RADII[a.e]||18) * a.p2.s;
        // 光晕
        const grd = ctx.createRadialGradient(a.p2.x-r*0.3, a.p2.y-r*0.3, r*0.1, a.p2.x, a.p2.y, r);
        grd.addColorStop(0, '#fff');
        grd.addColorStop(0.3, COLORS[a.e]||'#888');
        grd.addColorStop(1, '#222');
        ctx.fillStyle = grd;
        ctx.beginPath(); ctx.arc(a.p2.x, a.p2.y, r, 0, Math.PI*2); ctx.fill();
        // 边框
        ctx.strokeStyle = 'rgba(0,0,0,0.5)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        // 元素符号
        ctx.fillStyle = (a.e === 'H' || a.e === 'Cl') ? '#222' : '#fff';
        ctx.font = `bold ${Math.max(11, r*0.7)}px sans-serif`;
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText(a.e, a.p2.x, a.p2.y);
      });

      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);

    return { destroy(){ stopped = true; } };
  }

  // ============================================================
  //  入口分发
  // ============================================================
  const REGISTRY = {
    // 物理
    sine_wave:         sineWave,
    wave_propagation:  wavePropagation,
    pendulum:          pendulum,
    lorentz_force:     lorentzForce,
    emf_induction:     emfInduction,
    gas_pv:            gasPV,
    lc_circuit:        lcCircuit,
    wave_interference: waveInterference,
    // 化学
    reaction_progress: reactionProgress,
    equilibrium:       equilibrium,
    reaction_anim:     reactionAnim,
    titration:         titration,
    electrolysis:      electrolysis,
    molecule_3d:       molecule3d,
    // 地理
    earth_rotation:    earthRotation,
    pressure_belt:     pressureBelt,
    sun_path:          sunPath,
    time_zone:         timeZone,
    ocean_current:     oceanCurrent,
    monsoon:           monsoon,
    // 数学
    function_graph:    functionGraph,
  };

  const IE = {
    render(host, config) {
      if (!host || !config) return null;
      const fn = REGISTRY[config.type];
      if (!fn) {
        host.innerHTML = `<div class="xx-empty">⚠ 未知交互类型: ${config.type}</div>`;
        return null;
      }
      const wrap = el('div', { class:'iv-stage' });
      host.appendChild(wrap);
      try {
        const instance = fn(wrap, config.params || {});
        return instance;
      } catch (e) {
        console.error('[IE] render error', e);
        host.innerHTML = `<div class="xx-empty">交互渲染失败: ${e.message}</div>`;
        return null;
      }
    },
    has(type) { return !!REGISTRY[type]; },
    types: Object.keys(REGISTRY),
  };

  global.IE = IE;

})(typeof window !== 'undefined' ? window : this);
