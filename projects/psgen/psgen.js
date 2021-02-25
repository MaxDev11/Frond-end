// Node js (prompt-sync)

const prompt = require('prompt-sync')();

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lowerLetters = "abcdefghijklmnopqrstuvwxyz",
      numbers = "0123456789",
      symbols = "!@#$%^&*()_=+";

const getUpperCase = () => upperLetters[Math.floor(Math.random() * upperLetters.length)],
      getLowerCase = () => lowerLetters[Math.floor(Math.random() * lowerLetters.length)],
      getNumbers = () => numbers[Math.floor(Math.random() * numbers.length)],
      getSymbols = () => symbols[Math.floor(Math.random() * symbols.length)];

console.log('Welcome to password generator!!!');
const char = +(prompt('How many characters? ')),
      ul = prompt('UPPER letters? (Y/N) '),
      ll = prompt('lower letters? (Y/N) '),
      n = prompt('Mb some numbers? (Y/N) '),
      s = prompt('What about symbols? (Y/N) ');

const generateArray = () => {
    const arr = [];

    if (ul == "Y") arr.push(getUpperCase());
    if (ll == "Y") arr.push(getLowerCase());
    if (n == "Y") arr.push(getNumbers());
    if (s == "Y") arr.push(getSymbols());

    return arr[Math.floor(Math.random() * arr.length)];
};

const generatePassword = () => {
    let password = '';

    for (let i = 0; i < char; i++) {
        let arr = generateArray();
        password += arr
    }
    
    console.log(password);
};

generatePassword();