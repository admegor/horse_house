let menuBtn = document.querySelector('.header__menu-button');
let menuNav = document.querySelector('.header__nav-wrapper');
let menuList = document.querySelector('.header__nav');
let menuBurger = document.querySelector('.header__menu-burger');
let bodySite = document.body;
let header = document.querySelector('.header');

const lockPadding = document.querySelectorAll(".lock-padding");
const lockPaddingValue = window.innerWidth - document.querySelector('.header').offsetWidth + 'px';



menuBtn.onclick = function() {
    menuNav.classList.toggle('open');
    menuBurger.classList.toggle('active');
    menuList.classList.toggle('active');
    bodySite.classList.toggle('lock');
    bodySite.style.paddingRight = lockPaddingValue;
    header.style.paddingRight = lockPaddingValue;


    if(!bodySite.classList.contains("lock")) {
      
		bodySite.style.paddingRight = '0px';
		header.style.paddingRight = '0px';
      
	}
};


