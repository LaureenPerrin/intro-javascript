// Renvoie le nom du bouton souris à partir de son code
document.addEventListener("keypress", function (e) {
    
    var couleurFond = "";
    var touche = String.fromCharCode(e.charCode);
    switch (touche) {
    case "r": 
        couleurFond = "red";
        break;
    case "j": 
        couleurFond = "yellow";
        break;
    case "v": 
        couleurFond = "green";
        break;
    case "b":
        couleurFond = "white";
        break;
    default :
    console.log("Touche " + touche + " non gérée");
    }
     // Changement de couleur de fond pour toutes les divs
     var divElt = document.querySelectorAll("div");
    for (var i = 0; i < divElt.length; i++) {
        divElt[i].style.backgroundColor = couleurFond;
    }
   
});

