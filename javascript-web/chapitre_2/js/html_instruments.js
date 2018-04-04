function infosLiens () {
    var liens = document.getElementsByTagName("a");// Affiche le nombre total de lien dans la page.
    var infosLiens = liens.length;
    console.log(infosLiens);
    console.log(liens[0].getAttribute("href"));
    console.log(liens[infosLiens - 1].getAttribute("href"));
};

console.log(infosLiens());

function possede(id, classe) {
    var instrument = document.getElementById(id);
    if (instrument !== null) {
        console.log(instrument.classList.contains(classe));
    } else {
        console.log("Aucun élément ne possède l'identifiant " + id);
    }
}


possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur