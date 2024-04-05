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

//Write a function that accepts three separate digits and makes them a number. For example, 1, 4, and 9 will become 149.
function combineDigits() {
  var digit1 = parseInt(document.getElementById("digit1").value);
  var digit2 = parseInt(document.getElementById("digit2").value);
  var digit3 = parseInt(document.getElementById("digit3").value);

  var combinedNumber = digit1 * 100 + digit2 * 10 + digit3;

  document.getElementById("combination").innerHTML =
    "Combined number: " + combinedNumber;
}

//Write a function that accepts the width and length of a rectangle and calculates its area. If there is only one parameter given, it counts as a square.
function calculateAreaOfRectangle() {
  var width = parseInt(document.getElementById("rectangle-width").value);
  var height = parseInt(document.getElementById("rectangle-height").value);

  if (isNaN(width) || isNaN(height)) {
    if (!isNaN(width)) {
      var area = width * width;
      document.getElementById("areaResult").innerHTML =
        "Area of the square: " + area;
    } else if (!isNaN(height)) {
      var area = height * height;
      document.getElementById("areaResult").innerHTML =
        "Area of the square: " + area;
    } else {
      document.getElementById("areaResult").innerHTML =
        "Please provide at least one parameter.";
    }
  } else {
    var area = width * height;
    document.getElementById("areaResult").innerHTML =
      "Area of the rectangle: " + area;
  }
}

//Write a function that checks if the given number is perfect.

function isPerfectNumber(number) {
  if (number <= 0) {
    return false;
  }

  let sum = 0;
  for (let divisor = 1; divisor < number; divisor++) {
    if (number % divisor === 0) {
      sum += divisor;
    }
  }

  return sum === number;
}

function checkPerfectNumber() {
  var inputNumber = parseInt(
    document.getElementById("number-input").value.trim()
  );

  if (isNaN(inputNumber) || inputNumber <= 0) {
    document.getElementById("perfectNumber").innerHTML =
      "Please enter a positive integer.";
  } else {
    var isPerfect = isPerfectNumber(inputNumber);
    var resultMessage = isPerfect
      ? "The number is perfect."
      : "The number is not perfect.";
    document.getElementById("perfectNumber").innerHTML = resultMessage;
  }
}

/* Write a function that accepts the min and max values of a range, and only puts out the perfect numbers within that range. Use the previous function to check, if numbers are perfect. */
function findPerfectNumbers() {
  var min = parseInt(document.getElementById("min-input").value);
  var max = parseInt(document.getElementById("max-input").value);
  var output = "";

  for (var num = min; num <= max; num++) {
    var sumOfDivisors = 0;

    for (var i = 1; i < num; i++) {
      if (num % i === 0) {
        sumOfDivisors += i;
      }
    }

    if (sumOfDivisors === num) {
      output += num + " ";
    }
  }

  document.getElementById("output").innerHTML = "Perfect Numbers: " + output;
}

/*Write a function that accepts time (hours, minutes, seconds) and returns a string in the format hh:mm:ss.
 If the seconds are not given, they should be displayed as 00.*/

function displayFormattedTime() {
  var hours = parseInt(document.getElementById("hours").value);
  var minutes = parseInt(document.getElementById("minutes").value);
  var seconds = parseInt(document.getElementById("seconds").value);

  var formattedTime = formatTime(hours, minutes, seconds);

  document.getElementById("outputTime").innerHTML = formattedTime;
}

function formatTime(hours, minutes, seconds) {
  if (seconds === undefined) {
    seconds = 0;
  }

  var formattedHours = ("0" + hours).slice(-2);
  var formattedMinutes = ("0" + minutes).slice(-2);
  var formattedSeconds = ("0" + seconds).slice(-2);

  return formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;
}

//Write a function that accepts hours, minutes, and seconds and returns that time only in seconds.
function convertToSeconds() {
  var hours = parseInt(document.getElementById("hours-input").value);
  var minutes = parseInt(document.getElementById("minutes-input").value);
  var seconds = parseInt(document.getElementById("seconds-input").value);

  var totalSeconds = calculateTotalSeconds(hours, minutes, seconds);

  document.getElementById("outputTotal").innerHTML =
    "Total seconds: " + totalSeconds;
}

function calculateTotalSeconds(hours, minutes, seconds) {
  var totalSeconds = 0;

  totalSeconds += hours * 3600;
  totalSeconds += minutes * 60;
  totalSeconds += seconds;

  return totalSeconds;
}

/*Write a function that accepts the number of seconds,
 translates it into hours, minutes, and seconds, and returns as a hh:mm:ss string.*/

function convertToTime() {
  var inputSeconds = parseInt(document.getElementById("input-seconds").value);

  var timeString = calculateTimeString(inputSeconds);

  document.getElementById("outputSecondsToTime").innerHTML =
    "Time: " + timeString;
}

function calculateTimeString(inputSeconds) {
  var hours = Math.floor(inputSeconds / 3600);
  var minutes = Math.floor((inputSeconds % 3600) / 60);
  var seconds = inputSeconds % 60;

  var formattedHours = ("0" + hours).slice(-2);
  var formattedMinutes = ("0" + minutes).slice(-2);
  var formattedSeconds = ("0" + seconds).slice(-2);

  return formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;
}

/*Write a function that counts the difference between the dates. The function accepts 6 parameters that describe 2 dates,
 and returns them as hh:mm:ss. While solving this problem use the functions from the two previous ones:
 at first, make the dates in seconds, count the difference in seconds, and translate it back into hh:mm:ss.*/

function calculateTimeDifference() {
  var date1Hours = parseInt(document.getElementById("date1-hours").value);
  var date1Minutes = parseInt(document.getElementById("date1-minutes").value);
  var date1Seconds = parseInt(document.getElementById("date1-seconds").value);

  var date2Hours = parseInt(document.getElementById("date2-hours").value);
  var date2Minutes = parseInt(document.getElementById("date2-minutes").value);
  var date2Seconds = parseInt(document.getElementById("date2-seconds").value);

  var totalSeconds1 = calculateTotalSeconds(
    date1Hours,
    date1Minutes,
    date1Seconds
  );
  var totalSeconds2 = calculateTotalSeconds(
    date2Hours,
    date2Minutes,
    date2Seconds
  );

  var timeDifference = Math.abs(totalSeconds1 - totalSeconds2);

  var timeString = calculateTimeString(timeDifference);

  document.getElementById("outputCompareTime").innerHTML =
    "Time Difference: " + timeString;
}

function calculateTotalSeconds(hours, minutes, seconds) {
  var totalSeconds = 0;

  totalSeconds += hours * 3600;
  totalSeconds += minutes * 60;
  totalSeconds += seconds;

  return totalSeconds;
}

function calculateTimeString(inputSeconds) {
  var hours = Math.floor(inputSeconds / 3600);
  var minutes = Math.floor((inputSeconds % 3600) / 60);
  var seconds = inputSeconds % 60;

  var formattedHours = ("0" + hours).slice(-2);
  var formattedMinutes = ("0" + minutes).slice(-2);
  var formattedSeconds = ("0" + seconds).slice(-2);

  return formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;
}
