// NodeJS (prompt-sync)
// Source repositories:
// https://github.com/trekhleb/javascript-algorithms
// https://github.com/egonschiele/grokking_algorithms



/* GROKKING ALGORITHMS */
// Chapter 1
// Binary search, simple search (Algorithms)
// Big O notation (Tells you how fast an algorithm is)
// Salespersion problem (Finding a minimum distance between n cities)



/* ALGORITHMS */
const prompt = require('prompt-sync')();
const show = (o) => console.log(o);
const range = (start, stop, step) =>
    Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step));

/* MATH ALGORITHMS */
// const computeFactorial = () => {
//     let factorialInput = +(d.querySelector("#factorial").value);
//     let factorialOutput = 1;
//     let facOutput = d.querySelector("#fac_output");

//     for (let i = 2; i <= factorialInput; i++) {
//         factorialOutput *= i;
//     }

//     facOutput.innerText = "!" + factorialInput.toString() + " = " + factorialOutput.toString();
// };

// const computeFibonacci = () => {
//     let fibonacciInput = +(d.querySelector("#fibonacci").value);
//     let fibOutput = d.querySelector("#fib_output");
//     let fibonacciOutput = [0, 1];
//     let cValue = 1, pValue = 0;

//     if (fibonacciInput === 1) return fibonacciOutput;

//     for (; fibonacciInput > 1; fibonacciInput--) {
//         cValue += pValue;
//         pValue = cValue - pValue;

//         fibonacciOutput.push(cValue);
//     }

//     fibOutput.innerText = "Fibonacci sequence: " + fibonacciOutput.toString();
// };

// const computePrimeF = () => {
//     let primeFInput = +(d.querySelector("#primef"));
//     let primeFOutput = [];
//     if (primeFInput < 2) primeFOutput.push(0);

// };

/* SEARCH ALGORITHMS */
// O(n) - linear time
function simpleSearch(arr, item) {
    let guess = 0;
    for (; guess < arr.length; guess++) {
        if (arr[guess] === item) return guess + 1;
    }
    return "Incorrect value!";
}

// O(log n) - logarithmic time
function binarySearch(list, item) {
    let low = 0;
    let high = list.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = list[mid];

        if (guess === item) {
            return mid;
        }
        if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return "Incorrect value!";
}