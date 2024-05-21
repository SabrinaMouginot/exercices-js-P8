// Ajouter des chiffres et des opérateurs à l'affichage
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Effacer l'affichage
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

// Calcul et affichage le résultat
function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Utiliser eval pour calculer le résultat
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Erreur';
    }
}
