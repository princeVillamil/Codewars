/*
Description:

Remove all exclamation marks from the end of sentence.
Examples

remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"


*/
function remove (string) {  
    let rev = string.split('').reverse()
    while(rev[0] == '!'){
      rev.shift(0)
    }
    return rev.reverse().join('')
}