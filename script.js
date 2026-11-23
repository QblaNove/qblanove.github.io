document.documentElement.classList.add('js');
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
function closeMenu(){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Abrir menú');}
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
document.getElementById('copyright-year').textContent=new Date().getFullYear();
const observer='IntersectionObserver' in window?new IntersectionObserver((entries,obs)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');obs.unobserve(entry.target);}})},{threshold:0.08}):null;
document.querySelectorAll('.reveal').forEach(el=>{if(observer)observer.observe(el);else el.classList.add('is-visible');});
document.querySelectorAll('[data-optional-image]').forEach(img=>{const onReady=()=>{img.hidden=false;};img.addEventListener('load',onReady);img.addEventListener('error',()=>{img.hidden=true;});if(img.complete&&img.naturalWidth>0)onReady();});
