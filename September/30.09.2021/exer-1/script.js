/**
 * Attempt this exercise using only simple "if" conditionals
 *  (and only what you have learnt this far into the course, so no loops, functions or arrays just yet!)
 */

// Print your results to the console

// Aleeza and Lis both play basketball in different teams. 
// In the latest 3 games, Aleeza's team scored 89, 120 and 103 points, while Lis's team scored 116, 94 and 123 points.

let aleezaScored1 = 89;
let aleezaScored2 = 120;
let aleezaScored3 = 103;

//-------------

let lisScored1 = 116;
let lisScored2 = 94;
let lisScored3 = 123;

// 1a) Calculate the average score for each team.

let aleezaAverage = (aleezaScored1 + aleezaScored2 + aleezaScored3) / 3;
let lisAverage = (lisScored1 + lisScored2 + lisScored3) / 3

console.log(`Aleeza's Team Average Score is: ${aleezaAverage}`)
console.log(`Lis's Team Average Score is: ${lisAverage}`)


// 1b) Decide which teams wins in average (highest average score), and print the winner to the console, including their average score in the output.
// 1c) Then change the scores to show different winners. 
// Don't forget to take into account there might be a draw (the same average score).

if (aleezaAverage > lisAverage) console.log(`Aleeza's team wins with: ${aleezaAverage} average score`)
else if (aleezaAverage < lisAverage) console.log(`Lis's team wins with: ${lisAverage} average score`)
else console.log(`Draw with acerage score of: ${lisAverage} for Lis's team - and - ${aleezaAverage} for Aleeza's team`)


// 1d) Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console.

let maryScored1 = 97
let maryScored2 = 134
let maryScored3 = 105


let maryAverage = (maryScored1 + maryScored2 + maryScored3) / 3
console.log('------Score With Mary------')
console.log(`Mary's Team Average Score is: ${maryAverage}`)


if (aleezaAverage > lisAverage && aleezaAverage > maryAverage) console.log(`Aleeza's team wins with: ${aleezaAverage} average score`)
else if (aleezaAverage < lisAverage && lisAverage > maryAverage) console.log(`Lis's team wins with: ${lisAverage} average score`)
else if (maryAverage > aleezaAverage && lisAverage < maryAverage) console.log(`Mary's team wins with: ${maryAverage} average score`)
else console.log(`Draw with acerage score of: ${lisAverage} for Lis's team - and - ${aleezaAverage} for Aleeza's team`)