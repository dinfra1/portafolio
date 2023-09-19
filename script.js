// activacion menu boton
let menuBtn = document.querySelector('#menu_btb');
let menuPrincipal = document.querySelector('.menu_principal');

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
const text = new Typed ('.text_anim-developer',{
strings: ['Edinson Ramirez','Developer Full-Stack', 'Tec in Electronics'],
backSpeed: 100,
typeSpeed: 100,
backDelay: 600,
loop: true
});