class celulares {
    constructor(color,peso,pantalla,camara,ram){
        this.color=color;
        this.peso= peso;
        this.pantalla= pantalla;
        this.camara=camara;
        this.ram=ram;
        this.encendido = false
    }
    botonEncendido(){
        if(this.encendido== false){
            alert("celular encendido");
            this.encendido = true
        } else {
            alert("celular apagado");
            this.encendido = false
        }
    }
    reiniciar(){
        if(this.encendido == true){
            alert("reiniciando celular");
        }
        else{
            alert("el celular esta apagado");
        }
    }
    tomarFotos(){
        alert(`foto tomada con una resolucion de ${this.camara}`)

    }
    mobileInfo(){
        return `
        Color: <b>${this.color}</b> </br>
        Peso:<b>${this.peso}</b></br>
        Pantalla:<b>${this.pantalla}</b></br>
        Camara:<b>${this.camara}</b></br>
        Ram:<b>${this.ram}</b></br>
        `}
}

//clase heredada

class celularAltaGama extends celulares{
    constructor(color,peso,pantalla,camara,ram,camaraExtra){
    super(color,peso,pantalla,camara,ram);
    this.camaraExtra = camaraExtra;
    }
    camaraLenta(){
        alert("estas grabando en camara lenta");
    }
    reconocimientoFacial(){
        alert("iniciando reconocimiento facial");
    }
    infoAltaGama(){
        return this.mobileInfo() + `resolucion camara extra:<b> ${this.camaraExtra}</b><br> `;
    }
}


 const celular1 = new celulares ("rojo","100gr","8 pulgadas","full hd","32gb");
 const celular2 = new celulares ("gris","150gr","5 pulgadas","full hd 4k","64gb");
 
     //imprime celulares 1/2 //

/* document.write(`
 ${celular1.mobileInfo()}</br>
 ${celular2.mobileInfo()}</br>
 `);    */

const celularA = new celularAltaGama ("negro","100gr","7'","fullHiperMega HD","320GB","120000px");
const celularB = new celularAltaGama ("bordo","96gr","8'","fullHiperMegaUltra 4k HD","1T","660000px");

 document.write(`
 ${celularA.infoAltaGama()}<br>
${celularB.infoAltaGama()}<br>
 `);