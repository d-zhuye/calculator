let order = "firstNumber";
let firstNumber = "";
let secondNumber = "";
let displayReturn = "";
let functionCall = "";

const one = document.querySelector("#one");
const two = document.querySelector("#two");

function add(a,b) {
    a = Number(a);
    b = Number(b);
    console.log(a+b +"add");
    displayReturn = a + b;
}

function subtract(a,b) {
    a = Number(a);
    b = Number(b);
    console.log(a-b + "subtract");
    displayReturn = a - b;
}

function divide(a,b) {
    a = Number(a);
    b = Number(b);
    console.log(a/b + "divide");
    displayReturn = a / b;
}

function multiply(a,b) {
    a = Number(a);
    b = Number(b);
    console.log(a*b + "multiply");
    displayReturn = a * b;
}

function allClear() {
    firstNumber = "";
    secondNumber = "";
    displayReturn = 0;
    order = "firstNumber";
}

function clear() {
    if (order == "firstNumber") {
        firstNumber = "";
    } else if (order == "secondNumber") {
        secondNumber = ""
    }
}

function multiCalculation () {
    firstNumber = displayReturn;
    secondNumber = "";
    order = "secondNumber";
}

const numberElements = document.querySelectorAll(".number");

numberElements.forEach((key) => {
    key.addEventListener("click", (event) => {
        const input = event.target;
        console.log(order);
        if (order == "firstNumber") {
            firstNumber += input.textContent;
            displayReturn = firstNumber;
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
            case "clear":
                clear();
                break;
            case "add":
                if (secondNumber) {
                    add(firstNumber,secondNumber);
                    multiCalculation();
                } else {
                    order = "secondNumber";
                    functionCall = "add";
                }
                break;
            case "subtract":
                if (secondNumber) {
                    subtract(firstNumber,secondNumber);
                    multiCalculation();
                } else {
                    order = "secondNumber";
                    functionCall = "subtract";
                }

                break;
            case "divide":
                if (secondNumber) {
                    divide(firstNumber,secondNumber);
                    multiCalculation();
                } else {
                    order = "secondNumber";
                    functionCall = "divide";
                }
                break;
            case "multiply":
                if (secondNumber) {
                    multiply(firstNumber,secondNumber);
                    multiCalculation();
                } else {
                    order = "secondNumber";
                    functionCall = "multiply";
                }
                break;
            case "equal":
                switch (functionCall) {
                    case "add": 
                        add(firstNumber,secondNumber);
                        break;
                    case "subtract":
                        subtract(firstNumber,secondNumber);
                        break;
                    case "multiply":
                        multiply(firstNumber,secondNumber);
                        break;
                    case "divide":
                        divide(firstNumber,secondNumber);
                        break;
                    default:
                        
                }
                multiCalculation();

            default:
                displayReturn = "Error";
        }
    event.stopPropagation();
    });
});

const display = document.querySelector("#display");

display.addEventListener("click", (event) => {
    display.textContent = displayReturn;
    event.stopPropagation();
});