// TODO : ajoutez ici la définition de l'objet chien :

var chien = {
	nom: "Crockdur",
	race: "mâtin de Naples",
	taille: 75,

	aboyer: function() {
		var aboiement = "Grrr ! Grrr !";
		return aboiement;
	}
};

console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");
console.log("Tiens, un chat ! " + chien.nom + " aboie : " + chien.aboyer());