/*Write a function that accepts 2 numbers and returns -1 if the first one is smaller than the second,
 1 if it is vice versa, and 0 if they are equal.*/

function compareNumbers() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);

  var result;
  if (num1 < num2) {
    result = -1;
  } else if (num1 > num2) {
    result = 1;
  } else {
    result = 0;
  }

  document.getElementById("compare").innerHTML = "The result is: " + result;
}

//Write a function that counts the factorial of a given number.

function calculateFactorial() {
  var number = parseInt(document.getElementById("number").value);

  if (number < 0) {
    document.getElementById("factorial").innerHTML =
      "Factorial cannot be calculated for a negative number.";
    return;
  }

  var factorial = 1;
  for (var i = 2; i <= number; i++) {
    factorial *= i;
  }

  document.getElementById("factorial").innerHTML =
    "Factorial of " + number + " is: " + factorial;
}
