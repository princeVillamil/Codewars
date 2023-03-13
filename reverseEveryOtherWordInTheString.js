/*
Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.
*/
function reverse(str){
  if(str.split(' ').join('').length === 0)return ''
  return str.split(' ').map((x,i)=>{
    return (i+1)%2===0?x.split('').reverse().join(''):x
  }).join(' ')
}


describe("Tests", () => {
  it("test", () => {
Test.assertEquals(reverse("Reverse this string, please!"), "Reverse siht string, !esaelp")
Test.assertEquals(reverse("I really don't like reversing strings!"),"I yllaer don't ekil reversing !sgnirts")
  });
});