const btnList = document.querySelector('.header-theme-buttons-list');
const lightThemeBtn = document.querySelector('.light-theme-btn');
const darkThemeBtn = document.querySelector('.dark-theme-btn');

btnList.addEventListener('click', onClick);

function onClick(e) {
  const button = e.target.closest('button');
  if (!button) return;

  if (button.classList.contains('light-theme-btn')) {
    lightThemeBtn.classList.add('active');
    darkThemeBtn.classList.remove('active');
  } else if (button.classList.contains('dark-theme-btn')) {
    darkThemeBtn.classList.add('active');
    lightThemeBtn.classList.remove('active');
  }
}

// For mobile menu
const mobileBtnList = document.querySelector('.header-mob-theme-btn-list');
const lightMobThemeBtn = document.querySelector('.light-mob-theme-btn');
const darkMobThemeBtn = document.querySelector('.dark-mob-theme-btn');

mobileBtnList.addEventListener('click', onClickMob);

function onClickMob(e) {
  const button = e.target.closest('button');
  if (!button) return;

  if (button.classList.contains('light-mob-theme-btn')) {
    lightMobThemeBtn.classList.add('active');
    darkMobThemeBtn.classList.remove('active');
  } else if (button.classList.contains('dark-mob-theme-btn')) {
    darkMobThemeBtn.classList.add('active');
    lightMobThemeBtn.classList.remove('active');
  }
}
