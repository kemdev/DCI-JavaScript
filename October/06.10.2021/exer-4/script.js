//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// 1
function uppercase(str) {
    //write your code here 
    let array = str.split(' ');
    let result = ''
    array.forEach(element => {
        result += element[0].toUpperCase() + element.slice(1, ) + ' '
    });
    return result
}

console.log(uppercase("the quick brown fox"));

// 2
// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
function find_longest_word(str) {
    //write your code here 
    let bigger = '';
    let array = str.split(' ');
    array.forEach(element => {
        if (element.length > bigger.length) bigger = element
    });

    return bigger;
}
console.log(find_longest_word("Web Development Tutorial"));

// 3
// Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
function Longest_Country_Name(country_name) {
    //write your code here 
    let bigger = ''
    country_name.forEach(element => {
        if (element.length > bigger.length) bigger = element
    });
    return bigger
}

console.log(
    Longest_Country_Name(["Australia", "Germany", "United States of America"])
);