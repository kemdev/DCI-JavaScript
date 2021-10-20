let exerNum = 1;

function print(...arg) {
    console.log(...arg)
};

function println() {
    print(`---------------${exerNum}---------------`)
    exerNum++
};

function dashes() {
    print('---------------------------')
};

// sumOfNumbers. 
// Create a program that adds up the numbers in an array (of at least 3 numbers). 
// Bonus: Print to screen both the sum and the product of these numbers.


function addsUp(array) {
    if (array.length < 3) return 'Your array should be have at least 3 elements '
    let sum = 0
    let multiply = 1

    for (let num of array) {
        sum += num
        multiply *= num
    }

    return `Sum is: ${sum} \nMultiplication is: ${multiply}`
}

println()
print(addsUp([1, 10, 3]))
dashes()
print(addsUp([1, 2, 3]))


// Hello Frien. Create an array filled with your friends' and family's names.
// Loop over the array and greet each friend. 
// Bonus: Print the indexes of each item in the array. Examples:

println()
let myFriend = ['Tanya', 'Simona', 'Igor', 'Kevin', 'Goerge']


for (let name of myFriend) {
    print(`Hello ${name}! `)
    print(`${name} is at index ${myFriend.indexOf(name)} of my friends and family array`)
    dashes()

}


// City Names. Create an array of city names. Loop through the array and add the city names to a string. Examples:
// [Berlin, Paris, Prague, Rome] ➞ expected output: "Berlin, Paris, Prague, Rome".

let cityNames = ['Berlin', 'Stuttgart', 'Riyadh', 'Hamah', 'Frankfurt']

let strignOfCityies = ''

for (let city of cityNames) {
    // strignOfCityies += city + ', '
    cityNames.indexOf(city) !== cityNames.length - 1 ? strignOfCityies += city + ', ' : strignOfCityies += city + '.'
}

println()
print(strignOfCityies)


// Odds and Evens. 
// Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. Examples:
// [3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
// [6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19]

function changeOddAndEven(array) {
    let output = []

    for (num of array) {
        num % 2 === 0 ? output.push(num - 1) : output.push(num + 1)
    }
    return output
}

println()
print(changeOddAndEven([3, 5, 2, 4])) // ➞ expected output: [4, 6, 1, 3]
print(changeOddAndEven([6, 9, 10, 20])) // ➞ expected output: [5, 10, 9, 19]


println()

// Capitalize. Create a program that capitalizes the first letter of each element in an array of names. 

// Examples:
// ["matt", "sara", "lara"] ➞ ["Matt", "Sara", "Lara"]

// ["samuel", "MARIA", "luke", "mary"] ➞ ["Samuel", "Maria", "Luke", "Mary"]

// ["Cynthia", "Karen", "Jane", "Carrie"] ➞ ["Cynthia", "Karen", "Jane", "Carrie"]

// Note: Keep names in the same order and make sure that only the first letter of the name is capitalised (See "Maria" in the second above example).
function capitalised(array) {
    let output = []

    for (let name of array) {
        name = name.toLowerCase()

        output.push(name[0].toUpperCase() + name.substr(1, ))
    }
    return output
}

print(capitalised(["matt", "sara", "lara"])) // ➞ ["Matt", "Sara", "Lara"]
print(capitalised(["samuel", "MARIA", "luke", "mary"])) // ➞ ["Samuel", "Maria", "Luke", "Mary"]
print(capitalised(["Cynthia", "Karen", "Jane", "Carrie"])) // ➞ ["Cynthia", "Karen", "Jane", "Carrie"]
    // print(capitalised())


// No Duplicates! A set is a collection of unique items. 
// A set can be formed from an array by removing all duplicate items. 
// Create a program which transforms an array into a set of unique values. 
// See the examples below. Example:



function removeDuplicate(array) {
    let output = []
    for (let num of array) {
        !output.includes(num) ? output.push(num) : ''
    }

    return output;
}
// 

// 

// 

// 

println()
print(removeDuplicate([1, 4, 4, 7, 7, 7])) // ➞ [1, 4, 7]
print(removeDuplicate([1, 6, 6, 9, 9])) // ➞ [1, 6, 9]
print(removeDuplicate([2, 2, 2, 2, 2, 2])) // ➞ [2]
print(removeDuplicate([5, 10, 15, 20, 25])) // ➞ [5, 10, 15, 20, 25]



// Repeat it. 
// Create a program with two variables: "item" and "times". 
// Create a program that repeats the "item" as many times as specified by "times". 
// The first variable ("item") is the item that needs repeating while the second argument ("times") is the number of times the item is to be repeated. 
// Print the result in an array. Examples:
// ("example", 3) ➞ ["example", "example", "example"]
function repeatIt(array, repeat) {
    let output = []
    for (let i = 0; i < repeat; i++) {
        output.push(array)
    }

    return output
}

println()
print(repeatIt("example", 3))


// Factors.
// A factor chain is an array where each previous element is a factor of the next consecutive element.
// The following is a factor chain: [3, 6, 12, 36]
// 3 is a factor of 6 (3 * 2 = 6)
// 6 is a factor of 12 (6 * 2 = 12)
// 12 is a factor of 36 (12 * 3 = 36)


// Create a program that determines whether or not a given array is a factor chain. Examples:





function isFactor(array) {
    let test = []
    for (let i = 0; i < array.length; i++) {
        // test.push(array.filter(i => array[i] % i === 0))
        let nextNum = array[i + 1]
        if (nextNum % array[i] === 0) test.push(array[i])
        if (i === array.length - 1)(array[i] % array[i - 1] === 0) ? test.push(array[i]) : ''
    }

    return test.length === array.length
}

println()
print(isFactor([1, 2, 4, 8, 16, 32])) // ➞ true
print(isFactor([1, 1, 1, 1, 1, 1])) //  ➞ true
print(isFactor([2, 4, 6, 7, 12])) // ➞ false
print(isFactor([10, 1])) // ➞ false