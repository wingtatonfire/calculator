function add(a, b) {
    let result = +a + +b
    return roundToTwoDecimals(result)
}
function subtract(a, b) {
    let result = +a - +b
    return roundToTwoDecimals(result)
}
function multiply(a, b) {
    let result = +a * +b
    return roundToTwoDecimals(result)
}
function divide(a, b) {
    if (b == 0) {
        return alert("you can't divide it by 0")
    }
    let result = +a / +b
    return roundToTwoDecimals(result)
}
function operate(op, a, b) {
    switch (op) {
        case "+":
            return add(a, b)
        case "-":
            return subtract(a, b)
        case "*":
            return multiply(a, b)
        case "/":
            return divide(a, b)
    }
}

function clearDisplay() {
    displayTextSpan.textContent = null;
}

function clearTopDisplay() {
    topDisplay.textContent = null;
    secondNum = null;
    operator = null;
}

function clearAll() {
    clearDisplay()
    clearTopDisplay()
    firstNum = null;
}

function roundToTwoDecimals(number) {
    // Check if the number has more than two decimal places
    if (number.toString().includes('.') && number.toString().split('.')[1].length > 2) {
        // Round the number to two decimal places
        return parseFloat(number.toFixed(2));
    }
    // If not, return the number as it is
    return number;
}
// i have to input the num to display
// const


const numButtons = document.querySelectorAll(".numButton");
const displayTextSpan = document.querySelector(".displayText");
const opButtons = document.querySelectorAll(".opButton");
const topDisplay = document.querySelector(".topDisplay");
const equalButton = document.querySelector(".equalButton");
const clearButton = document.querySelector(".clearButton");
const dotButton = document.querySelector(".dotButton");
const buttons = document.querySelectorAll('.conNumPad button');
const deleteButton = document.querySelector(".deleteButton");

let firstNum = null;
let operator = null;
let secondNum = null;

//eventlistener
//put the number to the display when got click
numButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        inputedNum = event.target.textContent;
        displayTextSpan.textContent += inputedNum;
    }
    )
})


// add the function of operate button
// when user press it the display number and operater go to storedValue
// if firstNum, operator and secondNum true when u press opbutton 
// do the operation
opButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        if (firstNum && operator) {
            secondNum = displayTextSpan.textContent;
            firstNum = operate(operator, firstNum, secondNum)
            displayTextSpan.textContent = null;
            operator = event.target.textContent;
            topDisplay.textContent = firstNum + " " + operator;
        } else {
            firstNum = displayTextSpan.textContent;
            operator = event.target.textContent;
            topDisplay.textContent = firstNum + " " + operator;
            clearDisplay()
        }
    })
})

// add the function of the equal button when it got clicked 
// do the operation when first Number, op and displaytext exist 
equalButton.addEventListener("click", (event) => {
    secondNum = displayTextSpan.textContent;
    if (firstNum && operator && secondNum) {
        displayTextSpan.textContent = operate(operator, firstNum, secondNum)
        firstNum = displayTextSpan.textContent;
        clearTopDisplay()
    }
})

// set up the function of the clear button
clearButton.addEventListener("click", clearAll)

dotButton.addEventListener("click", (event) => {
    dot = event.target.textContent;
    if (!displayTextSpan.textContent.includes(".")) {
        displayTextSpan.textContent += dot;
    }
})
// create map to link related button to the key
// just use the key to find out the button
// then add the event listener to the document 
// for keydown for out which key 
// find out which button 
// pass the .click() to that 

const keyMap = {};
buttons.forEach((button) => {
    const key = button.getAttribute("data-key");
    keyMap[key] = button;
})
document.addEventListener("keydown", (event) => {
    let button = keyMap[event.key];
    if (button) button.click()
})

deleteButton.addEventListener("click", (event) => {
    if (displayTextSpan.textContent) {
        displayTextSpan.textContent = displayTextSpan.textContent.slice(0, -1);
    }
})