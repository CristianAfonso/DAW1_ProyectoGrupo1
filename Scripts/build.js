
$(document).ready(function(){
    $.getJSON("Data/data.json", function(data){
        console.log("Que pasa");
        for(let i = 0; i < data.length; i++){
            console.log("Que pasa");
            $( "<div/>", {
                "id": "actividad" + (i+1),
                "class": "actividad",
            }).appendTo( "#actividades" );
            $( "<a/>", {
                "class": "actividad",
                text: data[i].Titulo,
            }).appendTo( "#actividad" + (i+1));
            $( "<a/>", {
                "class": "box-img",
                "href": data[i].Link_act + "?idact=" + data[i].Id,
            }).appendTo( "#actividad" + (i+1));
            let imagen = document.getElementsByClassName('box-img')[i];
            $( "<img/>", {
                "class": "img",
                "src": data[i].Link_img,
            }).appendTo( imagen );
        }
    }).fail(function(){
        console.log("An error has occurred.");
    });
});