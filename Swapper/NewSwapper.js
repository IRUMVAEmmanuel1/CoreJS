function swapper(arr, index1, index2) {
    let hold = arr[index1];
    arr[index1] = arr[index2]
    arr[index2] = hold;
    return arr;
}

let arr = [5,10,15,20]
console.log(swapper(arr,0,2))
