function print(...args) {
    console.log(...args)
}

let exerNum = 1

function println(isTrue = false, extra = exerNum) {
    isTrue ? extra = isTrue : exerNum++
        print(`---------------${extra}---------------`)
}



/**
 * The Cat
 * 
 * Create a virtual cat
 * Write a class that represents a cat. It should have properties for 
 * tiredness, hunger, lonliness and happiness
 * 
 * Next, write methods that increase and decrease those properties. 
 * 
 * Call them something that actually represents what would increase or decrease these things,
 * like "feed", "sleep", or "pet".
 * 
 * Last, write a method that prints out the cat's status in each area. 
 * (Be creative e.g. Paws is really hungry, Paws is VERY happy.)
 * 
 * Bonus: Make the functions take arguments that increase or decrease arbitrary amounts
 * Bonus: Make the functions as arbitrary as cats are - 
 * sometimes make it so the cat doesn't want to be petted.
 */


class Cat {
    constructor(name, tiredness = 0, hunger = 0, happiness = 0, pet) {
        this.name = name;
        this.tiredness = tiredness; // 0 is not tired | 5 very tired
        this.hunger = hunger; // 0 is not hungry | 5 is hungry
        this.happiness = happiness; // 0 is not happy | 5 is  happy
        this.pet = pet
        print(this.mood())
    }

    feed() {

    }
    isSlept(boolean) {
        if (boolean) return this.happiness += 2
    }
    isPetted(boolean) {

        if (boolean) return this.happiness += 1
    }
    mood() {
        let name = this.name;
        let happyMood = ''
        let hungerMood = ''
        let tiredMood = ''
            // if (this.tiredness < 3 && this.happiness >= 4 && this.hunger < 2 ) return `${this.name} is Very happy`
            //-----happy-----
        if (this.happiness >= 4 && this.hunger < 2) happyMood = `${name} is very happy `
        if (this.happiness <= 3 && this.happiness >= 2) happyMood = `${name} happy `
        if (this.happiness < 2) happyMood = `be careful ${name} is not happy `
            //-----hunger-----
        if (this.hunger <= 1) hungerMood = `${name} is not hungry`
        if (this.hunger > 1 && this.hunger <= 3) hungerMood = `${name} is almost hungry `
        if (this.hunger > 3) hungerMood = `be careful ${name} is really hungry and might be angry `
            //-----tired-----
        if (this.tiredness >= 4) tiredMood = `${name} is very tired `
        if (this.tiredness <= 3 && this.tiredness > 2) tiredMood = `${name} is almost tired `
        if (this.tiredness <= 2) tiredMood = `${name} is very tired `

        return happyMood + hungerMood + tiredMood
    }
}



let nancy = new Cat('nancy', 2, 5, 5)
println()

print(nancy)



/**
 * The Reading List
 * 
 * Create an object-oriented book-list!
 * Write a class BookList
 * then create another class called Book
 * 
 * BookLists should have the following properties:
 * Number of books marked as read
 * Number of books marked not read yet
 * A reference to the next book to read (book object)
 * A reference to the current book being read (book object)
 * A reference to the last book read (book object)
 * An array of all the Books
 * 
 * Each Book should have several properties:
 * Title
 * Genre
 * Author
 * Read (true or false)
 * Read date, can be blank, otherwise needs to be a JS Date() object
 * 
 * Every Booklist should have a few methods:
 * .add(book) should add a book to the books list.
 * .finishCurrentBook() which should do the following:
 * should mark the book that is currently being read as "read"
 * Give it a read date of new Date(Date.now())
 * Change the last book read to be the book that just got finished
 * Change the current book to be the next book to be read
 * Change the next book to be read property to be the first unread book you find
 *  in the list of books
 * 
 * Booklists and Books might need more methods than that. 
 * Try to think of more that might be useful.
 */


//  * The Reading List
//  * 
//  * Create an object-oriented book-list!
//  * Write a class BookList
//  * then create another class called Book
//  * 
//  * BookLists should have the following properties:
//  * Number of books marked as read
//  * Number of books marked not read yet
//  * A reference to the next book to read (book object)
//  * A reference to the current book being read (book object)
//  * A reference to the last book read (book object)
//  * An array of all the Books

class BookList {
    constructor() {

    }
    hasRead() {

    }
    notRead() {

    }

}

class Book {

}
println()