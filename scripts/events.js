/*
File containing code to add event listeners 
to each of the buttons on the calculator 
allowing users to input data.
*/

function addAllEventListeners() {
    addDigitEventListeners();
    addClearEventListeners();
    addClearAllEventListeners();
    addOperatorEventListeners();
    addEqualsEventListener();
    addKeyboardEventListeners();
}

function addKeyboardEventListeners() {
    document.addEventListener('keydown', (event) => {
        const allowedKeys = '0123456789+-*/.=EnterBackspaceCc';
        const key = event.key;

        if (!allowedKeys.includes(key)) return;

        let inputKey = key;
        //map enter and backspace to equals and delete character respectively
        if (key === 'Enter') inputKey = '=';
        if (key === 'Backspace') inputKey = 'c';

        handleInput(inputKey);
    });
}

function addDigitEventListeners() {
    let digitButtons = document.querySelectorAll('.digit');
    digitButtons.forEach( (button) => {
        button.addEventListener('click', () => {
            addCharacter(button.textContent)
        })
    });
}

function addClearEventListeners() {
    let clearButton = document.querySelector('#clear');
    clearButton.addEventListener('click', () => {
        deleteCharacter();
    });
}

function addClearAllEventListeners() {
    let clearButton = document.querySelector('#clear-all');
    clearButton.addEventListener('click', () => {
        deleteAll();
    });
}

function addOperatorEventListeners() {
    let operatorButtons = document.querySelectorAll('.operator');
    operatorButtons.forEach( (button) => {
        button.addEventListener('click', () => {
            addCharacter(button.textContent)
        })
    });
}

function addEqualsEventListener() {
    let equalsButton = document.querySelector('#equals');
    equalsButton.addEventListener('click', () => {
        calculateResult('equals');
    })
}

addAllEventListeners();