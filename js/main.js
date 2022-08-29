const hamburger = document.querySelector('.hamburger');
const cerrar = document.querySelector('.close');
const header = document.querySelector('header');
const titulo = document.querySelector('.header--titulo');
console.log(hamburger);
// const nav2 = document.qu
const nav = document.querySelector('.header--nav');
console.log(nav);
const header_botones = document.querySelector('.header--botones');

// hamburger.addEventListener('click', e => {
//     e.preventDefault();


//     // console.log(head.classList())
//     // header.classList[0].
//     header.classList.remove('header');
//     header.classList.add('header-black')

//     titulo.style.display = "none";
//     // const headerblack = document.querySelector('.header-black');
//     // headerblack.style.display = "block"
//     // header.classList.add(headerblack)
//     nav.style.display = "flex"
//     let img = hamburger.children
//     // console.log(img);
//     // img.src.remove = 'images/icon-hamburger.svg'
//     hamburger.style.display = "none"

//     cerrar.style.display = "block"




// })
// cerrar.addEventListener('click', e => {
//     e.preventDefault();
//     cerrar.style.display = 'none';
//     header.classList.remove('header-black')
//     header.classList.add('header');
//     hamburger.style.display = "block"
//     nav.style.display = "none";
//     titulo.style.display = "block";
//     let ancho = document.documentElement.clientWidth;


// })
let tipo = (document.documentElement.clientHeight>750)?'mobile':'desktop';
let ancho = document.documentElement.clientWidth;
let body = document.querySelector('body');
async function obtenerImagen(imagenes,texto){
    try {
        for(let i=0;imagenes.length;i++){
            const response = await fetch(`../images/${texto}/${imagenes[i].alt}.jpg`)
            const resp = await response.blob()
            console.log(resp);
            imagenes[i].src = URL.createObjectURL(resp)
        }
    } catch (error) {
        console.log(error);   
    }
}

const determinarTamanio= ()=>{
    let imagenes = document.querySelectorAll('.imagenes');
    console.log(imagenes);
    ancho = document.documentElement.clientWidth;
    
    if ((ancho > 750) && (tipo!=='desktop')) {
       console.log(tipo);
       obtenerImagen(imagenes,'desktop')
       tipo='desktop'
    } else {
       if((ancho <= 750) && (tipo!=='mobile')){
           console.log(tipo);
           obtenerImagen(imagenes,'mobile')
           tipo='mobile'
       }
   }
}

 body.onresize = () => {
    determinarTamanio()
 }

document.addEventListener('DOMContentLoaded',()=>{
    determinarTamanio()
})

// document.addEventListener('DOMContentLoaded', () => {
//     let imagenes = document.querySelectorAll('.imagenes');
//     const nav = document.querySelector('.header--nav');
//     let ancho = document.documentElement.clientWidth;
//     if (ancho > 750) {
//         console.log('Nuevas Imagenes');

//         console.log(imagenes);
//         imagenes.forEach(e => {
//             // console.log(e.src);
//             e.src = e.src.replace('mobile', 'desktop')
//             nav.style.display = "block";
//         })
//     } else {
//         imagenes.forEach(e => {
//             // console.log(e.src);
//             e.src = e.src.replace('desktop', 'mobile')
//             nav.style.display = "none";
//         })
//     }
// })


