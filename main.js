// Mobile Menu Logic
const navToggle = document.querySelector('.header__toggle');
const nav = document.querySelector('.header__nav');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        nav.classList.toggle('header__nav--visible');
    });
}
// Nav Scroll Behavior
const header = document.querySelector('.header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Si el scroll actual es mayor al anterior Y estamos a más de 50px del tope
    if (scrollTop > lastScrollTop && scrollTop > 50) {
        // Bajando: agregamos la clase para ocultar
        header.classList.add('navbar--hidden');
    } else {
        // Subiendo o en el tope: quitamos la clase para mostrar
        header.classList.remove('navbar--hidden');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});