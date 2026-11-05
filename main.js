const hamburgerEl = document.getElementById("hamburger-menu");
const menuEl = document.getElementById("main-menu");

if (hamburgerEl && menuEl) {
    hamburgerEl.addEventListener("click", () => {
    
    menuEl.classList.toggle("open");
    
});
}