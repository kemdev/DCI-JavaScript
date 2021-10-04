/**Let's play mini FizzBuzz! For any given number, if the number is:
 * divisible by 3, print "Fizz".
 * divisible by "5", print "Buzz".
 * divisible by both 3 and 5, print "FizzBuzz".
 */


let givenNumber = 31;

if (givenNumber % 3 === 0 && givenNumber % 5 === 0) console.log('FizzBuzz')
else if (givenNumber % 3 === 0) console.log('Fizz')
else if (givenNumber % 5 === 0) console.log('Buzz')
else console.log(givenNumber)