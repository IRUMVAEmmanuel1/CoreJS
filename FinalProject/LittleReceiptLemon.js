// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(inclTax) {
    let output = '';
    for (let dish of dishes) {
        let price = dish.price;
        let tax = price * 0.2;
        let finalPrice = price + tax;
        if (inclTax) {
            outputText += `Dish: ${dish.name} price(incl.tax):$ ${finalPrice.toFixed(2)}\n`;
            
        }
        else {
            outputText += `Dish: ${dish.name} price(excl.tax):$ ${price.toFixed(2)}\n`;
        }
    }
    return outputText;
}

// Implement getDiscount()
function getDiscount() {
    
}
console.log(`Prices with 20% tax:`);
console.log(calculatePrice(true));
console.log(`Prices without tax:`);
console.log(calculatePrice(false));
