const output = (o) => console.log(o);


/* FIRST CARDIO SESSION (Traversy media JS cardio sessions) */


function reverseString(str) {
    // 1. str.split('').reverse().join('');
    return str.split('').reduce((acc, x) => [x, ...acc], []);
}

function isPalindrome(str) {
    return str.split('').reverse().join('') === str ? 
           output('true') : output('false');
}

function reverseInt(int) {
    const s = int.toString().split('').reverse().join('');
    return parseInt(s) * Math.sign(int);
}

function capitalizeLetters(str) {
    return str.toLowerCase()
              .split(' ')
              .map((e) => e[0].toUpperCase() 
                        + e.substring(1))
              .join(' ');    
}

function commonChar(str) {
    let chMap = {},
          maxN = 0, maxCh = '';

    str.split('').map((ch) => chMap[ch] ? chMap[ch]++ : chMap[ch] = 1);

    for (let ch in chMap) {
        if (chMap[ch] > maxN) {
            maxN = chMap[ch];
            maxCh = ch;
        }
    }

    return maxCh;
}

function flatten2D(arr) {
    return arr.map((e) => e.join('')).join('').split('');
}

function flattenINF(arr) {
    return arr.map((e) => e.flat()).join(',').split(',');
}

function fizzBuzz(arr) {
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] % 15 === 0) arr[i] = 'FizzBuzz';
        if (arr[i] % 3 === 0) arr[i] = 'Fizz'; 
        if (arr[i] % 5 === 0) arr[i] = 'Buzz';
    }
}


/* SECOND CARDIO SESSION (Traversy media JS cardio sessions) */
