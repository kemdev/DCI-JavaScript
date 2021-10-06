let exersiceNum = 1;

function print(...arguments) {
    console.log(...arguments)
}


function println() {
    print(`-------------${exersiceNum}-------------`)
    exersiceNum++
}

function printDashes() {
    print(`--------------------------`)

}


// Print your answers to the console.

// 1. Add Up. Create a function that takes an integer as an argument. Add up all the integers from 1 to the integer you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10

// Examples:

// sumIntFrom1ToN(4) ➞ 10
// sumIntFrom1ToN(13) ➞ 91
// sumIntFrom1ToN(600) ➞ 180300
println()

function sumIntFrom1ToN(num) {
    let result = 0;
    for (let i = 0; i <= num; i++) {
        result += i
            // print(i)
    }

    return result

}

print(sumIntFrom1ToN(4))




println()


// 2. Cubed. Create a function that takes in three numbers and returns the sum of its cubes.

// Examples:

// sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// sumOfCubes(2) ➞ 8
// sumOfCubes() ➞ 0

function sumOfCubes(...numbers) {
    let result = 0
    numbers.forEach(number => {
        result += Math.pow(number, 3)
    })
    return result
}

// sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// sumOfCubes(2) ➞ 8
// sumOfCubes() ➞ 0


print(sumOfCubes(1, 5, 9))
print(sumOfCubes(2))
print(sumOfCubes())


println()


// 3. String Check. 
// Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.

// Examples:

// isStrStartOfWord("bu", "button") ➞ true
// isStrStartOfWord("tri", "triplet") ➞ true
// isStrStartOfWord("beau", "pastry") ➞ false

function isStrStartOfWord(toCheck, string) {
    let firstThreeChar = string.slice(0, toCheck.length)
    return firstThreeChar === toCheck;
}

print(isStrStartOfWord("bu", "button"))
print(isStrStartOfWord("tri", "triplet"))
print(isStrStartOfWord("beau", "pastry"))



println()


// 4. Less Than or Equal to Zero? Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

// Examples:

// isLEQZero(3) ➞ false
// isLEQZero(0) ➞ true
// isLEQZero(-4) ➞ true
// isLEQZero(10) ➞ false

function isLEQZero(number) {
    return number <= 0
}

print(isLEQZero(3))
print(isLEQZero(0))
print(isLEQZero(-4))
print(isLEQZero(10))

println()

// 5. Count Occurrences. Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.

// Example:

// countOccurrences("this is a string", "i") ➞ 3

function countOccurrences(string, letter) {
    let count = 0
    for (const char of string) {
        if (char.match(letter)) {
            count++;
        }
    }
    return count
}


print(countOccurrences("this is a string", "i"))


println()

// 6. X To The Power of X. Create a function that takes a base number and an exponent number and returns the calculation. 
// NB: All test inputs will be positive integers.
// Examples:

// print(calcBaseToExponent(5, 5)) // ➞ 3125
// print(calcBaseToExponent(10, 10)) // ➞ 10000000000
// print(calcBaseToExponent(3, 3)) // ➞  27

function calcBaseToExponent(num1, num2) {
    return num1 ** num2
}


print(calcBaseToExponent(5, 5)) // ➞ 3125
print(calcBaseToExponent(10, 10)) // ➞ 10000000000
print(calcBaseToExponent(3, 3)) // ➞  27


println()


// 7. Dog Years. 
// Create a function which calculates how old a dog is in dog years. 
// The function should accept one argument that is the dog's age in human years. 
// Calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years.

// Example:

// dogAge(4) // ➞ "Your doggo is 28 years old in dog years!"


function dogAge(year) {
    return `Your doggo is ${year * 7} years old in dog years`
}



print(dogAge(4)) // ➞ "Your doggo is 28 years old in dog years!"


println()


/**
 * 8. A Lifetime Supply... 
 * You just won a lifetime supply of your favourite snack! The snack company needs to calculate what that actually means and how much they need to give you over your "lifetime".
 * Create a function to help you calculate that amount for yourself.
 * The function should accept two arguments: age and amount per day.
 * The function should calculate the amount that will be consumed for the rest of your life given a constant maximum age of 100.
 */
// Examples:
// print(calcLifetimeSupply(25, 2)) // ➞ "The snack company should provide you with 54,788 units, until you are a ripe old age of 100. Happy snacking!"
// print(calcLifetimeSupply(40, 3)) // ➞ "The snack company should provide you with 65,745 units, until you are a ripe old age of 100. Happy snacking!"

// Bonus:

// Accept a third argument for maximum age (just in case the snack company has a particular maximum age cut off).



function calcLifetimeSupply(age, amountPerDaye, maxYear) {
    let result = 0;
    let year = 365.25;
    for (age; age < maxYear; age++) {
        result += year * amountPerDaye;
    }
    result = Math.ceil(result)
    let outputWithComma = result.toLocaleString();
    return `The snack company should provide you with ${outputWithComma} units, until you are a ripe old age of 100. Happy snacking! `
}

print(calcLifetimeSupply(25, 2)) // ➞ "The snack company should provide you with 54,788 units, until you are a ripe old age of 100. Happy snacking!"

print(calcLifetimeSupply(40, 3)) // ➞ "The snack company should provide you with 65,745 units, until you are a ripe old age of 100. Happy snacking!"

