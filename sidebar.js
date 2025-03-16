
document.addEventListener("DOMContentLoaded", function () {
    fetch("sidebar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("sidebar-container").innerHTML = data;
            highlightActivePage();
        });
});

function highlightActivePage() {
    const links = document.querySelectorAll(".sidebar-link");
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });
}

