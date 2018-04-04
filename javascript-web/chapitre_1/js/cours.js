/*
Pour obtenir ce résultat, le navigateur parcourt le code HTML de la page afin de construire une représentation de sa structure. 
Ensuite, il utilise cette représentation pour afficher les différents éléments de la page.

Là où les choses deviennent intéressantes, c'est que le navigateur permet d'accéder programmatiquement à la structure de la page qu'il affiche.
En écrivant du code, on peut ainsi modifier dynamiquement la page web : ajouter ou retirer des éléments, changer leur style, etc. 
Tout ou presque devient possible ! Et devinez quel langage on va utiliser pour faire tout ça ? JavaScript, bien sûr. 

Cette représentation de la structure d'une page web offerte par un navigateur et exploitable via JavaScript est appelée DOM, 
pour Document Object Model. Le DOM définit la structure d'une page et le moyen d'interagir avec elle : il s'agit d'une interface de programmation, 
ou API (Application Programming Interface).

Une page web n'est rien d'autre qu'un ensemble de balises imbriquées les unes dans les autres. On peut la représenter sous une forme hiérarchisée
appelée une arborescence. L'élément <html> en constitue la racine et contient deux éléments :<head> et <body>, qui contiennent eux-mêmes 
plusieurs sous-éléments.

Chaque entité de l'arborescence est appelée un nœud(node). On distingue deux types de nœuds :

Ceux (en bleu) qui correspondent à des éléments HTML, comme <body> ou<p>. Ces nœuds peuvent avoir des sous-nœuds, appelés fils ou enfants(children).

Ceux (en rouge) qui correspondent au contenu textuel de la page. Ces nœuds ne peuvent pas avoir de fils.

Le navigateur web permet de visualiser la hiérarchie des éléments d'une page web.

--------------------------------------------Premiers pas avec le DOM en JavaScript-----------------------------------------------------------
Le DOM représente une page web sous la forme d'une hiérarchie d'objets, où chaque objet correspond à un nœud de l'arborescence de la page. 
Les objets du DOM disposent de propriétés et de méthodes permettant de les manipuler avec JavaScript.

_______________________________________Accéder au DOM avec la variable document____________________________________________________________
Lorsqu'un programme JavaScript s'exécute dans le contexte d'un navigateur web, il peut accéder à la racine du DOM en utilisant la variable document.

La variable document correspond à l'élément <html>.

Cette variable est un objet et dispose des propriétés head et body qui permettent d'accéder respectivement aux éléments <head> et<body> de la page.
*/

var h = document.head; // La variable h contient l'objet head du DOM
console.log(h);

var b = document.body; // La variable b contient l'objet body du DOM
console.log(b);


/*______________________________________Découvrir le type d'un nœud_________________________________________________________________________
Chaque objet du DOM a une propriété nodeType qui indique son type. 
La valeur de cette propriété est document.ELEMENT_NODE pour un nœud "élément" (balise HTML) et document.TEXT_NODE pour un nœud textuel.*/

if (document.body.nodeType === document.ELEMENT_NODE) {
    console.log("Body est un noeud élément");
} else {
    console.log("Body est un noeud textuel");
}

/*_____________________________________Accéder aux enfants d'un nœud élément________________________________________________________________
Comme nous l'avons vu précédemment, seuls les nœuds de type élément peuvent avoir des sous-nœuds (appelés enfants).
Chaque objet du DOM de type élément possède une propriété childNodes. 
Il s'agit d'une collection ordonnée regroupant tous ses nœuds enfants sous la forme d'objets DOM. 
On peut utiliser cette collection un peu comme un tableau pour accéder aux différents enfants d'un nœud.
La propriété childNodes n'est pas un véritable tableau JavaScript, mais on peut tout de même connaître sa taille avec length, 
accéder à ses éléments grâce à leur indice et parcourir la collection avec une boucle for. 
Consultez ce chapitre pour revoir comment on utilise les tableaux en JavaScript.
Le code ci-dessous affiche dans la console le premier enfant du nœudbody. */

// Accès au premier enfant du noeud body
console.log(document.body.childNodes[0]);

/*Mais... Ce n'est pas le nœud h1 qui apparaît ?
Hé non ! Comme vous pouvez le constater, le tout premier enfant du nœud body n'est pas le nœud h1 mais un noeud textuel !
Voici l'explication : les espaces entre les balises ainsi que les retours à la ligne dans le code HTML sont considérés par le navigateur 
comme des nœuds textuels. Ici, le noeud h1 n'est donc que le deuxième enfant du nœudbody. 
On peut le vérifier en modifiant le code pour accéder au deuxième enfant (indice 1).
En pratique, il est préférable de ne pas sacrifier la présentation et l'indentation du code HTML, 
tout en gardant à l'esprit l'existence dans le DOM de ces nœuds "vides".*/

// Accès au deuxième enfant du noeud body
console.log(document.body.childNodes[1]);

/*_____________________________________________Parcourir la liste des nœuds enfants_______________________________________________________
Pour parcourir la liste des nœuds enfants, vous pouvez recourir à une boucle for, comme dans l'exemple ci-dessous. */

// Affiche les noeuds enfant du noeud body
for (var i = 0; i < document.body.childNodes.length; i++) {
    console.log(document.body.childNodes[i]);
}

/*On obtient la liste des nœuds enfants du nœudbody.
Là encore, les espaces et les retours à la ligne entre les balises correspondant à des nœuds textuels dans le DOM.*/


/*____________________________________________________Accéder au parent d'un nœud__________________________________________________________
Chaque objet du DOM possède une propriétéparentNodequi renvoie son nœud parent sous la forme d'un objet DOM.

Pour le nœud racine du DOM (la variabledocument), la valeur deparentNodeestnull: document n'a aucun nœud parent.*/
var h1 = document.body.childNodes[1];
console.log(h1.parentNode); // Affiche le noeud body

console.log(document.parentNode); // Affiche null : document n'a aucun noeud parent

/*====================================================En résumé=====================================================================================

-Une page web est un document structuré contenant à la fois du texte et des balises HTML. Grâce à JavaScript, 
on peut accéder à la structure d'une page affichée dans un navigateur, et même la modifier.

-Le DOM, ou Document Object Model, définit de manière standardisée la structure d'une page web et le moyen d'interagir avec elle via JavaScript. 
Le DOM représente une page web comme une hiérarchie d'objets reflétant sa structure. Chaque objet du DOM correspond à un nœud dans 
l'arborescence de la page web.

-La variable JavaScript "document" permet d'accéder à la racine de l'arborescence du DOM et correspond à l'élément <html> de la page.

-Les objets du DOM disposent de propriétés et de méthodes utilisables avec JavaScript. 
Parmi ces propriétés, nodeType renvoie le type de nœud,childNodes contient une collection de nœuds enfants et parentNode renvoie le nœud parent.

-Il existe d'autres propriétés que nous n'aborderons pas ici pour naviguer entre les objets du DOM :  firstChild,lastChildou encorenextSibling... 
Vous en trouverez la liste complète sur le Mozilla Developer Network.