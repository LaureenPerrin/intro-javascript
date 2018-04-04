/* 
Activité : gestion des contacts
*/
// TODO : complétez le programme : 

//création de l'objet "options" pour ne pas répéter l'expression et rendre plus lisible le programme :
var options = { 
	option1: "1 : Lister les contacts",
	option2: "2 : Ajouter un contact",
	option3: "0 : Quitter",
	afficherOptions: function() {
		console.log(options.option1);
		console.log(options.option2);
		console.log(options.option3);
	}
};

//Phrase de départ du gestionnaire de contact :
console.log("Bienvenue dans le gestionnaire des contacts !");

//appel la méthode afficherOption de l'objet "options" afin d'afficher les options de saisi possibles pour l'utilisateur.
options.afficherOptions();

// création du proto l'objet "contact" :
var Contact = {
    //initialisation d'un contact :
  init: function (nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    },
    //renvoie à la description d'un contact :
  decrire: function () {
        var description = "Nom : " + this.nom + ", prénom : " + this.prenom;
        return description;
    }
};

//création de l'object "contact1" par l'objet "contact" :
var contact1 = Object.create(contact);
//initialiastion du "contact1" :
contact1.init("Lévisse", "Carole"); 

//crétaion de l'object "contact2" par l'objet "contact" :
var contact2 = Object.create(contact);
//initialiastion du "contact2" :
contact2.init("Nelsonne", "Mélodie"); 

//création du tableau "contacts" et ajout des objets "contact1" et "contact2" dans celui-ci :
var contacts = [contact1, contact2];

//mise en place boucle while :
while (optionSaisi !== 0) {
    var optionSaisi = Number(prompt("Choisissez une option :"));
    // -Quand l'utilisateur saisi 1 :
    if (optionSaisi === 1) {
        console.log("Voici la liste de tous vos contacts :");
        //boucle qui affiche la description de tous les contacts existants dans le tableau "contacts" :
        contacts.forEach(function (contact) {
        console.log(contact.decrire());
        }); 
        // espace créé comme dans la présentation vidéo :
        console.log("");
        // appel la méthode afficherOption de l'objet "options" :
        options.afficherOptions();  
    } else if (optionSaisi === 2) {
        //l'utilisateur saisi le nom et prenom du nouveau contact :
        var nom = prompt("Entrez le nom du nouveau contact :");
        var prenom = prompt("Entrez le prénom du nouveau contact :");
        //création de la variable "ajouterContact" qui correspond au nouveau contact créé :
        var ajouterContact = nom + prenom; 
        //création de l'object "ajouterContact" par l'objet "contact" :
        ajouterContact = Object.create(contact);
        //initialiastion de "ajouterContact" :
        ajouterContact.init(nom, prenom);
        //ajout du nouveau contact dans le tableau des contacts : 
        contacts.push(ajouterContact);
        console.log("Le nouveau contact a été ajouté");
        // espace créé comme dans la présentation vidéo :
        console.log("");
        options.afficherOptions(); 
    } else if (optionSaisi === 0){
        // espace créé comme dans la présentation vidéo :
        console.log("");
        console.log("Au revoir !");
    }
};
