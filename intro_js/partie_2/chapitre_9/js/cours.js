//______________________________________Stockez vos données dans des tableaux__________________________________________

//----------------------------------------------------1 Introduction : le rôle des tableaux------------------------------------------------------

//Imaginez que vous souhaitiez informatiser la liste de tous les films que vous avez vus cette année.

//Une première solution serait de créer une variable par film, comme dans l'exemple suivant :
var film1 = "Le loup de Wall Street";
var film2 = "Vice-Versa";
var film3 = "Babysitting";
// Si vous êtes cinéphile, vous risquez rapidement de vous retrouver avec un grand nombre de variables dans votre programme. 
//Pire, toutes ces variables sont entièrement indépendantes. Il n'existe aucun moyen pour, par exemple, 
//afficher la liste complète des films ou rechercher un titre dans la liste.


//On pourrait stocker tous les titres dans une unique chaîne de caractères, en choisissant un caractère pour délimiter les titres :
var films = "Le loup de Wall Street - Vice-Versa - Babysitting - ...";
//Cette chaîne risque de devenir exagérément longue, et que faire si le caractère délimiteur est également présent dans le titre d'un film, 
//comme c'est le cas ici ?

//Une autre possibilité consiste à regrouper les films dans un objet :

var films = {
    film1: "Le loup de Wall Street",
    film2: "Vice-Versa",
    film3: "Babysitting",
    // ...
};

//Cette fois-ci, les données sont centralisées dans l'objet films. Cependant, les noms de ses propriétés (film1,film2,film3...) 
//sont inutiles et répétitifs. A chaque nouveau film vu, il faudra ajouter à l'objet une propriété filmN sans se tromper sur la valeur de N, 
//sous peine de masquer un film déjà présent dans l'objet.
//Il faudrait trouver une solution pour mémoriser ensemble plusieurs éléments sans devoir les nommer individuellement. 
//Cette solution existe : ce sont les tableaux. 

//Un tableau est un type de donnée qui permet de stocker un ensemble d'éléments. 
//Dans d'autres langages, on parle de liste ou de collection plutôt que de tableau. Tous ces concepts sont similaires.

//____________________________________________________2 Manipulation des tableaux en JavaScript___________________________________________
//En JavaScript, un tableau est un objet disposant de propriétés particulières.

//-----------------------------------------------------2.1 Créer un tableau---------------------------------------------------------------------

//Voici comment créer notre liste de films sous la forme d'un tableau :

var films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];
//On déclare un tableau à l'aide d'une paire de crochets []. Tout ce qui se trouve entre les crochets correspond au contenu du tableau. 
//Les différents éléments stockés sont séparés par des virgules.
//Avec JavaScript, on peut stocker dans un tableau des éléments de différents types, comme dans l'exemple ci-dessous.
var tab = ["Bonjour", 7, true];
//Puisqu'un tableau est destiné à contenir plusieurs éléments, une bonne pratique consiste à donner 
//aux variables tableaux des noms exprimant le pluriel, comme par exemple films, tabFilms  ou encore lesFilms.


//--------------------------------------------------2.2 Obtenir la taille d'un tableau-------------------------------------------------------------

//Le nombre d'éléments stockés dans un tableau est appelé sa taille. Voici comment l'obtenir :

var films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];
console.log(films.length); // Affiche 3
//La taille d'un tableau s'obtient en lui appliquant la propriété length.


//---------------------------------------------------2.3 Accéder à un élément d'un tableau---------------------------------------------------------
-
 //Chaque élément présent dans un tableau est identifié par un numéro, appelé son indice (index en anglais). 
 //On peut représenter graphiquement un tableau comme un ensemble de cases, chacune stockant une valeur spécifique et associée à un indice. 
 //Voici comment on pourrait représenter le tableaufilms :

 //indices---------------0----------------------1-----------------2---------
 //valeurs---"Le loup de Wall Street"-----"Vice-Versa"-------Babysitting"---

//L'accès à un élément s'effectue en plaçant cet indice entre crochets, comme dans l'exemple ci-dessous :
var films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];

