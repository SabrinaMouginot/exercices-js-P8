function convertToBinary() {
    // Je vais chercher l'id de la valeur du champ de saisie
    const decimalInput = document.getElementById('decimalInput').value;

    // Je vérifie si la valeur saisie est un nombre valide
    const decimalNumber = parseInt(decimalInput);

    // Si la valeur n'est pas un nombre, afficher un message d'erreur
    // sinon je convertis le nombre décimal en binaire
    // Et j'affiche le résultat de la conversion binaire
    
    if (isNaN(decimalNumber)) {
        // Si la valeur n'est pas un nombre, afficher un message d'erreur
        document.getElementById('binaryResult').textContent = "Veuillez entrer un nombre entier valide.";
    } else {
        // Convertir le nombre décimal en binaire
        const binaryResult = decimalNumber.toString(2);

        // Afficher le résultat de la conversion binaire
        document.getElementById('binaryResult').textContent = `Représentation binaire : ${binaryResult}`;
    }
}
