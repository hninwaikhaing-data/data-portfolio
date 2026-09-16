const menu=document.querySelector('.menu-btn');
const nav=document.querySelector('.navlinks');
if(menu&&nav) {
    menu.addEventListener('click',()=>nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))
}
