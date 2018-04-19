/*//////////////////////////////chpitre 1/////////////////////////////////////////////////

____________________________La théorie : HTTP, AJAX et JSON____________________________
Pas de code dans ce chapitre ! Il présente les notions théoriques qu'il faut connaître avant de se lancer dans la communication avec un serveur en JavaScript.﻿﻿﻿﻿﻿﻿﻿﻿


=========================================En résumé========================================
Le protocole HTTP(HyperText Transfert Protocol) est le socle technique du Web.﻿ Il s'agit d'un protocole client/serveur. Un serveur web est un logiciel qui publie des sites ou des données sur le web au travers d’HTTP ou de son équivalent sécurisé HTTPS.﻿﻿﻿﻿﻿﻿﻿﻿

HTTP fonctionne suivant un mécanisme requête/réponse. La requête HTTP est initiée par le client (souvent un navigateur web), le serveur prépare sa réponse, puis la renvoie au client.

Extrait de la documentation du framework PHP Symfony
Extrait de la documentation du framework PHP Symfony
﻿﻿Les principaux types de requêtes HTTP sont GET (pour demander une ressource au serveur) et POST (pour lui envoyer des données). La liste complète des types de requête, appelées aussi méthodes HTTP, est consultable sur Wikipedia.﻿﻿﻿‌

Une réponse HTTP contient un code indiquant le résultat de la requête : 200 pour un succès, 404 si la ressource n'a pas été trouvée, etc.﻿ La liste des codes HTTP est consultable sur Wikipedia.﻿﻿﻿

Sur un site web classique, chaque action de l'utilisateur implique le chargement d'une nouvelle page depuis le serveur. Cela limite l'interactivité avec l'utilisateur.﻿ Les applications web modernes interceptent les actions de l'utilisateur, lancent des requêtes HTTP asynchrones et ne mettent à jour qu'une partie de la page web avec leurs résultats.﻿ Les technologies utilisées sont regroupées sous l'acronyme AJAX(Asynchronous JavaScript And XML).﻿﻿﻿﻿﻿﻿﻿﻿﻿

Pendant un échange synchrone, le demandeur doit attendre que l'information voulue lui soit fournie. Les requêtes HTTP asynchrones utilisées avec AJAX permettent de ne pas bloquer le navigateur en attendant la réponse du serveur.﻿﻿

Pour des raisons de sécurité, les requêtes AJAX dites cross-domain entre deux domaines différents (par exemple entre http://monsite et http://monautresite) sont interdites par défaut. Les autoriser nécessite un paramétrage explicite du serveur web (plus de détails).﻿﻿﻿﻿

Le format de données JSON (JavaScript Object Notation) constitue le standard actuel pour les échanges de données sur le Web, notamment avec AJAX. Il s'agit d'une syntaxe pour décrire des informations structurées sous une forme proche des objets JavaScript.﻿ Voici un exemple de document JSON qui décrit deux voitures (source).﻿﻿﻿﻿

{  
  "voitures" : [    
    { "modèle" : "Peugeot",     
      "couleur" : "bleu",      
      "immatriculation" : 2008,      
      "révisions" : [ 2012, 2014 ]  
    },    
    { "modèle" : "Citroën", 
      "couleur" : "blanc",      
      "immatriculation" : 1999,
      "révisions" : [ 2003, 2005, 2007, 2009, 2011, 2013 ]    
    }
  ]

}
﻿﻿