// add
const addition = function (a, b) {
    return a + b;
};

// subtract
const subtract = function (a, b) {
    return a - b;
};

// multiply
const multiply = function (a, b) {
    return a * b;
};

// divide
const divide = function (a, b) {
    return a / b;
};

// A calculator operation will consist of a number, an operator, and another number. 
// For example, 3 + 5. Create three variables, one for each part of the operation. 
// You’ll use these variables to update your display later.

let a = "";
let b = "";
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
            break;
        default: "OOPS"
    };
    return result;
};

// Create the functions that populate the display when you click the digit buttons. 
// You should store the content of the display (the number) in a variable for use in the next step.

const displaySum = document.getElementById("displaySum");
displaySum.innerText = "Faites votre opération, exemple : 3 + 3";

const buttons = document.querySelectorAll("button");

buttons.forEach((bouton) => {
    bouton.addEventListener("click", () => {

        const value = bouton.innerText;
        let valueDisplayed = "";
        valueDisplayed += value;
        displaySum.innerText = valueDisplayed;


    });
});



// Créer une varialbe pour sélectionner le bouton afin de l'appeler avec un eventListener
// const buttons = document.querySelectorAll("button");
// let storeOne = "";
// let storeTwo = "";
// let isOperatorSelected = false;
// let isSecondOperatorSelected = false;


// buttons.forEach((bouton) => {
//     bouton.addEventListener("click", () => {

//         const value = bouton.innerText;

//         if (value === "=") {
//             if (storeOne && storeTwo && isOperatorSelected) {
//                 a = parseFloat(storeOne);
//                 b = parseFloat(storeTwo);
//                 const result = operate(a, b, operator);
//                 console.log(`Le résultat est ${result}`)
//             } else {
//                 console.log("Erreur, veuillez refaire votre opération")
//             }
//         } else if (value === "Clear") {
//             storeOne = "";
//             storeTwo = "";
//             isOperatorSelected = false;
//             console.log("Reset ok, tout est bien à 0")
//         } else if (value === "+" || value === "-" || value === "*" || value === "/") {
//             isOperatorSelected = true;
//             operator = value;
//             console.log(`Operator selected is ${operator}`)
//         } else if (!isOperatorSelected) {
//             storeOne += value;
//             console.log(`La première valeur selectionnée est ${storeOne}`)
//         } else {
//             storeTwo += value;
//             console.log(`La seconde valeur selectionnée est ${storeTwo}`)
//         }
//     })
// })

