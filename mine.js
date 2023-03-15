function vowels(str){
    const count= str.match(/[aeiou]/gi).length;
    return count;
}
const user = prompt("Enter your name")
