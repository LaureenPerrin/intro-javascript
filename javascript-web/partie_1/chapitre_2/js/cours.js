/*______________________________________________________________1 La page web d'exemple_____________________________________________________________

Les exemples de ce chapitre utilisent tous la page web ci-dessous :

<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title>Les sept merveilles du monde</title>
</head>

<body>
    <h1>Les sept merveilles du monde</h1>
    <p>Connaissez-vous les merveilles du monde ?</p>
    <div id="contenu">
        <h2>Merveilles du monde antique</h2>
        <p>Cette liste nous vient de l'Antiquité.</p>
        <ul class="merveilles" id="antiques">
            <li class="existe">La pyramide de Khéops</li>
            <li>Les jardins suspendus de Babylone</li>
            <li>La statue de Zeus</li>
            <li>Le temple d'Artémis</li>
            <li>Le mausolée d'Halicarnasse</li>
            <li>Le Colosse de Rhodes</li>
            <li>Le phare d'Alexandrie</li>
        </ul>
        <h2>Nouvelles merveilles du monde</h2>
        <p>Cette liste a été établie en 2009 à la suite d'un vote par Internet.</p>
        <ul class="merveilles" id="nouvelles">
            <li class="existe">La Grande Muraille de Chine</li>
            <li class="existe">Pétra</li>
            <Li class="existe">Le Christ du Corcovado</Li>
            <Li class="existe">Machu Picchu</Li>
            <li class="existe">Chichén Itzá</li>
            <li class="existe">Le Colisée</li>
            <li class="existe">Le Taj Mahal</li>
        </ul>
        <h2>Références</h2>
        <ul>
            <li><a href="https://fr.wikipedia.org/wiki/Sept_merveilles_du_monde">Merveilles antiques</a></li>
            <li><a href="https://fr.wikipedia.org/wiki/Sept_nouvelles_merveilles_du_monde">Nouvelles merveilles</a></li>
        </ul>
    </div>

    <script src="../js/cours.js"></script>
</body>

</html>
_________________________________________________ 2 Sélectionner des éléments_____________________________________________________________________

----------------------------------------2.1 Les limites du parcours du DOM nœud par nœud------------------------------------------------------------

Imaginons qu'on souhaite sélectionner le titre "Merveilles du monde antique" de notre page web d'exemple. 
En prenant en compte les nœuds textuels vides associés aux espaces et aux retours à la ligne, 
il s'agit du deuxième nœud enfant du sixième nœud enfant du nœud body. On pourrait donc l'afficher en écrivant le code ci-dessous.*/

console.log(document.body.childNodes[5].childNodes[1]);

/*Cette technique fonctionne, mais montre vite ses limites. Le code de sélection devient difficile à lire lorsque la structure de la page 
se complexifie. De plus, il risque de devenir erroné en cas de modification ultérieure de la structure.
Pour sélectionner notre titre, il serait bien plus pratique de pouvoir simplement écrire "Je veux obtenir le premier titre h2 du document". 
Ça tombe bien, c'est possible. */

/*---------------------------------------------2.2 Sélection d'éléments selon leur balise-----------------------------------------------------------------

Tous les éléments du DOM possèdent une méthode getElementsByTagName. Celle-ci renvoie une liste des éléments qui portent le nom de la balise 
qui a été passée en paramètre lors de l'appel. 
La recherche s'effectue sur l'ensemble des sous-éléments du nœud sur lequel la méthode est appelée, et pas seulement ses enfants directs.
Avec cette méthode, la sélection du premier titre h2 de notre page d'exemple devient plus facile !﻿﻿*/

var titresElts = document.getElementsByTagName("h2"); // Tous les titres h2
console.log(titresElts[0]); // Affiche le premier titre h2
console.log(titresElts.length); // Affiche 3

/*Le titre sélectionné correspond au premier élément de la liste renvoyée par l'appel de getElementsByTagName. 
On vérifie au passage que cette liste contient bien trois éléments.﻿﻿﻿﻿
Le nom de la variable titresElts stockant la liste des titres se termine par Elts, abréviation de "éléments". 
Cela permet d'indiquer que le contenu de cette variable correspond à des éléments du DOM, et non à de simples valeurs. 
Il s'agit d'une bonne pratique que nous allons adopter pour toute la suite de ce cours. 
Une variable stockant un seul élément du DOM sera suffixée par Elt, abréviation de "élément".*/

