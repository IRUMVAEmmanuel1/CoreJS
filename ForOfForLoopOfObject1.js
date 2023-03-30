const car = {
	engine: true,
};

const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log("The sportCar object: ", sportsCar);

for (prop in sportsCar) {
	console.log(prop);
}

for (prop of Object.key(sportsCar)) {
	console.log(prop, ":", sportsCar[prop]);
}
