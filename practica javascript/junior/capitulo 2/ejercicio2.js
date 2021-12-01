let cantidad = prompt("cuantos alumnos son?");
let alumnosTotales= [];

for (i=0 ; i < cantidad; i++) {
    alumnosTotales[i] = [prompt("nombre del alumno" + (i+1)),0];
}
const tomarLista = (nombre,p)=>{
    let presencia= prompt(nombre);
    if (presencia == "p"|| presencia == "P"){
        alumnosTotales[p][1]++;
    }
}
for (i=0; i <10 ; i++){
     for (alumno in alumnosTotales){
         tomarLista(alumnosTotales[alumno][0],alumno);
     }
    }
for(alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    _________Presencias: ${alumnosTotales[alumno][1]} <br>
    _________Ausencias: ${10- parseInt(alumnosTotales[alumno][1])}`;
    if(10- alumnosTotales [alumno][1]>8){
        resultado +=" <b style = 'color:red'>REPROBADO/A POR GIL</b><br></br>"
    }else{
        resultado +="<br><br>"
    }
document.write(resultado);
}
