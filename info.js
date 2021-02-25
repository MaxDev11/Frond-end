/* Source: javascript.info */




/* PART 1 | JAVASCRIPT FUNDAMENTALS */

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

/* Objects */
// Objects are used to store keyed collections of various data
// and more complex entities.

// In JS, objects penetrate almost every aspect of the language.

// An object can be created with figure brackets { ... }
// with an optional list of properties.
// Ap roperty is a "key: value" pair

// let user = new Object(); "object constructor" syntax
// let user = {}; "object literal" syntax

// let user {
//     name: "John",
//     age: 30,
// };

// Property values accessibility user.name, user.age
// Deletion delete user.age;
// Square brackets user["likes birds"] = true
// Computed properties let name = ..., [name]: 5;
// Property value shorthand
// function makeUser(name, age) {
//     return {
//         name: name,
//         age: age,
//         ...,
//     };
// }
// "In" operator
// let user { name: "JOhn", };
// alert( "name" in user );
// for (key in object) ...

// There are many other kinds of objects in JS
// Array, Date, Error, Plain, etc.



/* Object references and copying */
// Copying, Comparison by reference

// Cloning and merging, Object.assign
// Copying an object var creates one more reference unlike cloning
// let clone = {};
// for (let key in user) {
//     clone[key] = user[key];
// }
// Also we can us the method Object.assign for that
// Objet.assign(dest, [src1, src2, src3...])
// Object.assign(user, permissions1, permission2)



/* Garbage collection */
// Memory management in JS is performed automatically
// and invisibly to us.

// The main comcept of memory management in JS is reachability.
// Simply put, "reachable" values are those that are
// accessible or usable somehow.
// They're guaranteed to be stored in memory.

// Interlinked objects

// The basic garbage collection algorithm is called "mark-and-sweep"
// Some of the optimizations
// General c., Incremental c., Idle-time c.



/* Object methods, "this" */
// Object.method, functions that are stored in object properties.

// When we write our code using obects to represent entities,
// that's called OOP. OOP is a programming paradigm.

// "this" in methods
// to access the object, a method can use the "this" keyword

// "this" is not bound
// In JS unlike most other PL, It can be used in any function, 
// even if it's not a method of an object

// Arrow functions have no "this"



/* Constructor, operator "new" */
// Often we need to create many similar objects,
// that can be done using constructor functions and the "new" operator.

// Construction function
// 1. Named with capital letter first.
// 2. Should be executed only with "new" operator.

// When a function is executed with new:
// 1. New empty object is created nad assigned to "this".
// 2. The function body executes.
// 3. The value of "this" is returned

// Omitting parentheses, let user = new User;
// Methods in constructor



/* Optional chaining '?.' */
// The optional chaining '?.' is a safe way to access nested
// object properties, even if an intermediate property doesn't exist

// Three forms of '?.'
// 1. obj?.prop - returns obj.prop if obj exists. otherwise undefined.
// 2. obj?.[prop] - returns obj[prop] if obj exists, otherwise undefined.
// 3. obj.method?.() - calls obj.method() if obj.method exists,
// otherwise returns undefined



/* Symbol type */
// A "symbol" represents a unique identifier
// let id1 = Symbol("id");
// let id2 = Symbol("id");
// alert(id1 == id2); false

// Symbols don't auto-convert to a string
// symbol.description

// Symbols allow us to create "hidden" properties of an object, 
// that no other part of code can accidentally access or overwrite
// let user = { name: "John" };
// let id = Symbol("id");
// user[id] = 1

// Symbols are skipped by for...in

// Global symbols
// global symbol registry. We can create symbols in it and 
// access them later, and it guarantees that repeated accesses
// by the same name return exactly the same symbol.
// In order to read a symbol from the registry, use Symbol.for(key)
// Symbol,keyFor(sym) does the reverse: returns a name by a global symbol

// System symbols
// Symbol.hasInstance
// Symbol.isConcatSpreadable
// Symbol.iterator
// Symbol.toPrimitive and so on



/* Object to primitive conversion */
// When Objects are obj1 + obj2 or obj1 - obj2 
// or printed using alert(obj), they are auto-converted to primitives,
// and then the operation is carried out.

// 1. All objects are true in a bollean context.
// 2. The numeric conversion happens when we subtract objects or
// apply mathematical functions.
// 3. The string conversions usually happen when we output an object
// like alert(obj)

// Symbol.toPrimitive
// We can fine-tune string and numeric conversion, using speical object methods.
// There are three variants of type conversion, so-called "hints":
// 1. "string", for an object-to-string conversion, when we're doing an operation on an
// objet that expects a string, like alert.
// 2. "number", for an object-to-number conversion, like when we're doing maths
// 3. "default", occurs in rare cases when the operator is "not sure"
// what type to expect.

// Further conversions

// The conversions algorithm is:
// 1. Call obj[Symbol.toPrimitive](hint) if the method exists,
// 2. Otherwise if hint is "string"
//  try obj.toString() and obj.valueOf(), whatever exists.
// 3. Otherwise if hint is "number" or "default"
//  try obj.valueOf() and obj.toString(), whatever exists.




/* DATA TYPES */
/* ADVANCED WORKING WITH FUNCTIONS */
/* OBJECT PROPERTIES CONFIGURATION */
/* PROTOTYPES, INHERITANCE */
/* CLASSES */
/* ERROR HANDLING */
/* PROMISES, ASYNC/AWAIT */
/* GENERATORS, ADVANCED ITERATION */
/* MODULES */
/* MISCELLANEOUS */




/* PART 2 | BROWSER: DOCUMENT, EVENTS, INTERFACES */
/* PART 3 | ADDITIONAL ARTICLES */




/* Practice */