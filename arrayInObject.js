// inserting item in array
fruits.push("Apple");
fruits.push("pear")
// console.log(fruits)


// removing last option
fruits.pop();
// console.log(fruits)

// functions that takees all its arguments and pushes them into an array

function arrayInObject(one,two,three){
    var arr=[];
    arr.push(one);
    arr.push(two)
    arr.push(three)
    return arr
} 