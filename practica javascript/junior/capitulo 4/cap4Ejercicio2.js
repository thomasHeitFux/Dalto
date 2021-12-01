
let materias= {
    fisica: ["perez","pedro","juan","pepito","cofla","maria"],
    programacion:["dalto","juanca","pedro","pepito","cofla","maria"],
    logica:["rodriguez","pedro","juan","pepito","cofla",],
    quimica:["gutierrez","pedro","pepito","cofla","maria","jose"]
}


 const inscribir=(alumno,materia)=> {
        personas = materias[materia];
                if (personas.length >=10) {
            document.write(`lo siento ${alumno}, las clases de ${materia} ya estan llenas <br></br>`);
        } else {
            personas.push(alumno)
            if (materia== "fisica"){
                materias= {
                    fisica: personas,
                    programacion:materias['programacion'],
                    logica:materias['logica'],
                    quimica:materias['quimica']
                }
            }
            else  if (materia== "programacion"){
                materias= {
                    fisica: materias['fisica'],
                    programacion:personas,
                    logica:materias['logica'],
                    quimica:materias['quimica']
                }
        }
           else  if (materia== "logica"){
            materias= {
                fisica: materias['fisica'],
                programacion:materias['programacion'],
                logica:personas,
                quimica:materias['quimica'],
            }
    }
            else  if (materia== "quimica"){
            materias= {
            fisica: materias['fisica'],
            programacion:materias['programacion'],
            logica:materias['logica'],
            quimica: personas
        }
    }
    document.write(`felicidades ${alumno}! te has inscrito a ${materia} correctamente.<br></br>`);
    }
}
document.write(materias['fisica']+ "<br>");
inscribir("chano","fisica");
inscribir("filip","fisica");
inscribir("santi","fisica");
inscribir("martin","fisica");
inscribir("leandro","fisica");
inscribir("sebas","fisica");
inscribir("facu","fisica");
inscribir("jony","fisica");
inscribir("raul","fisica");
inscribir("pepe","fisica");
inscribir("jonathan","fisica");
inscribir("rigoberto","fisica");
inscribir("pederasta","fisica");
inscribir("gerardo","fisica");
inscribir("ramses","fisica");
inscribir("pedrito","fisica");
inscribir("jorge","fisica");
inscribir("charly","fisica");
inscribir("cabezon","fisica");
inscribir("jtito","fisica");
inscribir("micho","fisica");
inscribir("negro","fisica");
inscribir("pachamama","fisica");




document.write("<br>"+ materias['fisica']);