//data-bs-target="#staticBackdrop" data-bs-toggle="modal"

console.log("funcionado")

var menus = document.querySelectorAll(".nav-link");
var btnes = document.querySelectorAll(".col-md-3 > button");

btnes.forEach(function(boton,index){

    boton.addEventListener("click",(evento)=>{
        for(let i=0; i<menus.length; i++){
            if(menus[i].innerText == "Inicio de Sesión"){
                console.log("No esta logeado");
                boton.setAttribute("data-bs-target","#staticBackdrop");
                boton.setAttribute("data-bs-toggle","modal");
                boton.click();
                return;
            }else{
                boton.setAttribute("data-bs-target","");
                boton.setAttribute("data-bs-toggle","");
            }
        }

    });

});