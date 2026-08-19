// v5 debug module — development diagnostics
(function(){
  if (typeof window === 'undefined') return;
  window.GameV5 = window.GameV5 || {};
  GameV5.debug = GameV5.debug || {};
  GameV5.debug.ready = GameV5.debug.ready || function(){ return true; };
})();
