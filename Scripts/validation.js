


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
                }else {
                    document.getElementById(contacto[i]).setCustomValidity('');
                }
            }
        }
    });

    //Metodo curioso a revisar

    function validate(inputID) {
        const input = document.getElementById(inputID);
        const validityState = input.validity;

        if (validityState.valueMissing) {
            input.setCustomValidity('You gotta fill this out, yo!');
        } else if (validityState.rangeUnderflow) {
            input.setCustomValidity('We need a higher number!');
        } else if (validityState.rangeOverflow) {
            input.setCustomValidity('Thats too high!');
        } else {
            input.setCustomValidity('');
        }

        input.reportValidity();
    }

});

