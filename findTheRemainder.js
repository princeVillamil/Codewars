/*
Task:

Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

Division by zero should return NaN.
*/

function remainder(n, m){
  // Divide the larger argument by the smaller argument and return the remainder
  let max = Math.max(...[n,m]),
      min = Math.min(...[n,m])
  return min==0 ? NaN : (max%min)
}
const assert = require('chai').assert;
describe('Remainder Function', () => {
  it('Should handle arguments and math as defined in specificaitons', () => {
    assert.strictEqual(remainder(17,5), 2, 'Returned value should be the value left over after dividing as much as possible. For input n = 17, m = 5');
    assert.strictEqual(remainder(13, 72), remainder(72, 13), 'The order the arguments are passed should not matter');
    assert.isNaN(remainder(1, 0), 'Divide by zero should return NaN');
    assert.isNaN(remainder(0, 0), 'Divide by zero should return NaN');
  });
});