/* Instructions
 * Create the following object:
 * const student = { 
 * firstName: "John", 
 * lastName: "Smith", 
 * class: 12 }; 
 */

const student = {
    firstName: "John",
    lastName: "Smith",
    class: 12
};

// Create a method that prints the following:



let printout = {
    printObject() { console.log(`${student.firstName} ${student.lastName} is a student in class ${student.class}`) },
    // lengthOfSomething(person) { console.log(person.length) }
}

// Create a person object. Include the person's first and last name, age, job, city etc. Create a method to print data from the object e.g. "John Smith is a 41 year old engineer living in France".

let person = {
    firstName: 'Kareem',
    lastName: 'Armanazi',
    age: 31,
    job: 'Software engineer',
    city: "Stuttgart",
    printPersonDetails() {
        console.log(`${this.firstName} ${this.lastName} is a ${this.age} years old and working as ${this.job} living in ${this.city}`)
    },
    thisLength() {
        let sum = 0;
        for (const key in this) {
            sum++
        }
        return sum
    }
}


printout.printObject()
person.printPersonDetails()
console.log(person.thisLength())






// printout.lengthOfSomething(student.lastName)