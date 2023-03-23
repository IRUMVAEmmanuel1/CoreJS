function arraySwapper(arr, value1, value2) {
    // Save the value at the first index in a variable
    let hold = arr[value1];
  
    // Set the value at the first index to the value at the second index
    arr[value1] = arr[value2];
  
    // Set the value at the second index to the saved value
    arr[value2] = hold;
  
    // Return the modified array
    return arr;
  }

  let arr = [1, 2, 3, 4,5];
console.log(arraySwapper(arr, 1, 2)); // Output: [1, 3, 2, 4]


