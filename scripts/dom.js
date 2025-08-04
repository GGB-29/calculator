/*
File containing code to modify the DOM 
during use of the calculator.
*/



function addCharacter(char) {
    let display = document.querySelector('#display');
    display.textContent += char;
}

function deleteCharacter() {
    let display = document.querySelector('#display');
    let newDisplay = display.textContent.split('');
    newDisplay[newDisplay.length - 1] = '';
    display.textContent = newDisplay.join('');
}