/*
Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

Find the number of Friday 13th in the given year.

Input: Year in Gregorian calendar as integer.

Output: Number of Black Fridays in the year as an integer.

Examples:

unluckyDays(2015) == 3
unluckyDays(1986) == 1


*/
function unluckyDays(year){
  //your code here
  let counter = 0
  for(let i = 0; i<12;i++){
    if(new Date(year, i, 13).getDay()===5)counter++
  }
  return counter
}
describe("Basic Tests",() =>{
  Test.assertEquals(unluckyDays(1586), 1, "should be: 1");
  Test.assertEquals(unluckyDays(1001), 3, "should be: 3");
  Test.assertEquals(unluckyDays(2819), 2, "should be: 2");
  Test.assertEquals(unluckyDays(2792), 2, "should be: 2");
  Test.assertEquals(unluckyDays(2723), 2, "should be: 2");
  Test.assertEquals(unluckyDays(1909), 1, "should be: 1");
  Test.assertEquals(unluckyDays(1812), 2, "should be: 2");
  Test.assertEquals(unluckyDays(1618), 2, "should be: 2");
  Test.assertEquals(unluckyDays(2132), 1, "should be: 1");
  Test.assertEquals(unluckyDays(2065), 3, "should be: 3");
  })