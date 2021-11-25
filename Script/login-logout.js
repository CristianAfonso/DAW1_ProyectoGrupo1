var cuarto = document.querySelectorAll('#cuarto,#cuartoMenu');
var sexto = document.querySelectorAll('#sexto,#sextoMenu');
$(cuarto).click(function login() {
    document.getElementById("cuarto").style.display = "none";
    document.getElementById("quinto").style.display = "none";
    document.getElementById("sexto").style.display= "flex";
    document.getElementById("septimo").style.display= "flex";
    document.getElementById("cuartoMenu").style.display = "none";
    document.getElementById("quintoMenu").style.display = "none";
    document.getElementById("quintoMenu").style.gridRow = "grid-row: 4";
    document.getElementById("sextoMenu").style.display= "flex";
    document.getElementById("septimoMenu").style.display= "flex";
});

$(sexto).click(function logout() {
    document.getElementById("cuarto").style.display = "flex";
    document.getElementById("quinto").style.display = "flex";
    document.getElementById("sexto").style.display = "none";
    document.getElementById("septimo").style.display= "none";
    document.getElementById("cuartoMenu").style.display = "flex";
    document.getElementById("quintoMenu").style.display = "flex";
    document.getElementById("quintoMenu").style.gridRow = "grid-row: 5";
    document.getElementById("sextoMenu").style.display= "none";
    document.getElementById("septimoMenu").style.display= "none";
});