const header = document.querySelector(".header");
const headerToggle = document.querySelector(".header__toggle");
const toogleText = headerToggle.querySelector(".visually-hidden")

headerToggle.addEventListener("click", function () {
  header.classList.toggle("header--opened");
  if (header.classList.contains("header--opened")) {
    toogleText.textContent = "Закрыть меню"
  } else {
    toogleText.textContent = "Открыть меню"
  }
});

header.classList.remove("header--nojs");
