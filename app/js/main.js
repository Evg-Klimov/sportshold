let hamburger = document.querySelector(".hamburger");
let mainMenu = document.querySelector(".main-menu");
let lins = document.querySelectorAll(".line");

hamburger.addEventListener("click", () => {
	mainMenu.classList.toggle("open");
	for (let i = 1; i < lins.length; i++) {
		lins[i].classList.toggle("full");
	}
});

