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
let operator = "-";

function operate(a, b, operator){
    if (operator === "+"){
        return addition(a, b)
    } else if (operator === "-"){
        return subtract(a, b)
    } else if (operator === "*"){
        return multiply(a, b)
    } else if (operator === "/"){
        return divide(a, b);
    };
};

console.log(`Le résultat est de ${operate(a, b, operator)}`)