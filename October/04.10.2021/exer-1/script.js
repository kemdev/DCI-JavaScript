function print(string) {
    console.log(string)
}


// 1. Multiply - Function Declaration
// Create a function that multiples a number by another number.


function multiply(num1, num2) {
    return num1 * num2
}

print(multiply(10, 15))



// 2. Multiply - Function Declarations as Values
// Rework the syntax of the above function so that the function declaration is stored as a value.

const multiply2 = function(num1, num2) {
    return num1 * num2
}

print(multiply2(15, 10))



// 3. Multiply - Arrow Function
// Rework the syntax of the function declaration so that is uses the arrow function shorthand.

const multiplyArrow = (num1, num2) => num1 * num2;

print(multiplyArrow(10, 15))


// 4. Declarations
// Create functions (using all three declarations) to check the remainder of division given two numbers.


function checkRemainder(num1, num2) {
    return num1 % num2
}

print(checkRemainder(10, 10))



const checkRemainder2 = function(num1, num2) { return num1 % num2 }

print(checkRemainder2(10, 11))

const checkRemainder3 = (num1, num2) => num1 % num2


print(checkRemainder3(100, 2))