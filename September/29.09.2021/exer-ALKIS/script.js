/**
 * 01 easy
 * Write a function that accepts two integers and returns the larger
 */


function larger(num1, num2) {
    return num1 > num2 ? num1 : num2 > num1 ? num2 : "they are equal"
}

console.log('--------1--------')
console.log(larger(10, 1))


/**
 * 02 Easy
 * Write a function that will iterate from 0 to 15. 
 * For each iteration, it will check if the current number is odd or even, 
 * and display a message to the screen
 */

console.log('--------2--------')

function iterate0To15() {
    let even = '';
    let odd = '';
    currentNumberString = 'Current Number is '
    for (let i = 0; i <= 15; i++) {
        i % 2 === 0 ? even += `${currentNumberString + i + ":"} even ` + '\n' : odd += `${currentNumberString + i + ":"} odd` + '\n'
    }

    return even + '\n' + '------------' + '\n' + odd
}

console.log(iterate0To15())


/**
 * 03 Medium
 * Write a function that accepts an array of marks of students and computes
 * and prints, the class average mark:
 * David	80
 * Vinoth	77
 * Divya	88
 * Ishitha	95
 * Thomas	68
 * Then, calculate and print the grade for each student
 * Grades should be calculated based on these values:
 * Range	Grade
 * <60	F
 * <70	D
 * <80	C
 * <90	B
 * <100	A
 * Use a switch statement to solve this one
 */

console.log('--------3--------')

function averageClassMark(array) {
    let sum = 0;
    let average;
    let score = '';
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        switch (true) {
            case array[i] < 60:
                score += `student-${i} got F` + "\n"
                break;
            case array[i] < 70 && array[i] >= 60:
                score += `student-${i} got D` + "\n"
                break;
            case array[i] < 80 && array[i] >= 70:
                score += `student-${i} got C` + "\n"
                break;
            case array[i] < 90 && array[i] >= 80:
                score += `student-${i} got B` + "\n"
                break;
            case array[i] <= 100 && array[i] >= 90:
                score += `student-${i} got A` + "\n"
                break;
            default:
                `${i} seems to be not part of the assessment! `
        }
    }
    average = sum / array.length;

    return 'Class Average ' + average + '\n' + score;
}

let array = [80, 77, 88, 95, 68]
console.log(averageClassMark(array))


console.log('--------4--------')

/**
 * 04 Easy - medium
 * Write a function to sum the multiples of 3 and 5 under 1000.
 */

function sumOfMultiplesOf3And5() {
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
        i % 3 === 0 || i % 5 === 0 ? sum += i : null
    }

    return sum;
}


console.log(sumOfMultiplesOf3And5())
console.log('--------5--------')

/**
 * 05 easy-medium
 * Create a function to find the longest word in a string and 
 * return the number of characters of that word.
 * Example: in "What if we try a super-long word such as otorhinolaryngology"
 * the answer is 19
 * "Google do a barrel roll" should return 6
 * 
 * 
 */

function longestWord(string) {
    let charNumber = 0;
    let longerWord = '';
    let array = string.split(' ');
    for (let counter = 0; counter < array.length; counter++) {
        array[counter].length > longerWord.length ? longerWord = array[counter] : null;

    }
    charNumber = longerWord.length
    return charNumber;
}



console.log(longestWord("What if we try a super-long word such as otorhinolaryngology"))
console.log(longestWord("Google do a barrel roll"))


/**
 * 06 easy
 * Write a function equals that checks two values for strict equality. 
 * If the two values are equal, the string 'EQUAL' should be returned. 
 * If they are unequal, you should get 'UNEQUAL'.
 * Example: equals(1, 1) should return 'EQUAL' and equals(1, 2) 
 * should return 'UNEQUAL'.
 */


console.log('--------6--------')

function equals(num1, num2) {
    return num1 === num2 ? 'EQUAL' : 'UNEQUAL'
}

console.log(equals(1, 2))

/**
 * 07 medium
 * Write a function to check if a string  
 * ends with the given target string 
 * Examples:
 * ("Bastian", "n") should return true
 * ("Open sesame", "same") should return true
 */

console.log('--------7--------')


// string.indexOf(string - end.length)

function checkEndString(string, end) {
    let lastNumIndex = end.length;
    console.log(string[lastNumIndex])
    return string[lastNumIndex]
}

console.log(checkEndString("Bastian", "n"))

let f = 0;
while (f < 5) {
    console.log(prompt('what is your name?'))
    f++
}