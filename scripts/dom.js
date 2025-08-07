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

    if (operators.includes(displayText.slice(-1)) && operators.includes(char)) {return;}

    if (operators.includes(char)) {
        if (operatorPresent) {
            calculateResult('operator');
            firstNum = document.querySelector('#display').textContent;
            operatorPresent = true;
        } else {
            firstNum = displayText;
            operatorPresent = true;
        }
        resultPresent = false;
    }
    if (resultPresent) {deleteAll();}
    display.textContent += char;
}

function deleteCharacter() {
    const operators = ['+', 'x', '÷', '-'];
    let display = document.querySelector('#display');
    let newDisplay = display.textContent.split('');

    if(operators.includes(newDisplay.pop())) {
        operatorPresent = false;
    }
    display.textContent = newDisplay.join('');
}

function deleteAll() {
    firstNum = null;
    secondNum = null;
    operator = null;
    resultPresent = false;
    operatorPresent = false;

    let display = document.querySelector('#display');
    display.textContent = '';
    
}

function calculateResult(from) {

    if (!operatorPresent) {return;}
    let display = document.querySelector('#display');
    let operator = display.textContent.match(/[+\-x÷]/)[0];
    let secondOperand = (display.textContent.split(/[-+÷x]/))[1];
    
    if (!secondOperand) {return;}

    secondNum = secondOperand;
    operatorPresent = false;
    let result = operate(operator, firstNum, secondNum);
    let MAX_DISPLAY_VALUE = 9999999999;
    if ((result) > MAX_DISPLAY_VALUE) {
        display.textContent = 'TOO LARGE'
    } else if (typeof(result) === 'string') {
        display.textContent = 'UNDEFINED';
    } else {
        answer = result;
        display.textContent = Number(result.toPrecision(8));
    }

    if (from == 'equals') {
        resultPresent = true;
    }
}