/*
Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9

For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]
*/
multiplicationTable = function(size) {
  // insert code here
  let outerArr = []
  for(let i = 1; i<=size;i++){
    let innerArr = []
    for(let j = 1;j<=size;j++){
      innerArr.push(i*j)
    }
    outerArr.push(innerArr)
  }
  return outerArr
}

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertSimilar(multiplicationTable(3), [[1,2,3], [2,4,6], [3,6,9]]);
  });
});
