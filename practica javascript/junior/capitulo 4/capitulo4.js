const obtenerInfo = (materia)=>{
    materias={
        fisica: ["perez","pedro","juan","pepito","cofla","maria"],
        programacion:["dalto","juanca","pedro","pepito","cofla","maria"],
        logica:["rodriguez","pedro","juan","pepito","cofla",],
        quimica:["gutierrez","pedro","pepito","cofla","maria","jose"],
    }
if(materias[materia] !== undefined ){
    return [materias[materia],materia];
    }
    else{
        return materias;
    }
}
const mostrarInfo =(materia)=>{
    let informacion = obtenerInfo(materia);

if (informacion !== false){
    let profesor = informacion[0][0];
     alumnos = informacion[0]; 
     alumnos.shift();
    document.write(` el profesor de  <b>${informacion[1]}</b> es: <b style="color:red">${profesor}</b><br>
    los alumnos son : <b style="color:blue">${alumnos}</b><br><br>`);
}
}
const cantidadDeClases = (alumno)=>{
    let informacion = obtenerInfo();
    let clasesPresentes=[]; 
    let cantidadTotal = 0;
    for (info in informacion){
        if (informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(""+info);
        }
    }
   return `<b style= "color:blue"> ${alumno}</b> esta en <b>${cantidadTotal} clases</b>: <b style="color:green">${clasesPresentes}</b><br> <br>`;
}

mostrarInfo("fisica");
mostrarInfo("programacion");
mostrarInfo("logica");
mostrarInfo("quimica");

document.write(cantidadDeClases("cofla"));

