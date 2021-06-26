// Basic math functions

// Add function
let add = (num1, num2) => num1 + num2;

// Subtract function
let subtract = (num1, num2) => num1 - num2;

// Multiply function
let multiply = (num1, num2) => num1 * num2;

// Divide function
let divide = (num1, num2) => num1 / num2;

// Main operate function

function operate (operator, num1, num2) {
    let answer;
    if (operator == "+") {
        answer = add (num1, num2);
        console.log (add (num1, num2));
    }
    else if (operator == "-") {
        answer = subtract (num1, num2);
        console.log (subtract (num1, num2));
    }
    else if (operator == "*") {
        answer = multiply (num1, num2);
        console.log (multiply (num1, num2));
    }
    else if (operator == "/") {
        answer = divide (num1, num2);
        console.log (divide (num1, num2));
    }
    
    let answerToDisplay = document.createElement("div");
    answerToDisplay.textContent = answer;
    lowerdisplay.appendChild(answerToDisplay);
};
// return answer;
// }

// Functions to populate the display

const upperdisplay = document.querySelector(".upperscreen");
const lowerdisplay = document.querySelector(".lowerscreen");
let displayFirstNumArray = [];
let displaySecondNumArray = [];
let operator = "";
let firstNum;
let secondNum;
// let firstNumber = displayFirstNumArray.join("");  //! Why is this not working?
// let secondNumber = displaySecondNumArray.join(""); //! Why is this not working?

// Display the numbers and build arrays

function displayNum (userNumber) {
    let newNum = document.createElement("div");
    newNum.textContent = userNumber;
    upperdisplay.appendChild(newNum);
    if (operator == "") {
        displayFirstNumArray.push(userNumber)};
        if (operator !== "") {
            displaySecondNumArray.push(userNumber)};
    let firstNumber = displayFirstNumArray.join("");
    let secondNumber = displaySecondNumArray.join("");
    firstNumber = parseInt(firstNumber);
    secondNumber= parseInt(secondNumber);
    firstNum = firstNumber;
    secondNum = secondNumber;    
    console.log (displayFirstNumArray);
    console.log (displaySecondNumArray);
    console.log (firstNumber);
    console.log (secondNumber);
}

// Display the operator, not included in arrays

function displayOperator (mathSign) {
    let newOperator = document.createElement("div");
    newOperator.textContent = mathSign;
    upperdisplay.appendChild(newOperator);
    operator = mathSign;
            
}
// TODO finish AC button, not working correctly

function allClear () {
    displayFirstNumArray = [];
    displaySecondNumArray = [];
    firstNum = 0;
    secondNum = 0;
    operator = "";
    while (upperdisplay.hasChildNodes()) {
        upperdisplay.removeChild(upperdisplay.firstChild);
    }    
    while (lowerdisplay.hasChildNodes()) {
        lowerdisplay.removeChild(lowerdisplay.firstChild);
    }
    
}


// Listeners for calculator buttons

const zeroButton = document.getElementById("zero");
zeroButton.addEventListener("click", function () {displayNum(0)});

const oneButton = document.getElementById("one");
oneButton.addEventListener("click", function () {displayNum(1)});

const twoButton = document.getElementById("two");
twoButton.addEventListener("click", function () {displayNum(2)});

const threeButton = document.getElementById("three");
threeButton.addEventListener("click", function () {displayNum(3)});

const fourButton = document.getElementById("four");
fourButton.addEventListener("click", function () {displayNum(4)});

const fiveButton = document.getElementById("five");
fiveButton.addEventListener("click", function () {displayNum(5)});

const sixButton = document.getElementById("six");
sixButton.addEventListener("click", function () {displayNum(6)});

const sevenButton = document.getElementById("seven");
sevenButton.addEventListener("click", function () {displayNum(7)});

const eightButton = document.getElementById("eight");
eightButton.addEventListener("click", function () {displayNum(8)});

const nineButton = document.getElementById("nine");
nineButton.addEventListener("click", function () {displayNum(9)});

const plusButton = document.getElementById("plus");
plusButton.addEventListener("click", function () {displayOperator("+")});

const minusButton = document.getElementById("minus");
minusButton.addEventListener("click", function () {displayOperator("-")});

const timesButton = document.getElementById("times");
timesButton.addEventListener("click", function () {displayOperator("*")});

const dividedByButton = document.getElementById("divide");
dividedByButton.addEventListener("click", function () {displayOperator("/")});

const equalsButton = document.getElementById("equals");
equalsButton.addEventListener("click", function () {operate (operator, firstNum, secondNum)});

const allClearButton = document.getElementById("clear");
allClearButton.addEventListener("click", function () {allClear ()});

