// function getFactroile(number){
//     let factroile = 1;
//     let i = 1;
//     while(i <= number){
//         factroile = factroile * i;
//         i++;
//     }
//     return factroile;
// }

// let fistFactroile = getFactroile(6);
// console.log('fist factrolr -', fistFactroile);

// let secondFactroile = getFactroile(7);
// console.log('second factrolr -', secondFactroile);

function getFactroile(number){
    let factroile = 1;
    let i = number;
    while(i >= 1){
        factroile = factroile * i;
        i--;
    }
    return factroile;

}

let fistFactroile = getFactroile(5);
console.log(fistFactroile);

// fore look revres 
function getFactroile2(number){
    let factroile = 1;
    for(let i = number; i >= 1; i--){
        factroile = factroile * i;
    }
    return factroile;
}

let contaral = getFactroile(6);
console.log('Factroile tow', contaral);