console.log('---------Arrays: Introduction----------')

let myArray = ['Kareem', 'Vector', 'Esra', 'Simona', 'Paul'];
console.log(myArray)
let thirdElement = myArray[2];
myArray.splice(3, 0, 'fourth element')
console.log(myArray)

console.log('----------Programming Basics: Arrays and Array Methods-----------')

/**
 * Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"].  
 */

let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
console.log(euroCities)

// 1.2. Declare another variable and assign the second item of the array as a value.

let seconItem = euroCities[1];

// 2. Change the first item in the array to "Berlin".

euroCities.splice(0, 1, 'Berlin')
console.log(euroCities)

// 3. Print the length of the array "euroCities".

console.log(euroCities.length)

// 4. Remove the last item of the array "euroCities".

euroCities.pop()
console.log(euroCities)

// 5. Use an array method to add "Budapest" to the euroCities array.

euroCities.push('Budapest');
console.log(euroCities)

// 6. Bonus: Remove the second and third items from the euroCities array.

euroCities.splice(1, 2);
console.log(euroCities)

// 7. Create another variable named asianCities and assign an array of at least 5 cities to the variable.

let asianCities = ['Damascus', 'Riyadh', 'HongKong', 'Seol', 'Amman'];
console.log(asianCities)

// 8. Bonus: Use an array method to select items 2-4 from the array of asianCities and store this in another variable.

let item2And4 = asianCities.slice(1, 3);

console.log(item2And4);
console.log(asianCities)
console.log('---------9---------')


// 9. Bonus: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).

let worldCities = euroCities.concat(asianCities);

console.log(worldCities)

// 10. Reverse the order of worldCities.
console.log('---------10---------')

worldCities.reverse()
console.log(worldCities);

// 11. Bonus: Replace the 3rd item in the array of worldCities with "Toronto".
console.log('---------11---------')

worldCities.splice(2, 1, 'Totonto');

console.log(worldCities)


//12. Bonus: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.

console.log('---------12---------')

worldCities.splice(1, 0, 'Washington');
console.log(worldCities)

// 13. Bonus Write a program to join all elements of the result (worldCities) into a string. 
// Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"]; Expected Outputs: "Berlin , London, Bangkok, Phnom Penh" "Berlin+London+Bangkok+Phnom Penh"
console.log('---------13---------')

function joinAllArray(array) {
    return '"' + array.join(' ') + '"' + " " + '"' + array.join('+') + '"';
}

console.log(joinAllArray(worldCities))


/**
 * Bonus
 * Write a program to reverse the string: "Hello World".
 */

console.log('---------Bonus---------')

function reverseString(string) {
    return string.split('').reverse().join('');
}

console.log(reverseString("Hello World"))