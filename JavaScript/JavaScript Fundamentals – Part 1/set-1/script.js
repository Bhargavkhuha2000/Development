let firstPursonName = "mark";
let secondPursonName = "john";
let firstPursonMass = 78;
let firstPursonHeight = 1.69;
let secondPursonMass = 92;
let secondPursonHeight = 1.95;

let firstPursonBMI = firstPursonMass / firstPursonHeight ** 2;
let secondPursonBMI = secondPursonMass / secondPursonHeight ** 2;

console.log("Mark BMI is " + firstPursonBMI);
console.log("John BMI is " + secondPursonBMI);
console.log(firstPursonBMI > secondPursonBMI);
