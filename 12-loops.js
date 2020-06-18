var estudiantes = ["Maria","Sergio","Rosa","Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

// opcion 1
for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

// opcion 2 - FOR OF
for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

//opcion 3 while (va removiendo los elementos del array)
while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}