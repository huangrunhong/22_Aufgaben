const showResult = document.getElementById("result");
const inputMath = document.getElementById("plus");

let result = 0;

function reset() {
  showResult.textContent = result;
}
function resultPlus(x) {
  result += x;
  console.log(result);
  showResult.textContent = result;
}

function resultMulti(x) {
  result *= x;
  showResult.textContent = result;
}
