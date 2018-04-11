// TODO : écrire la fonction calculer()
function calculer(nb1, operateur, nb2) {
    var resultatOperation;
    switch (operateur) {
    case "+":
        resultatOperation = nb1 + nb2;
        break;
    case "-":
        resultatOperation = nb1 - nb2;
        break;
    case "*":
        resultatOperation = nb1 * nb2;
        break;
    case "/":
        resultatOperation = nb1 / nb2;
        break;
    }
    return resultatOperation;
}

console.log(calculer(4, "+", 6)); // Doit afficher 10
console.log(calculer(4, "-", 6)); // Doit afficher -2
console.log(calculer(2, "*", 0)); // Doit afficher 0
console.log(calculer(12, "/", 0)); // Doit afficher Infinity