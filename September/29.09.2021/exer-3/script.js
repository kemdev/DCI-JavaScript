// 1. Declare a variable named isDog. If true, print 'pat, pat' and if not, print 'find me a dog to pat!'
console.log('-------1-------')

let isDog = false;

isDog ? console.log('pat, pat') : console.log('find me a dog to pat! ')


// 2. Declare a variable named speedCheck. If speedlimit is 50km/h, and your speed is above that, print 'you're going too fast!'. 
// If speed is lower than 50km/h, print 'You're driving below the speed limit, Oma'.
console.log('-------2-------')

let speedlimit = 50;
let speedCheck = 10;

speedCheck > speedlimit ? console.log("you're going too fast!") : speedCheck < speedlimit ? console.log("You're driving below the speed limit, Oma") : console.log("Your speed is fine!")


// 3. Declare a variable named age. If age is below 16, print "serve butter beer". Otherwise print "serve beer".

console.log('-------3-------')
let age = 17;

age < 16 ? console.log('serve butter beer') : console.log('serve beer')

// 4. Declare a variable named isStudent. If true, print "Ticket costs €5,00". If false, print "Ticket costs €12,00".
console.log('-------4-------')

let isStudent = false;

isStudent ? console.log('Ticket costs €5,00') : console.log("Ticket costs €12,00")


// 5. Declare a variable named okMarie. Check if there is 'cake' - if so, print "Let them eat cake". If not, print "Oh, bother".
console.log('-------5-------')

let okMarie = 'cakes'

okMarie === 'cake' || okMarie === 'cakes' ? console.log("Let them eat cake") : console.log("Oh, bother");


// 6. Check if the following numbers are even numbers. Use a ternary and if the number is even print 30 is even, else print that it is odd.
// 30
// 939
// 40.9

console.log('-------6-------')
let num1 = 30;
let num2 = 939;
let num3 = 40.9

function checkEven(num) {
    return num % 2 === 0 ? 30 : 'it is odd -> ' + num % 2
}


console.log(checkEven(num1))
console.log(checkEven(num2))
console.log(checkEven(num3))