// function print(...args) {
//     console.log(...args)
// }

// let exerNum = 1

// function println(isTrue = false, extra = exerNum) {
//     isTrue ? extra = isTrue : exerNum++
//         print(`---------------${extra}---------------`)
// }


// // 1. Person Class
// // Create a class called Person which accepts the name of a person as a string, and his/her age as a number.
// // The Person class should have a method called describe which returns a string with the following syntax: "name, age years old". 
// // So, for example, if John is 19 years old, then the function describe of his object will return "John, 19 years old".
// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }

//     describe() {
//         return this.name + ', ' + this.age + ' years old'
//     }
// }

// let john = new Person('John', 19)
// println()
// print(john.describe())


// println()


// // 2. Volume
// // Write a JavaScript program to get the volume of a cylinder with four decimal places using a class.

// class Cylinder {
//     constructor(radius, height) {
//         this.radius = radius
//         this.height = height
//     }

//     cylCal() {
//         let vol = Math.PI * Math.pow(this.radius, 2) * this.height
//         return parseFloat(vol.toFixed(4))
//     }

// }


// let test = new Cylinder(5, 10)
// print(test.cylCal())

// println()


// // 3. Tick Tock
// // Rewrite the following code to use the "class" syntax.


// class TickTock {
//     constructor({ template }) {
//         this.template = template
//     }

//     render() {
//         let date = new Date();

//         let hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;
//         let mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;



//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;
//         let output = this.template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);
//         console.log(output);
//     }

//     stop() {
//         clearInterval(this.timer);
//     }
//     start() {
//         this.render();
//         this.timer = setInterval(() => this.render(), 1000);
//     }
// }


// let clock = new TickTock({ template: 'h:m:s' });
// clock.start();
// clock.stop()

// // 4. TV Class
// // Create a TV class with properties like brand, channel and volume.
// // Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
// // Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// // Add a method to set the channel randomly. Let's say the TV has only 50 channels.
// // Add a method to reset TV so it goes back to channel 1 and volume 50.
// // It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".

// println()
// class TV {
//     constructor(brand, channel = 1, volume = 50) {
//         this.brand = brand;
//         this.channel = channel;
//         this.volume = volume;

//     }

//     // Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
//     volUp() {
//         this.volume > 100 ? 'Maximum Volume' : this.volume = this.volume + 1
//             // this.volume += 1
//     }
//     volDown() {
//         this.volume < 0 ? 'Minimum Volume' : this.volume > 100 ? this.volume = 100 : --this.volume
//     }

//     //Add a method to set the channel randomly. Let's say the TV has only 50 channels.
//     randChannel() {
//             function randomIntFromInterval(min, max) { // min and max included 
//                 return Math.floor(Math.random() * (max - min + 1) + min)
//             }
//             return this.channel = randomIntFromInterval(1, 50)
//         }
//         // Add a method to reset TV so it goes back to channel 1 and volume 50.
//     reset() {
//         this.volume = 50;
//         this.channel = 1
//     }
//     info() {
//         return `${this.brand} at channel ${this.channel}, volume ${this.volume}`
//     }

// }

// let myTv = new TV('LG', 1, 90)
// myTv.volUp()
// print('Volume up', myTv.volume)
// myTv.volDown()
// print('Volume Down', myTv.volume)
// println(4.2)
// print('Current channel', myTv.randChannel())
// println(4.3)
// myTv.reset()
// print('Channel reset to', myTv.channel, '| Vol reset to', myTv.volume)
// println(4.4)
// print(myTv.info())


const school = [{
        id: 1,
        name: "FbW1",
        students: [{
                id: 1,
                name: "Alex",
                email: "alex@yahoo.com",
                city: "Berlin",
            },
            {
                id: 2,
                name: "Max",
                email: "max@yahoo.com",
                city: "Hamburg",
            },
        ],
    },
    {
        id: 2,
        name: "FbW2",
        students: [{
                id: 3,
                name: "Jon",
                email: "jon@yahoo.com",
                city: "Berlin",
            },
            {
                id: 4,
                name: "Pilar",
                email: "pilar@yahoo.com",
                city: "Berlin",
            },
        ],
    },
    {
        id: 3,
        name: "FbW3",
        students: [],
    },
];
console.log('-----------------solution 1-------------------------')
    // App Functions
    // Functions arguments ==>  Passing one single  object as argument holds all the arguments.
    //! create class
    // createClass function takes argument(object) holds class name
    // Solution to Question 1
function createClass(object) {
    let maxId = 0
        // if school array is empty then set id to 1
    if (school.length === 0) {
        maxId = 1
    } else {
        maxId = school[school.length - 1].id + 1
    }
    object.id = maxId
    object.students = []
    console.log('id is', object.id)
    school.push(object)
}
createClass({
    name: 'Fb-6'
})
console.log('schools after adding a class:', school)
console.log('---------------------task 2--------------------------------')
    // Solution to Question 2
    // function takes argument(object) holds class ID and the student data.
    // task is to add a student to the students array
    // OF A SPECIFIC CLASS
