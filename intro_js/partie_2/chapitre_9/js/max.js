var valeurs = [11, 3, 7, 2, 9, 10];
console.log("Le maximum des éléments vaut " + Math.max(...valeurs));

//ou :

var valeurs = [11, 3, 7, 2, 9, 10];

var valeurMax = valeurs[0];
for (var i = 1; i < valeurs.length; i++) {
    if (valeurs[i] > valeurMax) {
        valeurMax = valeurs[i];
    }
}
console.log("Le maximum des éléments vaut " + valeurMax);
