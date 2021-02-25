// Source repository: https://github.com/trekhleb/javascript-algorithms

const d = document;

// Factorial

let computeFactorial = () => {
    let factorialInput = +(d.querySelector("#factorial").value);
    let factorialOutput = 1;
    let facOutput = d.querySelector("#fac_output");

    for (let i = 2; i <= factorialInput; i++) {
        factorialOutput *= i;
    }
    
    facOutput.innerText = "!" + factorialInput.toString() + " = " + factorialOutput.toString();
}

// Fibonacci

let computeFibonacci = () => {
    let fibonacciInput = +(d.querySelector("#fibonacci").value);
    let fibOutput = d.querySelector("#fib_output");
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

function computePrimeF() {
    let primeFInput = +(d.querySelector("#primef"));
    let primeFOutput = [];

    if (primeFInput < 2) primeFOutput.push(0);

    
}