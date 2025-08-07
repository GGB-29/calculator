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
            if (secondNum == '0') {return 'ERROR';}
            return divide(firstNum, secondNum);
        default:
            return null;
    }
}

let firstNum;
let operatorPresent = false;
let resultPresent = false;
let secondNum;
let operator;