/*
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.
Examples

[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  --
*/
function highestRank(arr){
  //Your Code logic should written here
    let num = 0
    let frequent = 0
    arr.forEach((x)=>{
      let counter = 0
      for(let j = 0; j <= arr.length-1; j++){
  //       console.log(arr[j])
        arr[j] == x ? counter++ : null 
      }
      if(counter == frequent) {
        if(num < x){
          num = x
          frequent = counter
        }
      }else if(counter > frequent){
        num = x
        frequent = counter
      }
    })
    return num
}
highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])