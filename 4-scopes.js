var miNombre = "Belen";

function nombre(){
    var miApellido = "Sosa";
    console.log(miNombre + " " + miApellido);
}

nombre();


// Ejemplo 1, cómo con una funcion podemos vambiar el valor de la variable global
// Aqui la variable dentro de la funcion nombre sobreescribe
//  a la variable global en lugar de declarar una nueva local
var miNombre = "Diego"

function nombre(usuario) {
    miNombre = usuario;
    console.log(miNombre); 
}

nombre("Oscar");

console.log(`Hola ${miNombre}, cómo estás?`);