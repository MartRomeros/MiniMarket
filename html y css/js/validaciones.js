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

function agregarProducto() {
    let valor = document.querySelector("#granizo-transparente-valor").innerText;
    valor = parseInt(valor.substr(1));
    let cantidad = parseInt(document.querySelector(".cerveza").innerText);
    cantidad++;
    valor = valor * cantidad;
    document.querySelector(".cerveza").innerText = cantidad;
    document.querySelector("#granizo-transparente-valor").innerText = "$"+valor;
}


