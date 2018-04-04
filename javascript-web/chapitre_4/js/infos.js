
var styleElt = getComputedStyle(document.getElementById("contenu"));

var longueurElt = document.createElement("li");
longueurElt.textContent = "Longueur : " + styleElt.width;

var hauteurElt = document.createElement("li");
hauteurElt.textContent = "Hauteur : " + styleElt.height;
var listeElt = document.createElement("ul");
listeElt.appendChild(hauteurElt);
listeElt.appendChild(longueurElt);
document.getElementById("infos").appendChild(document.createTextNode("Informations sur l'élément"));
document.getElementById("infos").appendChild(listeElt);



