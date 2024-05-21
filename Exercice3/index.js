// Créez votre fonction ici
function calculateAverage(numbers) {
    // Je vérifie si le tableau est fourni et s'il n'est pas vide
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return "No numbers to calculate average";
    }

    // Je calcule la somme des nombres
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);

    // Je calcule la moyenne
    const average = sum / numbers.length;

    // retourne la moyenne
    return average;
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

export default calculateAverage
