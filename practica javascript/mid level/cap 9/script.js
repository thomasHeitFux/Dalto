alumnos = [{
    nombre:"Thomas Dominguez",
    email: "thomas41392@gmail.com",
    materia: "literatura"
},{
    nombre:"Jasbir Singh",
    email: "jasbir@gmail.com",
    materia: "Matematica"
},{
    nombre:"Tu vieja",
    email: "Tuvieja@gmail.com",
    materia: "puteria 4"
}];

const boton = document.querySelector(".boton-confirmar");

for (alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"]
    let htmlcode = `
    <div class="grid-item nombre">${nombre}</div>
<div class="grid-item email">${email}</div>
<div class="grid-item materia">${materia}</div>
<div class="grid-item semana">
    <select class="semana-elegida">
        <option value="semana 1">semana 1</option>
        <option value="semana 2">semana 2</option>
    </select>
</div>`;
document.querySelector(".grid-container").innerHTML+= htmlcode;
} 

boton.addEventListener("click",()=>{
let confirmar = confirm("¿estas seguro que quieres confirmar?");
if(confirmar){
    document.body.removeChild(boton);
    let elementos = document.querySelectorAll(".semana");
let semanasElegidas = document.querySelectorAll(".semana-elegida");
    for(elemento in elementos){
        semana = elementos[elemento];
        semana.innerHTML = semanasElegidas[elemento].value;
}
    }
        })