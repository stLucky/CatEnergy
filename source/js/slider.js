const slider = document.querySelector(".slider");
const slideBefore = slider.querySelector(".slider__item--before");
const slideAfter = slider.querySelector(".slider__item--after");
const sliderButtonBefore = slider.querySelector(".slider__button--before");
const sliderButtonAfter = slider.querySelector(".slider__button--after");



sliderButtonBefore.addEventListener("click", function () {
  slideBefore.classList.add("slider__item--current");
  slideAfter.classList.remove("slider__item--current");
  slideBefore.style.width = "100%";
  slideAfter.style.width = "0";
});

sliderButtonAfter.addEventListener("click", function () {
  slideAfter.classList.add("slider__item--current");
  slideBefore.classList.remove("slider__item--current");
  slideAfter.style.width = "100%";
  slideBefore.style.width = "0";
});
