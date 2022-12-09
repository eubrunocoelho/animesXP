/**
 * =================================================================================
 * NOT COMPLETED - BASE
 * =================================================================================
 */

var swiper = new Swiper('.mySwiper', { slidesPerView: 'auto', loop: true, loopFillGroupWithBlank: true, spaceBetween: 20, breakpoints: { 320: { spaceBetween: 10 }, 480: { spaceBetween: 20 } } });

/**
 * Side navigation
 */

const windowOverlay = document.querySelector('.window-overlay');
const sidenav = document.querySelector('.sidenav');
const sidenavOpenBtn = document.querySelector('.header__mobile-button');
const sidenavCloseBtn = document.querySelector('.sidenav__close-button');

sidenavOpenBtn.addEventListener('click', () => {
    openSidenav();

    sidenavCloseBtn.addEventListener('click', () => closeSidenav());
    window.addEventListener('click', (event) => {
        if (event.target == windowOverlay) {
            closeSidenav();
        }
    })
});

var openSidenav = () => {
    windowOverlay.style.display = 'block';

    setTimeout(() => {
        sidenav.style.left = '0';
    }, 200);
};

var closeSidenav = () => {
    sidenav.style.left = '-290px';

    setTimeout(() => {
        windowOverlay.style.display = 'none';
    }, 200);
}

/**
 * =======================================================
 */

const genreLoadMoreBtn = document.querySelector('#load-more')

var displayItems = 15;
var genresItem = document.querySelectorAll('.genres__item');

for (var i = 0; i < displayItems; i++) {
    genresItem[i].style.display = 'block';
}

genreLoadMoreBtn.addEventListener('click', () => {
    var visible = document.querySelectorAll('.genres__item');
    var count = 0;

    for (var i = 0; i < visible.length; i++) { 
        if (visible[i].style.display != 'block') {
            visible[i].style.display = 'block';
        }
    }

    count = 0;

    for (var i = 0; i < visible.length; i++) {
        if (visible[i].style.display != 'none') {
            count++;
        }
    }
    
    if (count == visible.length) {
        genreLoadMoreBtn.outerHTML = '';
    }
});