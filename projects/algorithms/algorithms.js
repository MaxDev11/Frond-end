// Source repository: https://github.com/trekhleb/javascript-algorithms

// Factorial

let computeFactorial = () => {
    let factorialInput = +(document.querySelector("#factorial").value);
    let factorialOutput = 1;
    let facOutput = document.querySelector("#fac_output");

    for (let i = 2; i <= factorialInput; i++) {
        factorialOutput *= i;
    }
    
    facOutput.innerText = "!" + factorialInput.toString() + " = " + factorialOutput.toString();
}

// Fibonacci

let computeFibonacci = () => {
    let fibonacciInput = +(document.querySelector("#fibonacci").value);
    let fibOutput = document.querySelector("#fib_output");
    let fibonacciOutput = [0, 1];
    let cValue = 1, pValue = 0;

    if (fibonacciInput === 1) return fibonacciOutput;

    for (; fibonacciInput > 1; fibonacciInput--) {
        cValue += pValue;
        pValue = cValue - pValue;

        fibonacciOutput.push(cValue);
    }

    fibOutput.innerText = "Fibonacci sequence: " + fibonacciOutput.toString();
}

// Prime Factors

// function computePrimeF() {
//     let primeFInput = +(prompt("https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/prime-factors", 
//                                   "Enter the factorial"));
//     let primeFOutput = [];

//     if (primeFInput < 2) primeFOutput.push(0);
// }