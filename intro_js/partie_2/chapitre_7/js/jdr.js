var perso = {
    nom: "Aurora",
    sante: 150,
    force: 25
};

var perso = {
    nom: "Aurora",
    sante: 150,
    force: 25
};

console.log(perso.nom + " a " + perso.sante + " points de vie et " + perso.force + " en force");

// Aurora est blessée par une flèche
perso.sante = perso.sante - 20;

// Aurora trouve un bracelet de force
perso.force = perso.force + 10;

console.log(perso.nom + " a " + perso.sante + " points de vie et " + perso.force + " en force");

// Renvoie la description d'un personnage
function decrire(personnage) {
    var description = personnage.nom + " a " + personnage.sante + " points de vie et " + personnage.force + " en force";
    return description;
}

console.log(decrire(perso));

var perso = {
    nom: "Aurora",
    sante: 150,
    force: 25,

    // Renvoie la description du personnage
    decrire: function () {
        var description = this.nom + " a " + this.sante + " points de vie et " +
            this.force + " en force";
        return description;
    }
};

console.log(perso.decrire());

// Aurora est blessée par une flèche
perso.sante = perso.sante - 20;

// Aurora trouve un bracelet de force
perso.force = perso.force + 10;

console.log(perso.decrire());

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

//----------------Partie---exercices---------------------------------------------------------------------
// TODO : ajoutez ici la définition de l'objet perso

var perso = {
    nom: "Aurora",
    sante: 150,
    force: 25,
    xp: 0,

    // Renvoie la description du personnage
    decrire: function () {
        var description = this.nom + " a " + this.sante + " points de vie et " +
            this.force + " en force" + " et " + this.xp + " points d'expérience";
        return description;
    }
};

console.log(perso.decrire());

// Aurora est blessée par une flèche
perso.sante = perso.sante - 20;

// Aurora trouve un bracelet de force
perso.force = perso.force + 10;

// Aurora apprend une nouvelle compétence
perso.xp = perso.xp + 15;

console.log(perso.decrire());