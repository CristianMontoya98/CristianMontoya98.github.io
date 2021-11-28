'use strict'
let btnMenu = document.querySelector('.btn-menu');
let icono = document.querySelector('.btn-menu i');
let menu = document.querySelector('.menu__contenedorLista');
let activador = true;

let inicio = document.querySelector("#ini");
let personajes = document.querySelector("#perso");
let naves = document.querySelector("#nves");
let historia = document.querySelector("#histo");
let bandaSonora = document.querySelector("#bands");

let aux = true;
/* Menu de navegación, animación */

btnMenu.addEventListener('click', () => {
    
    icono.classList.toggle('fa-times');
    aux = false;
    if (activador) {
        menu.style.left = "0";
        menu.style.transition = "0.5s";
        activador = false; 
        
        
    } else {

        menu.style.left = "-100%";
        menu.style.transition = "0.5s";
        activador = true;
        
    }
    
});



/* Ocultar el menú desplegable al dar click en una opción del menú */
function ocultar() {
    if (!aux) {
        menu.style.left = "-100%";
        menu.style.transition = "0.5s";
        icono.classList.toggle('fa-times');
        aux = true;
        activador = true;
    }
}

inicio.addEventListener('click', () => {
   
    ocultar();
});

personajes.addEventListener('click', () => {
    ocultar();
});

naves.addEventListener('click', () => {
    ocultar();
});

historia.addEventListener('click', () => {
    ocultar();
});
bandaSonora.addEventListener('click', () => {
    ocultar();
}); 


/* Cambio de clase activo */
let enlaces = document.querySelectorAll('.menu__contenedorListaElementos li a');
enlaces.forEach((element) => {

    element.addEventListener('click', (evento) => {

        enlaces.forEach((link) => {
            link.classList.remove('activo');
        });
        evento.target.classList.add('activo');

    });
});


/* Efecto esconder nav */
let prevScrollPos = window.pageYOffset;
let containerMenu = document.querySelector('.menu');

window.onscroll = () => {
    let currentScrollPos = window.pageYOffset;

    /* Mostrar y ocultar menu */
    if (prevScrollPos > currentScrollPos) {
        containerMenu.style.top = "0";
        containerMenu.style.transition = "0.5s";
    } else {
        containerMenu.style.top = "-147px";
        containerMenu.style.transition = "0.5s";
    }

    prevScrollPos = currentScrollPos;

    /* Mostrar y ocultar scroll Estilos */
    let arriba = window.pageYOffset;
    if (arriba <= 600) {
        containerMenu.style.borderBottom = "none";
        
    } else {
        containerMenu.style.borderBottom = "solid 5px #0A76A5";
        
        
    }
}

$(document).ready(function () {
    $('nav a').click(function (e) {
        e.preventDefault();		//evitar el eventos del enlace normal
        var strAncla = $(this).attr('href'); //id del ancla
        $('body,html').stop(true, true).animate({
            scrollTop: $(strAncla).offset().top
        }, 800);

    });
   
});