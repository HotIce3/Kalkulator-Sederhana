function appendValue(val) {
  document.getElementById("display").value += val;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  let result = eval(document.getElementById("display").value);
  document.getElementById("display").value = result;
}

function calculate() {
  let display = document.getElementById("display");
  let value = display.value;

  function appendValue(value) {
    const display = document.getElementById("display");
    display.value += value;
  }

  if (value.includes("%")) {
    let percentValue = value.replace("%", "");
    let result = eval(percentValue) / 100;
    display.value = result;
  } else {
    try {
      let result = eval(value);
      display.value = result;
    } catch (e) {
      display.value = "Error";
    }
  }
}
