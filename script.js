const menuIcon = document.querySelector(".menu-icon");
const headerRight = document.querySelector(".header-right");

menuIcon.addEventListener("click", () => {
  if (headerRight.className === "header-right") {
    headerRight.className += " show";
  } else {
    headerRight.className = "header-right";
  }
});
