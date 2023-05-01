/*
Given a string, compute recursively a new string where identical chars that are adjacent in the original string are separated from each other by a "*".

pairStar("hello") → "hel*lo"
pairStar("xxyy") → "x*xy*y"
pairStar("aaaa") → "a*a*a*a" 

pairStar("hello") → "hel*lo"	"hel*lo"	OK	
pairStar("xxyy") → "x*xy*y"	"x*xy*y"	OK	
pairStar("aaaa") → "a*a*a*a"	"a*a*a*a"	OK	
pairStar("aaab") → "a*a*ab"	"a*a*ab"	OK	
pairStar("aa") → "a*a"	"a*a"	OK	
pairStar("a") → "a"	"a"	OK	
pairStar("") → ""	""	OK	
pairStar("noadjacent") → "noadjacent"	"noadjacent"	OK	
pairStar("abba") → "ab*ba"	"ab*ba"	OK	
pairStar("abbba") → "ab*b*ba"	"ab*b*ba"	OK	
other tests
		OK

*/
public String pairStar(String str) {
  if(str.length() <= 1) return str;
  if(str.charAt(0) == str.charAt(1)) return str.charAt(0)+"*"+pairStar(str.substring(1));
  return str.charAt(0)+pairStar(str.substring(1));
}
