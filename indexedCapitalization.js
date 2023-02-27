/*
Given a string and an array of integers representing indices, capitalize all letters at the given indices.

For example:

    capitalize("abcdef",[1,2,5]) = "aBCdeF"
    capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.

The input will be a lowercase string with no spaces and an array of digits.

Good luck!

Be sure to also try: 
*/
function capitalize(s,arr){
	s = s.split('')
  arr.forEach(x=>{
    if(x>s.length-1)return
    s[x] = s[x].toUpperCase()
  })
  return s.join('')
};
describe("Basic tests", function(){
  Test.assertDeepEquals(capitalize("abcdef",[1,2,5]),'aBCdeF');
  Test.assertDeepEquals(capitalize("abcdef",[1,2,5,100]),'aBCdeF');
  Test.assertDeepEquals(capitalize("codewars",[1,3,5,50]),'cOdEwArs');
  Test.assertDeepEquals(capitalize("abracadabra",[2,6,9,10]),'abRacaDabRA');
  Test.assertDeepEquals(capitalize("codewarriors",[5]),'codewArriors');
  Test.assertDeepEquals(capitalize("indexinglessons",[0]),'Indexinglessons');
  });