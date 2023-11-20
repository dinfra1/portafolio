// activacion menu boton
const menuBtn = document.querySelector('#menu_btb');
const menuPrincipal = document.querySelector('.menu_principal');
const $lenguaje = document.querySelector('#lenguaje');
const body = document.querySelector('body');
const fond = document.querySelector('.fond');

fond.addEventListener('click', ()=>{
    body.classList.toggle('active')
})

const changueLenguage = () =>{
    let ind = $lenguaje.selectedIndex;
    let opc = $lenguaje.options[ind];
    let date = opc.value
    
       if(date === 'spanish'){
        if(location.href === 'es/index.html'){
            return;
        }
        location.href = 'es/index.html'
       }else if(date === 'english'){
        if(location.href === '/index.html'){
            return;
        }
        location.href = '/index.html'
       }
}
$lenguaje.addEventListener("change", changueLenguage)

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('bx-x');
    menuPrincipal.classList.toggle('active');
}

//Remover el menu resosive al presionar 

window.onscroll = () =>{
    menuBtn.classList.remove('bx-x')
    menuPrincipal.classList.remove('active')
}

//scrol de la pagina
ScrollReveal({
    reset: true,
    distance: '100px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home_bio h1, .about_resume', { origin: 'left'});
ScrollReveal().reveal('.home_bio p', { origin: 'right'});
ScrollReveal().reveal('.home_bio, .heading', { origin: 'top'});
ScrollReveal().reveal('.profile_pic, .about_item, .skills_item, .project_item, .formulario', { origin: 'buttom'});


//animacion de enunciado principal desarrollador
let ind = $lenguaje.selectedIndex;
    let opc = $lenguaje.options[ind];
    let date = opc.value
    if(date === 'spanish'){
        const text = new Typed ('.text_anim-developer',{
            strings: ['Edinson Ramirez','Desarrollador Full-Stack', 'Tec en Electronica'],
            backSpeed: 100,
            typeSpeed: 100,
            backDelay: 600,
            loop: true
            });
    }else{
        const text = new Typed ('.text_anim-developer',{
            strings: ['Edinson Ramirez','Developer Full-Stack', 'Tec in Electronics'],
            backSpeed: 100,
            typeSpeed: 100,
            backDelay: 600,
            loop: true
            });
    }