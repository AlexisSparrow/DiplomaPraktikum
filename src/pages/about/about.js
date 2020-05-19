import './about.css'


var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    breakpoints: {
        320: {
            spaceBetween:8,
            initialSlide:0,
            slidesPerView:1,
            slidesPerGroup: 1,
        },
        768: {
            initialSlide:2,
            spaceBetween:8,
            slidesPerView:1,
            slidesPerGroup: 2,
        },
        769: {
            initialSlide:2,
            spaceBetween:8,
            slidesPerView:2,
            slidesPerGroup: 2,
        },
        1024: {
            spaceBetween: 16,
            initialSlide:2,
            slidesPerView:1,
            slidesPerGroup: 2,
        }
        
    },

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
