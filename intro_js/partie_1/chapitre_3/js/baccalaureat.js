var noteBaccalaureat = Number(prompt("Entrez une moyenne de baccalauréat :"));

if (noteBaccalaureat < 10) {
  console.log("Vous êtes recalé !")
} else if (noteBaccalaureat < 12) {
	console.log("Vous êtes reçu !");
} else if (noteBaccalaureat <= 20) {
	console.log("Vous êtes reçu avec mention !")
} else {
    console.log("Notes incorrectes !");
}
