var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre: "TV", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "Teclado", costo: 500},
    { nombre: "Audífonos", costo: 1700},
]

// FILTER
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500});

// Map 
// devuelve un array solo con nombres
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
});

// FIND -> busca un articulo, si no lo encuentras no devuelvas nada
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop";
});

// For each
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
})

//Some -> valida una condicion y devuelve true or false
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
})