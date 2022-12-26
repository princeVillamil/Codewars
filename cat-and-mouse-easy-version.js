/*
You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:

C.....m returns 'Escaped!' <-- more than three characters between

C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.

*/
function catMouse(x){
  return x.split('').length - 2 <= 3 ? "Caught!" : "Escaped!"

}
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Cat and Mouse - Easy Version", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(catMouse('C....m'), "Escaped!");
    assert.strictEqual(catMouse('C..m'), "Caught!");
    assert.strictEqual(catMouse('C.....m'), "Escaped!");
  })
});