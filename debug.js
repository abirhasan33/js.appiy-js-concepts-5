function getFactroile(number){
    let factroile = 1;
    for(let i = 1; i <= number; i++){
        factroile = factroile * i;
        // console.log(number);
        console.log(i, factroile);
    }
    return factroile;
}

const getMyFactroile = getFactroile(8);
console.log(getMyFactroile);