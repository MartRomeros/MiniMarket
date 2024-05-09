function validarCampos(nombreCampo) {
    let campos = document.querySelectorAll("." + nombreCampo);
    for (let i = 0; i < campos.length; i++) {
        if (campos[i].value == "") {
            alert("Verifica los campos");
            document.querySelector("#alerta").style.color = "red";
            campos[i].style.border = "1px red solid";
            document.querySelector("#alerta").innerHTML = "Verifica los campos!";
            return false;

        } else {
            document.querySelector("#alerta").style.color = "red";
            document.querySelector("#alerta").innerHTML = "";
            campos[i].style.border = "rgb(163, 163, 163) 1px solid";
        }

    }
    return true;
}


function convertirMonedas() {
    let precioConvertido = document.querySelector("#precio-conversion").innerText;
    let opcion = document.querySelector("#destino");
    let opcionEscogida = opcion.value;
    fetch('https://mindicador.cl/api').then(function (response) {
        return response.json();
    }).then(function (valor) {
        //document.getElementById("UF").innerHTML = 'El valor actual de la UF es $' + dailyIndicators.uf.valor;
        switch (opcionEscogida) {
            case "CLP":
                document.querySelector("#precio-conversion").innerText = precioConvertido;
                document.querySelector("#moneda-conversion").innerText = "CLP";
                break;
            case "dolar":
                precioConvertido = parseInt(precioConvertido / valor.dolar.valor);
                document.querySelector("#precio-conversion").innerText = precioConvertido.toFixed(2);
                document.querySelector("#moneda-conversion").innerText = "US";
                break;
            case "UF":
                document.querySelector("#precio-conversion").innerText = precioConvertido;
                document.querySelector("#moneda-conversion").innerText = "UF";
                break;
            case "UTM":
                document.querySelector("#precio-conversion").innerText = precioConvertido;
                document.querySelector("#moneda-conversion").innerText = "UTM";
                break;
            case "Euro":
                document.querySelector("#precio-conversion").innerText = precioConvertido;
                document.querySelector("#moneda-conversion").innerText = "Euro";
                break;

            default:
                break;
        }
    }).catch(function (error) {
        console.log('Requestfailed', error);
    });
}
