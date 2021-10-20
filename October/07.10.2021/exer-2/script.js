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


// Credit Card Validation

// You're starting your own credit card business. 
// You need to come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
/** 
 * Here are the rules for a valid number:
 * Number must be 16 digits, all of them must be numbers
 * You must have at least two different digits represented (all of the digits cannot be the same)
 * The final digit must be even
 * The sum of all the digits must be greater than 16
 * 
 */

// Sum function
const creditNumberSum = (creditNumber) => {
    creditNumber = creditNumber.toString()
    let array = creditNumber.split('')
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += parseInt(array[i])
    };
    return result
};


// This function to check if all credit card number are same.
function isSameIsOnNumber(creditNumber) {
    creditNumber = creditNumber.toString()
    let array = creditNumber.split('')
    let num1 = []
    let num2 = []
    num1.push(array[0])
    for (let i = 1; i < array.length; i++) {
        if (!num1.includes(array[i])) num2.push(array[i]);
        else num1.push(array[i])
    }
    if (num2.length === 0) return false
    return true
}
printDashes()

print(isSameIsOnNumber((1111111111111111)))

printDashes()

function validateCreditCard(cardNum) {
    let intToString = cardNum.toString();
    let noDashes = ''
    if (intToString.includes('-')) {
        for (let i = 0; i < intToString.length; i++) {
            if (intToString[i] === '-') continue;
            else noDashes += intToString[i]
        }
    } else noDashes = intToString
        // The final digit must be even
    let lastIndex = noDashes.length - 1;
    let lastINdexInt = parseInt(noDashes[lastIndex])
    if (lastINdexInt % 2 != 0) return 'Last digit cannot be odd!';
    // You must have at least two different digits represented (all of the digits cannot be the same)
    if (!isSameIsOnNumber(noDashes)) return `You have entered only one type of number ${intToString}`
        // Number must be 16 digits, all of them must be numbers
    let convertToNumber = parseInt(noDashes);
    if (!convertToNumber || noDashes.length !== 16 || isNaN(convertToNumber)) return "Please check your Card Number.";
    // The sum of all the digits must be greater than 16
    if (creditNumberSum(convertToNumber) < 16) return `sum less than 16`;
    return `Your credit card is Valid`
}


print(validateCreditCard(1111111111111110))
print(validateCreditCard(4444444444444444))
print(validateCreditCard(666666666666666))
print(validateCreditCard('a92332119c011112'))

printDashes()
    //     /**** tests *****/
    // print(validateCreditCard('9999-7777-8888-0000')); //{ valid: true, number: '9999-7777-8888-0000' }
    // print(validateCreditCard('6666-6666-6666-1666')); //{ valid: true, number: '6666-6666-6666-1666' }
    // print(validateCreditCard('a923-3211-9c01-1112')); //{ valid: false,number: 'a923-3211-9c01-1112',error: '_invalid characters_' }
    // print(validateCreditCard('4444-4444-4444-4444')); //{ valid: false,number: '4444-4444-4444-4444',error: '_only one type of number_' }
    // print(validateCreditCard('1211-1111-1111-1112')); //{ valid: true, number: '1211-1111-1111-1112' }