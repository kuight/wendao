// v5 world scene: binds isometric grid, camera, and HUD selection flow
(function(g){
  var root=(g.GameV5=g.GameV5||{}), world=(root.world=root.world||{});
  function realmId(){return (((root.state||{}).char||{}).realmId)||0;}
  function selectedCell(info){var flat=world.gridFlat||[];for(var i=0;i<flat.length;i++){var c=flat[i];if(c.gx===info.gx&&c.gy===info.gy)return c;}return null;}
  function makeTileset(state){
    var chosen=state.selectedContinent||null, active=state.activeContinent||null;
    return {
      getFill:function(cell){var c=world.continentById&&world.continentById[cell.continent], base=(c&&c.color)||'#446'; if(cell.continent===active) return lighten(base,0.12); if(cell.continent===chosen) return lighten(base,0.22); if(c && realmId()<c.defaultRealmReq) return shade(base,0.45); return base;},
      getStroke:function(cell){return cell.continent===chosen?'rgba(255,255,255,.7)':'rgba(255,255,255,.08)';},
      afterTile:function(ctx,cell,sp,cam){ if(cell.continent!==chosen) return; ctx.fillStyle='rgba(255,255,255,.9)'; ctx.beginPath(); ctx.arc(sp.x, sp.y-cam.tileH*cam.zoom*0.2, 3, 0, Math.PI*2); ctx.fill(); }
    };
  }
  function hex(v){return String(v||'#445');}
  function rgb(v){v=hex(v).replace('#',''); if(v.length===3)v=v.split('').map(function(x){return x+x;}).join(''); return {r:parseInt(v.slice(0,2),16),g:parseInt(v.slice(2,4),16),b:parseInt(v.slice(4,6),16)};}
  function mix(a,b,t){return Math.round(a+(b-a)*t);} function paint(c){return '#'+[c.r,c.g,c.b].map(function(n){return n.toString(16).padStart(2,'0');}).join('');}
  function lighten(v,t){var c=rgb(v); return paint({r:mix(c.r,255,t),g:mix(c.g,255,t),b:mix(c.b,255,t)});} function shade(v,t){var c=rgb(v); return paint({r:mix(c.r,0,t),g:mix(c.g,0,t),b:mix(c.b,0,t)});} 
  root.sceneWorld={
    create:function(camera){
      var state={selectedContinent:null,activeContinent:null};
      var currentRealm=realmId();
      (world.continents||[]).forEach(function(c){ if(currentRealm>=c.defaultRealmReq) state.activeContinent=c.id; });
      if(!state.activeContinent && world.continents && world.continents[0]) state.activeContinent=world.continents[0].id;
      state.selectedContinent=state.activeContinent;
      camera.drawTiles(world.gridFlat||[], makeTileset(state));
      camera.on('click', function(pos){var cell=selectedCell(pos); if(!cell) return; state.selectedContinent=cell.continent; camera.drawTiles(world.gridFlat||[], makeTileset(state)); if(root.hud&&root.hud.worldUpdate) root.hud.worldUpdate(world.continentById[cell.continent], currentRealm);});
      camera.on('hover', function(pos){root.world.hover=pos;});
      if(root.hud&&root.hud.worldUpdate) root.hud.worldUpdate(world.continentById[state.selectedContinent], currentRealm);
      root.world.runtime={camera:camera,state:state};
      return state;
    }
  };
})(typeof window!=='undefined'?window:globalThis);
