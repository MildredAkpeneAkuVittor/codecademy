//my Age
const myAge = 20;
//The first two years 
let earlyYears = 2;
earlyYears *= 10.5;
//The remaining years after the first two
let laterYears = myAge - 2;
//The remaining years in dog years
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
// My age in dog years
const myAgeInDogYears = earlyYears + laterYears;
// Converting my name to lower case
let myName = 'Eben'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);