const buttons=document.querySelectorAll('.filter');
const cards=document.querySelectorAll('.project-card[data-cat]');
buttons.forEach(b=>b.addEventListener('click',()=> {
    buttons.forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    const f=b.dataset.filter;
    cards.forEach(c=>c.style.display=(f==='all'||c.dataset.cat.includes(f))?'flex':'none')
}
));
