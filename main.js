const selectClass = document.getElementById("select-class");
const selectType = document.getElementById("select-type");
const healthInput = document.getElementById("health");
const ArmorInput = document.getElementById("armor");
const DamageInput = document.getElementById("damage");
const btnSearch = document.getElementById("btn-submit");
let containerDivs = document.querySelector(".container-divs");
const inputSearchs = document.querySelector(".tqt");
const art = document.querySelector("article");
let globalData = []

function createElement(tag, attributes = {}, textContent = "") {
	const element = document.createElement(tag);
	for (const key in attributes) {
		if (key === "className") element.className = attributes[key];
		else element.setAttribute(key, attributes[key]);
	}
	if (textContent) element.textContent = textContent;
	return element;
}

function resetDivContainer() {
	containerDivs.remove();

	containerDivs = document.createElement("div");
	containerDivs.classList.add("container-divs");
	art.appendChild(containerDivs);
}

function createCard(name, classi, type, imgMob) {
	const divInfo = createElement("div", { className: "div-info" });

	const nameInfo = createElement("div", { className: "name-info" });
	divInfo.appendChild(nameInfo);

	const paraInfoName = createElement(
		"p",
		{ className: "para-info-name" },
		name
	);
	nameInfo.appendChild(paraInfoName);

	const imageMob = createElement("img", {
		src: `${imgMob}`,
		alt: `${name}`,
		className: "imgmobschiant",
	});
	divInfo.appendChild(imageMob);

	const flexRowInfo = createElement("div", { className: "flex-row-info" });
	divInfo.appendChild(flexRowInfo);

	const aInfo = createElement("a", { className: "a-info" }, classi);
	flexRowInfo.appendChild(aInfo);

	const infoCategorie = createElement("p", { className: "info-cate" }, type);
	flexRowInfo.appendChild(infoCategorie);

	const hrInfo = createElement("hr", { className: "hr-info" });
	divInfo.appendChild(hrInfo);

	const btnInfo = createElement(
		"button",
		{ className: "btn-info", id: "toto" },
		"SEE MORE"
	);

    btnInfo.addEventListener("click", (e) => {
        console.log(e.target)
    })
	divInfo.appendChild(btnInfo);

	return divInfo;
}

function displayAllCards(cards) {
	for (let i = 0; i < cards.length; i++) {
		const element = cards[i];

		const cardElement = createCard(
			element.name,
			element.classification,
			element.type,
			element.image
		);

		containerDivs.appendChild(cardElement);
	}
}
async function toto() {
	const res = await fetch("http://51.38.232.174:3000/v1/entities");
	const data = await res.json();
    globalData = data;
}
toto();

console.log(globalData);



inputSearchs.addEventListener("input", () => {
	btnSearch.addEventListener("click", async () => {
		const res = await fetch(
			`http://51.38.232.174:3000/v1/entities?name=${inputSearchs.value}`
		);
		const data = await res.json();
		resetDivContainer();
		for (let i = 0; i < data.length; i++) {
			const element = data[i];

			const myCard = createCard(
				element.name,
				element.classification,
				element.type,
				element.image
			);
			containerDivs.appendChild(myCard);
		}
	});
});

btnSearch.addEventListener("click", async () => {
const optClassi = document.getElementById("select-class");
const optType = document.getElementById("select-type");
      if (optClassi.value === "arthropod") {
        const res = await fetch(
            `http://51.38.232.174:3000/v1/entities?classification=arthropod`
        );
        const data = await res.json();
		resetDivContainer();
		for (let i = 0; i < data.length; i++) {
			const element = data[i];

			const myCard = createCard(
				element.name,
				element.classification,
				element.type,
				element.image
			);
			containerDivs.appendChild(myCard);
		}
      } else  if (optClassi.value === "undead") {
        const res = await fetch(
            `http://51.38.232.174:3000/v1/entities?classification=undead`
        );
        const data = await res.json();
		resetDivContainer();
		for (let i = 0; i < data.length; i++) {
			const element = data[i];

			const myCard = createCard(
				element.name,
				element.classification,
				element.type,
				element.image
			);
			containerDivs.appendChild(myCard);
		}
      } else  if (optClassi.value === "animal") {
        const res = await fetch(
            `http://51.38.232.174:3000/v1/entities?classification=animal`
        );
        const data = await res.json();
		resetDivContainer();
		for (let i = 0; i < data.length; i++) {
			const element = data[i];

			const myCard = createCard(
				element.name,
				element.classification,
				element.type,
				element.image
			);
			containerDivs.appendChild(myCard);
		}
      } else  if (optClassi.value === "aquatic") {
        const res = await fetch(
            `http://51.38.232.174:3000/v1/entities?classification=aquatic`
        );
        const data = await res.json();
		resetDivContainer();
		for (let i = 0; i < data.length; i++) {
			const element = data[i];

			const myCard = createCard(
				element.name,
				element.classification,
				element.type,
				element.image
			);
			containerDivs.appendChild(myCard);
		}
      } else {
        const res = await fetch(
            `http://51.38.232.174:3000/v1/entities?classification=monster`
        );
        const data = await res.json();
		resetDivContainer();
		for (let i = 0; i < data.length; i++) {
			const element = data[i];

			const myCard = createCard(
				element.name,
				element.classification,
				element.type,
				element.image
			);
			containerDivs.appendChild(myCard);
		}
      }

      if (optType.value === "passive") {
        const res = await fetch(
            `http://51.38.232.174:3000/v1/entities?type=passive`
        );
        const data = await res.json();
		resetDivContainer();
		for (let i = 0; i < data.length; i++) {
			const element = data[i];

			const myCard = createCard(
				element.name,
				element.classification,
				element.type,
				element.image
			);
			containerDivs.appendChild(myCard);
		}
      } else if (optType.value === "neutral") {
        const res = await fetch(
            `http://51.38.232.174:3000/v1/entities?type=neutral`
        );
        const data = await res.json();
		resetDivContainer();
		for (let i = 0; i < data.length; i++) {
			const element = data[i];

			const myCard = createCard(
				element.name,
				element.classification,
				element.type,
				element.image
			);
			containerDivs.appendChild(myCard);
		}
      } else {
        const res = await fetch(
            `http://51.38.232.174:3000/v1/entities?type=hostile`
        );
        const data = await res.json();
		resetDivContainer();
		for (let i = 0; i < data.length; i++) {
			const element = data[i];

			const myCard = createCard(
				element.name,
				element.classification,
				element.type,
				element.image
			);
			containerDivs.appendChild(myCard);
		}
      }
});

// btnSearch.addEventListener("click", async (e) => {
// 	e.preventDefault();
// 	// const btnsInfo = document.getElementById("toto");
// 	// btnsInfo.addEventListener("click", (e) => {
// 	// 	console.log(e.target.id);
// 	// });
// 	// if (data.classification === "neutral") {
// 	// 	divInfo.style.border = "2px solid #E3B599";
// 	// 	nameInfo.style.backgroundColor = "#E3B599";
// 	// 	btnInfo.style.backgroundColor = "#E3B599";
// 	// } else if (data.classification === "hostile") {
// 	// 	divInfo.style.border = "2px solid #D24646";
// 	// 	nameInfo.style.backgroundColor = "#D24646";
// 	// 	btnInfo.style.backgroundColor = "#D24646";
// 	// } else {
// 	// 	divInfo.style.border = "2px solid #4F8C69";
// 	// 	nameInfo.style.backgroundColor = "#4F8C69";
// 	// 	btnInfo.style.backgroundColor = "#4F8C69";
// 	// }
// });
