var objeto = {};

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

// para traer los elementos del objeto
var marca = miAuto.marca;

// para llamar metodos del objeto
miAuto.detalleDelAuto();

// funcion constructora


function auto(marca,modelo,annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("Fiat","Argo",2020);
var autoNuevo2 = new auto("Fiat","Chronos",2019);