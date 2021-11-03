
const contacto = ['nombre','correo','telefono'];
const paginas = ['contacto', 'register', 'login'];


var path = window.location.pathname;
var page = path.split("/").pop();
page = page.split('.').shift();


 function pagina(page) {
     let i = 0;
     let attributeValue;
     if( page === paginas[0]){
        for( a in contacto){
            console.log(a);
            attributeValue = document.getElementsByTagName("INPUT")[i].getAttribute("pattern");
            if(document.getElementById(a).validity.patternMismatch == true) {
                document.getElementById(a)
                    .setCustomValidity('Este campo debe atender a ' + attributeValue);
                i++;
            }
        }
        i = 0;
    }

    if( page === paginas[1]){
        for( a in contacto){
            console.log(a);
            attributeValue = document.getElementsByTagName("INPUT")[i].getAttribute("pattern");
            if(document.getElementById(a).validity.patternMismatch == true) {
                document.getElementById(a)
                    .setCustomValidity('Este campo debe atender a ' + attributeValue);
                i++;
            }
        }
        i = 0;
    }

    if( page === paginas[2]){
        for( a in contacto){
            console.log(a);
            attributeValue = document.getElementsByTagName("INPUT")[i].getAttribute("pattern");
            if(document.getElementById(a).validity.patternMismatch == true) {
                document.getElementById(a)
                    .setCustomValidity('Este campo debe atender a ' + attributeValue);
                i++;
            }
        }
        i = 0;
    }
}

pagina(page);