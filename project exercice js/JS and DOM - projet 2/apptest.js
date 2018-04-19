//ajout évènement type chargement page html :
document.addEventListener('DOMContentLoaded', () => {
	//création des constantes utilisées dans le programme :
	const form = document.getElementById("registrar");//document.getElementByTagName("form");
	const input = form.querySelector("input"); //document.getElementByTagName('input');
	
	const mainDiv = document.querySelector(".main"); //document.getElementByClassName("main");
	const ul = document.getElementById("invitedList"); //document.getElementByTagName("ul");
	
	const div = document.createElement("div");
	const filterLabel = document.createElement("label"); 
	const filterCheckBox = document.createElement("input");

	//création label + input type checkbox :
	filterLabel.textContent = "Hide those who haven't responded";
	filterCheckBox.type = "checkbox";
	//ajout filterLabel et filterCheckBox dans noeud div :
	div.appendChild(filterLabel);
	div.appendChild(filterCheckBox);
	//ajout d'élément div avant élément ul :
	mainDiv.insertBefore(div, ul);

	//ajout event sur filterCheckBox :
	filterCheckBox.addEventListener("change", (e) => {
		const isChecked = e.target.checked;
		const lis = ul.children;
		//si la case est cochée :
		if (isChecked) {
			//boucle for qui montre la liste des invités :
			for (let i =0; i < lis.length; i += 1) {
				let li = lis[i];
				//les invités qui ont confirmé restent affichés sur la page :
				if (li.className === "responded") {
					li.style.display = "";//block
					//les autres disparaissent :
				} else {
					li.style.display = "none";
				}
			}
			//si la case n'est pas cochée :
		} else {
			//boucle for qui montre la liste des invités :
			for (let i = 0; i <lis.length; i += 1) {
				let li = lis[i];
				//la liste complète de tous les invités est affichée :
				li.style.display = "";//block
			}
		}
	});


	//création fonction pour créer des li (invités) :
	function createLi(text) {
		//fonction qui crée l'élément :
		function createElement(elementName, property, value) {
			const element = document.createElement(elementName);
			element[property] = value;
			return element;
		}
		//fonction qui ajoute l'élément à une li :
		function appendToLi(elementName, property, value) {
			const element = createElement(elementName, property, value);
			li.appendChild(element);
			return element;
		}

		//création d'une li :
		const li = document.createElement("li");
		//ajout des éléments à une li :
		appendToLi("span", "textContent", text);
		appendToLi("label", "textContent", "Confirmed").appendChild(createElement("input", "type", "checkbox"));
		appendToLi("button", "textContent", "edit");
		appendToLi("button", "textContent", "remove");
		return li;
	}

	//ajout event sur le formulaire :
	form.addEventListener("submit", (e) => {
		//stop l'event par défault :
		e.preventDefault();
		const text = input.value;
		input.value = "";
		//création li avec la fonction createLi précédente :
		const li = createLi(text);
		//ajout element li dans element ul :
		ul.appendChild(li);
	});

	//ajout event change sur ul :
	ul.addEventListener("change", (e) => {
		const checkbox = event.target;
		const checked = checkbox.checked;
		const listItem = checkbox.parentNode.parentNode;

		if(checked){
			listItem.className = "responded";
		} else {
			listItem.className = "";
		}
	});

	//ajout event click sur ul :
	ul.addEventListener("click", (e) => {
		if (e.target.tagName === "BUTTON") { 
			const button = e.target;
			const li = button.parentNode;
			const ul = li.parentNode;
			const action = button.textContent;
			// création objet nameActions :
			const nameActions = {
				//création méthodes de l'objet nameActions :
				//quand le bouton est remove :
				remove: () => {
					//suppression du noeud enfant li (invité) :
					ul.removeChild(li);
				},
				//quand le bouton est edit :
				edit: () => {
					//création d'un nouveau nom d'invité le span devient un input text:
                    const span = li.firstElementChild;
                    const input = document.createElement('input');
                    input.type = 'text';
                    input.value = span.textContent;
                    li.insertBefore(input, span);
                    //suppression de span:
                    li.removeChild(span);
                    button.textContent = 'save';  
                },
                //quand le bouton est save :
				save: () => {
					const input = li.firstElementChild;
					const span = document.createElement("span");
					span.textContent = input.value;
					li.insertBefore(span, input);
					//suppression de input de edit:
					li.removeChild(input);
					button.textContent = "edit";
				}
			};

			//exécute les méthodes de l'objet nameActions :
			nameActions[action]();
		}
	});

});