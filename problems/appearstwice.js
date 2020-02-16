/**
 * Given an array of integers, you may assume that
 * every element appears twice expect one.  (So a.length >= 3.)
 * Return that one element.
 * 
 * {1, 9, 9, 1, 5, 12, 12} => 5
 * {12, 12, 1} => 1
 */
function findLonelyNumber(arrayOfNumbers) {
    let start = 0;

    arrayOfNumbers.forEach((num) => {
        // XOR
        start = start ^ num;
    })

    return start;
}