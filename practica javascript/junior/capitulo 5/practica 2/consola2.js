let tp = "100 minutos hacabajos preacticos";
let estudios= "100 minutos de estudio";
let trabajo ="240 min de trabajo";
let homework= "30 min de cosas de la casa";
let descanso ="10 minutos de descanso";

console.log("TAREAS");
for (i=0 ; i<14; i++){
    if(i==0){
        console.groupCollapsed("semana 1")
    }
    console.group("dia"+ (i+1));
    console.log(trabajo);
    console.log(descanso);
    console.log(estudios);
    console.log(tp);
    console.log(homework);
    console.groupEnd();
    if (i ==6){
        console.groupEnd();
        console.groupCollapsed("semana 2")
    }
}
console.groupEnd();
console.groupEnd();