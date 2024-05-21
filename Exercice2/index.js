// Créez votre fonction ici
function calculate(num1, num2, operator) {
    // Je vérifie le type d'opérateur et j'effectue l'opération.
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            // Je vérifie si on divise par 0 (opération impossible)
            if (num2 === 0) {
                return "Division by zero is not allowed";
            }
            return num1 / num2;
        default:
            return "Invalid operator";
    }
}

// Exemples d'utilisation de la fonction
console.log(calculate(5, 3, '+'));   // Affiche 8
console.log(calculate(10, 4, '-'));  // Affiche 6
console.log(calculate(7, 2, '*'));   // Affiche 14
console.log(calculate(12, 3, '/'));  // Affiche 4
console.log(calculate(8, 0, '/'));   // Affiche "Division by zero is not allowed"
console.log(calculate(4, 5, '%'));   // Affiche "Invalid operator"

export default calculate
