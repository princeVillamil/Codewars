/*
In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

For example:

solve("xyab","xzca") = "ybzc" 
--The first string has 'yb' which is not in the second string. 
--The second string has 'zc' which is not in the first string. 

Notice also that you return the characters from the first string concatenated with those from the second string.

More examples in the tests cases.

Good luck!

Please also try Simple remove duplicates

*/
function solve(a,b){
	a = a.split('')
  b = b.split('')
  let newStr = ''
  for(let letter of a){
    if(!b.includes(letter)) newStr+=letter
  }
  for(let letter of b){
    if(!a.includes(letter)) newStr+=letter
  }
  return newStr
  
};
describe("Basic tests", function(){
  Test.assertEquals(solve("xyab","xzca"),"ybzc");
  Test.assertEquals(solve("xyabb","xzca"),"ybbzc");
  Test.assertEquals(solve("abcd","xyz"),"abcdxyz");
  Test.assertEquals(solve("xxx","xzca"),"zca");
  });