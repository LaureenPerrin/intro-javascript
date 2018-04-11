//création des constantes utilisées dans le programme :
const toggleList = document.getElementById("toggleList");
const listDiv = document.querySelector(".list"); //document.getElementByClassName("list");
const descriptionP = document.querySelector("p.description");
const descriptionInput = document.querySelector("input.description");
const descriptionButton = document.querySelector("button.description");
const listUl = listDiv.querySelector("ul");// document.getElementByTagName("ul");
const addItemInput = document.querySelector("input.addItemInput"); // document.getElementByClassName("addItemInput");
const addItemButton = document.querySelector("button.addItemButton");//document.getElementByClassName("addItemButton");
const lis = listUl.children;
const firstListItem = listUl.firstElementChild;
const lastListItem = listUl.lastElementChild;

//définition couleur de fond du premier élément de la liste :
firstListItem.style.backgroundColor = "lightskyblue";
//définition couleur de fond du dernier élément de la liste :
lastListItem.style.backgroundColor = "lightsteelblue";

function attachListItemsButtons(li) {
	//création élément up pour chaque li :
	let up = document.createElement("button");
	up.className = "up";
	up.textContent = "Up";
	//ajout noeud up dans le noeud li :
	li.appendChild(up);

	//création élément down pour chaque li :
	let down = document.createElement("button");
	down.className = "down";
	down.textContent = "Down";
	//ajout noeud down dans le noeud li :
	li.appendChild(down);

	//création élément remouve pour chaque li :
	let remove = document.createElement("button");
	remove.className = "remove";
	remove.textContent = "Remove";
	//ajout noeud remove dans le noeud li :
	li.appendChild(remove);
}

//boucle pour afficher la fonction (tous les boutons crées) pour chaque li :
for (let i = 0; i < lis.length; i += 1) {
	attachListItemsButtons(lis[i]);
}

//ajout évènement type click sur la liste ul consernant tous les boutons des li:
listUl.addEventListener("click", (event) => {
	//quand event ciblé est un bouton : (pas compris pourquoi button en majuscule)
	if (event.target.tagName == "BUTTON") {
		//si ce bouton est remove :
		if (event.target.className == "remove") {
			let li = event.target.parentNode;
			let ul = li.parentNode;
			//alors le li est supprimer de son parentNode ul :
			ul.removeChild(li);
		}
		//si ce bouton  est up :
		 if (event.target.className == 'up') {
            let li = event.target.parentNode;
            let prevLi = li.previousElementSibling;
            let ul = li.parentNode;
            if (prevLi) {
            	//alors prevLI est positionné avant li dans la liste ul :
                ul.insertBefore(li, prevLi);
            }
		}
		//si ce bouton est down :
		if (event.target.className == "down") {
			let li = event.target.parentNode;
			let nextLi = li.nextElementSibling;
			let ul = li.parentNode;
			if (nextLi) {
				//alors nextLi est positionné après li dans la liste ul :
				ul.insertBefore(nextLi, li);
			}
		}
	}
});

//ajout évènement type click sur le bouton toggleList :
toggleList.addEventListener ("click", () => {
	//si listDiv n'est pas affichée :
	if (listDiv.style.display == "none") {
		//soit le bouton toggleList affiche hide list est la div est affichée :
	toggleList.textContent = "Hide list";
	listDiv.style.display = "block";
    } else {
    	//soit le bouton toggleList affiche show list est la div disparait :
	toggleList.textContent = "Show list";
	listDiv.style.display = "none";
    }
});

//ajout évènement type click sur le bouton description:
descriptionButton.addEventListener ("click", () => {
	descriptionP.innerHTML = descriptionInput.value + ":";
	descriptionInput.value = "";
});

//ajout évènement type click sur le bouton addItemButton:
addItemButton.addEventListener("click", () =>{
let ul = document.getElementByTagName("ul");
let li = document.createElement("li");
li.textContent = addItemInput.value;
attachListItemsButtons(li);
ul.appendChild(li);
addItemInput.value = "";
});

