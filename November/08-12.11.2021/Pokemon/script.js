function print(...args) {
    console.log(...args)
}

let exerNum = 1

function println(isTrue = false, extra = exerNum) {
    isTrue ? extra = isTrue : exerNum++
        print(`---------------${extra}---------------`)
}


// Try to make a simplified version of pokemon!

// Create a new index.js file.