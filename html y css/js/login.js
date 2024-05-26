//validar login:
document.querySelector("#login").addEventListener("submit",(evento)=>{
    let camposLogin = document.querySelectorAll(".campo-log");
    for(let i=0;i<camposLogin.length;i++){
        if(camposLogin[i].value == ""){
            camposLogin[i].style.border = "1px red solid";
            document.querySelector("#error-log").style.color = "red";
            document.querySelector("#error-log").innerText = "Verifica los Campos!"
            evento.preventDefault();
        }else{
            camposLogin[i].style.border = "1px lightgrey solid";
            document.querySelector("#error-log").innerText = ""
        }
    }
});
//validar registro:
document.querySelector("#registro").addEventListener("submit",(evento)=>{

    let camposLogin = document.querySelectorAll(".campo");
    for(let i=0;i<camposLogin.length;i++){
        if(camposLogin[i].value == ""){
            camposLogin[i].style.border = "1px red solid";
            document.querySelector("#error").style.color = "red";
            document.querySelector("#error").innerText = "Verifica los Campos!"
            evento.preventDefault();
        }else{
            camposLogin[i].style.border = "1px lightgrey solid";
            document.querySelector("#error").innerText = "";
        }
    }

    let pass = document.querySelector("#pass");
    let confirmPass = document.querySelector("#confirm-pass");

    if(confirmPass.value != pass.value){
        document.querySelector("#confirm-pass").style.border = "red 1px solid";
        document.querySelector("#iguales").style.color = "red";
        document.querySelector("#iguales").innerText = "Las contraseñas no coinciden";
        evento.preventDefault();
    }else{
        document.querySelector("#iguales").innerText = "";
        document.querySelector("#confirm-pass").style.border = "1px lightgrey solid";
    }
});


addEventListener("load",()=>{
    fetch('https://randomuser.me/api/').then(function(response){
        return response.json();
    }).then(function(valor){
        let iniciales = valor.results[0].name.title;
        let nombre = valor.results[0].name.first;
        let apellido = valor.results[0].name.last;
        document.querySelector("#profile").src = valor.results[0].picture.thumbnail;
        document.querySelector("#nombre-user").innerText = iniciales + " " + nombre + " " + apellido;
    });

});




