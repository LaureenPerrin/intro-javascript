//Erreur : le mot de passe ne contient aucun chiffre
//Erreur : la longueur minimale du mot de passe est de 6 caractères
//Mots de passe OK

//2 mdp saisi identique
//mdp1 = mdp2
//submit
//infoMdp

//6 caractères dont 1 chiffres = /.+.+.+.+.+.+\d/
//chaine caractères
/*document.getElementById("mdp1").addEventListener("blur", function (e) {
    var regexMdp = /.+@.+\..+/;*/
var form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    var mdp1 = form.elements.mdp1.value;
    var mdp2 = form.elements.mdp2.value;
    var message = "Mots de passe OK";
    if (mdp1 === mdp2) {
        if (mdp1.length >= 6) {
            var regexMdp = /.+.+.+.+.+.+\d/;
            if (!regexMdp.test(mdp1)) {
                message = "Erreur : le mot de passe ne contient aucun chiffre";
            }
        } else {
            message = "Erreur : la longueur minimale du mot de passe est de 6 caractères";
        }
    } else {
        message = "Erreur : les mots de passe saisis sont différents";
    }
    document.getElementById("infoMdp").textContent = message;
    e.preventDefault();
});