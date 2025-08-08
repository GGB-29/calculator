/*
File containing code to carry out 
each of the mathematical operations possible 
in the calculator.
*/

function add(a, b) {
    return (1*a + 1*b);
}

function subtract(a, b) {
    return (a - b);
}

function multiply(a, b) {
    return (a * b);
}

function divide(a, b) {
    return ((1*a) / (1*b));
}

function operate(operator, firstNum, secondNum) {
    switch (operator) {
        case '+':
            return add(firstNum, secondNum);
        case '-':
            return subtract(firstNum, secondNum);
        case 'x':
            return multiply(firstNum, secondNum);
        case '÷':
            //don't allow division by zero
            if (secondNum == '0') {return 'ERROR';}
            return divide(firstNum, secondNum);
        default:
            return null;
    }
}

//variable to store first operand
let firstNum;
//flag to check if there is an operator present on display
let operatorPresent = false;
//flag to check if a result is currently shown on the display
let resultPresent = false;
//variable to store second operand
let secondNum;
//variable to store the operator
let operator;