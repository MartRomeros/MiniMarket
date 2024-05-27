function generarMonedas() {
    fetch('https://mindicador.cl/api').then(function (response) {
        return response.json();
    }).then(function (valor) {
        let moneda = document.querySelector("#destino").value;
        let total = document.querySelector("#total").innerText;
        switch (moneda) {
            case "clp":
                document.querySelector("#convertido").innerText = "Total a pagar: " + total + " CLP";
                break;
            case "dolar":
                let dolar = total / valor.dolar.valor;
                document.querySelector("#convertido").innerText = "Total a pagar: " + dolar.toFixed(2) + " US";
                break;
            case "euro":
                let euro = total / valor.euro.valor
                document.querySelector("#convertido").innerText = "Total a pagar: " + euro.toFixed(2) + " €";
                break;
            default:
                break;
        }
    });
}

//para aumentar la cantidad de productos:
var btnAumento = document.querySelectorAll(".aumento");
const precios = document.querySelectorAll(".precio");
var btnDecremento = document.querySelectorAll(".decremento");

btnAumento.forEach(function (boton, index) {
    boton.addEventListener("click", function () {
        let cantidad = document.querySelectorAll(".cantidad");
        if (cantidad[index].innerText == 10) {
            alert("solo puedes agregar un maximo de 10!");
        } else {
            cantidad[index].innerText = parseInt(cantidad[index].innerText) + 1;
        }
    });
});

var cantidad = document.querySelectorAll(".cantidad");
var cartas = document.querySelectorAll(".card");
btnDecremento.forEach(function (boton, index) {
    boton.addEventListener("click", function () {
        if (cantidad[index].innerText == 0) {
            cartas[index].remove();
        } else {
            cantidad[index].innerText = parseInt(cantidad[index].innerText) - 1;
        }
    });
});
document.querySelector("#conversion").addEventListener("click", generarMonedas);

