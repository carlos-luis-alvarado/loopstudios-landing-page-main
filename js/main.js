const hamburger = document.querySelector('.hamburger');
const cerrar = document.querySelector('.close');
const header = document.querySelector('header');
const titulo = document.querySelector('.header--titulo');
console.log(hamburger);
// const nav2 = document.qu
const nav = document.querySelector('.header--nav');
console.log(nav);
const header_botones = document.querySelector('.header--botones');

hamburger.addEventListener('click',e=>{
    e.preventDefault();
 
 
 
    // console.log(head.classList())
    // header.classList[0].
    header.classList.remove('header');
    header.classList.add('header-black')
 
    titulo.style.display="none";
    // const headerblack = document.querySelector('.header-black');
    // headerblack.style.display = "block"
    // header.classList.add(headerblack)
    nav.style.display="flex"
    let img = hamburger.children
    // console.log(img);
    // img.src.remove = 'images/icon-hamburger.svg'
    hamburger.style.display="none"
 
    cerrar.style.display="block"
 
})
cerrar.addEventListener('click',e=>{
    e.preventDefault();
    cerrar.style.display='none';
    header.classList.remove('header-black')
    header.classList.add('header');
    hamburger.style.display="block"
    nav.style.display="none";
    titulo.style.display="block";
})
