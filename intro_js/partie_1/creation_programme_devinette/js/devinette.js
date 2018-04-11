/* 
Activité : jeu de devinette
*/

console.log("Bienvenue dans ce jeu de devinette !");
// Déclaration des variables qui seront utilisées dans le programme
// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;
var chiffreSaisi = "";

// boucle for utilisée car nous savons que l'utilisateur aura un nombre de tour de boucle bien définit (6 tours de boucle = 6 essai max)
for (essai = 1; essai <= 6 ; essai += 1) { // valeur initial de essai est 1 pour débuter la boucle; essai de doit pas dépasser 6 tentatives; à chaque tour de boucle essai est incrémenté de 1
	chiffreSaisi = Number(prompt("Bienvenue dans ce jeu de devinette où vous devez deviner un nombre entre 1 et 100 ! \n Tentez votre chance et saisissez un chiffre :"));
    if (chiffreSaisi > solution) { // si le chiffre saisi par l'utilisateur est plus grand que le nombre à trouvé alors la phrase ligne 15 apparait
        console.log(chiffreSaisi + " est trop grand");
    } else if (chiffreSaisi < solution) { // si le chiffre saisi par l'utilisateur est plus petit que le nombre à trouvé alors la phrase ligne 17 apparait
    	console.log(chiffreSaisi + " est trop petit");
    } else if (chiffreSaisi === solution) { // si le chiffre saisi par l'utilisateur est égal au nombre à trouvé alors les phrases ligne 19 et 20 apparaissent
    	console.log("Bravo ! la solution était " + solution);
    	console.log("Vous avez trouvé en " + essai + " essai(s)");
        essai = 6; // cette ligne permet de stopper la boucle car l'utilisateur a réussit
    }
}

if (chiffreSaisi !== solution) { // si le chiffre saisi par l'utilisateur n'a pas été trouvé dans les 6 essais alors la phrase de la ligne 26 apparait
    	console.log("Perdu... La solution était " + solution);
}
