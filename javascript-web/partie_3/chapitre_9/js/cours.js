///////////////////////////////////////////////////chapitre 9/////////////////////////////////////////////////////////////////////////////////////////////////
/*________________________________________________Utilisez des API web______________________________________________________________________________________

Maintenant que vous savez interroger un serveur web avec JavaScript, découvrez comment utiliser les API publiées sur le Web.

_______________________________________________1 Introduction aux API web_____________________________________________________________________________________

Une API (Application Programming Interface ou interface de programmation) est un ensemble de services offert par un logiciel à d'autres logiciels. 
Grâce aux API, les programmes informatiques peuvent interagir entre eux selon des conditions déterminées. 

Nous avions déjà rencontré la notion d'API au début de ce cours. Le DOM est une API : il définit une manière de représenter une page web et fournit un 
certain nombre de services qui permettent à nos programmes JavaScript d'interagir avec la page.

On appelle API web une API accessible via les technologies du Web, notamment le protocole HTTP ou sa version sécurisée HTTPS. 
Un nombre croissant de sites et de services en ligne proposent des API web destinées aux développeurs. Elles offrent à ces développeurs le moyen 
d'exploiter leurs données et leurs services.

Pour découvrir le monde fascinant des API web, je vous conseille de lire cette série d'articles et de suivre le cours Utilisez des API REST dans vos projets web.

Une API REST est un type particulier d'API web.

_________________________________________________2 Consommez une API web__________________________________________________________________________________________

Pour pouvoir consommer (utiliser) une API web, il faut connaître son adresse et son mode de fonctionnement. 
La plupart des API web sont accessibles via une URL et utilisent le format JSON pour les échanges de données. 

Nous aurions pu ajouter une API à notre serveur web local Apache, mais cette tâche relativement complexe nous éloignerait du sujet de ce cours. 
Dans un premier temps, nous allons utiliser une API web spécialement conçue pour ce chapitre et déjà accessible en ligne.

-------------------------------------------2.1 Testez une API web avec le navigateur----------------------------------------------------------------------------

La première API que nous allons utiliser expose une liste d'articles, un peu à la manière d'un blog. 
Elle est accessible à l'URL https://oc-jswebsrv.herokuapp.com/api/articles et renvoie des données au format JSON.

Cette API peut parfois mettre plusieurs secondes à répondre après une longue période d'inactivité.

Comme cette API utilise le protocole HTTP, on peut la tester depuis un navigateur web en copiant son URL dans la barre d'adresse. 
En appuyant sur Entrée, on envoie une requête HTTP vers cette URL et on obtient l'affichage du résultat de la requête sous forme de données JSON brutes.

-------------------------------------------2.2 Exploitez une API web avec JavaScript------------------------------------------------------------------------------

À présent que nous connaissons l'URL de l'API et le type de données qu'elle renvoie, essayons d'y faire appel depuis notre page web. Pour cela, nous allons réutiliser la technique des appels AJAX étudiée au chapitre précédent.

Créez dans le répertoirechapitre_9/htmlle fichiercours.htmlci-dessous.

<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title>Utiliser des API</title>
</head>

<body>
    <h1>Derniers articles</h1>
    <div id="articles">
    </div>

    <h1>Le Premier Ministre</h1>
    <div id="premMin">
    </div>

    <h1>La météo à Lyon</h1>
    <div id="meteo"></div>

    <script src="../js/ajax.js"></script>
    <script src="../js/cours.js"></script>
</body>

</html>
Ensuite, copiez le fichierajax.jsissu du chapitre précédent dans le répertoirechapitre_9/js. 
Enfin, créez le fichierncours.js dans le répertoirechapitre_9/jsavec le contenu suivant :*/

var articlesElt = document.getElementById("articles");
ajaxGet("https://oc-jswebsrv.herokuapp.com/api/articles", function (reponse) {
    // Transforme la réponse en un tableau d'articles
    var articles = JSON.parse(reponse);
    articles.forEach(function (article) {
        // Ajout du titre et du contenu de chaque article
        var titreElt = document.createElement("h2");
        titreElt.textContent = article.titre;
        var contenuElt = document.createElement("p");
        contenuElt.textContent = article.contenu;
        articlesElt.appendChild(titreElt);
        articlesElt.appendChild(contenuElt);
    });
});

