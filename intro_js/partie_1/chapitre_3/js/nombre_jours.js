var nombreMois = Number(prompt("Entrez le numéro d'un mois :"));
switch (nombreMois) {
case 1:
	console.log("31 jours pour le mois de janvier.");
	break;
case 2:
	console.log("28 jours pour le mois de février.");
	break;
case 3:
	console.log("31 jours pour le mois de mars.");
	break;
case 4:
	console.log("30 jours pour le mois de avril.");
	break;
case 5:
	console.log("31 jours pour le mois de mai.");
	break;
case 6:
	console.log("30 jours pour le mois de juin.");
	break;
case 7:
	console.log("31 jours pour le mois de juillet.");
	break;
case 8:
	console.log("31 jours pour le mois d'août.");
	break;
case 9:
	console.log("30 jours pour le mois de septembre.");
	break;
case 10:
	console.log("31 jours pour le mois d'octobre.");
	break;
case 11:
	console.log("30 jours pour le mois de novembre.");
	break;
case 12:
	console.log("31 jours pour le mois de décembre.");
	break;
default:
	console.log("Ceci ne correspond pas à un mois de l'année.");
}