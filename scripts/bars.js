document.addEventListener("DOMContentLoaded", function () {
    // Load sidebar
    fetch("./components/bars.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("sidebar-container").innerHTML = data;
            highlightActivePage();
        });

    // Load navbar
    fetch("./components/bars.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;
        });
});

function highlightActivePage() {
    const links = document.querySelectorAll(".sidebar-link, .nav-link");
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });
}