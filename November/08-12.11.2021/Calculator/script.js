function print(...args) {
    console.log(...args)
}

let exerNum = 1

function println(isTrue = false, extra = exerNum) {
    isTrue ? extra = isTrue : exerNum++
        print(`---------------${extra}---------------`)
}

// A library which contains useful calculation functions based on common formulas (aspect ratio, percentage calculation, etc…)
// Create a Calculator Class with
// Properties

// calculate.pi // Returns PI (3.141592653589793)

// calculate.e // Returns Eulner's number (2.718281828459045)

// Methods
// calculate.ratio(x,y,width)  //return height is --- on ratio x:y

// calculate.percentage(x,y) // return percentage of x in y.

// calculate.add(x, y) // Returns the sum of x added to y.

// calculate.subtract(x, y) // Returns the differente of y subtracted to x.

// calculate.multiply(x, y) // Returns the product of x multiplied by y.

// calculate.divide(x, y) // Returns the quotient of x divided by y. WARNING: If the divisor is set to 0, an error will be thrown.

// calculate.modulation(x, y) // Returns the remainder of x divided by y. WARNING: If the divisor is set to 0, an error will be thrown.

// calculate.elevate(x, y) // Returns the power of x elevated to y.

// calculate.sqrt(x) // Returns the square root of x.

class Calculator {
    constructor() {
            //properties
        }
        //getter
    ratio(x, y, width) {
        let height = width * y / x
        return height
    }
    percentage(x, y) {
        let percentage = x * 100 / y
        return percentage

    }
    add(x, y) {
        return x + y

    }

    subtract(x, y) {
        return x - y
    }


    multiply(x, y) {
        return x * y
    }

    divide(x, y) {
        if (y == 0) {
            throw new Error("division by zero")
        }
        return x / y
    }


    modulation(x, y) {
        if (y == 0) {
            throw new Error("division by zero")
        }
        return x % y
    }

    elevate(x, y) {
        return Math.pow(x, y)
    }

    sqrt(x) {
            return Math.sqrt(x)
        }
        //methods
}