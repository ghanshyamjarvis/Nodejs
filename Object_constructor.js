



var cars = new Object();

cars.make ="FORD"; //define an object
cars.model ="Mustang";
cars.Year = 1987;


console.log(cars.make);
console.log(cars.model);
console.log(cars.year);

console.log(cars["year"]);

//Example − Using a Function Constructor

function Car() {
  this.make = "Ford"
  this.model = "F123"
}
var obj = new Car()
console.log(obj.make)
console.log(obj.model)

