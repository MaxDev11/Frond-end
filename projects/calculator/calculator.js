const r = document.querySelector("#result");

const typeChar = (val) => r.value += val,
      clearInput = () => r.value = "",
      removeChar = () => r.value = r.value.substr(0, r.value.length-1),
      square = () => r.value = Math.pow(r.value, 2),
      squareRoot = () => r.value = Math.sqrt(r.value),
      compute = () => r.value = eval(r.value);



