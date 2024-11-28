function visitSite(url) {
    window.open(url, '_blank'); // Ouvre le site dans un nouvel onglet
}

function animateJeu() {
    const jeuElement = document.querySelector('.jeu');
    jeuElement.classList.add('jump'); // Ajoute la classe d'animation
    setTimeout(() => {
        jeuElement.classList.remove('jump'); // Retire la classe après l'animation
    }, 500); // Durée de l'animation
}