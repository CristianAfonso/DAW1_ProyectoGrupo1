$("#menu").click(function menuDesplegable() {
    const x = document.getElementById("menuLinks");
    if (x.style.display === "grid") {
        x.style.display = "none";
    } else {
        x.style.display = "grid";
    }
});