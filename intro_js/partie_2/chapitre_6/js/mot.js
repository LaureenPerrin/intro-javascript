// exo Informations sur le mot :

var motSaisi = prompt("Saisir un mot :");
console.log("Le mot " + motSaisi + " contient " + motSaisi.length + " caractère(s)");
var motSaisiEnMinuscules = motSaisi.toLowerCase();
console.log("Il s'écrit en minuscules " + motSaisiEnMinuscules);
var motSaisiEnMajuscules = motSaisi.toUpperCase();
console.log("Il s'écrit en majuscules " + motSaisiEnMajuscules);

// exo Comptage du nombre de voyelles :
function compterNbVoyelles(motSaisi) {
	var Nbvoyelles = 0;
	for (i = 0; i < motSaisi.length; i++) {
		var lettre = motSaisi[i];
		if ((lettre === "a") || (lettre === "e") || 
			(lettre === "i") || (lettre === "o") || 
			(lettre === "u") || (lettre === "y")) {
			Nbvoyelles ++;
		} else if ((lettre === "A") || (lettre === "E") || 
			(lettre === "I") || (lettre === "O") || 
			(lettre === "U") || (lettre === "Y")) {
			Nbvoyelles ++;
		}
	}
	return Nbvoyelles;
}

var nbConsonnes = motSaisi.length - compterNbVoyelles(motSaisi);
console.log("Il contient " + compterNbVoyelles(motSaisi)  + " voyelle(s) " + " et " + nbConsonnes + " consonne(s)");

// exo Inversion du mot/palindrome :

function inverser(motSaisi) {
    var motInverse = "";
    for (var i = motSaisi.length - 1; i >= 0; i--) {
        motInverse = motInverse + motSaisi[i];
    }

    return motInverse;
}

console.log("Il s'écrit à l'envers " + inverser(motSaisi));

//exo palindrome :

if (inverser(motSaisi) === motSaisi) {
	console.log("C'est un palindrome");
}
else {
	console.log("Ce n'est pas un palindrome");
}

// exo Conversion en "leet speak" :

function trouverLettreLeet(lettre) {
	   var lettreLeetSpeak = lettre;
    switch (lettre.toLowerCase()) {
    case "a":
        lettreLeetSpeak = "4";
        break;
    case "b":
        lettreLeetSpeak = "8";
        break;
    case "e":
        lettreLeetSpeak = "3";
        break;
    case "l":
        lettreLeetSpeak = "1";
        break;
    case "o":
        lettreLeetSpeak = "0";
        break;
    case "s":
        lettreLeetSpeak = "5";
        break;
    }
    return lettreLeetSpeak;
}

function convertirEnLeetSpeak(motSaisi) {
    var motLeetSpeak ="";
    for (var i = 0; i < motSaisi.length; i++) {
        motLeetSpeak = motLeetSpeak + trouverLettreLeet(motSaisi[i]);
    }
    return motLeetSpeak;
}

var motSaisi = convertirEnLeetSpeak(motSaisi);
console.log("Il s'écrit en leet speak " + motSaisi);
