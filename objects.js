var assistantManager = {
    rangeTitesPerTurn:3,
    socialSkills:30,
    streetSmats:30,
    health:40,
    specialAbility: "Young and ambitions",
    greetings: "Let's make some money"
}

var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
}
console.log(table);//display the object in the developer console

var house = {
    rooms: 3,
    color: "brown",
    priceUSD: 10000,
}
var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;
house2.windows = 20;
console.log(house2); // {rooms: 3, color: "brown", priceUSD: 10000}
house.windows = 10;
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000, windows: 10}




var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}