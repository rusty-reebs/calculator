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
}



