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

/**
 * 1. The Greater Numbers.
 * Create a function which accepts two arguments: 
 * the first argument being an array of numbers, and the second argument being a number. 
 * The function should return the elements of the array which are greater than the second argument. 
 */

function findGreatest(array, number) {
    let output = ''
    for (const num of array) {
        num > number ? output += num + ' ' : ''
    }

    return output
}

println()
print(findGreatest([3, 4, 5], 4)) // ➞ 5

print(findGreatest([10, 20, 30], 12)) // ➞ 20, 30

print(findGreatest([0, 10, 3], 4)) //  ➞ 10


// 2. For the longest word. Create a function to find the longest word in a given string.

// i.e. 

function longestWord(str) {
    let arrayOfWords = str.split(' ')
    let output = ''
    for (const word of arrayOfWords) {
        output.length < word.length ? output = word : ''
    }

    return output;
}

println()
print(longestWord("this is a web development course")) // ➞ "development"

// 3. Reverse. Create a function to reverse a number.

// i.e.

function reverse(number) {
    let numberStr = number.toString();
    let output = '';
    for (let i = numberStr.length - 1; i >= 0; i--) {
        output += numberStr[i];
    }

    // return output
    return Number(output)
}

println()
print(reverse(34532)) // ➞ 23543

// 4. AEIOU: Vowels. Create a function that takes a string in its parameters and counts the number 
// of vowels (i.e. in English, "a, e, i, o, u") in the string.
// i.e. findVowels("this is a string") ➞ 4


function findVowels(str) {
    let counter = 0;
    let vowel = "a ,e ,i ,o ,u ,A ,E, I, O, U"
    vowel = vowel.replace(/ /g, "")
    let test = ''
    for (let vow of vowel) {
        for (let char of str) {
            char.match(vow) ? counter++ : ''
        }

    }
    return counter
}

println()
print(findVowels("this is a string")) //  ➞ 4

/**
 * 5. Missing Number. Create a function that takes an array of all integers between 1 and 10 (excluding one) and returns the missing integer.
 * Examples:
 * missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
 * missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
 * missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7
 *  
 */

function missingNums(array) {
    let counter = 10
    let output = []
        // return Number(numbers.filter(num => !array.includes(num)))
    for (let i = 1; i <= counter; i++) {
        !array.includes(i) ? output.push(i) : ''
    }
    return output
}

println()
print(missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10])) //➞ 5
print(missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8])) //➞ 10
print(missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9])) // ➞ 7


// 6. Cubed. Create a function that takes in an array of numbers and returns the sum of its cubes.
// Examples:

// sumOfCubes([1, 5, 9]) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// sumOfCubes([2]) ➞ 8
// sumOfCubes([]) ➞ 0

function sumOfCubes(array) {
    let output = 0

    for (let element of array) {
        output += Math.pow(element, 3)
    }
    return output
}

println()

//  
print(sumOfCubes([1, 5, 9])) // ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
print(sumOfCubes([2])) //  ➞ 8
print(sumOfCubes([])) // ➞ 0


// 7. Dictionary. Create a function that takes an initial string and an array of words, 
// and returns a filtered array of the words that start with the same letters as the initial string.
// Notes:
// If none of the words match, return an empty array.
// Keep the filtered array in the same relative order as the original array of words.


// Examples:

// dictionary("bu", ["button", "breakfast", "border"]) ➞ ["button"]
// dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ➞ ["triplet", "tries", trip"]
// dictionary("beau", ["pastry", "delicious", "name", "boring"]) ➞ []

function dictionary(str, array) {
    let prefix = ''
    let output = []

    for (let word of array) {
        prefix = word.substr(0, str.length)
        prefix === str ? output.push(word) : ''
    }

    return output
}

println()


print(dictionary("bu", ["button", "breakfast", "border"])) //  ➞ ["button"]
print(dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"])) // ➞ ["triplet", "tries", trip"]
print(dictionary("beau", ["pastry", "delicious", "name", "boring"])) //➞ []


// 8. Even Number Generator. Create a function that finds all even numbers from 1 to the given number.

// Examples:

// evenNums(8) ➞ [2, 4, 6, 8]
// evenNums(4) ➞ [2, 4]
// evenNums(2) ➞ [2] Notes:
// If there are no even numbers, return an empty array.
// Do not include 0.

function evenNums(num) {
    let output = []

    for (let i = 1; i <= num; i++) {
        i % 2 === 0 ? output.push(i) : ''
    }

    return output
}

println()

print(evenNums(8)) //➞ [2, 4, 6, 8]
print(evenNums(4)) //➞ [2, 4]
print(evenNums(2)) //➞ [2]
print(evenNums(1)) //➞ []

// Bonus: Alphabetical Order. Create a function to sort a string into alphabetical order. 
// NB: assume numbers, symbols and punctuation are not included in the string.

function alphaOrder(str) {
    return str.toString().split('').sort().join('');

    // let alphabet = [
    //     'a', 'b', 'c', 'd', 'e',
    //     ' f', ' g', ' h', ' i', 'j',
    //     'k', 'l', 'm', 'n', 'o',
    //     'p', 'q', 'r', 's', 't',
    //     'u', 'v', 'w', 'x', 'y',
    //     'z'
    // ]
    // let index = []
    // let output = ''
    // for (let char of str) {
    //     print(alphabet.indexOf(char))
    //     index.push(alphabet.indexOf(char))
    // }

    // index = index.sort((a, b) => a - b)
    // for (let idx of index) {
    //     output += alphabet[idx]
    // }
    // return output
}
dashes()
    // i.e. alphaOrder("webdev") ➞ "bdeevw"

// 
// alphaOrder()

print(alphaOrder("webdev")) //  ➞ "bdeevw"