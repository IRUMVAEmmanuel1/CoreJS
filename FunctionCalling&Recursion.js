function example(){
    console.log("Line one");
    console.log("Line Two");
    console.log("Line Three");
}
example()


let counter =3 
function example(){
    console.log(counter);
    counter =counter-1;
    if(counter===0){
        return;
        example();
    }
}