document.querySelector("form").addEventListener("submit",(evento) =>{
    let campos = document.querySelectorAll(".campo");
    for(let i=0;i<campos.length; i++){
        if(campos[i].value == ""){
            campos[i].style.border = "1px red solid";
            document.querySelector("#error").style.color = "red";
            document.querySelector("#error").innerText = "Verifica los campos!";
            evento.preventDefault();
        }else{
            campos[i].style.border = "1px lightgrey solid";
            document.querySelector("#error").style.color = "red";
            document.querySelector("#error").innerText = "";
        }
    }
});