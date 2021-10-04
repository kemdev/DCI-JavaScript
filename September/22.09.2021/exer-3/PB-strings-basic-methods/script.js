// 1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.

let iCan =  "I can walk in the park all day!";


console.log(iCan.substring(iCan.search('park'), iCan.search('all')))

// 2. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.

let helloWorld = 'Hello World';

let upperHelloWorld = helloWorld.toUpperCase();

console.log(upperHelloWorld);


// 3. Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console.

let earthling = "Hello Earthling";

let lowerEarthling = earthling.toLowerCase();

console.log(lowerEarthling);

// 4. Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.

let javaScript = "JavaScript";

console.log(javaScript.substring([javaScript.lastIndexOf('a')], [javaScript.indexOf('c') + 1]));


// 5. Check if the sentence "nice shoes" contains the letter l or n.


let niceShoes = "nice shoes";

niceShoes.includes('n') ? console.log('It contain "n"'): niceShoes.includes('l') ? console.log("It contain l") : console.log('It is not contain l or n') ;


// 6. Create a new string from a given string with the first character of the given string added at the front and back, i.e., expected output: Bananas => BBananasB

let normalString =  'Bananas';

let newFromNormalString = normalString[0] + normalString + normalString[0];

console.log(newFromNormalString)

// 7. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more, i.e., expected output: Scritch => tchScritchtch


let normalStringExer7 = 'Scritch';
let normalSliced = normalStringExer7.slice(-3);
let newFromNormalStringExer7  = normalSliced + normalStringExer7 +  normalSliced;

console.log(newFromNormalStringExer7);


// 8. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2, i.e., expected output: BoogieWoogie => eoogieWoogiB



let originalString = 'BoogieWoogie';

let replaceFirtWithLast =  originalString.slice(-1) + originalString.slice(1, -1) + originalString[0];

console.log(replaceFirtWithLast);


// 9. Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc. Print a sentence to the console using the variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher".


let firstName = "Kareem";

let city = "Heidelberg";

let occupation = "web-developer";

console.log(`My name is ${firstName}. now I'm visiting ${city} and I'm ${occupation} `)


// 10. Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.

let variableSomething = "the quick brown fox";

console.log(variableSomething.slice(0, 1).toUpperCase() + variableSomething.slice(1)  )