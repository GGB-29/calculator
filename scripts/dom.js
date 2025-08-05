/*
File containing code to modify the DOM 
during use of the calculator.
*/

function isValidLength() {
    let displayContents = document.querySelector('#display').textContent.split('');
    let displayLength = displayContents.length;
    return (displayLength < 10);
}

function addCharacter(char) {
    if (!isValidLength()) {return;};

    let display = document.querySelector('#display');
    let displayText = display.textContent;
    const operators = ['+', 'x', '÷', '-'];

    if (operators.includes(char)) {
        if (operatorPresent) {
            calculateResult();
            firstNum = document.querySelector('#display').textContent;
            operatorPresent = false;
        } else {
            firstNum = displayText;
            operatorPresent = true;
        }
    }
    display.textContent += char;
}

function deleteCharacter() {
    let display = document.querySelector('#display');
    let newDisplay = display.textContent.split('');
    newDisplay.pop();
    display.textContent = newDisplay.join('');
}

function calculateResult() {
    let display = document.querySelector('#display');
    let operator = display.textContent.match(/[+\-x÷]/)[0];
    console.log(operator);
    let secondOperand = (display.textContent.split(/[-+÷x]/))[1];

    secondNum = secondOperand;
    operatorPresent = false;
    let result = operate(operator, firstNum, secondNum);
    console.log(result);
    display.textContent = result;
}