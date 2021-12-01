class calculadora{
    constructor(){}

    
sumar (num1,num2){
    return parseInt (num1) + parseInt(num2);
}
 restar (num1,num2){
    return parseInt(num1) - parseInt(num2);
}
 multiplicar (num1,num2){
    return parseInt(num1) * parseInt(num2);
}
 dividir (num1,num2){
    return parseInt(num1) / parseInt(num2);
}
potenciar (num1,exp){
    return num1**exp;
}
raizCubica (num1){
    return Math.sqrt(num1);
}
raizCuadrada (num1){
    return Math.cbrt(num1);
}
}
const Calculadora = new calculadora

    alert("que operacion vas a hacer?")
    let operacion = prompt("1: suma    2: resta    3: multiplicacion    4: division  5: potenciar  6: raiz cubica  7:  raiz cuadrada");
 
if (operacion ==1){
    let numero1= prompt("primer numero");
    let numero2=prompt("segundo numero");
    resultado = Calculadora.sumar(numero1,numero2)
    alert(`tu resultado es ${resultado}`);
}
else if (operacion ==2){
    let numero1= prompt("primer numero");
    let numero2=prompt("segundo numero");
    resultado = Calculadora.restar (numero1,numero2)
    alert(`tu resultado es ${resultado}`);
}
else if (operacion ==3){
    let numero1= prompt("primer numero");
    let numero2=prompt("segundo numero");
    resultado = Calculadora.multiplicar(numero1,numero2)
    alert(`tu resultado es ${resultado}`);
}
else if (operacion ==4){
    let numero1= prompt("primer numero");
    let numero2=prompt("segundo numero");
    resultado = Calculadora.dividir(numero1,numero2)
    alert(`tu resultado es ${resultado}`);
}
else if (operacion ==5){
    let numero1= prompt("numero a potenciar");
    let numero2=prompt("exponente");
    resultado = Calculadora.potenciar(numero1,numero2)
    alert(`tu resultado es ${resultado}`);
}
else if (operacion ==6){
    let numero1= prompt("numero");
    
    resultado = Calculadora.raizCubica(numero1)
    alert(`tu resultado es ${resultado}`);
}
    else if (operacion ==7){
        let numero1= prompt("numero");
        
        resultado = Calculadora.raizCuadrada(numero1)
        alert(`tu resultado es ${resultado}`);
    }

    else {
    alert("no se encontro tu operacion");
}