/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/
// complete the function
function solution(string) {
    return string.split("").map(x=>{
      if(x===x.toUpperCase()){
        x = " " + x
      }
      return x
    }).join('')
}
