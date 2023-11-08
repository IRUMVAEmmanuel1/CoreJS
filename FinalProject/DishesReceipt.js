const dishes = [
	{
		name: "Italian pasta",
		price: 9.55,
	},
	{
		name: "Rice with veggies",
		price: 8.65,
	},
	{
		name: "Chicken with potatoes",
		price: 15.55,
	},
	{
		name: "Vegetarian Pizza",
		price: 6.45,
	},
];
function calculatePrice(inclTax) {
	let outputText = "";
	for (let dish of dishes) {
		let price = dish.price;
		let tax = price * 0.2;
		let finalPrice = price + tax;
		if (inclTax) {
			outputText += `Dish: ${
				dish.name
			} Price (incl.tax): $ ${finalPrice.toFixed(2)}\n`;
		} else {
			outputText += `Dish: ${dish.name} Price (excl.tax): $ ${price.toFixed(
				2
			)}\n`;
		}
	}
	return outputText;
}

console.log("Prices with 20% tax:");
console.log(calculatePrice(true));
console.log("Prices without tax:");
console.log(calculatePrice(false));
