function print(...args) {
    console.log(...args)
}

let exerNum = 1

function println(isTrue = false, extra = exerNum) {
    isTrue ? extra = isTrue : exerNum++
        print(`---------------${extra}---------------`)
}

// 1. Employee Class
// Create an Employee class which accepts:

// id of the employee as a number
// firstName of the employee as a string
// lastName of the employee as as string
// taxId as a number
// salary as a number
// The Employee class should have a generatePaySlip method which returns:




class Employee {
    constructor(id = 0, firstName = '', lastName = '', taxId = 0, salary = 0) {
        this.id = id;
        this.firstName = firstName
        this.lastName = lastName
        this.taxId = taxId;
        this.salary = salary;

    }

    generatePaySlip() {
        return `Employee ID: ${this.id}\nName: ${this.firstName} ${this.lastName}\nTax ID: ${this.taxId}\nPay: ${this.monthlySalary()}`
    }
    monthlySalary() {
        return '$' + this.salary
    }
}

let employee1 = new Employee(15, 'Kareem', 'Aramanzi', 450, 450)

println()
print(employee1.generatePaySlip())

// 2. Manager Class
// Create a Manager class which extends the Employee class

// The Manager class will need the addition of a managedEmployees array

// The Manager class will need two methods:

// addManagedEmployee to add a managed employe to the managedEmployees array
// removeManagedEmployee to remove a managed employee from the managedEmployees array

class Manager extends Employee {
    constructor(id, firstName, lastName, taxId, salary, managedEmployees = []) {
        super(id, firstName, lastName, taxId, salary)
        this.managedEmployees = managedEmployees;
    }

    addManagedEmployee(item) {
        this.managedEmployees.push(item)
    }
    removeManagedEmployee(item) {
        let index = this.managedEmployees.findIndex(emp => item)
        if (this.managedEmployees.length === 0) return `The ${this.managedEmployees} is already empty`
        else {
            return this.managedEmployees.filter(emp => emp === item)
        }
    }
    printAll() {
        let employeeAfteradded = this.managedEmployees
        print(...employeeAfteradded)
    }
}

println()

let manager1 = new Manager(01, 'Kareem', 'Armnazi', 850, 45200)

manager1.addManagedEmployee('Kareem Alarmanazi')
manager1.printAll()