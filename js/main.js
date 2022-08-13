const iconMenu = document.querySelector('.icon-menu');
const menuDesktop = document.querySelector('.menu-desktop');
const iconClose = document.querySelector('.icon-close');


const mostartMenu = () => {
    menuDesktop.classList.replace('ocultar' , 'mostrar');
    iconMenu.classList.add('ocultar');
}

iconMenu.addEventListener('click', mostartMenu);

const ocultarMenu = () => {
    console.log('ocultar')
    menuDesktop.classList.replace('mostrar' , 'ocultar');
    iconMenu.classList.add('mostrar');
}

iconClose.addEventListener('click' , ocultarMenu);
