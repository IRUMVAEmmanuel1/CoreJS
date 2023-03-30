const result = []
const drone = {
    speed:100,
    color:"Yellow"
}

dronekey = Object.keys(drone)
dronekey.forEach(function(key){
    result.push(key, drone[key])
})

console.log(result)