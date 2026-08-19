// v5 boot module — loads canonical state without auto-routing v4
(function(){if(typeof window==='undefined')return;window.GameV5=window.GameV5||{};GameV5.boot=async function(){try{var v3=GameV5.save&&GameV5.save.ensureV3?GameV5.save.ensureV3():null;if(v3)GameV5.state=v3;}catch(e){console.error('[GameV5.boot]',e);}document.documentElement.dataset.v5='true';return true;};})();
