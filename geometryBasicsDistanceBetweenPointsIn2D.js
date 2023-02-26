/*
This series of katas will introduce you to basics of doing geometry with computers.

Point objects have attributes x and y.

Write a function calculating distance between Point a and Point b.

Tests compare expected result and actual answer with tolerance of 1e-6.

*/
function distanceBetweenPoints(a, b) {
  console.log(a['x'] - b['x'])
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}
//Point { x: 3, y: 3 } Point { x: 3, y: 3 }
//(x2 – x1)² + (y2 – y1)²)
const assert = require('chai').assert;

describe("Solution", function(){
  it("should pass these sample tests", function(){
    doTest(new Point(    3,    3), new Point(  3,    3),         0);
    doTest(new Point(    1,    6), new Point(  4,    2),         5);
    doTest(new Point(-10.2, 12.5), new Point(0.3, 14.7), 10.728001);
  });
  
  function doTest(a, b, expected) {
    const actual = distanceBetweenPoints(a, b);
    assert.approximately(actual, expected, 1e-6, `Incorrect answer for:\n  a=new Point(${a.x}, ${a.y})\n  b=new Point(${b.x}, ${b.y})\n`);
  }
});