const hamburger = document.querySelector('.hamburger');
const cerrar = document.querySelector('.close');
const header = document.querySelector('header');
const titulo = document.querySelector('.header--titulo');
console.log(hamburger);
const nav = document.querySelector('.display-none');
console.log(nav);
const header_botones = document.querySelector('.header--botones');

 hamburger.addEventListener('click', e => {
     e.preventDefault();
     header.classList.remove('header');
     header.classList.add('header-black')
     titulo.style.display = "none";
     nav.style.display = "flex"
     let img = hamburger.children
     hamburger.style.display = "none"
     cerrar.style.display = "block"
})
 cerrar.addEventListener('click', e => {
     e.preventDefault();
     cerrar.style.display = 'none';
     header.classList.remove('header-black')
     header.classList.add('header');
     hamburger.style.display = "block"
     nav.style.display = "none";
     titulo.style.display = "block";
 })

let ancho = document.documentElement.clientWidth;
let tipo = (ancho >= 768) ? 'mobile' : 'desktop';
let body = document.querySelector('body');
async function obtenerImagen(imagenes, texto) {
    try {
        for (let i = 0; imagenes.length; i++) {
            const response = await fetch(`../images/${texto}/${imagenes[i].alt}.jpg`)
            const resp = await response.blob()
            imagenes[i].src = URL.createObjectURL(resp)
        }
    } catch (error) {
        console.log(error);
    }
}

const determinarTamanio = () => {
    let imagenes = document.querySelectorAll('.imagenes');
    ancho = document.documentElement.clientWidth;

    if ((ancho >= 768) && (tipo !== 'desktop')) {
        obtenerImagen(imagenes, 'desktop')
        tipo = 'desktop'
    } else {
        if ((ancho < 768) && (tipo !== 'mobile')) {
            obtenerImagen(imagenes, 'mobile')
            tipo = 'mobile'
        }
    }
}

body.onresize = () => {
    determinarTamanio()
}

document.addEventListener('DOMContentLoaded', () => {
    
    determinarTamanio()
})

