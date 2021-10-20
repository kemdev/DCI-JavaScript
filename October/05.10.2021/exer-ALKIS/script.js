let exersiceNum = 1;

function print(...arguments) {
    console.log(...arguments)
}


function println() {
    print(`-------------${exersiceNum}-------------`)
    exersiceNum++
}

function printDashes() {
    print(`--------------------------`)

}

/**
 * 01 easy
 * Write a JavaScript function to generate an array between two integers of 1 step length.
 * Test Data :
 * console.log(rangeBetween(4, 7));
 * [4, 5, 6, 7]
 * console.log(rangeBetween(-4, 7));
 * [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
 */
println()

function rangeBetween(min, max) {
    let result = []
    for (min; min <= max; min++) {
        result.push(min)
    }
    return result
}

print(rangeBetween(-4, 7))





/**
 * 02 easy medium
 * Write a JavaScript function to generate an array of specified length, 
 * filled with integer numbers, increase by one from starting position.
 * console.log(arrayRange(1, 4));
 * [1, 2, 3, 4]
 * console.log(arrayRange(-6, 4));
 * [-6, -5, -4, -3]
 */
println()

function arrayRange(start, length) {
    let result = []
    for (let i = 0; i < length; i++) {
        result.push(start++)
    }
    return result
}

print(arrayRange(-6, 4))

println()

/**
 * 03 easy medium
 * Write a JavaScript function to switch positions of one array element.
 * The function should accept the array, the current position and the new position
 * console.log(moveIt([10, 20, 30, 40, 50], 0, 2));
 * [30, 20, 10, 40, 50]
 * console.log(moveIt([10, 20, 30, 40, 50], 1, 4));
 * [10, 50, 30, 40, 20]
 */

function moveIt(array, indexStart, indexToSwitchWith) {
    let result = []
    result.push(...array);
    let temp = []
    temp = result[indexStart]
    result[indexStart] = result[indexToSwitchWith]
    result[indexToSwitchWith] = temp
    return result;
}

print((moveIt([10, 20, 30, 40, 50], 0, 2)))
print(moveIt([10, 20, 30, 40, 50], 1, 4))



/**
 * 04 easy
 * Write a function that accepts a string and and number of times that this string will fill
 * and return an array
 * example fillArray('some string', 4) should return 
 * ['some string', 'some string', 'some string', 'some string']
 */

println()

function fillArray(string, num) {
    let result = []
    for (let i = 0; i < num; i++) {
        result.push(string)
    }
    return result
}

print(fillArray('some string', 4))

println()

/**
 * 05 easy
 * Write a JavaScript function to get a random item from an array
 * const items = [254, 45, 212, 365, 2543];
 * console.log(randomItem(items));
 */
const items = [254, 45, 212, 365, 2543]

function randomItem(array) {
    let min = 0;
    let max = array.length;
    let randomIndex = Math.floor(Math.random() * (max - min) + min)
    print(randomIndex)
    return items[randomIndex];
}

print(randomItem(items));
println();
/**
 * 06 easy
 * Write a function to find if an array contains a specific element
 * checkItem([2, 5, 9, 6], 5) should return true
 * checkItem([2, 5, 9, 6], 1) should return false
 */

let checkItem = (array, toCheck) => array.includes(toCheck)
print(checkItem([2, 5, 9, 6], 5))
print(checkItem([2, 5, 9, 6], 1))


/**
 * 07 medium
 * Write a function which merges two arrays and removes all duplicates elements
 * Example:
 * array1 = [1, 2, 3];
 * array2 = [2, 30, 1];
 * mergeArrays(array1, array2) should return [3, 2, 30, 1] (the items can be with any order)
 */
// mergeArrays
println()
let mergeArrays = (array1, array2) => {
    let result = [];
    array1.forEach(element => {
        !result.includes(element) ? result.push(element) : ''
    });
    array2.forEach(element => {
        !result.includes(element) ? result.push(element) : ''
    });

    return result
}

array1 = [1, 2, 3];
array2 = [2, 30, 1]


print(mergeArrays(array1, array2))


println()


/**
 * 08 easy medium
 * Write a JavaScript function to remove. 'null', '0', '""', 'false', 
 * 'undefined' and 'NaN' values from an array.
 * Sample array: [NaN, 0, 15, false, -22, '',undefined, 47, null]
 * Expected result: [15, -22, 47]
 */

let cleanArray = array => {
    let result = []
    array.forEach(element => {
        // if (typeof element === 'number' && !isNaN(element) && element !== 0) result.push(element)
        if (element) result.push(element)
    });
    return result
}

print(cleanArray([NaN, 0, 15, false, -22, '', undefined, 47, null]))