/* Write a program that requests a number from a user and finds the summation of every number from 1 to num. 
For example, for number 4 it is 1 + 2 + 3 + 4 = 10.*/

let num = parseInt(prompt("Enter a number:"));
let summation = 0;

for (let i = 1; i <= num; i++) {
  summation += i;
}

console.log("The summation of every number from 1 to", num, "is", summation);

// Request two numbers and find only their largest common divisor.

let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));

let min = Math.min(num1, num2);

let largestCommonDivisor = 1;

for (let i = 2; i <= min; i++) {
  if (num1 % i === 0 && num2 % i === 0) {
    largestCommonDivisor = i;
  }
}

console.log(
  "The largest common divisor of",
  num1,
  "and",
  num2,
  "is",
  largestCommonDivisor
);

// Request a number and display all the divisors of it. For example, for number 8 it would be 2, 4, and 8.
let num = parseInt(prompt("Enter a number:"));

console.log("The divisors of", num, "are:");

for (let i = 1; i <= num; i++) {
  if (num % i === 0) {
    console.log(i);
  }
}

// Define the number of digits in a requested number. For example, there are 4 digits in the number 6834.

let num = parseInt(prompt("Enter a number:"));
let numDigits = num.toString().length;

console.log("The number of digits in", num, "is", numDigits);

/* Request 10 numbers from a user and count, how many are positive, negative, or zero. 
 Also, count odd and even. Display the statistics. There’s only one variable (not 10) needed for input by a user. */

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
let oddCount = 0;
let evenCount = 0;

for (let i = 0; i < 10; i++) {
  let num = parseInt(prompt("Enter a number:"));

  if (num > 0) {
    positiveCount++;
  } else if (num < 0) {
    negativeCount++;
  } else {
    zeroCount++;
  }

  if (num % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}

console.log("Positive numbers:", positiveCount);
console.log("Negative numbers:", negativeCount);
console.log("Zero numbers:", zeroCount);
console.log("Odd numbers:", oddCount);
console.log("Even numbers:", evenCount);

/* Request favourite fruit from user. If it is Peach, Apple or Banana show message that it is your
 favourite food, if it is Pear or Grapefruit show message that you hate it otherwise show message that you have not tried this fruit*/

let favoriteFruit = prompt("Enter your favorite fruit:");

if (
  favoriteFruit === "Peach" ||
  favoriteFruit === "Apple" ||
  favoriteFruit === "Banana"
) {
  console.log("It's your favorite fruit!");
} else if (
  favoriteFruit === "Plum" ||
  favoriteFruit === "Grapes" ||
  favoriteFruit === "Pineapple"
) {
  console.log("You hate it!");
} else {
  console.log("You haven't tried this fruit!");
}

// Request a number and check if the number is odd, even or zero. Use switch.
let num = parseInt(prompt("Enter a number:"));

switch (true) {
  case num === 0:
    console.log("The number is zero");
    break;
  case num % 2 === 0:
    console.log("The number is even");
    break;
  default:
    console.log("The number is odd");
    break;
}
