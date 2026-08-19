// v5 save module — additive v2→v3 migration with rollback backup
(function(){
  if (typeof window === 'undefined') return;
  window.GameV5 = window.GameV5 || {};
  GameV5.save = GameV5.save || {};
  const KEY_V3='wendao_save_v3', KEY_V2='wendao_save_v2';
  GameV5.save.readV2=function(){ try{return JSON.parse(localStorage.getItem(KEY_V2)||'null');}catch(e){return null;} };
  GameV5.save.writeV3=function(state){ try{localStorage.setItem(KEY_V3,JSON.stringify(state));return true;}catch(e){console.error('[GameV5.save.writeV3] quota?',e);return false;} };
  GameV5.save.migrateV2toV3=function(v2){ if(!v2)return null; const ts=Date.now(), backupKey='wendao_save_v3_migration_'+ts; try{localStorage.setItem(backupKey,JSON.stringify(v2));}catch(e){console.warn('[GameV5.save] backup failed',e);} return {schemaVersion:3,char:v2.char||{realmId:0,cultivation:0,spiritStones:0},knowledge:{chinese:{},math:{},english:{},physics:{},chemistry:{},biology:{}},arcade:{},uiPrefs:{fontSize:'medium',theme:'dark',motion:false,sound:true,locale:'zh-CN'},inventory:[],equipment:{},titles:[],portraits:[],_migration:{fromSchema:2,ts:ts,backupKey:backupKey,source:KEY_V2}}; };
  GameV5.save.ensureV3=function(){ const raw=localStorage.getItem(KEY_V3); if(raw){try{return JSON.parse(raw);}catch(e){}} const v2=GameV5.save.readV2()||{schemaVersion:2,char:{realmId:0}}; const v3=GameV5.save.migrateV2toV3(v2); GameV5.save.writeV3(v3); return v3; };
  GameV5.save.KEY_V3=KEY_V3; GameV5.save.KEY_V2=KEY_V2;
})();
