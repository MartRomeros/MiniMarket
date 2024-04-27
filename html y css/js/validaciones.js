function validarUser(){
    let input=document.querySelector("#user");
    if(input.value.length >= 6){
        input.classList.add("correct");
        input.classList.remove("incorrect");
        document.querySelector("#error-user").innerHTML = "&nbsp;";
    }else{
        input.classList.add("incorrect");
        input.classList.remove("correct");
        document.querySelector("#error-user").innerHTML
         = "Error, ingrese minimo 6 caracteres!.";
    }
}