(function(){
  window.V5Tutor = window.V5Tutor || {};
  async function loadExtendedTutorTemplates(url){
    var defaultUrl = 'templates-extended.json';
    var target = url || defaultUrl;
    var res = await fetch(target, { cache:'no-store' });
    if (!res.ok) throw new Error('load templates-extended failed: ' + res.status);
    var extra = await res.json();
    var base = Array.isArray(window.V5Tutor.TEMPLATES) ? window.V5Tutor.TEMPLATES.slice() : [];
    var seen = new Set(base.map(function(x){ return x && x.id; }));
    extra.forEach(function(item){
      if (!item || !item.id || seen.has(item.id)) return;
      seen.add(item.id);
      base.push(item);
    });
    window.V5Tutor.TEMPLATES = base;
    window.V5Tutor.EXTENDED_TEMPLATES = extra;
    return { base_count: base.length, extended_count: extra.length, merged_count: base.length };
  }
  window.V5Tutor.loadExtendedTutorTemplates = loadExtendedTutorTemplates;
})();
