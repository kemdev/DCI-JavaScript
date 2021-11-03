function print(...args) {
    console.log(...args)
}

let exerNum = 1

function println(isTrue = false, extra = exerNum) {
    isTrue ? extra = isTrue : exerNum++
        print(`---------------${extra}---------------`)
}


// ToDos List App
// "Shopping"
// "Home work"
// "Go to the gym"
// create TODOs App: 
// create function
// Add item
// * create function to Insert new items to toDosStore

let toDosStore = ["Shopping", "Go to the gym"]

function insertTodo(item) {
    return toDosStore.push(item)
}
// Add Items
// * create function to insert array of todos

function createTodos(items = []) {
    return toDosStore.push(...items)
}

// createTodos(toDosStore, ['test1', 'test2', 'test3']);
// Remove Item
// create function to remove any item by order number
// the function takes one Argument as item order number

function removeTodo(num) {
    let index = toDosStore.indexOf(toDosStore[num - 1])
    toDosStore.splice(index, 1)
}


// Edit Items
// * creat function to edit todos by passing array of todos order numbers
function editTodo(currentItemNum, newItem) {
    let index = toDosStore.indexOf(toDosStore[currentItemNum - 1])
    toDosStore[index] = newItem
}

// Edit Items
// creat function to edit todos by passing array of todos order numbers
function updateTodos(currentItemNumArray, newItemsArray) {
    if (currentItemNumArray.length !== newItemsArray.length) return 'Please check your input'
    for (let i = 0; i < currentItemNumArray.length; i++) {
        // currentItemNumArray = [2, 4, 6]
        // newItemsArray = ["Meet with PR department", "By milk", "Check the internet connection"]
        let index = currentItemNumArray[i] - 1
        toDosStore.splice(index, 1, newItemsArray[i])
    }
}


// render to do template
insertTodo("test1");
insertTodo("test2");
insertTodo("test4");
insertTodo("test5");
removeTodo(3);
removeTodo(5);
insertTodo("Call Alex");
editTodo(3, "Pay bills");
editTodo(5, "Visiting Tommy");
createTodos(["Go to supermarket", "Meet with Ghassan", "New test"]);

updateTodos(
    [2, 4, 6], ["Meet with PR department", "By milk", "Check the internet connection"]
);

function RenderToDosListTemplate(toDoArray) {
    if (toDoArray.length === 0) return 'To do list is empty'
    let output = ''
    for (let item of toDoArray) {
        let index = toDoArray.indexOf(item)
            // index < toDoArray.length - 1 ? output += (index + 1) + '- ' + item + '\n' : output += (index + 1) + '- ' + item
        output += (index + 1) + '- ' + item + '\n'
    }
    return output
}


print(RenderToDosListTemplate(toDosStore))