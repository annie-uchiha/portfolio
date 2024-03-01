// Get the display element
const display = document.querySelector(".calculator-display");

// Add event listeners to the calculator buttons
document.querySelectorAll(".calculator-button").forEach((button) => {
  button.addEventListener("click", () => {
    // Get the clicked button's value
    const buttonValue = button.textContent;

    // Update the display with the button's value
    display.textContent += buttonValue;
  });
});

// Add event listener to the equal button
document.querySelector(".calculator-equal-button").addEventListener("click", () => {
  // Evaluate the expression in the display using eval() function
  const result = eval(display.textContent);

  // Update the display with the result
  display.textContent = result;
});

// Add event listener to the clear button
document.querySelector(".calculator-clear-button").addEventListener("click", () => {
  // Clear the display
  display.textContent = "";
});