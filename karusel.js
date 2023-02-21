//Forsøg på at lave karusel
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
