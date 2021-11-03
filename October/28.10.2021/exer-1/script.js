function print(...args) {
    console.log(...args)
}

let exerNum = 1

function println(isTrue = false, extra = exerNum) {
    isTrue ? extra = isTrue : exerNum++
        print(`---------------${extra}---------------`)
}

println()




// JS Classes
// Create the instance properties fullname and email in the Employee class. 
// Given a person's first and last names:

// Form the fullname by simply joining the first and last name together, separated by a space. 
// Form the email by joining the first and last name together with a . in between, 
// and follow it with @company.com at the end. Make sure the entire email is in lowercase. Examples
class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
            // this.printNames()

    }
    firstname() {
        print(this.firstName)
    }
    fullname() {
        let fullName = this.firstName + ' ' + this.lastName
        console.log(fullName)
    }
    email() {
        let fullEmail = this.firstName + '.' + this.lastName + '@company.com'
        console.log(fullEmail.toLowerCase())
    }
}

emp1 = new Employee("John", "Smith")
emp1.fullname() // ➞ "John Smith"

emp2 = new Employee("Mary", "Sue")
emp2.email() // ➞ "mary.sue@company.com"

emp3 = new Employee("Antony", "Walker")
emp3.firstname() //➞ "Antony"

// Note: -The properties firstname and lastname are already made
// for you.