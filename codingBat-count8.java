/*
 Given a non-negative int n, compute recursively (no loops) the count of the occurrences of 8 as a digit, except that an 8 with another 8 immediately to its 
 left counts double, so 8818 yields 4. Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while divide (/) by 10 removes the rightmost digit 
 (126 / 10 is 12).

count8(8) → 1
count8(818) → 2
count8(8818) → 4

count8(8) → 1	1	OK	
count8(818) → 2	2	OK	
count8(8818) → 4	4	OK	
count8(8088) → 4	4	OK	
count8(123) → 0	0	OK	
count8(81238) → 2	2	OK	
count8(88788) → 6	6	OK	
count8(8234) → 1	1	OK	
count8(2348) → 1	1	OK	
count8(23884) → 3	3	OK	
count8(0) → 0	0	OK	
count8(1818188) → 5	5	OK	
count8(8818181) → 5	5	OK	
count8(1080) → 1	1	OK	
count8(188) → 3	3	OK	
count8(88888) → 9	9	OK	
count8(9898) → 2	2	OK	
count8(78) → 1	1	OK	
other tests
		OK

*/

public int count8(int n) {
  if(n==0)return 0;
  if( n%10 == 8 && (n/10)%10 == 8 ) return 2 + count8(n/10);
  else if(n%10 == 8) return 1 + count8(n/10);
  return count8(n/10);
  
}
