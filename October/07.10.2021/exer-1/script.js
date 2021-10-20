let exersiceNum = 1;

function print(...arguments) {
    console.log(...arguments)
}


function println() {
    print(`-------------${exersiceNum}-------------`)
    exersiceNum++
}

function printDashes() {
    print(`-------`)

}

println()
    // Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."


function tellFortune(numOfChildren, wife, location, jobTitle) {
    return (`You will be a ${jobTitle} in ${location}, and married to ${wife} with ${numOfChildren} kids.`)
}

print(tellFortune(4, 'Dana', 'Frankfurt', 'Full stack developer'))
print(tellFortune(2, 'Sara', 'Stuttgart', 'Web Designer'))
print(tellFortune(1, 'Dema', 'Berlin', 'Software Engineer'))



println()

// dogAge(4) // ➞ "Your doggo is 28 years old in dog years!"


// function dogAge(year) {
//     return `Your doggo is ${year * 7} years old in dog years`
// }
// print(dogAge(4)) // ➞ "Your doggo is 28 years old in dog years!"


// The Puppy Age Calculator
// You know how old your dog is in human years, but what about dog years? Calculate it!

// Write a function named calculateDogAge that:
// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.

function calculateDogAge(puppyAge, conversionRate = 7) {
    return `Your doggo is ${puppyAge * conversionRate} years old in dog years`
}

print(calculateDogAge(4))
print(calculateDogAge(7))
print(calculateDogAge(2))


println()

// The Lifetime Supply Calculator {ALREADY done on 06.10.21 exercises!}

print("!!!This exercise already done previously!!!")

println()


// ==The Geometrizer==

// Create 2 functions that calculate properties of a circle, using the definitions here.
function calcCircumfrence(radius) {
    // diameter = 2 x radius of circle
    // let diameter = 2 * radius;
    // Circumference is the perimeter of a circle. The formula for circumference is C=2πr
    let circumference = (2 * Math.PI) * radius
    return `The circumference is ${circumference}`
}

print(calcCircumfrence(4))

printDashes()

// Create a function called calcArea:
// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

function calcArea(radius) {
    // The formula for area of a circle is πr**2.
    let area = Math.PI * (radius ** 2)
    return `The area is ${area}`
}

print(calcArea(4))

println()


// The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

function celsiusToFahrenheit(celsius) {
    let result = ((celsius / 5) * 9) + 32
    return `${celsius}°C is ${result}°F`
}

// Store a celsius temperature into a variable.
let celsius = 4
print(celsiusToFahrenheit(celsius))

printDashes()


// Create a function called fahrenheitToCelsius:

function fahrenheitToCelsius(fahrenheit) {
    // °F to °C	Deduct 32, then multiply by 5, then divide by 9
    let result = ((fahrenheit - 32) * 5) / 9
    return Math.round(result)
}

// Now store a fahrenheit temperature into a variable.
let fahrenheit = 39.2;
print(fahrenheitToCelsius(fahrenheit))