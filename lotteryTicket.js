/*
Time to win the lottery!

Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

Example ticket:

[ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]

To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

All inputs will be in the correct format. Strings on tickets are not always the same length.

*/
function bingo(ticket, win){
  let counter = 0
	ticket.forEach(x=>{
    let isWin = false;
    x[0].split('').forEach((j,i)=>{
      if(x[0].charCodeAt(i) === x[1])isWin = true
    })
    if(isWin)counter++
  })
  return counter>=win?'Winner!':'Loser!'
} 



const assert = require('chai').assert
describe("Tests",()=>{
  it('Fixed tests', ()=>{
    assert.strictEqual(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2), 'Loser!');
    assert.strictEqual(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1), 'Winner!');
    assert.strictEqual(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3), 'Loser!');
  });
});