function print(...args) {
    console.log(...args)
}

let exerNum = 1;

function println() {
    print(`------------${exerNum}------------`)
    exerNum++
}

function dashes(text = 'Extra') {
    print(`------------${text}------------`)
}
// Programming Basics: Nested Loops (Using Arrays)
// Use NESTED LOOPS in each of your solutions

// Q1. Construct the following pattern.

// *
// * *  
// * * *  
// * * * *

function stars(num) {
    let output = ''
    for (let i = 0; i < num; i++) {
        for (let j = 0; j <= i; j++) {
            output += '* '
        }
        i < num - 1 ? output += '\n' : ''
    }
    return output
}

println()
print(stars(5))

// Q2. Given the following array:

// Create the following output:
// row 0 
//  1 
//  2 
//  1
//  24
// row 1
//  8 
//  11 
//  9
//  4
// row 2
//  ...
// (and so on)

const ARR = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
];

let matrex = arr => {
    let output = ''
    for (let i = 0; i < arr.length; i++) {
        output += 'row ' + i + '\n'
        for (let j = 0; j < arr[i].length; j++) {
            output += arr[i][j]
            if (!(i === arr.length - 1 && j === arr[i].length - 1)) output += '\n'
        }

    }

    //     let lastIdx = arr.length - 1
    //     for (let array of arr) {
    //         output += 'row ' + arr.indexOf(array) + '\n'
    //         for (element of array) {
    //             output += element + '\n'
    //                 // if(arr.indexOf(array) === lastIdx && array )

    //         }
    //     }
    return output
}

println()
print(matrex(ARR))



// Q3. Output the following:

// 1 1 1 2 2 2 3 3 3 4 4 4
// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
// BONUS CHALLENGE Write a solution for Q3 using nested loops which are all nested within a single outer loop.



println()

function counter(start, num) {
    let output = ''
    let outputWithZero = ''
    for (let start = 1; start < num; start++) {
        for (let j = 1; j < num; j++) {
            output += start + ' '
        }
        for (let h = 0; h <= num; h++) {
            outputWithZero += h + ' '
        }
    }
    return output + '\n' + outputWithZero
}
print(counter(1, 4))
dashes()

// function test(num) {
//     outputWithZero = ''

//     for (let i = 0; i < num - 1; i++) {

//         for (let h = 0; h <= num; h++) {
//             outputWithZero += h + ' '
//         }
//     }
//     return outputWithZero
// }

// print(test(4))