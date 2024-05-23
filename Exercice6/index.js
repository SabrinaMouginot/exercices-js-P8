const display = document.getElementById('display');
// Ajouter des chiffres et des opérateurs à l'affichage
function appendToDisplay(value) {
    display.value += value;
}

// Effacer l'affichage
function clearDisplay() {
    display.value = '';
}

// Calcul et affichage le résultat
function calculateResult() {
    try {
        // Utiliser eval pour calculer le résultat
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Erreur';
    }
}
