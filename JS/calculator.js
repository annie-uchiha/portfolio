/*document.addEventListener("DOMContentLoaded", () => {
  const screen = document.querySelector(".calculator-screen");
  const buttons = [
    ...document.getElementsByClassName("value"),
    ...document.getElementsByClassName("operator"),
    ...document.getElementsByClassName("decimal"),
    document.querySelector(".all-clear"),
    document.querySelector(".equal-sign"),
  ];

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;

      if (buttonText === "AC") {
        clearScreen();
      } else if (buttonText === "=") {
        calculateResult();
      } else {
        appendToScreen(buttonText);
      }
    });
  });

  function appendToScreen(text) {
    if (screen.value === "0" || screen.value === "Error") {
      screen.value = text;
    } else {
      screen.value += text;
    }
  }

  function clearScreen() {
    screen.value = "";
  }

  function calculateResult() {
    try {
      const expression = screen.value.replace(/×/g, "*").replace(/÷/g, "/");
      const result = eval(expression);
      screen.value = result;
    } catch (error) {
      screen.value = "Error";
    }
  }
});*/

$(() => {
  let currentInput = "";
  let currentResult = "";
  let lastOperation = "";

  function updateResult() {
    $(".calculator-screen").val(currentInput);
  }

  function clearInput() {
    currentInput = "";
    updateResult();
  }

  function performOperation(operation) {
    if (currentInput !== "") {
      if (lastOperation !== "") {
        calculateResult();
      }
      currentResult = parseFloat(currentInput);
      lastOperation = operation;
      clearInput();
    }
  }

  function calculateResult() {
    if (currentInput !== "") {
      const operand = parseFloat(currentInput);
      switch (lastOperation) {
        case "+":
          currentResult += operand;
          break;
        case "-":
          currentResult -= operand;
          break;
        case "*":
          currentResult *= operand;
          break;
        case "/":
          currentResult /= operand;
          break;
      }
      currentInput = currentResult.toString();
      lastOperation = "";
      updateResult();
    }
  }

  $(".value, .operator, .all-clear, .decimal, .equal-sign").click(function () {
    const value = $(this).val();
    switch (value) {
      case "all-clear":
        clearInput();
        break;
      case "equals":
        calculateResult();
        break;
      case "add":
      case "subtract":
      case "multiply":
      case "divide":
        performOperation(value);
        break;
      default:
        currentInput += value;
        updateResult();
    }
  });
});
