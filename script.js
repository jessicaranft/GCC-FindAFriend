let headerMobile = document.querySelector('.mobile-header');
let headerMobileMenu = document.querySelector('.mobile-menu');
let menuMobileBtn = document.querySelector('#mobile-menu-btn');
let menuBtnClose = document.querySelector('#menu-btn-close');
let menuDesktopBtnClose = document.querySelector('#desktop-menu-btn-close');

let headerDesktopMenu = document.querySelector('.desktop-menu');
let menuDesktopBtn = document.querySelector('#desktop-menu-btn');

menuMobileBtn.addEventListener('click', function() {
  headerMobile.classList.add('hide');
  headerMobileMenu.classList.remove('hide');
})

menuBtnClose.addEventListener('click', function() {
  headerMobile.classList.remove('hide');
  headerMobileMenu.classList.add('hide');
})

menuDesktopBtn.addEventListener('click', function() {
  headerDesktopMenu.classList.remove('hide');
})

menuDesktopBtnClose.addEventListener('click', function() {
  headerDesktopMenu.classList.add('hide');
})