var mainNav = document.querySelector('.main-nav'),
    navToggle = document.querySelector('.main-nav__toggle');

navToggle.addEventListener('click', function() {
  if(mainNav.classList.contains('main-nav__closed')) {
    mainNav.classList.remove('main-nav__closed');
    mainNav.classList.add('main-nav__opened');
  } else {
    mainNav.classList.remove('main-nav__opened');
    mainNav.classList.add('main-nav__closed');
  }
});
