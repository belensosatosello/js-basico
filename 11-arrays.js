//generar un array
var frutas = ["Manzana","Banana","Cereza","Frutilla"];

// imprime todo el array
console.log(frutas);
console.log(frutas.length);
console.log(frutas[0]);

// métodos del array
// AGREGA elementos al final
var masFrutas = frutas.push("Uvas");
console.log(frutas);

// BORRA el ultimo elemento
var ultimo = frutas.pop();
console.log(frutas);

// AGREGA elemento al principio
var nuevaLongitud = frutas.unshift("Uvas");

// BORRA el primer elemento no importa 
//si coincide o no con lo que se pasa como parametro
var borrarFruta = frutas.shift("Uvas");

var posicion = frutas.indexOf("Cereza");

//push permite agregar uno o mas elementos
// ya sean string o numeros
var numArray = [1,2,3,4,5];

function newNum(){
    numArray.push(6,7);
    console.log(numArray);
}

newNum();