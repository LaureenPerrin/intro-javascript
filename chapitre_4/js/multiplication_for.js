for (nombre = 1; (nombre < 2) || (nombre > 9);) {
	nombre = Number(prompt("Entrez un nombre entre 2 et 9 : "));
}

console.log("Voici la table de multiplication de " + nombre);

for (i = 1; i <= 10; i++) {
	console.log(nombre + " x " + i + " = " + (nombre * i));
}