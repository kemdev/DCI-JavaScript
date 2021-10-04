/**
 * Exercise 01
 * Write a function hypotenuse that calculates the length of the hypotenuse
 *  of a right triangle. 
 * The length of the hypotenuse is calcultaed from this formula: 
 * a² + b² = c². 
 * Since 3² + 4² = 5² applies, hypotenuse(3, 4) should return 5.
 */

function hypotenuse(a, b) {
    let powerA = Math.pow(a, 2);
    let powerB = Math.pow(b, 2);
    let hypo = powerA + powerB;
    let result = Math.sqrt(hypo);
    return result
}


console.log(hypotenuse(3, 4))


/**
 * Exercise 02
 * Write a function midrange, that calculates the midrange of 3 numbers. 
 * The midrange is the mean of the smallest and largest number.
 * Example: midrange(3, 9, 1) should return (9+1)/2 = 5
 */

function midrange(a, b, c) {
    let minNumber = Math.min(a, b, c);
    let maxNumber = Math.max(a, b, c);
    let result = (minNumber + maxNumber) / 2;
    return result;
}

console.log(midrange(3, 9, 1))


/**
 * Exercise 03
 * Write a function area that calculates the area of a circle. 
 * The function is given the radius of the circle.
 * Example: area(1) should return π and area(2) should return 4 * π
 */

function areaOfTheCircle(a) {
    if (a == 1) return (Math.PI).toFixed(2)
    return (Math.pow(a, 2) * Math.PI).toFixed(2)

}

console.log(areaOfTheCircle(1))
console.log(areaOfTheCircle(2))

/**
 * Exercise 04
 * Write a function dice that returns a random number between 1 and 6 like in dices
 */


function dice() {
    return Math.ceil(Math.random() * 5 + 1)
}

console.log(dice())


/**
 * Exercise 05
 * Write a function round100 that rounds a number to the nearest hundred.
 * Example: round100(1749) should return 1700 and round100(856.12) should return 900
 */

function round100(a) {
    return Math.round(a / 100) * 100
}

console.log(round100(854.12))



/**
 * Exercise 06 Attention: Loops and conditional are required
 * Write a function parseFirstInt that takes a string and returns the first integer present in the string. 
 * If the string does not contain an integer, you should get NaN.
 * Example: parseFirstInt('No. 10') should return 10 and parseFirstInt('Babylon') should return NaN
 */

function parseFirstInt(a) {
    let foundNumber = '';
    for (let i = 0; i <= a.length; i++) {
        let firstInt = parseInt(a[i]);

        if (!Number.isNaN(firstInt)) foundNumber += a[i]
    }
    return foundNumber || NaN;
}


console.log(parseFirstInt("test10"))