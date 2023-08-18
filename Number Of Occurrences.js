/*
Write a function that returns the number of occurrences of an element in an array.

This function will be defined as a property of Array with the help of the method Object.defineProperty, which allows to define a new method directly on the object (more info about that you can find on MDN).
Examples

var arr = [0, 1, 2, 2, 3];
arr.numberOfOccurrences(0) === 1;
arr.numberOfOccurrences(4) === 0;
arr.numberOfOccurrences(2) === 2;
arr.numberOfOccurrences(3) === 1;

*/

Array.prototype.numberOfOccurrences = function (element){
  let counter = 0;
  for(let i in this){
    if(this[i] == element) counter++
  }
  return counter;
}
const chai = require('chai');
const assert = chai.assert;

describe("Number of Occurrences", () => {
  it("Sample tests", () => {
    var arr = [0, 1, 2, 2, 3];
    assert.strictEqual(arr.slice().numberOfOccurrences(0), 1, `Incorrect answer for 0, arr = [0, 1, 2, 2, 3]`);
    assert.strictEqual(arr.slice().numberOfOccurrences(4), 0, `Incorrect answer for 4, arr = [0, 1, 2, 2, 3]`);
    assert.strictEqual(arr.slice().numberOfOccurrences(2), 2, `Incorrect answer for 2, arr = [0, 1, 2, 2, 3]`);
    assert.strictEqual(arr.slice().numberOfOccurrences(3), 1, `Incorrect answer for 3, arr = [0, 1, 2, 2, 3]`);
  });
});