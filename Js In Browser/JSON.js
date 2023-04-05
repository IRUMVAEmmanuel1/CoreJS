'{"greeting":"Hello"}'
const jsonstr = '{"greeting":"Hello"}'

JSON.parse(jsonstr) // converting json into objects

const aPlainObj = JSON.parse(jsonstr)

aPlainObj.greeting = "Hi"

aPlainObj


const data = {
    firstname: "John",
    lastname:"peter",
    greeting:"Hello"
}

const finalJson = JSON.stringify(data)

console.log(finalJson)