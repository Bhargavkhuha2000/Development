const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};
type Drink = [string, boolean, number];
const pepsi: Drink = ['brown', true, 40];
// pepsi[0]=40// this given a error index 0 is string and we put value is number
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['browm', false, 0];

const carSpeces: [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354,
};
