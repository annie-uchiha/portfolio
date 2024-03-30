const btn = document.querySelector(".btn");

const list = document.querySelector("ul");

btn.addEventListener("click", () => {
  list.classList.toggle("active");
});

function greetUser() {
  const name = document.getElementById("nameInput").value;
  document.getElementById("greeting").textContent = `Hello,${name}`;
}

function calculateAge() {
  const currentYear = new Date().getFullYear();
  const birthYear = parseInt(document.getElementById("birthYear").value);
  const age = currentYear - birthYear;
  document.getElementById("age").textContent = "Your age is: " + age;
}

function calculatePerimeter() {
  const sideLength = parseFloat(document.getElementById("sideLength").value);
  const perimeter = sideLength * 4;
  document.getElementById("perimeter").textContent =
    "The perimeter of the square is: " + perimeter;
}
