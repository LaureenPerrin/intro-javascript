var motSaisi ="";

while ((motSaisi !== "oui") && (motSaisi !== "non")) {
    motSaisi = prompt("Voulez-vous jouer au ni oui, ni non ?");
}
while ((motSaisi = "oui") && (motSaisi = "non")) {
  console.log("Vous avez perdu !");
}