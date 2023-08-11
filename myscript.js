const ACCEPTED_OPERATORS = ["(", ")", "+", "-", "*", "/", "^"];
const ACCEPTED_CHAR = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const ACCEPTED_ACTIONS = ["=", "C", "DEL"];


function add(a, b) {return a+b};

function sub(a, b) {return a-b};

function mul(a, b) {return a*b};

function div(a, b) {return a/b};

function pow(a, b) {return Math.pow(a, b)};

let numA;
let numB;
let operator;

function operate(operator, numA, numB) {

    switch(operator){
        case "+":
            return add(numA * 1, numB * 1); // * 1 to convert to string... may not work as intended...
        case "-":
            return sub(numA * 1, numB * 1);
        case "*":
            return mul(numA * 1, numB * 1);
        case "/":
            return div(numA * 1, numB * 1);
        case "^":
            return pow(numA * 1, numB * 1);
    }
}

function evalExpression(expression)
{


    


}

let inputString = "";
let screenText = document.querySelector('.screen');
const buttons = document.querySelectorAll('.button');
console.log(buttons);
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        inputString = inputString.concat(String(button.innerHTML));

        // check for operation
        
        screenText.textContent = inputString;
    });
});




