/*_________________________________________________Modifier le style d'un élément_________________________________________________________________

---------------------------------------------------------La propriété style-----------------------------------------------------------------------

Les éléments du DOM disposent d'une propriété nommée style qui renvoie un objet représentant l'attribut  style de l'élément.﻿ 
Les propriétés de cet objet correspondent aux propriétés CSS de l'élément. 
En définissant leur valeur depuis JavaScript, on modifie le style de l'élément.

Le code ci-dessous sélectionne le premier paragraphe (balise <p> ) de la page, puis modifie la couleur du texte et les marges de ce paragraphe.﻿ :*/

var pElt = document.querySelector("p");
pElt.style.color = "red";
pElt.style.margin = "50px";

/*--------------------------------------------------Les propriétés CSS composées--------------------------------------------------------------------

Certaines propriétés CSS s'écrivent sous la forme d'un nom composé. Pour utiliser ces propriétés en JavaScript, 
il faut supprimer le tiret et écrire la première lettre du mot suivant en majuscule.

L'exemple ci-dessous modifie les propriétés CSS font-family et background-color du paragraphe sélectionné plus haut.﻿ :*/

// ...
pElt.style.fontFamily = "Arial";
pElt.style.backgroundColor = "black";

/*__________________________________________________Accéder au style d'un élément__________________________________________________________________

--------------------------------------------------Les limites de la propriété style-----------------------------------------------------------------

Essayons d'utiliser la propriété style pour récupérer les propriétés CSS d'un élément. 
L'exemple suivant affiche la couleur du texte de chacun des trois paragraphes de notre page web.﻿ :*/

var paragraphesElts = document.getElementsByTagName("p");
console.log(paragraphesElts[0].style.color); // Affiche "red"
console.log(paragraphesElts[1].style.color); // Affiche "green"
console.log(paragraphesElts[2].style.color); // N'affiche rien

/*La couleur du texte du troisième paragraphe (blue) n'apparait pas... Pourquoi ?

Pour répondre à cette question, il faut comprendre que la propriété style  utilisée en JavaScript représente l'attribut style de l'élément. 
Elle ne permet pas d'accéder aux déclarations de style situées ailleurs, par exemple dans une feuille de style CSS externe. 
Le style du troisième paragraphe, défini dans la feuille cours.css, n'est donc pas récupérable en JavaScript via la propriété style.*/

/*---------------------------------------------------La fonction getComputedStyle--------------------------------------------------------------------

La bonne solution pour accéder au style d'un élément consiste à utiliser une fonction nommée  getComputedStyle. 
Elle prend en paramètre un noeud du DOM et renvoie un objet représentant son style. 
On peut ensuite consulter les différentes propriétés CSS de cet objet.

L'exemple suivant affiche certaines propriétés CSS du troisième paragraphe :*/

var stylePara = getComputedStyle(document.getElementById("para"));
console.log(stylePara.fontStyle); // Affiche "italic"
console.log(stylePara.color); // Affiche la couleur bleue en valeurs RGB



/*=============================================================En résumé=============================================================================

﻿Voici ce qu'il faut retenir de ce chapitre consacré à la gestion des styles.﻿ :

-La propriété JavaScript style représente l'attribut style d'un élément du DOM. 
Elle permet de modifier le style de cet élément en définissant la valeur de ses propriétés CSS.

-Les propriétés CSS composées s'écrivent avec la norme camelCase en JavaScript. Par exemple, font-family devient fontFamily .

-La propriété JavaScript style est insuffisante pour accéder au style d'un élément. Pour cela, on utilise la fonction getComputedStyle.