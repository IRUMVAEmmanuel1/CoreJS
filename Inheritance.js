let bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true


}

let eagle1 = Object.create(bird);
console.log("Eagle1: ", eagle1)
console.log("eagle1 has wings:", eagle1.hasWings)
console.log("eagle1 can fly:", eagle1.hasWings)