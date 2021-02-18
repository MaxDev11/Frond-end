// Factorial

function computeFactorial() {
    let factorialInput = +(prompt("Enter the factorial"));
    let factorialOutput = 1;

    for (let i = 2; i <= factorialInput; i++) {
        factorialOutput *= i;
    }
    
    alert("!" + factorialInput + " = " + factorialOutput.toString());
}

// Factorial (Recursive function)

// function computeFactorialR(factorialInput) {
//     return factorialInput > 1 ? 
//         factorialInput * computeFactorialR(factorialInput - 1) : 
//         1;
// }

// Fibonacci

function computeFibonacci() {
    let fibonacciInput = +(prompt("Enter the fibonacci"));
    let fibonacciOutput = [];

    for (let i = 0; i < fibonacciInput; i++) {
        fibonacciOutput[i];
        console.log(fibonacciOutput[i]);
    }
    
    alert("Look in the console");
}
