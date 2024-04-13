document.addEventListener("DOMContentLoaded", () => {
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
});
