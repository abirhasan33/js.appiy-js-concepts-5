
// const number = 8;
// const remainder = number % 2 == 0;
// console.log(remainder == 0);

function isEvent(nonber){
    if(nonber % 2 == 0){
        return true;
    }
    return false;
}
const myNumber = 1642;
const isMyNumber = isEvent(myNumber);
console.log('is my nomber even =', isMyNumber)

const heeNumber = 1641;
const isHerNumber = isEvent(heeNumber);
console.log('is her number even =', isHerNumber);
// console.log(isEvent(heeNumber));

// is odd function 
function isOdd(number){
    if(number % 2 != 0){
        return true;
    }
    return false;
}

const isOddNumber = isOdd(myNumber);
console.log('is odd even number =', isOddNumber)

const oddNomber = isOdd(heeNumber);
console.log('odd number even =', oddNomber);

