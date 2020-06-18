// hacer un loop
// usar la funcion constructora

var model = ["Polo","Gol Trend", "Passat","Suran"];
var year = [2018, 2019, 2020];
var carList = [];

function car(brand,model,year){
    this.brand = brand;
    this.model = model;
    this.year = year;
}

function getCars(n){
    while(n>0){
        newModel = model[Math.floor(Math.random()* model.length)];
        newYear = year[Math.floor(Math.random()* year.length)];
        var newCar = new car("Volkswagen",newModel,newYear);
        carList.push(newCar);
        n--;
    }
}

getCars(30);
console.log(carList);