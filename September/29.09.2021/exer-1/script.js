// 1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.

function check50To99(num1, num2) {
    if (num1 >= 50 && num1 <= 90 || num2 >= 50 && num2 <= 99) {

        return true
    }
    return false;
}


console.log(check50To99(10, 60))


// Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.


function check50To99_2(num1, num2, num3) {
    if (num1 >= 50 && num1 <= 90 || num2 >= 50 && num2 <= 99 || num3 >= 50 && num3 <= 99) {

        return true
    }
    return false;
}


console.log(check50To99_2(10, 5, 50))

console.log("--------------------------");


// Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. 
// Then change the values of the variables to see if your conditional still works.

let a = 50;
let b = 20;
let c = 15;

if (a > b && a > c) console.log(a)
else if (b > a && b > c) console.log(b)
else if (c > a && c > b) console.log(c)
else console.log('Some variables are the same')

console.log('----------4-------------')


// Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.

function pyAtBegining(string) {
    return (string[0].includes('P') && string[1].includes('y')) ?
        string : string[0] = 'Py' + string;
}

let string = "thon"

console.log(pyAtBegining(string))


// 5. Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.

console.log('-----------5------------')

function sumRange(n1, n2) {
    let sum = n1 + n2;
    if (sum >= 50 && sum <= 80) return 65
    return 80
}

console.log(sumRange(10, 30))


// 6. Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.

console.log('-----------6------------')

function check8(n1, n2) {
    let sum = n1 + n2
    let diff = Math.abs(n1 - n2)
    return sum === 8 || diff === 8
}


console.log(check8(7, 15))


// 7. Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.


console.log('-----------7------------')

function check15(n1, n2) {
    let sum = n1 + n2
    return n1 === 15 || n2 === 15 || sum === 15
}

console.log(check15(8, 7));


// 8. Check whether one of two integers is a multiple of 7 or 11. If so, print true.

console.log('-----------8------------')

function multipleOf7Or11(n1, n2) {
    return n1 % 7 === 0 || n1 % 11 === 0 || n2 % 7 === 0 || n2 % 11 === 0
}


console.log(multipleOf7Or11(31, 55));


// 9. Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.


console.log('-----------9------------')

function calcSameSum(n1, n2) {
    let sum = n1 + n2;
    return n1 === n2 ? 3 * sum : sum
}

console.log(calcSameSum(15, 15))



// 10. Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.


console.log('-----------10------------')

function diffNand19(n) {
    let diff = Math.abs(n - 19)
    return n > 19 ? 2 * diff : diff;
}

console.log(diffNand19(40));



console.log('-----------11------------')

// 11. BONUS CHALLENGE: Make a variable for firstName and age and give each variable values.

// Create an if/else statement to check whether the person's age is less than 13. If so, print "firstName is a child". 
// If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". 
// If the person's age is equal to and more than 20 and less than 30, then print "firstName is a young adult". 
// If none of these conditions apply, print "firstName is a adult".

let firstName = 'Kareem';
let age = -10;

if (age < 13) console.log(`${firstName} is a child`)
else if (age >= 13 && age <= 20) console.log(`${firstName} is a teenager`)
else if (age >= 20 && age <= 30) console.log(`${firstName} is a young adult`)
else console.log(`${firstName} is an adult`)