$(document).ready(function(){
    $.getJSON("Data/data.json", function(data){
        $.getJSON("Data/usuarios.json", function(usuarios){
            let queryString = location.search.substring(1);
            let id = queryString.split("=")
            $( "<section/>", {
                "id": "columnIzq",
            }).appendTo( "#perf" );
            $( "<div/>", {
                "id": "backIz",
            }).appendTo( "#columnIzq" );
            $( "<h2/>", {
                "id": "izq1",
                text: "PERFIL"
            }).appendTo( "#columnIzq" );
            $( "<h2/>", {
                "id": "izq2",
                text: "CONFIGURACIÓN"
            }).appendTo( "#columnIzq" );
            $( "<h2/>", {
                "id": "izq3",
                text: "MIS ACTIVIDADES"
            }).appendTo( "#columnIzq" );
            $( "<section/>", {
                "id": "pruet",
            }).appendTo( "#perf" );
            $( "<img/>", {
                "id": "fotoPerf",
                "src": "../Imagenes/Rectangle 32.png",
            }).appendTo( "#pruet" );
            $( "<h3/>", {
                "id": "nom",
                text: usuarios[0].Name
            }).appendTo( "#pruet" );
            $( "<h3/>", {
                "id": "mail",
                text: usuarios[0].Email
            }).appendTo( "#pruet" );
            $( "<h3/>", {
                "id": "dias",
                text: "13 DÍAS RESTANTES"
            }).appendTo( "#pruet" );
            $( "<section/>", {
                "id": "actv",
            }).appendTo( "#perf" );
            $( "<h2/>", {
                "id": "act",
                text: "MIS ACTIVIDADES"
            }).appendTo( "#actv" );
            for(let i = 0; i < 3; i++){
                $( "<h2/>", {
                    "id": "act" + (i + 1) + "P",
                    text: data[usuarios[0].Actividades[i]].Titulo.toUpperCase()
                }).appendTo( "#actv");
                $( "<img/>", {
                    "id": "act" + (i + 1),
                    "src": data[usuarios[0].Actividades[i]].Link_img,
                }).appendTo( "#act" );
            }
            $( "<section/>", {
                "id": "hor",
            }).appendTo( "#perf" );
            $( "<h2/>", {
                id:"act",
                text: "MI HORARIO:"
            }).appendTo( "#actPresData" );
        }).fail(function(){
            console.log("An error has occurred.");
        });
    }).fail(function(){
        console.log("An error has occurred.");
    });
}); 