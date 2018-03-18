var jourSemaine = prompt("Saisir un jour de la semaine :");
switch (jourSemaine) {
case "lundi":
	console.log("Demain, nous serons mardi !");
	break;
case "mardi":
	console.log("Demain, nous serons mercredi !");
	break;
case "mercredi":
	console.log("Demain, nous serons jeudi !");
	break;
case "jeudi":
	console.log("Demain, nous serons vendredi !");
	break;
case "vendredi":
	console.log("Demain, nous serons samedi !");
	break;
case "samedi":
	console.log("Demain, nous serons dimanche !");
	break;
case "dimanche":
	console.log("Demain, nous serons lundi");
	break;
default:
	console.log("Ceci n'est pas un jour de la semaine.");
}