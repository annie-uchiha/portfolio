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
