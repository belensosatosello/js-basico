// implicita: el lenguaje cambia un valor de un tipo a otro
// 4 + "7" = 47 -> al encontrar un + asume que son strings x los dos son de tipos diferentes
// 4 * "7" = 28 ->  aca como el * se usa con numeros asume q es un numero

var a = 20;
var b = a + ""; 
console.log(b);
// b es undefined

// En este ejemplo, por la concatenación, ambos arrays son obligados a convertirse en strings, y luego se juntan.
var a = [1,2];
var b = [3,4]; 
a + b 

// explicita: es cuando nosotros obligamos a un valor que sea de otro tipo
var c = String(a);
console.log(c);
typeof c // string

var d = Number(c);
typeof d  // number


//Otro EJEMPLO
var a = 30; 
var b = a.toString();

var c = "100"; 
var d = +c; // Unary operator '+' de forma explícita convierte a número

// más ejemplos
var num1 = "3.14"; 
var num2 = 5 + +num1; //num2 = 8.14

/*  
Number + Number = Number
Number + String = String
String + Number = String
String + String = String
*/