/*-------------------------------------------2.3 Sélection d'éléments selon leur classe--------------------------------------------------------------------

Les éléments du DOM disposent également d'une méthode getElementsByClassName. 
Elle renvoie une liste des éléments ayant le nom de classe passé en paramètre. 
Là encore, la recherche concerne l'ensemble des sous-éléments du nœud sur laquelle la méthode est appelée.﻿﻿﻿
Pour sélectionner et afficher l'ensemble des éléments du document ayant pour classe "merveilles", vous pouvez écrire le code ci-dessous.﻿ :*/

//Tous les éléments ayant la classe "merveilles"
var merveillesElts = document.getElementsByClassName("merveilles");
for (var i = 0; i < merveillesElts.length; i++) {
    console.log(merveillesElts[i]);
}
//On obtient l'affichage des deux listes (balises <ul>) attendues, mais pas de la troisième qui ne possède pas la classe "merveilles".

/*------------------------------------------2.4 Sélection d'un élément selon son identifiant-----------------------------------------------------------

Enfin, chaque élément du DOM propose une méthode getElementById qui renvoie parmi tous ses sous-éléments celui possédant l'identifiant passé 
en paramètre.
Le code ci-dessous permet de sélectionner et d'afficher la liste portant l'identifiant "nouvelles".*/
// Elément portant l'identifiant "nouvelles"
console.log(document.getElementById("nouvelles"));

/*-------------------------------------------2.5 Sélection d'éléments à partir d'un sélecteur CSS-----------------------------------------------------

Les méthodes de sélection que nous venons d'étudier constituent un net progrès par rapport à un parcours nœud par nœud du DOM. 
Malgré tout, il existe des cas de figure pour lesquels on souhaiterait plus de souplesse.
Exemple : imaginons qu'on souhaite obtenir toutes les éléments <li> correspondant à des merveilles antiques qui existent toujours. 
Elles sont identifiées par la classe "existe" dans la page web. Pour les sélectionner, on pourrait écrire le code ci-dessous.﻿﻿*/
// Tous les éléments fils de l'élément d'identifiant "antiques" ayant la classe "existe"
console.log(document.getElementById("antiques").getElementsByClassName("existe").length); // Affiche 1

/*Cependant, cette syntaxe est un peu lourde et sujette aux erreurs. 

Pour faciliter la sélection d'éléments suivant des critères complexes, le DOM s'est enrichi de deux nouvelles méthodes. 
La première, nommée querySelectorAll, permet de rechercher des éléments à partir d'un sélecteur CSS. 
Grâce à cette méthode, on peut rechercher des éléments du DOM en définissant un sélecteur identique à celui qu'on utiliserait dans 
une feuille de style CSS. Elle renvoie la liste des éléments correspondant au sélecteur passé en paramètre.

Voici quelques exemples des possibilités offertes par cette méthode :*/

// Tous les paragraphes
console.log(document.querySelectorAll("p").length); // Affiche 3

// Tous les paragraphes à l'intérieur de l'élément identifié par "contenu"
console.log(document.querySelectorAll("#contenu p").length); // Affiche 2

// Tous les éléments ayant la classe "existe"
console.log(document.querySelectorAll(".existe").length); // Affiche 8

//Voici comment on peut utiliser querySelectorAll pour sélectionner les merveilles antiques qui existent toujours :
// Tous les éléments fils de l'élément identifié par "antiques" ayant la classe "existe"
console.log(document.querySelectorAll("#antiques > .existe").length); // Affiche 1

/*L'autre méthode de recherche d'éléments à partir d'un sélecteur CSS s'appelle querySelector. 
Elle fonctionne de manière identique à querySelectorAll, mais renvoie uniquement le premier élément correspondant au sélecteur passé en paramètre.﻿ :*/
// Le premier paragraphe
console.log(document.querySelector("p"));

/*______________________________________________2.6 Choix de la méthode de sélection_________________________________________________________________

Nous venons d'étudier plusieurs méthodes de sélection d'éléments du DOM. En fonction du besoin, vous aurez à choisir la solution la plus adaptée.
En théorie, il serait possible d'utiliser systématiquement les méthodes querySelectorAll et querySelector. Cependant, 
celles-ci souffrent d'un déficit de performances par rapport aux méthodes getElementsByTagName, getElementsByClassName et getElementById.

Je vous conseille donc d'adopter une approche pragmatique présentée dans le tableau ci-dessous.﻿ :


Nombre d'éléments à obtenir-----------------------Critère de sélection---------------------------------Méthode à utiliser


Plusieurs_____________________________________________Par balise______________________________________getElementsByTagName

Plusieurs_____________________________________________Par classe______________________________________getElementsByClassName

Plusieurs___________________________________Autre que par balise ou par classe________________________querySelectorAll

Un seul_______________________________________________Par identifiant_________________________________getElementById

Un seul (le premier)________________________Autre que par identifiant_________________________________querySelector*/


