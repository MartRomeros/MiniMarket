console.log("funciona");

var btnCompra = document.querySelector("#btn-comprar");
var total = document.querySelector("#total");

btnCompra.addEventListener("click",(evento)=>{
    if (total.innerText == "$0"){
        alert("No tienes productos en tu carrito de compra!")
        evento.preventDefault()
    }
});