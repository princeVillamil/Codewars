/*
Filter the number

Oh, no! The number has been mixed up with the text. Your goal is to retrieve the 
number from the text, can you return the number back to its original state?
Task

Your task is to return a number from a string.
Details

You will be given a string of numbers and letters mixed up, you have to return 
all the numbers in that string in the order they occur.

*/
var filterString = function(value) {
  let num = ''
  for(let i=0;i<value.length;i++){
    if(!isNaN(value[i])) num+=value[i]
  }
  console.log(num)
  return parseInt(num)
}
filterString("123")//, 123, 'Just return the numbers')
filterString("a1b2c3")//, 123, 'Just return the numbers')
filterString("aa1bb2cc3dd")//, 123, 'Just return the numbers')