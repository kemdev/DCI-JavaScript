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




// School app
// create app to add, remove, read and edit Students and Classes in a School

// the school model:
// School=[ classObject1,classObject2,....]

const school = [{
        id: 1,
        name: "FbW1",
        students: [{
                id: 1,
                name: "Alex",
                email: "alex@yahoo.com",
                city: "Berlin",
            },
            { id: 2, name: "Max", email: "max@yahoo.com", city: "Hamburg" },
        ],
    },
    {
        id: 2,
        name: "FbW2",
        students: [
            { id: 1, name: "Jon", email: "jon@yahoo.com", city: "Berlin" },
            {
                id: 2,
                name: "Pilar",
                email: "pilar@yahoo.com",
                city: "Berlin",
            },
        ],
    },
    { id: 3, name: "FbW3", students: [] },
];
const Class = (object) => {
    return `${object["name"]} - (class ID: ${object["id"]})`;
};
//Class(school[0]);
const student = (object) => {
    return `${object["name"]}, ${object["email"]}, ${object["city"]} - (student ID: ${object["id"]} )`;
};
// student(school[2]["students"], 0);
const holdObject = (array, func1, fun2) => {
    let result = "";
    for (let item of array) {
        result += func1(item) + "\n";
        for (let object of item["students"]) {
            result += fun2(object) + "\n";
        }
        if (item["students"].length < 1) result += "class is empty" + "\n";
        result += "********************************************" + "\n";
    }
    return result;
};
print(holdObject(school, Class, student));
/* function removeById(ID) {
  //let removed ={}
  for(const key in school) {
  if(school[key].ID === ID) {
  school.splice(key,1) ;
  return school;
  }
  }
  }  */
print("----------------------------------");
const removeClass = (array, id) => {
    let result = [];
    for (let item of array) {
        if (!(item["id"] === id)) {
            result.push(item);
        }
    }
    return result;
};
print(removeClass(school, 1));
const removeStudent = (array, classId, studentId) => {
    let result = [];
    for (let item of array) {
        if (item["id"] === classId) {
            if (item["students"].filter((std) => std["id"] === studentId)) {
                //delete item['students'][studentId -1] leaves empty object
                item["students"].splice(studentId - 1);
            }
        } //else return false;
    }
    return result;
};
print(removeStudent(school, 2, 2));
print(school);
// editStudent ==> info name, email and city.
const editStudent = (array, classId, studentId, prop, value) => {
    for (let item of array) {
        if (item["id"] === classId) {
            if (item["students"].filter((std) => std["id"] === studentId)) {
                item["students"][studentId - 1][prop] = value;
            }
        }
    }
};
print("------------------------------------------");
editStudent(school, 1, 1, "email", "Kareem@something");
editStudent(school, 1, 1, "name", "Kareem");
print("", school[0]);