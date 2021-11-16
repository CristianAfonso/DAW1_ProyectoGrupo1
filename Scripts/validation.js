$(document). ready(function (){
    const contacto = ['nombre','correo','telefono'];
    var path = window.location.pathname;
    var page = path.split("/").pop();
    page = page.split('.').shift();

    $("input").change(function(){
        let input;
        let validityState;
        let inputId;
        for( i = 0; i < contacto.length; i++){
            input = document.getElementById(contacto[i]);
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
    });
});

