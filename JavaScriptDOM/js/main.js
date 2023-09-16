//getElementsByTagName
console.log(document.getElementsByTagName('h1'))
console.log(document.getElementsByTagName('h1'[0]))
console.log(document.getElementsByTagName('h1'[0]).innerHTML)

//alter value inside of html element
//saving innerHTML to a variable
// Let hello = document.getElementsByTagName('h1')[0].innerHTML

document.getElementsByTagName('h1')[0].innerHTML = "Give me some of your tots"


//function th



function colorChange(){
    //checking the inner html to see what its value is
    let headerText = document.getElementsByTagName('h1')[0].innerHTML
    // give us the whole h1 element so we cann add a class(className) to it
    let headerElement = document.getElementsByTagName('h1')[0]

if(headerText == "Hello World"){
    //add class attribute of color-change
    //className because class is a resereved JavaScript keyword for OOP
    headerElement.className = 'color-change'
} else {
    headerElement.className = 'different-color'
}
console.log(headerElement)
}
let colorButton = document.getElementById('color-button')
// Change Text Color via click event listener in JS
colorButton.addEventListener('click', colorChange)

// Add new HTML element
//New Button 
let button = document.createElement('button')
let button_display = document.createElement('h2')

// Add inner text to the button
button.innerHTML = "I am aliiive!"
document.body.append(button)
console.log(button)

button.addEventListener('click', () =>{
    if(button_display.innerText == ''){
       button_display.innerText == "Easy now, my fuzzy little man" 
    }else {
        button_display.innerText
    }
    document.body.append(button_display)
})

//querySelector takes in any of your css selectors
// Grabs the first element that matches
const source = document.querySelector('div.source');
console.log(source)

source.addEventListener('copy', (event) => {
    const selection = document.getSelection();
    console.log(selection)
    
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
    event.preventDefault();
})


// Grabbing Form Data From a Submit event
const form = document.querySelector("#test-data-form")
// console.log(form)

// Add event listener for submit event
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let queryFirst = document.querySelector("#first-name").value
    let queryLast = document.querySelector("#last-name").value
    console.log(`Information from the inputs: ${queryFirst} ${queryLast}`)
    console.log(event)
    let firstName = event.path[0][0].value;
    let lastName = event.path[0][1].value;
    console.log(firstName, lastName, "from event")
    colorChange()
})