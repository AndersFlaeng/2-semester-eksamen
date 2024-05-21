"use strict";
const hamMenu = document.querySelector('.ham-menu');

const menu = document.querySelector('.menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    menu.classList.toggle('active');
})






document.addEventListener("DOMContentLoaded", function() {
    var logo = document.getElementById('shakeLogo');

    function startRotation() {
        logo.classList.add('rotating');
    }

    function stopRotation() {
        logo.classList.remove('rotating');
    }

    logo.addEventListener('mouseenter', startRotation);
    logo.addEventListener('mouseleave', stopRotation);
});
