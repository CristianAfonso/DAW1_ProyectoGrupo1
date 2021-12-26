$(document).ready(function(){
    $.getJSON("Data/data.json", function(data){
        let queryString = location.search.substring(1);
        let id = queryString.split("=")
        $( "<div/>", {
            "id": "img-container"
        }).appendTo( "#page" );
        $( "<img/>", {
            "class": "responsive-iframe",
            "src" : data[id[1]].Link_img
        }).appendTo( '#img-container' );
        $( "<div/>", {
            "id": "descripcion",
        }).appendTo( "#page");
        $( "<h1/>", {
            text: data[id[1]].Titulo
        }).appendTo( "#descripcion" );
        $( "<p/>", {
            text: data[id[1]].Descripcion
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
            "src": data[id[1]].Link_img,
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
            text: data[id[1]].Titulo
        }).appendTo( ".desc-vid" );
        $( "<div/>", {
            "id": "actPresData"
        }).appendTo( "#contenedor" );
        $( "<h1/>", {
            text: "Nuestros monitores:"
        }).appendTo( "#actPresData" );
        for(let i = 0; i < data[id[1]].Monitores.length; i++){
            $( "<p/>", {
                text: data[id[1]].Monitores[i]
            }).appendTo( "#actPresData" );
        }
        $( "<h1/>", {
            text: data[id[1]].Plazas
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
                    text: data[id[1]].Horario[i][j]
                }).appendTo( "#fila" + i);
            }   
        }
        $( "<h1/>", {
            text: data[id[1]].Duracion
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