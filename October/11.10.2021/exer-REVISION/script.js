let exerNum = 1;

function print(...args) {
    console.log(...args)
}


function println() {
    print(`------------${exerNum}------------`)
    exerNum++
}


/**
 * 01
 * Create a function that accepts 2 arrays and returns an array with
 * the different items between those 2 arrays
 * example
 * diffArray(["grass", "dirt", "pink wool", "dead shrub"],  ["grass", "dirt", "dead shrub"]) should return ["pink wool"]
 *
 * diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) 
 */

println()

function diffArray(array1, array2) {
    let biggerLength = 0
    array1.length > array2.length ? biggerLength = array1.length : array2.length;
    let output = []
    for (let i = 0; i < array2.length; i++) {
        if (!array1.includes(array2[i])) output.push(array2[i])
        else if (!(array2.includes(array1[i]))) output.push(array1[i])
    }
    return output
}

print(diffArray([1, 2, 3, 5, 6], [1, 2, 3, 5, 4, 8])) // should return [4]
print(diffArray(["grass", "dirt", "pink wool", "dead shrub"], ["grass", "dirt", "dead shrub"])) // should return ["pink wool"]


println()

/**
 * 02
 * Write a function that accepts a letter and returns whether this letter
 * is upperCase or not. if It's uppercase should return 'YES'
 * else should return 'NO'
 */


function checkUpperCase(letter) {
    return letter === letter.toUpperCase() && Number.isNaN(letter) ? 'Yes' : 'No'
}

print(checkUpperCase('10'))

println()

/**
 * 03
 * Write a function that counts the number of the odd digits in number.
 *
 */

function countOdd(number) {
    number = number.toString()
    let oddNumber = 0;

    for (let i = 0; i < number.length; i++) {
        if (number[i] % 2 !== 0) oddNumber++
    }
    return oddNumber
}


print(countOdd(788100055555))

println()



/**
 * 04
 * Telephone conversation price calculator
 * Write a program that calculates the price in euros of a
 * telephone conversation.
 * The Price table is:
 * numbers starting from: 0180-1 = 0.039 €/minute
 * numbers starting from: 0180-2 = 0.06 €/call plus 0.42 €/minute
 * numbers starting from: 0180-7 = first 30 seconds free, then 0.14 €/minute
 * numbers starting from 0800 = free of charge.
 * Please note that prices must be format with 2 digits precision
 */

function phonePrice(number, seconds) {
    let checkForEnd = number.split('-').join('').substr(0, 5)
    let lastIndex = checkForEnd.length - 1;
    let price = '';
    let pricePerMinute = 0;
    // second * price  / 60
    let totalPrice;
    let checkLastDigit = Number(checkForEnd[lastIndex])
    let checkFree = Number(checkForEnd.substr(0, 4)) === 0800;


    if (checkLastDigit === 1 && !checkFree) {
        pricePerMinute = 0.039;
    }
    if (checkLastDigit === 2 && !checkFree) {
        pricePerMinute = 0.42;
        // price += totalPrice + 0.06
    }
    if (checkLastDigit === 7 && !checkFree) {
        pricePerMinute = 0.14;
        if (seconds > 30) {
            seconds = seconds - 30;

            // price += totalPrice;
        } else pricePerMinute = 0
    } //seconds >= 30 ? price += parseFloat(first30Second + 0.14) + perMintueSTR : price += 0.14 + perMintueSTR
    if (checkFree) pricePerMinute += 0
    totalPrice = (seconds * pricePerMinute) / 60
    price += totalPrice

    return price + '€';
}

print(Number.isInteger(10))

print(phonePrice('0180-7511005', 30))
print(phonePrice('0180-7511005', 60))
print(phonePrice('0800-7511005', 60))


println()

/**
 * 05
 * Write a function that accepts an array with items followed by one or more
 * arguments. The function should return another array that doesn't include
 * any of the elements that have the same values as in the arguments that 
 * come after the array
 * Examples: 
 * clearArray([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1]
 * clearArray([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1]
 * clearArray([3, 5, 1, 2, 2], 2, 3, 5) should return [1]
 * clearArray([2, 3, 2, 3], 2, 3) should return []
 */


function clearArray(array, ...toRemove) {
    let output = []
    array.forEach(element => {
        if (!(toRemove.includes(element))) output.push(element)
    });
    return output
}


print(clearArray([1, 2, 3, 1, 2, 3], 2, 3)) //should return [1, 1]
print(clearArray([1, 2, 3, 5, 1, 2, 3], 2, 3)) //should return [1, 5, 1]
print(clearArray([3, 5, 1, 2, 2], 2, 3, 5)) //should return [1]
print(clearArray([2, 3, 2, 3], 2, 3)) // should return []