console.log(films[0]); // Affiche "Le loup de Wall Street"
console.log(films[1]); // Affiche "Vice-Versa"
console.log(films[2]); // Affiche "Babysitting"
//C'est exactement comme pour accéder à un caractère d'une chaîne ! Mieux encore, les mêmes règles d'or s'appliquent :
//L'indice du premier élément d'un tableau est 0 et non 1 comme on aurait pu s'y attendre.
//Le plus grand indice utilisable est égal à la taille du tableau - 1.

//------------------------------------------------------2.4 Parcourir un tableau----------------------------------------------------------------

//Il existe deux solutions pour parcourir un tableau élément par élément.
//La première consiste à utiliser la boucle for que vous connaissez déjà. 
//L'exemple ci-dessous permet d'afficher la liste des films présents dans le tableau :

var films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];

for (var i = 0; i < films.length; i++) {
    console.log(films[i]);
}
//Avec la boucle for, on fait varier l'indice du tableau de 0 (indice du premier élément) à taille du tableau - 1 (indice du dernier) 
//pour accéder aux éléments les uns après les autres.

//Une autre solution consiste à utiliser la méthode forEach() sur le tableau. Celle-ci permet d'appliquer une fonction sur chaque élément 
//du tableau. Voici l'exemple précédent réécrit avec forEach() :
var films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];
films.forEach(function (film) {
    console.log(film);
});
//Lors de l'exécution, chaque élément du tableau est successivement passé en paramètre à la fonction associée à la méthode forEach(). 
//Attention à bien écrire forEach() avec un E majuscule, et à distinguer le tableau (ici films) de l'élément passé à la fonction (ici film). 
//On voit ici l'intérêt de nommer les variables tableaux au pluriel.

//---------------------------------------------------2.5 Ajouter un élément dans un tableau---------------------------------------------------------

var films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];

films.push("Les Bronzés");

console.log(films[3]); // Affiche "Les Bronzés"
//L'ajout d'un nouvel élément dans un tableau se fait avec la méthode push(). 
//Elle prend en paramètre l'élément à insérer, qui est ajouté à la fin du tableau.

//___________________________________________________________________3 Tableaux d'objets__________________________________________________________

//Un tableau permet de stocker tout type d'élément, y compris des objets... Et même d'autres tableaux !

//Imaginons que vous souhaitiez stocker également l'année de sortie de chaque film vu cette année.
//Une première solution est de stocker ces dates directement dans le tableau des films, juste après chaque titre :
var films = ["Le loup de Wall Street", 2013, "Vice-Versa", 2015, "Babysitting", 2013];
//Cependant, cela complique le parcours de la liste des films, puisqu'un indice du tableau sur deux correspond maintenant à un nombre. 
//De plus, l'ajout de nouvelles données sur chaque film (genre, réalisateur, etc) rendrait cette solution encore plus bancale.

//Nous pouvons faire mieux en représentant chaque film sous la forme d'un objet :

var Film = {
    // Initialise le film
    init: function (titre, annee) {
        this.titre = titre;
        this.annee = annee;
    },
    // Renvoie la description du film
    decrire: function () {
        var description = this.titre + " (" + this.annee + ")";
        return description;
    }
};

var film1 = Object.create(Film);
film1.init("Le loup de Wall Street", 2013);

var film2 = Object.create(Film);
film2.init("Vice-Versa", 2015);

var film3 = Object.create(Film);
film3.init("Babysitting", 2013);
//L'objet Film est le modèle de nos films. Sa méthode init() permet de lui donner un titre et une année de sortie, 
//et sa méthode decrire() permet de le décrire sous la forme : "titre (année)".
//Les objets film1,film2 et film3 sont créés avec Film comme prototype pour bénéficier de ses propriétés.

//A présent, on peut créer un tableau films contenant nos objets, puis l'utiliser pour afficher la description de chaque film.

var films = [];
films.push(film1);
films.push(film2);
films.push(film3);

films.forEach(function (film) {
    console.log(film.decrire());
});
//Dans notre exemple, la fonction associée à la méthode forEach() affiche le résultat de l'appel à la méthode decrire() 
//sur chaque objet du tableau des films.
var films = [film1, film2, film3];
films.forEach(function (film) {
    console.log(film.decrire());
});
