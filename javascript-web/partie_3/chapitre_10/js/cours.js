/////////////////////////////////////////////////////////////chapitre 10/////////////////////////////////////////////////////////////////////////////////////////

/*_______________________________________________________Envoyez des données à un serveur web___________________________________________________________________

Vous savez maintenant comment utiliser JavaScript pour récupérer des données auprès d'un serveur web. 
Ce dernier chapitre va vous apprendre à lui envoyer des informations.

___________________________________________________________1 Préparation du serveur web local__________________________________________________________________

--------------------------------------------------------------1.1 Configuration du serveur----------------------------------------------------------------------

Nous allons de nouveau utiliser le serveur Apache installé dans un précédent chapitre. 
Sa configuration doit de nouveau être modifiée pour qu'il accepte que le client définisse le format du contenu envoyé. 
C'est indispensable pour que nous puissions lui envoyer des données au format JSON.

Éditez le fichier httpd.conf et modifiez la balise <IfModule /> précédemment insérée à la fin du fichier pour y ajouter la ligne suivante :

Header always set Access-Control-Allow-Headers "Content-Type"
Vous devez obtenir le résultat suivant.‌

<IfModule mod_headers.c>
    # Accept cross-domain requests
    Header always set Access-Control-Allow-Origin "*"
    Header always set Access-Control-Allow-Headers "Content-Type"
</IfModule>

Sauvegardez vos modifications, puis arrêtez et relancez Apache.

Rappel : toute édition d'un fichier de configuration d'Apache nécessite son redémarrage afin que les modifications soient prises en compte.

---------------------------------------------------------------1.2 Ajout du code serveur-----------------------------------------------------------------------

Il nous faut maintenant ajouter au serveur le code qui va gérer les données que nous allons lui transmettre. 
Par souci de simplicité, je vous fournis ce code. Il est écrit en PHP, un langage de programmation souvent utilisé par les serveurs web. 

Copiez à la racine du répertoire javascript-web-srv du serveur les fichiers post_form.php et post_json.php après les avoir téléchargés à cette adresse.

Ces deux fichiers se contentent d'écrire les données reçues dans des fichiers texte, nommés respectivement post_form.log et post_json.log et situés dans 
le même répertoire que les fichiers PHP. L'examen de ces fichiers nous permettra de vérifier le bon envoi de nos données.

Afin de valider la préparation du serveur, ouvrez l'URL http://localhost/javascript-web-srv/post_form.php dans votre navigateur web. 
Vous devez obtenir l'affichage d'un message "Aucune donnée reçue" qui indique que le code serveur fonctionne bien.


___________________________________________________________2 Envoyez des données au serveur____________________________________________________________________

L'envoi d'informations à un serveur s'effectue grâce à une requête HTTP POST contenant les données à envoyer. 
Il existe deux techniques d'envoi que nous allons étudier successivement :

-1-Intégrer les données directement dans la requête HTTP d'envoi. C'est de cette manière que fonctionne la soumission d'un formulaire HTML.
-2-Transmettre les données au format JSON.

---------------------------------------------------------------2.1 Un premier exemple 1----------------------------------------------------------------------------
 
Créez le fichier cours.html dans le répertoire chapitre_10/html et donnez-lui le contenu suivant :

<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title>Envoyer des données</title>
</head>

<body>
    <h3>Qui est le plus fort ?</h3>
    <form>
        <p>
            <input type="radio" name="plusFort" id="elephant" value="ELE" checked>
            <label for="elephant">L'éléphant</label>
            <br>
            <input type="radio" name="plusFort" id="rhinoceros" value="RHI">
            <label for="rhinoceros">Le rhinocéros</label>
            <br>
            <input type="radio" name="plusFort" id="hippopotame" value="HIP">
            <label for="hippopotame">L'hippopotame</label>
            <br>
        </p>
        <p>
            <label for="nom">Votre nom</label> :
            <input type="text" name="nom" id="nom" required>
        </p>

        <input type="submit" value="Votez">
    </form>

    <script src="../js/ajax.js"></script>
    <script src="../js/cours.js"></script>
</body>

</html>
Ensuite, copiez le fichier ajax.js issu du chapitre précédent dans le répertoire chapitre_10/js. 
Enfin, créez le fichier cours.js dans le répertoire chapitre_10/js avec le contenu suivant :*/

// Création d'un objet FormData
var identite = new FormData();
// Ajout d'information dans l'objet
identite.append("login", "Bob");
identite.append("password", "azerty");
// Création et configuration d'une requête HTTP POST vers le fichier post_form.php
var req = new XMLHttpRequest();
req.open("POST", "http://localhost/javascript-web-srv/post_form.php");
// Envoi de la requête en y incluant l'objet
req.send(identite);

//Ouvrez le fichier cours.html dans votre navigateur web. Vous obtenez l'affichage d'un formulaire qui nous servira ultérieurement. 
//Consultez le fichier post_form.log situé dans le répertoire du serveur web. 
//Il doit maintenant contenir les données envoyées depuis le code JavaScript.

