var cuarto = document.querySelectorAll('#cuarto,#cuartoMenu');
var sexto = document.querySelectorAll('#sexto,#sextoMenu');
$(cuarto).click(function login() {
    document.getElementById("menuLinks").style.height = "15rem";
    document.getElementById("menuLinks").style.gridAutoRows="20%";
    document.getElementById("cuarto").style.display = "none";
    document.getElementById("quinto").style.display = "none";
    document.getElementById("sexto").style.display= "flex";
    document.getElementById("cuartoMenu").style.display = "none";
    document.getElementById("quintoMenu").style.display = "none";
    document.getElementById("quintoMenu").style.gridRow = "grid-row: 4";
    document.getElementById("sextoMenu").style.display= "flex";
});

$(sexto).click(function logout() {
    document.getElementById("menuLinks").style.height = "20rem";
    document.getElementById("menuLinks").style.gridAutoRows="15%";
    document.getElementById("cuarto").style.display = "flex";
    document.getElementById("quinto").style.display = "flex";
    document.getElementById("sexto").style.display = "none";
    document.getElementById("cuartoMenu").style.display = "flex";
    document.getElementById("quintoMenu").style.display = "flex";
    document.getElementById("quintoMenu").style.gridRow = "grid-row: 5";
    document.getElementById("sextoMenu").style.display= "none";
});