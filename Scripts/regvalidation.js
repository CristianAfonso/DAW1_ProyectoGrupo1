//lista de regex para la validacion
const fullname = /^[a-z ,.'-]+$/;
const emailreg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const user= /^[a-zA-Z0-9]+$/;
const pass= /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/;
const phone = /(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/;

//onclick="validateInput()"
let name=document.getElementById("Name");
let userName=document.getElementById("Username");
let email=document.getElementById("Email");
let phonenum=document.getElementById("Phone");
let pwd=document.getElementById("Pass");
let conPwd=document.getElementById("Pass2");
let form=document.querySelector("form");

function validateInput(){
    if(name.value.trim()===""){
        onError(name,"nombre y appelido esta vacio");
    }else{
        if(!fullname.test(name.value.trim())) {
            onError(name, "nombre y appelido no valido");
        } else {
            onSuccess(name);
        }
    }
    if(phonenum.value.trim()===""){
        onError(phonenum,"numero de telefono esta vacio");
    }else{
        if(!phone.test(phonenum.value.trim())) {
            onError(phonenum, "numero de telefono no valido");
        } else {
            onSuccess(phonenum);
        }
    }

    if(userName.value.trim()===""){
        onError(userName,"usuario esta vacio");
    }else{
        if(!user.test(userName.value.trim())){
            onError(userName,"usuario no es valido");
        }else{
            onSuccess(userName);
        }
    }
    if(email.value.trim()===""){
        onError(email,"correo esta vacio");
    }else{
        if(!emailreg.test(email.value.trim())){
            onError(email,"correo no valido");
        }else{
            onSuccess(email);
        }
    }

    if(pwd.value.trim()===""){
        onError(pwd,"la contrasena esta vacia");
    }else{
        if(!pass.test(pwd.value.trim())){
            onError(pwd,"contrasena no valida");
        }else{
            onSuccess(pwd);
        }
    }
    if(conPwd.value.trim()===""){
        onError(conPwd,"la contrasena esta vacia");
    }else{
        if(pwd.value.trim()!==conPwd.value.trim()){
            onError(conPwd,"la contrasena no coincide");
        }
        else
            onSuccess(conPwd);
    }
}

document.querySelector("button")
    .addEventListener("click",(event)=>{
        event.preventDefault();

        validateInput();
    });

function onSuccess(input){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden";
    parent.classList.remove("error");
    parent.classList.add("success");
}
function onError(input,message){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible";
    messageEle.innerText=message;
    parent.classList.add("error");
    parent.classList.remove("success");

}