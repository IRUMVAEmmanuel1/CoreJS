function swapper(arr, index1, index2){
    let hold = arr[index1];

    arr[index2] = arr[index1]

    arr[index2] = hold;
    return arr

}
let arr=[1,2,3,4]
console.log(swapper(arr,1,2))