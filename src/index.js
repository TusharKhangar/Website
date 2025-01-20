const navToggle = document.querySelector('.nav__toggle');
const navbar = document.querySelector('.navbar');
const menuOverlay = document.querySelector('.menu-overlay');
const burgerIcon = document.querySelector('.nav__burger');
const closeIcon = document.querySelector('.nav__close');
const sideBar = document.querySelector('.sidebar');

burgerIcon.addEventListener('click', () => {
    burgerIcon.classList.toggle('active');
  
    if (sideBar.classList.contains('active')) {
      burgerIcon.style.display = 'none';
      closeIcon.style.display = 'block';
    } else {
      burgerIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    }
  });
