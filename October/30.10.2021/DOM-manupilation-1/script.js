// let header1 = document.getElementById('header');
// let changecolor1 = document.getElementById('changeColor')
// let paragraph = document.getElementById('paragraph')
// let box = document.getElementById('box')

// header1.innerHTML = 'New Value'
// header1.style.color = 'green'
// changecolor1.style.backgroundColor = 'red'
//     // changecolor1.style['background-color'] = 'black'
// changecolor1.style.color = 'yellow'
// paragraph.style.fontSize = 60 + 'px'


// // box.style.transform = 'translate(50px, 150px)'

// // This function is getting called when we hit the button, Please see the button in the html code!.
// let calc = () => {
//     let xValue = document.getElementById('x').value
//     let yValue = document.getElementById('y').value
//     let result = document.getElementById('result')
//     result.innerHTML += parseInt(xValue) + parseInt(yValue)
// }

let div1 = document.getElementsByClassName('ordredList')

let numberOfElement = 6

div1[0].innerHTML = '<ol id="test">'
let test = document.getElementById('test')
    // for (let i = 1; i <= numberOfElement; i++) {
    //     test.innerHTML += '<li>' + 'Hello ' + i + '</li>'
    // }

div1[0].innerHTML += '</ol>'




// let test2 = Array.from(childOfList)

// test2.pop()

// test.innerHTML = test2

div1[0].innerHTML = '<ol id="test">'


function addName() {
    let name = document.getElementById('name').value;
    let test = document.getElementById('test')


    test.innerHTML += '<li>' + name + '</li>'
}

// The Following function is a bullshit function it is not working
// function removeName() {
//     let name = document.getElementById('removeName').value
//     let childOfList = test.childNodes;
//     let listArray = Array.from(childOfList)

//     for (let i = 0; i < childOfList.length; i++) {
//         if (childOfList[i] === name) {
//             childOfList[i].remove()
//             console.log("heelo")
//         }
//     }

// }

div1[0].style.color = 'blue'


let childOfList = test.childNodes;