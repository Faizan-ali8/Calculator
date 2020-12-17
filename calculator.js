let runningTotal = 0;
let display = "0";
let previousOperator = null;

const screen = document.querySelector('.screen');

function buttonClick(value) {
    if (isNaN(value)) {
        symbolButton(value);

    } else {
        numberButton(value);
    }
    screen.innerText = display;
}

function symbolButton(symbol){

switch (symbol) {
    case 'C':
        display = '0';
        runningTotal = '0';
    break;
    case '=':
        if (previousOperator === null) {
            return;
        }
        clearOperation(parseInt(display));
        previousOperator = null;
        display = runningTotal;
        runningTotal = 0;
        break;
    case '←':
        if (display.length === 1) {
            display = '0';
    }  else {
        display = display.substring(0, display.length - 1);
    }
    break;
    case '+':
    case '˗':
    case '×':
    case '÷': 
        mathButton(symbol);
    break;                  
    }
}   

function mathButton(symbol) {
    if (display === '0') {
        return;
    }
    const intDisplay = parseInt(display);

    if(runningTotal === '0') {
        runningTotal = intDisplay;
    } else {
        clearOperation(intDisplay);
    }

    previousOperator = symbol;

    display = '0';
}

function clearOperation(intDisplay){
    if (previousOperator === '+') {
        runningTotal += intDisplay;
    } else if (previousOperator === '˗') {
        runningTotal -= intDisplay;
    } else if (previousOperator === "×") {
        runningTotal *= intDisplay;
    } else {
        runningTotal /= intDisplay;
    }
}


function numberButton(numberString){
    if (display === "0") {
        display = numberString;
    } else {
        display = display + numberString;
    }
}


function button () {
    document.querySelector('.calc-buttons')
        addEventListener('click', function (event) {
            buttonClick(event.target.innerText);
        })
}

button(); 