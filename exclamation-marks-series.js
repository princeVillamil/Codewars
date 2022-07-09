/*
Description:

Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
Examples

replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
*/
function replace(s){
    //coding and coding....
    return s.replace(/[aeiou]/ig, "!")
    
}

// Repeat

function remove (string) {
    return string[string.length-1] == '!' ? string.slice(0,string.length-1) : string
  }