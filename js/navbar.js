"use strict";
const hamMenu = document.querySelector('.ham-menu');

const menu = document.querySelector('.menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    menu.classList.toggle('active');
})








// Vælg dit logoelement
const logo = document.getElementById('shakeLogo');

// Funktion til at rotere logoet fra højre mod venstre, kun når musen holder over det
function rotateLogo() {
    logo.style.transition = 'transform 0.5s ease';
    logo.style.transform = 'rotate(-10deg)';
    // Vent 0.5 sekunder før vi nulstiller rotationen
    setTimeout(() => {
        logo.style.transform = 'rotate(10deg)';
        // Vent yderligere 0.5 sekunder før vi roterer igen
        setTimeout(() => {
            logo.style.transition = 'none'; // Fjern transition for en mere glidende rotation
            logo.style.transform = 'rotate(0deg)';
            rotateLogo(); // Kald funktionen igen for at gentage rotationen
        }, 500);
    }, 500);
}

// Tilføj event listener til at lytte efter, når musen holder over logoet
logo.addEventListener('mouseover', () => {
    rotateLogo(); // Kald funktionen når musen holder over logoet
});

// Tilføj event listener til at lytte efter, når musen fjernes fra logoet
logo.addEventListener('mouseout', () => {
    logo.style.transition = 'none'; // Fjern transition når musen fjernes
    logo.style.transform = 'rotate(0deg)'; // Nulstil rotationen tilbage til normal
});
