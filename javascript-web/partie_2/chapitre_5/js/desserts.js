document.querySelector("button").addEventListener("click", function (e) {

	var dessertSaisi = (prompt("Entrez le nom du nouveau dessert :"));
	var dessertElt = document.createElement("li");
	dessertElt.textContent = dessertSaisi;
	document.getElementById("desserts").appendChild(dessertElt);

	dessertElt.addEventListener("click", function (e) {
        var dessertSaisiModifie = prompt("Modifiez le nom du dessert :");
        dessertElt.textContent = dessertSaisiModifie;
	    document.getElementById("desserts").appendChild(dessertElt);
    });

});