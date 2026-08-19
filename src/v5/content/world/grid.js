// v5 30x20 world grid derived from continent regions
(function(g){
  var root=(g.GameV5=g.GameV5||{}), world=(root.world=root.world||{}), continents=world.continents||[];
  var W=30,H=20, terrainCycle={
    'xiuxian-mainland':['plains','city','plains','shrine'],
    'scholar-sects':['forest','plains','city','shrine'],
    'mijing':['mountain','cave','forest','lake'],
    'lingshan':['mountain','shrine','forest','plains'],
    'daoheng':['city','plains','shrine','forest'],
    'fangshi':['city','plains','lake','market'],
    'mingbu':['shrine','city','plains','forest']
  };
  var fallback='plains';
  var rows=[],flat=[], byId={}; continents.forEach(function(c){byId[c.id]=c;});
  for(var y=0;y<H;y++){
    var row=[];
    for(var x=0;x<W;x++){
      row.push({gx:x,gy:y,continent:'xiuxian-mainland',terrainType:fallback});
    }
    rows.push(row);
  }
  continents.forEach(function(c){
    var cycle=terrainCycle[c.id]||['plains'];
    for(var dy=0;dy<c.tileSpan.h;dy++){
      for(var dx=0;dx<c.tileSpan.w;dx++){
        var gx=c.tileOrigin.gx+dx, gy=c.tileOrigin.gy+dy;
        if(!rows[gy]||!rows[gy][gx]) continue;
        rows[gy][gx]={gx:gx,gy:gy,continent:c.id,terrainType:cycle[(dx+dy)%cycle.length]||fallback};
      }
    }
  });
  for(var yy=0;yy<H;yy++) for(var xx=0;xx<W;xx++) flat.push(rows[yy][xx]);
  world.grid=rows; world.gridFlat=flat; world.gridSize={w:W,h:H}; world.continentById=byId;
})(typeof window!=='undefined'?window:globalThis);
