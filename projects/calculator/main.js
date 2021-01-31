// let a = 0, b = 0;

let chooseOP = prompt ("Choose the operation (+, -, *, /, %, sqr, sqrt)");
let a = Number(prompt("Enter the fucking first value"));
let b = Number  (prompt("Enter the fucking second value"));

let addVal = (a, b) => a + b;
let subVal = (a, b) => a - b;
let mulVal = (a, b) => a * b;
let divVal = (a, b) => a / b;
let renVal = (a, b) => a % b;
let sqrVal = (a) => Math.pow(a, 2);
let sqrtVal = (a) => Math.sqrt(a);

// let startGroup;
// let endGroup; 
// let cleanVal;
// let undoStep;
// let equalVal;

switch(chooseOP) {
    case "+": 
        alert(addVal(a, b));
        break;
    case "-": 
        alert(subVal(a, b));
        break;
    case "*": 
        alert(mulVal(a, b));
        break;
    case "/": 
        alert(divVal(a, b));
        break;
    case "%": 
        alert(renVal(a, b));
        break;
    case "sqr": 
        alert(sqrVal(a));
        break;
    case "sqrt": 
        alert(sqrtVal(a));
        break;
    default:
        alert("Wrong values");
}