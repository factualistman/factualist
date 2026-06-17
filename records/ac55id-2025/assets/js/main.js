
(function(){
  const $$ = s=>Array.from(document.querySelectorAll(s));
  const btn = document.getElementById('toggle-redact');
  if(btn){
    btn.addEventListener('click', ()=>{
      const on = btn.dataset.on==='1'?false:true;
      btn.dataset.on = on?'1':'0';
      $$('.redact').forEach(el=>{ el.style.color = on ? 'inherit' : '#000'; el.style.background = on ? 'transparent' : '#000'; });
      btn.textContent = on ? 'Hide redactions' : 'Show redactions';
    });
  }
  $$('.langswitch a').forEach(a=>{
    a.addEventListener('click', e=>{
      e.preventDefault();
      const lang = a.dataset.lang;
      $$('.i18n').forEach(el=>{ const v = el.dataset[lang]; if(v!==undefined) el.textContent = v; });
    });
  });
})();