//Declarativas
// aplica hoisting -> podemos llamarla antes de declararla
function miFuncion(){
    return 3;
}

miFuncion();

//De expresión o anónimas
// no aplica hoisting -> tenemos que declararla y luego llamarla
var miFuncion =  function(a,b){
    return a + b;
}

miFuncion();

function saludarEstudiantes(estudiante){
    console.log(`Hola ${estudiante}`);
}


function sumar(a,b){
    var resultado = a + b; 
    return resultado;
}

function sumar(a,b){
    return a + b;
}