//Navbar

const btn = document.querySelector(".btn");

const list = document.querySelector("ul");

btn.addEventListener("click", () => {
  list.classList.toggle("active");
});

// Request a user’s name and display the response “Hello, [name]”.

function greetUser() {
  const name = document.getElementById("nameInput").value;
  document.getElementById("greeting").textContent = `Hello,${name}`;
}

//Request a user’s year of birth, count his age, and display the result. Store the current year as a constant.

function calculateAge() {
  const currentYear = new Date().getFullYear();
  const birthYear = parseInt(document.getElementById("birthYear").value);
  const age = currentYear - birthYear;
  document.getElementById("age").textContent = "Your age is: " + age;
}

//Request a length of a side of a square from a user and display the perimeter of the square.

function calculatePerimeter() {
  const sideLength = parseFloat(document.getElementById("sideLength").value);
  const perimeter = sideLength * 4;
  document.getElementById("perimeter").textContent =
    "The perimeter of the square is: " + perimeter;
}

//Request a radius of a circle and display the area of such a circle.

function calculateArea() {
  const radius = parseFloat(document.getElementById("radius").value);
  const area = Math.PI * radius * radius;
  document.getElementById("area").textContent =
    "The area of the circle is: " + area;
}

/*Request a distance in km between the two cities from a user,
 and the time they want to cover it within. Count the speed needed to be on time.*/

function calculateSpeed() {
  const distance = parseFloat(document.getElementById("distance").value);
  const time = parseFloat(document.getElementById("time").value);
  const speed = distance / time;
  document.getElementById("speed").textContent =
    "The speed needed to be on time is: " + speed + " km/h";
}

/* Create a currency converter. A user types in USD and the program converts them to EUR.
 The exchange rate should be stored as a constant.*/

function convertToEur() {
  const usdAmount = parseFloat(document.getElementById("usdInput").value);
  const exchangeRate = 0.93;
  const eurAmount = usdAmount * exchangeRate;
  document.getElementById("eurOutput").textContent = "EUR: " + eurAmount;
}

/*A user states a flash drive memory in GB. The program has to count
 how many 820MB files can be stored on this flash drive. */

function calculateFileCount() {
  const flashDriveSize = parseInt(
    document.getElementById("flashDriveInput").value
  );
  const fileSize = 820;
  const fileCount = Math.floor((flashDriveSize * 1024) / fileSize);
  document.getElementById("fileCountOutput").textContent =
    "File count: " + fileCount;
}

/*A user types in an amount of money in a wallet and the price of one chocolate bar.
 The program counts how many chocolate bars the user can buy, and how much change will he/she have left. */

function calculateChocolateBars() {
  const walletMoney = parseFloat(document.getElementById("walletMoney").value);
  const chocolateBarsAmount = parseFloat(
    document.getElementById("chocolateBarsAmount").value
  );
  const chocolateAmount = walletMoney - chocolateBarsAmount;
  document.getElementById("chocolateBarsCountOutput").textContent =
    "You can buy: " + chocolateAmount;
}

/*The user types in a sum of bank deposits for 2 months with a yearly interest rate of 5%.
 The program counts the sum of interest.*/

function calculateInterest() {
  const interestAmount = parseInt(
    document.getElementById("bankDeposits").value
  );
  const interestRate = 0.05;
  const interestSumAmount = interestAmount * interestRate;
  document.getElementById("interestOutput").textContent =
    "The sum of interest is:" + interestSumAmount;
}

//Request a three-digit number from a user and check whether it has identical digits in it

function checkIdenticalDigits() {
  const numberInput = document.getElementById("numberInput");
  const number = Number(numberInput.value);

  const firstDigit = Math.floor(number / 100);
  const secondDigit = Math.floor((number % 100) / 10);
  const thirdDigit = number % 10;

  if (firstDigit === secondDigit && secondDigit === thirdDigit) {
    document.getElementById("result").textContent =
      "The number has identical digits!";
  } else {
    document.getElementById("result").textContent =
      "The number does not have identical digits.";
  }
}

//Request a five-unit number from a user and check whether it is a palindrome.
function checkPalindrome() {
  const numberInput = document.getElementById("fiveDigitNumberInput");
  const number = numberInput.value;

  const reversedNumber = number.split("").reverse().join("");

  if (number === reversedNumber) {
    document.getElementById("palindrome").textContent =
      "The number is a palindrome!";
  } else {
    document.getElementById("palindrome").textContent =
      "The number is not a palindrome.";
  }
}

//Request a length of a circumference and a perimeter of a square from a user. Define whether that circumference can fit in that square.
function checkFit() {
  const pi = 3.14;
  const circumferenceInput = document.getElementById("circumferenceInput");
  const circumference = parseFloat(circumferenceInput.value);

  const perimeterInput = document.getElementById("perimeterInput");
  const perimeter = parseFloat(perimeterInput.value);

  // Calculate the radius of the circumference using the formula: r = C / (2 * pi)
  const radius = circumference / (2 * Math.PI);

  // Calculate the side length of the square using the formula: s = P / 4
  const sideLength = perimeter / 4;

  // Check if the circumference can fit in the square by comparing their dimensions
  if (radius <= sideLength / 2) {
    document.getElementById("willItFit").textContent =
      "The circumference can fit inside the square!";
  } else {
    document.getElementById("willItFit").textContent =
      "The circumference cannot fit inside the square.";
  }
}

/*Execute a currency converter. A user puts in USD, chooses a currency (EUR, SEK, AUD etc.) and gets the result.*/

const exchangeRates = {
  EUR: 0.82,
  SEK: 8.38,
  AUD: 1.37,
  GBP: 0.79,
  JPY: 151.64,
  BGN: 1.82,
  CHF: 0.90,
};

document.getElementById('convertButton').addEventListener('click', function(){
  var amount = document.getElementById('amountInput').value;
  var fromCurrency = document.getElementById('fromCurrencySelect').value;
  var toCurrency = document.getElementById('toCurrencySelect').value;

  // Conversion logic using exchange rates
  var convertedAmount;
  if (fromCurrency === "USD") {
    convertedAmount = amount * exchangeRates[toCurrency];
  } else {
    var usdAmount = amount / exchangeRates[fromCurrency];
    convertedAmount = usdAmount * exchangeRates[toCurrency];
  }

  document.getElementById('convertedAmount').textContent = convertedAmount;
});

/*Request a date (dd:mm:yy) and put out the one that goes after it.<br>
Pay attention to the start of a new month, new year, and also leap years.*/

function getNextDay() {
  const dateInput = document.getElementById("dateInput");
  const dateStr = dateInput.value;
  const parts = dateStr.split(":");
  const day = parseInt(parts[0]);
  const month = parseInt(parts[1]);
  const year = parseInt(parts[2]);

  const inputDate = new Date(year, month - 1, day);
  const nextDate = new Date(inputDate);
  nextDate.setDate(inputDate.getDate() + 1);

  const formattedNextDate = formatNextDate(nextDate);
  document.getElementById("nextDayIs").textContent =
    "The next date is:" + formattedNextDate;
}

function formatNextDate(date) {
  const day = ("0" + date.getDate()).slice(-2);
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const year = date.getFullYear();

  return day + ":" + month + ":" + year;
}
