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
