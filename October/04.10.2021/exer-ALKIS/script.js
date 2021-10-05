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
 * 01 medium
 * Remove all duplicates from an array of integers
 * example: with input [1,2,3,1] the function
 * should return [1,2,3]
 */

println()

function duplicatesRemoval(array) {
    let temp = []
    for (let index = 0; index < array.length; index++) {
        if (!temp.includes(array[index])) temp.push(array[index])
    }
    return temp
}

let array = [1, 2, 3, 1, 2];
print(duplicatesRemoval(array))



/**
 * 02 easy
 * Create an object to hold information on your favorite recipe. 
 * It should have properties for title (a string), servings (a number), 
 * and ingredients (an array of strings).
 * On separate lines (one console.log statement for each), 
 * log the recipe information so it looks like:
Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa
 */
println()

let favRecipe = {
    title: 'Mole',
    serving: 2,
    ingredients: ['cinnamon ', 'cumin', 'cocoa']
}

print(`Title: ${favRecipe.title}\nServing: ${favRecipe.serving}`)

for (let indx = 0; indx < favRecipe.ingredients.length; indx++) {
    print(favRecipe.ingredients[indx])
}


println()


/**
 * 03 easy
 * Create an array of objects, where each object describes a book
 * and has properties for the title (a string), author (a string), 
 * and alreadyRead (a boolean indicating if you read it yet).
 * Iterate through the array of books. 
 * For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
 * Now use an if/else statement to change the output depending on whether you read it yet or not. 
 * If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', 
 * and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
 */

let books = [{
        title: 'Somebook1',
        author: 'Somebody-famous',
        isRead: false,
    },
    {
        title: 'Some Other Book',
        author: 'Sombody Not Famous',
        isRead: true,
    },
    {
        title: 'Final Book',
        author: 'Some wierdo',
        isRead: false,
    }

]


for (let i = 0; i < books.length; i++) {
    print(`The ${books[i].title} by ${books[i].author}`)
        /**
         * Now use an if/else statement to change the output depending on whether you read it yet or not. 
         * If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', 
         * and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
         */
    if (books[i].isRead) print(`You already read "${books[i].title}" by ${books[i].author}`)
    else print(`You still need to read "${books[i].title}" by ${books[i].author}`)
    printDashes()
}




/**
 * 04 easy
 * Write a function named helloWorld that:
 * takes 1 argument, a language code (e.g. "es", "de", "en")
 * returns "Hello, World" for the given language, for atleast 3 languages. 
 * It should default to returning English.
 * Call that function for each of the supported languages and log the result to make sure it works.
 */

println()



function helloWorld(strings = 'en') {
    return strings === 'de' ? "Hallo, Welt" : strings === 'es' ? "Hola, Mundo" : strings === 'ar' ? 'أهلا، بالعالم' : 'Hello, World'
}

print(helloWorld('ar'))
print(helloWorld('es'))
print(helloWorld('de'))
print(helloWorld('fdf'))
print(helloWorld())



println()


/**
 * 05 easy
 * Write a function named pluralize that:
 * takes 2 arguments, a noun and a number.
 * returns the number and pluralized form, like "5 cats" or "1 dog".
 * Call that function for a few different scores and log the result to make sure it works.
 * Bonus: Make it handle a few collective nouns like "sheep" and "geese".
 * 
 * example: pluralize('cat', 2) should return 2 cats
 */


function pluralize(noun, num) {
    return num <= 1 ? num + ' ' + noun : num + ' ' + noun + 's'
}


print(pluralize('cat', 2))
print(pluralize('cat', 1))
print(pluralize('dog', 2))
print(pluralize('dog', 1))


println()


/**
 * 06 easy
 * Write a for loop that will iterate from 0 to 20. For each iteration, 
 * it will check if the current number is even or odd, 
 * and report that to the screen (e.g. "2 is even").
 */


function isEven(num) {
    for (let i = 0; i <= num; i++) {
        if (i % 2 === 0) print(`${i} is Even`)
    }
}

