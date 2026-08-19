/** @file Isometric grid helpers with no DOM dependency. */
(function(g){
  var root=(g.GameV5=g.GameV5||{});
  /** @namespace */
  var IsoTile=root.IsoTile=root.IsoTile||{};
  /** Convert grid coordinates to a 2:1 diamond screen point. */
  IsoTile.gridToScreen=function(gx,gy,tileW,tileH){tileW=tileW||64;tileH=tileH||32;return{x:(gx-gy)*tileW/2,y:(gx+gy)*tileH/2};};
  /** Convert a screen point back to grid coordinates with rounding. */
  IsoTile.screenToGrid=function(sx,sy,tileW,tileH){tileW=tileW||64;tileH=tileH||32;return{gx:Math.round(sx/tileW+sy/tileH),gy:Math.round(sy/tileH-sx/tileW)};};
  /** Return painter depth for a tile. */
  IsoTile.depth=function(gx,gy){return (gx|0)+(gy|0);};
})(typeof window!=='undefined'?window:globalThis);
