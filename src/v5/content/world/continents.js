// v5 world continents for the 7-layer gameplay map
(function(g){
  if(typeof window==='undefined' && typeof globalThis==='undefined') return;
  var root=(g.GameV5=g.GameV5||{});
  var world=(root.world=root.world||{});
  world.continents=[
    {id:'xiuxian-mainland',name:'修仙大陆',nameEn:'Cultivation Mainland',color:'#4dd0e1',tileOrigin:{gx:2,gy:3},tileSpan:{w:8,h:5},lore:'万法汇流的中枢大陆，诸路修士从此启程。',defaultRealmReq:0,availableArcs:['问道路','初入山门','灵气启蒙','百业初试']},
    {id:'scholar-sects',name:'学派宗门',nameEn:'Scholastic Sects',color:'#81c784',tileOrigin:{gx:14,gy:2},tileSpan:{w:7,h:5},lore:'六艺分流、百家争鸣的宗门联盟。',defaultRealmReq:2,availableArcs:['外门试炼','宗门论道','掌教课业','藏经问答']},
    {id:'mijing',name:'秘境',nameEn:'Mystic Realms',color:'#ffb74d',tileOrigin:{gx:22,gy:4},tileSpan:{w:6,h:5},lore:'危机与奇珍并生的多层副本群。',defaultRealmReq:4,availableArcs:['迷雾洞天','异兽巡猎','奇门残卷','限时远征']},
    {id:'lingshan',name:'灵山',nameEn:'Spirit Peaks',color:'#ba68c8',tileOrigin:{gx:7,gy:10},tileSpan:{w:7,h:5},lore:'内观修行、攀层悟道的高峰群。',defaultRealmReq:6,availableArcs:['静坐凝神','飞升宝塔','经脉冲关','道心砺炼']},
    {id:'daoheng',name:'道衡堂',nameEn:'Hall of Balance',color:'#ef5350',tileOrigin:{gx:16,gy:10},tileSpan:{w:6,h:4},lore:'社交切磋与名望排行的中心会场。',defaultRealmReq:8,availableArcs:['同门会武','协作讨伐','道衡榜','借宠互助']},
    {id:'fangshi',name:'坊市',nameEn:'Market Ward',color:'#ffd54f',tileOrigin:{gx:23,gy:11},tileSpan:{w:5,h:4},lore:'丹方、灵材与奇货云集的贸易城。',defaultRealmReq:10,availableArcs:['灵材竞拍','丹方换购','行脚商旅','奇珍限购']},
    {id:'mingbu',name:'命簿阁',nameEn:'Ledger Pavilion',color:'#90a4ae',tileOrigin:{gx:11,gy:15},tileSpan:{w:8,h:3},lore:'记述修行轨迹与知识图谱进度的总帐。',defaultRealmReq:12,availableArcs:['命簿总览','错题回溯','周目标','里程碑勋章']}
  ];
})(typeof window!=='undefined'?window:globalThis);
