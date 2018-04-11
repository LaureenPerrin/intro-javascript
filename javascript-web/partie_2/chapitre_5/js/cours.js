/*________________________________________________________Réagissez à des événements________________________________________________________________

Rendre une page web interactive nécessite de répondre aux actions effectuées par son visiteur : nous allons découvrir comment faire dans 
ce chapitre.

__________________________________________________________1 Introduction aux événements_______________________________________________________________

Les programmes JavaScript que nous avons écrits jusqu'ici s'exécutaient automatiquement dès leur chargement par la page web. 
L'ordre d'exécution des instructions était déterminé à l'avance et les interactions avec l'utilisateur se limitaient à la saisie 
de valeurs au moyen de l'instruction prompt.

Pour augmenter le niveau d'interactivité, il faut que la page puisse réagir au comportement de l'utilisateur : 
clic sur un bouton ou un lien, remplissage d'un formulaire, etc. 
Dans ce cas, l'ordre d'exécution des instructions n'est pas prévisible à l'avance : il dépend des actions de l'utilisateur. 
Ces actions déclenchent des événements auxquels la page va pouvoir réagir via du code JavaScript.

Ce mode de fonctionnement est appelé programmation événementielle. Il est utilisé par les interfaces graphiques et toutes 
les applications en interaction avec un utilisateur.

_________________________________________________________________2 Un premier exemple________________________________________________________________

------------------------------------------------------------------2.1 La page web initiale-------------------------------------------------------------*/
/*<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title>Gestion des événements</title>
</head>

<body>
    <button id="bouton">Cliquez-moi !</button>

    <script src="../js/cours.js"></script>
</body>

</html>*/

function clic() {
    console.log("Clic !");
}

var boutonElt = document.getElementById("bouton");
// Ajout d'un gestionnaire pour l'événement click
boutonElt.addEventListener("click", clic);/*type event*//*fonction qui gère l'event*/

/*Après vous être assuré(e) que la console du navigateur était affichée, cliquez sur le bouton "Cliquez-moi !" de la page web. 
Une nouvelle ligne apparaît dans la console : la page a réagi à l'action de l'utilisateur.
À chaque clic sur le bouton de la page, une nouvelle ligne est ajoutée dans la console du navigateur. 
Lorsque les lignes ajoutées sont identiques, Firefox indique leur nombre sous la forme d'un numéro en rouge à droite de cette ligne.


------------------------------------------------------------2.2 Ajout d'un gestionnaire d'événement---------------------------------------------------

Étudions le code source du fichier cours.js. 
On commence par définir une fonction nommée clic qui ajoute une ligne dans la console. 
Ensuite, on récupère l'élément bouton du DOM puis on lui ajoute un gestionnaire d'événement. 

Appelée sur un élément du DOM, la méthode addEventListener lui ajoute un gestionnaire pour un événement particulier. 
Cette méthode prend deux paramètres : le type de l'événement et la fonction qui gère l'événement. 
Cette fonction sera appelée à chaque fois que l'événement se déclenchera sur l'élément.

Dans notre exemple, le clic sur le bouton (événement click) déclenchera l'appel de la fonction clic.
Il est possible d'utiliser une syntaxe un peu plus concise en définissant la fonction appelée au moment de l'appel à addEventListener. 
Le code ci-dessous est fonctionnellement identique au précédent :*/
var boutonElt = document.getElementById("bouton");
// Ajout d'un gestionnaire pour l'événement click
boutonElt.addEventListener("click", function () {
    console.log("clic");
});
/*Dans ce cas, la fonction n'est plus identifiée par un nom et ne peut plus être utilisée ailleurs dans le programme. 
Il s'agit d'une fonction anonyme. Les (fonctions anonymes) sont fréquemment utilisées en JavaScript.


----------------------------------------------------------2.3 Suppression d'un gestionnaire d'événement------------------------------------------------

Il peut arriver que vous ne souhaitiez plus gérer un type d'événement sur un élément du DOM. 
Dans ce cas, appelez la méthode removeEventListener sur cet élément, en lui passant en paramètre la fonction qui gérait l'événement.

Pour pouvoir utiliser removeEventListener, il faut que la fonction qui gère l'événement n'ait pas été définie de manière anonyme.

Ajoutez la ligne suivante à la fin du fichiercours.js pour que le clic sur le bouton ne soit plus géré par la fonction clic.*/

