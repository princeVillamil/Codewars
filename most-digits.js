/*
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.

*/
function findLongest(array){
    // code here
    let mostDig = 0
    array.forEach((x,i)=>{
      `${x}`.length > `${mostDig}`.length ? mostDig = x : x
    })
    return mostDig
}