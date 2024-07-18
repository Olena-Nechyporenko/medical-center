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

// For mobile menu

const dropdownBtnProgramsMob = document.querySelector(
  '.dropdown-btn-programs-mob'
);
const dropdownContentProgramsMob = document.querySelector(
  '.dropdown-content-programs-mob'
);
const dropdownBtnAboutUsMob = document.querySelector(
  '.dropdown-btn-about-us-mob'
);
const dropdownContentAboutUsMob = document.querySelector(
  '.dropdown-content-about-us-mob'
);

dropdownBtnProgramsMob.addEventListener('click', function () {
  dropdownContentProgramsMob.classList.toggle('show');
});
dropdownBtnAboutUsMob.addEventListener('click', function () {
  dropdownContentAboutUsMob.classList.toggle('show');
});

window.addEventListener('click', function (e) {
  if (!e.target.matches('.dropdown-btn-programs-mob')) {
    if (dropdownContentProgramsMob.classList.contains('show')) {
      dropdownContentProgramsMob.classList.remove('show');
    }
  }
});

window.addEventListener('click', function (e) {
  if (!e.target.matches('.dropdown-btn-about-us-mob')) {
    if (dropdownContentAboutUsMob.classList.contains('show')) {
      dropdownContentAboutUsMob.classList.remove('show');
    }
  }
});
