const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: true,
  autoplay: {
    delay: 2000,
  },
  autoplaySpeed: 2000,
  pauseOnHover: true,
  pauseOnFocus: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
