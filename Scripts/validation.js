


$(document). ready(function (){


    const contacto = ['nombre','correo','telefono'];
    const paginas = ['contacto', 'register', login];


    var path = window.location.pathname;
    var page = path.split("/").pop();
    page = page.split('.').shift();

    $("input").change(function(){
        let input;
        let attributeValue;
        let validityState;
        let inputId;
        if( page === paginas[0]){
            for( i = 0; i < contacto.length; i++){
                input = document.getElementById(contacto[i]);
                attributeValue = document.getElementById(contacto[i]).getAttribute("pattern");
                validityState = input.validity;
                inputId = input.getAttribute("id");
                if (validityState.tooLong){
                    input.setCustomValidity('El campo no puede superar los ' + input.getAttribute('maxlength') + 'caracteres');
                    $("#"+inputId).css("border", "red solid 1px");
                } else if (validityState.tooShort){
                    input.setCustomValidity('El campo debe superar los ' + input.getAttribute('minlength') + ' caracteres');
                    $("#"+inputId).css("border", "red solid 1px");
                } else if (validityState.patternMismatch){
                    input.setCustomValidity('El campo no cuadra con las posibilidades');
                    $("#"+inputId).css("border", "red solid 1px");
                }else{
                    $("#"+inputId).css('border', '');
                    input.setCustomValidity('');
                }
            }
        }

        if( page === paginas[1]){
            for( i = 0; i < contacto.length; i++){
                input = document.getElementById(contacto[i]);
                attributeValue = document.getElementById(contacto[i]).getAttribute("pattern");
                validityState = input.validity;
                if (validityState.tooLong){
                    input.setCustomValidity('El campo no puede superar los ' + input.getAttribute('maxlength') + 'caracteres');
                    $(input).css("border", "red solid 1px");
                } else if (validityState.tooShort){
                    input.setCustomValidity('El campo debe superar los ' + input.getAttribute('minlength') + ' caracteres');
                    $(input).css("border", "red solid 1px");
                } else if (validityState.patternMismatch){
                    input.setCustomValidity('El campo no cuadra con las posibilidades');
                    $(input).css("border", "red solid 1px");
                }else{
                    $(input).css('border', '');
                    input.setCustomValidity('');
                }
            }
        }
    });

});

