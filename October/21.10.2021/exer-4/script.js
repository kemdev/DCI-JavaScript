function print(...args) {
    console.log(...args)
}

let exerNum = 1;

function println() {
    print(`------------${exerNum}------------`)
    exerNum++
}

function dashes(text = 'Extra') {
    print(`------------${text}------------`)
}
// 1. 2 D Array
// Given the 2 D Array below, loop through the arrays to print the values.
let board = [
    [1, 2, 3],
    ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
    [true, false]
];

let cartoonArray = array => {

    for (innerArray of array) {
        for (name of innerArray) {
            print(name)
        }
    }
}
println()
cartoonArray(board)


// 2. Doggo
// 2.1 Create a doggo object. Add name and breed as properties of the object.
// 2.2 Create an array within the doggo object named favorite foods and add the doggo's favorite foods to the array.
// 2.3 Access the second element of the doggo's favorite foods.
// 2.4 Add a method that loops through and print all the doggo's favorite food.


let doggo = {
    name: 'Boy',
    breed: 'German',
    favFood: ['Banana', 'Meat'],
}

println()
let secondFavFoord = doggo.favFood[1]
print(secondFavFoord)

doggo.loopOver = function() {
    for (prop in doggo) {
        if (prop === 'favFood') {
            for (food of this.favFood) {
                print(food)
            }
        }
    }
}

doggo.loopOver()




// 3.1 Create an object called recipes.
// 3.2 Inside this object, you should create another object for ingredients and store ingredients as properties butter, sugar, flour etc.
// Each property should have a string as its value.
// 3.3 Without changing the previous code, add another ingredient - let's add ginger.
// 3.4 Change the ingredient sugar to brown sugar.
// 3.5 Write a method in the recipes object that prints the value of each ingredient in the ingredients object.

let recipes = {
    ingredient: {
        butter: 'butter',
        sugar: 'sugar',
        flour: 'flour'
    }
}

println()
recipes.ingredient.ginger = 'ginger'
dashes(3.4)

print(recipes)
dashes(3.4)
recipes.ingredient.sugar = 'brown sugar'
print(recipes)



// 3.5 Write a method in the recipes object that prints the value of each ingredient in the ingredients object.
dashes(3.5)
recipes.printAll = function() {
    // return this.ingredient.map(item => print(item))
    for (let item in this) {
        print(item)
    }
}


recipes.printAll()