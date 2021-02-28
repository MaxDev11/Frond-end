const getRandom = (max) => Math.floor(Math.random() * Math.floor(max));

const d = document;

const cellRow = d.querySelectorAll('.cellRow');
const cellCol = d.querySelectorAll('.cellCol');
const cellColor = "#474973";
const bombColor = "#161B33";
const revealedColor = "#A69CAC";

const cells = 36;
const row = cells / 6;

function init() {
    let newGrid = genGrid();
    console.log(newGrid);
    render(newGrid);
    cellCol.forEach((cell) => {
        if (cell.innerHTML === '💜') {
            cell.style.backgroundColor = bombColor;
        } else {
            cell.style.backgroundColor = revealedColor;
        }
        cell.addEventListener('click', () => {
            // if (cell.innerHTML === '💜') {
            //     reset();
            // }
        });
    });
}

let genGrid = () => {
    let grid = new Array(cells);
    for (let i = 0; i < cells; i++) {
        if (getRandom(9) < 1) {
            grid[i] = '💜'; 
        } else {
            grid[i] = '';
        }
    }

    // countNeighbours(grid);

    return grid;
};

let render = (grid) => {
    for (let i = 0; i < cells; i++) {
        cellCol[i].innerHTML = grid[i];
    }
}

function countNeighbours(grid) {
    // for (let i = 0; i < cells; i++) {
    //     if (grid[i] === '💜') {
    //         if (grid[i-1] === '') {
    //             grid[i-1] += 1;
    //         }
    //         if (grid[i+1] === '') {
    //             grid[i+1] += 1;
    //         }
    //         if (grid[i-row] === '') {
    //             grid[i-6] += 1;
    //         }
    //         if (grid[i-row-1] === '') {
    //             grid[i-row-1] += 1;
    //         }
    //         if (grid[i-row+1] === '') {
    //             grid[i-row+1] += 1;
    //         }
    //         if (grid[i+row] === '') {
    //             grid[i+row] += 1;
    //         }
    //         if (grid[i+row-1] === '') {
    //             grid[i+row-1] += 1;
    //         }
    //         if (grid[i+row+1] === '') {
    //             grid[i+row+1] += 1;
    //         }
    //     }
    // }

    // return grid;
}

function reset() {};

init();

