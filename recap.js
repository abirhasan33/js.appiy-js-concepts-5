var time = '10:15pm';
var bookPrice = 150;
var isLeptopGoldColor = false;

// arrya 
var partners = ['sajid', 'mojid', 'kjid', 'kalam', 'abir'];
var elementCount = partners.length;
var abirIsIndex = partners.indexOf('abir');
partners.push('alamin');
partners.pop();

// console.log(partners);

// conditonals 
if(bookPrice < 120){
    console.log(" I will buy this book");
}
else{
    console.log('mama kichu dishkain den na mama');
}

// while 
var i = 0;
while(i < 10){
    // console.log(i);
    i++;
}
// for 
for(var i = 0; i < 10; i++){
    // console.log(i);
}


// function 
function isMoonUp(time){
    if(time >= 19 && time <=5 ){
        return true;
    }
    return true;
}

var moonStatus = isMoonUp(21);


// let const 

// valu of variable ciund xhang 
let price = 27;
price = 29;
price = 27;

// value of the variable will not chang 
const myName = 'bangladash';
console.log(myName);
myName = 22;