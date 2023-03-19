/*
Write a function that removes every lone 9 that is inbetween 7s.

"79712312" --> "7712312"
"79797"    --> "777"


*/

function sevenAte9(str) {
  return str.split('').filter((x,i)=>{
    if(x==9 && str[i-1]==7 && str[i+1] == 7) return false
    return true
  }).join('')
  
}

const { assert } = require('chai');

const test = (input, expected, message) => {
  it(`"${input}"`, () => {
    assert.strictEqual(sevenAte9(input), expected, message);
  });
}

describe('Basic tests', () => {
  const tests = [
    ['797', '77'],
    ['7979797', '7777'],
    ['165561786121789797', '16556178612178977'],
  ];

  for (const [input, expected] of tests) {
    test(input, expected);
  }
});