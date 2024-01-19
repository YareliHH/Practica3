import {adicion,sustraccion,producto,div,mod,unoEntre,cuadrado,raiz} from './calculadora.js';
var display = document.getElementById('display');
var btn0= document.getElementById("cero");
var btn1 = document.getElementById("uno");
var btn2 = document.getElementById("dos");
var btn3 = document.getElementById("tres");
var btn4 = document.getElementById("cuatro");
var btn5 = document.getElementById("cinco");
var btn6 = document.getElementById("seis");
var btn7 = document.getElementById("siete");
var btn8 = document.getElementById("ocho");
var btn9 = document.getElementById("nueve");
var puntoDec = document.getElementById("puntoDecimal");
var CE = document.getElementById("borrarTodo");
var C = document.getElementById("borrarTodo2");
var opDivision = document.getElementById("division");
var opMultiplicacion = document.getElementById("multiplicacion");
var opMenos = document.getElementById("menos");
var opMas = document.getElementById("mas");
var opMod = document.getElementById("modulo");
var opIgual = document.getElementById("igual");
var opIncertidumbre = document.getElementById("incertidumbre");
var opUnoDivididox = document.getElementById("unoDivididox");
var opCuadrado = document.getElementById("cuadrado");
var opRaizCuadrada = document.getElementById("raizCuadrada");
let val1=0;
let val2=0;
let op='';
btn0.addEventListener("click",()=>{
    if(display.value =="0"){
        display.value="0";
    }
    else{
        display.value+="0";
    }
});
btn1.addEventListener("click", ()=>{
    if (display.value === "0") {
        display.value = "1";
    } else {
        display.value += "1";
    }
});
btn2.addEventListener("click",()=>{
    if (display.value === "0") {
        display.value = "2";
    } else {
        display.value += "2";
    }
});
btn3.addEventListener("click",()=>{
    if (display.value === "0") {
        display.value = "3";
    } else {
        display.value += "3";
    }
});
btn4.addEventListener("click",()=>{
    if (display.value === "0") {
        display.value = "4";
    } else {
        display.value += "4";
    }
});
btn5.addEventListener("click",()=>{
    if (display.value === "0") {
        display.value = "5";
    } else {
        display.value += "5";
    }
});
btn6.addEventListener("click",()=>{
    if (display.value === "0") {
        display.value = "6";
    } else {
        display.value += "6";
    }
});
btn7.addEventListener("click",()=>{
    if (display.value === "0") {
        display.value = "7";
    } else {
        display.value += "7";
    }
});
btn8.addEventListener("click",()=>{
    if (display.value === "0") {
        display.value = "8";
    } else {
        display.value += "8";
    }
});
btn9.addEventListener("click",()=>{
    if (display.value === "0") {
        display.value = "9";
    } else {
        display.value += "9";
    }
});
puntoDec.addEventListener("click",()=>{
    if(display.value.includes('.')){
        display.value+="";
    }
    else{
        display.value+=".";
    }
});
borrar.addEventListener("click", ()=>{
    if ( display.value.length > 0) {
        var nuevoValor =  display.value.slice(0, -1);
        display.value = nuevoValor;
        if(nuevoValor.length ==0)
            display.value ="0";
    }
});
CE.addEventListener("click",()=>{
    display.value="0";
});
C.addEventListener("click",()=>{
    display.value="0";
});
opDivision.addEventListener("click", () => {
    op = 'div';
    val1 = display.value;
    display.value = "0";
});
opMultiplicacion.addEventListener("click", () => {
    op = 'mul';
    val1 = display.value;
    display.value = "0";
});
opMenos.addEventListener("click", () =>{
    op = 'res';
    val1 = display.value;
    display.value = "0";
});
opMas.addEventListener("click", () =>{
    op = 'sum';
    val1 = display.value;
    display.value = "0";
});
opMod.addEventListener("click", () =>{
    op = 'mod';
    val1 = display.value;
    display.value = "0";
});
opIncertidumbre.addEventListener("click",()=>{
    if(display.value.includes('-'))
        display.value=display.value.slice(1);
    else
        display.value="-"+display.value;
});
opUnoDivididox.addEventListener("click",()=>{
    val1= display.value;
    var res = unoEntre(parseFloat(val1)); 
    display.value = res;
});
opCuadrado.addEventListener("click",()=>{
    val1= display.value;
    var res = cuadrado(parseFloat(val1)); 
    display.value = res;
});
opRaizCuadrada.addEventListener("click",()=>{
    val1= display.value;
    var res = raiz(parseFloat(val1)); 
    display.value = res;
});

opIgual.addEventListener("click", ()=>{
    switch (op) {
        case 'sum':
            val2 = display.value;
            var res = adicion(parseFloat(val1), parseFloat(val2)); 
            display.value = res;
            break;
        case 'res':
            val2 = display.value;
            var res = sustraccion(parseFloat(val1), parseFloat(val2));
            display.value = res;
            break;
        case 'mul':
            val2 = display.value;
            var res = producto(parseFloat(val1), parseFloat(val2));
            display.value = res;
            break;
        case 'div':
            val2 = display.value;
            var res = div(parseFloat(val1), parseFloat(val2));
            display.value = res;
            break;
        case 'mod':
            val2 = display.value;
            var res = mod(parseFloat(val1), parseFloat(val2));
            display.value = res;
            break;
    }
});