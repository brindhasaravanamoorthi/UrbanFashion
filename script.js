var sidenav = document.querySelector(".side-navbar");

// Show the side navbar
function showNavbar() {
    sidenav.classList.add("active");
}

// Close the side navbar
function closeNavbar() {
    sidenav.classList.remove("active");
}