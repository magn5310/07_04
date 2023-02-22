const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("_id");
const url = `https://tema7-7d73.restdb.io/rest/hidden-gems/${_id}`;

const options = {
  headers: {
    "x-apikey": "63f293b7478852088da6845f",
  },
};

async function hentData() {
  const respons = await fetch(url, options);
  const json = await respons.json();
  json.forEach(visFerie);
}

hentData();

function visFerie(ferie) {
  document.querySelector(".grid-img img").src = "billeder/" + ferie.billede;
  document.querySelector(".grid-text-view p").textContent = ferie.bio;
}
