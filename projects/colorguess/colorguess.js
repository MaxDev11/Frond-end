// Variables

let displayColor = document.getElementById("color");
let squares = document.querySelectorAll(".square");
let colors = [];
let pickedColor;

// Functions

function newColor() {
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

function changeColors(color) {
	for(let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function chooseColor() {
	let random = Math.floor(Math.random() * colors.length);

	return colors[random];
}

function genColors(n) {
	let arr = [];

	for (var i = 0; i < n; i++) {
		arr.push(makeColor());
	}

	return arr;
}

function makeColor() {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")"; 
}