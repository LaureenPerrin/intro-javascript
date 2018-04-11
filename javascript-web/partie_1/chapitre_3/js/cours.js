/*____________________________________________________Modifiez la structure de la page________________________________________________________________

Vous allez maintenant apprendre à utiliser JavaScript pour modifier une page web après son chargement par le navigateur. 
Le contenu affiché va pouvoir évoluer au gré de vos envies afin de rendre la page plus dynamique et interactive.

___________________________________________________________1 La page web d'exemple___________________________________________________________________

Les exemples de ce chapitre utilisent tous la page web ci-dessous :

<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title>Quelques langages</title>
</head>

<body>
    <h1 class="debut">Quelques langages</h1>
    <div id="contenu">
        <ul id="langages">
            <li id="cpp">C++</li>
            <li id="java">Java</li>
            <li id="csharp">C#</li>
            <li id="php">PHP</li>
        </ul>
    </div>

    <script src="../js/cours.js"></script>
</body>

</html>

___________________________________________________1 Modifier un élément existant_________________________________________________________________

Les propriétés étudiées au chapitre précédent pour obtenir des informations sur un élément de la page permettent également de mettre à 
jour ces informations.
---------------------------------------------------------1.1 Le contenu HTML-----------------------------------------------------------------------------

La propriété innerHTML peut être utilisée pour modifier le contenu HTML d'un élément du DOM. 

Par exemple, on peut ajouter un nouveau langage à notre liste grâce au code ci-dessous. 
On accède à la balise <ul> identifiée par "langages", puis on lui ajoute (opérateur +=) une entrée sous la forme d'une balise <li> :*/

// Modification du contenu HTML de la liste : ajout d'un langage
document.getElementById("langages").innerHTML += '<li id="c">C</li>';

/* innerHTML  est souvent employée pour "vider" un élément de tout son contenu. Tapez l'exemple suivant pour le vérifier : */
// Suppression du contenu HTML de la liste
/* document.getElementById("langages").innerHTML = ""; */

/* L'utilisation de innerHTML conduit à manipuler des chaînes de caractères pour représenter des éléments HTML ainsi que leurs propriétés. 
Afin de préserver la lisibilité du code et d'éviter les erreurs, il convient de réserver son utilisation à de petites modifications. 
Vous découvrirez plus loin une solution plus universelle pour ajouter des éléments au DOM.*/

/*-----------------------------------------------------1.2 Le contenu textuel-------------------------------------------------------------------------

La propriété textContent permet de modifier le contenu textuel d'un élément du DOM. 
Voici par exemple comment compléter le titre affiché par notre page :*/

// Modification du contenu textuel du premier titre
document.querySelector("h1").textContent += " de programmation";

/*---------------------------------------------------------1.3 Les attributs--------------------------------------------------------------------------

La méthode setAttribute permet de définir la valeur de l'un des attributs d'un élément. 
Elle prend en paramètres le nom et la valeur de cet attribut.*/

// Définition de l'attribut "id" du premier titre
document.querySelector("h1").setAttribute("id", "titre");

//Certains attributs comme id, href et value sont directement modifiables sous la forme de propriétés. Le code ci-dessous est équivalent au précédent :

document.querySelector("h1").id = "titre";

/*----------------------------------------------------------1.4 Les classes----------------------------------------------------------------------------

On peut utiliser la propriété classList pour ajouter ou supprimer des classes à un élément du DOM. 
Pour cela, on emploie les méthodes add(ajout) et remove(suppression), comme dans l'exemple suivant :*/

var titreElt = document.querySelector("h1"); // Accès au premier titre h1
titreElt.classList.remove("debut"); // Suppression de la classe "debut"
titreElt.classList.add("titre"); // Ajout de la classe "titre"
console.log(titreElt);

/*______________________________________________________2 Ajouter un nouvel élément___________________________________________________________________

L'ajout d'un nouvel élément à une page web peut se décomposer en trois opérations :

-Création du nouvel élément.
-Définition des informations de l'élément.
-Insertion du nouvel élément dans le DOM.

Par exemple, imaginons que l'on souhaite ajouter le langage "Python" à la liste des langages de notre page. 
Voici le code JavaScript qui permet d'obtenir ce résultat :*/

