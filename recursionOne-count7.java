/*
Given a non-negative int n, return the count of the occurrences of 7 as a digit, so for example 717 yields 2. (no loops). Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

count7(717) → 2
count7(7) → 1
count7(123) → 0

count7(717) → 2	2	OK	
count7(7) → 1	1	OK	
count7(123) → 0	0	OK	
count7(77) → 2	2	OK	
count7(7123) → 1	1	OK	
count7(771237) → 3	3	OK	
count7(771737) → 4	4	OK	
count7(47571) → 2	2	OK	
count7(777777) → 6	6	OK	
count7(70701277) → 4	4	OK	
count7(777576197) → 5	5	OK	
count7(99999) → 0	0	OK	
count7(99799) → 1	1	OK	
other tests
		OK
*/

public int count7(int n) {
  if(n == 0) return 0;
  
  if(n % 10 == 7) return 1 + count7(n/10);
  
  return count7(n/10);
}
