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


//funcion para generar comentarios en el login con random.user
function generarUsuarios() {
    //pedimos una solicitud a la api de random user, el metodo es muy similar a la de la api de las monedas
    fetch('https://randomuser.me/api/?results=5000').then(function (response) {
        return response.json();
    }).then(function (valor) {
        //generamos un arreglo con todas las imagenes que estan en la seccion de comentarios
        let perfiles = document.querySelectorAll(".img-thumbnail");
        //recorremos el arreglo y le colocamos la imagenes le ponemos la imagen que nos ofrece la api
        for (let i = 0; i < perfiles.length; i++) {
            perfiles[i].src = valor.results[i].picture.thumbnail;

        }

        //generamos un arreglo con todas las etiquetas que tendran el nombre del usuario
        let nombres = document.querySelectorAll(".nombre");
        //recorremos el arreglo y colocamos a cada etiqueta el nombre que nos ofrece la api
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

//agregamos un listener que nos permitira que al cargar la pagina se generen las imagenes y nombres
addEventListener("load", generarUsuarios, true);



