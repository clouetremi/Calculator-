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
    return parseFloat(result.toFixed(2)); // Méthode toFixed(x) pour arrondir les décimals au nombre x 
};

// Create the functions that populate the display when you click the digit buttons. 
// You should store the content of the display (the number) in a variable for use in the next step.

const buttons = document.querySelectorAll("button");
const displaySum = document.getElementById("displaySum");
displaySum.innerText = "Faites votre opération, exemple : 3 + 3";
let valueDisplayed = "";


let storeOne = "";
let storeTwo = "";
let isOperatorSelected = false;

buttons.forEach((bouton) => {
    bouton.addEventListener("click", () => {

        const value = bouton.innerText;
        valueDisplayed += value;
        displaySum.innerText = valueDisplayed;
        let justCalculated = false; // Variable pour activer le display de l'opérateur suivant s'il est choisi avant storeOne ou après storeTwo 


        if (value === "=") {
            if (storeOne && storeTwo && isOperatorSelected) {
                if (storeTwo === "0" && operator === "/") {
                    displaySum.innerText = "Division par 0, lol ?";
                    storeOne = "";
                    storeTwo = "";
                    isOperatorSelected = false;
                } else {
                    a = parseFloat(storeOne);
                    b = parseFloat(storeTwo);
                    const result = operate(a, b, operator);
                    console.log(`Le résultat est ${result}`)
                    displaySum.innerText = result;
                }
            } else {
                console.log("Erreur, veuillez refaire votre opération");
                displaySum.innerText = "Erreur, veuillez refaire votre opération";
            }
        } else if (value === "Clear") {
            storeOne = "";
            storeTwo = "";
            isOperatorSelected = false;
            console.log("Reset ok, tout est bien à 0");
            displaySum.innerText = "0";
        } else if (value === "+" || value === "-" || value === "*" || value === "/") {
            // Lance l'opération dans le cas où on choisis un opérateur une deuxième fois au lieu de choisir "="
            if (storeOne && storeTwo && isOperatorSelected) {
                a = parseFloat(storeOne);
                b = parseFloat(storeTwo);
                const result = operate(a, b, operator);
                console.log(`Le résultat est ${result}`)
                displaySum.innerText = result;

                // Réinitialise storeOne avec le résultat pour permettre une nouvelle opération
                storeOne = result.toString();
                storeTwo = "";
                justCalculated = true; // Indique qu'un opération vient d'être effectuée
            }

            // Si une opération vient d'être effectuée, ne met pas à jour l'affichage avec l'opérateur
            if (!justCalculated) {
                displaySum.innerText = value;
            }

            isOperatorSelected = true;
            operator = value;
            console.log(`Operator selected is ${operator}`);
            justCalculated = false;
        } else if (!isOperatorSelected) {
            storeOne += value;
            console.log(`La première valeur selectionnée est ${storeOne}`);
            displaySum.innerText = storeOne;
        } else {
            storeTwo += value;
            console.log(`La seconde valeur selectionnée est ${storeTwo}`);
            displaySum.innerText = storeTwo;

        };
    });
});
