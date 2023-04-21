/*
Given a non-negative int n, return the sum of its digits recursively (no loops). Note that mod (%) by 10 yields the 
rightmost digit (126 % 10 is 6), while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

sumDigits(126) → 9
sumDigits(49) → 13
sumDigits(12) → 3 

sumDigits(126) → 9	9	OK	
sumDigits(49) → 13	13	OK	
sumDigits(12) → 3	3	OK	
sumDigits(10) → 1	1	OK	
sumDigits(1) → 1	1	OK	
sumDigits(0) → 0	0	OK	
sumDigits(730) → 10	10	OK	
sumDigits(1111) → 4	4	OK	
sumDigits(11111) → 5	5	OK	
sumDigits(10110) → 3	3	OK	
sumDigits(235) → 10	10	OK	
other tests
		OK
*/

public int sumDigits(int n) {
  if(n<=0)return 0;
  return (n%10)+sumDigits((n/10));
}
