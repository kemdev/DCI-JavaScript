function print(...args) {
    console.log(...args)
}

let exerNum = 1

function println(isTrue = false, extra = exerNum) {
    isTrue ? extra = isTrue : exerNum++
        print(`---------------${extra}---------------`)
}




/* 1. Write a JavaScript function to truncate a string to a certain number of words. */

// write your code here 


let truncate = (str, num) => {
    let array = str.split(' ')
    return array.slice(0, num).join(' ')
}

println()
print(truncate("The quick brown fox jumps over the lazy dog", 4)); // "The quick brown fox"


/* 2. Write a JavaScript function to alphabetize a given string. */
// Note : Alphabetize string : An individual string can be alphabetized. This rearranges the letters so they are sorted A to Z.

// write your code here 

let alphabetize_string = (str) => {
    let array = str.split('')
    return array.sort().join('')
}

println()
print(alphabetize_string("United States"));
//"SUadeeinsttt"

/* 3. Write a JavaScript function to convert ASCII to Hexadecimal format.
 */

let ascii_to_hexa = (str) => {
    let result = ''
    for (let i = 0; i < str.length; i++) {
        result += Number(str.charCodeAt(i)).toString(16)
    }
    return result
}

// write your code here 

println()
print(ascii_to_hexa("12")); //3132
print(ascii_to_hexa("100")); //313030
print(ascii_to_hexa("z")); //313030

/* 4. Write a JavaScript function to get humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th.r
 */

// write your code here 
function humanize(num) {
    let toString = num.toString()
    let lastIndex = toString[toString.length - 1]
    Number(lastIndex)
    return lastIndex == 0 ? num + 'th' : lastIndex % 2 !== 0 ? lastIndex + 'st' : lastIndex % 2 === 0 ? num + 'nd' : ''
}
println()
print(humanize(1)); //"1st"
print(humanize(20)); //"20th"
print(humanize(302)); //"302nd"


/* 5. Write a JavaScript function to get the successor of a string. */

// write your code here 

const successor = (string) => {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    const stringSplit = string.split("");
    for (let i = stringSplit.length - 1; i >= 0; i--) {
        const element = stringSplit[i];
        if (element.match(/[a-z]/)) {
            const indexAlpha = alphabet.indexOf(element) + 1;
            if (indexAlpha > 25) {
                stringSplit[i] = "a";
                if (i === 0) stringSplit.unshift("a");
            } else {
                stringSplit[i] = alphabet[indexAlpha];
                break;
            }
        }
        if (element.match(/[A-Z]/)) {
            const indexAlpha = alphabet.indexOf(element.toLowerCase()) + 1;
            if (indexAlpha > 25) {
                stringSplit[i] = "A";
                if (i === 0) stringSplit.unshift("A");
            } else {
                stringSplit[i] = alphabet[indexAlpha].toUpperCase();
                break;
            }
        }
        if (element.match(/[0-9]/)) {
            if (element == 9) {
                stringSplit[i] = 0;
                if (i === 0) stringSplit.unshift(1);
            } else {
                stringSplit[i] = Number(element) + 1;
                break;
            }
        }
    }
    return stringSplit.join("");
};
println();
console.log(successor("abcd")); // "abce"
console.log(successor("THX1138")); // "THX1139"
console.log(successor("< >")); // "< >"
console.log(successor("1999zzz")); // "2000aaa"
console.log(successor("ZZZ9999")); // "AAAA0000"


// print(successor("abcd")); // "abce"
// print(successor("THX1138")); // "THX1139"
// print(successor("< >")); // "< >"
print(successor("1999zzz")); // "2000aaa"
// print(successor("ZZZ9999")); // "AAAA0000"

// 6. Write a JavaScript function to sort the following array of objects by title value. 

// write your code here 

let library = [{
        author: "Bill Gates",
        title: "The Road Ahead",
        libraryID: 1254
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        libraryID: 4264
    },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        libraryID: 3245,
    },
];

function sortByTitle(arr) {
    return arr.sort((a, b) => { return a.title > b.title ? 1 : -1 })
}

//sorted
/*/* {
  author: "Suzanne Collins",
  libraryID: 3245,
  title:"Mockingjay:The Final Book of The Hunger Games"
}, [object Object] {
  author: "Bill Gates",
  libraryID: 1254,
  title: "The Road Ahead"
}, [object Object] {
  author: "Steve Jobs",
  libraryID: 4264,
  title: "Walter Isaacson"
}]*/
println()
print(sortByTitle(library));

/* 7. Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds. */

// write your code here 
function num_string_range(start, end, jump) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let indexStart = alphabet.indexOf(start)
    let fillArray = []
    let indexEnd = alphabet.indexOf(end)
    if (typeof start === 'string' && typeof end === 'string') {
        for (indexStart; indexStart <= indexEnd; indexStart += jump) {
            // print(alphabet[indexStart])
            fillArray.push(alphabet[indexStart])

        }
    } else if (typeof start === 'number' && typeof end === "number") {
        for (start; start <= end; start += jump) {
            fillArray.push(start)
        }
    }

    return fillArray
}

println()
print(num_string_range("a", "z", 2));
print(num_string_range(1, 10, 2));
print(num_string_range(20, 5, 5));
// ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]


/*
 8. Write a JavaScript program to create a Clock.
   `Note`: The output will come every second. 
   */

// write your code here 
// 8.Create a Interval that runs the provided function once every 1s
const interval = setInterval(() => {
    const date = new Date();
    //For a special formatting
    /* console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`); */
    //Using the formatting of the System you are on
    // console.log(date.toLocaleTimeString());
}, 1000);
//Clear the Interval (stop it) after 5s
setTimeout(() => {
    clearInterval(interval);
}, 5000)


println()
    // let clock = new Clock({ startTime: 0 });
    // clock.start();
    // "14:37:42";
    // "14:37:43";
    // "14:37:44";
    // "14:37:45";
    // "14:37:46";
    // "14:37:47";

/* 9. Write a JavaScript function to print all the methods in an JavaScript object.
 */

// write your code here 
function all_properties(obj) {
    return Object.getOwnPropertyNames(obj).filter(function(property) {
        return typeof obj[property] == "function";
    });
}

println()
print(all_properties(Array)); // ["isArray", "from", "of"]

print(all_properties(Math));
// ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc"]


/* 10. Write a JavaScript function to print all the properties in an JavaScript object. */


// write your code here 
function all_properties2(obj) {
    return Object.getOwnPropertyNames(obj).filter(function(property) {
        return typeof obj[property];
    })
}

println()
print(all_properties2(Math));
// ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"]
print(all_properties2(Array));
// ["length", "name", "prototype", "isArray", "from", "of"]