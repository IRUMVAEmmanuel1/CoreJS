const car = {
    engine:true
}

const sportsCar = object.create(car);
sportsCar.speed = "fast";
console.log("The sportCar object: ", sportsCar);

for(prop in sportsCar) {
    console.log(prop);

}

for ( prop of object.key(sportsCar)){
    console.log(prop, ":", sportsCar[prop])
}