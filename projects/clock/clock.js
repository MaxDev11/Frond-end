const currentTime = () => {
  const clock = document.querySelector("#clock"),
        time = new Date();
  
  const h = checkTimeDecimal(time.getHours()),
        m = checkTimeDecimal(time.getMinutes()),
        s = checkTimeDecimal(time.getSeconds());

  clock.innerHTML = h + ":" + m + ":" + s;
};

const checkTimeDecimal = (k) => k < 10 ? "0" + k : k;

window.setInterval(currentTime, 1000);