/*_____________________________________________ 3 Obtenir des informations sur les éléments_________________________________________________________

Le DOM permet également d'obtenir des informations sur des éléments sélectionnés.﻿﻿

----------------------------------------------------3.1 Le contenu HTML------------------------------------------------------------------------------
La propriété innerHTML permet de récupérer tout le contenu HTML d'un élément du DOM.*/

// Le contenu HTML de l'élément identifié par "contenu"
console.log(document.getElementById("contenu").innerHTML);
/*Cette propriété a été introduite par Microsoft et ne fait pas partie de la spécification DOM du W3C, 
mais elle est maintenant prise en charge par tous les principaux navigateurs.*/

/*---------------------------------------------------3.2 Le contenu textuel--------------------------------------------------------------------------
La propriété textContent renvoie tout le contenu textuel d'un élément du DOM, sans l'éventuel balisage HTML.﻿﻿

// Le contenu textuel de l'élément identifié par "contenu"*/
console.log(document.getElementById("contenu").textContent);

/*----------------------------------------------------3.3 Les attributs-------------------------------------------------------------------------
La méthode getAttribute peut être appliquée à un élément du DOM et renvoie la valeur de l'attribut passé en paramètre.﻿﻿

// L'attribut href du premier lien*/
console.log(document.querySelector("a").getAttribute("href"));

/*Certains attributs sont directement accessibles sous la forme de propriétés. C'est notamment le cas pour les attributs id, href et value.

// L'identifiant de la première liste*/
console.log(document.querySelector("ul").id);

// L'attribut href du premier lien
console.log(document.querySelector("a").href);

/*On peut vérifier la présence d'un attribut sur un élément grâce à la méthode hasAttribute, comme dans l'exemple ci-après.*/

if (document.querySelector("a").hasAttribute("target")) {
    console.log("Le premier lien possède l'attribut target");
} else {
    console.log("Le premier lien ne possède pas l'attribut target");
}

/*-----------------------------------------------------------3.4 Les classes------------------------------------------------------------------
Dans une page web, une balise peut posséder plusieurs classes. 
La propriéte classList permet de récupérer la liste des classes d'un élément du DOM. Elle s'utilise comme un tableau.

// Liste des classes de l'élément identifié par "antiques"*/
var classes = document.getElementById("antiques").classList;
console.log(classes.length); // Affiche 1 : l'élément possède une seule classe
console.log(classes[0]); // Affiche "merveilles"

/*Vous avez aussi la possibilité de tester la présence d'une classe dans un élément en appelant la méthode contains sur la liste des classes.﻿﻿﻿*/

if (document.getElementById("antiques").classList.contains("merveille")) {
    console.log("L'élément identifié par antiques possède la classe merveille");
} else {
    console.log("L'élément identifié par antiques ne possède pas la classe merveille");
}

/*==============================================================En résumé========================================================================

-Ce chapitre nous a permis de découvrir comment parcourir la structure DOM d'une page web. Voici les informations à retenir :

-Plutôt que de parcourir le DOM nœud par nœud, on peut accéder rapidement à un ou plusieurs éléments en utilisant des (méthodes de sélection).

-Les méthodes getElementsByTagName, getElementsByClassName et getElementById permettent respectivement de rechercher des éléments par nom de balise, 
par classe et par identifiant. Les deux premières méthodes renvoient une liste, la dernière renvoie un seul élément.

-Les méthodes querySelectorAll et querySelector(juste le premier) permettent de rechercher des éléments en utilisant un sélecteur CSS. 
La première méthode renvoie tous les éléments correspondants, la seconde renvoie uniquement le premier.

-La propriété innerHTML renvoie le contenu HTML d'un élément. La propriété textContent renvoie son contenu textuel, sans le balisage HTML.

-Les méthodes getAttribute et hasAttribute permettent d'accéder aux attributs d'un élément.

-La propriété classList et sa méthode contains permettent d'accéder aux classes d'un élément.