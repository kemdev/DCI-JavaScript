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



/**
 * 01 Easy
 * Repeat a given string str (first argument) for num times (second argument).
 * Return an empty string if num is not a positive number
 * Examples:
 * ("*", 3) should return the string ***
 * ("abc", 3) should return the string abcabcabc
 * ("abc", -2) should return an empty string ("")
 */

printHr()

function repeatFirstArg(arg, repeat) {
    let result = '';
    for (let i = 0; i < repeat; i++) {
        if (repeat < 0) return ''
        result += arg
    }
    return result;
}

print(repeatFirstArg('*', 3))
print(repeatFirstArg('abc', 3))
print(repeatFirstArg('abc', -2))

//------------------
/**
 * 02 Easy
 * Write a function addTo that accepts a number as a parameter 
 * and adds all natural numbers smaller or equal than the parameter. 
 * The result is to be returned.
 * Example: addTo(3) should return 1+2+3 = 6.
 */

printHr()

function addTO(num) {
    let sum = 0;
    let test = ''
    for (let i = 1; i <= num; i++) {
        sum += i
            // test += i + ' + ';
        if (i !== num) test += i + ' + '
        else test += i + ' = '
            // for (let j = 0; j < num; j++) {
            //     test += i + ' = '
            // }
    }
    return test + sum;
}

print(addTO(3))


printHr()

/**
 * 03 Easy
 * Write a function spaces that takes a natural number n and 
 * returns a string of n dashes.
 * Example: spaces(1) should return '-'
 */


function spaces(n) {
    let dashes = ''
    for (let i = 0; i < n; i++) {
        dashes += '-'
    }

    return dashes;
}

print(spaces(10))


printHr()

/**
 * 04 medium
 * Write a function lcm that takes two natural numbers and 
 * calculates their least common multiple (lcm). 
 * The lcm of two natural numbers a und b is the smallest natural number 
 * that is divisible by a and b.
 * Example: lcm(4, 6) should return 12
 * Hint: use a do while loop
 */


function lcm(a, b) {
    let counter = 1
    let smallestNum = 0;
    while (true) {
        if (counter % a === 0 && counter % b === 0) return counter;
        counter++
    }
}

print(lcm(4, 6))

printHr()


/**
 * 05 Medium
 * Write a function isPrime that checks whether a passed number is prime.
 * Prime number is the one that is divisible only by itself and 1 
 * (e.g. 2, 3, 5, 7, 11)
 * In case of a prime number it should return true, otherwise false.
 * Example: isPrime(7) should return true and isPrime(8) should return false
 */


function isPrime(num) {
    for (let i = 0; i <= num; i++) {
        if ((6 * (i)) + 1 === num || (6 * (i)) - 1 === num) return true;
    }
    return false
}

print(isPrime(11))


printHr()

/**
 * 6 medium
 * Create your own trim() function. That is, a function that accepts a string and
 * searches for white spaces from the begining and from the end of the string and removes them
 * The function should return the 'cleaned' string
 */

function trim(string) {
    let result = ''
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ' ') result += ''
        else result += string[i]
    }
    return result
}

print(trim(' test '))

printHr();


/**
 * 7 Hard
 * Write a function to construct the following pattern, using a nested for-loop.
 *
 **
 ***
 ****
 *****
 ******
 */


function marioPyramid(num) {
    let result = ''
    for (let i = 1; i <= num; i++) {
        for (let j = 2; j <= i + 1; j++) {
            result += '*'
        }
        if (i === num) break
        result += '\n'
    }
    return result
}

print(marioPyramid(3))