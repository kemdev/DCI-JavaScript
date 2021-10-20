let exerNum = 1

function print(...arg) {
    console.log(...arg)
}

function println() {
    print(`---------------${exerNum}---------------`)
    exerNum++
}

function dashes() {
    print('---------------------------')
}

// 1. Combining Arrays
// Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array.
// Once again create two arrays. Save all elements of both arrays to another variable.
println()
let euroCountries = ['Germany', 'Holland', 'Sweeden']
print(euroCountries)

let asianCountries = ['Syria', 'China', 'India']
euroCountries.push(...asianCountries)
print(euroCountries)

let anotherVariable = [...euroCountries, ...asianCountries]

print(anotherVariable)




println()


// 2. Copying Arrays
// Copy an array using the spread operator. Store the copied array in another variable.
// 

let array = ['one', 'two', 'whatever']
let copiedArray = [...array]
print('Copied Array', copiedArray)
println();

// Find the Largest...
// Create a function to find the largest number in an array.

function largestNumber(array) {
    result = -Infinity
    for (let num of array) {
        num > result ? result = num : ''
    }

    return result
}

let arrayWithNumber = [1, 5, 6, 7, 10, 0, -1, 515, 55, -150]
print(largestNumber(arrayWithNumber))


println()


// 4. Find the Smallest
// Create a function to find the smallest number in an array.

function smallestNumber(array) {
    let output = Infinity;

    for (let num of array) {
        num < output ? output = num : ''
    }

    return output
}


print(smallestNumber(arrayWithNumber))

println()

// Clone and Merge
// Given two objects:
const person = { name: "John" }
const job = { role: "Teacher" }

// 5.1 Clone the person object.

let clonedPerson = person;

// 5.2 Merge these two objects into one object: "employee". Use the spread operator to do so.

let employee = {...person, ...job }
print(employee)

// Then change the values of the properties in the employee object.

employee.name = 'Kareem'
employee.role = 'Developer'
print(employee)

/**
 * Bonus: 6. Is the average a whole number?
 * Create a function that takes 4 integers as parameters 
 * and returns true or false depending on whether the average of all the arguments is a whole number or not.
 * Examples
 * isWhole(1, 2, 3, 4) ➞ false
 * isWhole(9, 2, 2, 5) ➞ false
 * Once you have created a function, pass in an array as an argument which contains four elements - 
 * check if this method still outputs the correct result!
 */

println()

function isWhole(num1, num2, num3, num4) {
    let output = 0
    output = (num1 + num2 + num3 + num4) / 4

    return Number.isInteger(output)
}

print(isWhole(1, 2, 3, 4))
print(isWhole(9, 2, 2, 5))
print(isWhole(2, 2, 2, 2))



// ===============
//      THE END
// ===============