/*Array
(
    [login] => Bob
    [password] => azerty
)

-----------------------------------------------------2.2 L'objet FormData-----------------------------------------------------------

L'objet FormData a été standardisé récemment et facilite grandement l'envoi vers un serveur. 
Il peut être utilisé indépendamment d'un formulaire, en lui ajoutant une à une les données à transmettre grâce à sa méthode append. 
Cette méthode prend en paramètres le nom et la valeur de la donnée ajoutée. 

---------------------------------------------2.3 Écrire une fonction d'envoi générique---------------------------------------------------

Le reste du code JavaScript d'exemple lance un appel AJAX vers le fichier post_form.php du serveur web local. 
L'objet FormData est inclus dans la requête envoyée.

Ce code ne gère ni le résultat, ni les éventuelles erreurs liées à l'appel AJAX. Comme pour les appels de récupération, 
nous allons définir une fonction générique nommée ajaxPost que nous pourrons réutiliser à chaque nouvel envoi de données.

Copiez dans le fichier js/ajax.js la définition de cette fonction.

// Exécute un appel AJAX POST
// Prend en paramètres l'URL cible, la donnée à envoyer et la fonction callback appelée en cas de succès
function ajaxPost(url, data, callback) {
    var req = new XMLHttpRequest();
    req.open("POST", url);
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
    req.send(data);
}
Elle est similaire à la fonction ajaxGet mais prend un paramètre supplémentaire nommé data: il s'agit de la donnée transmise.

Modifiez le code du fichier cours.js pour utiliser cette fonction :*/

var commande = new FormData();
commande.append("couleur", "rouge");
commande.append("pointure", "43");
// Envoi de l'objet FormData au serveur
ajaxPost("http://localhost/javascript-web-srv/post_form.php", commande,
    function (reponse) {
        // Affichage dans la console en cas de succès
        console.log("Commande envoyée au serveur");
    }
);

/*La fonction callback appelée lorsque la requête d'envoi a réussi est définie sous forme d'une fonction anonyme.

Rechargez la page cours.html dans le navigateur, puis consultez le fichier post_form.log. 
Il contient les nouvelles informations transmises au serveur :

Array
(
    [couleur] => rouge
    [pointure] => 43
)

Le message de succès est affiché dans le console du navigateur.

-----------------------------------------2.4 Gérer la soumission d'un formulaire avec FormData-----------------------------------------------------------

L'intérêt principal de l'objet FormData est de simplifier la soumission d'un formulaire avec AJAX. Ajoutez le code suivant au fichier cours.js :*/

var form = document.querySelector("form");
// Gestion de la soumission du formulaire
form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Récupération des champs du formulaire dans l'objet FormData
    var data = new FormData(form);
    // Envoi des données du formulaire au serveur
    // La fonction callback est ici vide
    ajaxPost("http://localhost/javascript-web-srv/post_form.php", data, function () {});
});

/*Ensuite, rechargez la page cours.html, saisissez des valeurs dans le formulaire puis validez-le. 
Consultez le fichier post_form.log: il contient le nom et le code de l'option choisie dans le formulaire.

Array
(
    [plusFort] => HIP
    [nom] => Baptiste
)

------------------------------------------------2.5 Envoyez des données JSON-----------------------------------------------------------------------------

Dans certains cas (notamment l'utilisation d'une API web), le serveur attendra du client qu'il lui envoie des données structurées au format JSON. 
Cela nécessite de définir le type de contenu de la requête HTTP comme étant du JSON.

Nous pourrions écrire une nouvelle fonction générique dédiée à l'envoi de données JSON, mais une grande partie de son code serait identique 
à celui de la fonction ajaxPost. Nous allons plutôt modifier ajaxPost pour lui ajouter un paramètre qui indiquera si l'envoi concerne 
des données au format JSON.

Voici la nouvelle définition d'ajaxPost :

// Exécute un appel AJAX POST
// Prend en paramètres l'URL cible, la donnée à envoyer et la fonction callback appelée en cas de succès
// Le paramètre isJson permet d'indiquer si l'envoi concerne des données JSON
function ajaxPost(url, data, callback, isJson) {
    var req = new XMLHttpRequest();
    req.open("POST", url);
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
    if (isJson) {
        // Définit le contenu de la requête comme étant du JSON
        req.setRequestHeader("Content-Type", "application/json");
        // Transforme la donnée du format JSON vers le format texte avant l'envoi
        data = JSON.stringify(data);
    }
    req.send(data);
}

Si le paramètre isJson est défini et vaut true, le type de contenu de la requête est modifié et la donnée JSON est transformée en texte 
avant d'être envoyée.

Notre code précédent utilisant FormData fonctionne toujours avec cette nouvelle version de la fonction ajaxPost: JavaScript permet d'appeler 
une fonction sans définir tous ses paramètres.

Testons ces modifications en ajoutant le code ci-dessous au fichier cours.js :*/

// Création d'un objet représentant un film
var film = {
    titre: "Zootopie",
    annee: "2016",
    realisateur: "Byron Howard et Rich Moore"
};
// Envoi de l'objet au serveur
ajaxPost("http://localhost/javascript-web-srv/post_json.php", film,
    function (reponse) {
        // Le film est affiché dans la console en cas de succès
        console.log("Le film " + JSON.stringify(film) + " a été envoyé au serveur");
    },
    true // Valeur du paramètre isJson
);

/*Rechargez la page cours.html dans le navigateur, puis consultez le fichier post_json.log. Il contient les propriétés de l'objet envoyé 
au serveur.

Array
(
    [titre] => Zootopie
    [annee] => 2016
    [realisateur] => Byron Howard et Rich Moore
)

Comme prévu, la console du navigateur affiche le film envoyé.

=================================================En résumé====================================================================

Voici les points-clés à retenir de ce chapitre :

-On peut envoyer des informations à un serveur web avec un appel AJAX correspondant à une requête HTTP POST.

-Les données transmises à un serveur sont soit incluses directement dans la requête HTTP (technique des formulaires HTML), 
soit envoyées au format JSON. La solution à employer dépend de la manière dont fonctionne le serveur.

-L'objet FormData permet de simplifier l'envoi des données dans le corps d'une requête HTTP.

-Pour envoyer des données JSON, il faut définir le type de contenu de la requête HTTP comme étant de type JSON.

-Il est possible de créer une fonction générique qui centralise le code de l'appel, la gestion des erreurs et la prise en compte du format JSON.