isEven(20)


println()


/**
 * 07 medium
 * Write a for loop that will iterate from 0 to 10. 
 * For each iteration of the for loop, 
 * it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
 * Bonus: Use a nested for loop to show the tables for every multiplier 
 * from 1 to 10 (100 results total)
 */

function multiplyBy9(num) {
    let counter = 0
    for (let i = 0; i < num; i++) {

        for (let j = 1; j <= num; j++) {
            print(`${j} -  ${j} * 9 =   ${j * 9}`)
                // print(``)
            counter++

        }
        printDashes()
    }
    return counter;
}

print(multiplyBy9(10))

println()

/*
 * 

 * Write a function called guessLetter that will:
 * Take one argument, the guessed letter.
 * Iterate through the word letters and see if the guessed letter is in there.
 * If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
 * When it's done iterating, it should log the current guessed letters ('F__')
 * and congratulate the user if they found a new letter.
 * It should also figure out if there are any more letters that need to be guessed,
 * and if not, it should congratulate the user for winning the game.
 * Pretend you don't know the word, and call guessLetter multiple times 
 * with various letters to check that your program works.
 * Bonus: Make it more like Wheel of Fortune:
 * Start with a reward amount of $0
 * Every time a letter is guessed, generate a random amount and 
 * reward the user if they found a letter (multiplying the reward if multiple letters found), 
 * otherwise subtract from their reward.
 * When they guess the word, log their final reward amount.
 * Bonus: Make it like Hangman:
 * Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once.
 * If they guess a letter twice, do nothing.
 * Keep track of the state of the hangman as a number (starting at 0), 
 * and subtract or add to that number every time they make a wrong guess.
 * Once the number reaches 6 (a reasonable number of body parts for a hangman), 
 * inform the user that they lost and show a hangman on the log
 */


/**
 * 08 medium to hard
 * Create a simple word guessing game where the user gets infinite tries to guess the word 
 * (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
 * Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), 
 * and one to hold the current guessed letters (e.g. it would start with '_', '_', '_'
 * and end with 'F', 'O', 'X').
 * */

let myWord = ['F', 'O', 'X'];
let hisWord = ['_', '_', '_']

function hangMan(string) {
    let keepAsking = true;
    do {
        const prompt = require('prompt-sync')({ sigint: true });
        const input = prompt("What is your name? ");
        print(`Oh, so your name is ${input}`);
        keepAsking = false
    } while (keepAsking)
}

// hangMan('somthing')

// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("What is your name ? ", function saveInput(name) {
//     console.log(`His name is ${name}`);
//     rl.close();
// });

// rl.on("close", function saveInput() {
//     console.log("\nBYE BYE !!!");
//     process.exit(0);
// });

/**
 * 09 easy
 * Write a function that accepts two arguments, 
 * a string and a letter and the function will count the number of occurrences 
 * of the specified letter within the string
 */

println()

function occurrences(string, aLetter) {
    let lowered = string.toLowerCase();
    let counter = 0
        // for (let i = 0; i < lowered.length; i++) {
        //     lowered[i].match(aLetter) ? counter++ : ''
        // }
    for (const letter of lowered) {
        if (letter.match(aLetter)) counter++
    }
    return counter;
}


print(occurrences('Samsung', 's'))

println()

/**
 * 10 easy to medium
 * Write a JavaScript function to extract unique characters from a string.
 * Example string : "thequickbrownfoxjumpsoverthelazydog"
 * Expected Output : "thequickbrownfxjmpsvlazydg"
 */

function uniqueChar(string) {
    let output = '';
    for (let i = 0; i < string.length; i++) {
        if (!output.includes(string[i])) output += string[i]
    }
    return output
}

print(uniqueChar('thequickbrownfoxjumpsoverthelazydog'))


Math.pow(3, 5)

3 ** 5

for (let i = 1; i < 5; i++) {
    console.log(Math.pow(3, i));
    console.log(3 ** i)
    printDashes()
}