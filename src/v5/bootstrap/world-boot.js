// v5 opt-in world boot; invoke manually with GameV5.worldBoot()
(function(g){
  if(typeof window==='undefined') return;
  var root=(g.GameV5=g.GameV5||{});
  root.worldBoot=function(){
    if(root.world&&root.world.booted) return root.world.runtime;
    if(root.boot) try{ root.boot(); }catch(_){ }
    var canvas=document.getElementById('v5-world-canvas');
    if(!canvas){
      canvas=document.createElement('canvas');
      canvas.id='v5-world-canvas';
      canvas.style.cssText='position:fixed;inset:0;z-index:2;pointer-events:auto;background:radial-gradient(circle at top,#102847,#06101d 58%,#04090f);';
      document.body.appendChild(canvas);
    }
    var cam=new root.IsoCamera(canvas);
    if(root.sceneWorld&&root.sceneWorld.create) root.sceneWorld.create(cam);
    if(root.hud&&root.hud.worldCreate) root.hud.worldCreate();
    root.world=root.world||{}; root.world.booted=true; root.world.runtime=root.world.runtime||{camera:cam};
    return root.world.runtime;
  };
})(typeof window!=='undefined'?window:globalThis);
