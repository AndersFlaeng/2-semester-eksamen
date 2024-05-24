'use strict'; // Aktiverer "strict mode", hvilket skaber et mere sikkert og fejltolerant miljø i JavaScript.

// Finder HTML-elementer ved hjælp af querySelector og tildeler dem til variabler.
const hamMenu = document.querySelector('.ham-menu'); // Hamburger-menuen
const menu = document.querySelector('.menu'); // Menuen

// Tilføjer en eventlistener til hamburger-menuen, der lytter efter klik.
hamMenu.addEventListener('click', () => {
    // Toggler 'active' klassen på både hamburger-menuen og menuen, hvilket aktiverer/deaktiverer dem.
    hamMenu.classList.toggle('active');
    menu.classList.toggle('active');
});





// Lytter efter at DOM'en er indlæst før den udfører funktionen.
document.addEventListener("DOMContentLoaded", function() {
    // Finder logoet ved hjælp af dets id og tildeler det til en variabel.
    var logo = document.getElementById('shakeLogo');

    // Funktion til at starte rotationen af logoet.
    function startRotation() {
        logo.classList.add('rotating'); // Tilføjer klassen 'rotating' til logoet.
    }

    // Funktion til at stoppe rotationen af logoet.
    function stopRotation() {
        logo.classList.remove('rotating'); // Fjerner klassen 'rotating' fra logoet.
    }

    // Tilføjer eventlisteners til logoet, der lytter efter museindgange og -udgange.
    logo.addEventListener('mouseenter', startRotation); // Når musen befinder sig over logoet, starter rotationen.
    logo.addEventListener('mouseleave', stopRotation); // Når musen forlader logoet, stopper rotationen.
});




document.addEventListener("DOMContentLoaded", function() {
    const searchIcon = document.getElementById('search-icon');
    const searchInput = document.getElementById('search-input');
    const searchContainer = document.querySelector('.search-container');

    searchIcon.addEventListener('click', function() {
        searchContainer.classList.toggle('active'); // Toggler klassen 'active' på containeren
        searchInput.focus(); // Sætter fokus på inputfeltet
    });
});






document.addEventListener("DOMContentLoaded", function() {
    // Finder HTML-elementer ved hjælp af deres id'er og klassenavn og tildeler dem til variabler
    const searchIcon = document.getElementById('search-icon'); // Søgeikonet
    const searchInput = document.getElementById('search-input'); // Søgefeltet
    const searchContainer = document.querySelector('.search-container'); // Containeren, der indeholder både ikonet og søgefeltet

    // Tilføjer en eventlistener til søgeikonet, der lytter efter klik
    searchIcon.addEventListener('click', function() {
        // Toggler 'active' klassen på containeren, hvilket ændrer dens stil (viser eller skjuler søgefeltet)
        searchContainer.classList.toggle('active');
        // Sætter fokus på søgefeltet, når det vises
        searchInput.focus();
    });
});



