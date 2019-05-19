/*
* Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
*
* For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
*
* Follow-up: what if you can't use division?
*/

function sumArray(arr, skipIndex) {
    let sum = 1;

    for(let i = 0; i < arr.length; i++) {
        if(i !== skipIndex) {
            sum = sum * arr[i];
        }
    }

    return sum
}

function productArray(arr) {
    const newArray = new Array(arr.length)

    for(let i = 0; i < arr.length; i++) {
        newArray[i] = sumArray(arr, i)
    }

    return newArray;
}

module.exports = productArray;