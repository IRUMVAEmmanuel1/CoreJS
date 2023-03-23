// 1. Question

// function arraySwapper(arr, index1, index2){
//     let hold = arr[index1]
//     arr[index1] = arr[index2];
//     arr[index2] = hold;
//     return arr;
// }
// let arr=[1,2,3,4]
// console.log(arraySwapper(arr,1,2))

// 2.Question 
// function vowels(str){
//     let myName = str.match(/[aeiou]/gi).length;
//     console.log("totalVowels is",myName)
// }

// vowels("irumva")

// Q3. cart item
var arrayitem =[
    {
        itemName:"Mango",
        itemPrice:150,
        discount:20
    },
    {
        itemName:"Orange",
        itemPrice:450,
        discount:1.2
    },
    {
        itemName:"Apple",
        itemPrice:350,
        discount:1.2
    },
    {
        itemName:"Avocado",
        itemPrice:350,
        discount:0.4
    },
    {
        itemName:"Mango",
        itemPrice:50,
        discount:1.1
    },

]

let final=[];
for(item of arrayitem){
    final.push({...item,totalPrice:(item.itemPrice * item.discount)/100})
}

console.log(final)