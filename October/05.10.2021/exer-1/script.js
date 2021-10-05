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


// 1. Write a function that takes in one parameter and logs that parameter 3 times into the console.
println()

function para3Times(para) {
    for (let i = 0; i < 3; i++) {
        print(para)
    }
}

para3Times('test')

// 2. Write a function that takes in one parameter and returns that parameter repeated five times. For the input "Cat" it would return "CatCatCatCatCat"

println()

function repeat5Times(para) {
    let result = ''
    for (let i = 0; i < 5; i++) {
        result += para
    }
    return result
}

print(repeat5Times('Cat'))



// Write a function that takes in two parameters, the first one should be a number and the 2nd one should be a string. 
// The functions returns the 2nd argument repeated as many times as the 1st argument defins. 
// For the inputs 3 and "Woah" it should return WoahWoahWoah


println()

function repeatNTime(num, string) {
    let result = ''
    for (let i = 0; i < num; i++) {
        result += string
    }
    return result
}

print(repeatNTime(3, 'Woah'))


// 4. Write a function that takes in an array of numbers as a parameter. 
// It should return the largest number in the array. 
// For the input [1,6,83,91,0,-4,1337,5] it should return 1337


function checkLargetNumber(array) {
    let result = 0;
    array.forEach((element) => {
        if (element > result) result = element
    });

    return result;
}

print(checkLargetNumber([1, 6, 83, 91, 0, -4, 1337, 5]))


println()


// 5. This question has 2 parts



// Part a):
// write a function that takes in a number and does a console.log("Even 10!") if the number is evenly divisable by 10. Examples:
// printIfDivisibleByTen(1) --> no output
// printIfDivisibleByTen(2) --> no output
// printIfDivisibleByTen(32) --> no output
// printIfDivisibleByTen(10) --> "Even 10!" into the console
// printIfDivisibleByTen(30) --> "Even 10!" into the console
// printIfDivisibleByTen(90000) --> "Even 10!" into the console
function printIfDivisibleByTen(num) {
    if (num % 10 === 0) print('Even 10!')
}


printIfDivisibleByTen(90000)
printIfDivisibleByTen(1)
printIfDivisibleByTen(2)
printIfDivisibleByTen(32)
printIfDivisibleByTen(10)
printIfDivisibleByTen(30)
printIfDivisibleByTen(90000)

println()

// Part b) write a for-loop that runs 125 times, each time calling the function you created in part a with the current iteration number.

for (let i = 0; i < 125; i++) {
    printIfDivisibleByTen(i)
}


println()

// 6. Write an arrow function that takes in 5 numbers as its parameters and returns the largest one

let arrowFunction = (num1, num2, num3, num4, num5) => Math.max(num1, num2, num3, num4, num5)


print(arrowFunction(10, 15, 155, 125, 50))


println()

// 7. Write an arrow function that takes in one parameter and returns true if that parameter is a string.

function isString(string) {
    return typeof string === 'string'
}

print(isString('ss'))
print(isString(10))

println()

// 8. Write an arrow function that takes in two parameters and returns true if both of them are strings.
function isBothString(string1, string2) {
    return typeof string1 === 'string' && typeof string2 === 'string';
}


print(isBothString('ss', 'tes'))
print(isBothString(1, 'tes'))


println()

// 9. Write an arrow function that takes in one string. The function should return the first word in the string that was given to it. Examples:
// getFirstWord("Internetting is hard") --> "Internetting"
// getFirstWord("Hello World") --> "Hello"
// getFirstWord("Hello") --> "Hello"

let getFirstWord = (string) => string.substring(0, string.indexOf(' '))

print(getFirstWord("Internetting is hard"))
print(getFirstWord("Hello World"))
print(getFirstWord("Hello World"))

println()

// HARD Write an arrow function that takes in one string. 
// The function should return a new string that where each word in the input string is repeated by the amount of words in the input string. Examples:
// wordRepeater("bunny") -- > "bunny"
// wordRepeater("Cat food") -- > "Cat Cat food food"
// wordRepeater("I am groot") -- > "I I I am am am groot groot groot"
// wordRepeater("O M G ?") -- > "O O O O M M M M G G G ? ? ? ?"

