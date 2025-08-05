/*
File containing code to add event listeners 
to each of the buttons on the calculator 
allowing users to input data.
*/

function addAllEventListeners() {
    addDigitEventListeners();
    addClearEventListeners();
    addOperatorEventListeners();
    addEqualsEventListener();
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
        calculateResult();
    })
}

addAllEventListeners();