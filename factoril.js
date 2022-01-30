 /* 3! = 3 x 2 x 1
    4! = 4 x 3 x 2 x 1
    5! = 5 x 4 x 3 x 2 x 1
    6! = 6 x 5 x 4 x 3 x 2 x 1
    7! = 7 x 6 x 5 x 4 x 3 x 2 x 1
*/

let factoral = 1;
for( let i = 1; i <= 7; i++){
    // console.log(factoral);
    factoral = factoral * i;
}

let number = 1;
for( let i = 1; i <= 10; i++){
    number = number * i;
    console.log(number);
}