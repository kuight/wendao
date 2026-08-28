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

function merge(a,b){for(var k in b){if(b[k]&&typeof b[k]==='object'&&!Array.isArray(b[k])){a[k]=a[k]||{};merge(a[k],b[k]);}else{a[k]=b[k];}}}
function t(key, def){var p=I18N,ks=key.split('.');for(var i=0;i<ks.length;i++){if(p==null)break;p=p[ks[i]];}return typeof p==='string'?p:(def||key);}
function el(tag,cls,html){var e=document.createElement(tag);if(cls)e.className=cls;if(html!==undefined)e.innerHTML=html;return e;}
function toast(m){var x=document.getElementById('toast');x.textContent=m;x.classList.add('show');clearTimeout(x._t);x._t=setTimeout(function(){x.classList.remove('show');},1600);}

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

  form.appendChild(el('label',null,t('entry.answerLabel')));
  var ans=el('input');ans.type='text';ans.placeholder=t('entry.answerPlaceholder');form.appendChild(ans);

  form.appendChild(el('label',null,t('entry.errorLabel')));
  var et=el('select');
  ETYPE.forEach(function(e){var o=el('option',null,t('errorTypes.'+e,e));o.value=e;et.appendChild(o);});
  form.appendChild(et);

  var sub=el('button','primary',t('entry.submit'));
  sub.onclick=function(){
    if(!selSubj){toast(t('entry.noSubject'));return;}
    if(!selTopic){toast(t('entry.noTopic'));return;}
    var body={subject:selSubj,topic:selTopic,topic_label:(topicLabel(selSubj,selTopic)||''),question_type:qt.value,error_type:et.value,note:note.value,source:src.value,answer_text:ans.value};
    fetch('/api/problem',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)})
      .then(function(r){return r.json();}).then(function(d){
        if(d.ok){toast(t('entry.added')+' #'+d.problem.id);note.value='';ans.value='';src.value='';selTopic=null;renderEntry();}
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
    var card=el('div','card'+(item.kind==='rebound'?' rebound':''));
    if(item.image_path){card.appendChild(imgThumb(item.image_path));}
    var h3=el('h3',null,'');
    h3.innerHTML=(item.source?t('today.source')+': '+item.source+' · ':'')+item.topic_label;
    card.appendChild(h3);
    var meta=el('div','meta',t('today.topic')+': '+item.topic_label+(item.last_attempt?(' · '+t('today.lastResult')+': '+resLabel(item.last_attempt.result)):''));
    card.appendChild(meta);
    if(item.note){card.appendChild(el('div','note',item.note));}
    var acts=el('div','actions');
    var g=el('button','good',t('today.btnGood'));g.onclick=function(){submitAttempt(item.id,'good');};
    var h=el('button','hard',t('today.btnHard'));h.onclick=function(){submitAttempt(item.id,'hard');};
    var a=el('button','again',t('today.btnAgain'));a.onclick=function(){submitAttempt(item.id,'again');};
    acts.appendChild(g);acts.appendChild(h);acts.appendChild(a);
    card.appendChild(acts);
    p.appendChild(card);
  });
}
function imgThumb(path){var im=el('img','thumb');im.src=path;return im;}
function submitAttempt(pid,result){fetch('/api/attempt',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({problem_id:pid,result:result,seconds:0})}).then(function(r){return r.json();}).then(function(d){renderToday();}).catch(function(){});}

// ---- stats (D1 placeholder) ----
function renderStats(){var p=document.getElementById('page-stats');p.innerHTML=el('div','muted','stats D3').outerHTML;}
function renderTrace(){var p=document.getElementById('page-trace');p.innerHTML=el('div','muted','trace D5').outerHTML;}

// ---- boot ----
fetch('/web/i18n.json').then(function(r){return r.json();}).then(function(d){merge(I18N,d);document.getElementById('title').textContent=I18N.appTitle||'xinmo';renderTabs();setTab('entry');}).catch(function(){renderTabs();setTab('entry');});
})();