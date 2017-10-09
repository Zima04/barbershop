const overlay = document.querySelector('.modal-overlay');
const popupLogin = document.querySelector('.modal-content-form');
const openPopupLoginBtn = document.querySelector('.login');
const closePopupLoginBtn = popupLogin.querySelector('.modal-content-close-button');
const login = popupLogin.querySelector('[name=login]');
const password = popupLogin.querySelector('[name=password]');
const form = popupLogin.querySelector('form');
const popupMap = document.querySelector('.modal-content-map');
const openPopupMapBtn = document.querySelector('.js-open-map');
const closePopupMapBtn = document.querySelector('.js-close-map');

openPopupLoginBtn.addEventListener('click', function (event) {
    event.preventDefault();
    overlay.classList.add('content-show');
    popupLogin.classList.add('content-show', 'show-animation');
    setTimeout(function () {
        popupLogin.classList.remove('show-animation');
    }, 600);
    login.focus();
});

closePopupLoginBtn.addEventListener('click', function (event) {
    closePopupLogin(event);
});

form.addEventListener('submit', function (event) {
    if (!login.value || !password.value) {
        event.preventDefault();
        popupLogin.classList.add('modal-error');
        setTimeout(function() {
            popupLogin.classList.remove('modal-error');
        }, 600);
    }
});

window.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {
        closePopupLogin(event);
    }
});

function closePopupLogin(event) {
    event.preventDefault();
    popupLogin.classList.remove('content-show', 'show-animation', 'modal-error');
    overlay.classList.remove('content-show');
    login.value = '';
    password.value = '';
}

if (openPopupMapBtn) openPopupMapBtn.addEventListener('click', function (event) {
    event.preventDefault();
    overlay.classList.add('content-show');
    popupMap.classList.add('content-show', 'show-animation');
});

if (closePopupMapBtn) closePopupMapBtn.addEventListener('click', function (event) {
    closePopupMap(event);
});

window.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {
        closePopupMap(event);
    }
});

function closePopupMap(event) {
    event.preventDefault();
    overlay.classList.remove('content-show');
    popupMap.classList.remove('content-show', 'show-animation');
}
