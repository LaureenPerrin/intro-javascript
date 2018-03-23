// Renvoie un message de bienvenue
function direBonjour(prenom, nom) {
    var message = "Bonjour, " + prenom + " " + nom + " !";
    return message;
}

// TODO : faire saisir le prénom et le nom de l'utilisateur
prenom = prompt("Entrez votre prénom :");
nom = prompt("Entrez votre nom :");
// TODO : appeler direBonjour() avec les bons arguments et afficher son résultat
console.log(direBonjour (prenom, nom));