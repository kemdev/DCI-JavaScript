// 1. Create a new variable and call it determiner

let determiner;


// 1.2. Give determiner a random value between -100 and 100 (change it to experiment)

let max = 100;
let min = -100;
determiner = Math.floor(Math.random() * (max - min + 1)) + min;

// 1.3. Create a 2nd variable called x

let x;

// 1.4. Depending on the value of determiner, assign a value to x.
// If determiner is less than 0, x's value should be "Less than 0"
// If determiner is greater or equal 0, x's value should "Greater or equal to 0".

determiner < 0 ? x = "Less than 0" : x = 'Greater or equal to 0'

console.log(x)


// 2. New Variables
// Create a new variable called updater

let updater;

updater = "Greater or equal to 0"

// 2.2 create another variable called message

let message;

// 2.3 assign a value of "Positive Integer" to message

message = 'Positive Integer';

// 2.4 print out message.
console.log(message)
console.log('-------------')
    // If determiner is less than 0, assign updater' the value "Less than 0".

determiner < 0 ? updater = 'Updater is Less than 0' : updater;

// 2.5 Print out the value of updater
console.log(updater)