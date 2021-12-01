const materiasHTML = document.querySelector(".materias");

const materias = [
    {
        Nombre: "Fisica 4",
        Nota: 7
    },    {
        Nombre: "calculo 3",
        Nota: 8
    },    {
        Nombre: "Bases de datos 4",
        Nota: 4
    },    {
        Nombre: "Matematicas discretas",
        Nota: 5
    },    {
        Nombre: "Programacion 4",
        Nota: 9
    }
]

const obtenerMateria = (id)=>{
    return new Promise((resolve,reject)=>{
        materia = materias[id];
        if (materia == undefined) reject("La materia no existe");
            else setTimeout(()=>{resolve(materia)},Math.random()*1400);
    });
}
const devolverMaterias = async ()=>{
    let materia = [];
    for (let i = 0; i < materias.length; i++) {
        materia[i] =  await obtenerMateria(i);
      let newHTMLCode =`
      <div class="materia">
      <div class="nombre">${materia[i].Nombre}</div>
      <div class="nota">${materia[i].Nota}</div>
  </div>`;
  materiasHTML.innerHTML += newHTMLCode;
    }
}

devolverMaterias();