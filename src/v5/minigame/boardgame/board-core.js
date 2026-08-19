(function(){'use strict';
const $=s=>document.querySelector(s), saveKey=localStorage.getItem('wendao_save_v3')?'wendao_save_v3':'wendao_save_v2';
const save=(()=>{try{return JSON.parse(localStorage.getItem(saveKey)||'null')||{char:{realmId:0,spiritStones:0,hp:100},minigame:{}};}catch(_){return {char:{realmId:0,spiritStones:0,hp:100},minigame:{}};}})();
const rid=(save.char&&save.char.realmId)||0, banks=[...(window.CHEMISTRY_BANK||[]),...(window.MATH_BANK||[])].filter(q=>q&&q.type==='single'&&q.options&&q.options.length>1);
const seedState=((save.minigame||{}).boardgame)||{}; const s={pos:seedState.pos||0,turn:seedState.turn||1,hp:seedState.hp||120,stone:seedState.stone||((save.char&&save.char.spiritStones)||0),done:false};
const T='rest,quiz,monster,treasure,heal,monster,quiz,treasure,rest,monster,heal,quiz,treasure,monster,rest,quiz'.split(',');
function persist(){save.minigame=save.minigame||{}; save.minigame.boardgame={pos:s.pos,turn:s.turn,hp:s.hp,stone:s.stone,updatedAt:Date.now()}; try{localStorage.setItem(saveKey,JSON.stringify(save));}catch(_){}}
function log(m){const box=$('#log'); box.innerHTML='<div>· '+m+'</div>'+box.innerHTML;}
function stat(){ $('#realm').textContent='入口门槛已达：realmId '+rid; $('#hp').textContent='灵躯 '+Math.max(0,s.hp); $('#stone').textContent='灵石 '+Math.max(0,s.stone); $('#turn').textContent='回合 '+s.turn; }
function xy(i){const row=Math.floor(i/4), col=i%4; return {x:120+col*120+(row%2?56:0), y:70+row*92};}
function draw(){const b=$('#board'); b.innerHTML=''; T.forEach((t,i)=>{const p=xy(i), d=document.createElement('div'); d.className='tile '+t; d.style.left=p.x+'px'; d.style.top=p.y+'px'; d.innerHTML='<span>'+(t==='monster'?'妖':t==='treasure'?'宝':t==='heal'?'泉':t==='quiz'?'题':'途')+'</span>'; if(i===s.pos){const m=document.createElement('div'); m.className='pawn'; m.textContent='🧍'; d.appendChild(m);} b.appendChild(d);});}
function ask(after){const q=banks[(Math.random()*banks.length)|0], box=$('#quizBox'); if(!q){after(true);return;} box.className='show'; box.innerHTML='<strong>'+q.q+'</strong>'; q.options.forEach(op=>{const btn=document.createElement('button'); btn.textContent=op; btn.onclick=()=>{box.className=''; box.innerHTML=''; after(String(op).trim().startsWith(q.answer));}; box.appendChild(btn);});}
function eventAt(){const t=T[s.pos], zone=s.pos<5?'上古遗迹':s.pos<10?'灵山福地':'妖兽森林'; if(t==='monster'){ ask(ok=>{const hurt=ok?6:18; s.hp-=hurt; log(zone+'遭遇妖兽，'+(ok?'答对减伤':'答错受创')+' -'+hurt+' HP'); end();}); }
 else if(t==='treasure'){ const gain=80+((Math.random()*60)|0); s.stone+=gain; log(zone+'开得宝匣 +'+gain+' 灵石'); end(); }
 else if(t==='heal'){ const heal=22+((Math.random()*12)|0); s.hp=Math.min(180,s.hp+heal); log(zone+'饮灵泉 +' + heal + ' HP'); end(); }
 else if(t==='quiz'){ ask(ok=>{const gain=ok?140:30; s.stone+=gain; log(zone+'答题'+(ok?'成功':'勉强')+' +' + gain + ' 灵石'); end();}); }
 else { log(zone+'平安行进。'); end(); } }
function end(){ if(s.pos>=T.length-1||s.hp<=0){ s.done=true; log(s.hp<=0?'棋局败退。':'抵达终点，棋局完成。'); $('#rollBtn').disabled=true; } s.turn++; persist(); stat(); draw(); }
$('#rollBtn').onclick=()=>{ if(s.done) return; const step=1+((Math.random()*6)|0); s.pos=Math.min(T.length-1,s.pos+step); log('掷出 '+step+' 点，前进至第 '+(s.pos+1)+' 格'); stat(); draw(); eventAt(); };
$('#resetBtn').onclick=()=>{ s.pos=0; s.turn=1; s.hp=120; s.stone=(save.char&&save.char.spiritStones)||0; s.done=false; $('#rollBtn').disabled=false; persist(); stat(); draw(); log('已重开遗迹棋局。'); };
stat(); draw(); log('棋局已载入，可随时保存继续。'); persist();
})();