var pythonElt = document.createElement("li"); // Création d'un élément li
pythonElt.id = "python"; // Définition de son identifiant
pythonElt.textContent = "Python"; // Définition de son contenu textuel
document.getElementById("langages").appendChild(pythonElt); // Insertion du nouvel élément

/*--------------------------------------------------------2.1 Création de l'élément-------------------------------------------------------------------

La création d'un élément s'effectue grâce à une méthode nommée createElement (quelle surprise).
Elle s'utilise sur l'objet document et prend en paramètre le nom de balise du nouvel élément. 
Elle renvoie l'élément créé sous la forme d'un objet, stocké ici dans la variable nommée pythonElt  pour pouvoir être modifié puis inséré dans
le DOM.*/

var pythonElt = document.createElement("li"); // Création d'un élément li


/*-----------------------------------------------2.2 Définition des informations de l'élément----------------------------------------------------------

Une fois l'élément créé et stocké dans une variable, on définit ses informations (contenu, identifiant, classe, etc) 
en utilisant les propriétés présentées plus haut. Ici, l'élément créé a pour identifiant "python" et pour contenu textuel "Python".*/

pythonElt.id = "python"; // Définition de son identifiant
pythonElt.textContent = "Python"; // Définition de son contenu textuel


/*-----------------------------------------------2.3 Insertion du nouvel élément dans le DOM------------------------------------------------------------

Il existe plusieurs techniques pour insérer un nouveau noeud dans le DOM. La plus courante consiste à appeler la méthode appendChild 
sur l'élément qui sera le futur parent du nouveau noeud. Le nouveau noeud est ajouté à la fin de la liste des noeuds enfants de ce parent.

Dans notre exemple, le nouvel élément est ajouté comme nouveau fils de la balise <ul> identifiée par "langages", 
après tous les autres fils de cette balise.*/

document.getElementById("langages").appendChild(pythonElt); // Insertion du nouvel élément



/*___________________________________________________3 Variantes pour ajouter un élément_____________________________________________________________

/*-------------------------------------------------------3.1 Création d'un noeud textuel---------------------------------------------------------------

Dans l'exemple précédent, nous avons défini le contenu textuel du nouvel élément à l'aide de la propriété textContent. 
Il est possible d'aboutir au même résultat en ajoutant au nouvel élément un noeud fils de type texte. 
Pour cela, on utilise la méthode createTextNode qui, comme son nom l'indique, crée un nouveau noeud de type texte. 
Ensuite, on ajoute le noeud texte à l'élément avec appendChild.

Il est possible de combiner les deux opérations en une seule ligne, comme dans cet exemple qui ajoute le langage "Ruby" à la liste.*/

var rubyElt = document.createElement("li"); // Création d'un élément li
rubyElt.id = "ruby"; // Définition de son identifiant
rubyElt.appendChild(document.createTextNode("Ruby")); // Définition de son contenu textuel
document.getElementById("langages").appendChild(rubyElt); // Insertion du nouvel élément

/*-------------------------------------------------3.2 Ajout d'un noeud avant un autre noeud-----------------------------------------------------------

On souhaite parfois insérer un nouvel élément ailleurs que comme dernier fils de son élément parent. 
Dans notre exemple, on pourrait vouloir ajouter le langage Perl avant le langage PHP dans la liste. 
Pour cela, il existe la méthode insertBefore. On l'appelle sur le futur élément parent et on lui passe en paramètres le nouveau noeud 
ainsi que le noeud avant lequel le nouveau noeud sera inséré.

Par exemple, le code suivant ajoute le langage Perl avant le langage PHP dans la liste :*/

var perlElt = document.createElement("li"); // Création d'un élément li
perlElt.id = "perl"; // Définition de son identifiant
perlElt.textContent = "Perl"; // Définition de son contenu textuel
// Ajout du nouvel élément avant l'identifiant identifié par "php"
document.getElementById("langages").insertBefore(perlElt, 
    document.getElementById("php"));

