const url = "https://passionsite-13f0.restdb.io/rest/hidden-gems";

const options = {
  headers: {
    "x-apikey": "63f773af478852088da68594",
  },
};

async function hentData() {
  const respons = await fetch(url, options);
  const json = await respons.json();
  json.forEach(visFerie);
}

hentData();

function visFerie(ferie) {
  const template = document.querySelector(".templatedest").content;
  const klon = template.cloneNode(true);

  klon.querySelector(".destimg").src = "billeder/" + ferie.billede;
  klon.querySelector(".h1dest").textContent = ferie.land;
  klon.querySelector(".h2dest").textContent = ferie.by;
  klon.querySelector(".biodest").textContent = ferie.bio;
  klon.querySelector(".read-more").href = "singleview.html?id=" + ferie._id;

  document.querySelector("#grid1-1").appendChild(klon);
}
