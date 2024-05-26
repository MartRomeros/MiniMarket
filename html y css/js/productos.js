var botonesAgregado = document.querySelectorAll(".agregar");
botonesAgregado.forEach(function(boton,index){
    boton.addEventListener("click",()=>{
        boton.style.background = "lightgrey";
        boton.style.color = "black";
        boton.innerText = "Agregado";
        document.querySelector("#productos").remove;
    });
});