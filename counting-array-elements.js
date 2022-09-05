/*
Write a function that takes an array and counts the number of each unique element present.

count(['james', 'james', 'john']) 
#=> { 'james': 2, 'john': 1}

*/
function count(array){
  //your code here
  let counts = {}
  array.forEach(x=>{
    if(counts.hasOwnProperty(x)){
      return counts[x] = counts[x] += 1
    }else{
      return counts[x] = 1
    }
  })
  return counts
}