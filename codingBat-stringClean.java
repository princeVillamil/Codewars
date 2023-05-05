/*
 Given a string, return recursively a "cleaned" string where adjacent chars that are the same have been reduced to a single char. So "yyzzza" yields "yza".

stringClean("yyzzza") → "yza"
stringClean("abbbcdd") → "abcd"
stringClean("Hello") → "Helo"

stringClean("yyzzza") → "yza"	"yza"	OK	
stringClean("abbbcdd") → "abcd"	"abcd"	OK	
stringClean("Hello") → "Helo"	"Helo"	OK	
stringClean("XXabcYY") → "XabcY"	"XabcY"	OK	
stringClean("112ab445") → "12ab45"	"12ab45"	OK	
stringClean("Hello Bookkeeper") → "Helo Bokeper"	"Helo Bokeper"	OK	
other tests
		OK	

*/
public String stringClean(String str) {
  if(str.length() <=1) return str;
  if( str.charAt(0) == str.charAt(1) ) return stringClean(str.substring(1));
  return str.charAt(0)+stringClean(str.substring(1));
}
