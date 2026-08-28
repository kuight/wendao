/* xinmo v1 front-end (pure ASCII; UI text comes from i18n.json) */
(function(){
"use strict";
var I18N = {};

var SUBJ = ['physics','chemistry','geography','chinese','math','english'];
var QTYPE = ['choice','numeric','expression','openended'];
var ETYPE = ['concept','formula','calc','reading'];
var TOPICS = null;
var selSubj = null, selTopic = null;
var tab = 'entry';
var entryImg = {q: '', a: ''};  // uploaded web paths for question/answer images

function merge(a,b){for(var k in b){if(b[k]&&typeof b[k]==='object'&&!Array.isArray(b[k])){a[k]=a[k]||{};merge(a[k],b[k]);}else{a[k]=b[k];}}}
function t(key, def){var p=I18N,ks=key.split('.');for(var i=0;i<ks.length;i++){if(p==null)break;p=p[ks[i]];}return typeof p==='string'?p:(def||key);}
function el(tag,cls,html){var e=document.createElement(tag);if(cls)e.className=cls;if(html!==undefined)e.innerHTML=html;return e;}
function toast(m){var x=document.getElementById('toast');x.textContent=m;x.classList.add('show');clearTimeout(x._t);x._t=setTimeout(function(){x.classList.remove('show');},1600);}

// ---- lightbox ----
function showLightbox(src){var lb=document.getElementById('lightbox');document.getElementById('lightbox-img').src=src;lb.classList.add('show');}
(function(){var lb=document.getElementById('lightbox');if(lb){lb.onclick=function(){lb.classList.remove('show');document.getElementById('lightbox-img').src='';};}})();

// ---- image upload dropzone ----
function uploadImage(fileObj,kind,cb){
  var fd=new FormData();fd.append('file',fileObj);fd.append('kind',kind);fd.append('pid','tmp');
  fetch('/api/upload',{method:'POST',body:fd}).then(function(r){return r.json();}).then(function(d){
    if(d.ok){cb(d.path);}else{toast(t('entry.uploadFailed'));}
  }).catch(function(){toast(t('entry.uploadFailed'));});
}
function makeDropzone(kind,labelKey){
  var wrap=el('div');
  wrap.appendChild(el('label',null,t(labelKey)));
  var dz=el('div','dropzone',t('entry.pasteHint'));
  var file=el('input');file.type='file';file.accept='image/*';file.setAttribute('capture','environment');file.style.display='none';
  function render(){
    if(entryImg[kind]){
      dz.className='dropzone filled';dz.innerHTML='';
      var im=el('img');im.src=entryImg[kind];im.onclick=function(ev){ev.stopPropagation();showLightbox(entryImg[kind]);};
      dz.appendChild(im);
      var rm=el('button','dz-remove',t('entry.removeImage'));
      rm.onclick=function(ev){ev.stopPropagation();entryImg[kind]='';render();};
      dz.appendChild(rm);
    }else{dz.className='dropzone';dz.textContent=t('entry.pasteHint');}
  }
  function handleFile(f){if(!f)return;dz.textContent=t('entry.uploading');uploadImage(f,kind,function(path){entryImg[kind]=path;render();});}
  dz.onclick=function(){file.click();};
  file.onchange=function(){if(file.files&&file.files[0])handleFile(file.files[0]);file.value='';};
  dz.addEventListener('dragover',function(e){e.preventDefault();dz.classList.add('over');});
  dz.addEventListener('dragleave',function(){dz.classList.remove('over');});
  dz.addEventListener('drop',function(e){e.preventDefault();dz.classList.remove('over');var dt=e.dataTransfer;if(dt&&dt.files&&dt.files[0])handleFile(dt.files[0]);});
  dz.addEventListener('paste',function(e){var items=(e.clipboardData||{}).items||[];for(var i=0;i<items.length;i++){if(items[i].type.indexOf('image')===0){handleFile(items[i].getAsFile());e.preventDefault();return;}}});
  dz.tabIndex=0;  // allow focus so paste targets this zone
  wrap.appendChild(dz);wrap.appendChild(file);
  render();
  return wrap;
}

// ---- tabs ----
function renderTabs(){
  var tabs=[['entry','entry'],['today','today'],['stats','stats'],['trace','trace']];
  var box=document.getElementById('tabs');box.innerHTML='';
  tabs.forEach(function(pair){
    var b=el('button','tab'+(tab===pair[0]?' active':''),t('tabs.'+pair[1],pair[1]));
    b.onclick=function(){setTab(pair[0]);};
    box.appendChild(b);
  });
}
function setTab(n){tab=n;renderTabs();['entry','today','stats','trace'].forEach(function(x){document.getElementById('page-'+x).classList.toggle('active',x===n);});if(n==='entry')renderEntry();if(n==='today')renderToday();if(n==='stats')renderStats();if(n==='trace')renderTrace();}

function loadTopics(cb){if(TOPICS){cb();return;}fetch('/api/topics').then(function(r){return r.json();}).then(function(d){TOPICS=d;cb();}).catch(function(){toast('topics load failed');});}

// ---- entry ----
function renderEntry(){
  var p=document.getElementById('page-entry');p.innerHTML='';
  loadTopics(function(){
    p.appendChild(el('div','muted',t('entry.pickSubject')));
    var sg=el('div','subj-group');
    SUBJ.forEach(function(s){
      var b=el('button','subj-btn'+(selSubj===s?' active':''),t('subjects.'+s,s));
      b.onclick=function(){selSubj=s;selTopic=null;renderEntry();};
      sg.appendChild(b);
    });
    p.appendChild(sg);
    p.appendChild(el('div','muted',t('entry.pickTopic')));
    var chapBox=el('div');p.appendChild(chapBox);
    if(selSubj){
      var chs=(TOPICS[selSubj]&&TOPICS[selSubj].chapters)||[];
      chs.forEach(function(ch){
        var c=el('div','chapter');
        var head=el('div','chapter-head','<span>'+ch.name+'</span><span class="n">'+ch.topics.length+'</span>');
        var body=el('div','chapter-body');
        ch.topics.forEach(function(tp){
          var it=el('div','topic-item'+(selTopic===tp.id?' active':''),tp.label);
          it.onclick=function(){selTopic=tp.id;renderEntry();};
          body.appendChild(it);
        });
        head.onclick=function(){c.classList.toggle('open');};
        c.appendChild(head);c.appendChild(body);chapBox.appendChild(c);
      });
    } else {
      chapBox.appendChild(el('div','muted',t('entry.noSubject')));
    }
    buildEntryForm(p);
  });
}

function buildEntryForm(p){
  var form=el('div');
  form.appendChild(el('label',null,t('entry.noteLabel')));
  var note=el('textarea');note.placeholder=t('entry.notePlaceholder');form.appendChild(note);

  var g=el('div','grid2');
  var s1=el('div');
  s1.appendChild(el('label',null,t('entry.sourceLabel')));
  var src=el('input');src.type='text';src.placeholder=t('entry.sourcePlaceholder');s1.appendChild(src);
  g.appendChild(s1);
  var s2=el('div');
  s2.appendChild(el('label',null,t('entry.qtypeLabel')));
  var qt=el('select');
  QTYPE.forEach(function(q){var o=el('option',null,t('questionTypes.'+q,q));o.value=q;qt.appendChild(o);});
  s2.appendChild(qt);
  g.appendChild(s2);
  form.appendChild(g);

  form.appendChild(makeDropzone('q','entry.qImageLabel'));

  form.appendChild(el('label',null,t('entry.answerLabel')));
  var ans=el('input');ans.type='text';ans.placeholder=t('entry.answerPlaceholder');form.appendChild(ans);

  form.appendChild(makeDropzone('a','entry.aImageLabel'));

  form.appendChild(el('label',null,t('entry.errorLabel')));
  var et=el('select');
  ETYPE.forEach(function(e){var o=el('option',null,t('errorTypes.'+e,e));o.value=e;et.appendChild(o);});
  form.appendChild(et);

  var sub=el('button','primary',t('entry.submit'));
  sub.onclick=function(){
    if(!selSubj){toast(t('entry.noSubject'));return;}
    if(!selTopic){toast(t('entry.noTopic'));return;}
    if(!entryImg.q){toast(t('entry.needImage'));return;}
    var body={subject:selSubj,topic:selTopic,topic_label:(topicLabel(selSubj,selTopic)||''),question_type:qt.value,error_type:et.value,note:note.value,source:src.value,answer_text:ans.value,image_path:entryImg.q,answer_image_path:entryImg.a};
    fetch('/api/problem',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)})
      .then(function(r){return r.json();}).then(function(d){
        if(d.ok){toast(t('entry.added')+' #'+d.problem.id);note.value='';ans.value='';src.value='';selTopic=null;entryImg={q:'',a:''};renderEntry();}
      }).catch(function(){toast('save failed');});
  };
  form.appendChild(sub);
  p.appendChild(form);
}

