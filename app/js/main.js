const hamburger = document.querySelector(".hamburger");
const mainMenu = document.querySelector(".main-menu");

hamburger.addEventListener("click", () => {
	mainMenu.classList.toggle("open");
});
