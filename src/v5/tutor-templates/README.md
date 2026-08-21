# wendao v5 tutor templates
1. 将 templates-extended.json 与 loader-extended.js 放到 ai-tutor 目录。
2. 在 index.html 先加载 tutor-core.js，再加载 loader-extended.js。
3. 页面启动后调用：window.V5Tutor.loadExtendedTutorTemplates('templates-extended.json')。
4. 合并后 window.V5Tutor.TEMPLATES 会在原 180 基础上追加本批 180。
5. 本批字段含 detect_regexp / scaffold_steps / final_formula / xianxia_pivot，可直接给 tutor-core.js 做命中与引导。