let wordRepeater = (string) => {
    let numberOfRepetetion = 0;
    let result = ''
    let arrayOfWord = string.split(' ');
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ' ') numberOfRepetetion++;
    }
    for (let j = 0; j <= numberOfRepetetion; j++) {
        for (let i = 0; i <= numberOfRepetetion; i++) {
            result += arrayOfWord[j] + ' '
        }
    }
    return result
}

print(wordRepeater('bunny'))
print(wordRepeater("Cat food"))
print(wordRepeater("I am groot"))
print(wordRepeater("O M G ?"))



println()


// Write a short (single line) arrow function that takes in one string and returns the first character of that string. Examples:

// firstLetter("cat") --> "c"
// firstLetter("quylthulg") --> "q


let firstChar = (string) => string[0];

print(firstChar('Cat'))
print(firstChar("quylthulg"))

println()

// 12. Write an arrow function that takes in one string and returns a new string. 
// The new string needs to be made from the first letter of each of the words in the input. Examples:
// firstLetters("cat") --> "c"
// firstLetters("What the fruit") --> "Wtf"
// firstLetters("MongoDB Express Node React") --> "MERN"
// firstLetters("What You See Is What You Get") --> "WYSIWYG"

let getFirstLetterFromEachEord = (string) => {
    let result = ''
    let array = string.split(' ')
    array.forEach(element => {
        result += element[0]
    });
    return result
}

print(getFirstLetterFromEachEord("cat"))
print(getFirstLetterFromEachEord("What the fruit"))
print(getFirstLetterFromEachEord("MongoDB Express Node React"))
print(getFirstLetterFromEachEord("What You See Is What You Get"))


println()

// 13. Write an arrow function that takes in one variable. 
// If that variables is a string, it will return the length of the string. 
// If that variable is an array, it returns the length of the array. 
// If it is something else, it will return null. 
// You might need to search Google to find out how can you identify if the parameter is an array - but there are other ways to solve this too!

let getLingth = (para) => isString(para) ? para.length : Array.isArray(para) ? para.length : null;


print(getLingth('Setting'))
print(getLingth(1))
print(getLingth([1, 2, 3]))


println()

// 14. Write an arrow function that takes in one variable. 
// If the variable is not a string, return null. If it is a string, return an array where each of the characters of that string is in individual array entry. 
// Examples:

// explode("Cat") --> ["C", "a", "t"]
// explode(41) --> null
// explode("") --> []
// explode("R & D") --> ["R", " ", "&", " ", "D"]

let explode = (para) => isString(para) ? para.split('') : null
print(explode("Cat"))
print(explode(41))
print(explode(""))
print(explode("R & D"))


println()



// 15. Reverse engineering challenge 1. Write a function that does this (BONUS: write it as a short (one line) arrow function):
// foo("") -> false
// foo("a") -> false
// foo("o") -> true
// foo("Cat") -> false
// foo("Tomato") -> true
// foo("Potato") -> true
// foo("Blanket") -> false
// foo("1") -> false

let foo = (string) => !isString ? false : string.indexOf('o') !== -1 ? string + ' -> ' + true : false


print(foo(""))
print(foo("a"))
print(foo("o"))
print(foo("Cat"))
print(foo("Tomato"))
print(foo("Potato"))
print(foo("Blanket"))
print(foo("1"))


println()

// 16. Reverse engineering challenge 2. Write a function that does this (BONUS: write it as a short (one line) arrow function):

// bar("") --> "Cat"
// bar("x") --> "Cat"
// bar("Cat") --> "Catt"
// bar("Foobar") --> "Catobar"
// bar("Potato") --> "Cattato"
// bar("Tomato") --> "Catmato"
// bar("International Space Station") --> "Catternational Space Station"


let bar = (string) => !isString ? false : 'cat' + string.slice(2, )

print(bar("")) //--> "Cat"
print(bar("x")) // --> "Cat"
print(bar("Cat")) // --> "Catt"
print(bar("Foobar")) // --> "Catobar"
print(bar("Potato")) // --> "Cattato"
print(bar("Tomato")) // --> "Catmato"


export function printing() {
    print()
    println()
    printDashes()
};