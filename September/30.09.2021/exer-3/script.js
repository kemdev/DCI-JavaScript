function print(sting) {
    console.log(sting)
}

// 1. Color Analyzer
// Create a switch statement that prints a different statement for each color possibility (red, blue, green, yellow).

let color = 'red';

switch (color) {
    case 'red':
        console.log('Red')
        break;
    case 'blue':
        console.log('Blue');
        break;
    case 'green':
        console.log('Green')
    case 'yellow':
        console.log('Yellow')
    default:
        console.log(color)
        break;
}



// 2. Grading
// Create a switch statement that prints different comments depending on a grade.


let grade = ''
switch (grade) {
    case 'A':
        print('Great work')
        break;
    case 'B':
        print('Nice work')
        break;
    case 'C':
        print('Ah a little bit nice work')
    default:
        print('What the hell is this score?')
        break;
}




// 3. Fruits
// Create a switch statement that prints different statement for various fruit (e.g. banana, orange, strawberry, apple).

print('------3------')
let fruit = 'banana';

switch (fruit) {
    case 'banana':
        print('Banana')
        break;
    case 'orange':
        print('Orange')
        break;
    case 'strawberry':
        print('Strawberry')
    default:
        print("Please choode a fruit!")
        break;
}


/**
 * Percentage Complete. 
 * If percentageComplete is below 30, print "Still a long way to go". 
 * If the percentageComplete is between 30 and 50, print "Slowly getting there". 
 * If percentageComplete is between 51 and 80, print "You can do it!". 
 * If percentageComplete is between 81 and 99, print "This is the last push!". 
 * If percentageComplete is 100, print "You're there. Well done!".
 */

let percentageComplete = Math.floor(Math.random() * 100 + 1);

print('------4------')
print(percentageComplete)

if (percentageComplete < 30) print('Still a long way to go')
else if (percentageComplete >= 30 && percentageComplete <= 50) print('Slowly getting there')
else if (percentageComplete > 50 && percentageComplete <= 80) print('You can do it!')
else if (percentageComplete > 80 && percentageComplete <= 99) print('This is the last push!')
else if (percentageComplete === 100) print('This is the last push!')
else print('Please enter a number between 0 and 100')



print('------5------')

// 5. Differences
// When should you use a switch statement versus an if else statement. Comment your answer in your js file.

// It depends on the condition we want to use, mostly we use if else statement when we want to compare equality and stuff, switch on the other hand  we use it when we have a known cases we want to check