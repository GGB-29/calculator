/*
File containing code to modify the DOM 
during use of the calculator.
*/

function isValidLength() {
    //check input lengh is valid
    const MAX_DISPLAY_LENGTH = 10;

    let displayContents = document.querySelector('#display').textContent.split('');
    let displayLength = displayContents.length;
    return (displayLength < MAX_DISPLAY_LENGTH);
}

function addCharacter(char) {
    //if max length is reached don't add the character
    if (!isValidLength()) {return;};

    let display = document.querySelector('#display');
    let displayText = display.textContent;
    const operators = ['+', 'x', '÷', '-'];

    //allow negative sign after other operators
    if (operators.includes(displayText.slice(-1)) && char === '-') {
        display.textContent+=char;
        return;
    }

    //dont count leading negative as operator
    if (char === '-' && display.textContent.length === 1) {
        display.textContent += char;
    }

    //Don't allow two operators consequetively to be entered
    if (operators.includes(displayText.slice(-1)) && operators.includes(char)) {return;}

    //if character is an operator
    if (operators.includes(char)) {
        //if there is already an operator in the display
        if (operatorPresent) {
            //process the result rather than displaying both operators
            calculateResult('operator');
            firstNum = document.querySelector('#display').textContent;
            operatorPresent = true;
        } else {
            firstNum = displayText;
            operatorPresent = true;
        }
        resultPresent = false;
    }
    //if there is a result and we type a new number without an operator, override display
    if (resultPresent) {deleteAll();}
    //add character to display
    display.textContent += char;
}

function deleteCharacter() {
    const operators = ['+', 'x', '÷', '-'];
    let display = document.querySelector('#display');
    let newDisplay = display.textContent.split('');

    //if delete an operator (that is not a negative after an operator), set operator present to false
    if(operators.includes(newDisplay.pop()) && !operators.includes(newDisplay.slice(-1))) {
        operatorPresent = false;
    }
    display.textContent = newDisplay.join('');
}

function deleteAll() {
    //reset all global variables to default settings
    firstNum = null;
    secondNum = null;
    operator = null;
    resultPresent = false;
    operatorPresent = false;

    let display = document.querySelector('#display');
    display.textContent = '';
    
}

function handleInput(key) {
    const characters = '0123456789+-*/.'

    //handle keyboard inputs appropriately
    if (key == '*') {
        addCharacter('x');
    } else if (key == '/'){
        addCharacter('÷');
    } else if (characters.includes(key)) {
        addCharacter(key);
    } else if (key === '=') {
        calculateResult('equals');
    } else if (key === 'c') {
        deleteCharacter();
    } else if (key === 'C') {
        deleteAll();
    } else {
        return;
    }
}

function calculateResult(from) {

    //if there is no operator, don't change display
    if (!operatorPresent) {return;}

    let display = document.querySelector('#display');
    //check operator, ignoring leading negative sign
    let operatorMatch = display.textContent.slice(1).match(/[+\-x÷]/);

    //if there is no operator besides leading negative, dont modify display
    if (!operatorMatch) return;

    //get operator
    let operatorIndex = operatorMatch.index + 1; 
    let operator = display.textContent[operatorIndex];

    //get second operand
    let secondOperand = display.textContent.slice(operatorIndex + 1);
    
    //if no second operand, don't modify display
    if (!secondOperand) {return;}

    //save second operand to the global variable
    secondNum = secondOperand;
    operatorPresent = false;

    //calculate result
    let result = operate(operator, firstNum, secondNum);
    let MAX_DISPLAY_VALUE = 9999999999;

    //display appropriate result
    if ((result) > MAX_DISPLAY_VALUE) {
        display.textContent = 'TOO LARGE'
    } else if (typeof(result) === 'string') {
        display.textContent = 'UNDEFINED';
    } else {
        answer = result;
        display.textContent = Number(result.toPrecision(8));
    }

    //if function was called by entering equals rather than a second operator, 
    //then set result present flag to true
    if (from == 'equals') {
        resultPresent = true;
    }
}