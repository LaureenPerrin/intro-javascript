
var couleurTexte = prompt("Entrez la couleur du texte :");
var couleurFond = prompt("Entrez la couleur du fond :");

var divElt = document.querySelectorAll("div");
var i = 0;
while (i < divElt.length) {
	divElt[i].style.color = couleurTexte;
	divElt[i].style.backgroundColor = couleurFond;
	i++;
};

console.log(couleurTexte);
console.log(couleurFond);

