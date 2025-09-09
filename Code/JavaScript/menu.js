const BUTTON = document.querySelector(".btn-list");
const DMENU = document.querySelector(".nav-list");

BUTTON.addEventListener("click", () => {
    DMENU.classList.toggle('active');
});