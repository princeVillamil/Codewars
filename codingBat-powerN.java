/*
Given base and n that are both 1 or more, compute recursively (no loops) the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

powerN(3, 1) → 3
powerN(3, 2) → 9
powerN(3, 3) → 27 

powerN(3, 1) → 3	3	OK	
powerN(3, 2) → 9	9	OK	
powerN(3, 3) → 27	27	OK	
powerN(2, 1) → 2	2	OK	
powerN(2, 2) → 4	4	OK	
powerN(2, 3) → 8	8	OK	
powerN(2, 4) → 16	16	OK	
powerN(2, 5) → 32	32	OK	
powerN(10, 1) → 10	10	OK	
powerN(10, 2) → 100	100	OK	
powerN(10, 3) → 1000	1000	OK	
other tests
		OK

*/

public int powerN(int base, int n) {
  if(n==1)return base;
  return base*powerN(base, n-1);
}