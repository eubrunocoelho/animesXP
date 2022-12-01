var swiper = new Swiper('.mySwiper', {
    slidesPerView: 'auto',
    loop: true,
    loopFillGroupWithBlank: true,
    spaceBetween: 20,
    breakpoints: {
        320: {
            spaceBetween: 10
        },
        480: {
            spaceBetween: 20
        }
    }
});