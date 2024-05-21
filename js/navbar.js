"use strict";
const hamMenu = document.querySelector('.ham-menu');

const menu = document.querySelector('.menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    menu.classList.toggle('active');
})



document.addEventListener('DOMContentLoaded', function() {
    var logo = document.getElementById('#logo');

    logo.addEventListener('mouseover', function() {
        logo.classList.add('rotate');
    });

    logo.addEventListener('mouseout', function() {
        logo.classList.remove('rotate');
    });
});