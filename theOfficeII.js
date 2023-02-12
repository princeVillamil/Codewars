/*
Each department has a different boredom assessment score, as follows:

accounts = 1
finance = 2
canteen = 10
regulation = 3
trading = 6
change = 6
IS = 8
retail = 5
cleaning = 4
pissing about = 25

Depending on the cumulative score of the team, return the appropriate sentiment:

<=80: 'kill me now'
< 100 & > 80: 'i can handle this'
100 or over: 'party time!!'
*/
function boredom(staff){
  let scores = {
  accounts: 1,
	finance: 2,
	canteen: 10,
	regulation: 3,
	trading: 6,
	change: 6,
	IS: 8,
	retail: 5,
	cleaning: 4,
	"pissing about": 25,              
	}
  let sum = 0
  for(let job in staff){
    sum+=scores[staff[`${job}`]]
  }
  return sum>=100 ? 'party time!!' : sum>80 ? 'i can handle this':'kill me now'

}
describe("Example tests",() =>{
  Test.assertEquals(boredom({tim: 'change', jim: 'accounts',
    randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
    laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
    mr: 'finance' }), 'kill me now');
  Test.assertEquals(boredom({ tim: 'IS', jim: 'finance',
    randy: 'pissing about', sandy: 'cleaning', andy: 'cleaning',
    katie: 'cleaning', laura: 'pissing about', saajid: 'regulation',
    alex: 'regulation', john: 'accounts', mr: 'canteen' }), 'i can handle this');
  Test.assertEquals(boredom({ tim: 'accounts', jim: 'accounts',
    randy: 'pissing about', sandy: 'finance', andy: 'change',
    katie: 'IS', laura: 'IS', saajid: 'canteen', alex: 'pissing about',
    john: 'retail', mr: 'pissing about' }), 'party time!!');
  })