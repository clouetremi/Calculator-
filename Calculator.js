// add
const addition = function (a, b) {
    return a + b;
};
console.log(addition(5, 6));

// subtract
const subtract = function (a, b) {
    return a - b;
};
console.log(subtract(10, 15));
// multiply
const multiply = function (a, b) {
    return a * b;
};
console.log(multiply(10, 10));

// divide
const divide = function (a, b) {
    return a / b;
};
console.log(divide(15, 5));

// A calculator operation will consist of a number, an operator, and another number. 
// For example, 3 + 5. Create three variables, one for each part of the operation. 
// You’ll use these variables to update your display later.

let a = 15;
let b = 15;
let operator = "";

function operate(a, b, operator) {
    switch (operator) {
        case "+":
            result = addition(a, b);
            break;
        case "-":
            result = subtract(a, b);
            break;
        case "*":
            result = multiply(a, b);
            break;
        case "/":
            result = divide(a, b);
        default: console.log("Opérateur non valide")
    }
    return result;
};

// Create the functions that populate the display when you click the digit buttons. 
// You should store the content of the display (the number) in a variable for use in the next step.

const buttons = document.querySelectorAll("button");
let storeOne = "";
let storeTwo = "";
let isOperatorSelected = false; // Pour savoir si un opérateur a été choisi

buttons.forEach((bouton) => {
    bouton.addEventListener("click", () => {

        const value = bouton.innerText;

        if (value === "+" || value === "-" || value === "*" || value === "/") {
            operator = value;
            isOperatorSelected = true;
            console.log(`Opérateur choisi ${operator}`)
        } else if (value === "=") {
            if (storeOne && storeTwo && isOperatorSelected) {
                a = parseFloat(storeOne);
                b = parseFloat(storeTwo);
                result = operate(a, b, operator);
                console.log(`Result is ${result}`);
            }
            else {
                console.log("Opérateur invalide !")
            }
        } else {
            if (!isOperatorSelected){
                storeOne += value; 
                console.log(`StoreOne : ${storeOne}`)
            } else {
                storeTwo += value; 
                console.log(`StoreTwo : ${storeTwo}`)
            }
        }
    });
});