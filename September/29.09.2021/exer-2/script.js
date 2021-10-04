/**
 * Mark and John are trying to compare their BMI (Body Mass Index), 
 * which is calculated using the formula: BMI = mass / (height * height). 
 * (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65).
 */

// 1. Store Mark's and John's mass and height in variables.

let markMass = 72.5;
let markHeight = 1.75;

let johnMass = 80.4;
let johnHeight = 1.65;
// 2. Calculate both their BMIs and store their BMIs in variables.

let BMIofMark = markMass / (markHeight * markHeight);
let BMIofJohn = johnMass / (johnHeight * johnHeight)

// 3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
if (BMIofMark > BMIofJohn) console.log(`Mark mass is bigger - Mark BMI is: ${BMIofMark} - because it is ${BMIofMark > BMIofJohn}  `)
if (BMIofMark < BMIofJohn) console.log(`John mass is bigger - Mark BMI is: ${BMIofJohn} - because it is ${BMIofJohn > BMIofMark}  `)