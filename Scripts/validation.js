


$(document). ready(function (){


    const contacto = ['nombre','correo','telefono'];
    const login = ['Uname', 'Pass', 'check'];
    const register = ['Name', 'Surname', 'Phone', 'Email', 'Pass', 'Pass2'];
    const paginas = ['contacto', 'register', 'login'];


    var path = window.location.pathname;
    var page = path.split("/").pop();
    page = page.split('.').shift();

    $("input").change(function(){
        let input;
        let attributeValue;
        let validityState;
        let inputId;
        let passwd1;
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
            for( i = 0; i < register.length; i++){
                input = document.getElementById(register[i]);
                attributeValue = document.getElementById(register[i]).getAttribute("pattern");
                validityState = input.validity;
                inputId = input.getAttribute("id");
                /* if(inputId == 'Pass2' ){
                    passwd1 = document.getElementById("Pass").getAttribute("value"); 
                    $('Pass2').attr('pattern', ''+passwd1);
                } */
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

        if( page === paginas[2]){
            for( i = 0; i < login.length; i++){
                input = document.getElementById(login[i]);
                attributeValue = document.getElementById(login[i]).getAttribute("pattern");
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
    });

});

