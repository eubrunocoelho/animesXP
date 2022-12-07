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

var mobileBtn = document.querySelector('#mobileBtn');

mobileBtn.addEventListener('click', () => {
    document.querySelector('.sidenav__background').style.display = 'block';
    setTimeout(() => {
        document.querySelector('.sidenav').style.width = '290px';
    }, 200);
})

/**
 * NOT COMPLETED
 */