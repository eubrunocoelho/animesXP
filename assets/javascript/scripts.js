/**
 * =================================================================================
 * MOBILE SIDENAV
 * =================================================================================
 */

const windowOverlay = document.querySelector('.window-overlay'),
    sidenav = document.querySelector('.sidenav'),
    openSidenavBtn = document.querySelector('.header__mobile-button'),
    closeSidenavBtn = document.querySelector('.sidenav__close-button');

openSidenavBtn.addEventListener('click', () => {
    openSidenav();

    closeSidenavBtn.addEventListener('click', () => closeSidenav());
    window.addEventListener('click', (e) => {
        if (e.target == windowOverlay) {
            closeSidenav();
        }
    })
})

let openSidenav = () => {
    windowOverlay.style.display = 'block';
    setTimeout(() => sidenav.style.left = '0', 200);
}

let closeSidenav = () => {
    sidenav.style.left = '-290px';
    setTimeout(() => windowOverlay.style.display = 'none', 200);
}

/**
 * =================================================================================
 * LOAD-MORE (GENRES)
 * =================================================================================
 */

const loadMoreBtn = document.querySelector('.load-more'),
    genresItems = document.querySelectorAll('.genres-box__item');

let displayItems = 12;

if (loadMoreBtn && genresItems) {


    for (let i = 0; i < displayItems; i++) {
        genresItems[i].style.display = 'block';
    }

    loadMoreBtn.addEventListener('click', () => {
        const visibleItems = document.querySelectorAll('.genres-box__item'),
            genresList = document.querySelector('.genres-box__list');

        let count = 0;

        for (let i = 0; i < visibleItems.length; i++) {
            if (visibleItems[i].style.display != 'block') {
                visibleItems[i].style.display = 'block';
            }
        }

        for (let i = 0; i < visibleItems.length; i++) {
            if (visibleItems[i].style.display != 'none') {
                count++;
            }
        }

        if (count == visibleItems.length) {
            genresList.style.margin = '0 0 0 0';
            loadMoreBtn.style.display = 'none';
        }
    })
}

/**
 * =================================================================================
 * COLLAPSIBLE
 * =================================================================================
 */

const collapsible = document.querySelectorAll('.collapsible');

if (collapsible) {
    collapsible.forEach((collapsible) => {
        collapsible.addEventListener('click', () => {
            const collapsibleContent = collapsible.nextElementSibling,
                chevron = collapsible.querySelector('.filter__chevron');

            if (collapsibleContent.style.maxHeight) {
                collapsibleContent.style.maxHeight = null;
            } else {
                collapsibleContent.style.maxHeight = collapsibleContent.scrollHeight + 'px';
            }

            let toggleUpToDown = (element) => {
                if (element.classList.contains('--toggle-down')) {
                    element.classList.remove('--toggle-down');
                    element.classList.add('--toggle-up');
                } else {
                    element.classList.remove('--toggle-up');
                    element.classList.add('--toggle-down');
                }
            }

            toggleUpToDown(chevron);
        });
    });
}