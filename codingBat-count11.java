/*
 Given a string, compute recursively (no loops) the number of "11" substrings in the string. The "11" substrings should not overlap.

count11("11abc11") → 2
count11("abc11x11x11") → 3
count11("111") → 1

count11("11abc11") → 2	2	OK	
count11("abc11x11x11") → 3	3	OK	
count11("111") → 1	1	OK	
count11("1111") → 2	2	OK	
count11("1") → 0	0	OK	
count11("") → 0	0	OK	
count11("hi") → 0	0	OK	
count11("11x111x1111") → 4	4	OK	
count11("1x111") → 1	1	OK	
count11("1Hello1") → 0	0	OK	
count11("Hello") → 0	0	OK	
other tests
		OK	

*/
public int count11(String str) {
  if(str.length() <= 1)return 0;
  if(str.substring(0,2).equals("11"))return 1+count11(str.substring(2));
  return count11(str.substring(1));
}
