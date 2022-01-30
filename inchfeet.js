function inchToFeet (inches){
    var feet = inches / 12;
    return feet;
}

var myInches = 132;
var feet = inchToFeet(myInches);
console.log('my inches', feet);

var dadaInch = 144;
var feet = inchToFeet(dadaInch);
console.log('Dada inches', feet); 

var nanaInch = 156;
var feet = inchToFeet(nanaInch);
console.log('Nana inches', feet); 

var naniInch = 168;
var feet = inchToFeet(naniInch);
console.log('Nani inches', feet); 


// mile to kiloimter
function mileToKiometer(mile){
    let km = mile * 1.60934;
    return km;
}

let marathon = mileToKiometer(5);
console.log('marathion mail =', marathon);

let kamarmail = 26.2;
let km = mileToKiometer(kamarmail);
console.log('kakar mail', km);