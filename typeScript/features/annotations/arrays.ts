const carmakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

const car = carmakers[0];
console.log(car);
const myCar = carmakers.pop();

const upperCase = carmakers.map((car: string): string => {
  return car.toUpperCase();
});
console.log(upperCase);

const importantDates: (Date | string)[] = [];
importantDates.push('2030-10-10');
importantDates.push(new Date());
console.log(importantDates);
