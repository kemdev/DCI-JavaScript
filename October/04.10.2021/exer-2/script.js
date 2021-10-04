let exersiceNum = 1;

function print(string) {
    console.log(string)
}

function println() {
    print(`-------------${exersiceNum}-------------`)
    exersiceNum++
}

// 1. Print Exponential Values
// Write a function that accepts two numbers and validate that they are numbers.

// After that, the function should print y exponential values starting from x.


function expo(num1, numOfExpo) {
    let result = ''
    if (!isNaN(num1) && !isNaN(numOfExpo)) {
        for (let i = 1; i <= numOfExpo; i++) {
            result += num1 ** i + ' '
        }
    }

    return result
}

// For example if we have function(3, 5) The function should print 3 9 27 81 243. Prints 5 exponential values of 3.
println()
print(expo(3, 5))


// function(2, 8) The function prints 2 4 8 16 32 64 128 256. Prints 8 exponential values of 2.
print(expo(2, 8))




println()

// 2. Fruits
// Create a function named printFavoriteFruit. Declare a variable outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: x".
let favFruit = 'Banana '

function printFavoriteFruit() {
    favFruit = 'Some Fruit'
}


println()

// 3. Multiply a Number by Itself
// Create a function named exponent that takes two numbers as parameters. The second parameter defines how many times the first number should be multiplied by itself. Save the output in a variable named result.
// Then, try to access the variable result outside of the exponent function. Is this possible? Why/Why not? Comment your answer in the index.js file.

function exponent(num1, num2) {
    let result = '';
    for (let i = 1; i <= num2; i++) {
        result += num1 * num1 + ' '
    }
    return result
}

print(exponent(3, 5))