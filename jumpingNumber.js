/*
Definition

Jumping number is the number that All adjacent digits in it differ by 1.
Task

Given a number, Find if it is Jumping or not .
Warm-up (Highly recommended)
Playing With Numbers Series
Notes

    Number passed is always Positive .

    Return the result as String .

    The difference between ‘9’ and ‘0’ is not considered as 1 .

    All single digit numbers are considered as Jumping numbers.

Input >> Output Examples

jumpingNumber(9) ==> return "Jumping!!"

Explanation:

    It's single-digit number

jumpingNumber(79) ==> return "Not!!"

Explanation:

    Adjacent digits don't differ by 1

jumpingNumber(23) ==> return "Jumping!!"

Explanation:

    Adjacent digits differ by 1

jumpingNumber(556847) ==> return "Not!!"

Explanation:

    Adjacent digits don't differ by 1

jumpingNumber(4343456) ==> return "Jumping!!"

Explanation:

    Adjacent digits differ by 1

jumpingNumber(89098) ==> return "Not!!"

Explanation:

    Adjacent digits don't differ by 1

jumpingNumber(32) ==> return "Jumping!!"

Explanation:

    Adjacent digits differ by 1

Playing with Numbers Series
Playing With Lists/Arrays Series
For More Enjoyable Katas
ALL translations are welcomed
Enjoy Learning !!
Zizou

*/
function jumpingNumber(n){
  //your code here
	let isJump = true;
	`${n}`.split('').forEach((x,i,arr)=>{
    if(arr[i-1]%2 == x%2) isJump = false
    
  })
  return isJump?"Jumping!!":"Not!!"
    
    
}
describe("Basic tests",() =>{
  Test.assertEquals(jumpingNumber(1), "Jumping!!");
  Test.assertEquals(jumpingNumber(7), "Jumping!!");
  Test.assertEquals(jumpingNumber(9), "Jumping!!");
  Test.assertEquals(jumpingNumber(23), "Jumping!!");
  Test.assertEquals(jumpingNumber(32), "Jumping!!");
  Test.assertEquals(jumpingNumber(79), "Not!!");
  Test.assertEquals(jumpingNumber(98), "Jumping!!");
  Test.assertEquals(jumpingNumber(8987), "Jumping!!");
  Test.assertEquals(jumpingNumber(4343456), "Jumping!!");
  Test.assertEquals(jumpingNumber(98789876), "Jumping!!");
});