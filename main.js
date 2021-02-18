/* Resource: javascript.info */




/* JAVASCRIPT FUNDAMENTALS */

/* Code Structure */
// Statements, Semicolons, Comments
// alert("Hello, world!");



/* "use strict" */



/* Variables */
// let reservedNames;
// var camelCase;
// const caseMatters;
// const UPPERCASE_CONSTANT;



/* Data Types */
// Number | 12345, Infinity, -Infinity, NaN
// BigInt | values larger than (2^53-1) or less than -(2^53-1)
// String | "" '' ``(extended func quotes, ${})
// Boolean | true false
// Null | reference to a non-existing object
// Undefined | value is not assigend
// Object | is a special type
// Symbol | used to create unique identifiers for objects

// typeof operator
// null returns "object" - is an error in the language



/* Interaction: alert, prompt, confirm */
// alert - shows a message
// alert("yoooo");
// prompt - shows a text message and input field
// prompt("Waaasup");
// confirm - shows a question with two buttons 
// confirm("HOWAREYA?");



/* Type Conversions */
// String(value);
// Number(str);
// Boolean(1);



/* Basic operators, math */
// operand - is what operators are applied to.
// operator - is unary if it has a single operand
// x = -x;
//          - is binary if it has two operands
// v = y - x;

// Maths + - * / %(remainder) **(exponentiation)
// String concatenation with binary +
// Numeric conversion, unary +
// Assignment = returns a value like all operators in JS
// Chaining assignments a = b = c = 2+2
// Modify-in-place n+=5 n*=5
// Increment++/decrement-- - numerical operations
// Comma operator ,

// Bitwise operators &(AND) |(OR) ^(XOR) ~(NOT) 
// <<(LEFTSHIFT) >>(RIGHTSHIFT) >>>(ZEROFILLRIGHTSHIFT)



/* Comparisons */
// > < >= <= == === != 



/* Conditional branching: if, '?' */
// if (cond) ...
// if (cond) {
//     ...
// } else {}

// Conditional operator | condition ? value1 : value2;
// Multiple ? | cond1 ? value1 : cond2 ? value2 : value3;



/* Logical operators */
// ||(OR) &&(AND) !(NOT) ??(Nullish Coalescing) 



/* Nullish coalescing operator '??' */
// a ?? b is a if defined and b if a is not defined



/* Loops: while and for */
// while (condition) { ... }
// do { ... } while (cond)
// for (begin; condition' step) { ... }
// Breaking the loop (break)
// Continue to the tnext iteration (continue)



/* The 'switch' statement */
// switch(x) {
//     case 'value1':
//         ...
//         [break]
//     case 'value2':
//         ...
//         [break]
//     default:
//         ...
//         [break]
// }



/* Functions */
// Function delcaration
// function showMessage(parameters) { ... }
// showMessage();

// Function expressions
// let sayHi = function() { ... };

// Arrow functions
// let func = (arg1, agr2, ...) => ...
// let func = (arg1, arg2, ...) => {
//     ...
// }

// Callback functions function(otherFunc)

// Local variables, Outer variables, Defautl values
// One function = one action, no more

// Function Declarations are processed before the code block is executed.
// Function Expressions are created when the execution flow reaches them.



/* JavaScript specials */
// Statements are delimited with a semicolon: alert('Hello');
// Semicolons are not required after code blocks { ... }
// To fully enable all features of modern JS, we should start scripts with "use strict".
// Variables are dynamically typed. They can store any value

// Interaction functions are all modal, they pause the code execution 
// and prevent the visitor from interacting until they answer




/* CODE QUALITY */
/* Debugging in browser's console */
// Console.log(...);



/* Syntax */
/* Comments */
/* Ninja code */



/* Automated testing with Mocha */
// Behavior Driven Development (BDD)
// BDD is tests AND documentation AND examples
// Libraries for tests: Mocha, Chai, Sinon



/* Polyfills and Transpilers */
// Transpiler is a special piece of software that can parse
// modern code, and rewrite it using older syntax

// Polyfills is a script that updates/adds new functions
// It "fills in" the gap and adds missimg implemenatations




/* OBJECTS: THE BASICS */
