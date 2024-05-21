// J'attends que le DOM soit entièrement chargé
document.addEventListener('DOMContentLoaded', () => {
    // Je sélectionne le bouton par son ID
    const button = document.getElementById('myButton');

    // J'ajoute un écouteur d'événement de clic au bouton
    button.addEventListener('click', () => {
        // Je créer un nouveau paragraphe
        const message = document.createElement('p');
        message.textContent = 'Bonjour, vous avez cliqué sur le bouton !';

        // J'ajoute le paragraphe sous le bouton
        document.body.appendChild(message);
    });
});
