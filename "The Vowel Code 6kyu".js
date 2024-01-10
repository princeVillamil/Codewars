/*

6 kyu
The Vowel Code
3699193% of 1,9107,497 of 17,289yaphi11 Issue Reported

    JavaScript
    Node v18.x

        VIM
        EMACS

Instructions
Output

Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5

For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

*/
var key = {
  "a": 1,
  "e": 2,
  "i": 3,
  "o": 4,
  "u": 5
}
var decoder = {
    1: "a",
    2: "e",
    3: "i",
    4: "o",
    5: "u"
}
function encode(string) {
  return string.split("").map(x=>{
    if(key[x]!== undefined) return x = key[x]
    else return x
  }).join("")
 }

function decode(string) {
  return string.split("").map(x=>{
    if(decoder[x]!== undefined) return x = decoder[x]
    else return x
  }).join("")


}

/*
describe("Sample tests", function() {
  it("Tests", function() {
    assert.equal(encode('hello'), 'h2ll4');
    assert.equal(encode('How are you today?'), 'H4w 1r2 y45 t4d1y?');
    assert.equal(encode('This is an encoding test.'), 'Th3s 3s 1n 2nc4d3ng t2st.');
    assert.equal(decode('h2ll4'), 'hello');
  });
});
*/
