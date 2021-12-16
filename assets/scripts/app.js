const defaultValue = 0;

let currentResult = defaultValue;
let logEntries = [];

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(resBeforeCalc, operator, calcNumber) {
    const calDescription = `${resBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calDescription);
}

function writeLog(operatorIdentifier, prevResult, operationNumber, newResult) {
    const logEntry = {
        operation: operatorIdentifier,
        previousResult: prevResult,
        number: operationNumber,
        result: newResult,
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculateResult(calculationType) {
    if (
        calculationType !== "ADD" &&
        calculationType !== "SUBTRACT" &&
        calculationType !== "MULTIPLY" &&
        calculationType !== "DIVISION"
    ) {
        return;
    }
    const enteredValue = getUserNumberInput();
    let initialResult = currentResult;
    let mathOperator;
    if (calculationType === "ADD") {
        currentResult += enteredValue;
        mathOperator = "+";
    } else if (calculationType === "SUBTRACT") {
        currentResult -= enteredValue;
        mathOperator = "-";
    } else if (calculationType === "MULTIPLY") {
        currentResult *= enteredValue;
        mathOperator = "*";
    } else if (calculationType === "DIVISION") {
        currentResult /= enteredValue;
        mathOperator = "/";
    }
    createAndWriteOutput(initialResult, mathOperator, enteredValue);
    writeLog(calculationType, initialResult, enteredValue, currentResult);
}

function add() {
    calculateResult("ADD");
}

function subtraction() {
    calculateResult("SUBTRACT");
}

function multiply() {
    calculateResult("MULTIPLY");
}

function division() {
    calculateResult("DIVISION");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtraction);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", division);
