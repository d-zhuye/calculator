let order = "firstNumber";
let firstNumber = "";
let secondNumber = "";
let runningTotal = "";
let displayReturn = "";
let functionCall = "";

function updateDisplay() {
    if (Number(displayReturn) > 99999999) {
        displayReturn = "Limit Exceeded";
    }
    const display = document.querySelector("#display");
    display.textContent = displayReturn;
}

function add(a,b) {
    a = Number(a);
    b = Number(b);
    runningTotal = a + b;
}

function subtract(a,b) {
    a = Number(a);
    b = Number(b);
    runningTotal = a - b;
}

function divide(a,b) {
    a = Number(a);
    b = Number(b);
    if (b === 0) {
        displayReturn = "Divide by 0 Error";
    } else {
        runningTotal = a / b;
    }
}

function multiply(a,b) {
    a = Number(a);
    b = Number(b);
    runningTotal = a * b;
}

function multiCalculation () {
    firstNumber = runningTotal;
    displayReturn = runningTotal;
    order = "secondNumber";
    secondNumber = "";
    updateDisplay();
}

function allClear() {
    firstNumber = "";
    secondNumber = "";
    runningTotal = 0;
    displayReturn = 0;
    order = "firstNumber";
    functionCall = "";
    updateDisplay();

}

function clear() {
    if (order == "firstNumber") {
        firstNumber = "";
    } else if (order == "secondNumber") {
        secondNumber = ""
    }
    updateDisplay();
}

function calculate(input) {
    switch (input) {
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
    }
    functionCall = "";
    multiCalculation();
}

const numberElements = document.querySelectorAll(".number");

numberElements.forEach((key) => {
    key.addEventListener("click", (event) => {
        const input = event.target;
        if (order == "firstNumber") {
            firstNumber += input.textContent;
            displayReturn = firstNumber;
        } else if (order == "secondNumber") {
            secondNumber += input.textContent;
            displayReturn = secondNumber;
        }
        updateDisplay();
        event.stopPropagation();
        
    });
});

const operationElements = document.querySelectorAll(".operation");

operationElements.forEach((key) => {
    key.addEventListener("click", (event) => {
        const input = event.target;
        if (firstNumber != "" && secondNumber != "") {
            calculate(functionCall);
        }
        switch (input.id) {
            case "allClear":
                allClear();
                break;
            case "clear":
                clear();
                break;
            case "add":
                if (secondNumber != "") {
                    // calculate(functionCall); 
                    add(firstNumber,secondNumber);
                    multiCalculation();
                } else {
                    order = "secondNumber";
                    functionCall = "add";
                }
                break;
            case "subtract":
                if (secondNumber != "") {
                    calculate(functionCall); 
                    // subtract(firstNumber,secondNumber); 
                    // multiCalculation();    
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
                calculate(functionCall); 
        }
        event.stopPropagation();
    });
});


                