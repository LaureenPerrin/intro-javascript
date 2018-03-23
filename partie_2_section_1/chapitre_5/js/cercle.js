function perimetre() {
	var perimetre = 2 * Math.PI * rayon;
	return perimetre;
}

function aire() {
	var aire = Math.PI * (rayon * rayon);
	return aire;
}

var rayon = Number(prompt("Entrez le rayon d'un cercle :"));
console.log("Son périmètre vaut " + perimetre());
console.log("Son aire vaut " + aire());