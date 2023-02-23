const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = `https://passionsite-13f0.restdb.io/rest/hidden-gems`;

const options = {
  headers: {
    "x-apikey": "63f773af478852088da68594",
  },
};

async function hentData() {
  const respons = await fetch(url, options);
  const json = await respons.json();
  visFerie(json);
}

function visFerie(json) {
  console.log(json);
  json.forEach((ferie) => {
    if (ferie._id === id) {
      document.querySelector(".grid-img-view img").src = "billeder/" + ferie.billede;
      document.querySelector(".grid-text-view p").textContent = ferie.bio;
      document.querySelector(".heroh1").textContent = ferie.by;
      document.querySelector(".h2view").textContent = ferie.by;
      document.querySelector(".welcome").textContent = ferie.land;
      document.querySelector(".aktiv").textContent = ferie.aktiv;
      document.querySelector(".mad").textContent = ferie.mad;
      document.querySelector(".hotel").textContent = ferie.hotel;
      document.querySelector(".h1view").textContent = ferie.land;
      document.querySelector(".aktivimg").src = "billeder/" + ferie.aktivimg;
      document.querySelector(".hotelimg").src = "billeder/" + ferie.hotelimg;
      document.querySelector(".madimg").src = "billeder/" + ferie.madimg;
    }
  });
}

hentData();
