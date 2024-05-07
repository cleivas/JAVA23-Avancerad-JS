import _ from "underscore";
import anime from "animejs";
import { transform } from "typescript";

const suits = ['hearts', 'clubs', 'diamonds', 'spades'];
const chars = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Kn', 'Q', 'K', 'A'];
const deck = [];

// {
//     suit: 'hearts',
//     char: 'Kn'
// }

for(const suit of suits){
    for(const char of chars){
        deck.push({suit, char});
    }
}

console.log(deck);

const shuffledDeck = _.shuffle(deck);
console.log(shuffledDeck)

const randomIndex = _.random(shuffledDeck.length-1);
console.log(shuffledDeck[randomIndex]);


const hand = _.sample(shuffledDeck, 5);
console.log(hand)

const shuffledDeckWithoutHand = _.without(shuffledDeck, ...hand);
console.log(shuffledDeckWithoutHand)

console.log(...hand)

const animationObj = {
    targets: 'div',
    translateX: '500px',
    duration: 1000,
    loop: true,
    easing: 'linear',
    direction: 'alternate'
}
anime(animationObj);