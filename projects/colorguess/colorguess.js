// Variables

const displayColor = document.getElementById("color");
const squares = document.querySelectorAll(".square");
let colors = [], pickedColor;

// Functions

const newColor = () => {
    colors = genColors(6);
    pickedColor = chooseColor(colors);
    displayColor.innerHTML = pickedColor;
    
    displayColors(colors);
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", () => {      
            let clickedColor = squares[i].style.backgroundColor;
            
            clickedColor == pickedColor ? 
            changeColors(clickedColor) :
            bgColor(squares[i], '#403D39');
        });
    }
}

const bgColor = (e, v) => e.style.backgroundColor = v;
const displayColors = (c) => squares.forEach((e, i) => bgColor(e, c[i]));
const getRandom = (n) => Math.floor(Math.random() * n);
const genColors = (n) => { 
    let arr = []; 
	for (let i = 0; i < n; i++) arr.push(makeColor());
    return arr;
};
const changeColors = (c) => squares.forEach(e => bgColor(e, c));
const chooseColor = (colors) => colors[getRandom(colors.length)];
const makeColor = () => "rgb(" + getRandom(256) + ", " + 
                        getRandom(256) + ", " + getRandom(256) + ")";