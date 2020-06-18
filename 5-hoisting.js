// cuando se llaman variables sin haberlas declarado

// Ejemplo 1: console imprime undefined
console.log(miNombre);

var miNombre = "Diego";

//por detras pasa lo siguiente
var miNombre = undefined;

console.log(miNombre);

// el error q normalmente cometemos
var miNombre = undefined;

console.log(miNombre + " Soy ese hoisting");

miNombre = "Diego";

// CON FUNCIONES TAMBIEN PUEDE OCURRIR
// las funciones se declaran antes q las variables
// Buenas prácticas : declarar funciones al principio
hey();

function hey(){
    console.log("Hola " + miNombre);
}

var miNombre = "Diego";
// imprime Hola undefined