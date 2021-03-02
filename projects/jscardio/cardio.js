const output = (o) => console.log(o);


/* FIRST CARDIO SESSION (Traversy media JS cardio sessions) */


const reverseString = (s) => s.split('')
                              .reduce((acc, x) => [x, ...acc], []);

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

function fizzBuzz(a) {
    a.map((e) => {
        return e % 15 === 0 ? 'FizzBuzz' :
               e % 3 === 0 ? 'Fizz' :
               e % 5 === 0 ? 'Buzz' : e;
    });
}


/* SECOND CARDIO SESSION (Traversy media JS cardio sessions) */


function longestWord(s) {
    const words = s.toLowerCase().match(/[a-z0-9]+/g);
    const sorted = words.sort((a, b) => b.length - a.length);
    const longestWord = sorted.filter((word) => {
        return word.length === sorted[0].length;
    });

    return longestWord.length === 1 ? longestWord[0] : longestWord;
}

// ex chunkArray([1, 2, 3, 4, 5, 6], 2) === [[1, 2, 3], [4, 5, 6]]
function chunkArray(arr, len) {
    const chunkedArr = [];
    let i = 0;
    while (i < arr.length) {
        chunkedArr.push(arr.slice(i, i + len));
        i += len;
    }

    return chunkedArr;
}

const flatten2D = (a) => a.map((e) => e.join(''))
                          .join('').split('');

const flattenINF = (a) => a.map((e) => e.flat())
                           .join(',').split(',');
                    
function isAnagram(s1, s2) {
    return formatStr(s1) === formatStr(s2);
}
function formatStr(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('')
              .sort().join('');
}

function letterChanges(s) {
    let newStr = s.replace(/[a-z]/gi, (ch) => {
        if (ch === 'z' || ch === 'Z') {
            return 'a';
        } else {
            return String.fromCharCode(ch.charCodeAt() + 1);
        }
    });

    newStr = newStr.replace(/a|e|i|o|u/gi, (vow) => {
        return vow.toUpperCase();
    });

    return newStr;
}