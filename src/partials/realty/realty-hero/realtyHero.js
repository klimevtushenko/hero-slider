import Swiper from 'swiper';
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  EffectCoverflow,
} from 'swiper/modules';

new Swiper('.js-realty-hero-swiper', {
  modules: [Scrollbar, Navigation, Pagination, Autoplay, EffectCoverflow],
  slidesPerView: 1,
  initialSlide: 1,
  spaceBetween: 0,
  updateOnWindowResize: true,
  watchOverflow: true,
  centeredSlides: false,
  grabCursor: true,

  effect: 'coverflow',
  coverflowEffect: {
    rotate: -1,
    scale: 0.8,
    slideShadows: false,
  },

  loop: true,
  autoplay: {
    delay: 2500,
  },

  breakpoints: {
    820: {
      slidesPerView: 1.5,
    },
    1200: {
      slidesPerView: 2,
    },
    1600: {
      slidesPerView: 2,
    },
  },

  pagination: {
    el: '.realty-hero-swiper-pagination',
    type: 'custom',
    renderCustom: function (swiper, current, total) {
      const formattedCurrent = current.toString().padStart(2, '0');
      const formattedTotal = total.toString().padStart(2, '0');

      return `
      <span class="number">${formattedCurrent}</span>
      <span class="space"></span>
      <span class="number">${formattedTotal}</span>`;
    },
  },

  scrollbar: {
    el: '.realty-hero-swiper-scrollbar',
    draggable: false,
    snapOnRelease: true,
    dragSize: 100,
  },

  navigation: {
    prevEl: '.realty-swiper-btn-prev',
    nextEl: '.realty-swiper-btn-next',
  },
});
