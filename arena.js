const tr = document.querySelector("tbody tr");
const tbody = document.querySelector("tbody");

function createElement(tag, textContent = "") {
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

  containerDivs = document.createElement("tr");
  tbody.appendChild(containerDivs);
}

function createTable(entity, name, X, Z, stre) {
  const entityTh = createElement("th");
  tr.appendChild(entityTh);

  const imgEntity = createElement("img", {
    src: `${entity}`,
    alt: `${name}`,
  });
  entityTh.appendChild(imgEntity);

  const tdName = createElement("td", name);
  tr.appendChild(tdName);

  const tdX = createElement("td", X);
  tr.appendChild(tdX);

  const tdZ = createElement("td", Z);
  tr.appendChild(tdZ);

  const tdStre = createElement("td", stre);
  tr.appendChild(tdStre);

  const btnDelete = createElement(
    "button",
    { className: "btnDelete" },
    "DELETE"
  );

  return tr;
}
async function poster() {
  const res = await fetch("http://51.38.232.174:3000/v1/arena/entities?EntityId=25", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    }
  });
  const data = await res.json();
  console.log(data);
}
poster();

async function toto() {
    const res = await fetch("http://51.38.232.174:3000/v1/arena/entities");
    const data = await res.json();
    console.log(data);
  }
  toto();
  