// working with array in JS

// forEacch Method

// const fruits = ["kiwi", "mango", "apple", "pear"];
// function appendIndex(fruit, index) {
// 	console.log(`${index}. ${fruit}`);
// }
// fruits.forEach(appendIndex);

const nums = [0, 10, 20, 30, 40, 50];
nums.filter( function (num) {
	return num > 20;
});

[0,10,20,30,40,50].map( function(num) {
    return num / 10
})