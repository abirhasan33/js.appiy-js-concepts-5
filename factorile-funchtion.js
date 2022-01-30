// let factorale = 1;
// for(let i = 1; i <= 5; i++ ){
//     factorale = factorale * i;
//     console.log(factorale);
// }

function factorile(number){
    let fact = 1;
    for( let i = 1; i <= number; i++){
        fact = fact * i;
    } 
    return fact;                       
}

let fistFactroile = factorile(7);
console.log('fist factroile of 7 is -', fistFactroile);

let secondFactroile = factorile(5);
console.log('Second factroile of 5 is -', secondFactroile);