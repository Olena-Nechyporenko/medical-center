const btnBurger = document.querySelector('.js-burger-menu');
const menu = document.querySelector('.header-mobile-menu-back');
const closeBtn = document.querySelector('.js-btn-close');

btnBurger.addEventListener('click', onClick);
closeBtn.addEventListener('click', onClose);

function onClick() {
  menu.classList.remove('hidden');
}

function onClose() {
  menu.classList.add('hidden');
}
