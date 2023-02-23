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
  const template = document.querySelector(".templateindex").content;
  const klon = template.cloneNode(true);

  klon.querySelector(".b-img-1").src = "billeder/" + ferie.billede;
  klon.querySelector(".heading1").textContent = ferie.land;
  klon.querySelector(".by").textContent = ferie.by;
  klon.querySelector(".read-more").href = "singleview.html?id=" + ferie._id;
  document.querySelector("#karusel").appendChild(klon);
}
