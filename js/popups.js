'use strict';

let overlay = document.querySelector('.modal-overlay');
let popupLogin = document.querySelector('.modal-content-form');
let openPopupLoginBtn = document.querySelector('.login');
let closePopupLoginBtn = popupLogin.querySelector('.modal-content-close-button');
let login = popupLogin.querySelector('[name=login]');
let password = popupLogin.querySelector('[name=password]');
let form = popupLogin.querySelector('form');

openPopupLoginBtn.addEventListener('click', (event) => {
    event.preventDefault();
    overlay.classList.add('content-show');
    popupLogin.classList.add('content-show', 'show-animation');
    setTimeout(() => {
        popupLogin.classList.remove('show-animation');
    }, 600);
    login.focus();
});

closePopupLoginBtn.addEventListener('click', (event) => {
    closePopupLogin(event);
});

form.addEventListener('submit', (event) => {

    if (!login.value || !password.value) {
        event.preventDefault();
        popupLogin.classList.add('modal-error');
        setTimeout(() => {
            popupLogin.classList.remove('modal-error');
        }, 600);
    }
});

window.addEventListener('keydown', (event) => {
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

let popupMap = document.querySelector('.modal-content-map');
let openPopupMapBtn = document.querySelector('.js-open-map');
let closePopupMapBtn = document.querySelector('.js-close-map');

openPopupMapBtn.addEventListener('click', (event) => {
    event.preventDefault();
    overlay.classList.add('content-show');
    popupMap.classList.add('content-show', 'show-animation');
});

closePopupMapBtn.addEventListener('click', (event) => {
    closePopupMap(event);
});

window.addEventListener('keydown', (event) => {
    if (event.keyCode === 27) {
        closePopupMap(event);
    }
});

function closePopupMap(event) {
    event.preventDefault();
    overlay.classList.remove('content-show');
    popupMap.classList.remove('content-show', 'show-animation');
}
