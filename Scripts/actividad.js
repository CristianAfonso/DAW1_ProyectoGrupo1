$(document).ready(function(){
    $.getJSON("../Data/data.json", function(data){
        var queryString = location.search.substring(1);
        var id = queryString.split("=")
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
        $( "<a/>", {
            "href": "videoPage.html",
            "id": "accesovideo",
        }).appendTo( "#page" );
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
        $( "<a/>", {
            "href": "videoPage.html",
            "class": "orange-box",
            "text": "SIGUIENTE"
        }).appendTo( "#page" );
    }).fail(function(){
        console.log("An error has occurred.");
    });
}); 