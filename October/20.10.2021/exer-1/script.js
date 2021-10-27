function print(...args) {
    console.log(...args)
}

let exerNum = 1

function println() {
    print(`----------------${exerNum}----------------`)
    exerNum++
}


function dashes() {
    print('--------------------------------')
}


// 1. Where Have My Four Letter Words Gone? Create a function that takes an array of strings. 
// Return all words in the array that are exactly four letters.

// Examples:

// isFourLetters(["John", "James", "Jack", "Jeanne"]) ➞ ["John", "Jack"]
// isFourLetters(["Tomato", "Corn", "Lettuce"]) ➞ ["Corn"]
// isFourLetters(["Dog", "Cat", "Deer"]) ➞ ["Deer"]


function isFourLetters(array) {
    let result = []
    for (let name of array) {
        name.length === 4 ? result.push(name) : ''
    }

    return result;
}

println()
print(isFourLetters(["John", "James", "Jack", "Jeanne"]))
print(isFourLetters(["Tomato", "Corn", "Lettuce"]))
print(isFourLetters(["Dog", "Cat", "Deer"]))


// 2. Months. Create a function that takes a number (from 1 to 12) and return its corresponding month name as a string.

// Examples:

// monthName(3) ➞ "March"
// monthName(12) ➞ "December"
// monthName(6) ➞ "June"


function monthName(num) {
    if (num > 12 || num < 1) return 'Please check your input'
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return months[num - 1]
}

println()
print(monthName(3))
print(monthName(12))
print(monthName(6))


// 3. Amplify the Multiples of 4. Create a function that takes an integer and returns an array of integers ascending from 1 to the given number, where:

// For each number in the array that can be evenly divided by 4, that number is amplified by 10 (i.e. return 10 times the number).
// If the number cannot be divided evenly by 4, simply return the number.
// The given integer will always be equal to or greater than 1.
// Include the given number (the number in the parameters).
// Examples:

// amplify(4) ➞ [1, 2, 3, 40]
// amplify(3) ➞ [1, 2, 3]
// amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]


function amplify(num) {
    if (num < 1) return 'please use number equal to or greater than 1'
    let output = []
    for (let i = 1; i <= num; i++) {
        i % 4 === 0 ? output.push(i * 10) : i % 4 !== 0 ? output.push(i) : ''
    }
    return output
}



//  
println()
print(amplify(4)) //  ➞ [1, 2, 3, 40]
dashes()
print(amplify(3)) //  ➞ [1, 2, 3]
dashes()
print(amplify(25)) //  ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]



// 4. One is not like the others... Create a function that takes an array of numbers and return the number that's unique.

// Examples:
function unique(array) {
    // return array.filter(((num, index, self) => (self.indexOf(num)) === index))
    for (let i = 0; i < array.length; i++) {
        if (array.indexOf(array[i], i + 1) === -1) return array[i]
    }
    return 'not found'
}

// 
// 
//  
println()
print(unique([3, 3, 3, 7, 3, 3])) // ➞ 7
print(unique([0, 0, 0.77, 0, 0.77])) // ➞ 0.77
print(unique([0, 1, 1, 1, 1, 1, 1, 1])) // ➞ 0


println()