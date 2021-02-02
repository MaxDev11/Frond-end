function addVal(val) {
    document.getElementById("result").value += val;
}

function delVal() {
    var val = document.getElementById("result").value;
    var finalVal = val.substr(0, val.length-1); 
    document.getElementById("result").value = finalVal;
}

function sqrVal() {
    let val = document.getElementById("result").value;
    let valSqr = Math.pow(val, 2);
    document.getElementById("result").value = valSqr; 
}

function sqrtVal() {
    let val = document.getElementById("result").value;
    let valSqrt = Math.sqrt(val);
    document.getElementById("result").value = valSqrt; 
}

function clearVal() {
    document.getElementById("result").value = "";
}

function solveVal() {
    let x = document.getElementById("result").value 
    let y = eval(x) 
    document.getElementById("result").value = y 
}

