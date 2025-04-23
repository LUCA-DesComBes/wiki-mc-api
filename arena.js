const tableArena = document.querySelector("table");
let tbody = document.querySelector("tbody");
const selectArena = document.querySelector(".select-arena");
const btnSubmit = document.getElementById("btnSubmit");
const inputX = document.getElementById("inputX");
const inputZ = document.getElementById("inputZ");

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
  tbody.remove();

  tbody = document.createElement("tbody");
  tableArena.appendChild(tbody);
}

function createTable(entity, name, X, Z, stre, dataId) {
  const tr = createElement("tr");

  const entityTh = createElement("th");
  tr.appendChild(entityTh);

  const imgEntity = createElement("img", {
    src: `${entity}`,
    alt: `${name}`,
  });
  entityTh.appendChild(imgEntity);

  const tdName = createElement("td", {}, name);
  tr.appendChild(tdName);

  const tdX = createElement("td", {}, X);
  tr.appendChild(tdX);

  const tdZ = createElement("td", {}, Z);
  tr.appendChild(tdZ);

  const tdStre = createElement("td", {}, stre);
  tr.appendChild(tdStre);

  const tdDel = createElement("td", {}, "");
  tr.appendChild(tdDel);

  const btnDelete = createElement(
    "button",
    {
      className: "btnDelete",
      "data-id": dataId
    },
    "DELETE"
  );
  tdDel.appendChild(btnDelete);

  btnDelete.addEventListener("click", async () => {
    const res = await fetch(`http://51.38.232.174:3000/v1/arena/entities/${dataId}`, {
      method: "DELETE"
    });

    if (res.ok) {
      btnDelete.closest("tr").remove();
    } else {
      const err = await res.text();
    }
  });

  return tr;
}

async function createOpt() {
  const res = await fetch("http://51.38.232.174:3000/v1/entities");
  const data = await res.json();
  console.log(data);

  for (let i = 0; i < data.length; i++) {
    const optArena = createElement(
      "option",
      { value: `${data[i].id}` },
      `${data[i].name}`
    );
    selectArena.appendChild(optArena);
  }

  btnSubmit.addEventListener("click", async () => {
    const optionMob = selectArena.value;
    const x = Number(inputX.value.trim());
    const z = Number(inputZ.value.trim());

    if (z < 0 || z > 16 || x < 0 || x > 37) {
      alert("Z doit être entre 0 et 16, et X entre 0 et 37.");
      return;
    } else if (z < 0 || z > 16) {
      alert("Z Coordinate is not possible. Please put a value between 0 - 16");
    } else if (x < 0 || x > 37) {
      alert("X Coordinate is not possible. Please put a value between 0 - 37");
    }

    const entityData = {
      entityId: optionMob,
      x: x,
      z: z,
    };

    const baseURL = `http://51.38.232.174:3000/v1/arena/entities`;

    const res = await fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entityData),
    });
    const data = await res.json();
    console.log(data);
  });
}
createOpt();

async function getEntiteArena() {
  const res = await fetch("http://51.38.232.174:3000/v1/arena/entities");
  const data = await res.json();
  console.log("data", data);

  const optionMob = selectArena.value;
  const x = Number(inputX.value.trim());
  const z = Number(inputZ.value.trim());

  resetDivContainer();

  for (const element of data) {
    const myCard = createTable(
      element.entity.icon,
      element.entity.name,
      element.x,
      element.z,
      element.entity.strength,
      element.id
    );
    tbody.appendChild(myCard);
  }
}
window.addEventListener("DOMContentLoaded", getEntiteArena);
