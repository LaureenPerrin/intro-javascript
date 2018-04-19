function createInput (type, placeholder) {
    var inputElt = document.createElement("input");
    inputElt.setAttribute("type", type);
    inputElt.setAttribute("placeholder", placeholder);
    inputElt.setAttribute("required", "required");
    return inputElt;
};

//déclaration et création des élément du dom :
var formElt = document.createElement("form");

var bodyElt = document.body;
bodyElt.style.marginLeft = "10px";

var inputTextElt = createInput("text", "Saisissez le profil GitHub");


var buttonElt = createInput("submit");
buttonElt.style.marginLeft = "10px";
buttonElt.value = "Rechercher";

//ajout des éléments du dom :
bodyElt.appendChild(formElt);
formElt.appendChild(inputTextElt);
formElt.appendChild(buttonElt);


formElt.addEventListener("submit", function (e) {
    e.preventDefault();
    var nomProfilSaisi = inputTextElt.value;
    ajaxGet("https://api.github.com/users/" + nomProfilSaisi, function (reponse) {
        // Transformation de la réponse en un objet JSON
        var users = JSON.parse(reponse);
        
        //création des éléments du dom :
        var avatarElt = document.createElement("img");
        avatarElt.src = users.avatar_url;

        var nomElt = document.createElement("p");
        nomElt.textContent = users.name;


        var employeurElt = document.createElement("p");
        employeurElt.textContent = users.company;

        var siteWebElt = document.createElement("a");
        siteWebElt.href = users.blog;

        var zoneProfilElt = document.createElement("div");

        //ajout des éléments du dom :
        bodyElt.appendChild(zoneProfilElt);
        zoneProfilElt.appendChild(avatarElt),
        zoneProfilElt.appendChild(nomElt);
        zoneProfilElt.appendChild(employeurElt);
        zoneProfilElt.appendChild(siteWebElt);
    });
});
