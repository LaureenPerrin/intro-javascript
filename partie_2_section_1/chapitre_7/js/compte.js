var compte = {
	titulaire: "Alex",
	solde: 0,

	crediter: function (montanFinal) {
		compte.solde = compte.solde + montanFinal; 
	},

	debiter: function (montanFinal) {
		compte.solde = compte.solde - montanFinal;
    },

	decrire: function () {
		var etatCompteBancaire = "Titulaire : " + compte.titulaire + ", " + "solde : " + compte.solde + " euros";
		return etatCompteBancaire;
	}

};

console.log(compte.decrire());
var montantCredite = Number(prompt("Entrez le montant à créditer :"));
compte.crediter(montantCredite);
var montantDebite = Number(prompt("Entrez le montant à débiter :"));
compte.debiter(montantDebite);
console.log(compte.decrire());
