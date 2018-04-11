//////////////////////////////////////////////////////////// chapitre1 ////////////////////////////////////////////////////////////
/*---------------------------------------------------Affichage d'une valeur--------------------------------------------------------

Jusqu'à présent, nous avons utilisé la console du navigateur Web pour afficher des valeurs, 
mais nous n'avons pas véritablement programmé. 
Lorsqu'on souhaite afficher une valeur depuis un programme JavaScript, on utilise l'ordre JavaScript console.log(). 
La valeur à afficher est placée entre parenthèses et suivie d'un point-virgule. 
Il peut s'agir indifféremment d'un nombre ou d'une chaîne de caractères.

Nous pouvons maintenant expliquer le résultat du programmecours.js créé au chapitre précédent : 
il affiche la valeur "Bonjour en JavaScript", qui est de type chaîne.*/

/*__________________________________________________________1 Structure d'un programme______________________________________________

Nous avons précédemment défini un programme informatique comme étant une liste d'ordres indiquant à un ordinateur 
ce qu'il doit faire. Ces ordres sont écrits sous forme de texte dans un ou plusieurs fichiers et forment ce qu'on appelle 
le code source du programme. Les lignes de texte dans un fichier de code source s'appellent des lignes de code. 

Le code source peut comporter des lignes vides : celles-ci seront ignorées lors de l'exécution du programme.

------------------------------------------------------------------Instructions----------------------------------------------------

Chaque ordre inclus dans un programme est appelée une instruction. Une instruction est délimitée par un point virgule. 
Un programme est constitué d'une suite d'instructions. 

Le plus souvent, on n'écrit qu'une seule instruction par ligne, mais ce n'est pas une obligation.

------------------------------------------------------------Déroulement de l'exécution--------------------------------------------

Lorsqu'un programme est exécuté, les instructions qui le composent sont "lues" les unes après les autres. 
Chaque instruction produit un résultat, et c'est la combinaison de ces résultats individuels qui produit le résultat final 
du programme.

Nous pouvons observer ce comportement en exploitant une fonctionnalité extrêmement précieuse des navigateurs Web modernes 
comme Firefox : la possibilité de voir de l'intérieur ce qui se passe pendant l'exécution d'un programme JavaScript. 
Cette fonctionnalité est appelée débogage, car elle permet souvent de découvrir des bogues (bugs), 
c'est-à-dire des erreurs dans le code source du programme qui entraînent des dysfonctionnements pendant son exécution :*/

console.log("Bonjour en JavaScript !");
//console.log("Faisons quelques calculs.");
console.log(4 + 7);
//console.log(12 / 0);
console.log("Au revoir !");

