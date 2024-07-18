//theme feature
const btnTheme = document.getElementById("theme");
const btnDigits = document.querySelector(".digits");
const btnOps = document.querySelector(".operators");
const btnSp = document.querySelector(".special");

function pickColor() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  return bgColor;
}

function changeTheme() {
  let a = pickColor();
  let b = pickColor();
  let c = pickColor();
  for (var i = 0; i < document.getElementsByClassName("box").length; i++) {
    document.getElementsByClassName("box")[i].style.background = a;
    if (i < document.getElementsByClassName("ops").length)
      document.getElementsByClassName("ops")[i].style.backgroundColor = b;
    if (i < document.getElementsByClassName("sp").length)
      document.getElementsByClassName("sp")[i].style.backgroundColor = c;
  }
}

btnTheme.addEventListener("click", changeTheme);

// digit to screen functionality
const screen = document.querySelector("#result");
let primaryDigit;
let secondaryDigit;
let equation;

document.querySelector(".digits").addEventListener("click", (event) => {
  let target = event.target;
  if (target.matches("button") && target.innerHTML.length == 1) {
    let value = target.innerHTML;
    if (operator != null) screen.value = null;

    screen.value += value;
  }
});

//clear all
const btnCE = document.getElementById("CE");
function clearScreen() {
  screen.value = null;
}
btnCE.addEventListener("click", () => {
  screen.value = null;
});

//del last digit
document.getElementById("DEL").addEventListener("click", () => {
  screen.value = screen.value.slice(0, -1);
});

//change sign
document.getElementById("sign").addEventListener("click", () => {
  if (screen.value >= 0) screen.value = -screen.value;
  else screen.value = Math.abs(screen.value);
});

//read operator
let operator;
btnOps.addEventListener("click", (event) => {
  let target = event.target;
  if (target.matches("button") && target.innerHTML != "=") {
    let value = target.innerHTML;
    operator = value;
    primaryDigit = screen.value;
    equation = primaryDigit;
    equation += operator;
  }
});
//reset all values
function reset() {
  primaryDigit = null;
  secondaryDigit = null;
  operator = null;
  equation = null;
}
//calculate
document.getElementById("equal").addEventListener("click", () => {
  secondaryDigit = screen.value;
  equation += secondaryDigit;
  try {
    screen.value = eval(equation);
  } catch {
    screen.value = "Error";
  }
  reset();
});
