function isLeapYear(year){
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}

const year = 2024;
const isLeoar = isLeapYear(year);
console.log('is my year leap year -', isLeoar);

const myYear = 2050;
const myIsLeoar = isLeapYear(myYear);
console.log('is my year leap year -', myIsLeoar);


var number = 7;
for(var i =1; i <= 10; i++){
    var rejal = number * i;
    var contan = number + ' * ' + i + ' = ' + rejal;
    console.log(contan);
}