window.addEventListener("DOMContentLoaded", () => {
  const mobNameH2 = document.getElementById("name-mod-h2");
  const mobName = document.getElementById("mob-name");
  const mobImg = document.getElementById("mob-image");
  const mobType = document.getElementById("mob-type");
  const mobClassi = document.getElementById("mob-classi");
  const spanNom = document.getElementById("spanNom");
  const descMob = document.getElementById("descMob");
  const typeMobA = document.getElementById("typeMobA");
  const paraHealth = document.getElementById("paraHealth");
  const paraArmor = document.getElementById("paraArmor");
  const paraDamage = document.getElementById("paraDamage");
  const spanHeight = document.getElementById("spanHeight");
  const spanWidth = document.getElementById("spanWidth");
  const iconMob = document.getElementById("iconMob");

  const searchParams = new URLSearchParams(window.location.search);
  const dataId = searchParams.get("entityId");
  console.log(dataId);
  
  async function test() {
    const res = await fetch(`http://51.38.232.174:3000/v1/entities/${dataId}`);
    const data = await res.json();
    console.log(data);
    mobName.textContent = data.name;
    mobImg.src = data.image;
    mobType.textContent = data.type;
    mobClassi.textContent = data.classification;
    mobNameH2.textContent = data.name;
    typeMobA.textContent = data.classification;
    descMob.innerHTML = `<p>${data.description}</p>`;
    paraHealth.textContent = data.health;
    paraArmor.textContent = data.armor;
    paraDamage.textContent = data.strength;
    spanHeight.textContent = data.height;
    spanWidth.textContent = data.width;
    iconMob.src = data.icon;
  }
  test();
});
