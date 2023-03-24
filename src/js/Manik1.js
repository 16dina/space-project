// // Author: Manik Setia
// const heroElem = document.querySelector('#hero');
// const lionElem = document.querySelector('#lion');
// const elephantElem = document.querySelector('#elephant');
//
// const scrollAmount = -700;
// window.addEventListener('scroll', (event) => {
//     const { top } = heroElem.getBoundingClientRect();
//     const heroInView = top - window.innerHeight < scrollAmount;
//     lionElem.style.opacity = +!heroInView;
//     elephantElem.style.opacity = +heroInView;
// });
const pos=document.documentElement;
pos.addEventListener('mousemove', e=>{
    pos.style.setProperty('--x', e.clientX+'px');
    pos.style.setProperty('--y', e.clientY+'px');
})
