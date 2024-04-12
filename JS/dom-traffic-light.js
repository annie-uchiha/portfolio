// Streetlights functionality

var colors = ["red", "yellow", "green"];
var currentColorIndex = 0;

function switchLights() {
  var one = document.getElementById("one");
  var two = document.getElementById("two");
  var three = document.getElementById("three");

  one.style.backgroundColor = "";
  two.style.backgroundColor = "";
  three.style.backgroundColor = "";

  var currentColor = colors[currentColorIndex];
  if (currentColor === "red") {
    one.style.backgroundColor = currentColor;
  } else if (currentColor === "yellow") {
    two.style.backgroundColor = currentColor;
  } else if (currentColor === "green") {
    three.style.backgroundColor = currentColor;
  }

  currentColorIndex = (currentColorIndex + 1) % colors.length;
}

switchLights();

setInterval(switchLights, 5000);

/*var streetlights = document.querySelectorAll(".streetlight");
var switchButton = document.getElementById("switchButton");
var streetlights = document.querySelectorAll(".streetlight");
var switchButton = document.getElementById("switchButton");

function switchColor() {
  streetlights.forEach(function (light) {
    var currentColor = light.style.backgroundColor;
    switch (currentColor) {
      case "red":
        light.style.backgroundColor = "yellow";
        break;
      case "yellow":
        light.style.backgroundColor = "green";
        break;
      case "green":
        light.style.backgroundColor = "red";
        break;
      default:
        light.style.backgroundColor = "red";
    }
  });
}

switchButton.addEventListener("click", switchColor);

This code only works to change the color on all circles*/

/* This code seems to make colors change places
var colors = ["red", "yellow", "green"];
var n = 0;

function sequence() {
  var one = document.getElementById("one");
  var two = document.getElementById("two");
  var three = document.getElementById("three");

  one.style.backgroundColor = colors[n];
  two.style.backgroundColor = colors[(n + 1) % colors.length];
  three.style.backgroundColor = colors[(n + 2) % colors.length];

  n = (n + 1) % colors.length;
}

sequence();

setInterval(sequence, 1300);*/
