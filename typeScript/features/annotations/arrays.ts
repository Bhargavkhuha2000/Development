const carmakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

//help with inference when extracting values
const car = carmakers[0];
console.log(car);
const myCar = carmakers.pop();

//prevent incompatible value
// carmakers.push(100);//this is give the error

//help with 'map'
const upperCase = carmakers.map((car: string): string => {
  return car.toUpperCase();
});
console.log(upperCase);

//flexible types
const importantDates: (Date | string)[] = [];
importantDates.push('2030-10-10');
importantDates.push(new Date());
console.log(importantDates);
