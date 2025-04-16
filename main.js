const selectClass = document.getElementById("select-class");
const selectType = document.getElementById("select-type");
const healthInput = document.getElementById("health");
const ArmorInput = document.getElementById("armor");
const DamageInput = document.getElementById("damage");
const mobImg = document.getElementById("mob-img");
const aInfo = document.querySelector(".a-info");
const infoCategorie = document.querySelector(".info-cate");
const btnSearch = document.getElementById("btn-submit");
const btnInfo = document.querySelector(".btn-info");

// async function fetchAPI() {
// 	const res = await fetch("http://192.168.1.15:3000/v1/entities");
// 	const data = await res.json();
// }
// fetchAPI();

function createElement(tag, attributes = {}, textContent = "") {
	const element = document.createElement(tag);
	for (const key in attributes) {
		if (key === "className") element.className = attributes[key];
		else element.setAttribute(key, attributes[key]);
	}
	if (textContent) element.textContent = textContent;
	return element;
}

function createCard(name, classi, type, imgMob) {
    const divInfo = createElement("div", { className: "div-info"})

    const nameInfo = createElement("div", { className: "name-info"})
    divInfo.appendChild(nameInfo);

    const paraInfoName = createElement("p", { className: "para-info-name"}, name)
    nameInfo.appendChild(paraInfoName);
}

btnSearch.addEventListener("click", async (e) => {
    e.preventDefault();
	const res = await fetch("http://192.168.1.15:3000/v1/entities");
	const data = await res.json();

	// if (data.classification === "neutral") {
	// 	divInfo.style.border = "2px solid #E3B599";
	// 	nameInfo.style.backgroundColor = "#E3B599";
	// 	btnInfo.style.backgroundColor = "#E3B599";
	// } else if (data.classification === "hostile") {
	// 	divInfo.style.border = "2px solid #D24646";
	// 	nameInfo.style.backgroundColor = "#D24646";
	// 	btnInfo.style.backgroundColor = "#D24646";
	// } else {
	// 	divInfo.style.border = "2px solid #4F8C69";
	// 	nameInfo.style.backgroundColor = "#4F8C69";
	// 	btnInfo.style.backgroundColor = "#4F8C69";
	// }
    paraInfoName.textContent = data.name;
    aInfo.textContent = data.classification;
    infoCategorie.textContent = data.type;
});
