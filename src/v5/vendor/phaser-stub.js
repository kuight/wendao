// Phaser 3 stub for v5 authoring; replace with real Phaser 3.70+ before release.
(function(g){
  if(!g||g.Phaser&&g.Phaser.__stub)return;
  function n(){}
  function ev(o){o._e={};o.on=function(t,f){(o._e[t]||(o._e[t]=[])).push(f);return o;};o.emit=function(t,d){(o._e[t]||[]).forEach(function(fn){try{fn(d);}catch(_){}});return o;};return o;}
  function Cam(){this.zoom=1;this.scrollX=0;this.scrollY=0;} Cam.prototype.centerOn=n; Cam.prototype.setZoom=function(z){this.zoom=z;return this;};
  function Loader(){ } ['image','audio','atlas','json','tilemapTiledJSON','script','start'].forEach(function(k){Loader.prototype[k]=n;});
  function GO(s,x,y){this.scene=s;this.x=x||0;this.y=y||0;this.depth=0;this.visible=true;} GO.prototype.setDepth=function(v){this.depth=v;return this;}; GO.prototype.setInteractive=function(){return this;}; GO.prototype.setScale=function(){return this;}; GO.prototype.setOrigin=function(){return this;}; GO.prototype.setScrollFactor=function(){return this;};
  function Sprite(s,x,y,k){GO.call(this,s,x,y);this.texture=k||'';} Sprite.prototype=Object.create(GO.prototype); Sprite.prototype.constructor=Sprite;
  function Container(s,x,y,c){GO.call(this,s,x,y);this.list=c||[];} Container.prototype=Object.create(GO.prototype); Container.prototype.constructor=Container; Container.prototype.add=function(o){this.list.push(o);return this;};
  function Scene(){ev(this);this.sys={events:this};this.load=new Loader(this);this.input={on:n,once:n,mouse:{},touch:{},keyboard:{on:n,once:n}};this.cameras={main:new Cam()};this.add={existing:n,sprite:(x,y,k)=>new Sprite(this,x,y,k),container:(x,y,c)=>new Container(this,x,y,c)};}
  function Game(cfg){this.config=cfg||{};this.events=ev({});var s=cfg&&cfg.scene;if(typeof s==='function')s=new s();if(s){this.scene=s;s.game=this;try{s.preload&&s.preload();s.create&&s.create();}catch(_){}}}
  Game.prototype.destroy=n;
  g.Phaser={
    __stub:true,
    AUTO:'AUTO',CANVAS:'CANVAS',WEBGL:'WEBGL',
    Game:Game,Scene:Scene,
    Input:{Keyboard:{},Mouse:{},Touch:{}},
    Loader:{LoaderPlugin:Loader},
    Cameras:{Scene2D:{Camera:Cam}},
    GameObjects:{Sprite:Sprite,Container:Container},
    Math:{Clamp:function(v,a,b){return Math.max(a,Math.min(b,v));}},
    Utils:{Objects:{GetValue:function(o,k,d){return o&&k in o?o[k]:d;}}}
  };
})(typeof window!=='undefined'?window:globalThis);
