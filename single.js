const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = `https://tema7-7d73.restdb.io/rest/hidden-gems${_id}`;
const options = {
  headers: {
    "x-apikey": "63f293b7478852088da6845f",
  },
};
async function hentFerie() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  visFerie(data);
}

function visFerie(ferie) {
  document.querySelector(".grid-img img").src = ferie.billede;
}
hentFerie();
