/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

*/
function solution(str, ending){
    // TODO: complete
    return str.endsWith(ending)
}

//repeat 
function solution(str, ending){
    // TODO: complete
    return str.split('').reverse().slice(0,ending.length).reverse().join('').includes(ending)
  }