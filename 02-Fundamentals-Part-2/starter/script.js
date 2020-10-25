// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log('I can drive!')

// Function Expressions and Declarations
// function logger() {
//     console.log('My name is Mike.')
// }

// logger() // Calling/running/invoking a function

// function fruitProcessor(apples, oranges) {

//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//     return juice
// }

// const appleJuice = fruitProcessor(5, 0);

// Arrow Functions

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const calcAge3 = birthYear => 2037 - birthYear

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(1995, 'Mike'))

// Nested Functions
// function cutFruitPieces(fruit) {
//     return fruit * 4
// }

// function fruitProcessor(apples, oranges){
//     const applePieces = cutFruitPieces(apples)
//     const orangePieces = cutFruitPieces(oranges)
    
//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} of oranges.`
//     return juice
// }

// console.log(fruitProcessor(5, 6))
// const calcAge = function(birthYear) {
//     return 2020 - birthYear
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age 
//     if(retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`)
//         return retirement
//     } else {
//         console.log(`${firstName} is already retired.`)
//         return -1;
//     }
    
// }

// console.log(yearsUntilRetirement(1950, `Mike`))

// Coding Challenge #1

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3

const scoreDolphins = calcAverage(80, 80, 71)
const scoreKoalas = calcAverage(35, 14, 44)
console.log(scoreDolphins, scoreKoalas)

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
    } else if (avgKoalas >= 2* avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
    } else {
        console.log("There is no winner!")
    }
}

checkWinner(scoreDolphins, scoreKoalas)