/*-----------------------------------------------3.3 Choix de la position exacte du nouveau noeud---------------------------------------------------------

Il existe également une méthode plus récente qui permet de définir encore plus précisément la position des éléments insérés :
insertAdjacentHTML. On l'appelle sur un élément existant et elle prend en paramètres une position et une chaîne de caractères HTML 
qui représente le nouveau contenu à ajouter. La position du nouveau contenu doit être une valeur parmi :

-beforebegin: avant l'élément existant lui-même.

-afterbegin: juste à l'intérieur de l'élément existant, avant son premier enfant.

-beforeend: juste à l'intérieur de l'élément existant, après son dernier enfant.

-afterend: après l'élément existant lui-même.

L'exemple ci-dessous utilise insertAdjacentHTML pour ajouter le langage JavaScript au tout début de la liste :*/

// Ajout d'un élément au tout début de la liste
document.getElementById('langages').insertAdjacentHTML("afterBegin", 
    '<li id="javascript">JavaScript</li>');

/*___________________________________________________4 Remplacer ou supprimer un noeud_________________________________________________________

-------------------------------------------------------4.1 Remplacer un noeud existant------------------------------------------------------------

Le remplacement d'un élément du DOM par un autre s'effectue au moyen de la méthode replaceChild. 
Celle-ci remplace un nœud enfant de l'élément courant par un autre nœud.
Elle prend en paramètres (dans cet ordre) le nouveau noeud et celui qui est remplacé.

L'exemple ci-dessous permet de remplacer le langage Perl par un nouvel élément correspondant au langage Bash :*/

var bashElt = document.createElement("li"); // Création d'un élément li
bashElt.id = "bash"; // Définition de son identifiant
bashElt.textContent = "Bash"; // Définition de son contenu textuel
// Remplacement de l'élément identifié par "perl" par le nouvel élément
document.getElementById("langages").replaceChild(bashElt, document.getElementById("perl"));

/*----------------------------------------------------4.2 Supprimer un noeud existant--------------------------------------------------------------

Enfin, il est possible de supprimer un noeud à l'aide de la méthode removeChild. Elle prend en paramètre le noeud à supprimer du DOM.*/

// Suppression de l'élément identifié par "bash"
document.getElementById("langages").removeChild(document.getElementById("bash"));

/*_________________________________________________5 Manipulation du DOM et performances____________________________________________________________

D'une manière générale, il est conseillé de limiter au strict nécessaire le nombre d'opérations de manipulation du DOM effectuées avec JavaScript. 
En effet, elles peuvent nécessiter des calculs importants de la part du navigateur pour parcourir et mettre à jour le DOM de la page. 
Ces temps de traitements cumulés contribuent à ralentir l'affichage.

La création et la modification des nouveaux éléments avant leur insertion dans le DOM est également une bonne pratique qui permet de préserver 
au maximum les performances. 

==============================================================En résumé===========================================================================

Ce chapitre nous a permis de découvrir comment modifier la structure d'une page web. Voici ce que vous devez en retenir :

-Les propriétés innerHTML, textContent et classList ainsi que la méthode setAttribute permettent de modifier les informations d'un élément du DOM.

-La création d'un nouveau noeud s'effectue avec les méthodes createTextNode pour un noeud textuel et createElement pour un élément.

-La méthode appendChild permet d'insérer un nouveau noeud comme dernier enfant d'un élément du DOM.

-Les méthodes insertBefore et insertAdjacentHTML offrent des possibilités alternatives pour ajouter  du contenu.

-On peut remplacer un noeud existant avec la méthode replaceChild ou le supprimer avec removeChild.

-La manipulation du DOM en JavaScript doit se faire de manière raisonnée afin de ne pas dégrader les performances.


/*------------------------------exercice chapitre 3--------------------------------------------------------------*/

document.getElementById('contenu').insertAdjacentHTML("beforeend", 
    '<p>En voici une <a href="https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation">liste</a> plus complète.</p>');
