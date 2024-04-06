/* 1. Create an object that describes a car (manufacturer, model, year of release, average speed)
 and the following methods for working with this object:

- A method that displays the car info 
- A method for counting a time frame necessary to cover a given distance with the average speed.
 Note that every 4 hours the driver has to take a 1-hour break.*/

const car1 = {
  manufacturer: "Chevrolet",
  model: "Impala",
  year: 1967,
  averageSpeed: 120, // km/h
  displayInfo: function () {
    console.log(`Manufacturer: ${this.manufacturer}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year of Release: ${this.year}`);
    console.log(`Average Speed: ${this.averageSpeed}`);
  },
  calculateTravelTime: function (distance) {
    const hoursWithoutBreaks = distance / this.averageSpeed;

    const numberOfBreaks = Math.floor(hoursWithoutBreaks / 4);
    const totalBreakTime = numberOfBreaks * 1;

    const totalTime = hoursWithoutBreaks + totalBreakTime;

    console.log(`Total Time to cover ${distance} km: ${totalTime} hours`);
  },
};

car1.displayInfo();
car1.calculateTravelTime(1500);


/* 2. Create an object that contains separately the numerator and the denominator of a fraction,
 and the following functions for working with this object:

    A function for adding two fraction objects.
    A function for subtracting two fraction objects.
    A function for multiplying two fraction objects.
    A function for dividing two fraction objects.
    A function for simplifying a fraction object.*/
// Fraction object

const Fraction = {
    numerator: 0,
    denominator: 1,  
  
    // Function for adding two fraction objects
    add: function(fraction) {
      const result = Object.create(Fraction);
  
      result.numerator = this.numerator * fraction.denominator + fraction.numerator * this.denominator;
      result.denominator = this.denominator * fraction.denominator;
  
      return result;
    },
  
    // Function for subtracting two fraction objects
    subtract: function(fraction) {
      const result = Object.create(Fraction);
  
      result.numerator = this.numerator * fraction.denominator - fraction.numerator * this.denominator;
      result.denominator = this.denominator * fraction.denominator;
  
      return result;
    },
  
    // Function for multiplying two fraction objects
    multiply: function(fraction) {
      const result = Object.create(Fraction);
  
      result.numerator = this.numerator * fraction.numerator;
      result.denominator = this.denominator * fraction.denominator;
  
      return result;
    },
  
    // Function for dividing two fraction objects
    divide: function(fraction) {
      const result = Object.create(Fraction);
  
      result.numerator = this.numerator * fraction.denominator;
      result.denominator = this.denominator * fraction.numerator;
  
      return result;
    },
  
    // Function for simplifying a fraction object
    simplify: function() {
      const result = Object.create(Fraction);
  
      const gcd = (a, b) => {
        if (b === 0) {
          return a;
        }
        return gcd(b, a % b);
      };
  
      const divisor = gcd(this.numerator, this.denominator);
  
      result.numerator = this.numerator / divisor;
      result.denominator = this.denominator / divisor;
  
      return result;
    }
  };
  
  // Creating two fraction objects
  const fraction1 = Object.create(Fraction);
  fraction1.numerator = 2;
  fraction1.denominator = 4;
  
  const fraction2 = Object.create(Fraction);
  fraction2.numerator = 3;
  fraction2.denominator = 6;
  
  // Adding two fraction objects
  const sum = fraction1.add(fraction2);
  console.log('Sum:', sum.numerator, '/', sum.denominator); // Output: Sum: 1 / 1
  
  // Subtracting two fraction objects
  const difference = fraction1.subtract(fraction2);
  console.log('Difference:', difference.numerator, '/', difference.denominator); // Output: Difference: 0 / 1
  
  // Multiplying two fraction objects
  const product = fraction1.multiply(fraction2);
  console.log('Product:', product.numerator, '/', product.denominator); // Output: Product: 1 / 4
  
  // Dividing two fraction objects
  const quotient = fraction1.divide(fraction2);
  console.log('Quotient:', quotient.numerator, '/', quotient.denominator); // Output: Quotient: 1 / 1
  
  // Simplifying a fraction object
  const simplifiedFraction = fraction1.simplify();
  console.log('Simplified Fraction:', simplifiedFraction.numerator, '/', simplifiedFraction.denominator); // Output: Simplified Fraction: 1 / 2
  

