console.log("voici les trois mousquetaires :");

var mousquetaires = ["Athos", "Porthos", "Aramis"];
for (var i = 0; i < mousquetaires.length; i ++) {
	console.log(mousquetaires[i]);
}
console.log("A présent, ils sont quatres !");
mousquetaires.push("D'Artagnan");

mousquetaires.forEach(function (mousquetaire) {
	console.log(mousquetaire);
});