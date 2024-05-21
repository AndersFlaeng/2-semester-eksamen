"use strict";
const hamMenu = document.querySelector('.ham-menu');

const menu = document.querySelector('.menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    menu.classList.toggle('active');
})




document.getElementById('kontakt-link').addEventListener('click', function(event) {
    event.preventDefault(); // Forhindre standard link-adfærd
    document.getElementById('kontakt').scrollIntoView({ behavior: 'smooth' });
});