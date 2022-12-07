const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 15,
    direction: 'horizontal',
      loop: true,
      centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})