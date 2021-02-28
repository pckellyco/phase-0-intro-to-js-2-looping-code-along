for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`)
}

const gifts = ['teddy bear', 'drone', 'doll'];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

wrapGifts(gifts)

function writeCards(names, holiday) {
    let thankYouCards = []
    for (let person = 0; person < names.length; person++) {
        thankYouCards.push(`Thank you, ${names[person]}, for the wonderful ${holiday} gift!`)
    }

    return thankYouCards;
}

writeCards(names, holiday)

function countDown(n) {
    let currentNum = n
    while (currentNum >= 0) {
        console.log(currentNum)
        currentNum--
    }
}