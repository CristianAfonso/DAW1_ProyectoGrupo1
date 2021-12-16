$("#perfil").click(function activaPerfil() {
    console.log("Al menos entra");
    document.getElementById("centerPerf").style.display= "grid";
    document.getElementById("activ").style.display= "none";
    document.getElementById("contTable").style.display= "none";
    document.getElementById("perfil").style.color= "#e03315";
    document.getElementById("conf").style.color= "#424242";
    document.getElementById("actividades").style.color= "#424242";
    document.getElementById("horario").style.color= "#424242";
});
$("#actividades").click(function activaActiv() {
    document.getElementById("centerPerf").style.display= "none";
    document.getElementById("activ").style.display= "grid";
    document.getElementById("contTable").style.display= "none";
    document.getElementById("perfil").style.color= "#424242";
    document.getElementById("conf").style.color= "#424242";
    document.getElementById("actividades").style.color= "#e03315";
    document.getElementById("horario").style.color= "#424242";
});
$("#horario").click(function activaHorario() {
    document.getElementById("centerPerf").style.display= "none";
    document.getElementById("activ").style.display= "none";
    document.getElementById("contTable").style.display= "flex";
    document.getElementById("perfil").style.color= "#424242";
    document.getElementById("conf").style.color= "#424242";
    document.getElementById("actividades").style.color= "#424242";
    document.getElementById("horario").style.color= "#e03315";
});