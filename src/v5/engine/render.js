// v5 render module — lazy renderer with canvas fallback
(function(){
  if (typeof window === 'undefined') return;
  window.GameV5 = window.GameV5 || {};
  GameV5.render = GameV5.render || {};
  GameV5.render.ready = GameV5.render.ready || function(){ return true; };
})();
