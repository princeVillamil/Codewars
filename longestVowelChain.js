/*
The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

Good luck!

If you like substring Katas, please try:

Non-even substrings

Vowel-consonant lexicon

*/
function solve(s){
  let vowels = ['a','e','i','o','u',]
  let counter = 0, max = 0
  s.toLowerCase().split('').forEach((x,i)=>{
    if(vowels.includes(x) && !vowels.includes(s[i-1])){
     counter = 1
   }
    else if(vowels.includes(x) && vowels.includes(s[i-1])){
     counter++
   }
   if(counter>max)max = counter
 
  })
   return max
 }

 const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", function(){
  it("Test", () => {
    assert.strictEqual(solve("codewarriors"),2);
    assert.strictEqual(solve("suoidea"),3);
    assert.strictEqual(solve("ultrarevolutionariees"),3);
    assert.strictEqual(solve("strengthlessnesses"),1);
    assert.strictEqual(solve("cuboideonavicuare"),2);
    assert.strictEqual(solve("chrononhotonthuooaos"),5);
    assert.strictEqual(solve("iiihoovaeaaaoougjyaw"),8);
  })
});