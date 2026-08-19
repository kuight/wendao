// v5 state module — canonical character, knowledge, arcade, and preference state shape
(function(){
  if (typeof window === 'undefined') return;
  window.GameV5 = window.GameV5 || {};
  GameV5.state = GameV5.state || { schemaVersion:3, char:{realmId:0,cultivation:0,spiritStones:0,hp:100,mp:60}, knowledge:{chinese:{},math:{},english:{},physics:{},chemistry:{},biology:{}}, arcade:{boardgame:{floor:0,stars:0},rhythm:{bpm:0,score:0}}, uiPrefs:{fontSize:'medium',theme:'dark',motion:false,sound:true,locale:'zh-CN'}, inventory:[], equipment:{}, titles:[], portraits:[] };
  GameV5.state.ready = function(){ return true; };
})();
