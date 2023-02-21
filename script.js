const url = "https://tema7-7d73.restdb.io/rest/hidden-gems";

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
  const template = document.querySelector(".template").content;
  const klon = template.cloneNode(true);

  klon.querySelector(".b-img-1").src = "billeder/" + ferie.billede;
  klon.querySelector(".heading1").textContent = ferie.land;
  klon.querySelector(".by").textContent = ferie.by;

  document.querySelector("#karusel").appendChild(klon);
}

const track = document.querySelector("#karusel");
const slides = Array.from(track.children);
console.log(track);
console.log(slides);

const nextBtn = document.querySelector(".arrow_next");
const prevBtn = document.querySelector(".arrow_prev");
const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);
console.log(slideWidth);

nextBtn.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".currentSlide");
  const nextSlide = currentSlide.nextElementSibling;
  const amountToMove = 500;
  console.log(amountToMove);
  track.style.transform = "translateX(-" + 500 + ")";
});
