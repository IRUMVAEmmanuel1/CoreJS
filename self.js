function myvowels(str) {
	var myname = str.match(/[aeiou]/gi).length;
	console.log("Vowels which is in ", str, "is", myname);
}

myvowels("mukamuroreunkwere");

// Q2. name of product

var cart = [
	{
		pName: "banana",
		price: 2000,
		shop: simba,
		discount: 2.3,
	},
	{
		pName: "orange",
		price: 1000,
		shop: simba,
		discount: 2.3,
	},
	{
		pName: "mango",
		price: 100,
		shop: simba,
		discount: 2.3,
	},
	{
		pName: "Apple",
		price: 200,
		shop: simba,
		discount: 2.3,
	},
];

let itemHold = [];
for(item of cart) {
	itemHold.push(...cart(item, cart))
}