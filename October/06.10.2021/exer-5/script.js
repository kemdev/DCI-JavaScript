// 1
// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
function vowel_count(str1) {
    //write your code here
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let counter = 0;
    for (const char of vowels) {
        if (vowels.includes(char)) counter++
    }
    return counter
}
console.log("The first => ", vowel_count("The quick brown fox"));

//2
// Write a JavaScript function that generates a string id (specified length) of random characters.
function makeid(l) {
    //write your code here
    let id = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (let i = 0; i < l; i++) {
        id += characters.charAt(Math.floor(Math.random() *
            charactersLength))
    }

    return id;
}
console.log(makeid(8));

// 3
// Write a JavaScript program to pass a 'JavaScript function' as parameter.
function abc(string, test) {
    //write your code here
    return string(test)
}

console.log(abc(makeid, 8))