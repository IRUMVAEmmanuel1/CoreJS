// program to count the number of vowels in a string

function countVowel(str) { 

    // find the count of vowels
    const count = str.match(/[aeiou]/gi).length;

    // return number of vowels
    return count;
}

// take input
const string = input('Enter a string: ');

const result = countVowel(string);

console.log(result);