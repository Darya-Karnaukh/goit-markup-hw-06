const buttonMenu = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const buttonCloseMenu = document.querySelector(".button-close");

buttonMenu.addEventListener("click", () => {
  mobileMenu.classList.add("is-open");
});

buttonCloseMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("is-open");
});

document.addEventListener("click", (event) => {
  if (
    !mobileMenu.contains(event.target) &&
    !buttonMenu.contains(event.target)
  ) {
    mobileMenu.classList.remove("is-open");
  }
});
