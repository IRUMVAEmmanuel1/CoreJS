const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']

const fruitAndBerries = [...fruits, ...berries]
console.log(fruitAndBerries)

const flying = { wings: 2 }
const cara = { wheels: 4 }
const flyingCar = {...flying, ...cara}
console.log(flyingCar) // {wings: 2, wheels: 4}


const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}

car1.speed = 201

console.log(car1.speed, car2.speed)



// ['apples'] 'not' ['apples','pears']