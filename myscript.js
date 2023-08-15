const ACCEPTED_OPERATORS = ["(", ")", "+", "-", "x", "/", "^"];
const ACCEPTED_CHAR = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const ACCEPTED_ACTIONS = ["=", "C", "DEL"];

function add(a, b) {return a+b};

function sub(a, b) {return a-b};

function mul(a, b) {return a*b};

function div(a, b) {return a/b};

function pow(a, b) {return Math.pow(a, b)};

let operator = "";

function operate(operator, numA, numB) {

    switch(operator){
        case "+":
            return add(numA * 1, numB * 1); // * 1 to convert to string... may not work as intended...
        case "-":
            return sub(numA * 1, numB * 1);
        case "x":
            return mul(numA * 1, numB * 1);
        case "/":
            return div(numA * 1, numB * 1);
        case "^":
            return pow(numA * 1, numB * 1);
    }
}
let havePreviousVal = false;
let valPrev = 0
let valCurr = 0

let screenText = document.querySelector('.screenCurr');
let prevScreenText = document.querySelector('.screenPrev');
const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {

        input = String(button.innerHTML);
        if(ACCEPTED_ACTIONS.includes(input)){
            switch(input){
                case "=":
                    if(operator != "" && havePreviousVal){
                        if(valCurr == 0 && operator == "/")
                        {
                            valCurr = 0;
                            screenText.textContent = "good try ;)";
                            operator = "";
                            prevScreenText.textContent = "";
                            
                        }else{
                            prevScreenText.textContent = `${prevScreenText.textContent} ${valCurr} =`;
                            valCurr = operate(operator, Number(valPrev), Number(valCurr));
                            screenText.textContent = String(valCurr);
                            operator = "";
                            
                        }
                        valPrev = 0;
                        havePreviousVal = false;
                    }
                    
                    break;
                case "DEL":
                    if (valCurr.toString().length < 2) {
                        valCurr = 0;
                        prevScreenText.textContent = "";

                    }else{

                        input = screenText.textContent.substring(0,screenText.textContent.length-1);
                        console.log(input);
                        valCurr = parseInt(input);
                    }
                    screenText.textContent = String(valCurr);
                    break;
                case "C":
                    input = "0";
                    valCurr = 0;
                    valPrev = 0;
                    havePrevious = false;
                    operator = "";
                    prevScreenText.textContent = "";
                    screenText.textContent = String(valCurr);
                    break;
            }
        

        }else if(ACCEPTED_CHAR.includes(input)){

            if(operator != "" && havePreviousVal == false)
            {
                valPrev = valCurr;
                screenText.textContent = `${input}`;
                valCurr = parseFloat(`${screenText.textContent}`);
                havePreviousVal = true;
                prevScreenText.textContent = `${valPrev} ${operator}`;
            }else{
                if(!Number.isInteger(Number(screenText.textContent)) || screenText.textContent == "0" || screenText.textContent == "good try ;)")
                {
                    screenText.textContent = "";
                }

                screenText.textContent = `${screenText.textContent}${input}`;
                valCurr = parseFloat(`${screenText.textContent}`);
            }

        }else if (input == "."){
            console.log(valCurr);
            if(!screenText.textContent.includes("."))
            {
                screenText.textContent = `${screenText.textContent}${input}`;
                valCurr = parseFloat(`${screenText.textContent}`);
            }

        }else if(ACCEPTED_OPERATORS.includes(input)){

            operator = String(input);
            console.log(operator);
        }
        
    });
});

