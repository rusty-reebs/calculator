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
    if (operator == "plus") {
        answer = add (num1, num2);
        console.log (add (num1, num2));
    }
    else if (operator == "minus") {
        answer = subtract (num1, num2);
        console.log (subtract (num1, num2));
    }
    else if (operator == "times") {
        answer = multiply (num1, num2);
        console.log (multiply (num1, num2));
    }
    else if (operator == "dividedBy") {
        answer = divide (num1, num2);
        console.log (divide (num1, num2));
    }
    return answer;

    // may need to put displaylower in here
}

// Functions to populate the display

const upperdisplay = document.querySelector(".upperscreen");

function displayNum (userNumber) {
    let newNum = document.createElement("div");
    newNum.classList.add("digit");
    newNum.textContent = userNumber;
    upperdisplay.appendChild(newNum);
}

const lowerdisplay = document.querySelector(".lowerscreen");

// function displayAnswer () {
//     let answer = document.createElement("div");
//     answer.classList.add("digit");
//     answer.textContent = "0";
//     lowerdisplay.appendChild(answer);
// }

// temp lowerdisplay answer

let answer = document.createElement("div");
answer.classList.add("digit");
answer.textContent = "0";
lowerdisplay.appendChild(answer);


// Listeners for keypad buttons

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
plusButton.addEventListener("click", function () {displayNum("+")});

const minusButton = document.getElementById("minus");
minusButton.addEventListener("click", function () {displayNum("-")});

const timesButton = document.getElementById("times");
timesButton.addEventListener("click", function () {displayNum("*")});

const dividedByButton = document.getElementById("divide");
dividedByButton.addEventListener("click", function () {displayNum("/")});

const equalsButton = document.getElementById("equals");
equalsButton.addEventListener("click", function () {displayNum("=")});

