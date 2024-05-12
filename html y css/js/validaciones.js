
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
    let precioChileno = document.querySelector("#total").innerText;
    let precioConvertido = document.querySelector("#precio-conversion").innerText;
    let opcion = document.querySelector("#destino");
    let opcionEscogida = opcion.value;
    fetch('https://mindicador.cl/api').then(function (response) {
        return response.json();
    }).then(function (valor) {
        //document.getElementById("UF").innerHTML = 'El valor actual de la UF es $' + dailyIndicators.uf.valor;
        switch (opcionEscogida) {
            case "CLP":
                document.querySelector("#precio-conversion").innerText = precioChileno.substr(1);
                document.querySelector("#moneda-conversion").innerText = "CLP";
                break;
            case "dolar":
                precioConvertido = parseInt(precioChileno.substr(1)) / valor.dolar.valor;
                document.querySelector("#precio-conversion").innerText = precioConvertido.toFixed(2);
                document.querySelector("#moneda-conversion").innerText = "US";
                break;
            case "Euro":
                precioConvertido = parseInt(precioChileno.substr(1)) / valor.euro.valor;
                document.querySelector("#precio-conversion").innerText = precioConvertido.toFixed(2);
                document.querySelector("#moneda-conversion").innerText = "€";
                break;

            default:
                break;
        }
    }).catch(function (error) {
        console.log('Requestfailed', error);
    });
}

function crearUser() {
    fetch('https://randomuser.me/api/').then(function (response) {
        return response.json();
    }).then(function (valor) {
        try {
            let nombreCompleto = document.querySelector("#info-portada").innerText.substr(0, 15);
            let correo = document.querySelector("#info-portada").innerText.substr(15);
            nombreCompleto = valor.results[0].name.first + " " + valor.results[0].name.last
            correo = valor.results[0].email;

            document.querySelector("#info-portada").innerText = nombreCompleto + "\n" + correo;
            document.querySelector("#nombre").value = valor.results[0].name.first;
            document.querySelector("#apellido").value = valor.results[0].name.last;
            document.querySelector("#correo").value = valor.results[0].email;
            document.querySelector("#pass").value = valor.results[0].login.password;
            document.querySelector("#confirm-pass").value = valor.results[0].login.password;
            document.querySelector("#direccion").value = valor.results[0].location.street.name + " " + valor.results[0].location.street.number;
            document.querySelector("#fono").value = valor.results[0].cell;
        } catch (error) {

        }

    }).catch(function (error) {
        console.log(error);
    })
}

addEventListener("load", crearUser, true);


