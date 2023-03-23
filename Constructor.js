

function Icecream1(flavor1){
    this.flavor1 = flavor1;
    this.meltIt1 = function(){
        console.log(`The ${this.meltIt1} icecream has melted`)
    }
}

let kiwiIcecream1 = new Icecream1('Kiwi')