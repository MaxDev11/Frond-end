const show = (o) => console.log(o);


/* FIRST CARDIO SESSION (Traversy media JS cardio sessions) */


// Task 1
const reverseStr = (s) => s.toString().split('')
                           .reduce((acc, x) => [x, ...acc], []).join('');

// Task 2
const isPalindrome = (s) => reverseStr(s) === s;

// Task 3
const reverseInt = (i) => parseInt(reverseStr(i)) * Math.sign(i);

// Task 4
const capLetters = (s) => s.toLowerCase().split(' ')
                           .map((e) => e[0].toUpperCase() 
                                     + e.substring(1)).join(' ');  

// Task 5
const commonChar = (s) => {
    let cMap = {},
        maxN = 0, 
        maxC = '';

    s.split('')
     .map((c) => cMap[c] ? cMap[c]++ : cMap[c] = 1);

    for (let c in cMap) {
        if (cMap[c] > maxN) {
            maxN = cMap[c];
            maxC = c;
        }
    }

    return maxC;
};

// Task 6
const fizzBuzz = (a) => {
    a.map((e) => {
        return e % 15 === 0 ? 'FizzBuzz' :
               e % 3 === 0 ? 'Fizz' :
               e % 5 === 0 ? 'Buzz' : e;
    });
}


/* SECOND CARDIO SESSION (Traversy media JS cardio sessions) */


// Task 1
const matchWords = (w) => w.toLowerCase().match(/[a-z0-9]+/g);
const sortWords = (w) => matchWords(w).sort((a, b) => b.length - a.length);
const filterWords = (w) => w.filter((e) => e.length === w[0].length);

const longestWord = (s) => filterWords(sortWords(s)).join(', ');

// Task2
const chunkArray = (a, l) => {
    let chunked = [];
    
    for (let i = 0; i < a.length; i += l) {
        chunked.push(a.slice(i, i + l));
    }

    return chunked;
}

// Task 3
const flattenArray = (a) => a.map((e) => e.flat()).join(',').split(',');
                  
// Task 4
const formatS = (s) => s.replace(/[^\w]/g, '').toLowerCase()
                        .split('').sort().join('');

const isAnagram = (s1, s2) => formatS(s1) === formatS(s2);

// Task 5
const checkLastCh = (c) => c === 'z' || c === 'Z' ? 'a' 
                            : String.fromCharCode(c.charCodeAt() + 1);
const replaceLetters = (s) => s.replace(/[a-z]/gi, (c) => checkLastCh(c));
const vowsToUpperCase = (s) => s.replace(/a|e|i|o|u/gi, (v) => v.toUpperCase());

const letterChanges = (s) => vowsToUpperCase(replaceLetters(s));


/* THIRD CARDIO SESSION (Traversy media JS cardio sessions) */


// Task 1
const addAllP = (...n) => n.reduce((acc, cur) => acc + cur, 0);

// Task 2
const checkPrime = (i) => {
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            return false;
        }
    }    
    return true;
};
const sumAllPrimes = (n) => {
    let sum = 0;

    for (let i = 2; i < n; i++) {
        if (checkPrime(i)) {
            sum += i;
        }
    }
    return sum;
};

// Task 3
const seekAndDestroy = (arr, ...rest) => arr.filter(v => !rest.includes(v));

// Task 4
const sortByHeight = (a) => {
    const a1 = [], a2 = [];
    
    a.forEach((v, i) => v === -1 ? a1.push(i) : a2.push(v));
    const sortA = a2.sort((a, b) => a - b);
    a1.forEach((val, i) => sortA.splice(a1[i], 0, -1));

    return sortA;
}

// Task 5
const missingLetters = (s) => {
    let compare = s.charCodeAt(0),
        missing;

    s.split('').map((c, i) => {
        s.charCodeAt(i) == compare ?
            ++compare :
            missing = String.fromCharCode(compare);
    });

    return missing;
};

// Task 6
const evenOddSums = (a) => {
    let evenSum = 0, oddSum = 0;
    a.forEach(num => (num % 2 === 0 
                        ? (evenSum += num) 
                        : (oddSum += num)));
    return [evenSum, oddSum];
};