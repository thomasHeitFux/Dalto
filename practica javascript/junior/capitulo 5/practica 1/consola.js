const materias = {
    matematica: [80,6,4,"matematicas"],
    literatura:[90,5,3,"literatura"],
    fisica:[78,9,4,"fisica"],
    quimica:[98,4,2,"quimica"]
}
const asistencia = ()=>{
    for(materia in materias){


        let asistencias = materias[materia][0];
        let promedio= materias[materia][1];
        let trabajos =materias[materia][2];

        console.log(materias[materia][3]);

        if (asistencias >=90 ){
            
            console.log("%c  asistencias en orden","color:green")
        }
        else{
            
            console.log("%c falta de asistencias","color:red")
        }
        if (promedio >=7){
            console.log("%c  promedio en orden","color:green")
        }
        else{
            
            console.log("%c promedio desaprobado","color:red")
        }
        if (trabajos >=3){
            console.log("%c  trabajos en orden","color:green")
        }
        else{
            
            console.log("%c faltan trabajos practicos","color:red")
        }
    }
}

asistencia();