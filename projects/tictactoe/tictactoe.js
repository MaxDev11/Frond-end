// Variables 

let square = document.querySelectorAll('.square');
let winner = document.querySelector('#winner');
let filledSquares = 0;
let oTurn = true;

// Functions

gameInit();

// Main Function
function gameInit() {
    for (let i = 0; i < square.length; i++) {

        square[i].addEventListener('click', () => {
            if (oTurn && square[i].innerHTML == '')  {
                square[i].innerHTML = 'O';
                filledSquares += 1;
                oTurn = !oTurn;
            } else if (!oTurn && square[i].innerHTML == '') {
                square[i].innerHTML = 'X';
                filledSquares += 1;
                oTurn = !oTurn;
            }  
    
            checkWinner();
        });
    }
}

// Sub functions
function checkWinner() {
    // checks 1st row
    checkRowCol(square[0], square[1], square[2]);

    // checks 2nd row
    checkRowCol(square[3], square[4], square[5]);

    // checks 3rd row
    checkRowCol(square[6], square[7], square[8]);

    // checks 1st column
    checkRowCol(square[0], square[3], square[6]);

    // checks 2nd column
    checkRowCol(square[1], square[4], square[7]);

    // checks 3rd column
    checkRowCol(square[2], square[5], square[8]);

    // checks diagonal
    checkRowCol(square[6], square[4], square[2]);

    // checks diagonal with Draw
    checkDraw();
}

function checkRowCol(squares1, square2, square3) {
    if (squares1.innerHTML == square2.innerHTML &&
        squares1.innerHTML == square3.innerHTML &&
        squares1.innerHTML != '') {
        winner.innerHTML = "Winner: " + squares1.innerHTML;
        clearSquares();
    }
}

function checkDraw() {
    if (square[0].innerHTML == square[4].innerHTML &&
        square[0].innerHTML == square[8].innerHTML &&
        square[0].innerHTML != '') {
        winner.innerHTML = "Winner: " + square[0].innerHTML;
        clearSquares();
    } else if (filledSquares == 9) {
        clearSquares();
        winner.innerHTML = "DRAW";
    }
}

function clearSquares() {
    for (let i = 0; i < 9; i++) {
        square[i].innerHTML = '';
    }

    filledSquares = 0;
}
