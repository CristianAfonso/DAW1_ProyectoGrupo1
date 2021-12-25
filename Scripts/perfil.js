$(document).ready(function(){
    $.getJSON("Data/data.json", function(data){
        $( "<div/>", {
            "id": "perf"
        }).appendTo( "#page" );
        $( "<section/>", {
            "id": "columnIzq"
        }).appendTo( "#perf" );
        $( "<div/>", {
            "id": "col1"
        }).appendTo( "#columnIzq" );
        $( "<button/>", {
            "id": "perfil",
            "class": "colizq",
            text: "PERFIL"
        }).appendTo( "#col1" );
        $( "<div/>", {
            "id": "col2"
        }).appendTo( "#columnIzq" );
        $( "<button/>", {
            "id": "conf",
            "class": "colizq",
            "role": "link",
            "onclick":"window.location='abonos.html'",
            text: "AMPLIAR SUBSCRIPCIÓN"
        }).appendTo( "#col2" );
        $( "<div/>", {
            "id": "col3"
        }).appendTo( "#columnIzq" );
        $( "<button/>", {
            "id": "actividades",
            "class": "colizq",
            text: "ACTIVIDADES"
        }).appendTo( "#col3" );
        $( "<div/>", {
            "id": "col4"
        }).appendTo( "#columnIzq" );
        $( "<button/>", {
            "id": "horario",
            "class": "colizq",
            text: "MI HORARIO"
        }).appendTo( "#col4" );
        $( "<section/>", {
            "id": "centerPerf"
        }).appendTo( '#perf' );
        $( "<img/>", {
            "id": "fotoPerf",
            "src": "Imagenes/Rectangle 32.png"
        }).appendTo( "#centerPerf");
        $( "<h3/>", {
            "id":"nom",
            text: data[0].Nombre
        }).appendTo( "#centerPerf" );
        $( "<h3/>", {
            "id":"mail",
            text: data[0].Mail
        }).appendTo( "#centerPerf" );
        $( "<h3/>", {
            "id":"dias",
            text: data[0].Dias
        }).appendTo( "#centerPerf" );
        $( "<section/>", {
            "id": "activ"
        }).appendTo( '#perf' );
        $( "<h2/>", {
            "id":"act",
            text: "MIS ACTIVIDADES"
        }).appendTo( "#activ" );
        $( "<div/>", {
            "id":"actividadesDisplay",
        }).appendTo( "#activ" );
        for(let i = 0; i < data[0].Actividades.length; i++){
            var x = data[0].Actividades[i];
            $( "<div/>", {
            }).appendTo( "#actividadesDisplay" );
            $("<a/>"),{
                "class":"actividad",
                text: x,
            }
        }
        $( "<section/>", {
            "id": "contTable"
        }).appendTo( '#perf' );
        $( "<h1/>", {
            text: "Horarios:"
        }).appendTo( "#contTable" );
        $( "<table/>", {
        }).appendTo( "#contTable" );
        for(let i = 0; i < 6; i++){
            $( "<tr/>", {
                id: "fila" + i
            }).appendTo( "table" );
            for(let j = 0; j < 6; j++){
                if(j==0 || i==0){
                    $( "<th/>", {
                        text: data[0].Horario[i][j]
                    }).appendTo( "#fila" + i);
                }else{
                    $( "<td/>", {
                        text: data[0].Horario[i][j]
                    }).appendTo( "#fila" + i);
                }
            }
        }
    }).fail(function(){
        console.log("An error has occurred.");
    });
});