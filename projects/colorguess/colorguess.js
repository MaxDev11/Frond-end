// Variables

const d = document;
const displayColor = d.getElementById("color");
const squares = d.querySelectorAll(".square");
let colors = [];
let pickedColor;

// Functions

const newColor = () => {
    colors = genColors(6);
    pickedColor = chooseColor();
    displayColor.innerHTML = pickedColor;
    
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        
        squares[i].addEventListener("click", () => {      
            let clickedColor = squares[i].style.backgroundColor;
            
            if (clickedColor == pickedColor) {
                changeColors(clickedColor);
            } else {
                squares[i].style.backgroundColor = "#403D39";
            }
        });
    }
}
const rand = (n) => Math.floor(Math.random() * n)
const changeColors = (color) => squares.forEach(e => e.style.backgroundColor = color);
const chooseColor = () => colors[rand(colors.length)];
const genColors = (n) => {
    let arr = [];
    
	// for (let i = 0; i < n; i++) {
	// 	arr.push(makeColor());
	// }

    return arr.map((e) => e < n ? arr.push(makeColor()) : null);

	// arr.reduce((n) => arr.push(makeColor()), 0);
}
const makeColor = () => "rgb(" + rand(256) + ", " + 
                        rand(256) + ", " + rand(256) + ")";