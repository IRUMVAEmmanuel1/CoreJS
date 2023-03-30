function vowels(str){
    const myname = str.match(/[aeiou]/gi).length
    return myname
}

const user = prompt("Enter Your name")

const Finalvowels = vowels(user)
console.log(Finalvowels)