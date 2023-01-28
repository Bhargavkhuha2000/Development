/*Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!" */

const marks = {
  name: "mark miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  name: "john smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

marks.calcBMI();
john.calcBMI();

console.log(marks.BMI);
console.log(john.BMI);

if (marks.BMI > john.BMI) {
  console.log(
    `${marks.name} BMI (${marks.BMI}) is higher then ${john.name} (${john.BMI})!`
  );
} else if (marks.BMI < john.BMI) {
  console.log(
    `${john.name} BMI (${john.BMI}) is higher then ${marks.name} (${marks.BMI})!`
  );
}
