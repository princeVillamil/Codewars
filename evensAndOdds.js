/*
This kata is about converting numbers to their binary or hexadecimal representation:

    If a number is even, convert it to binary.
    If a number is odd, convert it to hex.

Numbers will be positive. The hexadecimal string should be lowercased.

*/
function evensAndOdds(num){
  return num%2===0?num.toString(2):num.toString(16)
}

describe("Tests suite", function() {
	it("sample tests", function () {
		doTest(2,'10');
		doTest(13,'d');
		doTest(47,'2f');
		doTest(0,'0');
		doTest(12800,'11001000000000');
		doTest(8172381723,'1e71ca61b');
	});
});