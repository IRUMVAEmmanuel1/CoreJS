'{"greeting":"Hello"}'
const jsonstr = '{"greeting":"Hello"}'

JSON.parse(jsonstr) // converting json into objects

const aPlainObj = JSON.parse(jsonstr)

aPlainObj.greeting = "Hi"

aPlainObj