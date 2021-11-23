$(document).ready(function(){
    $.getJSON("Data/data.json", function(data){
        $( "<div/>", {
            "id": "img-container"
        }).appendTo( "#page" );
        $( "<img/>", {
            "class": "responsive-iframe",
            "src" : data[0].Link_img
        }).appendTo( '#img-container' );
        $( "<div/>", {
            "id": "descripcion",
        }).appendTo( "#page");
        $( "<h1/>", {
            text: data[0].Titulo
        }).appendTo( "#descripcion" );
        $( "<p/>", {
            text: data[0].Descripcion
        }).appendTo( "#descripcion" );
        $( "<div/>", {
            id: "contenedor"
        }).appendTo( "#page" );
        $( "<a/>", {
            "href": "videoPage.html",
            "id": "accesovideo",
        }).appendTo( "#contenedor" );
        $( "<div/>", {
            "id": "image"
        }).appendTo( "#accesovideo" );
        $( "<img/>", {
            "src": data[1].Link_img,
            "class": "responsive-iframe"
        }).appendTo( "#image" );
        $( "<div/>", {
            "id": "duration"
        }).appendTo( "#image" );
        $( "<p/>", {
            "text": "Duracion"
        }).appendTo( "#duration" );
        $( "<div/>", {
            "class": "desc-vid"
        }).appendTo( "#accesovideo" );
        $( "<h1/>", {
            text: data[1].Titulo
        }).appendTo( ".desc-vid" );
        $( "<div/>", {
            "id": "actPresData"
        }).appendTo( "#contenedor" );
        $( "<h1/>", {
            text: "Nuestros monitores:"
        }).appendTo( "#actPresData" );
        for(let i = 0; i < data[0].Monitores.length; i++){
            $( "<p/>", {
                text: data[0].Monitores[i]
            }).appendTo( "#actPresData" );
        }
        $( "<h1/>", {
            text: data[0].Plazas
        }).appendTo( "#actPresData" );
        $( "<h1/>", {
            text: "Horarios:"
        }).appendTo( "#actPresData" );
        $( "<table/>", {
        }).appendTo( "#actPresData" );
        for(let i = 0; i < 6; i++){
            $( "<tr/>", {
                id: "fila" + i
            }).appendTo( "table" );
            for(let j = 0; j < 6; j++){
                $( "<th/>", {
                    text: data[0].Horario[i][j]
                }).appendTo( "#fila" + i);
            }   
        }
        $( "<h1/>", {
            text: data[0].Duracion
        }).appendTo( "#actPresData" );
        $( "<a/>", {
            "href": "videoPage.html",
            "class": "orange-box",
            "text": "SIGUIENTE"
        }).appendTo( "#page" );
    }).fail(function(){
        console.log("An error has occurred.");
    });
});