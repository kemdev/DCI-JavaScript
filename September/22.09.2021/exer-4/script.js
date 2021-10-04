/**
 * Exercise 01
 * Name: String length
 * Write a function named "length" that accepts a string and returns the number of characters in it
 * example: length('bible') should return 5
 */

function length(string){
    if (typeof string === 'string'){
        return string.length;
    } else {
        console.log('Please make sure you entered a string!')
    }
}

console.log('The length Function',length('Kareem'));


/**
 * Exercise 02
 * Write a function toCase that takes a string and returns that string in lowercase and uppercase 
 * with - as delimiter.
 * Example: toCase('Mthatha') should return 'mthatha-MTHATHA'.
 */


function toCase(string){
    if (typeof string === 'string'){
        return string.toLowerCase() + '-' + string.toUpperCase();
    }
    else{

           console.log("Please make sure you entered a string!")
    }
}

console.log('The toCase  Function:',toCase('kareem'))

/**
 * Exercise 03
 * Write a function shortcut that takes two strings and returns the initial letters of theses strings.
 * Example: shortcut('Amnesty', 'International') should return 'AI'
 */


function shortcut(str1, str2){
    if (typeof str1 === 'string' && typeof str2 === 'string'){
        return str1[0] + str2[0];
    }else{
        console.log("Please make sure you entered a string!")
    }
    
}
console.log('The shortcut Function:', shortcut('Amnesty', 'International'))



/**
 * Exercise 04
 * Write a function firstChar, which returns the first character that is not a space 
 * when a string is passed.
 * Example: firstChar(' Rosa Parks ') should return 'R'.
 */


function firstChar (string){
    if (typeof string === 'string'){
        return string.trim()[0];
    }else{
        console.log("Please make sure you entered a string!")
    }
    
}

console.log('The firstChar Function:',firstChar(' Rosa Parks '))


/**
 * Exercise 05
 * Write a function indexOfIgnoreCase taking two strings and determining the 
 * first occurrence of the second string in the first string. 
 * The function should be case insensitive.
 * Example: indexOfIgnoreCase('bit','it') and indexOfIgnoreCase('bit','IT') should return 1
 */

function indexOfIgnoreCase(str1, str2){
    if (typeof str1 === 'string' && typeof str2 === 'string'){
        str2 = str2.toLowerCase();
        
        if(str1.includes(str2)){

            return 1    
        }
        else{
            return 'nope'
        }
    }else{
        console.log("Please make sure you entered a string!")
    }
    
}

console.log('The indexOfIgnoreCase Function:' ,indexOfIgnoreCase('bit','IT'))

/**
 * Exercise 06
 * Write a function firstWord, taking a string and returning the first word in that string. 
 * The first word are all characters up to the first space.
 * Example: firstWord('see and stop') should return 'see'
 */

function firstWord(string){
    let str = string.indexOf(" ");
    if (typeof string === 'string'){
        return string.slice(0, str);
    }else{
        console.log("Please make sure you entered a string!")
    }
}


console.log('The firstWord Function:' ,firstWord('see and stop'))


/**
 * Exercise 07
 * Write a function normalize, that replaces '-' with '/' in a date string.
 * Example: normalize('20-05-2017') should return '20/05/2017'
 */

function normalize(string){
    if (typeof string === 'string'){
        return string.replace(/-/g, "/");;
    }else{
        console.log("Please make sure you entered a string!")
    }
}

console.log('The normalize Function:', normalize('20-05-2017'))

/**
 * Exercise 08
 * Write a JavaScript function to split a string and convert it into an array of words
 */


function splitOfArrayWords(string){
    if (typeof string === 'string'){
        return string.split(' ')
    }else{  
        console.log("Please make sure you entered a string!")
    }
}


console.log('The splitOfArrayWords Function:', splitOfArrayWords("Hello World!"));



/**
 * Exercise 09
 * What would following code return?
 * console.log(typeof typeof 1);
 * Explain your answer
 */

console.log(typeof typeof karem);

// It returns a string no matter what the value after the second typeof is!. 

// Explain your answer: 

// I didn't really understand the answer when I've searched, but I think the idea about it is that since the typeof is returning a type string then when there is another on of typeof it returning the type of the second typeof method.




/**
 * Exercise 10
 * Write a function named getExtension that accepts a filename string 
 * and returns the extension of that filename
 */


function getExtension(fileName){
        if (typeof fileName === 'string'){
            let dotIndex = fileName.lastIndexOf('.');
            return fileName.slice(dotIndex + 1 )
        }else{  
            console.log("Please make sure you entered a string!")
        }
}



console.log('The getExtension Function:', getExtension("cute girl with blue-eyes.pdf"));