// Accept floating point values for amount per day and round the result (in case the snack company has some weird average calculation for amount per day).

print(calcLifetimeSupply(32, 0.58, 65)) // ➞ "The snack company should provide you with 6991 units, until you are a ripe old age of 65. Happy snacking!"

println();


/**
 * 9. Where's Waldo? Create a function that takes a string and returns true if Waldo is found, and false if he's not.
 * Examples:
 */

//  print(isWaldoHere("is there a wal here?")) ➞ false
//  print(isWaldoHere("I found you Waldo!")) ➞ true
//  print(isWaldoHere("Wait, don't you mean Wally?")) ➞ false
//  print(isWaldoHere("waldo is here")) ➞ true


function isWaldoHere(string) {
    return string.includes('waldo') || string.includes('Waldo')
}

print(isWaldoHere("is there a wal here?")) // ➞ false
print(isWaldoHere("I found you Waldo!")) // ➞ true
print(isWaldoHere("Wait, don't you mean Wally?")) // ➞ false
print(isWaldoHere("waldo is here")) // ➞ true

println();
// 10. Pie. 
//Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:
// Total number of slices.
// Number of recipients.
// How many slices each person gets.

// Examples:

// print(isEqualSlices(11, 5, 3)) // ➞ false // 5 people x 3 slices each = 15 slices > 11 slices
// print(isEqualSlices(8, 3, 2)) // ➞ true
// print(isEqualSlices(8, 3, 3) )// ➞ false
// print(isEqualSlices(24, 12, 2)) // ➞ true
function isEqualSlices(totalSlice, persons, slice) {
    return persons * slice <= totalSlice
}

print(isEqualSlices(11, 5, 3)) // ➞ false 5 people x 3 slices each = 15 slices > 11 slices
print(isEqualSlices(8, 3, 2)) // ➞ true
print(isEqualSlices(8, 3, 3)) // ➞ false
print(isEqualSlices(24, 12, 2)) // ➞ true

println()

// 11. XO Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.

// Notes:
// Return a boolean value (true or false).
// The string can contain any character.
// When neither an x nor an o is in the string, return true.
// Examples:
// isEqualNumXandOs("ooxx") ➞ true
// isEqualNumXandOs("xooxx") ➞ false
// isEqualNumXandOs("ooxXm") ➞ true (case insensitive)
// isEqualNumXandOs("zpzpzpp") ➞ true (returns true if no x and o)
// isEqualNumXandOs("zzoo") ➞ false

function isEqualNumXandOs(string) {
    let oCounter = 0;
    let xCounter = 0;
    string = string.toLowerCase();
    if (!string.includes('o') && !string.includes('x')) return true;
    for (const char of string) {
        if (char === 'o') oCounter++;
        else if (char === 'x') xCounter++
    }

    return oCounter === xCounter
}


print(isEqualNumXandOs("ooxx")) // true
print(isEqualNumXandOs("xooxx")) // false
print(isEqualNumXandOs("ooxXm")) // true (case insensitive)
print(isEqualNumXandOs("zpzpzpp")) // true (returns true if no x and o)
print(isEqualNumXandOs("zzoo")) // false

println()


// 12. isPrime? Create a function that returns true if a number is a prime number, and false if it's not. 
// NB: a prime number is any positive integer greater than 1, which is only evenly divisible by two divisors: itself and 1. 
// The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.


function isPrime(num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}

print(isPrime(7))
print(isPrime(9))
print(isPrime(10))

println()

// 13. Validate Email.
// Create a function that takes a string, checks for valid email address syntax, and then returns either true or false accordingly.

// NOTE: email syntax is more complicated than you might think (see https://en.wikipedia.org/wiki/Email_address#Syntax), so we do not expect you to cover all cases! Just work your way through the below simplified validation criteria:



function validateEmail(email) {
    // The string must contain exactly one "@" character
    // The string must contain at least one "." character
    if (!email.includes('@') || countOccurrences(email, '@') > 1 || !email.includes('.')) return "Please check you input, your email should contain one '@' and '.'";
    // The "." and the "@" must be in the appropriate places:
    // neither "." nor "@" can be the last character
    let lastIndex = email.length - 1;
    if ('@' === email[lastIndex] || '.' === email[lastIndex]) return "The last character cannot be '@' or '.'";
    // "." can neither be directly before, nor directly after, "@"
    let indexOfAt = email.indexOf('@');
    if (email[indexOfAt + 1] === '.' || email[indexOfAt - 1] === '.') return "'.' cannot be directly before or after '@'"
        // there cannot be consecutive "." characters
    let indexOfDot = email.indexOf('.');
    if (email[indexOfDot + 1] === '.') return "'.' cannot become directly after '.' "
        // "@" must have at least one character in front of it
    if (email[indexOfAt - 1] === undefined || email.includes(' ') || email.slice(indexOfAt + 1, ).indexOf('.') === -1) return "Invalid input";
    return 'Valid email address'
}


print(validateEmail('email@.'))
print(validateEmail('email@.main'))
print(validateEmail('email..Kart@main'))
print(validateEmail('@example.com')) // invalid
print(validateEmail("j@example.com")) // -> valid 
print(validateEmail("john.smith@com")) // -> invalid
print(validateEmail("john..smith@email.com")) // -> invalid
print(validateEmail("john.@email.com")) // -> invalid
print(validateEmail("john@.email.com")) // -> invalid