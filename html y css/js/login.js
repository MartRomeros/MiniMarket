//funciones:
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

function generarUsuarios() {
    fetch('https://randomuser.me/api/?results=5000').then(function (response) {
        return response.json();
    }).then(function (valor) {

        let perfiles = document.querySelectorAll(".img-thumbnail");
        for (let i = 0; i < perfiles.length; i++) {
            perfiles[i].src = valor.results[i].picture.thumbnail;

        }

        let nombres = document.querySelectorAll(".nombre");
        for (let i = 0; i < nombres.length; i++) {
            nombres[i].innerText = valor.results[i].name.title + " " + valor.results[i].name.first + " " + valor.results[i].name.last;
        }
    }).catch(function (error) {
        console.log(error);
    });
}


//listeners
document.querySelector("form").addEventListener("submit", function (evento) {
    let campo = document.querySelector("input");
    let nombreClase = campo.className;
    if (!validarCampos(nombreClase)) {
        evento.preventDefault();
    }
});

addEventListener("load", generarUsuarios, true);