function createStudent(student, classId) {
    for (let item of school) { // looping over school array
        // each item is a class
        // each item (class) has a property id.
        // check if the class being checked is the one
        // we need to add the student to
        if (item.id === classId) { // item is the class object
            //
            let maxStudentId = 0
            if (item.students.length === 0) { // check if array students is empty
                maxStudentId = 1
            } else {
                maxStudentId = item.students[item.students.length - 1].id + 1
            }
            student.id = maxStudentId // assign the student id
            item.students.push(student)
        }
    }
}
createStudent({ name: 'John', email: 'somemail', city: 'Berlin' }, 1)
console.log('schools after adding a srudent:', school[0].students)
createStudent({ name: 'JIM', email: 'somemail', city: 'FRA' }, 3)
console.log('schools after adding a srudent:', school[2].students)
console.log('---------task 3-----------')
    //! remove
    // removeClass by ID
    // Solution to Question 3
function deleteClass(classId) {
    for (let className of school) { // gets every object (class) from school array
        if (className.id === classId) {
            // splice needs the index
            // indexOf returns the index of the object className
            school.splice(school.indexOf(className), 1)
        }
    }
}
deleteClass(3)
console.log('School after deleting a class', school)
console.log('---------task 4-----------')
    // removeStudent takes argument(object) holds class ID and the student ID
const removeStudent = (data) => {
    let classIndex = data.classID - 1;
    let studentIndex = data.studentID - 1;
    school[classIndex].students.splice(studentIndex, 1);
};
console.log('---------using ,find method, to solve task 4-----------')
    // solution with 'find'
function deleteStudent(ClassId, StudentId) {
    //Find the correct Class
    //array.find returns the first item where the provided callback function returns true
    const Class = school.find(item => item.id === ClassId)
        //Find the Index of the Student in the Class
        //array.findIndexOf returns the index of the first item where the provided callback function returns true
    const StudentIndex = Class.students.findIndexOf(item => item.id === StudentId)
        //Delete the Student
    Class.students.splice(StudentIndex, 1)
}
deleteStudent(3)
console.log('---------task 5-----------')
    //!Edit
    // editStudent ==> info name, email and city.
const editStudent = (data) => {
    let classIndex = data.classID - 1;
    let studentIndex = data.studentID - 1;
    let targetStudent = school[classIndex].students[studentIndex];
    if (data.name) {
        targetStudent.name = data.name;
    }
    if (data.email) {
        targetStudent.email = data.email;
    }
    if (data.city) {
        targetStudent.city = data.city;
    }
};
console.log('------------------solutions--------------------')
    //! read
    // create function call RenderSchoolTemplate
    // This function Format and render school data
const RenderSchoolTemplate = () => {
    let template = "";
    template += "School Classes" + "\n";
    template += "--------------" + "\n";
    let totalStudents = 0;
    if (school.length < 1) {
        // if the school array is empty
        template += "  The school is empty!" + "\n";
    } else {
        // if we have class/es in the school
        for (let i = 0; i < school.length; i++) {
            let classData = school[i];
            template += ` ${classData.name} - (class ID: ${i + 1}):  \n`;
            // console.log("classData.students ==> ", classData.students);
            if (classData.students.length < 1) {
                template += "   The class is empty!" + "\n";
            } else {
                for (let j = 0; j < classData.students.length; j++) {
                    let student = classData.students[j];
                    /**
           * EX:  Alex, alex@yahoo.com, Berlin - (student ID: 1).
            student ==>  { name: 'Alex', email: 'alex@yahoo.com', city: 'Berlin' }
            student ==>  { name: 'Max', email: 'max@yahoo.com', city: 'Hamburg' }
            student ==>  { name: 'Jon', email: 'jon@yahoo.com', city: 'Berlin' }
            student ==>  { name: 'Pilar', email: 'pilar@yahoo.com', city: 'Berlin' }
       */
                    template += `  ${j + 1}- ${student.name}, ${student.email}, ${
            student.city
          } (student ID: ${j + 1}) \n`;
                    totalStudents += 1;
                }
            }
            template += "***************************" + "\n";
        }
    }
    template +=
        "   Total Classes " + school.length + ", total students " + totalStudents;
    return template;
};
// //------------#########################-----------
// Call Stack
// createClass({ name: "FbW4" });
// createStudent({
// classID: 2,
// name: "Sara",
// email: "sara@yahoo.com",
// city: "Berlin",
// });
// createStudent({
// classID: 4,
// name: "Ghassan",
// email: "ghassan@yahoo.com",
// city: "Berlin",
// });
// removeClass({ classID: 2 });
// removeStudent({ classID: 1, studentID: 2 });
// editStudent({
// classID: 3,
// studentID: 1,
// email: "ghassan@test.de",
// city: "Hamburg",
// name: "Alex",
// });
// //--------------------
// // render school template
// console.log(RenderSchoolTemplate());