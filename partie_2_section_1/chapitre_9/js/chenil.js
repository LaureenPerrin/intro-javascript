var Chien = {
    // initialise le chien
    init: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
    // Renvoie l'aboiement du chien
    aboyer: function () {
        var aboiement = "Whoua ! Whoua !";
        if (this.taille < 25) {
            aboiement = "Kaii ! Kaii !";
        } else if (this.taille > 60) {
            aboiement = "Grrr ! Grrr !";
        }
        return aboiement;
    },

    decrire: function () {
        var description = this.nom + " est un " + this.race + " mesurant " + this.taille + " cm. " + "Il aboie : " + this.aboyer();
        return description;
    }
};

var Crokdur = Object.create(Chien);
Crokdur.init("Crokdur", "mâtin de Naples", 75);

var Pupuce = Object.create(Chien);
Pupuce.init("Pupuce", "bichon", 22);

var Medor = Object.create(Chien);
Medor.init("Médor", "labrador", 58);

var chiens = [Crokdur, Pupuce, Medor];

console.log("Le chenil héberge 3 chien(s) :");

chiens.forEach(function (Chien) {
    console.log(Chien.decrire());
});