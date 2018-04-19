/*____________________________________________________Interrogez un serveur web_______________________________________________________________

Nous allons découvrir comment utiliser JavaScript pour accéder à des informations publiées sur un serveur web.

___________________________________________________1 Installer un serveur web local______________________________________________________________

Pour ce chapitre, nous devons disposer d'un serveur web à interroger. Dans un premier temps, la solution la plus simple consiste à 
installer un logiciel serveur sur votre machine locale. 
Plusieurs alternatives existent : j'ai choisi d'utiliser le serveur web Apache, celui qui équipe sur la majorité des serveurs d'Internet. 
Apache est un logiciel libre, ce qui signifie entre autres que son code source est consultable et même modifiable à loisir.

-------------------------------------------------1.1  Configuration d'Apache-------------------------------------------------------------------------

Afin de pouvoir interroger notre serveur sans restriction, nous allons modifier la configuration du serveur Apache en autorisant toutes les 
requêtes cross-domain.

Il s'agit d'un réglage destiné à faciliter le développement en local sur la machine. 
Il est fortement déconseillé de paramétrer ainsi un véritable serveur sans une réflexion préalable sur les besoins.

Pour cela, il faut modifier le fichier de configuration principal d'Apache, qui se nomme httpd.conf. 
Son emplacement dépend de l'installation d'Apache. Il se trouve souvent parmi d'autres fichiers de configuration dans un répertoire nommé conf, 
lui-même situé dans le répertoire où est installé Apache.

Ouvrez le fichier httpd.conf avec un éditeur de texte (par exemple Brackets) puis recherchez la ligne ci-dessous.
LoadModule headers_module modules/mod_headers.so

Cette ligne permet d'activer le module Apache de personnalisation des en-têtes de requêtes HTTP. 
Elle ne doit pas commencer par un caractère#(qui place la suite de la ligne en commentaire). Si c'est le cas, supprimez le caractère #.
Ensuite, ajoutez les lignes suivantes à la fin du fichier.

<IfModule mod_headers.c>
    # Accept cross-domain requests
    Header always set Access-Control-Allow-Origin "*"
</IfModule>

Sauvegardez vos modifications, puis arrêtez et relancez Apache.
Toute édition d'un fichier de configuration d'Apache nécessite son redémarrage afin que les modifications soient prises en compte.

------------------------------------------------------1.2 Publication des ressources sur le serveur---------------------------------------------------

Nous allons utiliser Apache pour publier localement deux fichiers auxquels nous accèderons ensuite depuis nos pages web.

Créez dans le répertoire de travail d'Apache un répertoire javascript-web-srv, puis un répertoire data dans celui-ci. Copiez dans le 
répertoire data les fichiers langages.txt et films.json après les avoir téléchargés à cette adresse.

Vérifiez qu'Apache est bien lancé puis ouvrez l'URL http://localhost/javascript-web-srv/data dans votre navigateur web. 
Vous devez obtenir la liste des deux fichiers contenus dans le dossierdata.
Notre serveur est maintenant prêt à être interrogé par nos pages web !

________________________________________________2 Interrogez votre serveur avec JavaScript___________________________________________________________

--------------------------------------------------------2.1 Un premier exemple------------------------------------------------------------------------

Créez dans le répertoire chapitre_8/html le fichiercours.html ayant le contenu ci-dessous :

<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title>Interroger un serveur web</title>
</head>

<body>
    <h1>Quelques langages</h1>
    <ul id="langages">
    </ul>

    <script src="../js/cours.js"></script>
</body>

</html>

Il s'agit de l'exemple d'une liste de langages de programmation utilisé dans un précédent 
chapitre. Cette fois-ci, la liste des langages est initialement vide.*/

// Création d'une requête HTTP
/*var req = new XMLHttpRequest();
// Requête HTTP GET synchrone vers le fichier langages.txt publié localement
req.open("GET", "http://localhost/javascript-web-srv/data/langages.txt", false);
// Envoi de la requête
req.send(null);
// Affiche la réponse reçue pour la requête
console.log(req.responseText);*/

