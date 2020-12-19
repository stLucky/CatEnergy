const slider = document.querySelector(".slider");
const slideBefore = document.querySelector(".slider__item--before");
const slideAfter = document.querySelector(".slider__item--after");
const sliderBar = document.querySelector(".slider__bar");
const sliderButtonBefore = document.querySelector(".slider__button--before");
const sliderButtonAfter = document.querySelector(".slider__button--after");

if (slideBefore && slideAfter && sliderBar && sliderButtonBefore && sliderButtonAfter) {
  sliderButtonBefore.addEventListener("click", function () {
    slideBefore.classList.add("slider__item--current");
    slideAfter.classList.remove("slider__item--current");
    sliderBar.classList.remove("slider__bar--after");
    slideBefore.style.width = "100%";
    slideAfter.style.width = "0";
  });

  sliderButtonAfter.addEventListener("click", function () {
    slideAfter.classList.add("slider__item--current");
    slideBefore.classList.remove("slider__item--current");
    sliderBar.classList.add("slider__bar--after");
    slideAfter.style.width = "100%";
    slideBefore.style.width = "0";
  });
}
