let menuBtn = document.querySelector('.header__menu-button');
let menuNav = document.querySelector('.header__nav-wrapper');
let menuList = document.querySelector('.header__nav');
let menuBurger = document.querySelector('.header__menu-burger');
let bodySite = document.body;


menuBtn.onclick = function() {
    menuNav.classList.toggle('header__nav-wrapper--show');
    menuBurger.classList.toggle('active');
    menuList.classList.toggle('active');
    bodySite.classList.toggle('lock');
    const lockPaddingValue = window.innerWidth - document.querySelector('.header').offsetWidth + 'px';
    
    bodySite.style.paddingRight = lockPaddingValue;
};