/*Ouvrez la page cours.html dans votre navigateur, puis affichez sa console. 
Une liste de langages s'affiche, ainsi qu'un message d'avertissement que nous expliquerons 
un peu plus loin.

On peut vérifier que cette liste de langages correspond exactement au contenu du fichier 
langages.txt publié par le serveur web.

C++;Java;C#;PHP
Grâce à JavaScript, nous avons réussi à récupérer des données provenant d'un serveur. 

------------------------------------------------2.2 L'objet XMLHttpRequest-----------------------------------------------------

Notre code JavaScript contient plusieurs nouveautés qui nécessitent des explications.

L'objet XMLHttpRequest permet de créer des requêtes HTTP en JavaScript. 
Inventé par Microsoft pour les besoins du navigateur Internet Explorer, cet objet au nom 
quelque peu bizarre a été adopté comme standard par les autres navigateurs.

Sa méthode open permet de configurer la requête HTTP avant son lancement. 
Elle prend en paramètres le type de requête HTTP (le plus souvent GET, POST ou PUT), 
l'URL cible, ainsi qu'un booléen indiquant si la requête sera asynchrone ou non (voir plus loin).

Sa méthode send envoie la requête HTTP vers l'URL cible fournie à open. 
Elle prend en paramètre l'éventuelle information envoyée au serveur (requêtes POST ou PUT), 
ou bien null dans le cas d'une requête GET.

Sa propriété responseText contient sous forme textuelle la réponse renvoyée 
par le serveur à la requête HTTP.

L'exemple de code JavaScript présenté plus haut devrait vous paraître plus clair à présent :

-La première ligne crée un nouvel objet nommé req en utilisant le constructeur XMLHttpRequest.

-La deuxième ligne configure une requête HTTP GET synchrone vers l'URL
http://localhost/javascript-web-srv/data/langages.txt.

-La troisième ligne envoie la requête vers l'URL cible.

-La quatrième ligne affiche dans la console du navigateur la réponse reçue du serveur, 
c'est-à-dire le contenu du fichier langages.txt récupéré par la requête.

-----------------------------------------------------2.3 Requêtes synchrones et requêtes asynchrones------------------------------------

Nous avons évoqué cette distinction dans le chapitre précédent. 
Une requête HTTP synchrone bloque le programme appelant jusqu'à ce que la réponse soit disponible, 
ce qui peut prendre un certain temps. C'est le sens du message d'avertissement affiché précédemment dans la console 
du navigateur.

Ce message rappelle au développeur qu'il est risqué d'utiliser des requêtes HTTP synchrones en JavaScript : 
pendant toute la durée de l'échange, la page web semblera bloquée et ne répondra plus aux actions de l'utilisateur. 

-------------------------------------------------------2.4 Passer en mode asynchrone-----------------------------------------------

OK pour utiliser des requêtes HTTP asynchrones mais... Comment savoir quand la réponse sera prête ?

Pour y arriver, nous allons employer une technique que vous connaissez déjà : les événements ! 
Grâce à eux, notre programme sera notifié de la disponibilité de la réponse et pourra y réagir.

Voici notre exemple précédent réécrit de manière asynchrone :*/

/*var req = new XMLHttpRequest();
// La requête est asynchrone lorsque le 3ème paramètre vaut true ou est absent
req.open("GET", "http://localhost/javascript-web-srv/data/langages.txt");
// Gestion de l'événement indiquant la fin de la requête
req.addEventListener("load", function () {
    // Affiche la réponse reçue pour la requête
    console.log(req.responseText);
});
req.send(null);*/

/*Un événement de type load indique la fin du traitement de la requête par le serveur. 
Le gestionnaire associé affiche son résultat dans la console. Le résultat obtenu est identique, mais le fichier
langages.txt est maintenant récupéré de manière asynchrone et le message d'avertissement a disparu.
La différence entre une requête synchrone et une requête asynchrone est imperceptible pour l'utilisateur 
lorsque client et serveur s'exécutent sur la même machine et que le traitement de la requête est instantané.

---------------------------------------2.5 Gestion des erreurs-----------------------------------------------------------

Tout échange entre deux programmes peut donner lieu à des erreurs : l'URL cible est incorrecte, 
le serveur est indisponible, le réseau dysfonctionne, etc. La gestion des erreurs est une problématique complexe. 
Fixons-nous comme premier objectif de les détecter pour les afficher dans la console du navigateur.

Voici notre code d'exemple intégrant une gestion assez basique des erreurs :*/

var req = new XMLHttpRequest();
req.open("GET", "http://localhost/javascript-web-srv/data/langages.txt");
req.addEventListener("load", function () {
    if (req.status >= 200 && req.status < 400) { // Le serveur a réussi à traiter la requête
        console.log(req.responseText);
    } else {
        // Affichage des informations sur l'échec du traitement de la requête
        console.error(req.status + " " + req.statusText);
    }
});
req.addEventListener("error", function () {
    // La requête n'a pas réussi à atteindre le serveur
    console.error("Erreur réseau");
});
req.send(null);

