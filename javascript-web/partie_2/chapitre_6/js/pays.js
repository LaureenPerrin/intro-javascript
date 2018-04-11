// Liste des pays
var listePays = [
    "Afghanistan",
    "Afrique du Sud",
    "Albanie",
    "Algérie",
    "Allemagne",
    "Andorre",
    "Angola",
    "Anguilla",
    "Antarctique",
    "Antigua-et-Barbuda",
    "Antilles néerlandaises",
    "Arabie saoudite",
    "Argentine",
    "Arménie",
    "Aruba",
    "Australie",
    "Autriche",
    "Azerbaïdjan"
];

var inputCountry = document.getElementById("pays");

function listcountry (value){
    for(var i = 0; i < listePays.length; i++) {
        console.log(listePays[i]);
    }
}

document.addEventListener("keypress", function (e) {
    console.log("Vous avez appuyé sur la touche " + String.fromCharCode(e.charCode));
});
inputCountry.addEventListener("keyup", function(e) {
    var value = e.target.value;
    listcountry(value);

});

