class Hand{
    constructor(player, cards) {
        this.player = player;
        this.cards = cards;
    }
    playCard = () => this.cards.pop()
}

class Card{
    constructor(name, value, suit){
        this.name = name;
        this.value = value; 
        this.suit = suit;
    }
    getCard = (player) => console.log(`${player} played the ${this.name} of ${this.suit}!`)
}

const generateDeck = () => {
    let deck = [];
    let suits = ['Spades', 'Diamonds', 'Hearts', 'Clubs'];
    let faceCards = ['Jack', 'Queen', 'King', 'Ace'];
    for (i = 0; i <= 3; i++){
        for (n = 2; n <= 14; n++){
            switch (n) {
                case 11:
                    deck.push(new Card('Jack', 11, suits[i]));
                    break;
                case 12:
                    deck.push(new Card('Queen', 12, suits[i]));
                    break;
                case 13:
                    deck.push(new Card('King', 13, suits[i]));
                    break;
                case 14:
                    deck.push(new Card('Ace', 14, suits[i]));
                    break;
                default:
                    deck.push(new Card(n.toString(), n, suits[i]));
            }
        }
    }
    return deck;
}

const shuffleDeck = (deck) => {
    let shuffledDeck = deck;
    for (i = 0; i < 4; i++){
        shuffledDeck = shuffledDeck.sort(() => Math.random() -.5);
    }
    return shuffledDeck;
    
}

const mainFunction = () => {
    let shuffledDeck = shuffleDeck(generateDeck());
    let playerOneScore = 0;
    let playerTwoScore = 0;
    let hand1 = new Hand('Player One', shuffledDeck.slice(0,26));
    let hand2 = new Hand('Player Two', shuffledDeck.slice(26));
    for (i = 0; i <=16; i++){
        let playerOneCard = hand1.playCard();
        let playerTwoCard = hand2.playCard();
        playerOneCard.getCard('Player One');
        playerTwoCard.getCard('Player Two');
        if(playerOneCard.value === playerTwoCard.value){
            console.log('Neither player gets a point.')
        }else if (playerOneCard.value > playerTwoCard.value){
            playerOneScore = playerOneScore + 1;
            console.log('Player One gets a point.')
        }else{
            playerTwoScore = playerTwoScore + 1;
            console.log('Player Two gets a point.')
        }
    }
    console.log(playerOneScore, playerTwoScore);
    if(playerOneScore > playerTwoScore){
        console.log('Player One has Won!')
    }else if(playerOneScore < playerTwoScore){
        console.log('Player Two has Won!')
    }else{
        console.log('How did they tie??')
    }
}

mainFunction();

