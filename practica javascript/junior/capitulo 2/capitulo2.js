let free = false;

const validarCliente = (time) => {
    let edad = prompt ("cuantos años tenes");
    if (edad >18){
        if(time >= 2 && time < 7 && free == false) {
            alert(`son las ${time}:0090Hs pasas gratis`);
            free= true;
        }
        else{
            alert(`son las ${time}:00Hs paga la entrada para pasar`);
        }
        }
        else{
            alert("sos menor de edad, anda a tomar la chechona");
        }
}
validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(2);