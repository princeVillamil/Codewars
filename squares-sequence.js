/*
Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.
Examples

2, 5  -->  [2, 4, 16, 256, 65536]
3, 3  -->  [3, 9, 81]

*/
function squares(x, n) {
  return Array.from({length: n}, (element,index)=> Math.pow(x,Math.pow(2,index)))
}
const { assert } = require('chai');

describe("Sample tests", () => {
  it("Examples", () => {
    assert.sameOrderedMembers(squares(2,5),[2,4,16,256,65536]);   
    assert.sameOrderedMembers(squares(3,3),[3,9,81]);  
    assert.sameOrderedMembers(squares(5,3),[5,25,625]);  
    assert.sameOrderedMembers(squares(10,4),[10,100,10000,100000000]);  
  });
  
  it("Should return an empty array if n<=0", () =>{
    assert.sameOrderedMembers(squares(2,0), []);
    assert.sameOrderedMembers(squares(2,-5), []);
  });
});