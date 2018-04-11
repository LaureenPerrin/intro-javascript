// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
var questions = [
    {
        enonce: "Combien font 2+2 ?",
        reponse: "2+2 = 4"
    },
    {
        enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
        reponse: "1492"
    },
    {
        enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
        reponse: "La lettre N"
    }
];


var i = 1; 
function creerElementQuestion (question) {

    var titreEnonceQuestion = document.createElement("p");
    titreEnonceQuestion.textContent = "Question "+ i + ":";
    titreEnonceQuestion.style.fontWeight = "bold";
    

    var enonceQuestion = document.createElement("span");
    enonceQuestion.textContent = question.enonce;
    enonceQuestion.style.fontStyle = "italic";
    enonceQuestion.style.fontWeight = "normal";
    enonceQuestion.style.marginLeft = "5px";
    titreEnonceQuestion.appendChild(enonceQuestion);

    
    var ligneQuestion = document.createElement("h4");
    ligneQuestion.appendChild(titreEnonceQuestion);
    

    
    var boutonReponse = document.createElement("button");
    boutonReponse.textContent = "Afficher la réponse";

    boutonReponse.addEventListener("click", function (e) {
    var reponseAffichee = document.createElement("p");
    reponseAffichee.textContent = question.reponse;
    divQuestion.replaceChild(reponseAffichee, boutonReponse);
});

    var divQuestion = document.createElement("div");
    divQuestion.appendChild(ligneQuestion);
    divQuestion.appendChild(boutonReponse);

    i++;
    return divQuestion;
}

var contenu = document.getElementById("contenu");
// Parcours de la liste des liens et ajout d'un élément au DOM pour chaque lien
questions.forEach(function (question) {
    
    var elementQuestion = creerElementQuestion(question);
    contenu.appendChild(elementQuestion);
});