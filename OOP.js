let arrayitem = [
    {
        itemName: "Banana",
        ItemPrice: 2000,
        discount: 2.3,
    },
    {
        itemName: "Pizza",
        ItemPrice: 8000,
        discount: 1.5,
    },
    {
        itemName: "Apple",
        ItemPrice: 2000,
        discount: 2.3,
    },
    {
        itemName: "Mango",
        ItemPrice: 2200,
        discount: 2.3,
    },
    {
        itemName: "Biscuit vanilla",
        ItemPrice: 2000,
        discount: 2.3,
    },
    {
        itemName: "Yoghut",
        ItemPrice: 1000,
        discount: 2.3,
    },
]

let array =[];

for(let item of arrayitem){
    array.push({ ...item, totalPrice: item.ItemPrice*item.discount})
}
console.log(array);