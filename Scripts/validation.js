


$(document). ready(function (){


    const contacto = ['nombre','correo','telefono'];
    const paginas = ['contacto', 'register', 'login'];


    var path = window.location.pathname;
    var page = path.split("/").pop();
    page = page.split('.').shift();

    $("#env").bind("click", function(){
        let i = 0;
        let attributeValue;
        if( page === paginas[0]){
            console.log("que hace");
            for( i = 0; i < contacto.length; i++){
                console.log(contacto[i]);
                attributeValue = document.getElementById(contacto[i]).getAttribute("pattern");
                if(document.getElementById(contacto[i]).validity.patternMismatch == true) {
                    document.getElementById(contacto[i]).setCustomValidity('Este campo debe atender a ' + attributeValue);
                }
            }
        }
    });


});

