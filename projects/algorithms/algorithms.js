// Source repository: https://github.com/trekhleb/javascript-algorithms

// Factorial

function computeFactorial() {
    let factorialInput = +(prompt("https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/factorial", 
                                  "Enter the factorial"));
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
    let fibonacciInput = +(prompt("https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/fibonacci", 
                                  "Enter the Fibonacci number"));
    let fibonacciOutput = [0, 1];
    let cValue = 1, pValue = 0;

    if (fibonacciInput === 1) return fibonacciOutput;

    for (; fibonacciInput > 1; fibonacciInput--) {
        cValue += pValue;
        pValue = cValue - pValue;

        fibonacciOutput.push(cValue);
    }

    alert("Fibonacci sequence: " + fibonacciOutput);
}

// Prime Factors

// function computePrimeF() {
//     let primeFInput = +(prompt("https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/prime-factors", 
//                                   "Enter the factorial"));
//     let primeFOutput = [];

//     if (primeFInput < 2) primeFOutput.push(0);
// }