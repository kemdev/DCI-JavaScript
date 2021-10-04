function print(string) {
    console.log(string)
}

let lineNumber = 1;

function printHr() {
    print(`---------${lineNumber}---------`)
    lineNumber++;
}

function printHrNoCounter() {
    print(`------------------`)
}

// Addition. Write a program to add up the numbers 1 to 20.
printHr()

function addUp(num) {
    let sum = 0;
    for (let number = 1; number <= num; number++) {
        sum += number
    }
    return sum
}


print(addUp(20))

printHr()



// There are i bottles of beer on the wall. Write a program that will output, "There is one bottle of beer on the wall.
// " "There are two bottles of beer on the wall" up until there are five bottles.


function bottleOnTheWall(num) {
    let bottles = 'bottles'
    for (let i = 1; i <= num; i++) {
        if (i > 1) print(`There is ${i} ${bottles} of beer on the wall`)
        else print(`There is ${i} bottle of beer on the wall`)
    }

}

bottleOnTheWall(5)


/**
 * The odd/even reporter. Write a program that will iterate from 0 to 20. 
 * For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
 */



printHr()

function from0To20() {
    for (let i = 0; i <= 20; i++) {
        if (i % 2 === 0) print(`${i} is even`)
        else print(`${i} is odd`)
    }
}

from0To20()


printHr()

/**
 * Multiplication Tables.
 * Write a program that will iterate from 0 to 10.
 * For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18"). 
 * Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
 */


function multiplicationTaple() {
    for (let i = 0; i <= 10; i++) {
        print(`${i} * 9 = ${i * 9}`)
        printHrNoCounter()
        for (let j = 0; j <= 10; j++) {
            print(`${i} * ${j} = ${i * j}`)
        }
    }
}

multiplicationTaple()

printHr()

/**
 * 5. Fizz Buzz Write a program which iterates the integers from 1 to 100. 
 * But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
 * For numbers which are multiples of both three and five print "FizzBuzz".
 */

function FizzBuzz() {
    let fizz = 'Fizz'
    let buzz = 'Buzz'
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) print(`${i} - ${fizz + buzz}`)
        else if (i % 3 === 0) print(`${i} - ${fizz}`)
        else if (i % 5 === 0) print(`${i} - ${buzz}`)
    }
}

FizzBuzz()

printHr();
// 6. Sum of Multiples Write a program to add the multiples of 3 and 5 under 1000.

function multiples() {
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
        if (i % 3 === 0 && i % 5 === 0) sum += i
    }
    return sum
}


print(multiples())

printHr()

// 7. Write programs that produce the following outputs:

// 100 200 300 400 500 600 700 800 900 1000

for (let i = 100; i <= 1000; i += 100) {
    print(i)
}

// 0 2 4 6 8 10
printHrNoCounter()
for (let i = 0; i <= 10; i += 2) {
    print(i)
}


// 3 6 9 12 15

printHrNoCounter()

for (let i = 3; i <= 15; i += 3) {
    print(i)
}

// 9 8 7 6 5 4 3 2 1 0

printHrNoCounter()

for (let i = 9; i >= 0; i--) {
    print(i)
}

printHrNoCounter()

// 1 1 1 2 2 2 3 3 3 4 4 4

printHrNoCounter()
for (let i = 1; i <= 4; i++) {
    for (let j = 0; j < 3; j++) {
        print(i)

    }
}


// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

printHrNoCounter()
for (let i = 0; i < 3; i++) {
    for (let j = 0; j <= 4; j++) {
        print(j)

    }
}


printHr()

/** 
 * 8. isPalindrome. Write a program to check whether a word is a palindrome or not.
 * Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat 
 */




function isPalindrome(word) {
    let lowerdCase = word.toLowerCase();
    let wordArray = lowerdCase.split('')
    let wordArrayReversed = wordArray.reverse()
    let wordReversed = wordArrayReversed.join('')
    if (wordReversed === lowerdCase) return true;
    return false
}


print(isPalindrome('SammaS'))