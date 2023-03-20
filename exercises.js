function vowels(myName){
    vowels = myName.match(/[aeiou]/gi).length
    console.log(vowels)
}
vowels("irumvaemmanuel")