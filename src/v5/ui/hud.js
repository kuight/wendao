// v5 HUD overlay for the isometric world layer
(function(){
  if (typeof window === 'undefined') return;
  window.GameV5 = window.GameV5 || {};
  GameV5.hud = GameV5.hud || {};
  GameV5.hud.ready = GameV5.hud.ready || function(){ return true; };
  GameV5.hud.worldCreate = function(){
    var el = document.getElementById('v5-world-hud');
    if (el) return el;
    el = document.createElement('div');
    el.id = 'v5-world-hud';
    el.innerHTML = '<style>#v5-world-hud{position:fixed;top:14px;right:14px;z-index:16;width:min(320px,calc(100vw - 28px));background:rgba(7,12,24,.86);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.12);border-radius:16px;color:#eef6ff;padding:14px 16px;font:14px/1.45 system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;box-shadow:0 14px 40px rgba(0,0,0,.28)}#v5-world-hud .muted{color:#afc1d8;font-size:12px}#v5-world-hud .name{font-size:20px;font-weight:800;margin:2px 0 6px}#v5-world-hud .pill{display:inline-block;padding:4px 8px;border-radius:999px;background:rgba(255,255,255,.09);margin:0 6px 6px 0;font-size:12px}#v5-world-hud .lore{margin-top:8px;color:#dae6f5}</style><div class="muted">GameV5 · 2.5D World Layer</div><div class="name">未选择大陆</div><div class="meta"></div><div class="lore"></div>';
    document.body.appendChild(el);
    return el;
  };
  GameV5.hud.worldUpdate = function(continent, realmId){
    var el = GameV5.hud.worldCreate();
    var char = ((GameV5.state||{}).char||{});
    var name = el.querySelector('.name');
    var meta = el.querySelector('.meta');
    var lore = el.querySelector('.lore');
    if (!continent){ name.textContent = '未选择大陆'; meta.innerHTML=''; lore.textContent=''; return; }
    name.textContent = continent.name + ' · ' + continent.nameEn;
    meta.innerHTML = '<span class="pill">境界需求 ' + continent.defaultRealmReq + '</span><span class="pill">当前 realmId ' + (realmId||0) + '</span><span class="pill">修为 ' + (char.cultivation||0) + '</span>';
    lore.textContent = continent.lore + '｜主线：' + (continent.availableArcs||[]).join(' / ');
  };
  GameV5.hud.worldDestroy = function(){ var el = document.getElementById('v5-world-hud'); if (el) el.remove(); };
})();
