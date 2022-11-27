/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Requirements:

    There must be a function for each number from 0 ("zero") to 9 ("nine")
    There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
    Each calculation consist of exactly one operation and two numbers
    The most outer function represents the left operand, the most inner function represents the right operand
    Division should be integer division. For example, this should return 2, not 2.666666...:

eight(dividedBy(three()));

*/
function zero(operations) {return operations ? operations(0):0}
function one(operations) {return operations ? operations(1):1}
function two(operations) {return operations ? operations(2):2}
function three(operations) {return operations ? operations(3):3}
function four(operations) {return operations ? operations(4):4}
function five(operations) {return operations ? operations(5):5}
function six(operations) {return operations ? operations(6):6}
function seven(operations) {return operations ? operations(7):7}
function eight(operations) {return operations ? operations(8):8}
function nine(operations) {return operations ? operations(9):9}

function plus(num) {return (numTwo)=>num+numTwo}
function minus(num) {return (numTwo)=>numTwo-num}
function times(num) {return (numTwo)=>numTwo*num}
function dividedBy(num) {return (numTwo)=>numTwo/num}

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(seven(times    (five ())), 35);
    assert.strictEqual(four (plus     (nine ())), 13);
    assert.strictEqual(eight(minus    (three())),  5);
    assert.strictEqual(six  (dividedBy(two  ())),  3);
  });
});