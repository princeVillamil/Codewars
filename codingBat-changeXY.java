/*
Given a string, compute recursively (no loops) a new string where all the lowercase 'x' chars have been changed to 'y' chars.

changeXY("codex") → "codey"
changeXY("xxhixx") → "yyhiyy"
changeXY("xhixhix") → "yhiyhiy"

changeXY("codex") → "codey"	"codey"	OK	
changeXY("xxhixx") → "yyhiyy"	"yyhiyy"	OK	
changeXY("xhixhix") → "yhiyhiy"	"yhiyhiy"	OK	
changeXY("hiy") → "hiy"	"hiy"	OK	
changeXY("h") → "h"	"h"	OK	
changeXY("x") → "y"	"y"	OK	
changeXY("") → ""	""	OK	
changeXY("xxx") → "yyy"	"yyy"	OK	
changeXY("yyhxyi") → "yyhyyi"	"yyhyyi"	OK	
changeXY("hihi") → "hihi"	"hihi"	OK	
other tests
		OK  

*/

public String changeXY(String str) {
  if( str.length() == 0 ) return str;
  if( str.charAt(0) == 'x' ) return 'y' + changeXY( str.substring(1) );
  return str.charAt(0) + changeXY( str.substring(1) );
}

