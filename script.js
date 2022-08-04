const iconMenu = document.querySelector('.header__menu-icon');
const menuBody = document.querySelector('.header__links');
if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}


const accordions = document.querySelectorAll('.getroom__tab');

for (item of accordions) {
    item.addEventListener('click', function() {
        if (this.classList.contains('getroom__active')) {
            this.classList.remove('getroom__active');
        } else {
            for(el of accordions) {
                el.classList.remove('getroom__active');
            }
            this.classList.add('getroom__active');
        }
    });
}


const menuLink = document.querySelectorAll('.footer__menu-item');

for (item of menuLink) {
    item.addEventListener('click', function() {
        if (this.classList.contains('_active')) {
            this.classList.remove('_active');
        } else {
            for(el of menuLink) {
                el.classList.remove('_active');
            }
            this.classList.add('_active');
        }
    });
}

const menuLinks = document.querySelectorAll('.header__links-link[data-goto]');
if (menuLinks.length > 0 ) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });

    function onMenuLinkClick (e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            window.scrollTo ({
                top: gotoBlockValue,
                behavior: 'smooth'
            });
            e.preventDefault();
        }
    }
}

const modalButton = document.querySelectorAll('.modal-btn');
const popup = document.querySelector ('.popup');
const closePopupIcon = document.querySelector('.close-popup');
const popupBg = document.querySelector('.popup__body');

function openPopup() {
    popup.classList.add('open');
    document.body.classList.add('_lock');
    iconMenu.classList.remove('_active');
    menuBody.classList.remove('_active');
}

modalButton.forEach(modalButton => {
    modalButton.addEventListener('click', function(e) {
        openPopup();
        e.preventDefault();
    });
});

function closePopup() {
    popup.classList.remove('open');
    document.body.classList.remove('_lock');
}

closePopupIcon.addEventListener('click', function (e) {
    closePopup();
    e.preventDefault();
});

document.addEventListener('click', (e) => {
    if (e.target === popupBg) {
        closePopup();
    }
});
