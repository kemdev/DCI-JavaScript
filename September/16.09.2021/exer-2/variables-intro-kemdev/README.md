# Javascript - introduction exercises

Instructions:

Type your answers next to the question (when there is one).

After you are done with all steps, push to GitHub


	QUIZ
	====
	What is the relation between Java and Javascript?

	There is no relation between them, except 	Javascript stole the Java name's :)

	What is scope?
		Scope is where the variable lies. 	Either Local or Global. 

	What is a local variable?
		local variables can only used inside the block code.

	What is a global variable?
		Global variables are normally declared outside the block code anad can be access from everywhere inside the file.

	What are the differences between var, const and let?
		var: declare a varibale that can be used everywhere in the file and can be used before and after declaring, as well as re-declare the same varaiable name without any error, also assigning a new value.

		let: declare a variable that can only be used in the local scope and cannot be redeclared again, but it can be re-assign a new value.

		const: declare a constant variable that cannot be redeclared or assign an new value to it!.

	Which type of variable can someone redeclare?
		var;

	Type which are the primitive variable types in Javascript:
	
	Strings, Numbers, Strings, Booleans, Null, undefinde.
	
	Explain to yourself and then type here what is hoisting:
	
		It when we use some variable or function before its decleration.
EXERCISES
=========

Variables
---------

	1. declare a var variable with name "yourName".
		print it to the console
		declare a const variable with name "yourAge" 
		print it to the console
		if you have declared it without assigning a value to them, then assign to them a value and print them to the console.

	2. Declare a variable firstname and initialize it with the value 'Cat'.
	
	3. Which value does x have after execution of the following code? let x = 'Giraph';
		Giraph

	4. Which value does x have after execution of the following code?
		let x = 'Tic';
		x = 'Tac';
		x = 'Toe';
			The value will be Toe

	5. Type here what will be the value of x:
		{
			let x = 0;
		}

		let x = 1;
		console.log("x=", x)
			The value is 1
	6. Which value does x have after execution of the following code?
		let x = 'Laurel';
		let y = 'Hardy';
		let z = y;
		y = x;
		x = z;

			x will be Hardy
		
	7. Create a string variable and initialize it with value 'Hello'
	
	8. What is the result of this expression: 'Java' + 'Script'

		The output is: JavaScript
	
	9. Declare a variable named "smoking" and initialize it with a boolean value and then print to the console that variable
	
	10. Declare two variables and initialize them using numbers or string and print to their console their sum using the operator "+"
	
	11. Solve all exercises that are at this link: 
	
[toxicode.fr](https://silentteacher.toxicode.fr/hourofcode)

### Objects & Arrays

	1. create an empty object
	
	2. create an object with properties name and last name - each with empty values
		print to the console that object
	
	3. create an object named myFavoritesObject and 
		store in it your favorite drink, food, book, song, restaurant, place and then print it to the console

	4. create an empty array
	
	5. create another array and assign it to a variable. This array should have the following 5 items:
		1, 2, 3, 4, 5
		Print to the console the first, second and the last items.
