var r = Number(prompt("Entrez le rayon d'un cercle :"));

// TODO : ajoutez ici la définition de l'objet cercle

var cercle = {
	perimetre: function() {
		var perimetreCercle = 2 * Math.PI * r;
		return perimetreCercle;
	},

	aire: function() {
		var aireCercle = Math.PI * (r*r);
		return aireCercle;
	},
};

console.log("Son périmètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());