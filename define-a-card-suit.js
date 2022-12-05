/*
You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'

*/
function defineSuit(card) {
  // good luck
  let charCodeOfCard = card.charCodeAt(card.length-1)
  if(charCodeOfCard === 9827) return 'clubs'
  if(charCodeOfCard === 9830) return 'diamonds'
  if(charCodeOfCard === 9829) return 'hearts'
  if(charCodeOfCard === 9824) return 'spades'
}

describe("Basic tests",() => {
  it('Testing №1 for "3♣"', () => {
    let actualClubs = defineSuit('3♣');
    assertNotPrinting(actualClubs);
    assert.strictEqual(actualClubs, 'clubs');
  });
  it('Testing №2 for "Q♠"', () => assert.strictEqual(defineSuit('Q♠'), 'spades'));
  it('Testing №3 for "9♦"', () => assert.strictEqual(defineSuit('9♦'), 'diamonds'));
  it('Testing №4 for "J♥"', () => assert.strictEqual(defineSuit('J♥'), 'hearts'));
  
  function assertNotPrinting(actual) {
    assert.isDefined(actual, 'You have to return the suit. Did you print it to the console instead?\n');
  }
});