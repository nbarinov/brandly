var mainNav = document.querySelector('.main-nav'),
    navToggle = document.querySelector('.main-nav__toggle'),
    header = document.querySelector('.page-header');

navToggle.addEventListener('click', function() {
  if(mainNav.classList.contains('main-nav__closed')) {
    mainNav.classList.remove('main-nav__closed');
    mainNav.classList.add('main-nav__opened');
    header.classList.add('page-header--blur');
    document.body.style.overflow = 'hidden';
    document.ontouchmove = function(e) { e.preventDefault(); }
    stopHeroeSlider();
  } else {
    mainNav.classList.remove('main-nav__opened');
    mainNav.classList.add('main-nav__closed');
    header.classList.remove('page-header--blur');
    document.body.style.overflow = 'auto';
    document.ontouchmove = function(e){ return true; }
    startHeroeSlider();
  }
});
