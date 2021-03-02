function currentTime() {
  let clock = document.querySelector("#clock"),
      time = new Date();
  
  let hours = time.getHours(),
      minutes = time.getMinutes(),
      seconds = time.getSeconds();
  let h = checkTimeDecimal(hours),
      m = checkTimeDecimal(minutes),
      s = checkTimeDecimal(seconds);

  clock.innerHTML = h + ":" + m + ":" + s;
}

const checkTimeDecimal = (k) => k < 10 ? "0" + k : k;

window.setInterval(currentTime, 1000);


