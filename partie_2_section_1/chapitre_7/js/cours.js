var stylo = {
    type: "bille",
    couleur: "bleu",
    marque: "Bic"
};

// Constructeur MonObjet
function MonObjet() {
    // Initialisation de l'objet
    // ...
}
// Instanciation d'un objet à partir du constructeur
var monObj = new MonObjet();

console.log(stylo.type); // Affiche "bille"
console.log(stylo.couleur); // Affiche "bleu"
console.log(stylo.marque); // Affiche "Bic"
// ou autre syntaxe :
console.log(stylo['type']); // Affiche "bille"
console.log(stylo['couleur']); // Affiche "bleu"
console.log(stylo['marque']); // Affiche "Bic"

var stylo = {
    type: "bille",
    couleur: "bleu",
    marque: "Bic"
};

console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur);

//modification d'un objet 
//Une fois un objet créé, on peut modifier les valeurs de ses propriétés avec 
//la syntaxe monObjet.maPropriete = nouvelleValeur.
var stylo = {
    type: "bille",
    couleur: "bleu",
    marque: "Bic"
};

console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur);

stylo.couleur = "rouge"; // Modifie la couleur de l'encre du stylo

console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur);

var stylo = {
    type: "bille",
    couleur: "bleu",
    marque: "Bic"
};

console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur);

stylo.prix = 2.5; // Ajout de la propriété prix à l'objet stylo

console.log("Il coûte " + stylo.prix + " euros");


//ajouter une méthode à un objet :
// Renvoie la description d'un personnage
function decrire(personnage) {
    var description = personnage.nom + " a " + personnage.sante + " points de vie et " + personnage.force + " en force";
    return description;
}

console.log(decrire(perso));


//création de méthode après création de l'objet :
var perso = {}; // Création d'un objet sans aucune propriété
perso.nom = "Aurora";
perso.sante = 150;
perso.force = 25;
// Renvoie la description du personnage
perso.decrire = function () {
    var description = this.nom + " a " + this.sante + " points de vie et " +
        this.force + " en force";
    return description;
};


//---------------Syntaxe générale de la création et utilisation d'un objet : 
var monObjet = {
    propriete1: valeur1,
    propriete2: valeur2,
    // ... ,
    methode1: function(/* ... */) {
        // ...
    },
    methode2: function(/* ... */) {
        // ...
    },
    // ...
};

console.log(monObjet.propriete1); // Affiche la propriété propriete1 de monObjet

console.log(monObjet.methode1(...)); // Affiche le résultat de l'appel de la méthode methode1 de monObjet