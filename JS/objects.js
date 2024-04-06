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