/*L'utilisation d'une API web se fait exactement comme l'interrogation d'un serveur web local. La fonction ajaxGet est réutilisée pour fournir le mécanisme 
d'appel et la gestion des erreurs. La liste des articles est traduite en un tableau d'objets JSON puis affichée dans la page web.

__________________________________________________________3 Les API web ouvertes_____________________________________________________________________________

Vous savez maintenant exploiter une API pour enrichir vos pages web. À présent, quelle API utiliser ? Il en existe un très grand nombre. 
Une fois l'API trouvée, il faut étudier sa documentation afin de découvrir comment l'utiliser. 
La documentation d'une API présente les différents services offerts, les URL associées ainsi que les données échangées. 
Pour voir un exemple de documentation d'API, consultez celle de Flickr.

Depuis plusieurs années, les organismes publics français sont engagés dans une démarche dite "Open Data" de publication à grande échelle de données 
très diverses (plus de détails). Profitons-en pour afficher quelques informations sur la fonction de Premier Ministre. 
L'API web associée a pour URL https://www.data.gouv.fr/api/1/organizations/premier-ministre/. Utilisez votre extension de navigateur pour la tester.*/

var premMinElt = document.getElementById("premMin");
// Accès aux informations publiques sur le Premier Ministre
ajaxGet("https://www.data.gouv.fr/api/1/organizations/premier-ministre/", function (reponse) {
    var premierMinistre = JSON.parse(reponse);
    // Ajout de la description et du logo dans la page web
    var descriptionElt = document.createElement("p");
    descriptionElt.textContent = premierMinistre.description;
    var logoElt = document.createElement("img");
    logoElt.src = premierMinistre.logo;
    premMinElt.appendChild(descriptionElt);
    premMinElt.appendChild(logoElt);
});

/*__________________________________________________4 L'authentification par clé d'accès_______________________________________________________________________

Toutes les API web ne sont pas accessibles librement et sans restriction. Afin de se prémunir contre d'éventuels abus, la plupart d'entre elles imposent 
au client qui souhaite les utiliser de s'identifier. 
Des limites d'utilisation peuvent s'ajouter : elles concernent le nombre d'appels par heure ou le volume de données transférées.

Il existe plusieurs mécanismes pour authentifier le client d'une API. 
Nous allons étudier la plus simple, qui repose sur le principe de clé d'accès (access key). Une clé d'accès permet d'identifier un client de manière unique. 
Elle se présente souvent sous la forme d'une longue série de lettres et de chiffres ajoutée dans l'URL de l'API.

Il n'existe pas de standard universel pour les clés d'accès. Chaque service web peut utiliser sa propre technique pour générer ses clés d'accès, 
les distribuer aux clients puis surveiller leur utilisation.

À titre d'exemple, nous allons utiliser l'API du service météo Weather Underground. Celle-ci nécessite la possession d'une clé d'accès obtenue 
en enregistrant son application auprès du service. Une fois la clé obtenue, on peut tester l'API qui renvoie les conditions météo actuelles pour une 
ville donnée. Son URL est de la forme http://api.wunderground.com/api/ACCESS_KEY/conditions/q/Pays/Ville.json.

Voici un test de cette API pour la ville de Lyon qui utilise ma clé d'accès au service :*/

// Accès à la météo de Lyon avec la clé d'accès 50a65432f17cf542
ajaxGet("http://api.wunderground.com/api/50a65432f17cf542/conditions/q/France/Lyon.json", function (reponse) {
    var meteo = JSON.parse(reponse);
    // Récupération de certains résultats
    var temperature = meteo.current_observation.temp_c;
    var humidite = meteo.current_observation.relative_humidity;
    var imageUrl = meteo.current_observation.icon_url;
    // Affichage des résultats
    var conditionsElt = document.createElement("div");
    conditionsElt.textContent = "Il fait actuellement " + temperature +
        "°C et l'humidité est de " + humidite;
    var imageElt = document.createElement("img");
    imageElt.src = imageUrl;
    var meteoElt = document.getElementById("meteo");
    meteoElt.appendChild(conditionsElt);
    meteoElt.appendChild(imageElt);
});

/*Weather Underground impose des limites de 10 appels par minute et 500 appels par jour pour son API. 
Si la clé ci-dessus ne fonctionne pas, utilisez la vôtre après l'avoir demandée à cette adresse.

========================================================================En résumé===========================================================================

Les principaux points à retenir de ce chapitre sont les suivants :

-Une API est un ensemble de services offert par un logiciel à d'autres logiciels. Grâce aux API, les programmes informatiques peuvent interagir entre eux.

-Les API web sont des API accessibles via HTTP ou HTTPS. Elles utilisent souvent le format JSON. Il existe d'autres types d'API, 
accessibles via d'autres protocoles.

-On consomme (interroge) une API web dans un programme au moyen d'un appel AJAX. 
Auparavant, il faut étudier sa documentation ou la tester à l'aide d'une extension de navigateur comme RESTClient(fire) ou Postman (chrome).

-De plus en plus de sites et de services en ligne proposent des API web. 
Certaines sont ouvertes tandis que d'autres sont soumises à authentification, par exemple au moyen d'une clé d'accès.
