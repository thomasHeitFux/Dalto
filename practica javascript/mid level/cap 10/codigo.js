const sendButton = document.getElementById("snd-nota");

sendButton.addEventListener("click",()=>{
    let resultado,mensaje;
    try{
        prevRes = parseInt(document.getElementById("nota").value);
        if (isNaN(prevRes)){
            throw "GRACIOSO"
        }
       mensaje = definirMensaje(prevRes);
       resultado = verificarAprobacion(8,5,prevRes)
    } catch(e){
        resultado = "¿SOS GRACIOSO?";
        mensaje = "he descubierto que intentaste hackear el sitio"
    }
    abrirModal(resultado,mensaje);
})

const definirMensaje = (pr)=>{
    let resultado;
    switch (pr) {
        case 1: resultado = "No podes ser tan HDP";
        break;
        case 2: resultado = "Sos nefasto";
        break;
        case 3: resultado = "Sos malardo amigo";
        break;
        case 4: resultado = "No sabes casi nada";
        break;
        case 5: resultado = "Bastante malardo";
        break;
        case 6: resultado = "Casi mediocre";
        break;
        case 7: resultado = "Bien pero puede mejorar";
        break;
        case 8: resultado = "Buenardo";
        break;
        case 9: resultado = "¡Excelente!";
        break;
        case 10: resultado = "¡Insuperable!";
        break;
        default: resultado = null;
    }
    return resultado;
}

const verificarAprobacion = (nota1,nota2,prevRes)=>{
    promedio = (nota1 + nota2 + prevRes) /3;
    if(promedio >= 7){
        return "<span class='green'>APROBADO</span>";
    }
    return "<span class='red'>DESAPROBADO</span>";
}

const abrirModal = (res,msg)=>{
    document.querySelector(".resultado").innerHTML = res;
    document.querySelector(".mensaje").innerHTML = msg;
    let modal = document.querySelector(".modal-background");
    modal.style.animation = "aparecer 1s forwards";
    modal.style.display = "flex";
}