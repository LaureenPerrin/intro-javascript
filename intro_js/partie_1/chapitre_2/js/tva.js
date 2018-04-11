var prixHt = prompt("Saisissez le prix HT :");
var tauxTva = 19.6 / 100;
var prixTtc = prixHt * (1 + tauxTva);
alert("Le prix TTC est de " + prixTtc + "euros");