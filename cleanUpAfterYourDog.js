/*
You have stumbled across the divine pleasure that is owning a dog and a garden. Now time to pick up all the cr@p! :D

Given a 2D array to represent your garden, you must find and collect all of the dog cr@p - represented by '@'.

You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap). If there are no bags then you can't pick anything up, so you can ignore cap.

You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again.

If you do, return 'Clean', else return 'Cr@p'.

Watch out though - if your dog is out there ('D'), he gets very touchy about being watched. If he is there you need to return 'Dog!!'.

For example:

x=
[[_,_,_,_,_,_]
[_,_,_,_,@,_]
[@,_,_,_,_,_]]

bags = 2, cap = 2

return --> 'Clean'

*/
function crap(x, bags, cap){
  let max = bags*cap
  x.forEach(x=>{
    x.forEach(innerX=>{
      if(innerX=='D'){
        max = 'D'
      }
      if(innerX == '@') max--
    })
  })
  return typeof max === 'string' ? 'Dog!!' : max < 0 ? "Cr@p" : 'Clean'
}
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Clean up after your dog", () => {
  it("Fixed tests", () => {
    assert.strictEqual(crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 2, 2), "Clean");
    assert.strictEqual(crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 1, 1), "Cr@p");
    assert.strictEqual(crap([['_','_'], ['_','@'], ['D','_']], 2, 2), "Dog!!");
  });
});