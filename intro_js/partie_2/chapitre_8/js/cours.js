var unObjet = {
    a: 2
};

// Crée unAutreObjet avec unObjet comme prototype
var unAutreObjet = Object.create(unObjet);

console.log(unAutreObjet.a); // Affiche 2

// Dans cet exemple, l'instruction JavaScriptObject.create() est utilisée pour créer l'objetunAutreObjet en lui 
//donnant comme prototype l'objetunObjet. Lors de l'appel àunAutreObjet.a, c'est la propriétéa deunObjet qui est 
//utilisée puisque la propriétéan'existe pas dansunAutreObjet.

//Si le prototype d'un objet ne possède pas une propriété recherchée, alors c'est dans son propre prototype que la
// recherche continue, jusqu'à arriver à la fin de chaîne des prototypes. Si la propriété n'a été trouvée dans aucun objet, 
//son accès renvoie la valeurundefined :

var unObjet = {
    a: 2
};

// Crée unAutreObjet avec unObjet comme prototype
var unAutreObjet = Object.create(unObjet);

console.log(unAutreObjet.a); // Affiche 2

// Crée encoreUnObjet avec unAutreObjet comme prototype
var encoreUnObjet = Object.create(unAutreObjet);

console.log(encoreUnObjet.a); // Affiche 2
console.log(encoreUnObjet.b); // Affiche undefined

// Ce mode de relation entre les objets JavaScript est appelé 
// délégation : un objet délègue une partie de son fonctionnement à son prototype.

// On rencontre aussi parfois le terme d'héritage pour décrire cette relation entre objets.