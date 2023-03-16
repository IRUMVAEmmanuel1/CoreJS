
function addTwoNums(a,b){
   try {
    if(typeof(a)!= "number"){
        console.log("the first argument is not a number")
    }
    else if(typeof(b) != "number"){
        console.log("b is not a number")
    }
    else{console.log(a+b)}

    
   } catch (err) {
    console.log("Can't calculate Sum")
   }
    
}

addTwoNums(5,"5")

console.log("it;s still working")