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

// Array Method .sort
// 1. Sort in decreasing order
let arr = [5, 2, 1, -10, 8];

// // ... your code to sort it in decreasing order

// console.log( arr ); // 8, 5, 2, 1, -10

println()
print(arr.sort((a, b) => b - a))



// 2. We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
// Create a function copySorted(arr) that returns such a copy.
let arr1 = ["HTML", "JavaScript", "CSS"];


let copySorted = arr => {
    let output = [...arr]
    return output.sort()

}
let sorted = copySorted(arr1);

println()
console.log(arr1); // HTML, JavaScript, CSS (no changes)
console.log(sorted); // CSS, HTML, JavaScript