function topicLabel(subj,topicId){
  var chs=(TOPICS[subj]&&TOPICS[subj].chapters)||[];
  for(var i=0;i<chs.length;i++){var ts=chs[i].topics;for(var j=0;j<ts.length;j++){if(ts[j].id===topicId)return ts[j].label;}}
  return '';
}

// ---- today ----
function renderToday(){
  var p=document.getElementById('page-today');p.innerHTML='';
  fetch('/api/today').then(function(r){return r.json();}).then(function(d){renderTodayData(p,d);}).catch(function(){p.innerHTML='load failed';});
}
function resLabel(r){return t('today.result'+ (r.charAt(0).toUpperCase()+r.slice(1)), r);}
function renderTodayData(p,d){
  var title=el('h1',null,t('today.title')+' '+d.queue.length+' '+t('today.unit'));
  p.appendChild(title);
  if(d.on_the_way>0){p.appendChild(el('div','banner',t('today.onTheWay').replace('%d',d.on_the_way)));}
  if(d.queue.length===0){p.appendChild(el('div','muted',t('today.empty')));return;}
  d.queue.forEach(function(item){
    p.appendChild(buildReviewCard(item));
  });
}
function imgThumb(path){var im=el('img','thumb');im.src=path;im.onclick=function(){showLightbox(path);};return im;}

