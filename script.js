function add(a, b) {
    return +a + +b
}
function subtract(a, b) {
    return +a - +b
}
function multiply(a, b) {
    return +a * +b
}
function divide(a, b) {
    return +a / +b
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
let inputValue = "";
let op = "";
let a = "";
let b = "";
const array = ["+", "-", "*", "/"];

const divStoredNum = document.querySelector(".storedNum")
const divNumPad = document.querySelector(".conNumPad")
for (let i = 0; i < 5; i++) {
    const divRow = document.createElement("div")
    divRow.setAttribute("class", "divRow")
    divNumPad.appendChild(divRow)
    if (i == 0) {
        for (let x = 0; x <= 3; x++) {
            const buttonOp = document.createElement("button")
            buttonOp.setAttribute("class", "buttonOp")
            buttonOp.textContent = array[x];
            buttonOp.addEventListener("click", (event) => {
                op = event.target.textContent;
                if (!a) {
                    a = inputValue;
                }
                divStoredNum.textContent = a + " " + op;
                inputValue = "";
                displayText.textContent = "";
            })
            divRow.appendChild(buttonOp)
        }

    }
    if (i >= 1 && i < 4) {
        for (let n = 0; n < 3; n++) {
            const buttonNum = document.createElement("button")
            buttonNum.setAttribute("class", "buttonNum")
            if (i == 1) {
                buttonNum.textContent = n + 7;
            } else if (i == 2) {
                buttonNum.textContent = n + 4;
            } else if (i == 3) {
                buttonNum.textContent = n + 1;
            }
            divRow.appendChild(buttonNum)
        }
    } else if (i == 4) {
        const buttonNum = document.createElement("button");
        const block2 = document.createElement("button");
        const equalButton = document.createElement("button");
        buttonNum.setAttribute("class", "buttonzero")
        block2.setAttribute("class", "clearButton")
        equalButton.setAttribute("class", "equalButton")
        equalButton.textContent = "=";
        equalButton.addEventListener("click", () => {
            b = +inputValue;
            inputValue = "";
            displayText.textContent = operate(op, a, b);
            a = +displayText.textContent;
            inputValue = +displayText;
            divStoredNum.textContent = displayText.textContent;
        })
        buttonNum.textContent = 0;
        buttonNum.addEventListener("click", () => {
            inputValue += +buttonNum.textContent
            displayText.textContent = inputValue;
        })
        block2.textContent = "clear";
        divRow.appendChild(buttonNum)
        divRow.appendChild(block2)
        divRow.appendChild(equalButton)
    }
}
divNumPad.addEventListener("click", (event) => {
    if (event.target.className === "buttonNum") {
        inputValue += +event.target.textContent;
        displayText.textContent = inputValue;
        divStoredNum.textContent += " " + event.target.textContent;
    }
})

const displayText = document.querySelector(".displayText")
const block2 = document.querySelector(".clearButton")
block2.addEventListener("click", () => {
    displayText.textContent = "";
    inputValue = "";
    a = 0;
    b = 0;
    divStoredNum.textContent = "";
})


