function print(...args) {
    console.log(...args);
}

let exerNum = 1;

function println() {
    print(`------------${exerNum}------------`);
    exerNum++;
}

function dashes(text = "Extra") {
    print(`------------${text}------------`);
}

// Instructions

// 1. Array Destructuring
// Declare the variables fruit, vegetable, food.
// Assign the following values to the variables respectively: "banana", "cucumber", "bread", "cakes", "pizza" (assign the "bread", "cakes" and "pizza" to food).
// Use array destructuring assignment to complete this task.

let [fruit, vegetables, ...food] = [
    "banana",
    "cucumber",
    "bread",
    "cakes",
    "pizza",
];
// [fruit, ...newVariableName] = ['oldVarName', 'sdsdsdsd', 'lknsdfkkdnf', 'lksndmflkdnf']
//  "bread", "cakes", "pizza";
println();
print(fruit, vegetables, food);
// print('NewVaiableName output: ', newVariableName)

// 2.Object Destructuring
// Create an object which contains key pair values of names and the respective halloween costume
// e.g. fran: "witch". Assign each key pair value to corresponding variable. Print out the object values.

let { tanya, ...restGang } = {
    tanya: "witch",
    kareem: "dracula",
    simona: "laila",
    igor: "werewolf",
};

println();
print(tanya, restGang);

// 3. Parameters: Object Destructuring
// Create an object with band/musician details e.g. name of the band/musician, greatest hit, nationality, genre etc.
// Then, create a function to display all of the band/musician's data.
// Example

// `Regina Spektor is a American-Russian singer/songwriter and pianist. The musician sings indie-pop and their greatest hit is "Us"`.

let obj = {
    singer: "Regina Spektor",
    musicName: "Us",
    nationality: "American-Russian",
    genre: "indie-pop",
};
let { singer, ...restStuff } = obj;

let objectPrint = (obj, restof) =>
    `${obj} is a ${restof.nationality} singer/songwriter and pianist. The musician sings ${restof.genre} and their greatest hit is ${restof.musicName}`;

print(objectPrint(singer, restStuff));