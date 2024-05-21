"use strict";
const hamMenu = document.querySelector('.ham-menu');

const menu = document.querySelector('.menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    menu.classList.toggle('active');
})






document.querySelectorAll('a[href^="#"').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scroolIntoView({
            behavior : "smooth"
        });
    });
});