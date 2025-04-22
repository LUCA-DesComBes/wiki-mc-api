const btnSearch = document.getElementById("btn-submit");
let containerDivs = document.querySelector(".container-divs");
const inputSearchs = document.querySelector(".tqt");
const art = document.querySelector("article");
const containerNoEntity = document.querySelector(".container-no-entity");
const divNoEntity = document.querySelector(".div-no-entity");
let globalData = [];

function createElement(tag, attributes = {}, textContent = "", dataId = "") {
  const element = document.createElement(tag);
  for (const key in attributes) {
    if (key === "className") element.className = attributes[key];
    else element.setAttribute(key, attributes[key]);
  }
  if (textContent) element.textContent = textContent;
  if (dataId) element.setAttribute("data-id", dataId);
  return element;
}

function resetDivContainer() {
  containerDivs.remove();

  containerDivs = document.createElement("div");
  containerDivs.classList.add("container-divs");
  containerDivs.style.display = "grid";
  containerNoEntity.style.display = "none";
  divNoEntity.style.display = "none";
  art.appendChild(containerDivs);
}

function createCard(name, classi, type, imgMob, dataId) {
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
    "SEE MORE",
    dataId
  );

  btnInfo.addEventListener("click", (e) => {
    window.location.href = `./renseignements.html?entityId=${e.target.dataset.id}`
  });
  divInfo.appendChild(btnInfo);

  let color = "#4F8C69";
  if (type === "neutral") {
    color = "#E3B599";
  } else if (type === "hostile") {
    color = "#D24646";
  }

  divInfo.style.border = `2px solid ${color}`;
  nameInfo.style.backgroundColor = color;
  btnInfo.style.backgroundColor = color;

  return divInfo;
}

function displayAllCards(cards) {
  for (let i = 0; i < cards.length; i++) {
    const element = cards[i];

    const cardElement = createCard(
      element.name,
      element.classification,
      element.type,
      element.image,
      element.id
    );

    containerDivs.appendChild(cardElement);
  }
}
async function toto() {
  containerDivs.style.display = "grid";
  containerNoEntity.style.display = "none";
  divNoEntity.style.display = "none";
  const res = await fetch("http://51.38.232.174:3000/v1/entities");
  const data = await res.json();
  console.log(data);
  for (const element of data) {
    const myCard = createCard(
      element.name,
      element.classification,
      element.type,
      element.image,
      element.id
    );
    containerDivs.appendChild(myCard);
  }
}
toto();

btnSearch.addEventListener("click", async () => {
  const name = inputSearchs.value.trim();
  const classification = document.getElementById("select-class").value;
  const type = document.getElementById("select-type").value;
  const healthInput = document.getElementById("health").value;
  const armorInput = document.getElementById("armor").value;
  const damageInput = document.getElementById("damage").value;

  const baseURL = "http://51.38.232.174:3000/v1/entities";
  const queryParams = [];

  if (name) queryParams.push(`name=${name}`);
  if (classification) queryParams.push(`classification=${classification}`);
  if (type) queryParams.push(`type=${type}`);
  if (healthInput) queryParams.push(`health=${healthInput}`);
  if (armorInput) queryParams.push(`health=${armorInput}`);
  if (damageInput) queryParams.push(`health=${damageInput}`);

  const finalURL = `${baseURL}?${queryParams.join("&")}`;

  try {
    const res = await fetch(finalURL);
    const data = await res.json();

    resetDivContainer();

    if (data.length === 0) {
      containerDivs.style.display = "none";
      containerNoEntity.style.display = "flex";
      divNoEntity.style.display = "flex";
    } else {
      for (const element of data) {
        const myCard = createCard(
          element.name,
          element.classification,
          element.type,
          element.image,
          element.id
        );
        containerDivs.appendChild(myCard);
      }
    }
  } catch (error) {
    containerDivs.style.display = "none";
    containerNoEntity.style.display = "flex";
    divNoEntity.style.display = "flex";
    console.error("Erreur :", error);
  }
});
// btnSearch.addEventListener("click", async (e) => {
// 	e.preventDefault();
// 	// const btnsInfo = document.getElementById("toto");
// 	// btnsInfo.addEventListener("click", (e) => {
// 	// 	console.log(e.target.id);
// 	// });
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
// });
