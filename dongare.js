const inputField = document.getElementById('input');
const resultDiv = document.getElementById('result');

function append(value) {
  inputField.value += value;
  calculate();
}

function clearInput() {
  inputField.value = '';
  resultDiv.textContent = '';
}

function calculate() {
  const expr = inputField.value;
  try {
    if (expr) {
      const evaluated = eval(expr);
      resultDiv.textContent = '= ' + evaluated;
    } else {
      resultDiv.textContent = '';
    }
  } catch {
    resultDiv.textContent = 'Invalid Expression';
  }
}
function calculateFinal() {
  try {
    const expr = inputField.value;
    const evaluated = eval(expr);
    inputField.value = evaluated;
    resultDiv.textContent = '';
  } catch {
    resultDiv.textContent = 'Invalid Expression';
  }
}

