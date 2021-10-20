let exerCounter = 1;

function print(...arg) {
    console.log(...arg);
}

function println() {
    print(`----------${exerCounter}----------`);
    exerCounter++;
}

function dashes() {
    print("-----------------------");
}

/**
 * 01
 * Write a function to create an object named student as the following:
 *
 * const student = {
 * name : "David Rayy",
 * sclass : "VI",
 * rollno : 12 };
 *
 * then delete the rollno property from the following object.
 * Also print the object before or after deleting the property.
 */

function createStudent() {
    const student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12,
    };
    print(student);
    delete student.rollno;
    print(student);
}

println();

createStudent();

println();
/**
 * 02
 * Create a function that
 * adds users to an array of users.
 * Each user is an object with the following properties:
 * name
 * address
 * email
 * age
 * Then create another function that returns the properties of a given object
 * Then create another function that returns the values of a given object
 * Then create another function that updates the value of a specific property of a specific object
 * or creates the given property if this doesn't exist already and returns the given object
 * Finally create a function that deletes a given property of a given object and returns the given object
 */
let users = [];

function addUsers(name, address, email, age) {
    user = {
        name,
        address,
        email,
        age,
    };
    users.push(user);
}

addUsers("Kareem", "Germany", "kareem@something", 32);
addUsers("Nora", "Germany", "Nora@somthing.com", 30);
// print(users)

// Then create another function that returns the properties of a given object
dashes();

function getProperety(object) {
    return Object.keys(object);
}

print(getProperety(users[0]));

// Then create another function that returns the values of a given object
dashes();

function getValues(object) {
    return Object.values(object);
}

print(getValues(users[0]));

// Then create another function that updates the value of a specific property of a specific object
// creates the given property if this doesn't exist already and returns the given object

function updateValue(object, property, newValue) {
    return (object[property] = newValue);
}

print(updateValue(users[0], "gender", "male"));
// print(users)
dashes();
print(users[0]);

// Finally create a function that deletes a given property of a given object and returns the given object

function deleteProperety(object, property) {
    delete object[property];
    return object;
}

print(deleteProperety(users[0], "name"));
// print(users)

println();

/**
 * 03 medium
 * Create an object to store the following information about your favorite movie:
 * title (a string), duration (a number), and stars (an array of strings).
 * Create a function to print out the movie information like so:
 * "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
 */

let movie = {
    title: "Some Movie",
    duration: 90,
    stars: ["Star1", "Star2", "Star3"],
};

function movieOutput(somMovie) {
    return `${somMovie.title} lasts for ${
    somMovie.duration
  } minutes. Stars: ${somMovie.stars.join(" ")}`;
}

print(movieOutput(movie));

println();

/**
 * 04 medium
 * Write a function called cashRegister that takes a shopping cart object.
 * The object contains item names and prices (itemName: itemPrice).
 * The function should return the total price of the shopping cart
 */

let items = [
    (item1 = {
        name: "Some item",
        price: 15,
    }),
    (item2 = {
        name: "Another some item",
        price: 45,
    }),
];

function cashRegister(shoppingCart) {
    let total = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
        for (const key in shoppingCart[i]) {
            if (Object.hasOwnProperty.call(shoppingCart[i], key)) {
                if (key === "price") total += shoppingCart[i]["price"];
            }
        }
    }

    return total;
}

print(cashRegister(items));

println();

/**
 * 05 medium
 * 
 * Build your eshop product catalogue like that:
 * 1. Build and array with 10 objects. Each object should have a name property and 
 * a value and a price property and a value.
 * Example of product: 
 *     { 
            name: "Blue Shirt",
            price: 10
        }
 * 2. Build a list of carts of an online eshop like that:
 * Build an array with 10 objects. 
 * example of cart:
 *     {
            user: "alkis",
            product: "Hat",
            quantity: 3
        }
 * Each object should have:
 *  a name property and a value  (the value should be a product name from the first array)
 *  a quantity property and a value (the value should be a number)
 *  a user property and a value (the value should be the username)
 *  */

let eshop = [{
        name: "Hat",
        price: 15,
    },
    {
        name: "Blue Shirt",
        price: 25,
    },
    {
        name: "USB Charger",
        price: 45,
    },
    {
        name: "Cheap Gaming Mouse",
        price: 10,
    },
    {
        name: "Gaming Mouse",
        price: 23,
    },
    {
        name: "Mini Samsung Mobile",
        price: 120,
    },
    {
        name: "Android Box",
        price: 65,
    },
    {
        name: "Smart TV",
        price: 580,
    },
    {
        name: "Smart watch",
        price: 80,
    },
    {
        name: "1TB SSD",
        price: 95,
    },
];

let carts = [{
        user: "alkis",
        product: eshop[0].name,
        quantity: 3,
    },
    {
        user: "Kareem",
        product: eshop[1].name,
        quantity: 5,
    },
    {
        user: "Tanya",
        product: eshop[2].name,
        quantity: 1,
    },
    {
        user: "Simona",
        product: eshop[7].name,
        quantity: 1,
    },
    {
        user: "Sara",
        product: eshop[8].name,
        quantity: 1,
    },
    {
        user: "Esra",
        product: eshop[4].name,
        quantity: 1
    },
    {
        user: "Nora",
        product: eshop[6].name,
        quantity: 1
    },
    {
        user: "Rama",
        product: eshop[5].name,
        quantity: 1
    },
    {
        user: "Sali",
        product: eshop[9].name,
        quantity: 1
    },
    {
        user: "Rola",
        product: eshop[3].name,
        quantity: 5
    }
];
print(carts);
/* 
 * Write functions to:
 * a) add a given product to the cart
 * b) list the products of the cart for a given user
 * c) list the total items in the cart for a given user
 * d) change the quantity of a given product in that cart
 * e) delete a product from the cart
 * f) find the total value of the cart of a given user
 */

function addToCart(user, product, quantity) {
    carts.push({ user, product, quantity })
    return carts
}

addToCart("Kareem", eshop[5].name, 4)
print(carts)

dashes()
    // b) list the products of the cart for a given user
function showItems(object, user) {
    // let index = cart.indexOf('')
    let output = ''
    for (let i = 0; i < object.length; i++) {
        if (object[i].user === user) output += object[i].product + ' - '
    }
    return user + ' Cart includes: ' + output
}


print(showItems(carts, 'Kareem'))

dashes()


// c) list the total items in the cart for a given user

function totalItem(object, user) {
    let output = 0
    for (let i = 0; i < object.length; i++) {
        if (object[i].user === user) output++
    }
    return user + ' Cart has: ' + output + ' Items'
}

print(totalItem(carts, 'Kareem'))

dashes()

// d) change the quantity of a given product in that cart

function updateQuantity(object, user, product, newQuantity) {
    // let output = 0
    for (let i = 0; i < object.length; i++) {
        if (object[i].product === product && object[i].user === user) object[i].quantity = newQuantity
    }
    return object;
}

print(updateQuantity(carts, 'Kareem', 'Blue Shirt', 15))

dashes()


// e) delete a product from the cart


function deleteProduct(obj, product) {

}



// f) find the total value of the cart of a given user

function totalPrice(obj, user) {

}