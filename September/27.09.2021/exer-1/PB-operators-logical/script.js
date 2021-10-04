// Declare two variables: isDogBetter with the value of true, and isCatBetter with the value of false.

let isDogBetter = true;
let isCatBetter = false;

// Check the result of:

// a) isDogBetter AND isCatBetter.

console.log(isDogBetter && isCatBetter, "Because the AND operator needs to have all expressions to be TRUE") // false

// b) isDogBetter OR isCatBetter.
console.log(isDogBetter || isCatBetter, "Because the OR operator needs to have AT LEAST one  expressions to be TRUE") // true


// c) NOT (isDogBetter AND isCatBetter).

console.log(!(isDogBetter && isCatBetter, "Because the NOT opereator will return the OPOSSITE result.")) // true

// Declare three more variables atoms, sandGrains, starsInSky. Give these variables number values.

let atoms = 5;
let sandGrains = 15;
let starsInSky = 30;

// Check the result of whether:

// a) atoms is greater than starsInSky AND atoms is greater than sandGrains.

console.log(atoms > starsInSky && atoms > sandGrains);
// b) atoms is NOT equal to sandGrains.
console.log(atoms !== sandGrains)

// c) starsInSky is less than sandGrains OR starsInSky is greater than atoms.
console.log(starsInSky < sandGrains || starsInSky > atoms)

// d) atoms is equal to starsInSky OR atoms is NOT equal to sandGrains.
console.log(atoms === starsInSky || atoms !== sandGrains)


// e) atoms is greater than or equal to 10 AND sandGrains is less than or equal to 10

console.log(atoms >= 10 && sandGrains <= 10)

// f) atoms multiplied by starsInSky is less than 100 OR whether atoms multiplied by sandGrains is greater than 100
console.log((atoms * starsInSky < 100) || (atoms * sandGrains > 100))