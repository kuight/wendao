const fs=require('fs'), vm=require('vm'), path=require('path');
global.window=global;
vm.runInThisContext(fs.readFileSync(path.join(__dirname,'../engine/iso-tile.js'),'utf8'));
const IsoTile=global.GameV5.IsoTile;
let checked=0;
for(let gx=0; gx<5; gx++) for(let gy=0; gy<4; gy++){
  const s=IsoTile.gridToScreen(gx,gy,64,32);
  const g=IsoTile.screenToGrid(s.x,s.y,64,32);
  if(Math.abs(g.gx-gx)>0 || Math.abs(g.gy-gy)>0) throw new Error(`roundtrip fail @ ${gx},${gy}`);
  const s2=IsoTile.gridToScreen(g.gx,g.gy,64,32);
  if(Math.abs(s2.x-s.x)>1 || Math.abs(s2.y-s.y)>1) throw new Error(`screen drift @ ${gx},${gy}`);
  checked++;
}
console.log('iso-tile ok', checked);
