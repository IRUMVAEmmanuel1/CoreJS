var purchase1 = {
    itemName:'Banana',
    itemPrice: 120,
    tax: 1.2,
    totalprice: function(){
        var totalpay = this.itemPrice * this.tax;
        console.log("Total Price of ",this.itemName,"is",totalpay)
    }
}
purchase1.totalprice();

var purchase2 = {
    itemName:'Orange',
    itemPrice: 140,
    tax: 1.2,
    totalprice: function(){
        var totalpay = this.itemPrice * this.tax;
        console.log("Total Price of ",this.itemName,"is",totalpay)
    }
}
purchase2.totalprice();

var purchase3 = {
    itemName:'Mango',
    itemPrice: 40,
    tax: 1.3,
    totalprice: function(){
        var totalpay = this.itemPrice * this.tax;
        console.log("Total Price of ",this.itemName,"is",totalpay)
    }
}
purchase3.totalprice();