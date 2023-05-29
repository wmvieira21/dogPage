window.addEventListener("DOMContentLoaded", () => {

    const btnMenu = document.querySelector(".navbar-nav__buttons--menu");
    const btnClose = document.querySelector(".navbar-nav__buttons--close");
    const navButtons = document.querySelector(".navbar-nav__buttons");
    const section = document.querySelector(".section-article");
    const sideBar = document.querySelector(".navbar-nav__menu");
    const sideBarItens = document.querySelector(".navbar-nav__menu--itens");

    sideBar.classList.remove('navbar-nav-rotate');

    btnMenu.addEventListener("click", () => {
        navButtons.classList.add('rotateButtons');
        section.classList.add('section-rotate');
        sideBar.classList.add('navbar-nav-rotate');
        sideBarItens.classList.add('itens-slide-effect');
    });

    btnClose.addEventListener("click", () => {
        navButtons.classList.remove('rotateButtons');
        section.classList.remove('section-rotate');
        sideBar.classList.remove('navbar-nav-rotate');
        sideBarItens.classList.remove('itens-slide-effect');
    });
});