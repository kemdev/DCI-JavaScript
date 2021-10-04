/**
 * Check whether 3 is equal to "3" using loose comparison.
 * Then, check whether they are equal while using strict comparison.
 * Questions: Comment your answers in the js file.
 */

console.log(3 === '3'); // false

// Is there a difference? Why/why not?
// Yes because the 3 is an integer wheareas '3' is a String;

// Which comparison operator should we generally use? Why?

// Not sure what you are talking about!.


// What would happen if we were to use =?

// It will try to assign the string '3' to the integer 3 we will get an error.

/* 2. Not */



/**
 * Store the value true to a variable. Using a ternary 
 * operator,print the false option by checking the value
 *  of the initial variable.
 */

let something = true;

console.log(something ? !something : something);




/**
 * Given the code below, what will print when when we 
 * console log name?
 * Comment your answer in the js file.
 */

let firstName, givenName;

firstName = 'Stacey';
let name = givenName || firstName || 'John';

console.log(name);

// Stacey