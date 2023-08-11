
function add(a, b) {return a+b};

function sub(a, b) {return a-b};

function mul(a, b) {return a*b};

function div(a, b) {return a/b};

let numA;
let numB;
let operator;

function operate(operator, numA, numB) {

    switch(operator){
        case "+":
            return add(numA, numB);
        case "-":
            return sub(numA, numB);
        case "*":
            return mul(numA, numB);
        case "/":
            return div(numA, numB);
    }
}