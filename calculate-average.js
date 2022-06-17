/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

*/
function find_average(array) {
    // your code here
    return array.length === 0 ? 0 : array.reduce((x, currentVal)=>x + currentVal)/array.length
}