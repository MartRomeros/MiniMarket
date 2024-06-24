//data-bs-target="#staticBackdrop" data-bs-toggle="modal"

console.log("funcionado")

var menus = document.querySelectorAll(".nav-link");
var btnes = document.querySelectorAll(".col-md-3 > a");

btnes.forEach(function(boton,index){

    boton.addEventListener("click",(evento)=>{
        for(let i=0; i<menus.length; i++){
            if(menus[i].innerText == "Inicio de Sesión"){
                boton.setAttribute("data-bs-target","#staticBackdrop");
                boton.setAttribute("data-bs-toggle","modal");
                boton.click();
                evento.preventDefault();
            }else{
                boton.setAttribute("data-bs-target","");
                boton.setAttribute("data-bs-toggle","");
            }
        }

    });

});

var carrito = document.querySelector("#nro-carrito");

carrito.addEventListener("click",(evento)=>{
    if (carrito.innerText == 0){
        document.querySelector(".modal-body").innerText = "No has agregado ningun producto al carrito!";
        carrito.setAttribute("data-bs-target","#staticBackdrop");
        carrito.setAttribute("data-bs-toggle","modal");
        carrito.click();
        evento.preventDefault();
        
    }else{
        document.querySelector(".modal-body").innerText = "No puedes agregar Productos al carrito si no iniciaste sesión";
        carrito.setAttribute("data-bs-target","");
        carrito.setAttribute("data-bs-toggle","");
        carrito.click();
    }
});
