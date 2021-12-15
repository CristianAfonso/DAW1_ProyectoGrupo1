$("#perfil").click(function activaPerfil() {
    console.log("Al menos entra");
    document.getElementById("centerPerf").style.display= "grid";
    document.getElementById("activ").style.display= "none";
    document.getElementById("contTable").style.display= "none";
});
$("#actividades").click(function activaActiv() {
    document.getElementById("centerPerf").style.display= "none";
    document.getElementById("activ").style.display= "grid";
    document.getElementById("contTable").style.display= "none";
});
$("#horario").click(function activaHorario() {
    document.getElementById("centerPerf").style.display= "none";
    document.getElementById("activ").style.display= "none";
    document.getElementById("contTable").style.display= "flex";
});