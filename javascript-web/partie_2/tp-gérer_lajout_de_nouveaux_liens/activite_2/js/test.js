/*
Activité 1
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
 
// Crée et renvoie un élément DOM affichant les données d'un lien
// Le paramètre lien est un objet JS représentant un lien
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
}
 
//Crée fonction creerInputElement
function creerInputElement(placeholder , id) {
    var inputElt = document.createElement("input") ;
    inputElt.setAttribute("type" , "text") ;
    inputElt.setAttribute("required" , "required") ;
    inputElt.setAttribute("placeholder" , placeholder) ;
    inputElt.setAttribute("id" , id) ;
    inputElt.setAttribute("name" , id) ;
    inputElt.style.marginRight = "5px" ;
    return inputElt ;
}
  
var contenu = document.getElementById("contenu");
// Parcours de la liste des liens et ajout d'un élément au DOM pour chaque lien
listeLiens.forEach(function (lien) {
    var elementLien = creerElementLien(lien);
    contenu.appendChild(elementLien);
});


//Création et positionnement du bouton
/*var boutonElt = document.createElement("button") ;
boutonElt.textContent = "Ajouter un lien" ;
var pElt = document.createElement("p") ; // Crée un paragraphe pour contenir boutonElt
  
pElt.appendChild(boutonElt);
document.body.insertBefore(pElt , contenu);

//Ajout évènement click sur boutonElt
boutonElt.addEventListener("click" , function () {
    boutonElt.style.visibility = "hidden" ;
   //Création du formulaire
    var form = document.createElement("form") ;
      
    //Création des éléments du formulaire
    var inputAuteurElt = creerInputElement("Entrez votre nom" , "auteur") ;
    var inputTitreElt = creerInputElement("Entrez le titre du lien" , "titre") ;
    var inputUrlElt = creerInputElement("Entrez l'URL du lien" , "url") ;
      
    //Création du type submit sans la fonction
    var inputSubmitElt = document.createElement("input");
    inputSubmitElt.setAttribute("type" , "submit") ;
    inputSubmitElt.setAttribute("value" , "Ajouter") ;
      
    //Insertion des éléments dans le formulaire
    form.appendChild(inputAuteurElt) ;
    form.appendChild(inputTitreElt) ;
    form.appendChild(inputUrlElt) ;
    form.appendChild(inputSubmitElt) ;
      
    //Insertion du formulaire dans pElt
    pElt.insertBefore(form, boutonElt);
 
    //Ajout évènement de type submit sur le formulaire
    form.addEventListener("submit" , function(e) {
        e.preventDefault();
        var inputUrlEltValeur = form.elements.url.value ;
          
        if((inputUrlEltValeur.indexOf("http://") === -1) || (inputUrlEltValeur.indexOf("https://") === -1)) {
            inputUrlEltValeur = "http://" + inputUrlEltValeur ;
        }
          
        //Crée objet lien
        var lienAjoute = {
            titre: form.elements.titre.value,
            url: inputUrlEltValeur,
            auteur: form.elements.auteur.value
        };
          
        //Déclaration du nouveau lien à ajouter
        var nouveauLien = creerElementLien(lienAjoute) ;
          
        //Insertion du nouveau lien
        var contenu = document.getElementById("contenu");
        contenu.appendChild(nouveauLien) ;
          
        form.style.visibility = "hidden" ;
        boutonElt.style.visibility = "visible" ;
          
        //Message de confirmation
        var messageElt = document.createElement("p");
        messageElt.textContent = "Le lien \"" + lienAjoute.titre + "\" a bien été ajouté.";
        pElt.insertBefore(messageElt, boutonElt);
          
        // Suppresion du message
        setTimeout(function () {
            pElt.removeChild(messageElt);
        }, 2000);
 
    });
 
});*/