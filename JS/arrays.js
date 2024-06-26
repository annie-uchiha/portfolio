/* 1. Create a “groceries list” array. Each element of the array is an object that contains the name of a product, 
an amount needed and whether it is bought or not. Write a few functions for working with this array. 

  -  Display the entire list, so that the not yet purchased items go before the bought ones. 
  -  Adding a purchase to the list. Note that if a product already exists, the amount needs to be increased in the existing purchase, not in a new one. 
  -  Purchasing a product. The function accepts the name of a product and marks it as bought.*/

let groceriesList = [
  { name: "apples", amount: 5, bought: true },
  { name: "bananas", amount: 10, bought: false },
  { name: "oranges", amount: 23, bought: true },
  { name: "cashew", amount: 1, bought: false },
  { name: "chocolate", amount: 3, bought: true },
];

function displayList() {
  const notPurchased = groceriesList.filter((item) => !item.bought);
  const purchased = groceriesList.filter((item) => item.bought);
  const combinedList = notPurchased.concat(purchased);
  console.log("Groceries List:");
  combinedList.forEach((item) => {
    console.log(
      `${item.name} - ${item.amount} ${
        item.bought ? "(bought)" : "(not bought)"
      }`
    );
  });
}

function addPurchase(name, amount) {
  const item = groceriesList.find((item) => item.name === name);
  if (item) {
    item.amount += amount;
    console.log(`Added ${amount} ${name}(s) to the list.`);
  } else {
    console.log("Product not found in the list.");
  }
}

function purchaseProduct(name) {
  const item = groceriesList.find((item) => item.name === name);
  if (item) {
    item.bought = true;
    console.log(`${name} marked as bought.`);
  } else {
    console.log("Product not found in the list.");
  }
}

console.log("--- Initial List ---");
displayList();
console.log("--------------------");

addPurchase("bananas", 5);
addPurchase("eggs", 10);
purchaseProduct("oranges");

console.log("--- Updated List ---");
displayList();
console.log("--------------------");

/* 2. Create an array that describes a shop receipt. Each element of the array consists of the name of the product, an amount bought, and price per item. Write the following functions. 

   - Print the receipt out on the screen.
   - Counting the sum of the purchase.
   - Extracting the most expensive item on the receipt.
   - Counting an average item price on the receipt. */

let shopReceipt = [
  { name: "Chocolate", amount: 3, price: 1.2 },
  { name: "Apples", amount: 20, price: 2.45 },
  { name: "Eggs", amount: 15, price: 0.5 },
  { name: "Bananas", amount: 10, price: 1.32 },
  { name: "Avocado", amount: 3, price: 4.27 },
];

function printReceipt() {
  console.log("Receipt:");
  shopReceipt.forEach((item) => {
    console.log(
      `${item.amount} ${item.name} - ${item.amount * item.price} dollars`
    );
  });
}

function calculateTotal() {
  let total = 0;
  shopReceipt.forEach((item) => {
    total += item.amount * item.price;
  });
  return total;
}

function findMostExpensiveItem() {
  let mostExpensiveItem = shopReceipt[0];
  shopReceipt.forEach((item) => {
    if (item.price > mostExpensiveItem.price) {
      mostExpensiveItem = item;
    }
  });
  return mostExpensiveItem;
}

function calculateAveragePrice() {
  let totalPrices = 0;
  shopReceipt.forEach((item) => {
    totalPrices += item.price;
  });
  return totalPrices / shopReceipt.length;
}

printReceipt();
console.log("Total: " + calculateTotal() + " dollars");
console.log("Most expensive item: " + findMostExpensiveItem().name);
console.log("Average item price: " + calculateAveragePrice() + " dollars");

/* 3. Create an array of css-styles (color, font size, alignment, underline etc.) Each element of the array is an object
 consisting of two properties: style name and style value, Write a function that accepts the style array and a text
  and puts out this text via document.write() in the <p></p> tags, adding the style attribute with all the styles in the array to the opening tag.*/

let cssStyles = [
  { name: "color", value: "blue" },
  { name: "font-size", value: "22px" },
  { name: "text-align", value: "center" },
  { name: "text-decoration", value: "underline" },
];

function applyStyles(styles, text) {
  let styleAttribute = "";
  styles.forEach((style) => {
    styleAttribute += `${style.name}: ${style.value}; `;
  });
  return `<p style="${styleAttribute}">${text}</p>`;
}

const styledText = applyStyles(
  cssStyles,
  "This is a sample text with applied styles."
);
console.log(styledText);

/* 4. Create an array of academy classrooms. A classroom object consists of a name, a number of seats (10 to 20) and the faculty it is meant for. Write a few functions for working with it.

    - Display all the classrooms.
    - Display all the classrooms for a given faculty.
    - Display only the classrooms that would fit a given group. A group object contains a name, the number of students, and the faculty name.
    -  A function for sorting all the classrooms by number of seats.
    - A function for sorting all the classrooms by name in alphabetical order.*/

let classrooms = [
  { name: "Classroom A", seats: 15, faculty: "IT" },
  { name: "Classroom B", seats: 18, faculty: "History of Art" },
  { name: "Classroom C", seats: 12, faculty: "Engineering" },
  { name: "Classroom D", seats: 20, faculty: "Mathematics" },
  { name: "Classroom E", seats: 10, faculty: "Cinema" },
  { name: "Classroom F", seats: 20, faculty: "Biology" },
];

function displayAllClassrooms() {
  console.log("All Classrooms:");
  classrooms.forEach((classroom) => {
    console.log(
      `Name: ${classroom.name}, Seats: ${classroom.seats}, Faculty: ${classroom.faculty}`
    );
  });
}

function displayClassroomsForFaculty(faculty) {
  console.log(`Classrooms for ${faculty}:`);
  const facultyClassrooms = classrooms.filter(
    (classroom) => classroom.faculty === faculty
  );
  facultyClassrooms.forEach((classroom) => {
    console.log(`Name: ${classroom.name}, Seats: ${classroom.seats}`);
  });
}

function displayClassroomsForGroup(group) {
  console.log(
    `Classrooms for group "${group.name}" with ${group.number_of_students} students in ${group.faculty}:`
  );
  const fittingClassrooms = classrooms.filter(
    (classroom) =>
      classroom.seats >= group.number_of_students &&
      classroom.faculty === group.faculty
  );
  fittingClassrooms.forEach((classroom) => {
    console.log(`Name: ${classroom.name}, Seats: ${classroom.seats}`);
  });
}

function sortClassroomsBySeats() {
  return classrooms.slice().sort((a, b) => a.seats - b.seats);
}

function sortClassroomsByName() {
  return classrooms.slice().sort((a, b) => a.name.localeCompare(b.name));
}

displayAllClassrooms();
console.log("---");
displayClassroomsForFaculty("Engineering");
console.log("---");
displayClassroomsForGroup({
  name: "Group A",
  number_of_students: 14,
  faculty: "Engineering",
});
console.log("---");
const sortedBySeats = sortClassroomsBySeats();
console.log("Classrooms sorted by seats:");
console.log(sortedBySeats);
console.log("---");
const sortedByName = sortClassroomsByName();
console.log("Classrooms sorted by name:");
console.log(sortedByName);
