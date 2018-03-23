// TODO : écrire la fonction min()
function min(x1, x2) {
	if (x1 < x2) {
		return x1;
	} else {
		return x2;
	}
}

console.log(min(4.5, 5)); // Doit afficher 4.5
console.log(min(19, 9)); // Doit afficher 9
console.log(min(1, 1)); // Doit afficher 1