// Suppression du gestionnaire pour l'événement click
boutonElt.removeEventListener("click", clic);


/*_____________________________________________________3 La grande famille des événements_____________________________________________________________

Les événements que les éléments du DOM peuvent déclencher sont très nombreux. 
Le tableau ci-dessus présente les principales catégories d'événements :

_____________________Catégorie_____________________________________Exemples____________________________________________________________________

Événements clavier====================================Appui ou relâchement d'une touche du clavier

Événements souris=====================================Clic avec les différents boutons, appui ou relâchement d'un bouton de la souris, 
                                                      survol d'une zone avec la souris

Événements fenêtre====================================Chargement ou fermeture de la page, redimensionnement, défilement (scrolling)

Événements formulaire=================================Changement de cible de saisie (focus), envoi d'un formulaire

Quel que soit le type d'événement, son déclenchement s'accompagne de la création d'un objet Event qui peut être utilisé par 
la fonction qui gère l'événement. Cet objet dispose de propriétés qui fournissent des informations sur l'événement, et de méthodes 
qui permettent d'agir sur celui-ci. 

La plupart des propriétés de l'objet Event dépendent du type d'événement déclenché. 
Parmi les propriétés présentes dans Event, quel que soit le type d'événement, (type) renvoie le type et (target) renvoie la cible de l'événement, 
c'est-à-dire l'élément du DOM auquel l'événement est destiné.

Le code ci-dessous utilise l'objet Event pour afficher le type de l'événement déclenché ainsi que le texte de l'élément cible lors 
d'un clic sur le bouton de notre page web. Cet objet est fourni à la fonction qui gère l'événement sous la forme d'un paramètre nommé e. 
Le choix du nom du paramètre est libre, et vous pourrez rencontrer également le nom event :*/

// Ajout d'un gestionnaire qui affiche le type et la cible de l'événement
document.getElementById("bouton").addEventListener("click", function (e) {
    console.log("Evènement : " + e.type + 
        ", texte de la cible : " + e.target.textContent);
});

/*___________________________________________________4 Gestion des événements les plus courants_____________________________________________________

---------------------------------------------------------4.1 Appui sur une touche du clavier-----------------------------------------------------------

La solution la plus courante pour réagir à l'appui sur une touche du clavier consiste à gérer les événements de type keypress 
déclenchés sur le corps de la page web (élément body du DOM, correspondant en JavaScript à la variable globale document).

L'exemple suivant permet d'afficher dans la console le caractère associé à la touche frappée. 
Ici, l'information sur ce caractère est fournie sous la forme de la propriété charCode de l'objet Event(le paramètre e). 
Il s'agit de la valeur numérique (appelée valeur Unicode) associée au caractère. 
La méthode String.fromCharCode permet de traduire cette valeur en une chaîne représentant le caractère.*/

// Gestion de l'appui sur une touche du clavier produisant un caractère
document.addEventListener("keypress", function (e) {
    console.log("Vous avez appuyé sur la touche " + String.fromCharCode(e.charCode/*valeur unicode=numérique*/));
});

/*Pour gérer l'appui et le relâchement sur n'importe quelle touche du clavier (pas seulement celles qui produisent des caractères), 
on utilise les événements keydown et keyup.

L'exemple suivant utilise la même fonction pour gérer ces deux événements. 
Cette fois-ci, le code de la touche est accessible dans la propriété keyCode de l'objet Event :*/

// Affiche des informations sur un événement clavier
function infosClavier(e) {
    console.log("Evènement clavier : " + e.type + ", touche : " + e.keyCode);
}

// Gestion de l'appui et du relâchement d'une touche du clavier
document.addEventListener("keydown", infosClavier);
document.addEventListener("keyup", infosClavier);
/*On constate que l'ordre de déclenchement des événements clavier est le suivant :keydown->keypress->keyup.

Lors d'un appui prolongé sur une touche, l'événement keydown est déclenché plusieurs fois.*/

