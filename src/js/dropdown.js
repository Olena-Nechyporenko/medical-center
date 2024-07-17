const dropdownBtnPrograms = document.querySelector('.dropdown-btn-programs');
const dropdownContentPrograms = document.querySelector(
  '.dropdown-content-programs'
);
const dropdownBtnAboutUs = document.querySelector('.dropdown-btn-about-us');
const dropdownContentAboutUs = document.querySelector(
  '.dropdown-content-about-us'
);

dropdownBtnPrograms.addEventListener('click', function () {
  dropdownContentPrograms.classList.toggle('show');
});
dropdownBtnAboutUs.addEventListener('click', function () {
  dropdownContentAboutUs.classList.toggle('show');
});

window.addEventListener('click', function (e) {
  if (!e.target.matches('.dropdown-btn-programs')) {
    if (dropdownContentPrograms.classList.contains('show')) {
      dropdownContentPrograms.classList.remove('show');
    }
  }
});

window.addEventListener('click', function (e) {
  if (!e.target.matches('.dropdown-btn-about-us')) {
    if (dropdownContentAboutUs.classList.contains('show')) {
      dropdownContentAboutUs.classList.remove('show');
    }
  }
});
