ajaxGet("http://localhost/javascript-web-srv/data/tableaux.json", function (reponse) {
    var tableaux = JSON.parse(reponse);
    var tableauxElt = document.getElementById("tableaux");
    tableaux.forEach(function (tableau) {
        // Crée une ligne de tableau HTML pour chaque tableau
        var ligneElt = document.createElement("tr");
        ligneElt.innerHTML = "<td>" + tableau.Nom + "</td>" + "<td>" + tableau.Année + "</td>" +
            "<td>" + tableau.Auteur + "</td>";
        tableauxElt.appendChild(ligneElt);
    });
});