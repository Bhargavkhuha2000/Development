/*Your tasks:
1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
child class of the 'CarCl' class
2. Make the 'charge' property private
3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
methods of this class, and also update the 'brake' method in the 'CarCl'
class. Then experiment with chaining!
Test data:
§ Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%*/

const Car = function(make,speed){
  this.make =make;
  this.speed = speed;
};

Car.prototype.accelerate=function(){
  this.speed+=10;
  console.log(`${this.make} is going on ${this.speed} km/h`);
};

Car.prototype.break=function(){
  this.speed-=5;
  console.log(`${this.make} is going on ${this.speed} km/h`);
};
class EVCl extends Car{
  #charge;
constructor(make, speed, charge){
  super(make, speed);
  this.#charge = charge;
}

chargeBattery(chargeTo){
  this.#charge = chargeTo;
  return this;
}

accelerate(){
  this.speed +=20;
  this.#charge--;
  console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}`);
  return this;
  
}
}

const Rivian = new EVCl('rivian',120,23);
console.log(Rivian);
Rivian.accelerate().accelerate().chargeBattery(80).accelerate().accelerate().break();