"use strict";
const hamMenu = document.querySelector('.ham-menu');

const menu = document.querySelector('.menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    menu.classList.toggle('active');
})






document.querySelector('a[href="#footer"]').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#footer').scrollIntoView({
        behavior: 'smooth'
    });
});