/*-------------------------------------------------4.2 Clic sur un bouton de la souris---------------------------------------------------------------

Le clic souris sur n'importe quel élément du DOM déclenche l'apparition d'un événement de type click.

Dans le cas d'une interface tactile (tablette, smartphone), l'événement click associé à un bouton est déclenché par l'appui avec le doigt 
sur ce bouton.

L'objet Event associé à un événement de type click contient (entre autres) une propriété button qui permet de connaître 
le bouton de la souris utilisé, ainsi que des propriétés clientX et clientY qui renvoient les coordonnées horizontales et verticales 
de l'endroit où le clic s'est produit. Ces coordonnées sont définies par rapport à la zone de la page actuellement affichée par le navigateur. 

L'exemple de code ci-dessous affiche des informations sur tous les événements click déclenchés sur la page web. 
Ces événements sont gérés par une fonction nommée infosSouris. 
Elle-même utilise une fonction getBoutonSouris pour déduire le nom du bouton de la souris cliqué, 
à partir de son code fourni par la propriété button de l'objet Event :*/

// Renvoie le nom du bouton souris à partir de son code
function getBoutonSouris(code) {
    var bouton = "inconnu";
    switch (code) {
    case 0: // 0 est le code du bouton gauche
        bouton = "gauche";
        break;
    case 1: // 1 est le code du bouton du milieu
        bouton = "milieu";
        break;
    case 2: // 2 est le code du bouton droit
        bouton = "droit";
        break;
    }
    return bouton;
}

// Affiche des informations sur un événement souris
function infosSouris(e) {
    console.log("Evènement souris : " + e.type + ", bouton " +
        getBoutonSouris(e.button) + ", X : " + e.clientX + ", Y : " + e.clientY);
}

// Gestion du clic souris
document.addEventListener("click", infosSouris);

/*De manière similaire aux événements clavier, on peut utiliser les événements mousedown et mouseup pour détecter l'appui et le relâchement 
d'un bouton de la souris.

Ajoutez le code ci-dessous pour associer le même gestionnaire à ces deux événements :*/

// Gestion de l'appui et du relâchement d'un bouton de la souris
document.addEventListener("mousedown", infosSouris);
document.addEventListener("mouseup", infosSouris);
/*On constate que l'ordre de déclenchement des événements souris est le suivant :mousedown->mouseup->click.


-------------------------------------------------------4.3 Fin du chargement de la page web-----------------------------------------------------------

En fonction de sa complexité, une page web peut mettre un certain temps à être entièrement chargée par un navigateur. 
Il est possible de détecter la fin du chargement de la page en ajoutant un gestionnaire pour l'événement load sur l'objet window, 
qui représente la fenêtre du navigateur. Cela permet d'éviter d'interagir via JavaScript avec des parties de la page non encore chargées.

L'exemple de code suivant affiche un message dans la console lorsque la page web est entièrement chargée :*/

// Gestion de la fin du chargement de la page web
window.addEventListener("load", function () {
    console.log("Page entièrement chargée");
});



/*-----------------------------------------------------------4.4 Fermeture de la page web------------------------------------------------------------

On peut parfois vouloir détecter la fermeture d'une page web, qui se produit lorsque l'utilisateur ferme l'onglet qui l'affiche ou navigue 
vers une autre page dans cet onglet. Un cas d'utilisation fréquent consiste à afficher une demande de confirmation. 
Pour cela, il faut ajouter un gestionnaire pour l'événement beforeunload sur l'objet window, comme dans l'exemple suivant :*/

