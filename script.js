const preloader = document.getElementById("preloader");

preloader.style.display = "none";

if (menuButton) {
    menuButton.addEventListener("click", function() {
        navLinks.classList.toggle("open");/* to switch back and forth btwn things+ if the class exists, it removes it, if it doesnt, it adds it*/
    });
}
