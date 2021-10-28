function print(...args) {
    console.log(...args)
}

function dashes(extra = 'Extra') {
    print(`-------------${extra}-------------`)
}

let exerNUm = 1

function println() {
    print(`-------------${exerNUm}-------------`)
    exerNUm++
}




// Create a function which will print greeting message

function greetMessage(name) {
    return `Good Morning ${name}`
}
println()
dashes(1.1)
print(greetMessage("John"))

dashes(2.1)
    // Create a function which will receives array of different users and greet each user.
function greetUsers(array, func) {
    for (let name of array) {
        print(func(name))
    }
}

let arrayNames = ["John", "Peter", "Mark"]
greetUsers(arrayNames, greetMessage)


// Write a function which will return sqaure of given number

function sqaureNum(num) {
    return num * num
}

println()

print(sqaureNum(6));

// Write a function which will return sqaure of every number in array

function sqaure(array, func) {
    let output = []
    for (let num of array) {
        output.push(func(num))
    }

    return output
}

let arrayNum = [1, 2, 3, 4, 5, 6]
print(sqaure(arrayNum, sqaureNum))