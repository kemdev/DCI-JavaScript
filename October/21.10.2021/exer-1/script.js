function print(...args) {
    console.log(...args)
}

let exerNum = 1;

function println() {
    print(`------------${exerNum}------------`)
    exerNum++
}

function dashes(text = 'Extra') {
    print(`------------${text}------------`)
}

// Map, Filter, Reduce
// 1. Get total orders
// Return the total amount of orders.
// const orders = [
//   { amount: 250 },
//   { amount: 400 },
//   { amount: 100 },
//   { amount: 325 }
// ];

const orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
];

println()
let initialValue = 0
let sums = orders.reduce(function(a, b) { return a + b.amount }, initialValue)
print(sums)



// 2. Increment by 1
// 
// Create a function that increments each element in the arrayOfNumbers by 1. Return the a new array of modified elements.

const arrayOfNumbers = [3, 45, 6, 56, 7, 9];

function incrementBy1(array) {
    let output = []
    output = (array.map(num => num + 1))
    return output
}
println()
print(incrementBy1(arrayOfNumbers))


// 3. Filter Evens
// Create a function called filterEvens that filters an array and only return even numbers. 
// The function should take an array of numbers as an argument, and should not use a loop.
// Examples:

// filterEvens([1,2,3,11,12,13]); //returns [2,12]
// filterEvens([22,2,31,110,6,13]); //returns [22,2,110,6]

function filterEvens(array) {
    return array.filter((a) => a % 2 === 0)
}

println()
print(filterEvens([1, 2, 3, 11, 12, 13]))
print(filterEvens([22, 2, 31, 110, 6, 13]))


// 4. Filter Friends
// Given an array, create a function which filters array based on a search query.

// Examples

// const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
// console.log(filterItems(friends, 'ka')); // ["Rika"];
// console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];
function filterItems(array, find) {
    let temp = array.filter(name => name.includes(find))
    let result = []
    for (let name of temp) {
        result.push(name[0].toUpperCase() + name.slice(1))
    }
    return result
}
println()

const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
print(filterItems(friends, 'ka')); // ["Rika"];
print(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];

// 5. Sum Up
// Write a function called sum that uses the reduce method to sum up an array of numbers.

// Examples:




let sum = array => array.reduce((a, b) => a + b)

print(sum([1, 2, 3, 4, 5])); //returns 15
print(sum([6, 7, 7])); //returns 20)



// 6. Square Root
// Given an array of numbers, find the square root of each element in the array.

let sqrt = array => array.map(number => Math.sqrt(number))

println()
print(sqrt([1, 5, 49, 4]))