// Gestion de la fermeture de la page web
window.addEventListener("beforeunload", function (e) {
    var message = "On est bien ici !";
    e.returnValue = message; // Provoque une demande de confirmation (standard)
    return message; // Provoque une demande de confirmation (certains navigateurs)
});
/*En théorie, c'est la modification de la propriété returnValue de l'objet Event qui suspend la fermeture de la page et 
provoque l'apparition d'une boîte de dialogue de confirmation affichant la valeur de cette propriété. 
Cependant, certains navigateurs se basent sur la valeur de retour de la fonction qui gère l'événement plutôt que sur la propriété returnValue. 
Le code ci-dessus associe les deux techniques et fonctionne quel que soit le navigateur utilisé.

Firefox se comporte de manière spécifique sur ce point : il ne déclenche l'événement beforeunload que si l'utilisateur a interagi 
avec la page avant de la fermer, et n'affiche pas la valeur dereturnValuedans la boîte de dialogue de confirmation.*/


/*________________________________________________________5 Aller plus loin avec les événements_________________________________________________________

-------------------------------------------------------5.1 Comprendre la propagation des événements------------------------------------------------------

Le DOM représente une page web sous la forme d'une hiérarchie de noeuds. 
Les événements déclenchés sur un noeud enfant vont se déclencher ensuite sur son noeud parent, puis sur le parent de celui-ci, 
et ce jusqu'à la racine du DOM (la variable document). C'est ce qu'on appelle la propagation des événements.

Ce code ajoute des gestionnaires pour les événements de type click sur le bouton, son parent (le paragraphe) et le parent de celui-ci 
(la racine du DOM) :*/

// Gestion du clic sur le document
document.addEventListener("click", function () {
    console.log("Gestionnaire document");
});
// Gestion du clic sur le paragraphe
document.getElementById("para").addEventListener("click", function () {
    console.log("Gestionnaire paragraphe");
});
// Gestion du clic sur le bouton
document.getElementById("propa").addEventListener("click", function (e) {
    console.log("Gestionnaire bouton");
});

/*Le résultat obtenu dans le navigateur illustre la propagation de l'événement click depuis le bouton jusqu'au document.

La propagation des événements peut être interrompue à tout moment en appelant la méthode stopPropagation sur l'objet Event 
depuis une fonction qui gère un événement. C'est utile pour éviter qu'un même événement soit géré plusieurs fois.

L'ajout d'une ligne dans le gestionnaire d'événement du bouton empêche l'événement click de se propager dans l'arborescence du DOM :*/

// Gestion du clic sur le bouton
document.getElementById("propa").addEventListener("click", function (e) {
    console.log("Gestionnaire bouton");
    e.stopPropagation(); // Arrêt de la propagation de l'événement
});

/*-----------------------------------------5.2 Modifier le comportement par défaut en cas d'événement--------------------------------------------------

La plupart des événements sont associés à une action par défaut. 
Le clic sur un lien déclenche la navigation vers la cible de ce lien, 
le clic avec le bouton droit de la souris affiche un menu contextuel, etc. 
Il est possible d'annuler ce comportement par défaut en appelant la méthode preventDefault sur l'objet Event.*/
// Gestion du clic sur le lien interdit
document.getElementById("interdit").addEventListener("click", function (e) {
    console.log("Continuez plutôt à lire le cours ;)");
    e.preventDefault(); // Annulation de la navigation vers la cible du lien
});

/*Sans une raison valable, il est fortement déconseillé de modifier le comportement standard des éléments de votre page. 
Vous risquez surtout d'agacer prodigieusement vos utilisateurs.*/



/*===================================================================En résumé===================================================================

Voici les principales informations à retenir de ce chapitre :

-On peut rendre une page web interactive en écrivant du code JavaScript qui réagit aux événements déclenchés sur la page.

-De nombreux types d'événements peuvent être gérés. 
Chaque type d'événement est associé à un objet Event spécifique qui apporte des informations sur l'événement via ses propriétés.

-Les événements keypress, keydown et keyup permettent de réagir à l'utilisation du clavier.

-Les événements click, mousedown et mouseup permettent de gérer les interactions avec la souris.

-Le chargement et la fermeture de la page web sont associés aux événements load et beforeunload.

-Un événement se propage dans l'arborescence du DOM depuis son noeud d'origine jusqu'à la racine du document. 
Cette propagation peut être interrompue à l'aide de la méthode stopPropagation.

-Il est possible d'annuler le comportement par défaut lié à un événement en appelant la méthode preventDefault. 