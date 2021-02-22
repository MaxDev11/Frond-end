// Variables

const time = document.getElementById("watch");

let hours = 0, 
    minutes = 0, 
    seconds = 0;

let displayHours = 0,
    displayMinutes = 0,
    displaySeconds = 0;

let interval = null;
let status = "stopped";


// Functions

// Main Function

function stopWatch() {
    seconds++;

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;
        
        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }

    }

    seconds < 10 ? 
                displaySeconds = "0" + seconds.toString() : 
                displaySeconds = seconds;
    minutes < 10 ? 
                displayMinutes = "0" + minutes.toString() : 
                displayMinutes = minutes;
    hours < 10 ? 
                displayHours = "0" + hours.toString() : 
                displayHours = hours;

    time.innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;

}

// Other functions

function startWatchBtn() {
    if(status === "stopped") {
        interval = window.setInterval(stopWatch, 1000);
        status = "started";
    }
}

function stopWatchBtn() {
    if(status === "started") {
        window.clearInterval(interval);
        status = "stopped";
    } 
}

function resetWatchBtn() {
    stopWatchBtn();

    hours = 0;
    minutes = 0;
    seconds = 0;

    time.innerHTML = "00:00:00";
}