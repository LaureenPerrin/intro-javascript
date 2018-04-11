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

// TODO : compléter ce fichier pour ajouter les liens à la page web

//création et modification des éléments :
//création de la liste de liens :
var listeLiensElt = document.createElement("span");

listeLiens.forEach(function (lien) {

    var lienElt = document.createElement("div");
    lienElt.classList.add("lien");

    var boiteTitreUrl = document.createElement("span");
    boiteTitreUrl.style.display = "flex";
    boiteTitreUrl.style.alignItems = "baseline";
    boiteTitreUrl.style.fontSize = "1.1em";
    boiteTitreUrl.style.marginBottom = "-20px";

    var titreLienElt = document.createElement("a");
    titreLienElt.href = lien.url;
    titreLienElt.style.color = "#428bca";
    titreLienElt.style.textDecoration ="none";
    titreLienElt.style.fontWeight = "bold";
    titreLienElt.style.fontSize = "1.2em";
    titreLienElt.textContent = lien.titre;

    var urlLienElt = document.createElement("p");
    urlLienElt.classList.add("urlLien");
    urlLienElt.textContent = lien.url;
    urlLienElt.style.marginLeft = "5px";
    
    var auteurLienElt = document.createElement("p");
    auteurLienElt.textContent = "Ajouté par " + lien.auteur;

    boiteTitreUrl.appendChild(titreLienElt);
    boiteTitreUrl.appendChild(urlLienElt);

    lienElt.appendChild(boiteTitreUrl);
    lienElt.appendChild(auteurLienElt);
    listeLiensElt.appendChild(lienElt);
});

//ajout de la liste de liens dans la page :
document.getElementById("contenu").appendChild(listeLiensElt);

