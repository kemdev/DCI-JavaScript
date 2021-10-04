console.log('this is an exercise in console logging')

let variable = 'This is the value'

function print(...args) {


    args.reduce(function(acc, cur) {
        return acc + " " + cur
    })
    console.log(args)
}

print('hello world')

let firstName = "Kareem";
let lastName = "Armanazi";

print(firstName, lastName)