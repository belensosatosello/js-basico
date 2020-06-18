Boolean(); // false


//TRUE
Boolean(1); // 1 o mayor
Boolean("0");
Boolean("false");
Boolean({});
Boolean([]);
Boolean(function(){}); 


//FALSE
Boolean(0);
Boolean(null);
Boolean(undefined);
Boolean(Nan);
Boolean("");
Boolean('');


// OPERADORES BINARIOS 
// + - * /
// Se pueden usar con numeros o otros valores 
// OPERADOR UNITARIO
// ! negación
!false

// OPERADOR DE ASIGNACION
var a = 1;

// COMPARADORES
3 == "3"    //true xq compara el valor
3 === "3"   //false xq compara valor y tipo

// < > <= >=  
// &&   ||
//  edad++ 
// edad +=2