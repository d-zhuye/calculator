let order = "firstNumber";
let firstNumber = "";
let secondNumber = "";
let displayReturn = "";

const one = document.querySelector("#one");
const two = document.querySelector("#two");

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function divide(a,b) {
    return a / b;
}

function multiply(a,b) {
    return a * b;
}

function allClear() {
    firstNumber = "";
    secondNumber = "";
    displayReturn = 0;
    order = "firstNumber";
}

const numberElements = document.querySelectorAll(".number");

numberElements.forEach((key) => {
    key.addEventListener("click", (event) => {
        const input = event.target;
        console.log(order);
        if (order == "firstNumber") {
            firstNumber += input.textContent;
        } else if (order == "secondNumber") {
            secondNumber += input.textContent;
        }

        console.log(`First Number: ${firstNumber} === Second Number: ${secondNumber}`)
        event.stopPropagation();
        
    });
});

const operationElements = document.querySelectorAll(".operation");

operationElements.forEach((key) => {
    key.addEventListener("click", (event) => {
        const input = event.target;
        switch (input.id) {
            case "allClear":
                allClear();
                break;
            case "add":
                if (!secondNumber == "") {
                    add(firstNumber,secondNumber);
                } else {
                    order = "secondNumber";
                }
                break;
            case "subtract":
                if (!secondNumber == "") {
                    subtract(firstNumber,secondNumber);
                } else {
                    order = "secondNumber";
                }
                break;
            case "divide":
                if (!secondNumber == "") {
                    divide(firstNumber,secondNumber);
                } else {
                    order = "secondNumber";
                }
                break;
            case "multiply":
                if (!secondNumber == "") {
                    multiply(firstNumber,secondNumber);
                } else {
                    order = "secondNumber";
                }
                break;
            default:
                displayReturn = "Error";
        }
    event.stopPropagation();
    })
})

