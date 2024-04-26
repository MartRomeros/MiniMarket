function validarCampos(idCampo) {
    let campos = document.querySelectorAll("#"+idCampo);

    for (let i = 0; i < campos.length; i++) {
        const campo = campos[i];
        if(campo.value == ""){
            document.querySelector(".campos").style.border = "red 2px solid";
            document.querySelector(".error").innerHTML = "<p class='error'>Un campo debe de esta vacio!</p>";
            return false;
        }
    }
    document.querySelector(".error").innerHTML = "";
    return true;

}