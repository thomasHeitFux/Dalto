const nombre = document.getElementById("nombre");
const mail = document.getElementById("mail");
const materia = document.getElementById("materia");
const enviar = document.getElementById("btn-enviar");
let resultado =  document.querySelector(".resultado");
enviar.addEventListener("click",(e)=>{
    e.preventDefault();
    let error = validarCampos();
    if (error[0]){
        resultado.innerHTML = error[1]
        resultado.classList.add("red")
    } else{
        resultado.innerHTML = "Solicitud enviada correctamente";
        resultado.classList.add("green")
        resultado.classList.remove("red");
    }
})

const validarCampos = ()=>{
    let error =[];
    if (nombre.value.length < 5 || nombre.value.length > 40) {
        error[0] = true;
        error[1] = "El nombre es invalido.";
        return error;
    } else if (mail.value.length < 5||
              mail.value.length > 40 ||
              mail.value.indexOf("@") == -1|| 
              mail.value.indexOf(".") == -1){
        error[0] = true;
        error[1] = "El mail es invalido";
        return error;
    } else if (materia.value< 4 || materia.value> 40){
        error[0] = true;
        error[1] = "La materia no existe."
        return error;
    }


    error[0] = false;
    return error;
}