/*On distingue deux principaux cas d'erreur :

-La requête n'a pas réussi à atteindre le serveur (nom du serveur incorrect, erreur réseau, etc). 
Ces erreurs déclenchent l'apparition d'un événement de type error sur la requête. 
Le gestionnaire associé affiche le message "Erreur réseau" dans la console.

-La requête a atteint le serveur, mais son traitement a échoué 
(ressource demandée non trouvée, problème interne au serveur, etc). C'est le code de retour HTTP de la requête, 
contenu dans sa propriété status, qui indique son résultat. Un code supérieur ou égal à 200 et strictement inférieur 
à 400 signale la réussite de la requête.

Testons notre gestion des erreurs. Tout d'abord, modifiez l'URL cible en changeant localhost par localghost, 
puis rechargez la page web dans le navigateur. 
Nous sommes bien en présence d'une erreur réseau : le serveur est injoignable puisqu'il n'existe pas.

Modifiez de nouveau l'URL pour rétablir localhost, mais changez langages.txt en langage.txt. 
Rechargez la page web : le code HTTP 404 signale que la ressource demandée n'a pas été trouvée sur le serveur.

----------------------------------------2.6 Écrire une fonction AJAX générique---------------------------------------------

Imaginez que votre programme JavaScript ait plusieurs requêtes HTTP à effectuer. 
À chaque appel, il faudrait dupliquer le code précédent en modifiant uniquement l'URL cible et le traitement 
en cas de réussite de la requête. Cette duplication alourdirait significativement le code source et le rendrait 
peu lisible.

La solution classique pour éviter de dupliquer du code consiste à factoriser (centraliser) le code auparavant dupliqué, 
puis à faire appel à ce code toutes les fois que c'est nécessaire. En JavaScript, cela se traduit souvent par 
la création de fonctions. 

Voici comment nous pouvons faire pour factoriser le code d'exécution d'une requête HTTP asynchrone, 
autrement dit un appel AJAX.*/

// Exécute un appel AJAX GET
// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
/*function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(null);
}*/
/*La fonction ajaxGet permet d'exécuter une requête HTTP asynchrone. 
Elle prend en paramètres l'URL cible et la fonction appelée en cas de succès de la requête. 
En effet, JavaScript permet de passer des fonctions en paramètre comme n'importe quelle autre valeur. 

Le terme callback utilisé ici comme nom du second paramètre est souvent employé pour désigner une 
fonction appelée ultérieurement, en réaction à un certain événement. Les messages d'erreur ont été améliorés 
et affichent à présent l'URL cible en plus des autres informations.

Cette fonction est dite générique : elle n'est pas spécifique à un contexte ou des données particuliers, 
et peut être utilisée dans tout programme JavaScript qui a besoin d'effectuer des appels AJAX.

Le code de lancement d'un appel AJAX est considérablement simplifié : il suffit de créer la fonction qui gère 
le résultat puis d'appeler ajaxGet :*/

//fonction créée qui gère le résultat :
function afficher(reponse) {
    console.log(reponse);
}

//appel ajax :
ajaxGet("http://localhost/javascript-web-srv/data/langages.txt", afficher);

/*Testez ce code, y compris en introduisant des erreurs dans l'URL. On obtient exactement les mêmes résultats que précédemment.

On peut même utiliser une fonction anonyme pour afficher le résultat de la requête :*/

/*ajaxGet("http://localhost/javascript-web-srv/data/langages.txt", function (reponse) {
    console.log(reponse);
});*/

/*-------------------------------------2.7 Utiliser la fonction AJAX dans plusieurs fichiers---------------------------------------------------

La création de la fonction ajaxGet nous a permis d'éviter de dupliquer le même code à chaque appel AJAX. 
Toutefois, il reste un problème : que faire si plusieurs fichiers JavaScript ont besoin d'effectuer des requêtes HTTP ?

Une première solution consisterait à copier/coller la fonction ajaxGet dans chaque fichier JavaScript, 
ce qui aboutirait à dupliquer de nouveau du code. Pour éviter cela, on va définir cette fonction dans 
un autre fichier JavaScript inclus partout où c'est nécessaire.

Créez un nouveau fichier ajax.js dans lequel vous déplacez la définition de la fonction ajaxGet. 
Ensuite, supprimez la définition de cette fonction du fichier cours.js. Enfin, modifiez le fichier cours.html 
pour inclure le fichier ajax.js :

<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title>Interroger un serveur web</title>
</head>

<body>
    <h1>Quelques langages</h1>
    <ul id="langages">
    </ul>

    <script src="../js/ajax.js"></script>
    <script src="../js/cours.js"></script>
</body>

</html>
Le fichier ajax.js doit toujours être inclus dans la page web AVANT les autres fichiers JavaScript 
qui utilisent les fonctions qu'il contient.

______________________________________3 Appels AJAX et JSON__________________________________________________

Transmettre des informations sous forme d'un fichier texte se révèle vite limité 
lorsque ces informations sont structurées : par exemple, lorsqu'il s'agit d'une liste 
d'éléments possédant tous les mêmes propriétés. C'est pourquoi on emploie souvent le format 
JSON étudié au chapitre précédent pour échanger des données entre programmes.

------------------------------3.1 Gestion du format JSON par JavaScript---------------------------------------------------

Le langage JavaScript permet de gérer facilement ce format de données. 
La fonction JSON.parse permet de transformer une chaîne de caractères conforme au format 
JSON en un objet JavaScript. La fonction JSON.stringify joue le rôle inverse : 
elle transforme un objet JavaScript en chaîne de caractères conforme au format JSON :*/

