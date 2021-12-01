const contenedor =document.querySelector(".flex-container");


function crearLlaves (nombre,modelo,precio){
    img = "<img class='llave-img' src='llave.png'>"
    nombre = `<h3>${nombre}</h3>`;
    modelo = `<h4>${modelo}</h4>`;
    precio = `<p>precio:<b>$${precio}</b></p>`;
    return[img,nombre,modelo,precio];
}

    

let documentfragment = document.createDocumentFragment();
for (i=1;i<=20;i++){
let modelRandom = Math.round(Math.random()*10000);
let precioRandom = Math.round(Math.random()*10+40);
let llave = crearLlaves(`llave: ${i}`,`modelo: ${modelRandom}`,` ${precioRandom}`);
let div = document.createElement("DIV");
div.classList.add(`item-${i}`,`flex-item`);
div.addEventListener("click",()=>{document.querySelector(".key-data").value = modelRandom});
div.tabIndex = i;
div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
documentfragment.appendChild(div);
}
contenedor.appendChild(documentfragment)


