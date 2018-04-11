var Personnage = {
    nom: "",
    sante: 0,
    force: 0,
    xp: 0,

    // Renvoie la description du personnage
    decrire: function () {
        var description = this.nom + " a " + this.sante + " points de vie, " +
            this.force + " en force et " + this.xp + " points d'expérience";
        return description;
    }
};

var perso1 = Object.create(Personnage);
perso1.nom = "Aurora";
perso1.sante = 150;
perso1.force = 25;

var perso2 = Object.create(Personnage);
perso2.nom = "Glacius";
perso2.sante = 130;
perso2.force = 35;

console.log(perso1.decrire());
console.log(perso2.decrire());

// Dans cet exemple, nous avons créé un objet nomméPersonnage, qui rassemble les propriétés communes à tous les personnages. 
//Les objetsperso1 etperso2 sont créés avec l'objetPersonnage comme prototype, et lui délèguent les fonctionnalités communes.

//Par convention, le nom d'un objet jouant le rôle de modèle (ici l'objetPersonnage) commence souvent par une majuscule, 
//mais ce n'est pas une obligation.

// Initialisation des personnages
//On peut noter que le processus de création d'un personnage est un peu répétitif : pour chaque personnage, 
//il faut successivement donner une valeur à chacune de ses propriétés. On peut faire mieux en créant une 
//fonction d'initialisation dans l'objetPersonnage.

var Personnage = {
    // Initialise le personnage
    init: function (nom, sante, force) {
        this.nom = nom;
        this.sante = sante;
        this.force = force;
        this.xp = 0;
    },

    // Renvoie la description du personnage
    decrire: function () {
        var description = this.nom + " a " + this.sante + " points de vie, " +
            this.force + " en force et " + this.xp + " points d'expérience";
        return description;
    }
};

var perso1 = Object.create(Personnage);
perso1.init("Aurora", 150, 25);

var perso2 = Object.create(Personnage);
perso2.init("Glacius", 130, 30);

console.log(perso1.decrire());
console.log(perso2.decrire());

//La méthode init() prend en paramètres les valeurs initiales des propriétés d'un personnage, et définit les propriétés associées. 
//A l'intérieur de cette méthode, il faut bien distinguer les propriétés (préfixées par le mot-cléthis) des paramètres (non préfixés). 
//Par exemple,this.nom représente la propriéténom de l'objet etnom correspond à l'un des paramètres de la méthode.

//Le code de création d'un personnage ne comporte plus que deux étapes :

// La création proprement dite, avec l'objetPersonnage comme prototype.

//L'initialisation des propriétés, à l'aide de la fonctioninit() de l'objetPersonnage.


//Tout comme un joueur,  un adversaire simulé par l'ordinateur aura un nom, des points de vie et de force. 
//En revanche, un ennemi ne gagnera pas de points d'expérience, mais possèdera deux caractéristiques particulières : 
//sa race et le nombre de points d'expérience gagnés lorsqu'il sera tué par un joueur.

//Joueurs et adversaires sont donc tous deux des personnages, avec des points communs et des spécificités qui les distinguent. 
//Notre nouvelle modélisation objet reflète cette distinction.

var Personnage = {
    // Initialise le personnage
    initPerso: function (nom, sante, force) {
        this.nom = nom;
        this.sante = sante;
        this.force = force;
    }
};

var Joueur = Object.create(Personnage);
// Initialise le joueur
Joueur.initJoueur = function (nom, sante, force) {
    this.initPerso(nom, sante, force);
    this.xp = 0; // L'expérience du joueur est toujours initialisée à 0
};
// Renvoie la description du joueur
Joueur.decrire = function () {
    var description = this.nom + " a " + this.sante + " points de vie, " +
        this.force + " en force et " + this.xp + " points d'expérience";
    return description;
};

var Adversaire = Object.create(Personnage);
// Initialise l'adversaire
Adversaire.initAdversaire = function (nom, sante, force, race, valeur) {
    this.initPerso(nom, sante, force);
    this.race = race;
    this.valeur = valeur;
};

// ...

//Nous créons d'abord un objetPersonnage qui est le modèle commun à tous les personnages. Il possède les propriétés communes 
//à tous les personnages (nom, santé, force) ainsi qu'une méthode pour les initialiser.

//Les objetsJoueur etAdversaire sont tous deux créés avecPersonnage comme prototype. Ils disposent chacun d'une fonction 
//d'initialisation particulière, qui fait appel par délégation à la méthode initPerso()  de l'objetPersonnage. 
//Enfin, l'objetJoueur possède une fonction de description.

//Une fois ces objets modèles définis, nous pouvons les utiliser pour créer nos personnages : les joueurs Aurora et Glacius 
//(avecJoueur comme prototype), ainsi que le vilain monstre ZogZog (avecAdversaire comme prototype).

var joueur1 = Object.create(Joueur);
joueur1.initJoueur("Aurora", 150, 25);

var joueur2 = Object.create(Joueur);
joueur2.initJoueur("Glacius", 130, 30);

console.log("Bienvenue dans ce jeu d'aventure ! Voici nos courageux héros :");
console.log(joueur1.decrire());
console.log(joueur2.decrire());

var monstre = Object.create(Adversaire);
monstre.initAdversaire("ZogZog", 40, 20, "orc", 10);

console.log("Un affreux monstre arrive : c'est un " + monstre.race + " nommé " + monstre.nom);