var avion = {
    marque: "Airbus",
    couleur: "A320"
};
console.log(avion);
// Transforme l'objet JavaScript en chaîne de caractères JSON
var texteAvion = JSON.stringify(avion);
console.log(texteAvion);
// Transforme la chaîne de caractères JSON en objet JavaScript
console.log(JSON.parse(texteAvion));


/*Ces fonctions permettent aussi de gérer les tableaux d'objets JSON :*/

var avions = [
    {
        marque: "Airbus",
        couleur: "A320"
    },
    {
        marque: "Airbus",
        couleur: "A380"
    }
];
console.log(avions);
// Transforme le tableau d'objets JS en chaîne de caractères JSON
var texteAvions = JSON.stringify(avions);
console.log(texteAvions);
// Transforme la chaîne de caractères JSON en tableaux d'objets JavaScript
console.log(JSON.parse(texteAvions));

/*------------------------------------3.2 Récupérer des données JSON depuis un serveur--------------------------------------

La technique utilisée pour récupérer des données JSON est la même que pour un fichier texte, 
et nous allons pouvoir réutiliser notre fonction générique ajaxGet. Seul le traitement de la réponse reçue 
diffère pour s'adapter au format JSON.

Voici un exemple qui récupère auprès du serveur le fichier JSON films.json pour afficher le titre de chaque film :*/

ajaxGet("http://localhost/javascript-web-srv/data/films.json", function (reponse) {
    // Transforme la réponse en tableau d'objets JavaScript
    var films = JSON.parse(reponse);
    // Affiche le titre de chaque film
    films.forEach(function (film) {
        console.log(film.titre);
    })
});


/*Vous pouvez vérifier que le résultat affiché correspond au contenu du fichier ‌films.json.

===============================================================En résumé=================================================================

Voici l'essentiel de ce qui a été abordé dans ce chapitre :

-L'exécution de requêtes HTTP nécessite la présence d'un serveur qui publie les données nécessaires.

-Apache est à l'heure actuelle le serveur web le plus utilisé. 
Il doit être configuré pour accepter les requêtes HTTP sans restriction du domaine d'origine.

-L'objet JavaScript XMLHttpRequest permet de créer une requête HTTP. 
Sa méthode open configure la requête. 
Sa méthode send l'envoie vers l'URL cible.

-Une requête HTTP synchrone bloque le programme JavaScript appelant, et, par extension la page web, 
contrairement à une requête asynchrone qui est notifié de la réponse par le déclenchement d'un évènement load 
sur l'objet requête. Il est préférable d'utiliser systématiquement des requêtes asynchrones.

-Une gestion minimale des erreurs est nécessaires lorsqu'on effectue des appels AJAX. 
Il est possible de créer une fonction générique qui centralise le code de l'appel et la gestion des erreurs.

-Les fonctions JSON.parse et JSON.stringify permettent de gérer des données JSON en JavaScript. 
Elles sont utiles lorsque le serveur publie des informations structurées dans ce format.*/

//-----------------------------------------exo_js cours_js--------------------------------------------------------------


ajaxGet("http://localhost/javascript-web-srv/data/langages.txt", function (reponse) {
    // Séparation du texte pour obtenir un tableau contenant les langages
    var langages = reponse.split(";");
    var listeElt = document.getElementById("langages");
    // Ajout de chaque langage dans la liste
    langages.forEach(function (langage) {
        var langageElt = document.createElement("li");
        langageElt.textContent = langage;
        listeElt.appendChild(langageElt);
    });
});

