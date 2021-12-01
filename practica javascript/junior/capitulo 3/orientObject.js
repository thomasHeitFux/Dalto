
class animal {
    constructor(especie,edad,color,){
        this.especie = especie;
        this.edad= edad;
        this.color = color;
        this.info = `soy ${this.especie}, tengo ${this.edad} años y soy de color  ${this.color}`;
    }
    verInfo(){
        document.write(this.info + "<br>")
    }
    ladrar (){
        if(this.especie == "perro")
        document.write("el perro ladra:waw"+ "<br>");
    
    else {
        document.write("no puede ladrar ya que es " + this.especie + "<br>");
    }}
}

class ave extends animal {
    constructor(especie,edad,color,vuelo){
        super(especie,edad,color);
        this.vuelo = vuelo;
    }
    volar(){
        alert("el pajaro esta volando");
    }
}

const perro = new animal("perro",4,"violeta");
const vaca = new animal("vaca",78,"blanco y negro");
const pajaro= new ave("pajaro",6,"verde");
const rinoceronte = new animal("rinoceronte",3,"gris");

perro.ladrar();
vaca.ladrar();
pajaro.volar();
rinoceronte.ladrar();
