import './about.css'

var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    spaceBetween: 16,
    direction: 'horizontal',
    initialSlide:2,
    slidesPerGroup: 2,
    loop: false,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

})