/* 
Activité 3
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];
//________________________________________________________________________________________________
//création des fonctions utilisées dans le programme :

// Crée et renvoie un élément DOM affichant les données d'un lien
// Le paramètre lien est un objet JS représentant un lien :
function creerElementLien(lien) {

    var titreLien = document.createElement("a");
    titreLien.href = lien.url;
    titreLien.style.color = "#428bca";
    titreLien.style.textDecoration = "none";
    titreLien.style.marginRight = "5px";
    titreLien.appendChild(document.createTextNode(lien.titre));

    var urlLien = document.createElement("span");
    urlLien.appendChild(document.createTextNode(lien.url));

    // Cette ligne contient le titre et l'URL du lien
    var ligneTitre = document.createElement("h4");
    ligneTitre.style.margin = "0px";
    ligneTitre.appendChild(titreLien);
    ligneTitre.appendChild(urlLien);

    // Cette ligne contient l'auteur
    var ligneDetails = document.createElement("span");
    ligneDetails.appendChild(document.createTextNode("Ajouté par " + lien.auteur));

    var divLien = document.createElement("div");
    divLien.classList.add("lien");
    divLien.appendChild(ligneTitre);
    divLien.appendChild(ligneDetails);

    return divLien;
};

//création fonction pour créer input de form:
function createInput (id, type, required, placeholder) {
    var inputElt = document.createElement("input");
    inputElt.setAttribute("id" , id) ;
    inputElt.setAttribute("name" , id) ;
    inputElt.setAttribute("type", type);
    inputElt.setAttribute("required", required);
    inputElt.setAttribute("placeholder", placeholder);
    
    return inputElt;
};

//___________________________________________________________________________________________

var contenu = document.getElementById("contenu");
// Parcours de la liste des liens et ajout d'un élément au DOM pour chaque lien
listeLiens.forEach(function (lien) {
    var elementLien = creerElementLien(lien);
    contenu.appendChild(elementLien);
});

//-_________________________________________________________________________________________
//création bouton "ajouter un lien": 
var buttonElt = document.createElement("button");
buttonElt.textContent = "Ajouter un  lien";


//création et ajout de form dans le DOM :
var formElt = document.createElement("form");
formElt.style.display = "none";

//création des input avec appel de la fonction createInput :
var nomElt = createInput("auteur", "text", "required", "Entrez votre nom", "Entrez votre nom");
var titreElt = createInput("titre", "text", "required", "Entrez le titre du lien");
var urlElt = createInput("url", "text", "required", "Entrez l'URL du lien");
var buttonAjouterElt = createInput("submit", "submit");
buttonAjouterElt.value = "Ajouter";

//___________________________________________________________________________________________
//ajout du buttonElt :
document.body.insertBefore(buttonElt, document.querySelector("#contenu"));

//ajout du form :
document.body.insertBefore(formElt, document.querySelector("#contenu"));

//ajout des input au form :
formElt.appendChild(nomElt);
formElt.appendChild(titreElt);
formElt.appendChild(urlElt);
formElt.appendChild(buttonAjouterElt);

//ajout du form :
document.body.insertBefore(formElt, document.querySelector("#contenu"));

//______________________________________________________________________________________________
//ajout divers event :

//ajout event sur buttonElt :
buttonElt.addEventListener("click", function(e) {
    buttonElt.style.display ="none";
    formElt.style.display = "block";
});

formElt.addEventListener("submit" , function(e) {
//stop le comportement par défault donc l'envois des données du formulaire :
    e.preventDefault();
//Création d'un objet newlien :
    var valueInput = formElt.elements.url.value ; 
//Si l’URL saisie ne commence ni par “http://” ni par “https://”, on lui ajoute “http://” au début :
    if((valueInput.indexOf("https://") === -1) && (valueInput.indexOf("http://") === -1)) {
            valueInput = "http://" + valueInput ;
        }
//création d'un objet lien :
     var lien = {
        titre: formElt.elements.titre.value,
        url: valueInput,
        auteur: formElt.elements.auteur.value
    };
//Déclaration du nouveau lien à ajouter  par l'appel à la fonction creerElementLien :
    var newLink = creerElementLien(lien) ;   
//Ajout du nouveau lien en premier dans la liste :
    document.getElementById("contenu").insertBefore(newLink, document.querySelector("#contenu").firstChild) ;        
    formElt.style.display = "none" ;
    buttonElt.style.display = "block" ;
//Création du message de succès d'ajout de lien :
    var messageSuccesElt = document.createElement("p");
    messageSuccesElt.style.backgroundColor = "#58FAF4"; 
    messageSuccesElt.style.color = "#428bca";  
    messageSuccesElt.textContent = "Le lien " + "'" + lien.titre + "'" + " a bien été ajouté.";
    document.body.insertBefore(messageSuccesElt, buttonElt);
// Suppresion du message du message de succès d'ajout de lien au bout de deux secondes :
    setTimeout(function () {
        document.body.removeChild(messageSuccesElt);
        }, 2000);

    });

//Début code activité 3

/*impossible de fair le tp car les ressources données ne fonctionnent pas */

