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
  