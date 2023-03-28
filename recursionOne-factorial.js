/*
Given n of 1 or more, return the factorial of n, which is n * (n-1) * (n-2) ... 1. Compute the result recursively (without loops).

factorial(1) → 1
factorial(2) → 2
factorial(3) → 6


factorial(1) → 1	1	OK	
factorial(2) → 2	2	OK	
factorial(3) → 6	3	X	
factorial(4) → 24	4	X	
factorial(5) → 120	5	X	
factorial(6) → 720	6	X	
factorial(7) → 5040	7	X	
factorial(8) → 40320	8	X	
factorial(12) → 479001600	12	X	
other tests
		X
*/


public int factorial(int n) {
  if(n==1)return 1;
  return n*factorial(n-1);
}
