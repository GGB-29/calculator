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
    display.textContent += char;
}

function deleteCharacter() {
    let display = document.querySelector('#display');
    let newDisplay = display.textContent.split('');
    newDisplay[newDisplay.length - 1] = '';
    display.textContent = newDisplay.join('');
}