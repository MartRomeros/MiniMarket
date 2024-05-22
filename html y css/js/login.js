//funciones:
//funcion para validar formularios
function validarCampos(nombreCampo) {
    let campos = document.querySelectorAll("." + nombreCampo);
    for (let i = 0; i < campos.length; i++) {
        if (campos[i].value == "") {
            alert("Verifica los campos");
            document.querySelector("#alerta").style.color = "red";
            campos[i].style.border = "1px red solid";
            document.querySelector("#alerta").innerText = "Verifica los campos!";
            return false;

        } else {
            document.querySelector("#alerta").style.color = "black";
            document.querySelector("#alerta").innerText = "";
            campos[i].style.border = "rgb(163, 163, 163) 1px solid";
        }

    }
    return true;
}

//listeners
document.querySelector("form").addEventListener("submit", function (evento) {
    let campo = document.querySelector("input");
    let nombreClase = campo.className;
    if (!validarCampos(nombreClase)) {
        evento.preventDefault();
    }
});



