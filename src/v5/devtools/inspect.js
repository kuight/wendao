// v5 inspect module — development inspector
(function(){
  if (typeof window === 'undefined') return;
  window.GameV5 = window.GameV5 || {};
  GameV5.inspect = GameV5.inspect || {};
  GameV5.inspect.ready = GameV5.inspect.ready || function(){ return true; };
})();
