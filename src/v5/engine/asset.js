// v5 asset module — asset loader boundary
(function(){
  if (typeof window === 'undefined') return;
  window.GameV5 = window.GameV5 || {};
  GameV5.asset = GameV5.asset || {};
  GameV5.asset.ready = GameV5.asset.ready || function(){ return true; };
})();
