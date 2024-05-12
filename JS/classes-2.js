/*Create a shape hierarchy using classes in JavaScript. Implement a base class called Shape
 and two derived classes called Circle and Rectangle. Each class should have appropriate
constructors and methods. Should have methods for getting area and circumference*/

class Shape {
  constructor() {
    if (this.constructor === Shape) {
      throw new Error("Cannot instantiate abstract class");
    }
  }

  getArea() {
    throw new Error("Method 'getArea()' must be implemented");
  }

  getCircumference() {
    throw new Error("Method 'getCircumference()' must be implemented");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getCircumference() {
    return 2 * (this.width + this.height);
  }
}

const circle = new Circle(5);
console.log("Circle Area:", circle.getArea());
console.log("Circle Circumference:", circle.getCircumference());

const rectangle = new Rectangle(4, 6);
console.log("Rectangle Area:", rectangle.getArea());
console.log("Rectangle Circumference:", rectangle.getCircumference());

/*Create a class hierarchy representing products in an online shop. Use inheritance to create
   a base class Product and derived classes like Book, Electronics, and Clothing.
    Each class should have appropriate properties and methods. Should have name and price
     and specific Add properties and methods specific to each type of product.Implement
     a method to apply a discount to the price for each type. */

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  applyDiscount(discountPercentage) {
    const discountedPrice = this.price * (1 - discountPercentage / 100);
    this.price = Math.round(discountedPrice * 100) / 100;
  }
}

class Book extends Product {
  constructor(name, price, author, genre) {
    super(name, price);
    this.author = author;
    this.genre = genre;
  }

  addPages(pages) {
    this.pages = pages;
  }

  applyDiscount(discountPercentage) {
    super.applyDiscount(discountPercentage * 2);
  }
}

class Electronics extends Product {
  constructor(name, price, brand, model) {
    super(name, price);
    this.brand = brand;
    this.model = model;
  }

  addWarranty(duration) {
    this.warrantyDuration = duration;
  }

  applyDiscount(discountPercentage) {
    super.applyDiscount(discountPercentage);
  }
}

class Clothing extends Product {
  constructor(name, price, size, color) {
    super(name, price);
    this.size = size;
    this.color = color;
  }

  addMaterial(material) {
    this.material = material;
  }

  applyDiscount(discountPercentage) {
    super.applyDiscount(discountPercentage / 2);
  }
}

const book = new Book("Heart of Darkness", 20, "Joseph Conrad", "Novella");
book.addPages(116);
book.applyDiscount(10);
console.log("Book:", book);

const laptop = new Electronics("Laptop", 800, "HP", "OMEN 17");
laptop.addWarranty(2);
laptop.applyDiscount(15);
console.log("Electronics:", laptop);

const shirt = new Clothing("T-Shirt", 25, "M", "Blue");
shirt.addMaterial("Cotton");
shirt.applyDiscount(20);
console.log("Clothing:", shirt);

/* Create a class hierarchy representing different types of animals in a zoo.
 Use inheritance to create a base class Animal and derived classes like Mammal,
  Bird, and Reptile. Each class should have appropriate properties and methods.
  Should have properties name, species and method makeSound(). 
  Override the makeSound() method to log an appropriate sound for each type.*/
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  makeSound() {
    console.log(`${this.name} makes a sound`);
  }
}

class Mammal extends Animal {
  constructor(name, species) {
    super(name, species);
  }

  makeSound() {
    console.log(`${this.name} the ${this.species} mammal makes roaring sounds`);
  }
}

class Bird extends Animal {
  constructor(name, species) {
    super(name, species);
  }

  makeSound() {
    console.log(`${this.name} the ${this.species} bird makes croaking sounds`);
  }
}

class Reptile extends Animal {
  constructor(name, species) {
    super(name, species);
  }

  makeSound() {
    console.log(`${this.name} the ${this.species} reptile hisses`);
  }
}

const lion = new Mammal("Simba", "lion");
lion.makeSound();

const parrot = new Bird("Zazu", "toucan");
parrot.makeSound();

const snake = new Reptile("Kaa", "snake");
snake.makeSound();
