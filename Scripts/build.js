
$(document).ready(function(){
    $.getJSON("Data/data.json", function(data){
        let queryString = location.search.substring(1);
        if(queryString === "true"){
            for(let i = 0; i < data.length; i++){
                if(data[i].Press == true){
                    $( "<div/>", {
                        "id": "actividad" + data[i].Id,
                        "class": "actividad",
                    }).appendTo( "#actividades" );
                    $( "<a/>", {
                        "class": "actividad",
                        text: data[i].Titulo,
                    }).appendTo( "#actividad" + data[i].Id);
                    $( "<a/>", {
                        "id": data[i].Id,
                        "class": "box-img",
                        "href": data[i].Link_act + "?idact=" + data[i].Id,
                    }).appendTo( "#actividad" + data[i].Id);
                    $( "<img/>", {
                        "class": "img",
                        "src": data[i].Link_img,
                    }).appendTo("#" + data[i].Id);
                }
            }
        }else{
            for(let i = 0; i < data.length; i++){
                if(data[i].Press == false){
                    $( "<div/>", {
                        "id": "actividad" + data[i-3].Id,
                        "class": "actividad",
                    }).appendTo( "#actividades" );
                    $( "<a/>", {
                        "class": "actividad",
                        text: data[i].Titulo,
                    }).appendTo( "#actividad" + data[i-3].Id);
                    $( "<a/>", {
                        "id": data[i].Id,
                        "class": "box-img",
                        "href": data[i].Link_act + "?idact=" + data[i].Id,
                    }).appendTo( "#actividad" + data[i-3].Id);                   
                    $( "<img/>", {
                        "class": "img",
                        "src": data[i].Link_img,
                    }).appendTo("#" + data[i].Id);
                }
            }
    
        }
        
    }).fail(function(){
        console.log("An error has occurred.");
    });
});