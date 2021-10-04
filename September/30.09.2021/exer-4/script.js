function print(string) {
    console.log(string)
}

// Create a while loop that runs as long as the variable i is less than 15. Print i.

let i = Math.floor(Math.random() * 15 + 1);
while (i < 15) {
    print(i)
    i++
}


print('------2------')

// 2. Create a function which sums up numbers from 1-20 using a while loop.


function sumsUp() {
    let counter = 1;
    let sum = 0;
    while (counter <= 20) {
        sum += counter
        counter++
    }
    return sum
}

print(sumsUp())

print('------3------')


// Use a do, while loop to print The number is [i] while i is less than 20.


let counter = 0
do {
    print(`The number is ${counter}`)
    counter++
} while (counter < 20);