const fs=require('fs'), vm=require('vm'), path=require('path');
global.window=global;
vm.runInThisContext(fs.readFileSync(path.join(__dirname,'../content/world/continents.js'),'utf8'));
const arr=global.GameV5.world.continents;
if(!Array.isArray(arr) || arr.length!==7) throw new Error('continent count != 7');
const ids=new Set(arr.map(x=>x.id));
if(ids.size!==7) throw new Error('continent ids not unique');
for(let i=1;i<arr.length;i++) if(arr[i].defaultRealmReq < arr[i-1].defaultRealmReq) throw new Error('realm requirements not ascending');
console.log('continents ok', arr.length);