//Le mécanisme des prototypes permet aux objetsjoueur1,joueur2 etmonstre de bénéficier des propriétés définies dans 
//les objetsJoueur etAdversaire, qui eux-mêmes profitent de celles de l'objetPersonnage.


//Voici comment nous allons introduire les combats dans notre jeu. Un joueur peut attaquer un adversaire, 
//mais l'inverse est aussi vrai. Un personnage attaqué voit ses points de vie diminués de la valeur de force de l'attaquant.
//Si ce nombre de points de vie tombe à zéro, alors le personnage meurt. Si son vainqueur est un joueur, 
//il reçoit un nombre de points d'expérience égal à la valeur de l'adversaire tué.

//On peut donc considérer que l'attaque est une capacité commune aux joueurs et aux adversaires, 
//avec une particularité (le gain d'expérience en cas de victoire) spécifique aux joueurs. Voici la modélisation objet associée.

var Personnage = {
    // Initialise le personnage
    initPerso: function (nom, sante, force) {
        this.nom = nom;
        this.sante = sante;
        this.force = force;
    },
    // Attaque un personnage cible
    attaquer: function (cible) {
        if (this.sante > 0) {
            var degats = this.force;
            console.log(this.nom + " attaque " + cible.nom + " et lui fait " + degats + " points de dégâts");
            cible.sante = cible.sante - degats;
            if (cible.sante > 0) {
                console.log(cible.nom + " a encore " + cible.sante + " points de vie");
            } else {
                cible.sante = 0;
                console.log(cible.nom + " est mort !");
            }
        } else {
            console.log(this.nom + " ne peut pas attaquer : il est mort...");
        }
    }
};

var Joueur = Object.create(Personnage);
// Initialise le joueur
Joueur.initJoueur = function (nom, sante, force) {
    this.initPerso(nom, sante, force);
    this.xp = 0;
};
// Renvoie la description du joueur
Joueur.decrire = function () {
    var description = this.nom + " a " + this.sante + " points de vie, " +
        this.force + " en force et " + this.xp + " points d'expérience";
    return description;
};
// Combat un adversaire
Joueur.combattre = function (adversaire) {
    this.attaquer(adversaire);
    if (adversaire.sante === 0) {
        console.log(this.nom + " a tué " + adversaire.nom + " et gagne " +
            adversaire.valeur + " points d'expérience");
        this.xp += adversaire.valeur;
    }
};

var Adversaire = Object.create(Personnage);
// Initialise l'adversaire
Adversaire.initAdversaire = function (nom, sante, force, race, valeur) {
    this.initPerso(nom, sante, force);
    this.race = race;
    this.valeur = valeur;
};

//L'objetPersonnage possède une nouvelle méthodeattaquer() qui gère l'attaque d'une cible ainsi que les cas particuliers associés 
//(mort de la cible ou attaquant déjà mort). L'objetJoueur gagne une méthodecombattre() qui fait appel par délégation 
//à la méthodeattaquer() dePersonnage et gère le gain d'expérience si l'adversaire meurt durant l'attaque. 
//L'objetAdversaire n'est pas modifié, mais peut malgré tout attaquer un jouer grâce à la méthodeattaquer() dePersonnage, 
//dont il bénéficie par délégation.

//Il ne nous reste plus qu'à utiliser ces objets pour mettre en scène un combat sans merci entre les joueurs et le monstre.

// ...

var joueur1 = Object.create(Joueur);
joueur1.initJoueur("Aurora", 150, 25);

var joueur2 = Object.create(Joueur);
joueur2.initJoueur("Glacius", 130, 30);

console.log("Bienvenue dans ce jeu d'aventure ! Voici nos courageux héros :");
console.log(joueur1.decrire());
console.log(joueur2.decrire());

var monstre = Object.create(Adversaire);
monstre.initAdversaire("ZogZog", 40, 20, "orc", 10);

console.log("Un affreux monstre arrive : c'est un " + monstre.race + " nommé " + monstre.nom);

monstre.attaquer(joueur1);
monstre.attaquer(joueur2);

joueur1.combattre(monstre);
joueur2.combattre(monstre);

console.log(joueur1.decrire());
console.log(joueur2.decrire());


//---------------------------conclusion générale cour----------------------------------------------------------------------------------------

//Vous connaissez à présent les grands principes de la programmation orientée objet, qui consiste à écrire des programmes 
//en utilisant des objets. La POO permet de rassembler des données et des comportements (les méthodes) dans des entités appelées des objets.

//Le modèle objet de JavaScript se base sur des prototypes pour créer des modèles et partager des propriétés entre plusieurs objets. 
//Chaque objet a un prototype et une propriété absente d'un objet sera recherchée dans la chaîne de ses prototypes.

//Ce mode de fonctionnement est spécifique à JavaScript. De nombreux autres langages supportant les objets (Java, C++, PHP...) 
//utilisent des classes pour créer des modèles d'objet. Il est possible de simuler l'existence de classes en JavaScript, 
//mais l'utilisation des prototypes est plus naturelle et plus proche de la philosophie du langage.

//Même si elle reste très employée à l'heure actuelle, la POO n'est pas l'unique moyen de créer des programmes efficaces. 
//Il est tout à fait possible de combiner l'utilisation d'objets et de simples fonctions au sein d'un même programme, 
//voire de ne pas utiliser du tout d'objets !

