var jourSemaine = prompt("Saisir un jour de la semaine :");
if (jourSemaine === "lundi") {
	console.log("Demain, nous serons mardi !");
} else if (jourSemaine === "mardi") {
	console.log("Demain, nous serons mercredi !");
} else if (jourSemaine === "mercredi") {
	console.log("Demain, nous serons jeudi !");
} else if (jourSemaine === "jeudi") {
	console.log("Demain, nous serons vendredi !");
} else if (jourSemaine === "vendredi") {
	console.log("Demain, nous serons samedi !");
} else if (jourSemaine === "samedi") {
	console.log("Demain, nous serons dimanche !");
} else if (jourSemaine === "dimanche") {
	console.log("Demain, nous serons lundi");
} else {
	console.log("Ceci n'est pas un jour de la semaine.");
}