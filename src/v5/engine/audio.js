// v5 audio module — WebAudio noop boundary
(function(){
  if (typeof window === 'undefined') return;
  window.GameV5 = window.GameV5 || {};
  GameV5.audio = GameV5.audio || {};
  GameV5.audio.ready = GameV5.audio.ready || function(){ return true; };
})();