// D3: answer-first, judge-then. Each card is a small state machine.
function buildReviewCard(item){
  var card=el('div','card'+(item.kind==='rebound'?' rebound':''));
  var startTs=Date.now();

  // --- header: source + topic (answer hidden) ---
  var h3=el('h3',null,'');
  h3.innerHTML=(item.source?t('today.source')+': '+item.source+' &middot; ':'')+item.topic_label;
  card.appendChild(h3);
  card.appendChild(el('div','meta',t('today.topic')+': '+item.topic_label));
  if(item.note){card.appendChild(el('div','note',item.note));}
  // question image only (answer/std hidden until judged)
  if(item.image_path){card.appendChild(imgThumb(item.image_path));}

  // --- phase container ---
  var phase=el('div');card.appendChild(phase);

  function elapsed(){return Math.round((Date.now()-startTs)/1000);}

  // apply final result to backend then reload list
  function commit(result,extraNote,my_answer,judged){
    var body={problem_id:item.id,result:result,seconds:elapsed(),my_answer:my_answer||'',judged:judged||'unknown'};
    if(extraNote)body.note=extraNote;
    fetch('/api/attempt',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)})
      .then(function(r){return r.json();}).then(function(){renderToday();}).catch(function(){toast('save failed');});
  }

  // phase 1: ask for answer
  function renderAsk(){
    phase.innerHTML='';
    phase.appendChild(el('label',null,t('today.yourAnswer')));
    var inp=el('input');inp.type='text';inp.placeholder=t('today.answerInputPlaceholder');phase.appendChild(inp);
    var acts=el('div','actions');
    var jb=el('button','primary',t('today.btnJudge'));
    jb.onclick=function(){doJudge(inp.value);};
    inp.onkeydown=function(e){if(e.key==='Enter'){doJudge(inp.value);}};
    acts.appendChild(jb);phase.appendChild(acts);
    setTimeout(function(){inp.focus();},0);
  }

  function doJudge(my){
    fetch('/api/judge',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({problem_id:item.id,my_answer:my})})
      .then(function(r){return r.json();}).then(function(v){renderVerdict(my,v);})
      .catch(function(){toast('judge failed');});
  }

  // phase 2: show verdict + std answer + answer image
  function renderVerdict(my,v){
    phase.innerHTML='';
    // std answer + answer image (revealed now)
    var reveal=el('div','reveal-box');
    var std=(v.answer_text&&v.answer_text.trim())?v.answer_text:t('today.noStdAnswer');
    reveal.appendChild(el('div','std-answer','<b>'+t('today.stdAnswer')+'</b>: '+escapeHtml(std)));
    if(v.answer_image_path){reveal.appendChild(imgThumb(v.answer_image_path));}
    if(v.hint==='unit_missing'){reveal.appendChild(el('div','muted',t('today.unitMissingHint')));}

    if(v.judged==='correct'){
      phase.appendChild(el('div','verdict ok',t('today.verdictCorrect')));
      phase.appendChild(reveal);
      // correct -> pick smooth(good) / stuck(hard)
      phase.appendChild(el('div','meta',t('today.afterCorrect')));
      var a1=el('div','actions');
      var g=el('button','good',t('today.btnGood'));g.onclick=function(){commit('good','',my,'correct');};
      var h=el('button','hard',t('today.btnHard'));h.onclick=function(){commit('hard','',my,'correct');};
      a1.appendChild(g);a1.appendChild(h);phase.appendChild(a1);
    }else if(v.judged==='wrong'){
      phase.appendChild(el('div','verdict bad',t('today.verdictWrong')));
      phase.appendChild(el('div','meta',t('today.afterWrongTitle')));
      phase.appendChild(reveal);
      // optional "where wrong" note, then confirm -> again
      phase.appendChild(el('label',null,t('today.wrongNoteLabel')));
      var wn=el('input');wn.type='text';wn.placeholder=t('today.wrongNotePlaceholder');phase.appendChild(wn);
      var a2=el('div','actions');
      var cb=el('button','again',t('today.btnConfirmWrong'));cb.onclick=function(){commit('again',wn.value,my,'wrong');};
      a2.appendChild(cb);phase.appendChild(a2);
    }else{
      // unknown -> self-assess
      var reason=v.reason==='llm_unavailable'?t('today.llmUnavailable'):t('today.verdictUnknown');
      phase.appendChild(el('div','verdict unk',reason));
      phase.appendChild(reveal);
      var a3=el('div','actions');
      var sc=el('button','good',t('today.selfCorrect'));sc.onclick=function(){renderSelfCorrect(my);};
      var sw=el('button','again',t('today.selfWrong'));sw.onclick=function(){renderSelfWrong(my);};
      a3.appendChild(sc);a3.appendChild(sw);phase.appendChild(a3);
    }
  }

  // unknown -> self said correct -> still pick smooth/stuck
  function renderSelfCorrect(my){
    phase.innerHTML='';
    phase.appendChild(el('div','verdict ok',t('today.verdictCorrect')));
    phase.appendChild(el('div','meta',t('today.afterCorrect')));
    var a=el('div','actions');
    var g=el('button','good',t('today.btnGood'));g.onclick=function(){commit('good','',my,'correct');};
    var h=el('button','hard',t('today.btnHard'));h.onclick=function(){commit('hard','',my,'correct');};
    a.appendChild(g);a.appendChild(h);phase.appendChild(a);
  }
  function renderSelfWrong(my){
    phase.innerHTML='';
    phase.appendChild(el('div','verdict bad',t('today.verdictWrong')));
    phase.appendChild(el('label',null,t('today.wrongNoteLabel')));
    var wn=el('input');wn.type='text';wn.placeholder=t('today.wrongNotePlaceholder');phase.appendChild(wn);
    var a=el('div','actions');
    var cb=el('button','again',t('today.btnConfirmWrong'));cb.onclick=function(){commit('again',wn.value,my,'wrong');};
    a.appendChild(cb);phase.appendChild(a);
  }

  renderAsk();
  return card;
}
function escapeHtml(s){return (''+s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}

// ---- stats (D6: realm number + error distribution + 14-day bar chart) ----
function renderStats(){
  var p=document.getElementById('page-stats');p.innerHTML='';
  fetch('/api/stats').then(function(r){return r.json();}).then(function(d){renderStatsData(p,d);}).catch(function(){p.innerHTML=el('div','muted',t('stats.loadFailed')).outerHTML;});
}
function realmOf(refined){
  if(refined>=151)return 3;if(refined>=61)return 2;if(refined>=21)return 1;return 0;
}
function renderStatsData(p,d){
  var realm=realmOf(d.refined||0);
  var top=el('div','stat-realm');
  top.appendChild(el('div','stat-realm-name',t('stats.realm')+' : '+t('stats.realmLabels.'+realm)));
  var nums=el('div','stat-grid');
  [['total',d.total],['refined',d.refined],['active',d.active]].forEach(function(kv){
    var c=el('div','stat-card');c.appendChild(el('div','lbl',t('stats.'+kv[0])));c.appendChild(el('div','val',String(kv[1])));nums.appendChild(c);
  });
  top.appendChild(nums);
  p.appendChild(top);

  var s1=el('div','stats-section');
  s1.appendChild(el('h2',null,t('stats.errorTitle')));
  var eg=el('div','err-grid');
  ETYPE.forEach(function(e){
    var n=(d.by_error&&d.by_error[e])||0;
    var row=el('div','err-row');
    row.appendChild(el('span','err-name',t('errorTypes.'+e)));
    row.appendChild(el('span','err-val',String(n)));
    eg.appendChild(row);
  });
  s1.appendChild(eg);
  p.appendChild(s1);

  var s2=el('div','stats-section');
  s2.appendChild(el('h2',null,t('stats.dailyTitle')));
  var cv=el('canvas');cv.width=700;cv.height=230;cv.className='daily-chart';
  s2.appendChild(cv);
  p.appendChild(s2);
  drawDailyChart(cv,d.daily||[]);
}
function drawDailyChart(cv,daily){
  var ctx=cv.getContext('2d');
  var W=cv.width,H=cv.height;
  ctx.clearRect(0,0,W,H);
  var padL=30,padR=10,padT=14,padB=40;
  var cw=W-padL-padR,chh=H-padT-padB;
  var maxv=1;
  daily.forEach(function(x){if(x.added>maxv)maxv=x.added;if(x.redone>maxv)maxv=x.redone;});
  var n=daily.length;
  if(!n)return;
  var gap=2,bw=(cw/n-gap)/2;
  for(var i=0;i<n;i++){
    var x0=padL+i*(cw/n)+gap/2;
    var a=daily[i];
    var ah=(a.added/maxv)*chh;
    ctx.fillStyle='#1d5fd6';
    ctx.fillRect(x0,padT+chh-ah,bw,ah);
    var rh=(a.redone/maxv)*chh;
    ctx.fillStyle='#d99a2b';
    ctx.fillRect(x0+bw,padT+chh-rh,bw,rh);
  }
  ctx.fillStyle='#667';ctx.font='10px sans-serif';ctx.textAlign='center';
  for(var i=0;i<n;i++){
    ctx.fillText((daily[i].date||'').slice(5),padL+i*(cw/n)+cw/n/2,H-padB+10);
  }
  ctx.textAlign='left';
  ctx.fillStyle='#1d5fd6';ctx.fillText(t('stats.legendAdded'),padL,H-18);
  ctx.fillStyle='#d99a2b';ctx.fillText(t('stats.legendRedone'),padL+46,H-18);
}

// ---- trace (D5): today list + knowledge tree + heatmap ----
function renderTrace(){
  var p=document.getElementById('page-trace');p.innerHTML='';
  fetch('/api/trace').then(function(r){return r.json();}).then(function(d){renderTraceData(p,d);}).catch(function(){p.innerHTML='load failed';});
}
function renderTraceData(p,d){
  // --- section 1: today list ---
  var s1=el('div','trace-section');
  s1.appendChild(el('h2',null,t('trace.todayTitle')));
  if(!d.today_list.length){s1.appendChild(el('div','muted',t('trace.todayEmpty')));}
  d.today_list.forEach(function(it){
    var row=el('div','tl-item');
    var badge=el('span','tl-badge '+(it.kind==='add'?'add':'redo'),it.kind==='add'?t('trace.actAdd'):t('trace.actRedo'));
    row.appendChild(badge);
    var txt=escapeHtml(it.topic_label)+' <span class="tl-sep">&middot;</span> '+escapeHtml(it.error_label||'');
    row.appendChild(el('span',null,txt));
    if(it.kind==='redo'&&it.result){
      var rl=el('span','tl-res '+it.result,t('trace.result'+it.result.charAt(0).toUpperCase()+it.result.slice(1)));
      row.appendChild(rl);
    }
    s1.appendChild(row);
  });
  p.appendChild(s1);

  // --- section 2: knowledge tree ---
  var s2=el('div','trace-section');
  s2.appendChild(el('h2',null,t('trace.treeTitle')));
  var legend=el('div','kt-legend');
  [['unseen','legendUnseen'],['active','legendActive'],['reviewing','legendReviewing'],['refined','legendRefined']].forEach(function(pair){
    var sp=el('span');sp.innerHTML='<i class="kt-node '+pair[0]+'" style="width:12px;height:12px;padding:0"></i>'+t('trace.'+pair[1]);
    legend.appendChild(sp);
  });
  s2.appendChild(legend);
  SUBJ.forEach(function(subj){
    var chs=d.tree[subj]||[];
    var hasAny=chs.some(function(c){return c.topics&&c.topics.length;});
    if(!hasAny)return;
    var sum=d.subject_summary[subj]||{};
    var box=el('div','kt-subject');
    box.appendChild(el('div','kt-summary',t('trace.summaryTpl').replace('%s',sum.label||subj).replace('%d',sum.total||0).replace('%d',sum.seen||0).replace('%d',sum.refined||0)));
    chs.forEach(function(ch){
      if(!ch.topics||!ch.topics.length)return;
      var cbox=el('div','kt-chapter');
      cbox.appendChild(el('div','kt-chapter-name',ch.name));
      var nodes=el('div','kt-nodes');
      ch.topics.forEach(function(tp){
        var n=el('div','kt-node '+tp.state);
        n.innerHTML=escapeHtml(tp.label)+(tp.active>0?'<span class="an">'+t('trace.activeTpl').replace('%d',tp.active)+'</span>':'');
        nodes.appendChild(n);
      });
      cbox.appendChild(nodes);box.appendChild(cbox);
    });
    s2.appendChild(box);
  });
  p.appendChild(s2);

  // --- section 3: heatmap ---
  var s3=el('div','trace-section');
  s3.appendChild(el('h2',null,t('trace.heatTitle')));
  s3.appendChild(el('div','heat-streak',d.streak>0?t('trace.streakTpl').replace('%d',d.streak):t('trace.noStreak')));
  var grid=el('div','heat-grid');
  var maxc=1;d.heatmap.forEach(function(x){if(x.count>maxc)maxc=x.count;});
  d.heatmap.forEach(function(x){
    var lvl=x.count===0?0:(x.count>=Math.max(4,maxc*0.75)?4:(x.count>=Math.max(3,maxc*0.5)?3:(x.count>=Math.max(2,maxc*0.25)?2:1)));
    var c=el('div','heat-cell'+(lvl?' l'+lvl:''));c.title=x.date+': '+x.count;
    grid.appendChild(c);
  });
  s3.appendChild(grid);
  p.appendChild(s3);
}

// ---- global paste fallback: on entry tab, Ctrl+V without focused zone -> question image ----
document.addEventListener('paste',function(e){
  if(tab!=='entry')return;
  var tgt=e.target;
  if(tgt&&(tgt.tagName==='INPUT'||tgt.tagName==='TEXTAREA'))return;  // let text paste work in fields
  if(tgt&&tgt.className&&(''+tgt.className).indexOf('dropzone')>=0)return;  // zone handles its own
  var items=(e.clipboardData||{}).items||[];
  for(var i=0;i<items.length;i++){
    if(items[i].type.indexOf('image')===0){
      var f=items[i].getAsFile();e.preventDefault();
      toast(t('entry.uploading'));
      uploadImage(f,'q',function(path){entryImg.q=path;renderEntry();});
      return;
    }
  }
});

// ---- boot ----
fetch('/web/i18n.json').then(function(r){return r.json();}).then(function(d){merge(I18N,d);document.getElementById('title').textContent=I18N.appTitle||'xinmo';renderTabs();setTab('entry');}).catch(function(){renderTabs();setTab('entry');});
})();