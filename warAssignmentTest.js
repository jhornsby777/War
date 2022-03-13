const assert = chai.assert; 
const expect = chai.expect;

describe('generateDeck', ()=>{
    it('Should have 52 cards.', ()=>{
        let deck = generateDeck();
        assert.equal(deck.length, 52);
    })

    it('Should be cards', ()=>{
        let deck = generateDeck();
        let card = deck[0];
        expect(card).to.have.property('name')
        expect(card).to.have.property('value')
        expect(card).to.have.property('suit')
    })
     
})