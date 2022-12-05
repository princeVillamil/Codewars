/*
To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

The returned array should consist of each of the elements from the first array multiplied by the integer.

Example:

multiplyAll([1, 2, 3])(2) = [2, 4, 6];

You must not mutate the original array.

Here's a nice Youtube video about currying, which might help you if this is new to you.

*/
/* left blank for unlimited creativity :) */
function multiplyAll(arr){
  
  return (num)=>{
    return arr.map(x=>x*num)
  }
}
describe ("must return an array", function () {
  Test.expect(Array.isArray(multiplyAll([1])(1)));
});

describe ("array has correct length", function () {
  Test.expect(multiplyAll([1, 2])(1).length === 2, "array should have the same length as the array passed in as an argument");
});

describe ("returned array has correct values", function () {
  Test.assertSimilar(multiplyAll([1, 2, 3])(1), [1, 2, 3]);
  Test.assertSimilar(multiplyAll([1, 2, 3])(2), [2, 4, 6]);
  Test.assertSimilar(multiplyAll([1, 2, 3])(0), [0, 0, 0]);
  Test.assertSimilar(multiplyAll([])(10), [], "should return an empty array");
});