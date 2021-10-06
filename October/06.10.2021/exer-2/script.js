let exersiceNum = 1;

function print(...arguments) {
    console.log(...arguments)
}


function println() {
    print(`-------------${exersiceNum}-------------`)
    exersiceNum++
}

function printDashes() {
    print(`--------------------------`)

}


// The following function returns true if the parameter age is greater than 18.

// Otherwise returns false:
println()

function checkAge(age) {
    return age > 18
}

print(checkAge(20))
print(checkAge(10))

println()
    // Write a function min(a,b) which returns the least of two numbers a and b.
function min(a, b) {
    return Math.min(a, b)
}

print(min(2, 5)) // == 2
print(min(3, -1)) // == -1
print(min(1, 1)) //== 1


println()

// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
function pow(x, n) {
    return Math.pow(x, n)
}

print(pow(3, 2)) // = 3 * 3 = 9
print(pow(3, 3)) // = 3 * 3 * 3 = 27
print(pow(1, 100)) // = 1 * 1 * ...* 1 = 1