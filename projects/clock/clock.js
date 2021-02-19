function currentTime() {
    let time = new Date();

    let hours = time.getHours(),
        minutes = time.getMinutes(),
        seconds = time.getSeconds();
    
    let h = checkTimeDecimal(hours),
        m = checkTimeDecimal(minutes),
        s = checkTimeDecimal(seconds);

    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
}

function checkTimeDecimal(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }

  window.setInterval(currentTime, 1000);


