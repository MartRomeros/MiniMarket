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
            document.querySelector("#error").innerText = ""
        }
    }

});



